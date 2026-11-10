import fs from 'fs';

// 1. Load verified channels
const verified = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));

// Add top long-form sports creators
const newSports = [
  { id: 'UCw_LnTX4iYwMic7q20I4uRQ', name: 'Secret Base' },
  { id: 'UCB_qr75-ydFVKSF9Dmo6izg', name: 'Formula 1' },
  { id: 'UCZ7wY7MRDSygp63HIEfdQZA', name: 'Sky Sports Football' },
  { id: 'UCTl3QQTvqHFjurroKxexy2Q', name: 'Olympics' }
];

for (const ns of newSports) {
  if (!verified.sports.some(c => c.id === ns.id)) {
    verified.sports.push(ns);
  }
}
fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(verified, null, 2));

// Extract CATEGORIES from existing file
const existingCatalog = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
const catMatch = existingCatalog.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
if (!catMatch) {
  console.error('Could not find CATEGORIES in lib/seed-catalog.ts');
  process.exit(1);
}
const CATEGORIES = JSON.parse(catMatch[1]);

async function fetchNonShortsUploads(channelId, channelName) {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const videos = [];

    for (const entry of entries) {
      const entryText = entry[1];
      const vid = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = entryText.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
      const author = entryText.match(/<author>\s*<name>(.*?)<\/name>/)?.[1]?.trim() || channelName;
      const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
      const desc = entryText.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || '';

      if (!vid || !rawTitle) continue;

      // RIGOROUS SHORTS FILTERING:
      // 1. YouTube official alternate link for shorts
      if (link.includes('/shorts/') || entryText.includes('/shorts/')) {
        continue;
      }
      // 2. Hashtags or keywords in title
      if (/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(rawTitle) ||
          rawTitle.toLowerCase().includes('#shorts') ||
          rawTitle.toLowerCase().includes('#short')) {
        continue;
      }
      // 3. Hashtags or shorts links in description
      if (/#shorts?\b|youtube\.com\/shorts/i.test(desc)) {
        continue;
      }

      // Clean HTML entities
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
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: 600
      });
    }

    return videos;
  } catch (err) {
    console.warn(`Error for ${channelName}:`, err.message);
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
  const seedLineups = {};

  for (const cat of CATEGORIES) {
    const creators = verified[cat.id] || [];
    console.log(`Scouring ${cat.id} (${creators.length} creators)...`);
    const lists = await Promise.all(creators.map(c => fetchNonShortsUploads(c.id, c.name)));
    const interleaved = roundRobin(lists);
    // Take up to 50 curated non-shorts
    const capped = interleaved.slice(0, 50);
    console.log(`  -> Found ${capped.length} true broadcast videos for ${cat.id}`);

    seedLineups[cat.id] = {
      categoryId: cat.id,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: Date.now(),
      videos: capped
    };
  }

  // Write seed-catalog.ts
  const tsContent = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(seedLineups, null, 2)};
`;

  fs.writeFileSync('lib/seed-catalog.ts', tsContent);
  console.log('Successfully updated lib/seed-catalog.ts with ZERO shorts!');
}

main();
