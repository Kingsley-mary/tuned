import fs from 'fs';

const DAILY_CANDIDATES = [
  // Tech daily uploaders
  { cat: 'tech', handle: 'engadget', name: 'Engadget' },
  { cat: 'tech', handle: 'CNET', name: 'CNET' },
  { cat: 'tech', handle: 'AndroidAuthority', name: 'Android Authority' },
  { cat: 'tech', handle: 'frontpagetech', name: 'Front Page Tech' },
  { cat: 'tech', handle: 'ShortCircuit', name: 'ShortCircuit' },
  { cat: 'tech', handle: 'AppleInsider', name: 'AppleInsider' },

  // Games daily uploaders
  { cat: 'games', handle: 'KindaFunnyGames', name: 'Kinda Funny Games' },
  { cat: 'games', handle: 'TripleJump', name: 'TripleJump' },
  { cat: 'games', handle: 'InsideGaming', name: 'Inside Gaming' },

  // Food daily uploaders
  { cat: 'food', handle: 'buzzfeedtasty', name: 'Tasty' },
  { cat: 'food', handle: 'Food52', name: 'Food52' },

  // Science / Education daily uploaders
  { cat: 'science', handle: 'scishowspace', name: 'SciShow Space' },
  { cat: 'science', handle: 'minuteearth', name: 'MinuteEarth' },
  { cat: 'learning', handle: 'vox', name: 'Vox' },
  { cat: 'learning', handle: 'scishowpsych', name: 'SciShow Psych' }
];

async function resolve(h) {
  try {
    const res = await fetch(`https://www.youtube.com/@${h}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const m = html.match(/<meta itemprop="identifier" content="(UC[\w-]{22})">/) ||
              html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/) ||
              html.match(/"channelId":"(UC[\w-]{22})"/) ||
              html.match(/"externalId":"(UC[\w-]{22})"/);
    if (!m) return null;
    const test = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${m[1]}`);
    if (!test.ok) return null;
    const xml = await test.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    // Check publication date of most recent upload
    const latestDate = entries[0]?.[1]?.match(/<published>(.*?)<\/published>/)?.[1];
    return { id: m[1], count: entries.length, latest: latestDate };
  } catch { return null; }
}

async function run() {
  console.log('Testing daily uploader candidates...');
  const verified = [];
  for (const c of DAILY_CANDIDATES) {
    const r = await resolve(c.handle);
    if (r && r.count >= 5) {
      console.log(`✓ [${c.name}] (${c.cat}) => ${r.id} (Latest upload: ${r.latest})`);
      verified.push({ cat: c.cat, id: r.id, name: c.name });
    } else {
      console.log(`✗ [${c.name}] not resolved or insufficient uploads`);
    }
  }

  console.log(`\nVerified ${verified.length} active daily uploaders.`);
  fs.writeFileSync('scripts/daily-uploaders.json', JSON.stringify(verified, null, 2));
}

run();
