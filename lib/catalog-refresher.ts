import { ChannelLineup, Video } from './types';
import { CATEGORIES, SEED_LINEUPS } from './seed-catalog';
import { isYouTubeShort, MAX_SHORT_DURATION_SEC } from './youtube-shorts';

const MAX_VIDEOS_PER_CHANNEL = 200;
const MAX_VIDEOS_PER_CREATOR = 10;
const NEW_PER_CREATOR = 3;
const CONCURRENCY = 20;

function parseDurationText(txt?: string | null): number {
  if (!txt || !/^\d{1,2}:\d{2}(?::\d{2})?$/.test(txt)) return 0;
  const parts = txt.split(':').map((n) => parseInt(n, 10));
  if (parts.some(isNaN)) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
}

function parseIsoDuration(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  const h = parseInt(m[1] || '0', 10);
  const mins = parseInt(m[2] || '0', 10);
  const s = parseInt(m[3] || '0', 10);
  return h * 3600 + mins * 60 + s;
}

async function fetchLatestViaYouTubeApi(
  creator: { id: string; name: string },
  apiKey: string,
  minDurationSec: number
): Promise<Video[]> {
  try {
    // Convert UC channel ID -> UU uploads playlist ID (free/1 unit playlistItems.list!)
    const uploadsPlaylistId = creator.id.startsWith('UC')
      ? `UU${creator.id.slice(2)}`
      : creator.id;

    const plUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${encodeURIComponent(
      uploadsPlaylistId
    )}&maxResults=${MAX_VIDEOS_PER_CREATOR}&key=${encodeURIComponent(apiKey)}`;
    const plRes = await fetch(plUrl, { signal: AbortSignal.timeout(7000) });
    if (!plRes.ok) return [];
    const plData = await plRes.json();
    const videoIds: string[] = (plData.items || [])
      .map((item: any) => item?.contentDetails?.videoId)
      .filter((id: unknown): id is string => typeof id === 'string' && id.length === 11);

    if (videoIds.length === 0) return [];

    const vidsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,status,liveStreamingDetails&id=${videoIds.join(
      ','
    )}&key=${encodeURIComponent(apiKey)}`;
    const vidsRes = await fetch(vidsUrl, { signal: AbortSignal.timeout(7000) });
    if (!vidsRes.ok) return [];
    const vidsData = await vidsRes.json();

    const valid: Video[] = [];
    for (const item of vidsData.items || []) {
      if (valid.length >= NEW_PER_CREATOR) break;
      const vid = item.id as string;
      const title = item.snippet?.title || '';
      const author = item.snippet?.channelTitle || creator.name;
      const embeddable = item.status?.embeddable !== false;
      const privacy = item.status?.privacyStatus;
      const isLive =
        item.snippet?.liveBroadcastContent === 'live' ||
        item.snippet?.liveBroadcastContent === 'upcoming';
      const durationSec = parseIsoDuration(item.contentDetails?.duration || '');

      if (!embeddable || privacy !== 'public' || isLive) continue;
      if (durationSec < minDurationSec || durationSec > 18000) continue;
      if (/#shorts?\b/i.test(title)) continue;
      if (durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(vid))) continue;

      valid.push({
        youtubeVideoId: vid,
        title,
        sourceChannelId: creator.id,
        sourceChannelTitle: author,
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec,
      });
    }
    return valid;
  } catch {
    return [];
  }
}

async function fetchLatestViaChannelPage(
  creator: { id: string; name: string },
  minDurationSec: number
): Promise<Video[]> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${creator.id}/videos`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Cookie: 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const html = await res.text();
    const candidateIds = Array.from(
      new Set([...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map((m) => m[1]))
    ).slice(0, MAX_VIDEOS_PER_CREATOR);

    const valid: Video[] = [];
    for (const vid of candidateIds) {
      if (valid.length >= NEW_PER_CREATOR) break;

      const badgeMatch = html.match(
        new RegExp(
          `"text":"(\\d{1,2}:\\d{2}(?::\\d{2})?)","badgeStyle":"[^"]+","animationActivationTargetId":"${vid}"`
        )
      );
      const durationSec = parseDurationText(badgeMatch?.[1]);
      if (!durationSec || durationSec < minDurationSec || durationSec > 18000) continue;

      const oembedRes = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (!oembedRes.ok) continue;
      const oembed = await oembedRes.json();
      const title = String(oembed.title || '').trim();
      if (!title || /#shorts?\b/i.test(title)) continue;
      if (durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(vid))) continue;

      valid.push({
        youtubeVideoId: vid,
        title,
        sourceChannelId: creator.id,
        sourceChannelTitle: String(oembed.author_name || creator.name),
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec,
      });
    }
    return valid;
  } catch {
    return [];
  }
}

function roundRobinInterleave(lists: Video[][], limit: number): Video[] {
  const result: Video[] = [];
  const seen = new Set<string>();
  let round = 0;
  let hasMore = true;

  while (hasMore && result.length < limit) {
    hasMore = false;
    for (const list of lists) {
      if (round < list.length) {
        const item = list[round];
        if (!seen.has(item.youtubeVideoId)) {
          seen.add(item.youtubeVideoId);
          result.push(item);
          if (result.length >= limit) break;
        }
        hasMore = true;
      }
    }
    round++;
  }

  return result;
}

export interface RefreshSummary {
  snapshot: Record<string, ChannelLineup>;
  categoriesUpdated: number;
  creatorsChecked: number;
  newVideosFound: number;
  mode: 'youtube-data-api' | 'channel-page-oembed';
  refreshedAt: number;
}

/**
 * Refreshes all built-in channels from BROADCAST_CHANNELS_MAP, merging newly published
 * verified (>65s, non-Short, embeddable) videos with each channel's existing lineup.
 */
export async function refreshAllLineups(
  channelsMap: Record<string, { id: string; name: string }[]>,
  currentSnapshot?: Record<string, ChannelLineup> | null
): Promise<RefreshSummary> {
  const apiKey = process.env.YOUTUBE_API_KEY?.trim() || '';
  const mode: RefreshSummary['mode'] = apiKey ? 'youtube-data-api' : 'channel-page-oembed';
  const baseLineups = currentSnapshot || SEED_LINEUPS;

  // Build deduplicated job list across all categories
  const jobs: { categoryId: string; creator: { id: string; name: string }; minDur: number }[] = [];
  for (const cat of CATEGORIES) {
    const creators = channelsMap[cat.id] || [];
    const minDur = cat.id === 'movies' ? 1200 : 65;
    for (const creator of creators) {
      jobs.push({ categoryId: cat.id, creator, minDur });
    }
  }

  const fetchedByCategory = new Map<string, Map<string, Video[]>>();
  let cursor = 0;

  async function worker() {
    while (cursor < jobs.length) {
      const idx = cursor++;
      const { categoryId, creator, minDur } = jobs[idx];
      const vids = apiKey
        ? await fetchLatestViaYouTubeApi(creator, apiKey, minDur)
        : await fetchLatestViaChannelPage(creator, minDur);

      if (vids.length > 0) {
        if (!fetchedByCategory.has(categoryId)) {
          fetchedByCategory.set(categoryId, new Map());
        }
        fetchedByCategory.get(categoryId)!.set(creator.id, vids);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  const refreshedAt = Date.now();
  const nextSnapshot: Record<string, ChannelLineup> = {};
  let newVideosFound = 0;

  for (const cat of CATEGORIES) {
    const allowedCreatorIds = new Set((channelsMap[cat.id] || []).map((c) => c.id));
    const existingLineup = baseLineups[cat.id] || SEED_LINEUPS[cat.id];
    const existingVideos = (existingLineup?.videos || []).filter(
      (v) =>
        allowedCreatorIds.has(v.sourceChannelId) &&
        v.durationSec &&
        v.durationSec > 60 &&
        v.durationSec !== 600
    );
    const existingIds = new Set(existingVideos.map((v) => v.youtubeVideoId));

    // Group existing videos per creator
    const perCreatorMap = new Map<string, Video[]>();
    for (const v of existingVideos) {
      if (!perCreatorMap.has(v.sourceChannelId)) {
        perCreatorMap.set(v.sourceChannelId, []);
      }
      perCreatorMap.get(v.sourceChannelId)!.push(v);
    }

    // Prepend any newly discovered videos per creator so fresh uploads rotate into schedule first
    const freshCreators = fetchedByCategory.get(cat.id);
    if (freshCreators) {
      for (const [creatorId, freshList] of freshCreators.entries()) {
        const oldList = perCreatorMap.get(creatorId) || [];
        const brandNew = freshList.filter((v) => !existingIds.has(v.youtubeVideoId));
        newVideosFound += brandNew.length;
        const mergedCreatorList = [...brandNew, ...oldList].slice(0, MAX_VIDEOS_PER_CREATOR);
        perCreatorMap.set(creatorId, mergedCreatorList);
      }
    }

    const creatorLists = [...perCreatorMap.values()];
    const finalVideos =
      creatorLists.length > 0 ? roundRobinInterleave(creatorLists, MAX_VIDEOS_PER_CHANNEL) : existingVideos;

    nextSnapshot[cat.id] = {
      categoryId: cat.id,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: refreshedAt,
      videos: finalVideos,
    };
  }

  return {
    snapshot: nextSnapshot,
    categoriesUpdated: Object.keys(nextSnapshot).length,
    creatorsChecked: jobs.length,
    newVideosFound,
    mode,
    refreshedAt,
  };
}
