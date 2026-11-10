import fs from 'fs';

async function resolveHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Cookie': 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg'
      }
    });
    const html = await res.text();
    const m = html.match(/<meta itemprop="identifier" content="(UC[\w-]{22})">/) ||
              html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/) ||
              html.match(/"channelId":"(UC[\w-]{22})"/) ||
              html.match(/"externalId":"(UC[\w-]{22})"/);
    const title = html.match(/<meta property="og:title" content="([^"]+)">/)?.[1] || handle;
    return m ? { id: m[1], name: title.replace(/&#39;/g, "'").replace(/&amp;/g, '&') } : null;
  } catch {
    return null;
  }
}

async function fetchVideoDurationAndEmbeddable(id) {
  try {
    // 1. Check oEmbed to ensure embedding is enabled (200 = embeddable)
    const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
    if (!oembedRes.ok) return null;

    // 2. Fetch real duration
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
    if (html.includes('"playabilityStatus":{"status":"UNPLAYABLE"')) {
      return null;
    }
    const lenMatch = html.match(/"lengthSeconds":"(\d+)"/);
    if (lenMatch && parseInt(lenMatch[1], 10) > 60) {
      return parseInt(lenMatch[1], 10);
    }
    const msMatch = html.match(/"approxDurationMs":"(\d+)"/);
    if (msMatch && parseInt(msMatch[1], 10) > 60000) {
      return Math.round(parseInt(msMatch[1], 10) / 1000);
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchChannelUploads(channelId, channelName) {
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

    // Verify embeddability and fetch real duration for each video
    const verified = await Promise.all(
      rawVideos.map(async (v) => {
        const dur = await fetchVideoDurationAndEmbeddable(v.youtubeVideoId);
        if (!dur || dur <= 60) return null;
        return { ...v, durationSec: dur };
      })
    );

    return verified.filter(Boolean);
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
  const extraMovies = await Promise.all(['MovieCentral', 'SamuelGoldwynFilms', 'WatchFreeFlix'].map(resolveHandle));
  const extraCartoons = await Promise.all(['CartoonNetwork', 'ExplosmEntertainment', 'Mashed'].map(resolveHandle));

  const moviesCreators = [
    { id: 'UC8IHAQMuiJdY6ALuhG7iU8Q', name: 'FilmRise Movies' },
    { id: 'UCVFYikepF-avelvuIaQ_lHA', name: 'Popcornflix' },
    { id: 'UCpHaAKu74UHvcYCi2g_PvBQ', name: 'Shout! Studios' },
    { id: 'UC2u3R3pjOiPZu4LtTlKkxdw', name: 'Maverick Movies' },
    { id: 'UCTMt7iMWa7jy0fNXIktwyLA', name: 'Omeleto' },
    { id: 'UC7sDT8jZ76VLV1u__krUutA', name: 'DUST' },
    { id: 'UCMOB6uDg7e-h8OuCw8dK2_Q', name: 'ALTER' },
    { id: 'UCE34fwgW7kWr7tc7YiOWtRw', name: 'PizzaFlix' },
    { id: 'UCEK3tT7DcfWGWJpNEDBdWog', name: 'Mosfilm' },
    { id: 'UCoulHkEKWQ1t36oBheqEE_g', name: 'Gravitas Ventures' },
    ...extraMovies.filter(Boolean)
  ];

  const cartoonsCreators = [
    { id: 'UC9trsD1jCTXXtN3xIOIU8gg', name: 'WB Kids' },
    { id: 'UCn_FAXem2-e3HQvmK-mOH4g', name: 'GLITCH' },
    { id: 'UCbmWOFTbZoDLWqG1rvFnJ0g', name: 'WildBrain Cartoons' },
    { id: 'UCzfyYtgvkx5mLy8nlLlayYg', name: 'SpindleHorse' },
    { id: 'UCkAGrHCLFmlK3H2kd6isipg', name: 'Mr Bean' },
    { id: 'UCH6vXjt-BA7QHl0KnfL-7RQ', name: "Simon's Cat" },
    { id: 'UCbKWv2x9t6u8yZoB3KcPtnw', name: 'Alan Becker' },
    { id: 'UCxXu9tCU63mF1ntk89XPkzA', name: 'Worthikids' },
    { id: 'UCLFXk9J3O-hhOk0msOjKYdQ', name: 'TerminalMontage' },
    { id: 'UCtlth0w7_mYqpHPViMhQ99Q', name: 'Oddbods' },
    { id: 'UCS7H8U-n5mINVJjJsaRtGHg', name: 'Shaun the Sheep' },
    ...extraCartoons.filter(Boolean)
  ];

  console.log(`Fetching Movies (${moviesCreators.length} creators)...`);
  const movieLists = await Promise.all(moviesCreators.map(c => fetchChannelUploads(c.id, c.name)));
  const movieVideos = roundRobin(movieLists).slice(0, 50);
  console.log(`Verified ${movieVideos.length} embeddable Movies with real durations!`);

  console.log(`Fetching Cartoons (${cartoonsCreators.length} creators)...`);
  const cartoonLists = await Promise.all(cartoonsCreators.map(c => fetchChannelUploads(c.id, c.name)));
  const cartoonVideos = roundRobin(cartoonLists).slice(0, 50);
  console.log(`Verified ${cartoonVideos.length} embeddable Cartoons with real durations!`);

  // Update verified-channels-full.json
  const verifiedMap = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));
  verifiedMap.movies = moviesCreators;
  verifiedMap.cartoons = cartoonsCreators;
  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(verifiedMap, null, 2));

  // Update lib/seed-catalog.ts
  const catalogContent = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
  const catMatch = catalogContent.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
  const lineupMatch = catalogContent.match(/export const SEED_LINEUPS: Record<string, ChannelLineup> = ({[\s\S]*?});\s*$/);

  const categories = JSON.parse(catMatch[1]);
  const lineups = JSON.parse(lineupMatch[1]);

  const newCategories = [
    {
      id: 'movies',
      name: 'Movies',
      hue: 12,
      description: 'Full-length feature films, sci-fi showcases, indie cinema & cult classics'
    },
    {
      id: 'cartoons',
      name: 'Cartoons',
      hue: 48,
      description: 'Saturday morning cartoons, indie animation series & classic toons'
    }
  ];

  for (const nc of newCategories) {
    if (!categories.some(c => c.id === nc.id)) {
      categories.push(nc);
    }
  }

  lineups.movies = {
    categoryId: 'movies',
    categoryName: 'Movies',
    hue: 12,
    builtAt: Date.now(),
    videos: movieVideos
  };

  lineups.cartoons = {
    categoryId: 'cartoons',
    categoryName: 'Cartoons',
    hue: 48,
    builtAt: Date.now(),
    videos: cartoonVideos
  };

  const updatedTs = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;
  fs.writeFileSync('lib/seed-catalog.ts', updatedTs);
  console.log('Successfully added Movies and Cartoons to lib/seed-catalog.ts!');
}

main();
