import fs from 'fs';

const channels = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));

const fileContent = `import { ChannelLineup, Video } from './types';
import { CATEGORIES } from './seed-catalog';

// Comprehensive roster of verified top creators per television channel (11-14 creators per channel)
export const BROADCAST_CHANNELS_MAP: Record<string, { id: string; name: string }[]> = ${JSON.stringify(channels, null, 2)};

// In-memory cache with 15-minute revalidation
interface CachedPool {
  lineup: ChannelLineup;
  timestamp: number;
}
const MEMORY_CACHE = new Map<string, CachedPool>();
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Fetch recent uploads from an official YouTube channel feed
async function fetchChannelUploads(channelId: string, channelName: string): Promise<Video[]> {
  try {
    const res = await fetch(\`https://www.youtube.com/feeds/videos.xml?channel_id=\${channelId}\`, {
      next: { revalidate: 900 },
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = [...xml.matchAll(/<entry>([\\s\\S]*?)<\\/entry>/g)];
    const videos: Video[] = [];

    for (const entry of entries) {
      const entryText = entry[1];
      const vid = entryText.match(/<yt:videoId>(.*?)<\\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = entryText.match(/<title>(.*?)<\\/title>/)?.[1]?.trim();
      const author = entryText.match(/<author>\\s*<name>(.*?)<\\/name>/)?.[1]?.trim() || channelName;

      if (!vid || !rawTitle) continue;

      // Filter out YouTube Shorts
      const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
      const desc = entryText.match(/<media:description>([\\s\\S]*?)<\\/media:description>/)?.[1] || '';

      if (link.includes('/shorts/') || entryText.includes('/shorts/')) {
        continue;
      }
      if (/#shorts?\\b|[\\(\\[]shorts?[\\)\\]]|(\\bshorts\\b.*#)/i.test(rawTitle) ||
          rawTitle.toLowerCase().includes('#shorts') ||
          rawTitle.toLowerCase().includes('#short')) {
        continue;
      }
      if (/#shorts?\\b|youtube\\.com\\/shorts/i.test(desc)) {
        continue;
      }

      // Clean HTML entities if any
      const cleanTitle = rawTitle
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

      videos.push({
        youtubeVideoId: vid,
        title: cleanTitle,
        sourceChannelId: channelId,
        sourceChannelTitle: author,
        thumbnailUrl: \`https://i.ytimg.com/vi/\${vid}/hqdefault.jpg\`,
        durationSec: 600
      });
    }

    return videos;
  } catch (err) {
    console.warn(\`Failed to fetch channel feed for \${channelName} (\${channelId}):\`, err);
    return [];
  }
}

// Interleave multiple arrays round-robin so adjacent videos come from different creators
function roundRobinInterleave(lists: Video[][]): Video[] {
  const result: Video[] = [];
  const seenIds = new Set<string>();
  let hasMore = true;
  let round = 0;

  while (hasMore) {
    hasMore = false;
    for (const list of lists) {
      if (round < list.length) {
        const item = list[round];
        if (!seenIds.has(item.youtubeVideoId)) {
          seenIds.add(item.youtubeVideoId);
          result.push(item);
        }
        hasMore = true;
      }
    }
    round++;
  }

  return result;
}

// Master function: live-scours the creator universe for a given category
export async function getLineupForCategory(categoryId: string): Promise<ChannelLineup> {
  // Check cache first for instant sub-second response
  const cached = MEMORY_CACHE.get(categoryId);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.lineup;
  }

  const categoryMeta = CATEGORIES.find(c => c.id === categoryId);
  const categoryName = categoryMeta?.name || 'Channel';
  const categoryHue = categoryMeta?.hue || 200;

  const creators = BROADCAST_CHANNELS_MAP[categoryId] || [];

  try {
    // Scour all creators in parallel live from YouTube
    const channelLists = await Promise.all(
      creators.map(c => fetchChannelUploads(c.id, c.name))
    );

    const validLists = channelLists.filter(list => list.length > 0);

    if (validLists.length > 0) {
      // Interleave round-robin across creators
      const interleaved = roundRobinInterleave(validLists);

      const lineup: ChannelLineup = {
        categoryId,
        categoryName,
        hue: categoryHue,
        builtAt: Date.now(),
        videos: interleaved
      };

      MEMORY_CACHE.set(categoryId, { lineup, timestamp: Date.now() });
      return lineup;
    }
  } catch (err) {
    console.error(\`Live scouring error for \${categoryId}:\`, err);
  }

  // Stale cache fallback if available
  if (cached) return cached.lineup;

  // Empty fallback
  return {
    categoryId,
    categoryName,
    hue: categoryHue,
    builtAt: Date.now(),
    videos: []
  };
}

// Resolve YouTube channel handle
export async function resolveHandleToChannelId(handle: string): Promise<string | null> {
  const clean = handle.replace(/^@/, '').trim();
  try {
    const res = await fetch(\`https://www.youtube.com/@\${clean}\`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const m = html.match(/<meta itemprop="identifier" content="(UC[\\w-]{22})">/) ||
              html.match(/<meta itemprop="channelId" content="(UC[\\w-]{22})">/) ||
              html.match(/"channelId":"(UC[\\w-]{22})"/) ||
              html.match(/"externalId":"(UC[\\w-]{22})"/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

// Higher-level resolver for custom channel input
export async function resolveYouTubeChannel(
  query: string
): Promise<{ channelId: string; title: string } | { error: string }> {
  const clean = query.trim();
  if (!clean) return { error: 'Please enter a channel link or @handle.' };

  const handle = clean.replace(/^.*youtube\\.com\\/@?/, '').replace(/^@/, '');
  const channelId = await resolveHandleToChannelId(handle);
  if (!channelId) {
    return { error: 'Could not find a YouTube channel matching that input.' };
  }
  return {
    channelId,
    title: handle,
  };
}
`;

fs.writeFileSync('lib/youtube.ts', fileContent);
console.log('Successfully wrote updated lib/youtube.ts!');
