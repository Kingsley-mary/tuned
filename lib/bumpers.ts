import { Video } from './types';

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
      bumperIndex?: number;
      totalBumpers?: number;
      isMarathon?: boolean;
      marathonCreator?: string;
      isPreview?: boolean;
    }
  | {
      kind: 'youtube';
      clip: YouTubeBumperClip;
      durationMs: number;
      bumperIndex?: number;
      totalBumpers?: number;
      isMarathon?: boolean;
      marathonCreator?: string;
      isPreview?: boolean;
    };

// Curated, verified widescreen broadcast idents, intros & promos across all 22 categories
// Durations are strictly audited against actual YouTube video metadata so broadcast clock allocations match 1:1
const CLIPS = {
  // Animations & Cartoons
  cnCity1: { youtubeVideoId: 'h9IPZC6giFM', label: 'Cartoon Network Ident', durationSec: 10 },
  cnCity2: { youtubeVideoId: 'boaUvdivics', label: 'Cartoon Network Bumper', durationSec: 11 },
  cnPowerhouse: { youtubeVideoId: 'MzFF_5Tf98s', label: 'Powerhouse Ident', durationSec: 11 },
  asCheckered1: { youtubeVideoId: 'ubcceuUYwtg', label: '[adult swim] Bump', durationSec: 11 },
  asCheckered2: { youtubeVideoId: 'M6svpGyleCQ', label: '[adult swim] Bumper', durationSec: 16 },
  nick2001: { youtubeVideoId: 'p0DOSv1sA2w', label: 'Nickelodeon Ident', durationSec: 11 },
  pixarFriends: { youtubeVideoId: 'JUoxyPvdgk8', label: 'Studio Ident', durationSec: 26 },
  lofiGift: { youtubeVideoId: 'd3QQHqRmvH4', label: 'Lofi Animation Bump', durationSec: 73 },

  // Games
  ps1Boot: { youtubeVideoId: 'oAhvQoLpvsM', label: 'PlayStation Ident', durationSec: 16 },
  ps1StartupSound: { youtubeVideoId: 'BOPViekdacQ', label: 'PS1 Audio Startup', durationSec: 16 },
  gcBoot: { youtubeVideoId: 'HKfKk40dPr8', label: 'GameCube Ident', durationSec: 6 },
  ps2Boot: { youtubeVideoId: '-gHkJliF_v4', label: 'PS2 Startup', durationSec: 14 },
  gta6Trailer: { youtubeVideoId: 'rz1B4B2yBZY', label: 'Rockstar Showcase', durationSec: 91 },
  switch2Minecraft: { youtubeVideoId: 'npFlBoJM2Ts', label: 'Nintendo Switch 2 Ident', durationSec: 76 },
  outerWorlds2: { youtubeVideoId: 'WjlWK1Wl6dc', label: 'PS5 Showcase Bumper', durationSec: 119 },

  // Tech
  mac1984: { youtubeVideoId: 'EKrxM65enjs', label: 'Macintosh 1984', durationSec: 21 },
  win95Ad: { youtubeVideoId: 'Tw-GGT6900s', label: 'Windows 95 Spot', durationSec: 32 },
  macBookProKeynote: { youtubeVideoId: 'hnZI5uUSdEo', label: 'Apple Mac Showcase', durationSec: 117 },
  quantumAegiq: { youtubeVideoId: 'N5YLi8Ar3Wg', label: 'Quantum Silicon Showcase', durationSec: 106 },
  siemensRobotics: { youtubeVideoId: '784YQBiZArk', label: 'Siemens Robotics AI', durationSec: 93 },

  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 12 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju ID', durationSec: 21 },
  vh1Ident: { youtubeVideoId: 'LPhUn9YB0JE', label: 'VH1 Station ID', durationSec: 36 },
  vh1Europe: { youtubeVideoId: '0KYpemsVClg', label: 'VH1 Europe Ident', durationSec: 15 },
  vevoPop: { youtubeVideoId: 'vEhlyN9TU6c', label: 'Vevo Pop Culture', durationSec: 73 },

  // Movies / Film
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 18 },
  thxDeepNote: { youtubeVideoId: 'i43WNXnlGMs', label: 'THX Deep Note', durationSec: 32 },
  hbo1992: { youtubeVideoId: 'kISr9-2ANDA', label: 'Special Presentation', durationSec: 19 },
  driveInDog: { youtubeVideoId: 'H8WA6ceRfEQ', label: 'Drive-In Intermission', durationSec: 26 },

  // Art (Fine Art, Galleries, Contemporary Culture)
  bbcPaint: { youtubeVideoId: '6TUJkWw1b6Q', label: 'BBC Two Paint Ident', durationSec: 8 },
  tateModern: { youtubeVideoId: 'vXNQGjdGiMQ', label: 'Tate Modern Ident', durationSec: 56 },
  momaMoment: { youtubeVideoId: 'p-_LdW1quyk', label: 'MoMA Modern Art', durationSec: 60 },
  bbcOptics: { youtubeVideoId: 'bhnwxQQz5BY', label: 'BBC Two Optics Ident', durationSec: 47 },
  louvreIntro: { youtubeVideoId: 'zp1BXPX8jcU', label: 'Louvre Museum Intro', durationSec: 48 },

  // Design (Industrial Design, Product Showcases, Typography)
  appleDesign20: { youtubeVideoId: 'SGMMHik5ksQ', label: 'Designed by Apple in California', durationSec: 156 },
  appleWatchSteel: { youtubeVideoId: '5SjIuzhdd_g', label: 'Apple Watch Steel Design', durationSec: 151 },

  // Architecture (Architectural Digest Short Featurettes)
  adEmma: { youtubeVideoId: 'ioEa9fe_rc4', label: 'Architectural Digest', durationSec: 15 },
  adWinnie: { youtubeVideoId: 'pxTXmz_tPYU', label: 'Architectural Digest', durationSec: 13 },

  // News (CNN, CNBC, BBC News, NBC, ABC)
  cnnSpecialReport: { youtubeVideoId: 'DZ8aTk92qV4', label: 'CNN Special Report', durationSec: 7 },
  bbcNewsCount2024: { youtubeVideoId: '6p366osoEuc', label: 'BBC News Countdown', durationSec: 99 },
  bbcNewsTheme: { youtubeVideoId: '1m739e8fV2A', label: 'BBC News Countdown Theme', durationSec: 99 },
  cnbcIdent: { youtubeVideoId: 'ISNsB4Ta70A', label: 'CNBC Station ID', durationSec: 10 },
  cnbcBreak: { youtubeVideoId: '590wrWi2y0I', label: 'CNBC Break ID', durationSec: 5 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'WLS News ID', durationSec: 5 },

  // Business (CNBC, Bloomberg TV, Financial Markets)
  bloombergBumper: { youtubeVideoId: 'zixr0VOg2m0', label: 'Bloomberg Bumper', durationSec: 19 },
  cnbcStocks: { youtubeVideoId: 'rkDiNKDv3Cg', label: 'CNBC Stock Report', durationSec: 68 },
  cnbcAuto3D: { youtubeVideoId: '9YLr-qa6Qq8', label: 'CNBC Industrial Report', durationSec: 148 },
  cnbcDebt: { youtubeVideoId: '6Q08nql7vCA', label: 'CNBC Market News', durationSec: 62 },

  // Sports & Cars
  topGear: { youtubeVideoId: 'QbyOvkELZ3Y', label: 'Top Gear Intro', durationSec: 20 },
  f12026Titles: { youtubeVideoId: 'Sks_fMr2Yss', label: 'Formula 1 Opening Titles', durationSec: 58 },
  f1McLaren: { youtubeVideoId: 'xvKfKnx2wOc', label: 'F1 Opener', durationSec: 24 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'ITV Sport Bumper', durationSec: 5 },
  nikeSpot: { youtubeVideoId: '18XjACKal0o', label: 'Nike Commercial', durationSec: 16 },
  googleHoops: { youtubeVideoId: 'WMjVP7QQyDI', label: 'Google Athletic Culture', durationSec: 73 },

  // Science / Learning / Documentaries
  discoveryHd: { youtubeVideoId: '1pTqM9c7DO8', label: 'Discovery Ident', durationSec: 6 },
  discoveryBumper: { youtubeVideoId: '7ynDcJBJlMU', label: 'Discovery Bumper', durationSec: 28 },
  billNye: { youtubeVideoId: 'UtVJdPfm0F8', label: 'Science Intro', durationSec: 31 },
  natGeo: { youtubeVideoId: 'r_NfprynbLk', label: 'NatGeo Ident', durationSec: 14 },
  bbc1980s: { youtubeVideoId: 'fEF82qBFo9I', label: 'BBC Video Ident', durationSec: 38 },
  bbc100: { youtubeVideoId: 'H81x-4oYvCo', label: 'BBC Ident', durationSec: 17 },
  pbs1990s: { youtubeVideoId: 'Jb35JfWbpaY', label: 'PBS Station ID', durationSec: 5 },
  pbsKids: { youtubeVideoId: 'KPCpTyDhgfs', label: 'PBS P-Pals ID', durationSec: 8 },

  // Industry / Engineering
  howItsMade: { youtubeVideoId: 'h0L3J5p3lcE', label: "How It's Made Intro", durationSec: 23 },

  // Travel / Food / Religion
  bourdainParts: { youtubeVideoId: 'hF2V-5lBWoo', label: 'Parts Unknown Promo', durationSec: 31 },
  bourdainNoRes: { youtubeVideoId: 'V03F545Gd38', label: 'No Reservations Intro', durationSec: 24 },
  cathedralOrgan: { youtubeVideoId: 'evxtlaSmedg', label: 'Cathedral Chime', durationSec: 18 },
} satisfies Record<string, YouTubeBumperClip>;

const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [
    CLIPS.mac1984,
    CLIPS.win95Ad,
    CLIPS.macBookProKeynote,
    CLIPS.quantumAegiq,
    CLIPS.siemensRobotics,
  ],
  movies: [CLIPS.featurePres, CLIPS.hbo1992, CLIPS.thxDeepNote, CLIPS.driveInDog],
  film: [CLIPS.featurePres, CLIPS.hbo1992, CLIPS.thxDeepNote, CLIPS.driveInDog],
  cartoons: [
    CLIPS.cnCity1,
    CLIPS.asCheckered1,
    CLIPS.nick2001,
    CLIPS.cnCity2,
    CLIPS.asCheckered2,
    CLIPS.cnPowerhouse,
    CLIPS.pixarFriends,
    CLIPS.lofiGift,
  ],
  industry: [
    CLIPS.howItsMade,
    CLIPS.siemensRobotics,
    CLIPS.cnbcAuto3D,
    CLIPS.discoveryHd,
  ],
  music: [
    CLIPS.mtvKaiju,
    CLIPS.mtvChainsaw,
    CLIPS.vh1Ident,
    CLIPS.vh1Europe,
    CLIPS.vevoPop,
  ],
  science: [
    CLIPS.discoveryHd,
    CLIPS.billNye,
    CLIPS.discoveryBumper,
    CLIPS.natGeo,
    CLIPS.bbc1980s,
    CLIPS.bbc100,
  ],
  food: [CLIPS.driveInDog, CLIPS.bourdainNoRes, CLIPS.bourdainParts],
  games: [
    CLIPS.ps1Boot,
    CLIPS.gcBoot,
    CLIPS.ps2Boot,
    CLIPS.ps1StartupSound,
    CLIPS.gta6Trailer,
    CLIPS.switch2Minecraft,
    CLIPS.outerWorlds2,
  ],
  sports: [
    CLIPS.f12026Titles,
    CLIPS.f1McLaren,
    CLIPS.itvSport,
    CLIPS.nikeSpot,
    CLIPS.googleHoops,
  ],
  travel: [CLIPS.bourdainParts, CLIPS.bourdainNoRes, CLIPS.natGeo, CLIPS.bbc100],
  fitness: [CLIPS.nikeSpot, CLIPS.itvSport, CLIPS.googleHoops, CLIPS.f1McLaren],
  art: [
    CLIPS.bbcPaint,
    CLIPS.tateModern,
    CLIPS.momaMoment,
    CLIPS.bbcOptics,
    CLIPS.louvreIntro,
  ],
  design: [
    CLIPS.mac1984,
    CLIPS.win95Ad,
    CLIPS.appleDesign20,
    CLIPS.appleWatchSteel,
    CLIPS.adEmma,
  ],
  learning: [CLIPS.pbs1990s, CLIPS.billNye, CLIPS.pbsKids, CLIPS.bbc100, CLIPS.discoveryBumper],
  documentaries: [CLIPS.natGeo, CLIPS.bbc1980s, CLIPS.bbc100, CLIPS.discoveryHd, CLIPS.discoveryBumper],
  architecture: [
    CLIPS.adEmma,
    CLIPS.adWinnie,
  ],
  religion: [CLIPS.cathedralOrgan, CLIPS.bbc100],
  cars: [CLIPS.topGear, CLIPS.f1McLaren, CLIPS.f12026Titles],
  business: [
    CLIPS.bloombergBumper,
    CLIPS.cnbcIdent,
    CLIPS.cnbcBreak,
    CLIPS.cnbcStocks,
    CLIPS.cnbcDebt,
    CLIPS.cnbcAuto3D,
  ],
  news: [
    CLIPS.cnnSpecialReport,
    CLIPS.bbcNewsCount2024,
    CLIPS.cnbcIdent,
    CLIPS.cnbcBreak,
    CLIPS.bbcNewsTheme,
    CLIPS.kadnNews,
    CLIPS.abcNews,
  ],
  entertainment: [CLIPS.hbo1992, CLIPS.vh1Europe, CLIPS.googleHoops, CLIPS.vevoPop],
};

const GENERAL_YOUTUBE_BUMPERS: YouTubeBumperClip[] = [
  CLIPS.hbo1992,
  CLIPS.pbs1990s,
  CLIPS.natGeo,
  CLIPS.bbc100,
  CLIPS.featurePres,
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

// All motion bumper templates render immersive channel-specific Three.js 3D worlds with a strict minimum of 5 seconds (5000ms)
// Durations are rounded to exact whole seconds to eliminate fractional-second rounding gaps
const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number }[] = [
  { variant: 'cinematic', durationMs: 7000 },
  { variant: 'ident', durationMs: 6000 },
  { variant: 'field', durationMs: 6000 },
  { variant: 'visualizer', durationMs: 6000 },
  { variant: 'lineup', durationMs: 6000 },
  { variant: 'slate', durationMs: 6000 },
];

/**
 * Picks a station break package of 1 to 3 bumpers back-to-back ("random, not all the time"),
 * or a single preview bumper when triggered manually (B key / Ident button).
 *
 * Rules:
 * - Every bumper has a strict minimum duration of 5 seconds (5000ms).
 * - Video clips play for their full natural broadcast length (at least 5s, no artificial cutoffs).
 * - When multiple bumpers play back-to-back, each individual bumper gets at least 5000ms.
 */
export function pickBreakPackage(
  categoryId: string,
  breakCount: number,
  marathonCreator?: string,
  isPreview: boolean = false
): BreakPlan[] {
  const clipPool = YOUTUBE_BUMPERS_BY_CHANNEL[categoryId] || GENERAL_YOUTUBE_BUMPERS;

  // If manual preview from pressing 'B', return a single punchy preview bumper!
  if (isPreview) {
    // Alternate preview between 3D Three.js ident and retro channel clip!
    if (breakCount % 2 === 1 && clipPool.length > 0) {
      const clip = clipPool[breakCount % clipPool.length];
      const dur = Math.max(5000, (clip.durationSec || 12) * 1000);
      return [
        {
          kind: 'youtube',
          clip,
          durationMs: dur,
          bumperIndex: 1,
          totalBumpers: 1,
          isMarathon: Boolean(marathonCreator),
          marathonCreator,
          isPreview: true,
        },
      ];
    }

    const template = MOTION_ROTATION[breakCount % MOTION_ROTATION.length];
    const baseCards = CHANNEL_CARDS[categoryId] || DEFAULT_CARDS;
    const card = baseCards[breakCount % baseCards.length];
    return [
      {
        kind: 'motion',
        variant: template.variant,
        durationMs: Math.max(5000, template.durationMs),
        cardLead: marathonCreator ? `MARATHON PREVIEW` : card.lead,
        cardPunchline: marathonCreator ? `All-${marathonCreator} block` : card.punchline,
        bumperIndex: 1,
        totalBumpers: 1,
        isMarathon: Boolean(marathonCreator),
        marathonCreator,
        isPreview: true,
      },
    ];
  }

  // Real scheduled break: roll for 1, 2, or 3 bumpers
  const roll = (Math.abs(Math.sin(breakCount * 9301 + 49297) * 233280)) % 100;
  let count = roll < 45 ? 1 : roll < 85 ? 2 : 3;

  // Rule: If a video clip is less than 5 seconds long, it qualifies for a second bumper to play after it
  const isFirstClip = !marathonCreator && clipPool.length > 0 && (breakCount % 2 === 1);
  if (isFirstClip) {
    const firstClip = clipPool[breakCount % clipPool.length];
    if ((firstClip.durationSec || 10) < 5 && count < 2) {
      count = 2;
    }
  }

  const result: BreakPlan[] = [];
  const cardPool = CHANNEL_CARDS[categoryId] || DEFAULT_CARDS;

  for (let step = 0; step < count; step++) {
    // Interleave retro video clips with 3D scenes (unless it's an all-creator marathon block)
    const isClipSlot = !marathonCreator && clipPool.length > 0 && ((breakCount + step) % 2 === 1);

    if (isClipSlot) {
      const clip = clipPool[(breakCount + step) % clipPool.length];
      // Video clips: full natural length, strictly at least 5.0 seconds
      const dur = Math.max(5000, (clip.durationSec || 12) * 1000);
      result.push({
        kind: 'youtube',
        clip,
        durationMs: dur,
        bumperIndex: step + 1,
        totalBumpers: count,
        isMarathon: false,
        marathonCreator: undefined,
        isPreview: false,
      });
    } else {
      const motionIdx = (breakCount * 2 + step) % MOTION_ROTATION.length;
      const template = MOTION_ROTATION[motionIdx];
      // Back-to-back bumpers strictly maintain at least 5.0 seconds (5000ms) each
      const dur = Math.max(5000, template.durationMs);

      const pickedCard = cardPool[(breakCount + step) % cardPool.length];
      const lead = marathonCreator ? `MARATHON IN PROGRESS` : pickedCard.lead;
      const punchline = marathonCreator
        ? `All-${marathonCreator} block continues right after this.`
        : pickedCard.punchline;

      result.push({
        kind: 'motion',
        variant: template.variant,
        durationMs: dur,
        cardLead: lead,
        cardPunchline: punchline,
        bumperIndex: step + 1,
        totalBumpers: count,
        isMarathon: Boolean(marathonCreator),
        marathonCreator,
        isPreview: false,
      });
    }
  }

  // Ensure total duration of any non-preview break package is an exact multiple of 1000ms
  // with zero fractional-second rounding gaps or dead-air remainder
  if (!isPreview && result.length > 0) {
    const totalMs = result.reduce((sum, p) => sum + p.durationMs, 0);
    const remainder = totalMs % 1000;
    if (remainder !== 0) {
      result[result.length - 1].durationMs += 1000 - remainder;
    }
  }

  return result;
}

/**
 * Pure, deterministic helper returning the break package and its duration in integer seconds for slotIndex.
 * Perfectly synchronized across all devices globally with zero dead-air remainder.
 */
export function getSlotBreakPackage(
  videos: Video[],
  categoryId: string,
  slotIndex: number
): { plans: BreakPlan[]; totalBreakSec: number } {
  if (!videos || videos.length === 0) {
    return { plans: [], totalBreakSec: 0 };
  }
  const safeIdx = ((slotIndex % videos.length) + videos.length) % videos.length;
  const curr = videos[safeIdx];
  const next = videos[(safeIdx + 1) % videos.length];
  const marathonCreator =
    curr?.sourceChannelTitle &&
    next?.sourceChannelTitle &&
    curr.sourceChannelTitle.toLowerCase() === next.sourceChannelTitle.toLowerCase()
      ? curr.sourceChannelTitle
      : undefined;

  const plans = pickBreakPackage(categoryId, safeIdx, marathonCreator, false);
  const totalBreakMs = plans.reduce((acc, p) => acc + p.durationMs, 0);
  const totalBreakSec = Math.floor(totalBreakMs / 1000);
  return { plans, totalBreakSec };
}

export function pickNextBreak(
  categoryId: string,
  breakCount: number,
  _failedIds?: Set<string>,
  marathonCreator?: string,
  isPreview: boolean = false
): BreakPlan {
  const pkg = pickBreakPackage(categoryId, breakCount, marathonCreator, isPreview);
  return pkg[0];
}
