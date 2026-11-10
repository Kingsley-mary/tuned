import { getLiveBroadcastState } from '../lib/broadcast-clock';
import { SEED_LINEUPS } from '../lib/seed-catalog';

for (const [id, lineup] of Object.entries(SEED_LINEUPS).slice(0, 5)) {
  const state = getLiveBroadcastState(lineup.videos, id);
  console.log(`Channel [${id.toUpperCase()}]: Show #${state.videoIndex} (${state.currentVideo?.sourceChannelTitle}) seeking to ${state.seekSeconds}s / ${state.durationSec}s | Title: "${state.currentVideo?.title.slice(0, 40)}"`);
}
