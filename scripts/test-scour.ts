import { getLineupForCategory, BROADCAST_CHANNELS_MAP } from '../lib/youtube';

async function test() {
  const cats = Object.keys(BROADCAST_CHANNELS_MAP);
  console.log(`Testing live scouring for all ${cats.length} channels...\n`);
  
  for (const c of cats) {
    const l = await getLineupForCategory(c);
    const creators = Array.from(new Set(l.videos.map(v => v.sourceChannelTitle)));
    console.log(`[${c.toUpperCase()}]: ${l.videos.length} total shows scoured across ${creators.length} distinct creators.`);
    console.log(`  Creators: ${creators.slice(0, 8).join(', ')}${creators.length > 8 ? '...' : ''}`);
    console.log(`  Sample: 1. [${l.videos[0]?.sourceChannelTitle}] ${l.videos[0]?.title.slice(0, 35)}... | 2. [${l.videos[1]?.sourceChannelTitle}] ${l.videos[1]?.title.slice(0, 35)}...\n`);
  }
}

test();
