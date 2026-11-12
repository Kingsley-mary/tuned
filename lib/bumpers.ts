export type MotionBumperVariant =
  | 'ident'
  | 'cinematic'
  | 'lineup'
  | 'slate'
  | 'field'
  | 'card'
  | 'visualizer';

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

// Curated, verified widescreen broadcast idents, intros & promos across all 22 categories
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
  ps2Boot: { youtubeVideoId: '-gHkJliF_v4', label: 'PS2 Startup', durationSec: 14 },
  // Tech
  mac1984: { youtubeVideoId: 'EKrxM65enjs', label: 'Macintosh 1984', durationSec: 21 },
  win95Ad: { youtubeVideoId: 'Tw-GGT6900s', label: 'Windows 95 Spot', durationSec: 32 },
  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 11 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju ID', durationSec: 21 },
  vh1Ident: { youtubeVideoId: 'LPhUn9YB0JE', label: 'VH1 Station ID', durationSec: 35 },
  // Movies / Film / Entertainment
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 17 },
  thxDeepNote: { youtubeVideoId: 'i43WNXnlGMs', label: 'THX Deep Note', durationSec: 32 },
  hbo1992: { youtubeVideoId: 'kISr9-2ANDA', label: 'Special Presentation', durationSec: 19 },
  vh1Europe: { youtubeVideoId: '0KYpemsVClg', label: 'VH1 Europe Ident', durationSec: 15 },
  // Science / Learning / Documentaries
  discoveryHd: { youtubeVideoId: '1pTqM9c7DO8', label: 'Discovery Ident', durationSec: 5 },
  discoveryBumper: { youtubeVideoId: '7ynDcJBJlMU', label: 'Discovery Bumper', durationSec: 27 },
  billNye: { youtubeVideoId: 'UtVJdPfm0F8', label: 'Science Intro', durationSec: 31 },
  natGeo: { youtubeVideoId: 'r_NfprynbLk', label: 'NatGeo Ident', durationSec: 13 },
  bbc1980s: { youtubeVideoId: 'fEF82qBFo9I', label: 'BBC Video Ident', durationSec: 37 },
  bbc100: { youtubeVideoId: 'H81x-4oYvCo', label: 'BBC Ident', durationSec: 17 },
  pbs1990s: { youtubeVideoId: 'Jb35JfWbpaY', label: 'PBS Station ID', durationSec: 5 },
  pbsKids: { youtubeVideoId: 'KPCpTyDhgfs', label: 'PBS P-Pals ID', durationSec: 8 },
  // Industry / Architecture / Design
  howItsMade: { youtubeVideoId: 'h0L3J5p3lcE', label: "How It's Made Intro", durationSec: 22 },
  adEmma: { youtubeVideoId: 'ioEa9fe_rc4', label: 'Architectural Digest', durationSec: 14 },
  adWinnie: { youtubeVideoId: 'pxTXmz_tPYU', label: 'Architectural Digest', durationSec: 13 },
  // Cars / Sports / Travel / Food / Fitness / Business / News / Religion
  topGear: { youtubeVideoId: 'QbyOvkELZ3Y', label: 'Top Gear Intro', durationSec: 20 },
  f1McLaren: { youtubeVideoId: 'xvKfKnx2wOc', label: 'F1 Opener', durationSec: 23 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'ITV Sport Bumper', durationSec: 5 },
  bourdainParts: { youtubeVideoId: 'hF2V-5lBWoo', label: 'Parts Unknown Promo', durationSec: 30 },
  bourdainNoRes: { youtubeVideoId: 'V03F545Gd38', label: 'No Reservations Intro', durationSec: 24 },
  driveInDog: { youtubeVideoId: 'H8WA6ceRfEQ', label: 'Drive-In Intermission', durationSec: 25 },
  nikeSpot: { youtubeVideoId: '18XjACKal0o', label: 'Nike Commercial', durationSec: 15 },
  bloombergBumper: { youtubeVideoId: 'zixr0VOg2m0', label: 'Bloomberg Bumper', durationSec: 18 },
  cnbcBreak: { youtubeVideoId: '590wrWi2y0I', label: 'CNBC Break ID', durationSec: 5 },
  cnbcIdent: { youtubeVideoId: 'ISNsB4Ta70A', label: 'CNBC Station ID', durationSec: 10 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'WLS News ID', durationSec: 5 },
  cathedralOrgan: { youtubeVideoId: 'evxtlaSmedg', label: 'Cathedral Chime', durationSec: 17 },
} satisfies Record<string, YouTubeBumperClip>;

const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [CLIPS.mac1984, CLIPS.ps2Boot, CLIPS.win95Ad],
  movies: [CLIPS.featurePres, CLIPS.hbo1992, CLIPS.thxDeepNote],
  film: [CLIPS.featurePres, CLIPS.hbo1992, CLIPS.thxDeepNote],
  cartoons: [
    CLIPS.cnCity1,
    CLIPS.asCheckered1,
    CLIPS.nick2001,
    CLIPS.cnCity2,
    CLIPS.asCheckered2,
    CLIPS.cnPowerhouse,
    CLIPS.pixarFriends,
  ],
  industry: [CLIPS.howItsMade, CLIPS.discoveryHd],
  music: [CLIPS.mtvKaiju, CLIPS.mtvChainsaw, CLIPS.vh1Ident],
  science: [CLIPS.discoveryHd, CLIPS.billNye, CLIPS.discoveryBumper],
  food: [CLIPS.driveInDog, CLIPS.bourdainNoRes],
  games: [CLIPS.ps1Boot, CLIPS.gcBoot, CLIPS.ps2Boot],
  sports: [CLIPS.itvSport, CLIPS.f1McLaren],
  travel: [CLIPS.bourdainParts, CLIPS.bourdainNoRes],
  fitness: [CLIPS.nikeSpot, CLIPS.itvSport],
  art: [CLIPS.vh1Europe, CLIPS.mtvChainsaw],
  design: [CLIPS.vh1Europe, CLIPS.adEmma],
  learning: [CLIPS.pbs1990s, CLIPS.billNye, CLIPS.pbsKids],
  documentaries: [CLIPS.natGeo, CLIPS.bbc1980s, CLIPS.bbc100],
  architecture: [CLIPS.adEmma, CLIPS.adWinnie],
  religion: [CLIPS.cathedralOrgan],
  cars: [CLIPS.topGear, CLIPS.f1McLaren],
  business: [CLIPS.bloombergBumper, CLIPS.cnbcIdent, CLIPS.cnbcBreak],
  news: [CLIPS.kadnNews, CLIPS.abcNews, CLIPS.cnbcIdent],
  entertainment: [CLIPS.hbo1992, CLIPS.vh1Europe],
};

const GENERAL_YOUTUBE_BUMPERS: YouTubeBumperClip[] = [
  CLIPS.hbo1992,
  CLIPS.pbs1990s,
  CLIPS.natGeo,
  CLIPS.cnCity1,
];

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

// Alternate bespoke 3D WebGL scenes ('ident', 'cinematic', 'field', 'visualizer') with 2D editorial cards ('lineup', 'slate', 'card')
const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number }[] = [
  { variant: 'ident', durationMs: 4400 },
  { variant: 'cinematic', durationMs: 4600 },
  { variant: 'lineup', durationMs: 4400 },
  { variant: 'visualizer', durationMs: 4300 },
  { variant: 'slate', durationMs: 4200 },
  { variant: 'field', durationMs: 4400 },
  { variant: 'card', durationMs: 4100 },
];

/**
 * Picks the next station break at a 50/50 mix:
 * even breaks cycle across 2D editorial cards, Swiss broadcast slates, Adult Swim cards & 3D WebGL scenes;
 * odd breaks play curated widescreen YouTube broadcast idents/promos matched to the channel.
 */
export function pickNextBreak(
  categoryId: string,
  breakCount: number,
  failedIds?: Set<string>
): BreakPlan {
  const pool = (YOUTUBE_BUMPERS_BY_CHANNEL[categoryId] || GENERAL_YOUTUBE_BUMPERS).filter(
    (clip) => !failedIds?.has(clip.youtubeVideoId)
  );

  if (pool.length > 0 && breakCount % 2 === 1) {
    const clipIdx = Math.floor(breakCount / 2) % pool.length;
    return {
      kind: 'youtube',
      clip: pool[clipIdx],
    };
  }

  const motionIdx = (pool.length > 0 ? Math.floor(breakCount / 2) : breakCount) % MOTION_ROTATION.length;
  const template = MOTION_ROTATION[motionIdx];

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
