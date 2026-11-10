async function getChannelIdFromHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const html = await res.text();
    const m = html.match(/"channelId":"(UC[\w-]{22})"/);
    if (m) {
      console.log(`Handle @${handle} => ${m[1]}`);
      return m[1];
    }
    const meta = html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/);
    if (meta) {
      console.log(`Handle @${handle} => ${meta[1]}`);
      return meta[1];
    }
    console.log(`Handle @${handle} not found`);
  } catch (e) {
    console.error(`Error for @${handle}:`, e.message);
  }
}

const handles = ['karaandnate', 'RickStevesEurope', 'ThomasFlight', 'StudioBinder', 'YesTheory', 'cinefix', 'Tested'];
for (const h of handles) {
  await getChannelIdFromHandle(h);
}
