import fs from 'fs';

const content = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
const idMatches = [...content.matchAll(/"youtubeVideoId":\s*"([^"]+)"/g)].map(m => m[1]);
const uniqueIds = Array.from(new Set(idMatches));

console.log(`Fetching real durations for ${uniqueIds.length} videos...`);

async function fetchVideoDurationSec(id) {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg'
      }
    });
    const html = await res.text();
    const lenMatch = html.match(/"lengthSeconds":"(\d+)"/);
    if (lenMatch && parseInt(lenMatch[1], 10) > 0) {
      return parseInt(lenMatch[1], 10);
    }
    const msMatch = html.match(/"approxDurationMs":"(\d+)"/);
    if (msMatch && parseInt(msMatch[1], 10) > 0) {
      return Math.round(parseInt(msMatch[1], 10) / 1000);
    }
    return null;
  } catch {
    return null;
  }
}

async function run() {
  const durationMap = {};
  const shortsFound = [];
  const batchSize = 30;

  for (let i = 0; i < uniqueIds.length; i += batchSize) {
    const batch = uniqueIds.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(async (id) => {
      const dur = await fetchVideoDurationSec(id);
      return { id, dur };
    }));
    for (const { id, dur } of results) {
      if (dur !== null) {
        durationMap[id] = dur;
        if (dur <= 60) {
          shortsFound.push({ id, dur });
        }
      }
    }
    process.stdout.write(`Fetched ${Math.min(i + batchSize, uniqueIds.length)}/${uniqueIds.length} (resolved: ${Object.keys(durationMap).length}, <=60s: ${shortsFound.length})\r`);
  }

  console.log(`\nComplete! Resolved ${Object.keys(durationMap).length}/${uniqueIds.length} real durations. Shorts (<=60s) found: ${shortsFound.length}`);
  fs.writeFileSync('scripts/video-durations.json', JSON.stringify(durationMap, null, 2));

  // Now update lib/seed-catalog.ts with real durations and remove any video <= 60s
  const catMatch = content.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
  const lineupMatch = content.match(/export const SEED_LINEUPS: Record<string, ChannelLineup> = ({[\s\S]*?});\s*$/);
  if (catMatch && lineupMatch) {
    const categories = JSON.parse(catMatch[1]);
    const lineups = JSON.parse(lineupMatch[1]);

    for (const [catId, lineup] of Object.entries(lineups)) {
      lineup.videos = lineup.videos
        .map(v => ({
          ...v,
          durationSec: durationMap[v.youtubeVideoId] || v.durationSec || 600
        }))
        .filter(v => v.durationSec > 60);
      console.log(`Category ${catId}: ${lineup.videos.length} videos with real durations (sample: ${lineup.videos.slice(0, 3).map(v => v.durationSec + 's').join(', ')})`);
    }

    const updatedTs = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;
    fs.writeFileSync('lib/seed-catalog.ts', updatedTs);
    console.log('Updated lib/seed-catalog.ts with real video durations!');
  }
}

run();
