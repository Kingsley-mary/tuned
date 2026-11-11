import fs from 'fs';

const EXTRA_FACTORY_HANDLES = [
  'SuigenerisProcess',
  'WonderProcess',
  'NYCCNC',
  'Blondihacks',
  'InheritanceMachining',
  'FireballTool',
];

async function resolveHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg'
      }
    });
    const html = await res.text();
    const m = html.match(/"externalId":"(UC[\w-]{22})"/) || html.match(/"channelId":"(UC[\w-]{22})"/);
    const t = html.match(/<meta property="og:title" content="([^"]+)">/);
    return m ? { id: m[1], name: t?.[1] || handle } : null;
  } catch {
    return null;
  }
}

const BASE_INDUSTRY_CREATORS = [
  { id: 'UChZgikssAJkmiQOv_sO-ngQ', name: 'ProcessX' },
  { id: 'UC-b5z1biw_Qra-eOfC4kuqQ', name: 'Miracle Process' },
  { id: 'UCNP1mwtQKwZ2At6QRkJk4tw', name: 'FACTORYmonster' },
  { id: 'UCSNIT8Z40XgB4RKk9Vhf1eA', name: 'All process of world' },
  { id: 'UCB9PwFQwTg9ig42xwKsfSEg', name: 'Awesome Process' },
  { id: 'UCbW5tOCMJcgGGK6YtVqCLuA', name: 'King Process' },
  { id: 'UCc2lUKVOTXKlQR7Fm7h1JfQ', name: 'TITANS of CNC MACHINING' },
  { id: 'UCj1VqrHhDte54oLgPG4xpuQ', name: 'Stuff Made Here' },
  { id: 'UC5NO8MgTQKHAWXp6z8Xl7yQ', name: 'This Old Tony' },
  { id: 'UCMrMVIBtqFW6O0-MWq26gqw', name: 'my mechanics' },
  { id: 'UCworsKCR-Sx6R6-BnIjS2MA', name: 'Clickspring' },
  { id: 'UCw3UZn1tcVe7pH3R6C3Gcng', name: 'Abom79' },
  { id: 'UC2wdo5vU7bPBNzyC2nnwmNQ', name: 'Cutting Edge Engineering' },
];

const SCIENCE_CREATORS = [
  { id: 'UCHnyfMqiRRG1u-2MsSQLbXA', name: 'Veritasium' },
  { id: 'UCsXVk37bltHxD1rDPwtNM8Q', name: 'Kurzgesagt – In a Nutshell' },
  { id: 'UC6107grRI4m0o2-emgoDnAA', name: 'SmarterEveryDay' },
  { id: 'UCY1kMZp36IQSyNx_9h4mpCg', name: 'Mark Rober' },
  { id: 'UC6nSFpj9HTCZ5t-N3Rm3-HA', name: 'Vsauce' },
  { id: 'UCZYTClx2T1of7BRZ86-8fow', name: 'SciShow' },
  { id: 'UCeiYXex_fwgYDonaTcSIk6w', name: 'MinuteEarth' },
  { id: 'UC7_gcs09iThXybpVgjHZ_7g', name: 'PBS Space Time' },
  { id: 'UCH4BNI0-FOK2dMXoFtViWHw', name: 'Be Smart' },
  { id: 'UCFhXFikryT4aFcLkLw2LBLA', name: 'NileRed' },
  { id: 'UC1VLQPn9cYSqx8plbk9RxxQ', name: 'The Action Lab' },
  { id: 'UC1yNl2E66ZzKApQdRuTQ4tw', name: 'Sabine Hossenfelder' },
  { id: 'UCzWQYUVCpZqtN93H8RR44Qw', name: 'Seeker' },
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
    return null;
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

async function buildVerifiedLineup(creators, label) {
  const rawLists = await Promise.all(creators.map(c => fetchChannelRawUploads(c.id, c.name)));
  const activeCreators = creators.filter((_, idx) => rawLists[idx].length > 0);
  const candidates = roundRobin(rawLists.filter(l => l.length > 0)).slice(0, 85);

  console.log(`[${label}] Found ${candidates.length} candidates across ${activeCreators.length} creators. Verifying...`);
  const verifiedVideos = [];
  const batchSize = 12;
  for (let i = 0; i < candidates.length && verifiedVideos.length < 50; i += batchSize) {
    const batch = candidates.slice(i, i + batchSize);
    const verifiedBatch = await Promise.all(
      batch.map(async (v) => {
        const dur = await fetchVideoDurationAndEmbeddable(v.youtubeVideoId);
        if (!dur || dur <= 60) return null;
        return { ...v, durationSec: dur };
      })
    );
    for (const v of verifiedBatch) {
      if (v && verifiedVideos.length < 50) {
        verifiedVideos.push(v);
      }
    }
  }
  console.log(`[${label}] Verified ${verifiedVideos.length} videos! Sources:`, [...new Set(verifiedVideos.map(v => v.sourceChannelTitle))]);
  return { activeCreators, verifiedVideos };
}

async function main() {
  const resolvedExtras = (await Promise.all(EXTRA_FACTORY_HANDLES.map(resolveHandle))).filter(Boolean);
  const seenCreatorIds = new Set(BASE_INDUSTRY_CREATORS.map(c => c.id));
  const allIndustryCreators = [...BASE_INDUSTRY_CREATORS];
  for (const ex of resolvedExtras) {
    if (!seenCreatorIds.has(ex.id)) {
      seenCreatorIds.add(ex.id);
      allIndustryCreators.push(ex);
    }
  }

  const industryResult = await buildVerifiedLineup(allIndustryCreators, 'Industry');
  const scienceResult = await buildVerifiedLineup(SCIENCE_CREATORS, 'Science');

  // Update verified-channels-full.json
  const verifiedMap = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));
  verifiedMap.industry = industryResult.activeCreators;
  verifiedMap.science = scienceResult.activeCreators;
  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(verifiedMap, null, 2));

  // Update lib/seed-catalog.ts
  const catalogContent = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
  const catMatch = catalogContent.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
  const lineupMatch = catalogContent.match(/export const SEED_LINEUPS: Record<string, ChannelLineup> = ({[\s\S]*?});\s*$/);

  const categories = JSON.parse(catMatch[1]);
  const lineups = JSON.parse(lineupMatch[1]);

  lineups.industry = {
    categoryId: 'industry',
    categoryName: 'Industry',
    hue: 32,
    builtAt: Date.now(),
    videos: industryResult.verifiedVideos
  };

  lineups.science = {
    ...lineups.science,
    builtAt: Date.now(),
    videos: scienceResult.verifiedVideos
  };

  const updatedTs = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;
  fs.writeFileSync('lib/seed-catalog.ts', updatedTs);
  console.log('Successfully updated both Industry and Science lineups in lib/seed-catalog.ts!');
}

main();
