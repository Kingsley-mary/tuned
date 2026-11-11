export type MotionBumperVariant = 'ident' | 'lineup' | 'card' | 'visualizer';

export interface YouTubeBumperClip {
  youtubeVideoId: string;
  label: string;
  durationSec: number;
}

export type BreakPlan =
  | {
      kind: 'motion';
      variant: MotionBumperVariant;
      durationMs: number;
      cardLead: string;
      cardPunchline: string;
    }
  | {
      kind: 'youtube';
      clip: YouTubeBumperClip;
    };

// Curated, verified iconic broadcast idents, console startups & theater promos (zero Shorts/slop loops)
const CLIPS = {
  // Animations
  cnCity1: { youtubeVideoId: 'h9IPZC6giFM', label: 'Cartoon Network Ident', durationSec: 10 },
  cnCity2: { youtubeVideoId: 'boaUvdivics', label: 'Cartoon Network Bumper', durationSec: 10 },
  cnPowerhouse: { youtubeVideoId: 'MzFF_5Tf98s', label: 'Powerhouse Ident', durationSec: 10 },
  asCheckered1: { youtubeVideoId: 'ubcceuUYwtg', label: '[adult swim] Bump', durationSec: 10 },
  asCheckered2: { youtubeVideoId: 'M6svpGyleCQ', label: '[adult swim] Bumper', durationSec: 15 },
  nick2001: { youtubeVideoId: 'p0DOSv1sA2w', label: 'Nickelodeon Ident', durationSec: 10 },
  pixarFriends: { youtubeVideoId: 'JUoxyPvdgk8', label: 'Studio Ident', durationSec: 26 },
  // Games
  ps1Boot: { youtubeVideoId: 'oAhvQoLpvsM', label: 'PlayStation Ident', durationSec: 16 },
  gcBoot: { youtubeVideoId: 'HKfKk40dPr8', label: 'GameCube Ident', durationSec: 6 },
  // Tech
  mac1984: { youtubeVideoId: 'EKrxM65enjs', label: 'Macintosh 1984', durationSec: 21 },
  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 11 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju ID', durationSec: 21 },
  // Movies / Film
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 17 },
  thxDeepNote: { youtubeVideoId: 'i43WNXnlGMs', label: 'THX Deep Note', durationSec: 32 },
  // Food / Sports / News
  driveInDog: { youtubeVideoId: 'H8WA6ceRfEQ', label: 'Drive-In Intermission', durationSec: 25 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'ITV Sport Bumper', durationSec: 5 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'WLS News ID', durationSec: 5 },
} satisfies Record<string, YouTubeBumperClip>;

// Only assign Option 3 clips to channels with truly iconic retro/broadcast promos
const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [CLIPS.mac1984],
  movies: [CLIPS.featurePres, CLIPS.thxDeepNote],
  film: [CLIPS.featurePres, CLIPS.thxDeepNote],
  cartoons: [
    CLIPS.cnCity1,
    CLIPS.asCheckered1,
    CLIPS.nick2001,
    CLIPS.cnCity2,
    CLIPS.asCheckered2,
    CLIPS.cnPowerhouse,
    CLIPS.pixarFriends,
  ],
  music: [CLIPS.mtvKaiju, CLIPS.mtvChainsaw],
  games: [CLIPS.ps1Boot, CLIPS.gcBoot],
  food: [CLIPS.driveInDog],
  sports: [CLIPS.itvSport],
  news: [CLIPS.kadnNews, CLIPS.abcNews],
};

interface DeadpanCard {
  lead: string;
  punchline: string;
}

const CHANNEL_CARDS: Record<string, DeadpanCard[]> = {
  tech: [
    { lead: 'Checking thermal paste…', punchline: 'All circuits nominal. Next teardown in five.' },
    { lead: 'You could be scrolling a feed.', punchline: 'Instead you are watching linear television.' },
  ],
  movies: [
    { lead: 'Changing 35mm reels.', punchline: 'Silence your phone in row G.' },
    { lead: 'No skip-intro button here.', punchline: 'Next feature presentation rolling shortly.' },
  ],
  cartoons: [
    { lead: 'Don’t touch that dial.', punchline: 'More animation right after this.' },
    { lead: 'Fresh ink drying.', punchline: 'Stay tuned — cartoons continue in seconds.' },
  ],
  industry: [
    { lead: 'Shift changeover.', punchline: 'Calibrating tolerances for the next build.' },
  ],
  music: [
    { lead: 'Side A complete.', punchline: 'Flipping the tape to Side B now.' },
  ],
  science: [
    { lead: 'Peer review complete.', punchline: 'Next experiment begins in five seconds.' },
  ],
  food: [
    { lead: 'Letting the pan hit smoke point.', punchline: 'Order up in a moment.' },
  ],
  games: [
    { lead: 'Memory card detected.', punchline: 'Loading next stage — stay locked in.' },
  ],
  sports: [
    { lead: 'Television timeout.', punchline: 'Back to live coverage in seconds.' },
  ],
  travel: [
    { lead: 'Next departure boarding.', punchline: 'Keep your window seat.' },
  ],
  film: [
    { lead: '24 frames per second.', punchline: 'Back to the director’s chair in five.' },
  ],
  fitness: [
    { lead: 'Rest timer ending.', punchline: 'Next set starts shortly.' },
  ],
  art: [
    { lead: 'First layer drying.', punchline: 'Back in the studio in a second.' },
  ],
  design: [
    { lead: 'Tightening the kerning.', punchline: 'Next breakdown coming right up.' },
  ],
  learning: [
    { lead: 'Turning to chapter two.', punchline: 'Stay curious.' },
  ],
  documentaries: [
    { lead: 'Cueing archival reel.', punchline: 'Broadcast resumes in seconds.' },
  ],
  cars: [
    { lead: 'Four fresh tires.', punchline: 'Back out on track now.' },
  ],
};

const LATE_NIGHT_CARDS: DeadpanCard[] = [
  { lead: 'It is late.', punchline: 'Nobody else is watching this channel right now. Except you.' },
  { lead: 'Past midnight broadcast.', punchline: 'Still no algorithm. Just television.' },
];

const DEFAULT_CARDS: DeadpanCard[] = [
  { lead: 'Zero feeds. Zero doomscroll.', punchline: 'Just Tuned. Up next in seconds.' },
  { lead: 'Station identification.', punchline: 'Continuing uninterrupted broadcast now.' },
];

const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number }[] = [
  { variant: 'ident', durationMs: 4200 },
  { variant: 'lineup', durationMs: 4500 },
  { variant: 'visualizer', durationMs: 4400 },
  { variant: 'card', durationMs: 4100 },
];

/**
 * Picks the next station break for a channel:
 * rotates smoothly across studio Three.js 3D idents (Option 1 + Web Audio chimes)
 * and, where curated classics exist, weaves in verified Option 3 TV/bootup promos.
 */
export function pickNextBreak(
  categoryId: string,
  breakCount: number,
  failedIds?: Set<string>
): BreakPlan {
  const pool = (YOUTUBE_BUMPERS_BY_CHANNEL[categoryId] || []).filter(
    (clip) => !failedIds?.has(clip.youtubeVideoId)
  );

  // Every 3rd break (breakCount % 3 === 1) plays a curated Option 3 bumper if that channel has one
  if (pool.length > 0 && breakCount % 3 === 1) {
    const clipIdx = Math.floor(breakCount / 3) % pool.length;
    return {
      kind: 'youtube',
      clip: pool[clipIdx],
    };
  }

  const youtubeOffset = pool.length > 0 ? Math.floor((breakCount + 1) / 3) : 0;
  const motionIdx = (breakCount - youtubeOffset) % MOTION_ROTATION.length;
  const template = MOTION_ROTATION[Math.max(0, motionIdx)];

  const hour = typeof window !== 'undefined' ? new Date().getHours() : 20;
  const isLateNight = hour >= 0 && hour < 5;
  const baseCards = CHANNEL_CARDS[categoryId] || DEFAULT_CARDS;
  const cardPool = isLateNight ? [...LATE_NIGHT_CARDS, ...baseCards] : baseCards;
  const pickedCard = cardPool[breakCount % cardPool.length];

  return {
    kind: 'motion',
    variant: template.variant,
    durationMs: template.durationMs,
    cardLead: pickedCard.lead,
    cardPunchline: pickedCard.punchline,
  };
}
