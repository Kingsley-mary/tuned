import { Video } from './types';

/**
 * Deterministic television program runtime calculation.
 * Guaranteed to produce the exact same integer second value across every device on Earth.
 */
export function getDeterministicDuration(video: Video): number {
  if (!video) return 600;

  if (video.durationSec && video.durationSec > 60) {
    return Math.floor(video.durationSec);
  }

  const id = video.youtubeVideoId || '';
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }

  // Typical TV show length range: 480s (8m) to 1440s (24m)
  const minSec = 480;
  const maxSec = 1440;
  return minSec + (Math.abs(hash) % (maxSec - minSec));
}

/**
 * Returns the true runtime in integer seconds if known (> 60s),
 * otherwise calculates a deterministic pseudo-duration (480s - 1440s).
 */
export function getVideoDuration(video: Video): number {
  if (!video) return 600;

  if (video.durationSec && video.durationSec > 60) {
    return Math.floor(video.durationSec);
  }

  return getDeterministicDuration(video);
}
