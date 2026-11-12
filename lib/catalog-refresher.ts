import { ChannelLineup, Video, YouTubeBumperClip } from './types';
import { CATEGORIES, SEED_LINEUPS } from './seed-catalog';
import { isYouTubeShort, MAX_SHORT_DURATION_SEC } from './youtube-shorts';

const MAX_VIDEOS_PER_CHANNEL = 200;
const MAX_VIDEOS_PER_CREATOR = 10;
const NEW_PER_CREATOR = 3;
const CONCURRENCY = 20;
const MIN_DYNAMIC_BUMPER_SEC = 15;
const MAX_DYNAMIC_BUMPER_SEC = 300;
const MAX_DYNAMIC_BUMPERS_PER_CATEGORY = 8;

// Official studio, brand, trailer & animation channels sourced for fresh widescreen dynamic bumpers (15s-300s)
export const BUMPER_SOURCE_CHANNELS: Record<string, { id: string; name: string }[]> = {
  tech: [
    { id: 'UCE_M8A5yxnLfW0KghEeajjw', name: 'Apple' },
    { id: 'UCBK_MzhanH8HamrFbABbe8Q', name: 'ASUS' },
    { id: 'UCG7J20LhUeLl6y_Emi7OJrA', name: 'The Studio' },
  ],
  games: [
    { id: 'UCjBp_7RuDBUYbd1LegWEJ8g', name: 'XBOX' },
    { id: 'UC-2Y8dQb0S6DtpxNgAKoJKA', name: 'PlayStation' },
    { id: 'UCGIY_O-8vW4rfX98KlMkvRg', name: 'Nintendo of America' },
  ],
  music: [
    { id: 'UC2pmfLm7iq6Ov1UwYrWYkZA', name: 'Vevo' },
    { id: 'UC2Qw1dzXDBAZPwS7zm37g8g', name: 'COLORS' },
    { id: 'UCP55DP1xXupgE8nm2mZG6MQ', name: 'MarvelMusicVEVO' },
  ],
  film: [
    { id: 'UCuPivVjnfNo4mb3Oog_frZg', name: 'A24' },
    { id: 'UCWOA1ZGywLbqmigxE4Qlvuw', name: 'Netflix' },
    { id: 'UC1Myj674wRVXB9I4c6Hm5zA', name: 'Apple TV' },
    { id: 'UCz97F7dMxBNOfGYu3rx8aCw', name: 'Sony Pictures Entertainment' },
  ],
  movies: [
    { id: 'UCuPivVjnfNo4mb3Oog_frZg', name: 'A24' },
    { id: 'UCWOA1ZGywLbqmigxE4Qlvuw', name: 'Netflix' },
    { id: 'UCz97F7dMxBNOfGYu3rx8aCw', name: 'Sony Pictures Entertainment' },
    { id: 'UCTMt7iMWa7jy0fNXIktwyLA', name: 'Omeleto' },
  ],
  cartoons: [
    { id: 'UCMsgXPD3wzzt8RxHJmXH7hQ', name: 'CartoonNetwork' },
    { id: 'UC_976xMxPgzIa290Hqtk-9g', name: 'Walt Disney Animation Studios' },
    { id: 'UCn_FAXem2-e3HQvmK-mOH4g', name: 'GLITCH' },
    { id: 'UCbKWv2x9t6u8yZoB3KcPtnw', name: 'Alan Becker' },
  ],
  cars: [
    { id: 'UC_BaxRhNREI_V0DVXjXDALA', name: 'Porsche' },
    { id: 'UC9ZqNBEjEU1NK475EvqmlLA', name: 'Polestar' },
  ],
  design: [
    { id: 'UCSMOQeBJ2RAnuFungnQOxLg', name: 'Blender' },
    { id: 'UCw5pljbSyZMq-wjm_notQLQ', name: 'Two Times Elliott' },
  ],
  sports: [
    { id: 'UC8VddvuHJzIj__Ud0rY2_ww', name: 'Red Bull' },
    { id: 'UC_kdjhHnkUbSImMrezjRyDQ', name: 'Olympics' },
  ],
  science: [
    { id: 'UCsXVk37bltHxD1rDPwtNM8Q', name: 'Kurzgesagt' },
    { id: 'UC513PdAP2-jWkJunTh5kXRw', name: 'Mark Rober' },
  ],
  news: [
    { id: 'UCIALMKvObZNtJ6AmdCLP7Lg', name: 'Bloomberg' },
    { id: 'UC16niRr50-MSBwiO3YDb3RA', name: 'BBC News' },
  ],
};

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

async function fetchPlaylistVideosViaYouTubeApi(
  playlistId: string,
  sourceChannelId: string,
  fallbackName: string,
  apiKey: string,
  minDurationSec: number,
  maxDurationSec: number,
  maxResults: number
): Promise<Video[]> {
  try {
    const plUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${encodeURIComponent(
      playlistId
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
      if (valid.length >= maxResults) break;
      const vid = item.id as string;
      const title = item.snippet?.title || '';
      const author = item.snippet?.channelTitle || fallbackName;
      const embeddable = item.status?.embeddable !== false;
      const privacy = item.status?.privacyStatus;
      const isLive =
        item.snippet?.liveBroadcastContent === 'live' ||
        item.snippet?.liveBroadcastContent === 'upcoming';
      const durationSec = parseIsoDuration(item.contentDetails?.duration || '');

      if (!embeddable || privacy !== 'public' || isLive) continue;
      if (durationSec < minDurationSec || durationSec > maxDurationSec) continue;
      if (/#shorts?\b|[\(\[]shorts?[\)\]]/i.test(title)) continue;
      if (durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(vid))) continue;

      valid.push({
        youtubeVideoId: vid,
        title,
        sourceChannelId: item.snippet?.channelId || sourceChannelId,
        sourceChannelTitle: author,
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: Math.round(durationSec),
      });
    }
    return valid;
  } catch {
    return [];
  }
}

async function fetchLatestViaYouTubeApi(
  creator: { id: string; name: string },
  apiKey: string,
  minDurationSec: number,
  maxDurationSec: number = 18000,
  maxResults: number = NEW_PER_CREATOR
): Promise<Video[]> {
  // Convert UC channel ID -> UU uploads playlist ID (free/1 unit playlistItems.list!)
  const uploadsPlaylistId = creator.id.startsWith('UC')
    ? `UU${creator.id.slice(2)}`
    : creator.id;
  return fetchPlaylistVideosViaYouTubeApi(
    uploadsPlaylistId,
    creator.id,
    creator.name,
    apiKey,
    minDurationSec,
    maxDurationSec,
    maxResults
  );
}

async function fetchLatestViaChannelPage(
  creator: { id: string; name: string },
  minDurationSec: number,
  maxDurationSec: number = 18000,
  maxResults: number = NEW_PER_CREATOR
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
      if (valid.length >= maxResults) break;

      const badgeMatch = html.match(
        new RegExp(
          `"text":"(\\d{1,2}:\\d{2}(?::\\d{2})?)","badgeStyle":"[^"]+","animationActivationTargetId":"${vid}"`
        )
      );
      const durationSec = parseDurationText(badgeMatch?.[1]);
      if (!durationSec || durationSec < minDurationSec || durationSec > maxDurationSec) continue;

      const oembedRes = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (!oembedRes.ok) continue;
      const oembed = await oembedRes.json();
      const title = String(oembed.title || '').trim();
      if (!title || /#shorts?\b|[\(\[]shorts?[\)\]]/i.test(title)) continue;
      if (durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(vid))) continue;

      valid.push({
        youtubeVideoId: vid,
        title,
        sourceChannelId: creator.id,
        sourceChannelTitle: String(oembed.author_name || creator.name),
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: Math.round(durationSec),
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
  const pointers = new Array(lists.length).fill(0);
  let hasMore = true;
  let cycle = 0;

  let seed = 0x85ebca6b;
  const nextRng = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  while (hasMore && result.length < limit) {
    hasMore = false;
    cycle++;

    // Occasional creator marathon block (approx 1 out of every 4 cycles has a 2-5 video marathon)
    const isMarathonCycle = cycle % 4 === 2;
    const marathonCreatorIdx = isMarathonCycle ? Math.floor(nextRng() * lists.length) : -1;
    const marathonLength = 2 + Math.floor(nextRng() * 4); // 2, 3, 4, or 5 consecutive videos

    for (let cIdx = 0; cIdx < lists.length; cIdx++) {
      const list = lists[cIdx];
      if (pointers[cIdx] < list.length) {
        hasMore = true;
        const takeCount = (cIdx === marathonCreatorIdx)
          ? Math.min(marathonLength, list.length - pointers[cIdx])
          : 1;

        for (let k = 0; k < takeCount; k++) {
          if (pointers[cIdx] < list.length) {
            const item = list[pointers[cIdx]++];
            if (!seen.has(item.youtubeVideoId)) {
              seen.add(item.youtubeVideoId);
              result.push(item);
              if (result.length >= limit) break;
            }
          }
        }
        if (result.length >= limit) break;
      }
    }
  }

  return result;
}

function parseEnvBumperPlaylists(): Record<string, string[]> {
  try {
    const raw = process.env.BUMPER_PLAYLIST_IDS?.trim();
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const out: Record<string, string[]> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (Array.isArray(v)) {
        out[k] = v.filter((id): id is string => typeof id === 'string' && id.trim().length > 0);
      }
    }
    return out;
  } catch {
    return {};
  }
}

export interface RefreshSummary {
  snapshot: Record<string, ChannelLineup>;
  dynamicBumpers: Record<string, YouTubeBumperClip[]>;
  categoriesUpdated: number;
  creatorsChecked: number;
  newVideosFound: number;
  dynamicBumpersFound: number;
  mode: 'youtube-data-api' | 'channel-page-oembed';
  refreshedAt: number;
}

/**
 * Refreshes all built-in channels from BROADCAST_CHANNELS_MAP, merging newly published
 * verified (>65s, non-Short, embeddable) videos with each channel's existing lineup,
 * and scours recent 15s-300s widescreen non-Short YouTube clips into dynamicBumpers.
 */
export async function refreshAllLineups(
  channelsMap: Record<string, { id: string; name: string }[]>,
  currentSnapshot?: Record<string, ChannelLineup> | null,
  currentDynamicBumpers?: Record<string, YouTubeBumperClip[]> | null
): Promise<RefreshSummary> {
  const apiKey = process.env.YOUTUBE_API_KEY?.trim() || '';
  const mode: RefreshSummary['mode'] = apiKey ? 'youtube-data-api' : 'channel-page-oembed';
  const baseLineups = currentSnapshot || SEED_LINEUPS;
  const envPlaylists = parseEnvBumperPlaylists();

  // Build deduplicated job list across all categories (show uploads + dynamic bumper sources)
  const jobs: { categoryId: string; creator: { id: string; name: string }; minDur: number }[] = [];
  const bumperJobs: { categoryId: string; sourceId: string; sourceName: string; isPlaylist: boolean }[] = [];

  for (const cat of CATEGORIES) {
    const creators = channelsMap[cat.id] || [];
    const minDur = cat.id === 'movies' ? 1200 : 65;
    for (const creator of creators) {
      jobs.push({ categoryId: cat.id, creator, minDur });
    }

    const bumperChannels =
      BUMPER_SOURCE_CHANNELS[cat.id] || creators.slice(0, 3);
    for (const bc of bumperChannels) {
      bumperJobs.push({
        categoryId: cat.id,
        sourceId: bc.id,
        sourceName: bc.name,
        isPlaylist: false,
      });
    }
    for (const plId of envPlaylists[cat.id] || []) {
      if (apiKey) {
        bumperJobs.push({
          categoryId: cat.id,
          sourceId: plId,
          sourceName: cat.name,
          isPlaylist: true,
        });
      }
    }
  }

  const fetchedByCategory = new Map<string, Map<string, Video[]>>();
  const fetchedBumpersByCategory = new Map<string, YouTubeBumperClip[]>();
  let cursor = 0;
  let bumperCursor = 0;

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

    while (bumperCursor < bumperJobs.length) {
      const idx = bumperCursor++;
      const { categoryId, sourceId, sourceName, isPlaylist } = bumperJobs[idx];
      const vids = isPlaylist
        ? await fetchPlaylistVideosViaYouTubeApi(
            sourceId,
            sourceId,
            sourceName,
            apiKey,
            MIN_DYNAMIC_BUMPER_SEC,
            MAX_DYNAMIC_BUMPER_SEC,
            4
          )
        : apiKey
        ? await fetchLatestViaYouTubeApi(
            { id: sourceId, name: sourceName },
            apiKey,
            MIN_DYNAMIC_BUMPER_SEC,
            MAX_DYNAMIC_BUMPER_SEC,
            4
          )
        : await fetchLatestViaChannelPage(
            { id: sourceId, name: sourceName },
            MIN_DYNAMIC_BUMPER_SEC,
            MAX_DYNAMIC_BUMPER_SEC,
            4
          );

      if (vids.length > 0) {
        if (!fetchedBumpersByCategory.has(categoryId)) {
          fetchedBumpersByCategory.set(categoryId, []);
        }
        const clips = fetchedBumpersByCategory.get(categoryId)!;
        for (const v of vids) {
          clips.push({
            youtubeVideoId: v.youtubeVideoId,
            label: v.title,
            durationSec: v.durationSec || 30,
            sourceChannelId: v.sourceChannelId,
            categoryId,
          });
        }
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  const refreshedAt = Date.now();
  const nextSnapshot: Record<string, ChannelLineup> = {};
  const nextDynamicBumpers: Record<string, YouTubeBumperClip[]> = {};
  let newVideosFound = 0;
  let dynamicBumpersFound = 0;

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

    // Merge & deduplicate verified dynamic bumpers (fresh clips first, cap to MAX_DYNAMIC_BUMPERS_PER_CATEGORY)
    const prevDynamic = (currentDynamicBumpers?.[cat.id] || []).filter(
      (c) => (c.durationSec || 0) >= MIN_DYNAMIC_BUMPER_SEC && (c.durationSec || 0) <= MAX_DYNAMIC_BUMPER_SEC
    );
    const freshDynamic = fetchedBumpersByCategory.get(cat.id) || [];
    const prevDynamicIds = new Set(prevDynamic.map((c) => c.youtubeVideoId));
    const mergedDynamic: YouTubeBumperClip[] = [];
    const seenDynamicIds = new Set<string>();

    for (const clip of [...freshDynamic, ...prevDynamic]) {
      if (!clip.youtubeVideoId || seenDynamicIds.has(clip.youtubeVideoId)) continue;
      seenDynamicIds.add(clip.youtubeVideoId);
      if (!prevDynamicIds.has(clip.youtubeVideoId)) {
        dynamicBumpersFound++;
      }
      mergedDynamic.push(clip);
      if (mergedDynamic.length >= MAX_DYNAMIC_BUMPERS_PER_CATEGORY) break;
    }

    if (mergedDynamic.length > 0) {
      nextDynamicBumpers[cat.id] = mergedDynamic;
    }
  }

  return {
    snapshot: nextSnapshot,
    dynamicBumpers: nextDynamicBumpers,
    categoriesUpdated: Object.keys(nextSnapshot).length,
    creatorsChecked: jobs.length,
    newVideosFound,
    dynamicBumpersFound,
    mode,
    refreshedAt,
  };
}
