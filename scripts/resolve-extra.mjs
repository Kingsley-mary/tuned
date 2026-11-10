import fs from 'fs';

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
    return test.ok ? m[1] : null;
  } catch { return null; }
}

async function go() {
  const json = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));

  const fitnessExtras = [
    { handle: 'thebodycoach1', name: 'The Body Coach TV' },
    { handle: 'ChloeTing', name: 'Chloe Ting' },
    { handle: 'MadFit', name: 'MadFit' },
    { handle: 'PamelaRf1', name: 'Pamela Reif' },
    { handle: 'CalisthenicsFamily', name: 'Calisthenics Family' }
  ];

  for (const c of fitnessExtras) {
    const id = await resolve(c.handle);
    if (id) {
      json.fitness.push({ id, name: c.name });
      console.log(`Added fitness: ${c.name} => ${id}`);
    }
  }

  const designExtras = [
    { handle: 'livingbig', name: 'Living Big In A Tiny House' },
    { handle: 'dezeen', name: 'Dezeen' },
    { handle: 'archdaily', name: 'ArchDaily' },
    { handle: 'designboom', name: 'designboom' }
  ];

  for (const c of designExtras) {
    const id = await resolve(c.handle);
    if (id) {
      json.design.push({ id, name: c.name });
      console.log(`Added design: ${c.name} => ${id}`);
    }
  }

  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(json, null, 2));
  console.log('\nUpdated scripts/verified-channels-full.json with extra creators!');
  
  for (const [k, v] of Object.entries(json)) {
    console.log(`Channel [${k.toUpperCase()}]: ${v.length} verified creators.`);
  }
}

go();
