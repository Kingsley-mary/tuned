import fs from 'fs';
import { getLineupForCategory, BROADCAST_CHANNELS_MAP } from '../lib/youtube';
import { CATEGORIES } from '../lib/seed-catalog';

async function generate() {
  console.log('Generating fresh verified SEED_LINEUPS for lib/seed-catalog.ts...');
  const seedLineups: Record<string, any> = {};

  for (const catId of Object.keys(BROADCAST_CHANNELS_MAP)) {
    console.log(`Scouring ${catId}...`);
    const lineup = await getLineupForCategory(catId);
    // Take up to 50 best interleaved shows per channel for the seed file so bundle remains fast
    seedLineups[catId] = {
      ...lineup,
      videos: lineup.videos.slice(0, 50)
    };
  }

  const content = `import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2)};

export const SEED_LINEUPS: Record<string, ChannelLineup> = ${JSON.stringify(seedLineups, null, 2)};
`;

  fs.writeFileSync('lib/seed-catalog.ts', content);
  console.log('Successfully updated lib/seed-catalog.ts with real verified multi-creator lineups!');
}

generate();
