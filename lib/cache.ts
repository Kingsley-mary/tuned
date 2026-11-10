import { ChannelLineup } from './types';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

// In-memory memory cache
const lineupCache = new Map<string, CacheEntry<ChannelLineup>>();
const playlistIdCache = new Map<string, string>(); // Cached permanently per PRD Section 8

export function getCachedLineup(categoryId: string): ChannelLineup | null {
  const entry = lineupCache.get(categoryId);
  if (!entry) return null;
  const isFresh = Date.now() - entry.timestamp < SIX_HOURS_MS;
  if (!isFresh) {
    // Stale entry still accessible if needed for fallback
    return null;
  }
  return entry.data;
}

export function getStaleLineup(categoryId: string): ChannelLineup | null {
  const entry = lineupCache.get(categoryId);
  return entry ? entry.data : null;
}

export function setCachedLineup(categoryId: string, lineup: ChannelLineup): void {
  lineupCache.set(categoryId, {
    data: lineup,
    timestamp: Date.now(),
  });
}

export function getCachedPlaylistId(channelId: string): string | null {
  return playlistIdCache.get(channelId) || null;
}

export function setCachedPlaylistId(channelId: string, playlistId: string): void {
  playlistIdCache.set(channelId, playlistId);
}
