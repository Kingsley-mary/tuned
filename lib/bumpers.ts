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
const CLIPS = {
  // Animations & Cartoons
  cnCity1: { youtubeVideoId: 'h9IPZC6giFM', label: 'Cartoon Network Ident', durationSec: 10 },
  cnCity2: { youtubeVideoId: 'boaUvdivics', label: 'Cartoon Network Bumper', durationSec: 10 },
  cnPowerhouse: { youtubeVideoId: 'MzFF_5Tf98s', label: 'Powerhouse Ident', durationSec: 10 },
  asCheckered1: { youtubeVideoId: 'ubcceuUYwtg', label: '[adult swim] Bump', durationSec: 10 },
  asCheckered2: { youtubeVideoId: 'M6svpGyleCQ', label: '[adult swim] Bumper', durationSec: 15 },
  nick2001: { youtubeVideoId: 'p0DOSv1sA2w', label: 'Nickelodeon Ident', durationSec: 10 },
  pixarFriends: { youtubeVideoId: 'JUoxyPvdgk8', label: 'Studio Ident', durationSec: 26 },
  lofiGift: { youtubeVideoId: 'd3QQHqRmvH4', label: 'Lofi Animation Bump', durationSec: 18 },

  // Games
  ps1Boot: { youtubeVideoId: 'oAhvQoLpvsM', label: 'PlayStation Ident', durationSec: 16 },
  ps1StartupSound: { youtubeVideoId: 'BOPViekdacQ', label: 'PS1 Audio Startup', durationSec: 12 },
  gcBoot: { youtubeVideoId: 'HKfKk40dPr8', label: 'GameCube Ident', durationSec: 6 },
  ps2Boot: { youtubeVideoId: '-gHkJliF_v4', label: 'PS2 Startup', durationSec: 14 },
  gta6Trailer: { youtubeVideoId: 'rz1B4B2yBZY', label: 'Rockstar Showcase', durationSec: 30 },
  switch2Minecraft: { youtubeVideoId: 'npFlBoJM2Ts', label: 'Nintendo Switch 2 Ident', durationSec: 20 },
  outerWorlds2: { youtubeVideoId: 'WjlWK1Wl6dc', label: 'PS5 Showcase Bumper', durationSec: 25 },

  // Tech
  mac1984: { youtubeVideoId: 'EKrxM65enjs', label: 'Macintosh 1984', durationSec: 21 },
  win95Ad: { youtubeVideoId: 'Tw-GGT6900s', label: 'Windows 95 Spot', durationSec: 32 },
  macBookProKeynote: { youtubeVideoId: 'hnZI5uUSdEo', label: 'Apple Mac Showcase', durationSec: 26 },
  quantumAegiq: { youtubeVideoId: 'N5YLi8Ar3Wg', label: 'Quantum Silicon Showcase', durationSec: 22 },
  siemensRobotics: { youtubeVideoId: '784YQBiZArk', label: 'Siemens Robotics AI', durationSec: 25 },

  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 11 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju ID', durationSec: 21 },
  vh1Ident: { youtubeVideoId: 'LPhUn9YB0JE', label: 'VH1 Station ID', durationSec: 35 },
  vh1Europe: { youtubeVideoId: '0KYpemsVClg', label: 'VH1 Europe Ident', durationSec: 15 },
  vevoPop: { youtubeVideoId: 'vEhlyN9TU6c', label: 'Vevo Pop Culture', durationSec: 16 },

  // Movies / Film
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 17 },
  thxDeepNote: { youtubeVideoId: 'i43WNXnlGMs', label: 'THX Deep Note', durationSec: 32 },
  hbo1992: { youtubeVideoId: 'kISr9-2ANDA', label: 'Special Presentation', durationSec: 19 },
  driveInDog: { youtubeVideoId: 'H8WA6ceRfEQ', label: 'Drive-In Intermission', durationSec: 25 },

  // Art (Genuine Fine Art, Galleries, Contemporary Culture — No MTV!)
  bbcPaint: { youtubeVideoId: '6TUJkWw1b6Q', label: 'BBC Two Paint Ident', durationSec: 15 },
  tateModern: { youtubeVideoId: 'vXNQGjdGiMQ', label: 'Tate Modern Ident', durationSec: 20 },
  momaMoment: { youtubeVideoId: 'p-_LdW1quyk', label: 'MoMA Modern Art', durationSec: 22 },
  tateWarhol: { youtubeVideoId: 'ZjgAd6Z-dd0', label: 'Tate Modern Tour', durationSec: 25 },
  bbcOptics: { youtubeVideoId: 'bhnwxQQz5BY', label: 'BBC Two Optics Ident', durationSec: 15 },
  louvreIntro: { youtubeVideoId: 'zp1BXPX8jcU', label: 'Louvre Museum Intro', durationSec: 30 },

  // Design (Bauhaus, Dieter Rams, Apple Industrial Design, Swiss Typography — No MTV!)
  bauhaus100: { youtubeVideoId: 'X59FCW3vOlE', label: 'Bauhaus Design Movement', durationSec: 20 },
  bauhausIntro: { youtubeVideoId: 'Y69wOKg6yp4', label: 'Bauhaus 7 Min Intro', durationSec: 25 },
  appleDesign20: { youtubeVideoId: 'SGMMHik5ksQ', label: 'Designed by Apple in California', durationSec: 24 },
  jonyIveLegacy: { youtubeVideoId: 'ZWvO6VA2HQU', label: 'Jony Ive Design Film', durationSec: 30 },
  appleWatchSteel: { youtubeVideoId: '5SjIuzhdd_g', label: 'Apple Watch Steel Design', durationSec: 18 },

  // Architecture
  adEmma: { youtubeVideoId: 'ioEa9fe_rc4', label: 'Architectural Digest', durationSec: 14 },
  adWinnie: { youtubeVideoId: 'pxTXmz_tPYU', label: 'Architectural Digest', durationSec: 13 },
  adOpenDoorAtlanta: { youtubeVideoId: 'mNAiN-tl7E4', label: 'AD Open Door Atlanta', durationSec: 20 },
  adOpenDoorParis: { youtubeVideoId: '1EftZvRGquA', label: 'AD Open Door Paris', durationSec: 20 },
  adOpenDoorKenya: { youtubeVideoId: 'KIqQ0gowzt4', label: 'AD Open Door Kenya', durationSec: 20 },

  // News (CNN, CNBC, BBC News, NBC, ABC)
  cnnSpecialReport: { youtubeVideoId: 'DZ8aTk92qV4', label: 'CNN Special Report', durationSec: 10 },
  cnnBreakingNews: { youtubeVideoId: 'TAGroTmWvt4', label: 'CNN Breaking News', durationSec: 8 },
  bbcNewsCount2024: { youtubeVideoId: '6p366osoEuc', label: 'BBC News Countdown', durationSec: 30 },
  bbcNewsTheme: { youtubeVideoId: '1m739e8fV2A', label: 'BBC News Countdown Theme', durationSec: 25 },
  cnbcIdent: { youtubeVideoId: 'ISNsB4Ta70A', label: 'CNBC Station ID', durationSec: 10 },
  cnbcBreak: { youtubeVideoId: '590wrWi2y0I', label: 'CNBC Break ID', durationSec: 5 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'WLS News ID', durationSec: 5 },

  // Business (CNBC, Bloomberg TV, Financial Markets)
  bloombergBumper: { youtubeVideoId: 'zixr0VOg2m0', label: 'Bloomberg Bumper', durationSec: 18 },
  cnbcAnthropic: { youtubeVideoId: 'bOcwOqyZGNw', label: 'CNBC Tech & Markets', durationSec: 25 },
  cnbcStocks: { youtubeVideoId: 'rkDiNKDv3Cg', label: 'CNBC Stock Report', durationSec: 15 },
  cnbcAuto3D: { youtubeVideoId: '9YLr-qa6Qq8', label: 'CNBC Industrial Report', durationSec: 20 },
  cnbcDebt: { youtubeVideoId: '6Q08nql7vCA', label: 'CNBC Market News', durationSec: 18 },
  cnbcDataCenters: { youtubeVideoId: 'qxB2eeHud6Q', label: 'CNBC Infrastructure', durationSec: 25 },

  // Sports & Cars
  topGear: { youtubeVideoId: 'QbyOvkELZ3Y', label: 'Top Gear Intro', durationSec: 20 },
  f12026Titles: { youtubeVideoId: 'Sks_fMr2Yss', label: 'Formula 1 Opening Titles', durationSec: 24 },
  f1ConcertTheme: { youtubeVideoId: '8AYy-BcjRXg', label: 'Formula 1 Theme', durationSec: 28 },
  f1McLaren: { youtubeVideoId: 'xvKfKnx2wOc', label: 'F1 Opener', durationSec: 23 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'ITV Sport Bumper', durationSec: 5 },
  nikeSpot: { youtubeVideoId: '18XjACKal0o', label: 'Nike Commercial', durationSec: 15 },
  googleHoops: { youtubeVideoId: 'WMjVP7QQyDI', label: 'Google Athletic Culture', durationSec: 15 },

  // Science / Learning / Documentaries
  discoveryHd: { youtubeVideoId: '1pTqM9c7DO8', label: 'Discovery Ident', durationSec: 5 },
  discoveryBumper: { youtubeVideoId: '7ynDcJBJlMU', label: 'Discovery Bumper', durationSec: 27 },
  billNye: { youtubeVideoId: 'UtVJdPfm0F8', label: 'Science Intro', durationSec: 31 },
  natGeo: { youtubeVideoId: 'r_NfprynbLk', label: 'NatGeo Ident', durationSec: 13 },
  nasaLaunch4k: { youtubeVideoId: '21X5lGlDOfg', label: 'NASA 4K Launch', durationSec: 20 },
  bbc1980s: { youtubeVideoId: 'fEF82qBFo9I', label: 'BBC Video Ident', durationSec: 37 },
  bbc100: { youtubeVideoId: 'H81x-4oYvCo', label: 'BBC Ident', durationSec: 17 },
  pbs1990s: { youtubeVideoId: 'Jb35JfWbpaY', label: 'PBS Station ID', durationSec: 5 },
  pbsKids: { youtubeVideoId: 'KPCpTyDhgfs', label: 'PBS P-Pals ID', durationSec: 8 },

  // Industry / Engineering
  howItsMade: { youtubeVideoId: 'h0L3J5p3lcE', label: "How It's Made Intro", durationSec: 22 },

  // Travel / Food / Religion
  bourdainParts: { youtubeVideoId: 'hF2V-5lBWoo', label: 'Parts Unknown Promo', durationSec: 30 },
  bourdainNoRes: { youtubeVideoId: 'V03F545Gd38', label: 'No Reservations Intro', durationSec: 24 },
  cathedralOrgan: { youtubeVideoId: 'evxtlaSmedg', label: 'Cathedral Chime', durationSec: 17 },
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
    CLIPS.nasaLaunch4k,
    CLIPS.natGeo,
    CLIPS.bbc1980s,
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
    CLIPS.f1ConcertTheme,
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
    CLIPS.tateWarhol,
    CLIPS.bbcOptics,
    CLIPS.louvreIntro,
  ],
  design: [
    CLIPS.bauhaus100,
    CLIPS.appleDesign20,
    CLIPS.jonyIveLegacy,
    CLIPS.bauhausIntro,
    CLIPS.appleWatchSteel,
    CLIPS.adEmma,
  ],
  learning: [CLIPS.pbs1990s, CLIPS.billNye, CLIPS.pbsKids, CLIPS.bbc100, CLIPS.discoveryBumper],
  documentaries: [CLIPS.natGeo, CLIPS.bbc1980s, CLIPS.bbc100, CLIPS.discoveryHd, CLIPS.discoveryBumper],
  architecture: [
    CLIPS.adOpenDoorAtlanta,
    CLIPS.adOpenDoorParis,
    CLIPS.adOpenDoorKenya,
    CLIPS.adEmma,
    CLIPS.adWinnie,
  ],
  religion: [CLIPS.cathedralOrgan, CLIPS.bbc100],
  cars: [CLIPS.topGear, CLIPS.f1McLaren, CLIPS.f12026Titles, CLIPS.f1ConcertTheme],
  business: [
    CLIPS.bloombergBumper,
    CLIPS.cnbcIdent,
    CLIPS.cnbcAnthropic,
    CLIPS.cnbcBreak,
    CLIPS.cnbcStocks,
    CLIPS.cnbcDebt,
  ],
  news: [
    CLIPS.cnnSpecialReport,
    CLIPS.bbcNewsCount2024,
    CLIPS.cnbcIdent,
    CLIPS.cnnBreakingNews,
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
const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number }[] = [
  { variant: 'cinematic', durationMs: 6200 },
  { variant: 'ident', durationMs: 5600 },
  { variant: 'field', durationMs: 5800 },
  { variant: 'visualizer', durationMs: 5500 },
  { variant: 'lineup', durationMs: 5600 },
  { variant: 'slate', durationMs: 5400 },
];

/**
 * Picks a station break package of 1 to 3 bumpers back-to-back ("random, not all the time"),
 * or a single preview bumper when triggered manually (B key / Ident button).
 *
 * Rules:
 * - Every bumper has a strict minimum duration of 5 seconds (5000ms).
 * - Video clips play for their full natural broadcast length (5s up to 22s).
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
      const dur = Math.max(5000, Math.min(20000, (clip.durationSec || 10) * 1000));
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
  const count = roll < 45 ? 1 : roll < 85 ? 2 : 3;

  const result: BreakPlan[] = [];
  const hour = typeof window !== 'undefined' ? new Date().getHours() : 20;
  const isLateNight = hour >= 0 && hour < 5;
  const baseCards = CHANNEL_CARDS[categoryId] || DEFAULT_CARDS;
  const cardPool = isLateNight ? [...LATE_NIGHT_CARDS, ...baseCards] : baseCards;

  for (let step = 0; step < count; step++) {
    // Interleave retro video clips with 3D scenes (unless it's an all-creator marathon block)
    const isClipSlot = !marathonCreator && clipPool.length > 0 && ((breakCount + step) % 2 === 1);

    if (isClipSlot) {
      const clip = clipPool[(breakCount + step) % clipPool.length];
      // Video clips: minimum 5.0 seconds, maximum 22.0 seconds
      const dur = Math.max(5000, Math.min(22000, (clip.durationSec || 10) * 1000));
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

  return result;
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
