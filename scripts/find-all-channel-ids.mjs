async function resolveUrl(urlPath) {
  try {
    const res = await fetch(`https://www.youtube.com/${urlPath}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const m = html.match(/"channelId":"(UC[\w-]{22})"/);
    const meta = html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/);
    return m ? m[1] : (meta ? meta[1] : null);
  } catch {
    return null;
  }
}

async function testHandles() {
  const tests = [
    'user/theverge', '@verge',
    'user/IGNentertainment', '@ign',
    'user/gordonramsay',
    'user/FirstWeFeast',
    'user/Vsauce',
    'user/scishow',
    'user/minutephysics',
    'user/pbsspacetime',
    'user/ESPN',
    'user/olympic',
    'user/woltersworld',
    'user/cinefix',
    'user/AthleanX',
    'user/kexp',
    'user/TEDEducation'
  ];

  for (const t of tests) {
    const cid = await resolveUrl(t);
    console.log(`${t} => ${cid || 'not found'}`);
  }
}

testHandles();
