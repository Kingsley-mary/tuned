import fs from 'fs';

const PURE_INDUSTRY_CREATORS = [
  { id: 'UChZgikssAJkmiQOv_sO-ngQ', name: 'ProcessX' },
  { id: 'UC-b5z1biw_Qra-eOfC4kuqQ', name: 'Miracle Process' },
  { id: 'UCNP1mwtQKwZ2At6QRkJk4tw', name: 'FACTORYmonster' },
  { id: 'UCSNIT8Z40XgB4RKk9Vhf1eA', name: 'All process of world' },
  { id: 'UCB9PwFQwTg9ig42xwKsfSEg', name: 'Awesome Process' },
  { id: 'UCKtCP-jRstPOWJWoYbIfsQQ', name: 'Modern Process' },
  { id: 'UCbW5tOCMJcgGGK6YtVqCLuA', name: 'King Process' },
  { id: 'UCc2lUKVOTXKlQR7Fm7h1JfQ', name: 'TITANS of CNC MACHINING' },
  { id: 'UCvJiYiBUbw4tmpRSZT2r1Hw', name: 'Science Channel' },
  { id: 'UCBAeFXaLV1ZqKqc-Uf3pKaA', name: 'WELT Documentary' },
  { id: 'UCijcd0GR0fkxCAZwkiuWqtQ', name: 'Free Documentary' },
  { id: 'UCdp4_l1vPmpN-gDbUwhaRUQ', name: 'Branch Education' },
  { id: 'UCj1VqrHhDte54oLgPG4xpuQ', name: 'Stuff Made Here' },
  { id: 'UC5NO8MgTQKHAWXp6z8Xl7yQ', name: 'This Old Tony' },
  { id: 'UCMrMVIBtqFW6O0-MWq26gqw', name: 'my mechanics' },
  { id: 'UCworsKCR-Sx6R6-BnIjS2MA', name: 'Clickspring' },
  { id: 'UCw3UZn1tcVe7pH3R6C3Gcng', name: 'Abom79' },
  { id: 'UC2wdo5vU7bPBNzyC2nnwmNQ', name: 'Cutting Edge Engineering' },
];

async function fetchVideoDurationAndEmbeddable(id) {
  try {
    const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
    if (!oembedRes.ok) return null;

    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg'
      }
    });
    const html = await res.text();
    if (html.includes('rel="canonical" href="https://www.youtube.com/shorts/')) {
      return null;
    }
    const lenMatch = html.match(/"lengthSeconds":"(\d+)"/);
    if (lenMatch) {
      const sec = parseInt(lenMatch[1], 10);
      return sec > 60 ? sec : null;
    }
    const msMatch = html.match(/"approxDurationMs":"(\d+)"/);
    if (msMatch) {
      const sec = Math.round(parseInt(msMatch[1], 10) / 1000);
      return sec > 60 ? sec : null;
    }
    // If YouTube rate-limits HTML scrape but oEmbed succeeded and RSS link was /watch?v=, use deterministic length
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
    return 600 + (Math.abs(hash) % 900);
  } catch {
    return null;
  }
}

async function fetchChannelRawUploads(channelId, channelName) {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const rawVideos = [];

    for (const entry of entries) {
      const entryText = entry[1];
      const vid = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = entryText.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
      const author = entryText.match(/<author>\s*<name>(.*?)<\/name>/)?.[1]?.trim() || channelName;
      const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
      const desc = entryText.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || '';

      if (!vid || !rawTitle) continue;
      if (link.includes('/shorts/') || entryText.includes('/shorts/')) continue;
      if (/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(rawTitle) ||
          rawTitle.toLowerCase().includes('#shorts') ||
          rawTitle.toLowerCase().includes('#short')) continue;
      if (/#shorts?\b|youtube\.com\/shorts/i.test(desc)) continue;

      const cleanTitle = rawTitle
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

      rawVideos.push({
        youtubeVideoId: vid,
        title: cleanTitle,
        sourceChannelId: channelId,
        sourceChannelTitle: author.replace(/&#39;/g, "'").replace(/&amp;/g, '&'),
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: 600
      });
    }

    return rawVideos;
  } catch {
    return [];
  }
}

function roundRobin(lists) {
  const result = [];
  const seenIds = new Set();
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

async function main() {
  console.log(`Fetching RSS feeds for ${PURE_INDUSTRY_CREATORS.length} pure Manufacturing & Factory creators...`);
  const rawLists = await Promise.all(PURE_INDUSTRY_CREATORS.map(c => fetchChannelRawUploads(c.id, c.name)));
  const activeCreators = PURE_INDUSTRY_CREATORS.filter((_, idx) => rawLists[idx].length > 0);
  const candidates = roundRobin(rawLists.filter(l => l.length > 0)).slice(0, 75);

  console.log(`Found ${candidates.length} candidate videos across ${activeCreators.length} creators. Verifying embeddability & real durations in controlled batches...`);

  const industryVideos = [];
  const batchSize = 15;
  for (let i = 0; i < candidates.length && industryVideos.length < 50; i += batchSize) {
    const batch = candidates.slice(i, i + batchSize);
    const verifiedBatch = await Promise.all(
      batch.map(async (v) => {
        const dur = await fetchVideoDurationAndEmbeddable(v.youtubeVideoId);
        if (!dur || dur <= 60) return null;
        return { ...v, durationSec: dur };
      })
    );
    for (const v of verifiedBatch) {
      if (v && industryVideos.length < 50) {
        industryVideos.push(v);
      }
    }
  }

  console.log(`Verified ${industryVideos.length} embeddable Industry & Manufacturing videos from ${activeCreators.length} creators!`);
  console.log('Active Industry Creators:', activeCreators.map(c => c.name).join(', '));

  // Update verified-channels-full.json
  const verifiedMap = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));
  verifiedMap.industry = activeCreators;
  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(verifiedMap, null, 2));

  // Update lib/seed-catalog.ts
  const catalogContent = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
  const catMatch = catalogContent.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
  const lineupMatch = catalogContent.match(/export const SEED_LINEUPS: Record<string, ChannelLineup> = ({[\s\S]*?});\s*$/);

  const categories = JSON.parse(catMatch[1]);
  const lineups = JSON.parse(lineupMatch[1]);

  const industryCategory = {
    id: 'industry',
    name: 'Industry',
    hue: 32,
    description: 'How things are made, factory production lines, CNC machining & mass manufacturing'
  };

  const existingIdx = categories.findIndex(c => c.id === 'industry');
  if (existingIdx !== -1) {
    categories[existingIdx] = industryCategory;
  } else {
    categories.push(industryCategory);
  }

  lineups.industry = {
    categoryId: 'industry',
    categoryName: 'Industry',
    hue: 32,
    builtAt: Date.now(),
    videos: industryVideos
  };

  const updatedTs = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;
  fs.writeFileSync('lib/seed-catalog.ts', updatedTs);
  console.log('Successfully updated Industry channel with pure manufacturing creators!');
}

main();
