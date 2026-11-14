import { ChannelLineup, Video, YouTubeBumperClip } from './types';
import { CATEGORIES, SEED_LINEUPS } from './seed-catalog';
import { isYouTubeShort, MAX_SHORT_DURATION_SEC } from './youtube-shorts';

const MAX_VIDEOS_PER_CHANNEL = 650;
const MAX_VIDEOS_PER_CREATOR = 10;
const NEW_PER_CREATOR = 3;
const CONCURRENCY = 20;
const MIN_DYNAMIC_BUMPER_SEC = 15;
const MAX_DYNAMIC_BUMPER_SEC = 300;
const MAX_DYNAMIC_BUMPERS_PER_CATEGORY = 8;
const YOUTUBE_PAGE_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  Cookie: 'SOCS=CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMxMDI0LjA4X3AxGgJlbiACGgYIgJnPpwY',
  'Accept-Language': 'en-US,en;q=0.9',
};

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
  if (!txt) return 0;
  const trimmed = txt.trim();
  if (!/^\d{1,2}:\d{2}(?::\d{2})?$/.test(trimmed)) return 0;
  const parts = trimmed.split(':').map((n) => parseInt(n, 10));
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

function isShortTitle(title: string): boolean {
  return /#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(title);
}

function prioritizeMovieDuration(videos: Video[]): Video[] {
  const tier = (sec: number) => (sec >= 1200 ? 2 : sec >= 300 ? 1 : 0);
  return [...videos].sort((a, b) => tier(b.durationSec || 0) - tier(a.durationSec || 0));
}

function cleanHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

async function fetchPlaylistVideosViaYouTubeApi(
  playlistId: string,
  sourceChannelId: string,
  fallbackName: string,
  apiKey: string,
  minDurationSec: number,
  maxDurationSec: number,
  maxResults: number,
  preferLongMovies: boolean = false
): Promise<Video[]> {
  try {
    // Request up to 50 items so filtering out YouTube Shorts does not starve long-form slots
    const plUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${encodeURIComponent(
      playlistId
    )}&maxResults=50&key=${encodeURIComponent(apiKey)}`;
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
      if (isShortTitle(title)) continue;
      if (durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(vid))) continue;

      valid.push({
        youtubeVideoId: vid,
        title,
        sourceChannelId: item.snippet?.channelId || sourceChannelId,
        sourceChannelTitle: author,
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: Math.round(durationSec),
      });
      if (!preferLongMovies && valid.length >= maxResults) break;
    }
    const ordered = preferLongMovies ? prioritizeMovieDuration(valid) : valid;
    return ordered.slice(0, maxResults);
  } catch {
    return [];
  }
}

async function fetchLatestViaYouTubeApi(
  creator: { id: string; name: string },
  apiKey: string,
  minDurationSec: number,
  maxDurationSec: number = 18000,
  maxResults: number = NEW_PER_CREATOR,
  preferLongMovies: boolean = false
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
    maxResults,
    preferLongMovies
  );
}

interface ParsedCandidate {
  youtubeVideoId: string;
  title: string;
  durationSec: number;
}

/**
 * Extracts video candidates and durations from ytInitialData (lockupViewModel & videoRenderer)
 * embedded in YouTube /videos or /streams tab HTML.
 */
function extractCandidatesFromChannelTabHtml(html: string): ParsedCandidate[] {
  const candidates: ParsedCandidate[] = [];
  const seen = new Set<string>();
  const addCandidate = (vid?: string, title?: string, durText?: string) => {
    const durationSec = parseDurationText(durText);
    const cleanTitle = title ? title.trim() : '';
    if (!vid || !cleanTitle || !durationSec || seen.has(vid)) return;
    seen.add(vid);
    candidates.push({ youtubeVideoId: vid, title: cleanTitle, durationSec });
  };

  const m = html.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
  if (m) {
    try {
      const data = JSON.parse(m[1]);
      const walk = (obj: any) => {
        if (!obj || typeof obj !== 'object') return;
        if (obj.lockupViewModel) {
          const lvm = obj.lockupViewModel;
          const vid =
            lvm.contentId ||
            lvm.rendererContext?.commandContext?.onTap?.innertubeCommand?.watchEndpoint?.videoId;
          const title = lvm.metadata?.lockupMetadataViewModel?.title?.content;
          const overlays = lvm.contentImage?.thumbnailViewModel?.overlays || [];
          let durText = '';
          for (const ov of overlays) {
            for (const b of ov.thumbnailBottomOverlayViewModel?.badges || []) {
              const t = b.thumbnailBadgeViewModel?.text;
              if (t && /^\d{1,2}:\d{2}(?::\d{2})?$/.test(t.trim())) {
                durText = t.trim();
              }
            }
          }
          addCandidate(vid, title, durText);
          return;
        }
        if (obj.videoRenderer && obj.videoRenderer.videoId) {
          const vr = obj.videoRenderer;
          const title = vr.title?.runs?.[0]?.text || vr.title?.simpleText;
          const durText = vr.lengthText?.simpleText || '';
          addCandidate(vr.videoId, title, durText);
          return;
        }
        for (const v of Object.values(obj)) walk(v);
      };
      walk(data);
      if (candidates.length > 0) return candidates;
    } catch {
      // Fall through to regex fallback if JSON parse fails
    }
  }

  for (const match of html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)) {
    const vid = match[1];
    if (seen.has(vid)) continue;
    const badgeMatch = html.match(
      new RegExp(
        `"text":"(\\d{1,2}:\\d{2}(?::\\d{2})?)","badgeStyle":"[^"]+","animationActivationTargetId":"${vid}"`
      )
    );
    const durSec = parseDurationText(badgeMatch?.[1]);
    if (durSec > 0) {
      seen.add(vid);
      candidates.push({ youtubeVideoId: vid, title: '', durationSec: durSec });
    }
  }
  return candidates;
}

async function fetchChannelTabCandidates(channelId: string, tab: 'videos' | 'streams'): Promise<ParsedCandidate[]> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${channelId}/${tab}`, {
      headers: YOUTUBE_PAGE_HEADERS,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const html = await res.text();
    return extractCandidatesFromChannelTabHtml(html);
  } catch {
    return [];
  }
}

async function fetchRssWatchCandidates(
  channelId: string,
  excludeIds: Set<string>,
  needed: number
): Promise<ParsedCandidate[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const out: ParsedCandidate[] = [];

    for (const entry of entries) {
      if (out.length >= needed * 2) break;
      const entryText = entry[1];
      const vid = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = entryText.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
      const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
      const desc = entryText.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || '';
      if (!vid || !rawTitle || excludeIds.has(vid)) continue;
      if (link.includes('/shorts/') || entryText.includes('/shorts/')) continue;
      if (isShortTitle(rawTitle) || /#shorts?\b|youtube\.com\/shorts/i.test(desc)) continue;

      const watchRes = await fetch(`https://www.youtube.com/watch?v=${vid}`, {
        headers: YOUTUBE_PAGE_HEADERS,
        signal: AbortSignal.timeout(6000),
      });
      if (!watchRes.ok) continue;
      const html = await watchRes.text();
      if (html.includes('rel="canonical" href="https://www.youtube.com/shorts/')) continue;

      const lenMatch = html.match(/"lengthSeconds":"(\d+)"/);
      const msMatch = html.match(/"approxDurationMs":"(\d+)"/);
      const durSec = lenMatch
        ? parseInt(lenMatch[1], 10)
        : msMatch
        ? Math.round(parseInt(msMatch[1], 10) / 1000)
        : 0;
      if (durSec > 60) {
        out.push({ youtubeVideoId: vid, title: cleanHtmlEntities(rawTitle), durationSec: durSec });
      }
    }
    return out;
  } catch {
    return [];
  }
}

async function verifyCandidateEmbeddable(
  candidate: ParsedCandidate,
  creator: { id: string; name: string }
): Promise<Video | null> {
  try {
    if (candidate.title && isShortTitle(candidate.title)) return null;
    if (candidate.durationSec <= MAX_SHORT_DURATION_SEC && (await isYouTubeShort(candidate.youtubeVideoId))) {
      return null;
    }

    const oembedRes = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${candidate.youtubeVideoId}&format=json`,
      { signal: AbortSignal.timeout(5000) }
    );
    if (!oembedRes.ok) return null;
    const oembed = await oembedRes.json();
    const title = String(oembed.title || candidate.title || '').trim();
    if (!title || isShortTitle(title)) return null;

    return {
      youtubeVideoId: candidate.youtubeVideoId,
      title,
      sourceChannelId: creator.id,
      sourceChannelTitle: String(oembed.author_name || creator.name),
      thumbnailUrl: `https://i.ytimg.com/vi/${candidate.youtubeVideoId}/hqdefault.jpg`,
      durationSec: Math.round(candidate.durationSec),
    };
  } catch {
    return null;
  }
}

async function fetchLatestViaChannelPage(
  creator: { id: string; name: string },
  minDurationSec: number,
  maxDurationSec: number = 18000,
  maxResults: number = NEW_PER_CREATOR,
  preferLongMovies: boolean = false
): Promise<Video[]> {
  try {
    const rawCandidates = await fetchChannelTabCandidates(creator.id, 'videos');
    const seenIds = new Set(rawCandidates.map((c) => c.youtubeVideoId));

    const filterEligible = (list: ParsedCandidate[]) =>
      list.filter(
        (c) =>
          c.durationSec >= minDurationSec &&
          c.durationSec <= maxDurationSec &&
          (!c.title || !isShortTitle(c.title))
      );

    let eligible = filterEligible(rawCandidates);

    if (eligible.length < maxResults) {
      const streamCandidates = await fetchChannelTabCandidates(creator.id, 'streams');
      for (const sc of streamCandidates) {
        if (!seenIds.has(sc.youtubeVideoId)) {
          seenIds.add(sc.youtubeVideoId);
          rawCandidates.push(sc);
        }
      }
      eligible = filterEligible(rawCandidates);
    }

    if (eligible.length < maxResults) {
      const rssCandidates = await fetchRssWatchCandidates(
        creator.id,
        seenIds,
        maxResults - eligible.length
      );
      rawCandidates.push(...rssCandidates);
      eligible = filterEligible(rawCandidates);
    }

    if (preferLongMovies) {
      const tier = (sec: number) => (sec >= 1200 ? 2 : sec >= 300 ? 1 : 0);
      eligible = [...eligible].sort((a, b) => tier(b.durationSec) - tier(a.durationSec));
    }

    const valid: Video[] = [];
    const batchSize = 5;
    for (let i = 0; i < eligible.length && valid.length < maxResults; i += batchSize) {
      const batch = eligible.slice(i, i + batchSize);
      const verified = await Promise.all(batch.map((c) => verifyCandidateEmbeddable(c, creator)));
      for (const v of verified) {
        if (v && valid.length < maxResults) valid.push(v);
      }
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

  // Pre-group valid existing videos per category & creator once so under-filled creators backfill to 10
  const existingStateByCategory = new Map<
    string,
    { existingVideos: Video[]; perCreatorMap: Map<string, Video[]>; existingIds: Set<string> }
  >();

  // Build job list across all categories (show uploads + dynamic bumper sources)
  const jobs: {
    categoryId: string;
    creator: { id: string; name: string };
    minDur: number;
    maxResults: number;
    preferLongMovies: boolean;
  }[] = [];
  const bumperJobs: { categoryId: string; sourceId: string; sourceName: string; isPlaylist: boolean }[] = [];

  for (const cat of CATEGORIES) {
    const creators = channelsMap[cat.id] || [];
    const allowedCreatorIds = new Set(creators.map((c) => c.id));
    const existingLineup = baseLineups[cat.id] || SEED_LINEUPS[cat.id];
    const existingVideos = (existingLineup?.videos || []).filter(
      (v) =>
        allowedCreatorIds.has(v.sourceChannelId) &&
        v.durationSec &&
        v.durationSec > 60 &&
        v.durationSec !== 600
    );
    const existingIds = new Set(existingVideos.map((v) => v.youtubeVideoId));
    const perCreatorMap = new Map<string, Video[]>();
    for (const v of existingVideos) {
      if (!perCreatorMap.has(v.sourceChannelId)) {
        perCreatorMap.set(v.sourceChannelId, []);
      }
      perCreatorMap.get(v.sourceChannelId)!.push(v);
    }
    existingStateByCategory.set(cat.id, { existingVideos, perCreatorMap, existingIds });

    const preferLongMovies = cat.id === 'movies';
    const minDur = 65;
    for (const creator of creators) {
      const currentCount = perCreatorMap.get(creator.id)?.length || 0;
      const maxResults =
        currentCount < MAX_VIDEOS_PER_CREATOR ? MAX_VIDEOS_PER_CREATOR : NEW_PER_CREATOR;
      jobs.push({ categoryId: cat.id, creator, minDur, maxResults, preferLongMovies });
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
      const { categoryId, creator, minDur, maxResults, preferLongMovies } = jobs[idx];
      const vids = apiKey
        ? await fetchLatestViaYouTubeApi(
            creator,
            apiKey,
            minDur,
            18000,
            maxResults,
            preferLongMovies
          )
        : await fetchLatestViaChannelPage(
            creator,
            minDur,
            18000,
            maxResults,
            preferLongMovies
          );

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
    const state = existingStateByCategory.get(cat.id)!;
    const { existingVideos, perCreatorMap, existingIds } = state;

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
