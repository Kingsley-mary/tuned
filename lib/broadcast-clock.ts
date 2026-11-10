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

  const id = video.youtubeVideoId || '';
  if (KNOWN_DURATIONS.has(id)) {
    return KNOWN_DURATIONS.get(id)!;
  }

  if (video.durationSec && video.durationSec >= 60 && video.durationSec !== 600) {
    return video.durationSec;
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
  completedIds?: Set<string>
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

  const durations = videos.map((v) => getVideoDuration(v));
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
  const cycleTime = (nowEpochSec + channelOffset) % totalCycleSec;

  let accumulated = 0;
  for (let i = 0; i < videos.length; i++) {
    const dur = durations[i];
    if (cycleTime < accumulated + dur) {
      const seek = Math.floor(cycleTime - accumulated);
      const targetVid = videos[i];

      // If the user already completed this exact video in this session (or it's a short), skip forward!
      if ((completedIds && completedIds.has(targetVid.youtubeVideoId)) || dur <= 60) {
        for (let j = 1; j < videos.length; j++) {
          const nextIdx = (i + j) % videos.length;
          const nextDur = durations[nextIdx];
          if (!completedIds?.has(videos[nextIdx].youtubeVideoId) && nextDur > 60) {
            return {
              videoIndex: nextIdx,
              seekSeconds: 0,
              durationSec: nextDur,
              remainingSec: nextDur,
              currentVideo: videos[nextIdx],
            };
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
