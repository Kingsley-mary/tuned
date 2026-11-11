import { Video } from './types';

// In-memory cache of true video durations captured from the YouTube player
const KNOWN_DURATIONS = new Map<string, number>();

/**
 * Record true runtime in seconds reported by the official YouTube player.
 */
export function recordVideoDuration(videoId: string, durationSec: number): void {
  if (videoId && durationSec > 0) {
    KNOWN_DURATIONS.set(videoId, Math.floor(durationSec));
  }
}

/**
 * Returns the true runtime if known, otherwise calculates a deterministic pseudo-duration.
 * Yields realistic television programming runtimes between 8 mins (480s) and 24 mins (1440s).
 */
export function getVideoDuration(video: Video): number {
  if (!video) return 600;

  if (video.durationSec && video.durationSec > 60 && video.durationSec !== 600) {
    return video.durationSec;
  }

  const id = video.youtubeVideoId || '';
  if (KNOWN_DURATIONS.has(id)) {
    return KNOWN_DURATIONS.get(id)!;
  }

  // Deterministic hash based on YouTube video ID
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }

  // Typical TV show length range: 480s (8m) to 1440s (24m)
  const minSec = 480;
  const maxSec = 1440;
  const dur = minSec + (Math.abs(hash) % (maxSec - minSec));
  return dur;
}

/**
 * Deterministic channel time offset so different TV channels aren't in lockstep.
 */
export function getChannelTimeOffset(categoryId: string): number {
  let hash = 0;
  for (let i = 0; i < categoryId.length; i++) {
    hash = (hash << 5) - hash + categoryId.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 86400; // Offset within a 24-hour broadcast day
}

export interface BroadcastState {
  videoIndex: number;
  seekSeconds: number;
  durationSec: number;
  remainingSec: number;
  currentVideo: Video | null;
}

export interface ScheduledProgram {
  videoIndex: number;
  video: Video;
  durationSec: number;
  startTimeMs: number;
  endTimeMs: number;
  startsInSec: number;
  isLive: boolean;
  progressPercent: number;
}

/**
 * Computes the real-time live television broadcast state for a channel's lineup
 * based on wall-clock time (Linear Broadcast Clock).
 *
 * Automatically filters out any shows the user has already completed in this session.
 */
export function getLiveBroadcastState(
  videos: Video[],
  categoryId: string,
  nowEpochSec: number = Math.floor(Date.now() / 1000),
  completedIds?: Set<string>,
  skippedAtSecMap?: Map<string, number>
): BroadcastState {
  if (!videos || videos.length === 0) {
    return {
      videoIndex: 0,
      seekSeconds: 0,
      durationSec: 600,
      remainingSec: 600,
      currentVideo: null,
    };
  }

  // Use stable catalog durations for cycle math so live player updates never scramble the modulo
  const durations = videos.map((v) => {
    if (v.durationSec && v.durationSec > 60 && v.durationSec !== 600) {
      return v.durationSec;
    }
    return getVideoDuration(v);
  });
  const totalCycleSec = durations.reduce((acc, d) => acc + d, 0);

  if (totalCycleSec <= 0) {
    return {
      videoIndex: 0,
      seekSeconds: 0,
      durationSec: 600,
      remainingSec: 600,
      currentVideo: videos[0],
    };
  }

  const channelOffset = getChannelTimeOffset(categoryId);
  const secondsInBroadcastWindow = nowEpochSec % 604800; // 7-day rolling broadcast window
  const cycleTime = (secondsInBroadcastWindow + channelOffset) % totalCycleSec;

  let accumulated = 0;
  for (let i = 0; i < videos.length; i++) {
    const dur = durations[i];
    if (cycleTime < accumulated + dur) {
      const seek = Math.floor(cycleTime - accumulated);
      const targetVid = videos[i];

      // If the user already completed/skipped this exact video in this session (or it's a short),
      // advance forward continuously from the timestamp it was skipped so returning never resets to 0:00.
      if ((completedIds && completedIds.has(targetVid.youtubeVideoId)) || dur <= 60) {
        const skippedAt = skippedAtSecMap?.get(targetVid.youtubeVideoId);
        let remainingElapsed = skippedAt ? Math.max(0, nowEpochSec - skippedAt) : seek;

        for (let j = 1; j < videos.length; j++) {
          const nextIdx = (i + j) % videos.length;
          const nextVid = videos[nextIdx];
          const nextDur = durations[nextIdx];
          if (!completedIds?.has(nextVid.youtubeVideoId) && nextDur > 60) {
            if (remainingElapsed < nextDur) {
              return {
                videoIndex: nextIdx,
                seekSeconds: Math.floor(remainingElapsed),
                durationSec: nextDur,
                remainingSec: Math.max(1, nextDur - Math.floor(remainingElapsed)),
                currentVideo: nextVid,
              };
            }
            remainingElapsed -= nextDur;
          }
        }
      }

      return {
        videoIndex: i,
        seekSeconds: Math.max(0, seek),
        durationSec: dur,
        remainingSec: Math.max(0, dur - seek),
        currentVideo: targetVid,
      };
    }
    accumulated += dur;
  }

  return {
    videoIndex: 0,
    seekSeconds: 0,
    durationSec: durations[0],
    remainingSec: durations[0],
    currentVideo: videos[0],
  };
}

/**
 * Advances a channel's playback forward by elapsed time when a user returns to a channel.
 * Guarantees that time NEVER moves backwards and completed shows are never replayed.
 */
export function advanceChannelPlayback(
  videos: Video[],
  startIdx: number,
  startSeek: number,
  elapsedSec: number,
  completedIds: Set<string>
): { videoIndex: number; seekSeconds: number } {
  if (!videos || videos.length === 0) return { videoIndex: 0, seekSeconds: 0 };

  let idx = startIdx % videos.length;
  let seek = startSeek + Math.max(0, elapsedSec);

  let steps = 0;
  while (steps < videos.length) {
    const vid = videos[idx];
    const dur = getVideoDuration(vid);

    // If already marked as completed or detected as a short, skip forward immediately
    if (completedIds.has(vid.youtubeVideoId) || dur <= 60) {
      seek = 0;
      idx = (idx + 1) % videos.length;
      steps++;
      continue;
    }

    if (seek < dur) {
      return { videoIndex: idx, seekSeconds: Math.floor(seek) };
    }

    // Video runtime finished while away
    seek -= dur;
    completedIds.add(vid.youtubeVideoId);
    idx = (idx + 1) % videos.length;
    steps++;
  }

  return { videoIndex: idx, seekSeconds: 0 };
}

/**
 * Builds a linear TV schedule starting from a channel's current broadcast state,
 * calculating exact wall-clock start/end times for the current show and upcoming programs.
 */
export function buildChannelSchedule(
  videos: Video[],
  activeVideoIndex: number,
  activeSeekSeconds: number,
  count: number = 12,
  nowMs: number = Date.now()
): ScheduledProgram[] {
  if (!videos || videos.length === 0) return [];

  const schedule: ScheduledProgram[] = [];
  const safeStartIdx = ((activeVideoIndex % videos.length) + videos.length) % videos.length;
  const activeVideo = videos[safeStartIdx];
  const activeDur = getVideoDuration(activeVideo);
  const clampedSeek = Math.min(Math.max(0, activeSeekSeconds), Math.max(0, activeDur - 1));
  const remainingActiveSec = Math.max(1, activeDur - clampedSeek);

  // Current live show
  const currentStartMs = nowMs - clampedSeek * 1000;
  const currentEndMs = nowMs + remainingActiveSec * 1000;

  schedule.push({
    videoIndex: safeStartIdx,
    video: activeVideo,
    durationSec: activeDur,
    startTimeMs: currentStartMs,
    endTimeMs: currentEndMs,
    startsInSec: 0,
    isLive: true,
    progressPercent: activeDur > 0 ? Math.min(100, (clampedSeek / activeDur) * 100) : 0,
  });

  let cursorMs = currentEndMs;
  let accumulatedWaitSec = remainingActiveSec;

  const limit = Math.min(count, videos.length);
  for (let offset = 1; offset < limit; offset++) {
    const idx = (safeStartIdx + offset) % videos.length;
    const vid = videos[idx];
    const dur = getVideoDuration(vid);
    const startMs = cursorMs;
    const endMs = startMs + dur * 1000;

    schedule.push({
      videoIndex: idx,
      video: vid,
      durationSec: dur,
      startTimeMs: startMs,
      endTimeMs: endMs,
      startsInSec: accumulatedWaitSec,
      isLive: false,
      progressPercent: 0,
    });

    cursorMs = endMs;
    accumulatedWaitSec += dur;
  }

  return schedule;
}
