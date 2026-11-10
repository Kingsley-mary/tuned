import fs from 'fs';

const DAILY_TO_ADD = [
  { cat: 'tech', id: 'UC-6OW5aJYBFM33zXQlBKPNA', name: 'Engadget' },
  { cat: 'tech', id: 'UCgyqtNWZmIxTx3b6OxTSALw', name: 'Android Authority' },
  { cat: 'tech', id: 'UCOmcA3f_RrH6b9NmcNa4tdg', name: 'CNET' },
  { cat: 'tech', id: 'UCUUNkL6Wke6i0P6funa7wdQ', name: 'AppleInsider' },
  { cat: 'food', id: 'UCJFp8uSYCjXOMnkUyb3CQ3Q', name: 'Tasty' },
  { cat: 'food', id: 'UCfFI8jIjvIApUACJ3qjax2w', name: 'Food52' },
  { cat: 'learning', id: 'UCLXo7UDZvByw2ixzpQCufnA', name: 'Vox' },
  { cat: 'science', id: 'UCeiYXex_fwgYDonaTcSIk6w', name: 'MinuteEarth' }
];

const channels = JSON.parse(fs.readFileSync('scripts/verified-channels-full.json', 'utf8'));

for (const item of DAILY_TO_ADD) {
  if (!channels[item.cat]) channels[item.cat] = [];
  const exists = channels[item.cat].some(c => c.id === item.id);
  if (!exists) {
    channels[item.cat].unshift({ id: item.id, name: item.name }); // unshift so high-frequency daily shows are prominent!
    console.log(`Added daily creator: [${item.name}] to ${item.cat}`);
  }
}

fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(channels, null, 2));
console.log('Saved updated scripts/verified-channels-full.json!');
