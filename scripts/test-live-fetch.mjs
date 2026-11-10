async function testSpeed() {
  const start = Date.now();
  const channels = [
    { id: 'UCBJycsmduvYEL83R_U4JriQ', name: 'MKBHD' },
    { id: 'UC2Xd-TjJByJyK2w1zNwY0zQ', name: 'Fireship' },
    { id: 'UCdBK94H6oZT2Q7l0-b0xmMg', name: 'Linus Tech Tips' }
  ];

  const results = await Promise.all(channels.map(async ch => {
    try {
      const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${ch.id}`);
      if (!res.ok) return [];
      const xml = await res.text();
      const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
      return entries.map(e => {
        const vid = e[1].match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
        const title = e[1].match(/<title>(.*?)<\/title>/)?.[1]?.trim();
        const author = e[1].match(/<author>\s*<name>(.*?)<\/name>/)?.[1]?.trim() || ch.name;
        return { vid, title, author, chId: ch.id };
      }).filter(x => x.vid && x.title && !x.title.includes('#shorts') && !x.title.includes('#Shorts'));
    } catch {
      return [];
    }
  }));

  const total = results.flat();
  console.log(`Live fetched ${total.length} real videos in ${Date.now() - start}ms!`);
  for (let i = 0; i < 3; i++) {
    console.log(` - Channel ${i+1} (${channels[i].name}): ${results[i][0]?.title}`);
  }
}

testSpeed();
