import { Video } from './types';

/**
 * Deterministic pseudo-duration for videos where duration is not yet known from the player.
 * Yields realistic television programming runtimes between 8 mins (480s) and 24 mins (1440s).
 */
export function getVideoDuration(video: Video): number {
  if (video.durationSec && video.durationSec >= 60 && video.durationSec !== 600) {
    return video.durationSec;
  }

  // Deterministic hash based on YouTube video ID
  const id = video.youtubeVideoId || '';
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
 * Ensures all viewers tuning in at the same moment drop into the exact same show
 * and timestamp in progress, exactly like real TV.
 */
export function getLiveBroadcastState(
  videos: Video[],
  categoryId: string,
  nowEpochSec: number = Math.floor(Date.now() / 1000)
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
  // Position in this channel's looping 24-48 hour broadcast cycle
  const cycleTime = (nowEpochSec + channelOffset) % totalCycleSec;

  let accumulated = 0;
  for (let i = 0; i < videos.length; i++) {
    const dur = durations[i];
    if (cycleTime < accumulated + dur) {
      const seek = Math.floor(cycleTime - accumulated);
      return {
        videoIndex: i,
        seekSeconds: Math.max(0, seek),
        durationSec: dur,
        remainingSec: Math.max(0, dur - seek),
        currentVideo: videos[i],
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
