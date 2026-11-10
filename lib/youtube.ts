import { canMakeApiCall, recordApiUnits } from './quota';
import { getCachedLineup, setCachedLineup, getCachedPlaylistId, setCachedPlaylistId, getStaleLineup } from './cache';
import { SEED_LINEUPS, CATEGORIES } from './seed-catalog';
import { ChannelLineup, Video } from './types';

const API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

// Parse ISO 8601 duration e.g. "PT15M33S" to seconds
export function parseDuration(durationStr: string): number {
  if (!durationStr) return 0;
  const match = durationStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);
  return hours * 3600 + minutes * 60 + seconds;
}

// Fetch uploads playlist ID for a channel (1 unit, cached permanently)
export async function getUploadsPlaylistId(channelId: string): Promise<string | null> {
  const cached = getCachedPlaylistId(channelId);
  if (cached) return cached;

  if (!API_KEY || !canMakeApiCall(1)) return null;

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/channels?part=contentDetails&id=${encodeURIComponent(channelId)}&key=${API_KEY}`
    );
    recordApiUnits(1);
    if (!res.ok) return null;
    const data = await res.json();
    const uploadsId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (uploadsId) {
      setCachedPlaylistId(channelId, uploadsId);
      return uploadsId;
    }
  } catch (err) {
    console.error('Error fetching uploads playlist ID:', err);
  }
  return null;
}

// Fetch recent videos from an uploads playlist (1 unit)
export async function getPlaylistVideos(playlistId: string, maxResults: number = 15): Promise<string[]> {
  if (!API_KEY || !canMakeApiCall(1)) return [];

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/playlistItems?part=contentDetails&maxResults=${maxResults}&playlistId=${encodeURIComponent(
        playlistId
      )}&key=${API_KEY}`
    );
    recordApiUnits(1);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item: any) => item.contentDetails?.videoId).filter(Boolean);
  } catch (err) {
    console.error('Error fetching playlist items:', err);
    return [];
  }
}

// Fetch video details in batch of up to 50 (1 unit) & filter embeddable
export async function getVideoDetails(videoIds: string[]): Promise<Video[]> {
  if (!videoIds.length || !API_KEY || !canMakeApiCall(1)) return [];

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails,status&id=${encodeURIComponent(
        videoIds.join(',')
      )}&key=${API_KEY}`
    );
    recordApiUnits(1);
    if (!res.ok) return [];
    const data = await res.json();
    const items = data.items || [];

    const videos: Video[] = [];
    for (const item of items) {
      // PRD Section 8 & 9: Only keep videos that are embeddable!
      if (item.status?.embeddable === false) continue;

      const durationSec = parseDuration(item.contentDetails?.duration || '');
      // Skip shorts or ultra-short clips (< 60s) or broken durations
      if (durationSec < 60) continue;

      const thumb =
        item.snippet?.thumbnails?.high?.url ||
        item.snippet?.thumbnails?.medium?.url ||
        `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

      videos.push({
        youtubeVideoId: item.id,
        title: item.snippet?.title || 'Untitled',
        sourceChannelId: item.snippet?.channelId || '',
        sourceChannelTitle: item.snippet?.channelTitle || 'YouTube Creator',
        thumbnailUrl: thumb,
        durationSec,
        publishedAt: item.snippet?.publishedAt,
        embeddable: true,
        fetchedAt: Date.now(),
      });
    }
    return videos;
  } catch (err) {
    console.error('Error fetching video details:', err);
    return [];
  }
}

// Fetch or build lineup for category
export async function getLineupForCategory(categoryId: string): Promise<ChannelLineup> {
  // 1. Fresh cache check
  const cached = getCachedLineup(categoryId);
  if (cached) return cached;

  const categoryMeta = CATEGORIES.find((c) => c.id === categoryId);
  const hue = categoryMeta?.hue ?? 355;
  const categoryName = categoryMeta?.name ?? categoryId;

  // 2. If no API key or quota guarded, serve high quality seed lineup
  if (!API_KEY || !canMakeApiCall(2)) {
    const seed = SEED_LINEUPS[categoryId] || {
      categoryId,
      categoryName,
      hue,
      builtAt: Date.now(),
      videos: SEED_LINEUPS.tech.videos,
    };
    setCachedLineup(categoryId, seed);
    return seed;
  }

  // 3. Try to fetch from YouTube API if channel IDs provided
  const sourceChannelIds = categoryMeta?.sourceChannelIds || [];
  if (sourceChannelIds.length > 0) {
    try {
      const allVideoIds: string[] = [];
      for (const channelId of sourceChannelIds.slice(0, 5)) {
        const playlistId = await getUploadsPlaylistId(channelId);
        if (playlistId) {
          const ids = await getPlaylistVideos(playlistId, 5);
          allVideoIds.push(...ids);
        }
      }

      if (allVideoIds.length > 0) {
        const uniqueIds = Array.from(new Set(allVideoIds)).slice(0, 50);
        const videos = await getVideoDetails(uniqueIds);
        if (videos.length >= 5) {
          const lineup: ChannelLineup = {
            categoryId,
            categoryName,
            hue,
            videos: videos.slice(0, 20),
            builtAt: Date.now(),
          };
          setCachedLineup(categoryId, lineup);
          return lineup;
        }
      }
    } catch (e) {
      console.warn(`Dynamic lineup fetch failed for ${categoryId}, using seed fallback:`, e);
    }
  }

  // Fallback to seed catalog
  const stale = getStaleLineup(categoryId);
  if (stale && stale.videos.length >= 5) return stale;

  const fallback = SEED_LINEUPS[categoryId] || SEED_LINEUPS.tech;
  setCachedLineup(categoryId, fallback);
  return fallback;
}

// Resolve YouTube channel from link or @handle
export async function resolveYouTubeChannel(
  query: string
): Promise<{ channelId: string; title: string; uploadsPlaylistId?: string } | { error: string }> {
  const clean = query.trim();
  if (!clean) return { error: 'Please enter a channel link or @handle.' };

  // Parse @handle or channel ID from various formats
  let handleMatch = clean.match(/(?:@)([a-zA-Z0-9_.-]+)/);
  let idMatch = clean.match(/(?:channel\/)([a-zA-Z0-9_-]{20,})/);
  let userMatch = clean.match(/(?:c\/|user\/)([a-zA-Z0-9_-]+)/);

  if (!handleMatch && !idMatch && !userMatch) {
    // If user entered bare text like "mkbhd" or "@mkbhd"
    if (/^@?[a-zA-Z0-9_.-]+$/.test(clean)) {
      handleMatch = [clean, clean.replace(/^@/, '')];
    } else {
      return { error: 'That doesn’t look like a valid YouTube channel link or @handle.' };
    }
  }

  if (!API_KEY) {
    // If no API key configured, resolve mock gracefully
    const name = handleMatch ? handleMatch[1] : userMatch ? userMatch[1] : idMatch ? idMatch[1] : 'channel';
    return {
      channelId: `custom_${name.toLowerCase()}`,
      title: name,
    };
  }

  if (!canMakeApiCall(1)) {
    return { error: 'YouTube API daily quota is currently guarded. Try again later.' };
  }

  try {
    let url = '';
    if (handleMatch) {
      url = `${YOUTUBE_API_BASE}/channels?part=snippet,contentDetails&forHandle=${encodeURIComponent(
        handleMatch[1]
      )}&key=${API_KEY}`;
    } else if (idMatch) {
      url = `${YOUTUBE_API_BASE}/channels?part=snippet,contentDetails&id=${encodeURIComponent(idMatch[1])}&key=${API_KEY}`;
    } else if (userMatch) {
      url = `${YOUTUBE_API_BASE}/channels?part=snippet,contentDetails&forUsername=${encodeURIComponent(
        userMatch[1]
      )}&key=${API_KEY}`;
    }

    const res = await fetch(url);
    recordApiUnits(1);
    if (!res.ok) {
      return { error: 'Could not find a YouTube channel matching that input.' };
    }
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) {
      return { error: 'No channel found for that handle or URL.' };
    }

    return {
      channelId: item.id,
      title: item.snippet?.title || 'Custom Channel',
      uploadsPlaylistId: item.contentDetails?.relatedPlaylists?.uploads,
    };
  } catch (err) {
    return { error: 'Failed to contact YouTube servers. Check your connection.' };
  }
}
