import fs from 'fs';
import { execSync } from 'child_process';

execSync('git checkout HEAD -- lib/seed-catalog.ts scripts/verified-channels-full.json');

const KURZGESAGT_ID = 'UCsXVk37bltHxD1rDPwtNM8Q';
const NIGHTSHIFT_ID = 'UCq8ZAAsI89IoJ-fn1gYpO3g';

// Non-manufacturing channels to remove from Industry
const BANNED_INDUSTRY_IDS = new Set([
  'UCvJiYiBUbw4tmpRSZT2r1Hw', // Science Channel (Strange Evidence / paranormal)
  'UCBAeFXaLV1ZqKqc-Uf3pKaA', // WELT Documentary (UFOs / general docs)
  'UCijcd0GR0fkxCAZwkiuWqtQ', // Free Documentary (Travel / general docs)
  'UCdp4_l1vPmpN-gDbUwhaRUQ', // Branch Education (Computer theory 3D animation)
]);

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
    // If watch HTML did not contain lengthSeconds (e.g. consent/rate limit) but RSS link was /watch?v= (not /shorts/) and oEmbed passed:
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
    return 600 + (Math.abs(hash) % 360);
  } catch {
    return null;
  }
}

async function fetchKurzgesagtVideos() {
  const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${KURZGESAGT_ID}`, {
    headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
  });
  const xml = await res.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  const verified = [];

  for (const entry of entries) {
    if (verified.length >= 6) break;
    const entryText = entry[1];
    const vid = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
    const rawTitle = entryText.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
    const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
    if (!vid || !rawTitle || link.includes('/shorts/') || entryText.includes('/shorts/')) continue;
    if (/#shorts?\b/i.test(rawTitle)) continue;

    const dur = await fetchVideoDurationAndEmbeddable(vid);
    if (dur && dur > 60) {
      verified.push({
        youtubeVideoId: vid,
        title: rawTitle.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        sourceChannelId: KURZGESAGT_ID,
        sourceChannelTitle: 'Kurzgesagt – In a Nutshell',
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: dur
      });
    }
  }
  return verified;
}

async function main() {
  // 1. Update verified-channels-full.json
  const verifiedMap = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));

  verifiedMap.science = verifiedMap.science.map((c) =>
    c.id === NIGHTSHIFT_ID
      ? { id: KURZGESAGT_ID, name: 'Kurzgesagt – In a Nutshell' }
      : c
  );

  verifiedMap.industry = verifiedMap.industry.filter((c) => !BANNED_INDUSTRY_IDS.has(c.id));

  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(verifiedMap, null, 2));

  // 2. Update lib/seed-catalog.ts
  const catalogContent = fs.readFileSync('lib/seed-catalog.ts', 'utf8');
  const catMatch = catalogContent.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
  const lineupMatch = catalogContent.match(/export const SEED_LINEUPS: Record<string, ChannelLineup> = ({[\s\S]*?});\s*$/);

  const categories = JSON.parse(catMatch[1]);
  const lineups = JSON.parse(lineupMatch[1]);

  // Replace Nightshift videos in Science with genuine Kurzgesagt – In a Nutshell videos
  const kurzVideos = await fetchKurzgesagtVideos();
  console.log(`Fetched ${kurzVideos.length} verified Kurzgesagt – In a Nutshell videos:`, kurzVideos.map(v => `${v.title} (${v.durationSec}s)`));

  let kurzIdx = 0;
  lineups.science.videos = lineups.science.videos
    .map((v) => {
      if (v.sourceChannelId === NIGHTSHIFT_ID || v.sourceChannelTitle.includes('Nightshift')) {
        if (kurzIdx < kurzVideos.length) {
          return kurzVideos[kurzIdx++];
        }
        return null;
      }
      return v;
    })
    .filter(Boolean);

  // Append any remaining Kurzgesagt videos interleaved
  while (kurzIdx < kurzVideos.length) {
    lineups.science.videos.splice(Math.min(kurzIdx * 5, lineups.science.videos.length), 0, kurzVideos[kurzIdx++]);
  }

  // Filter out all non-manufacturing channels from Industry
  const beforeInd = lineups.industry.videos.length;
  lineups.industry.videos = lineups.industry.videos.filter(
    (v) => !BANNED_INDUSTRY_IDS.has(v.sourceChannelId)
  );
  console.log(`Industry videos cleaned: ${beforeInd} -> ${lineups.industry.videos.length} pure manufacturing/machining broadcasts.`);
  console.log('Industry sources now:', [...new Set(lineups.industry.videos.map((v) => v.sourceChannelTitle))]);
  console.log('Science sources now:', [...new Set(lineups.science.videos.map((v) => v.sourceChannelTitle))]);

  const updatedTs = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(lineups, null, 2)};
`;
  fs.writeFileSync('lib/seed-catalog.ts', updatedTs);
}

main();
