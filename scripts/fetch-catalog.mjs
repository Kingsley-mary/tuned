// scripts/fetch-catalog.mjs
import fs from 'fs';

const CHANNEL_HANDLES = {
  tech: ['@mkbhd', '@Fireship', '@TheVerge'],
  games: ['@GMTK', '@NoclipVideo', '@IGN'],
  music: ['@nprmusic', '@COLORSxSTUDIOS', '@KEXP'],
  food: ['@babishculinaryuniverse', '@JoshuaWeissman', '@bonappetit'],
  science: ['@kurzgesagt', '@veritasium', '@smartereveryday'],
  sports: ['@redbull', '@DudePerfect', '@Olympics'],
  travel: ['@YesTheory', '@KaraandNate', '@expedia'],
  film: ['@ThomasFlight', '@StudioBinder', '@nowyouseeit'],
  fitness: ['@HybridCalisthenics', '@Calisthenicmovement', '@athleanx'],
  art: ['@BaumgartnerRestoration', '@ProkoTV', '@Drawfee'],
  design: ['@nevertoosmall', '@ArchitecturalDigest', '@DesignSeed'],
  learning: ['@3blue1brown', '@TEDEd', '@crashcourse']
};

async function getChannelIdFromHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/${handle}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    const match = html.match(/"channelId":"(UC[a-zA-Z0-9_-]{22})"/);
    if (match) return match[1];
    const match2 = html.match(/"externalId":"(UC[a-zA-Z0-9_-]{22})"/);
    if (match2) return match2[1];
    const match3 = html.match(/channel\/(UC[a-zA-Z0-9_-]{22})/);
    return match3 ? match3[1] : null;
  } catch (err) {
    console.error(`Failed to get channel ID for ${handle}:`, err.message);
    return null;
  }
}

async function getVideosForChannelId(channelId) {
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const xml = await res.text();
    
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const videos = [];
    
    for (const entry of entries) {
      const entryText = entry[1];
      const idMatch = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entryText.match(/<title>(.*?)<\/title>/);
      const authorMatch = entryText.match(/<name>(.*?)<\/name>/);
      
      if (idMatch && titleMatch) {
        videos.push({
          id: idMatch[1].trim(),
          xmlTitle: titleMatch[1].trim(),
          author: authorMatch ? authorMatch[1].trim() : ''
        });
      }
    }
    return videos;
  } catch (e) {
    console.error(`Error fetching XML for ${channelId}:`, e.message);
    return [];
  }
}

async function verifyWithOembed(videoId) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

async function main() {
  console.log('Resolving channels and fetching verified videos...');
  const catalog = {};

  for (const [catKey, handles] of Object.entries(CHANNEL_HANDLES)) {
    console.log(`Processing category: ${catKey}`);
    const validVideos = [];
    const seenIds = new Set();

    for (const handle of handles) {
      if (validVideos.length >= 15) break;
      const cid = await getChannelIdFromHandle(handle);
      if (!cid) {
        console.log(`  Handle ${handle} could not be resolved.`);
        continue;
      }
      console.log(`  Handle ${handle} resolved to ${cid}`);
      const rawVideos = await getVideosForChannelId(cid);
      console.log(`  Found ${rawVideos.length} raw videos in feed`);

      for (const item of rawVideos) {
        if (validVideos.length >= 15) break;
        if (seenIds.has(item.id)) continue;
        seenIds.add(item.id);

        const oembed = await verifyWithOembed(item.id);
        if (oembed && oembed.title) {
          // Exclude shorts if title contains #shorts or typical short keywords if desirable
          validVideos.push({
            youtubeVideoId: item.id,
            title: oembed.title,
            sourceChannelId: cid,
            sourceChannelTitle: oembed.author_name || item.author,
            thumbnailUrl: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
            durationSec: 600, // Reasonable default for display until duration is known
          });
          console.log(`    [OK] ${item.id}: ${oembed.title.slice(0, 45)}...`);
        } else {
          console.log(`    [SKIP/FAIL] ${item.id}`);
        }
      }
    }
    catalog[catKey] = validVideos;
    console.log(`Category ${catKey} has ${validVideos.length} verified videos.`);
  }

  fs.writeFileSync('scripts/verified-catalog.json', JSON.stringify(catalog, null, 2));
  console.log('Finished writing scripts/verified-catalog.json');
}

main();
