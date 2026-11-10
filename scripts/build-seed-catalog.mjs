// scripts/build-seed-catalog.mjs
import fs from 'fs';

const OFFICIAL_CHANNELS = {
  tech: [
    { id: 'UCG7J20LhUeLl6y_Emi7OJrA', name: 'Marques Brownlee' },
    { id: 'UC2Xd-TjJByJyK2w1zNwY0zQ', name: 'Fireship' },
    { id: 'UCdBK94H6oZT2Q7l0-b0xmMg', name: 'Linus Tech Tips' }
  ],
  games: [
    { id: 'UCqJ-Xo29CKyLTjn6z2XwYAw', name: 'Game Maker’s Toolkit' },
    { id: 'UCGiJeCKTVKIxtaYZOidh19g', name: 'videogamedunkey' },
    { id: 'UC0fDg4ER86A74I_48lGE88Q', name: 'Noclip' }
  ],
  music: [
    { id: 'UC7nrQB0dRxdQpH8-y8glEDw', name: 'NPR Music' },
    { id: 'UC4eYXhJI4-7wSWc8UNRwD4A', name: 'Tiny Desk Concerts' }
  ],
  food: [
    { id: 'UC4avs5jYd_FvzQ8f0XYziqw', name: 'Binging with Babish' },
    { id: 'UCUAg71CJEvFdOnujmep1Svw', name: 'Joshua Weissman' },
    { id: 'UCJHA_jMfCvEnv-3kRjTCQXw', name: 'Babish Culinary Universe' }
  ],
  science: [
    { id: 'UC1UmujXTizWokDHojdEOdow', name: 'Veritasium' },
    { id: 'UCHnyfMqiRRG1u-2MsSQLbXA', name: 'Veritasium Classic' },
    { id: 'UCq8ZAAsI89IoJ-fn1gYpO3g', name: 'Kurzgesagt – In a Nutshell' },
    { id: 'UC8VkNBOwvsTlFjoSnNSMmxw', name: 'SmarterEveryDay' },
    { id: 'UC513PdAP2-jWkJunTh5kXRw', name: 'Mark Rober' }
  ],
  sports: [
    { id: 'UCJrWyyCRROi8NlQ6Xd9dx5Q', name: 'Dude Perfect' },
    { id: 'UCRijo3ddMTht_IHyNSNXpNQ', name: 'Dude Perfect Classics' },
    { id: 'UC8VddvuHJzIj__Ud0rY2_ww', name: 'Red Bull' },
    { id: 'UCcSrNe5CbXOmsF645RYDe5w', name: 'People Are Awesome' }
  ],
  travel: [
    { id: 'UCneNuMawbfqgXCew2EdZMcQ', name: 'Kara and Nate' },
    { id: 'UCTd7KzdwnFE3lm6LCfYDmUQ', name: 'Yes Theory' },
    { id: 'UCi7KXaqqW_h6ifNVnudH0kQ', name: 'Lost LeBlanc' },
    { id: 'UCodVXWu3aFyE1hGmbJrJJLQ', name: 'Drew Binsky' }
  ],
  film: [
    { id: 'UC-hehDTvO4X8d9M7MVtpElg', name: 'Thomas Flight' },
    { id: 'UCDylnpLJWDj2gKWujjwap9w', name: 'StudioBinder' },
    { id: 'UCKy1dAqELo0zrOtPkf0eTMw', name: 'CineFix' }
  ],
  fitness: [
    { id: 'UCmCnayXABSyVjexptPEQxlA', name: 'Hybrid Calisthenics' },
    { id: 'UCMHkz3SDZADtMaQ43bLGdUQ', name: 'Chris Heria' }
  ],
  art: [
    { id: 'UClM2LuQ1q5WEc23462tQzBg', name: 'Proko' },
    { id: 'UCfvIqreCk628yB9mp3e_ABQ', name: 'Proko TV' },
    { id: 'UC3BCGz72VQcFdoBiZtKfOpg', name: 'Jazza' }
  ],
  design: [
    { id: 'UC_zQ777U6YTyatP3P1wi3xw', name: 'Never Too Small' }
  ],
  learning: [
    { id: 'UCAuUUnT6oDeKwE6v1NGQxug', name: 'TED-Ed' },
    { id: 'UCsooa4yRKGN_zEE8iknghZA', name: 'TED-Ed Lessons' },
    { id: 'UC1_uAIS3r8Vu6JjXWvastJg', name: '3Blue1Brown' },
    { id: 'UCTWKe1zATFV6d0o6oLS9sgw', name: 'Wendover Productions' },
    { id: 'UC176GAQozKKjhz62H8u9vQQ', name: 'Real Engineering' },
    { id: 'UCX6b17PVsYBQ0ip5gyeme-Q', name: 'CrashCourse' }
  ]
};

async function getVideosFromFeed(channelId, fallbackName) {
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const list = [];
    for (const entry of entries) {
      const entryText = entry[1];
      const idMatch = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entryText.match(/<title>(.*?)<\/title>/);
      if (idMatch && titleMatch) {
        list.push({
          id: idMatch[1].trim(),
          title: titleMatch[1].trim(),
          channelId,
          fallbackName
        });
      }
    }
    return list;
  } catch (err) {
    console.error(`Feed fetch error for ${channelId}:`, err.message);
    return [];
  }
}

async function verifyOembed(videoId) {
  try {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function isShort(videoId) {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: 'HEAD',
      redirect: 'manual'
    });
    return res.status === 200;
  } catch {
    return false;
  }
}

const CATEGORY_META = [
  { id: 'tech', name: 'Tech', hue: 355, description: 'Cutting edge hardware, software & future computing' },
  { id: 'games', name: 'Games', hue: 268, description: 'Game design, speedruns, retrospectives & reviews' },
  { id: 'music', name: 'Music', hue: 205, description: 'Live sessions, late night mixes & acoustic sets' },
  { id: 'food', name: 'Food', hue: 22, description: 'Culinary adventures, comfort food & knife skills' },
  { id: 'science', name: 'Science', hue: 170, description: 'Astrophysics, biology, deep ocean & curiosities' },
  { id: 'sports', name: 'Sports', hue: 140, description: 'Extreme sports, game analysis & iconic highlights' },
  { id: 'travel', name: 'Travel', hue: 190, description: 'Hidden cities, train journeys & remote corners' },
  { id: 'film', name: 'Film', hue: 300, description: 'Cinematography, scene breakdown & director deep-dives' },
  { id: 'fitness', name: 'Fitness', hue: 100, description: 'Calisthenics, mobility, running & functional power' },
  { id: 'art', name: 'Art', hue: 330, description: 'Painting restoration, illustration & creative process' },
  { id: 'design', name: 'Design', hue: 45, description: 'Architecture, industrial design & interior spaces' },
  { id: 'learning', name: 'Learning', hue: 280, description: 'Deep educational dives, history, economics & theory' }
];

async function run() {
  console.log('Generating expanded multi-channel TV programming catalog...');
  const lineups = {};

  for (const cat of CATEGORY_META) {
    const catId = cat.id;
    console.log(`\n================== Fetching for ${cat.name} (${catId}) ==================`);
    const channelConfigs = OFFICIAL_CHANNELS[catId] || [];
    
    // Fetch verified videos from EACH channel separately
    const channelVideoLists = [];
    const seenIds = new Set();

    for (const ch of channelConfigs) {
      console.log(`  Querying channel [${ch.name}] (${ch.id})...`);
      const raw = await getVideosFromFeed(ch.id, ch.name);
      console.log(`    Found ${raw.length} feed entries.`);
      const verifiedForChannel = [];

      for (const item of raw) {
        if (seenIds.has(item.id)) continue;
        seenIds.add(item.id);

        const isAShort = await isShort(item.id);
        if (isAShort) continue;

        const oembed = await verifyOembed(item.id);
        if (!oembed || !oembed.title) continue;

        const cleanTitle = oembed.title.replace(/[\n\r]+/g, ' ').trim();
        const authorName = oembed.author_name || ch.name;

        verifiedForChannel.push({
          youtubeVideoId: item.id,
          title: cleanTitle,
          sourceChannelId: ch.id,
          sourceChannelTitle: authorName,
          thumbnailUrl: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
          durationSec: 600
        });

        console.log(`    [OK] ${authorName}: ${cleanTitle.slice(0, 50)}`);
      }

      if (verifiedForChannel.length > 0) {
        channelVideoLists.push(verifiedForChannel);
      }
    }

    // Interleave the videos round-robin across all channels for genuine TV programming variety
    const interleavedVideos = [];
    let hasMore = true;
    let round = 0;

    while (hasMore) {
      hasMore = false;
      for (const list of channelVideoLists) {
        if (round < list.length) {
          interleavedVideos.push(list[round]);
          hasMore = true;
        }
      }
      round++;
    }

    console.log(`=> Category ${cat.name} populated with ${interleavedVideos.length} diverse shows across ${channelVideoLists.length} channels.`);

    lineups[catId] = {
      categoryId: catId,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: Date.now(),
      videos: interleavedVideos
    };
  }

  // Generate TypeScript seed file
  const tsContent = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORY_META, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;

  fs.writeFileSync('lib/seed-catalog.ts', tsContent, 'utf8');
  console.log('\nSuccessfully generated and replaced lib/seed-catalog.ts with diverse multi-creator programming!');
}

run();
