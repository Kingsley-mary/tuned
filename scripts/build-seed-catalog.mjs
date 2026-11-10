// scripts/build-seed-catalog.mjs
import fs from 'fs';

const OFFICIAL_CHANNELS = {
  tech: [
    { id: 'UCBJycsmduvYEL83R_U4JriQ', name: 'Marques Brownlee' },
    { id: 'UCsBjURrPoezykLs9EqgamOA', name: 'Fireship' }
  ],
  games: [
    { id: 'UCqJ-Xo29CKyLTjn6z2XwYAw', name: 'Game Maker’s Toolkit' },
    { id: 'UC0fDg4ER86A74I_48lGE88Q', name: 'Noclip' }
  ],
  music: [
    { id: 'UC4eYXhJI4-7wSWc8UNRwD4A', name: 'NPR Music' },
    { id: 'UC2Qw1dzXDBAZPwS7zm37P8g', name: 'COLORS' }
  ],
  food: [
    { id: 'UCJHA_jMfCvEnv-3kRjTCQXw', name: 'Babish Culinary Universe' },
    { id: 'UChBEbMKI1eCcejTtmI32UEw', name: 'Joshua Weissman' }
  ],
  science: [
    { id: 'UCsXVk37bltHxD1rDPwtwt8Q', name: 'Kurzgesagt – In a Nutshell' },
    { id: 'UCHnyfMqiRRG1u-2MsSQLbXA', name: 'Veritasium' },
    { id: 'UC6107grRI4m0o2-emgoDnAA', name: 'SmarterEveryDay' }
  ],
  sports: [
    { id: 'UCblfuW_4rakIf2h6aqANlAA', name: 'Red Bull' },
    { id: 'UCRijo3ddMTht_IHyNSNXpNQ', name: 'Dude Perfect' }
  ],
  travel: [
    { id: 'UCneNuMawbfqgXCew2EdZMcQ', name: 'Kara and Nate' },
    { id: 'UCTd7KzdwnFE3lm6LCfYDmUQ', name: 'Yes Theory' }
  ],
  film: [
    { id: 'UC-hehDTvO4X8d9M7MVtpElg', name: 'Thomas Flight' },
    { id: 'UCDylnpLJWDj2gKWujjwap9w', name: 'StudioBinder' },
    { id: 'UCKy1dAqELo0zrOtPkf0eTMw', name: 'CineFix' }
  ],
  fitness: [
    { id: 'UCmCnayXABSyVjexptPEQxlA', name: 'Hybrid Calisthenics' },
    { id: 'UCZIIRX8rkNjVpP-8ZKBId3A', name: 'Calisthenicmovement' }
  ],
  art: [
    { id: 'UCvZe6ZCbF9xgbbbdkGcn8Vw', name: 'Baumgartner Restoration' },
    { id: 'UClM2LuQ1q5WEc23462tQzBg', name: 'Proko' }
  ],
  design: [
    { id: 'UC_zQ777U6YTyatP3P1wi3xw', name: 'Never Too Small' },
    { id: 'UC0k238zFx-Z842Ycc_5sBmA', name: 'Architectural Digest' }
  ],
  learning: [
    { id: 'UCYO_jab_esu_lQr_uHgEYnw', name: '3Blue1Brown' },
    { id: 'UCsooa4yRKGN_zEE8iknghZA', name: 'TED-Ed' }
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

// Check if a video is a YouTube Short
async function isShort(videoId) {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: 'HEAD',
      redirect: 'manual'
    });
    // If it's a short, YouTube returns 200 on /shorts/{id}. If normal video, it redirects (303/302) to /watch?v={id}
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
  { id: 'design', name: 'Design', hue: 45, description: 'Architecture, micro-apartments & typography' },
  { id: 'learning', name: 'Learning', hue: 235, description: 'Cognition, mathematics, history & big ideas' },
];

async function run() {
  console.log('Generating production seed catalog with verified videos...');
  const lineups = {};

  for (const cat of CATEGORY_META) {
    const catId = cat.id;
    console.log(`\nFetching for category: ${cat.name} (${catId})`);
    const channelConfigs = OFFICIAL_CHANNELS[catId] || [];
    const validVideos = [];
    const seenIds = new Set();

    for (const ch of channelConfigs) {
      if (validVideos.length >= 14) break;
      console.log(`  Checking channel ${ch.name} (${ch.id})...`);
      const raw = await getVideosFromFeed(ch.id, ch.name);
      console.log(`    Found ${raw.length} feed entries.`);

      for (const item of raw) {
        if (validVideos.length >= 14) break;
        if (seenIds.has(item.id)) continue;
        seenIds.add(item.id);

        const isAShort = await isShort(item.id);
        if (isAShort) {
          console.log(`    [SKIP SHORT] ${item.id} - ${item.title.slice(0, 30)}`);
          continue;
        }

        const oembed = await verifyOembed(item.id);
        if (!oembed || !oembed.title) {
          console.log(`    [FAIL OEMBED] ${item.id}`);
          continue;
        }

        const cleanTitle = oembed.title.replace(/[\n\r]+/g, ' ').trim();
        const authorName = oembed.author_name || ch.name;

        validVideos.push({
          youtubeVideoId: item.id,
          title: cleanTitle,
          sourceChannelId: ch.id,
          sourceChannelTitle: authorName,
          thumbnailUrl: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
          durationSec: 600
        });

        console.log(`    [VERIFIED OK] ${item.id} - ${cleanTitle.slice(0, 45)} (${authorName})`);
      }
    }

    lineups[catId] = {
      categoryId: catId,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: Date.now(),
      videos: validVideos
    };
    console.log(`Category ${cat.name} populated with ${validVideos.length} verified videos.`);
  }

  // Generate lib/seed-catalog.ts
  const code = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORY_META, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;

  fs.writeFileSync('lib/seed-catalog.ts', code, 'utf-8');
  console.log('\nSuccessfully generated and replaced lib/seed-catalog.ts!');
}

run();
