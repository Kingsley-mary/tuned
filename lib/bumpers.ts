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

// Verified horizontal, embeddable short TV station idents, bootups, visualizers & intermissions
const CLIPS = {
  // Cartoons / Animation
  cnCity1: { youtubeVideoId: 'h9IPZC6giFM', label: 'Cartoon Network Ident', durationSec: 10 },
  cnCity2: { youtubeVideoId: 'boaUvdivics', label: 'Cartoon Network Bumper', durationSec: 10 },
  cnPowerhouse: { youtubeVideoId: 'MzFF_5Tf98s', label: 'Powerhouse Ident', durationSec: 10 },
  asCheckered1: { youtubeVideoId: 'ubcceuUYwtg', label: '[adult swim] Bump', durationSec: 10 },
  asCheckered2: { youtubeVideoId: 'M6svpGyleCQ', label: '[adult swim] Bumper', durationSec: 15 },
  nick2001: { youtubeVideoId: 'p0DOSv1sA2w', label: 'Nickelodeon Ident', durationSec: 10 },
  pixarFriends: { youtubeVideoId: 'JUoxyPvdgk8', label: 'Animation Promo', durationSec: 26 },
  // Games
  ps1Boot: { youtubeVideoId: 'oAhvQoLpvsM', label: 'PlayStation Ident', durationSec: 16 },
  gcBoot: { youtubeVideoId: 'HKfKk40dPr8', label: 'GameCube Ident', durationSec: 6 },
  // Tech / Industry / Design
  mac1984: { youtubeVideoId: 'EKrxM65enjs', label: 'Hello Macintosh', durationSec: 21 },
  crtGlitch: { youtubeVideoId: 'Q71ZVa83PgY', label: 'CRT Signal Break', durationSec: 5 },
  synthGrid: { youtubeVideoId: 'cHC_ykHbW8A', label: 'Synthwave Grid', durationSec: 10 },
  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 11 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju Ident', durationSec: 21 },
  lofiLoop: { youtubeVideoId: 'Vfw352_la8k', label: 'Lofi Intermission', durationSec: 7 },
  audioViz: { youtubeVideoId: 'qjmpoyEpT3U', label: 'Spectrum Visualizer', durationSec: 5 },
  // Movies / Film
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 17 },
  thxDeepNote: { youtubeVideoId: 'i43WNXnlGMs', label: 'THX Soundcheck', durationSec: 32 },
  filmCountdown4k: { youtubeVideoId: 'I8-YbI98ikk', label: 'Film Countdown', durationSec: 11 },
  oldFilmCountdown: { youtubeVideoId: 'GVuiftq3KsI', label: '35mm Leader', durationSec: 13 },
  // Food / Drive-in
  driveInDog: { youtubeVideoId: 'H8WA6ceRfEQ', label: 'Drive-In Intermission', durationSec: 25 },
  chillyDilly: { youtubeVideoId: 'rVRsawpf94Y', label: 'Intermission Promo', durationSec: 31 },
  // Science / Sports / News / General
  jwstZoom: { youtubeVideoId: 'oCm1q-tg88w', label: 'Deep Space Zoom', durationSec: 13 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'Sport Bumper', durationSec: 5 },
  sportsBroadcast: { youtubeVideoId: 'tTLkY-beUJ0', label: 'Broadcast Bumper', durationSec: 13 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'Station News ID', durationSec: 5 },
  sbsIdent: { youtubeVideoId: 'd198bKXlCWU', label: 'SBS Broadcast ID', durationSec: 14 },
  tyneTees: { youtubeVideoId: '5dHV8-7hV2Q', label: 'Classic Network ID', durationSec: 11 },
  metroNet: { youtubeVideoId: 'Ds-W4slQd4Y', label: 'Network Station ID', durationSec: 6 },
} satisfies Record<string, YouTubeBumperClip>;

const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [CLIPS.crtGlitch, CLIPS.synthGrid, CLIPS.mac1984],
  movies: [CLIPS.featurePres, CLIPS.filmCountdown4k, CLIPS.thxDeepNote],
  cartoons: [
    CLIPS.cnCity1,
    CLIPS.asCheckered1,
    CLIPS.nick2001,
    CLIPS.cnCity2,
    CLIPS.asCheckered2,
    CLIPS.cnPowerhouse,
    CLIPS.pixarFriends,
  ],
  industry: [CLIPS.synthGrid, CLIPS.crtGlitch, CLIPS.metroNet],
  music: [CLIPS.mtvKaiju, CLIPS.lofiLoop, CLIPS.mtvChainsaw, CLIPS.audioViz],
  science: [CLIPS.jwstZoom, CLIPS.synthGrid],
  food: [CLIPS.driveInDog, CLIPS.chillyDilly],
  games: [CLIPS.ps1Boot, CLIPS.gcBoot, CLIPS.synthGrid],
  sports: [CLIPS.itvSport, CLIPS.sportsBroadcast],
  travel: [CLIPS.jwstZoom, CLIPS.sbsIdent],
  film: [CLIPS.filmCountdown4k, CLIPS.featurePres, CLIPS.oldFilmCountdown],
  fitness: [CLIPS.itvSport, CLIPS.audioViz],
  art: [CLIPS.mtvChainsaw, CLIPS.sbsIdent, CLIPS.lofiLoop],
  design: [CLIPS.synthGrid, CLIPS.sbsIdent, CLIPS.crtGlitch],
  learning: [CLIPS.jwstZoom, CLIPS.mac1984],
  documentaries: [CLIPS.oldFilmCountdown, CLIPS.jwstZoom],
  architecture: [CLIPS.sbsIdent, CLIPS.metroNet],
  religion: [CLIPS.lofiLoop, CLIPS.tyneTees],
  cars: [CLIPS.synthGrid, CLIPS.itvSport],
  business: [CLIPS.kadnNews, CLIPS.abcNews],
  news: [CLIPS.kadnNews, CLIPS.abcNews],
  entertainment: [CLIPS.featurePres, CLIPS.mtvKaiju],
};

const GENERAL_YOUTUBE_BUMPERS: YouTubeBumperClip[] = [
  CLIPS.cnCity1,
  CLIPS.synthGrid,
  CLIPS.metroNet,
  CLIPS.lofiLoop,
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
    { lead: 'Now changing 35mm reels.', punchline: 'Silence your phone in row G.' },
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
  { variant: 'ident', durationMs: 4400 },
  { variant: 'visualizer', durationMs: 4600 },
  { variant: 'lineup', durationMs: 4800 },
  { variant: 'card', durationMs: 4300 },
];

/**
 * Picks the next station break for a channel, alternating cleanly between
 * full-screen Option 1 motion/visualizer/Adult-Swim cards and Option 3 YouTube mini-bumpers.
 */
export function pickNextBreak(
  categoryId: string,
  breakCount: number,
  failedIds?: Set<string>
): BreakPlan {
  const pool = (YOUTUBE_BUMPERS_BY_CHANNEL[categoryId] || GENERAL_YOUTUBE_BUMPERS).filter(
    (clip) => !failedIds?.has(clip.youtubeVideoId)
  );

  // Alternate between full-screen Option 1 animated idents & Option 3 curated YouTube clips
  if (pool.length > 0 && breakCount % 2 === 1) {
    const clipIdx = Math.floor(breakCount / 2) % pool.length;
    return {
      kind: 'youtube',
      clip: pool[clipIdx],
    };
  }

  const motionIdx = Math.floor(breakCount / (pool.length > 0 ? 2 : 1)) % MOTION_ROTATION.length;
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
