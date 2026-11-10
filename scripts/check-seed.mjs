import { SEED_LINEUPS } from '../lib/seed-catalog.ts';

for (const [cat, lineup] of Object.entries(SEED_LINEUPS)) {
  console.log(`${cat} (${lineup.categoryName}): ${lineup.videos.length} videos`);
  for (const v of lineup.videos.slice(0, 2)) {
    console.log(`  - [${v.youtubeVideoId}] ${v.title} (${v.sourceChannelTitle})`);
  }
}
