import fs from 'fs';

const handles = [
  // Tech
  'mkbhd', 'fireship', 'LinusTechTips', 'Dave2D', 'TheVerge',
  // Games
  'GMTK', 'NoclipVideo', 'IGN', 'videogamedunkey',
  // Music
  'nprmusic', 'COLORSxSTUDIOS', 'kexp',
  // Food
  'bingingwithbabish', 'JoshuaWeissman', 'gordonramsay', 'epicurious',
  // Science
  'veritasium', 'kurzgesagt', 'smartereveryday', 'MarkRober', 'Vsauce',
  // Sports
  'DudePerfect', 'redbull', 'PeopleAreAwesome',
  // Travel
  'karaandnate', 'YesTheory', 'lostleblanc', 'drewbinsky',
  // Film
  'ThomasFlight', 'StudioBinder', 'cinefix',
  // Fitness
  'HybridCalisthenics', 'Calisthenicmovement', 'CHRISHERIA',
  // Art
  'ProkoTV', 'Jazza', 'tenhundred',
  // Design
  'nevertoosmall', 'ArchitecturalDigest', 'TheLocalProject',
  // Learning
  'TEDEd', '3blue1brown', 'Wendoverproductions', 'RealEngineering', 'crashcourse'
];

async function run() {
  const map = {};
  for (const h of handles) {
    try {
      const res = await fetch(`https://www.youtube.com/@${h}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      const html = await res.text();
      const m = html.match(/"channelId":"(UC[\w-]{22})"/);
      const meta = html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/);
      const chId = m ? m[1] : (meta ? meta[1] : null);
      if (chId) {
        map[h] = chId;
        console.log(`✓ ${h} => ${chId}`);
      } else {
        console.log(`✗ ${h} not found`);
      }
    } catch (e) {
      console.error(`Error for ${h}:`, e.message);
    }
  }

  fs.writeFileSync('scripts/channel-map.json', JSON.stringify(map, null, 2));
  console.log('Saved channel map with', Object.keys(map).length, 'channels.');
}

run();
