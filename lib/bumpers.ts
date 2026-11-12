import { Video } from './types';

export type MotionBumperVariant =
  | 'ident'
  | 'cinematic'
  | 'lineup'
  | 'slate'
  | 'field'
  | 'card'
  | 'visualizer'
  | 'testcard'
  | 'vhs';

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
  gcBoot: { youtubeVideoId: 'ctYQ08gxkqA', label: 'GameCube Ident', durationSec: 34 },
  gta6Trailer: { youtubeVideoId: 'rz1B4B2yBZY', label: 'Rockstar Showcase', durationSec: 91 },
  switch2Minecraft: { youtubeVideoId: 'npFlBoJM2Ts', label: 'Nintendo Switch 2 Ident', durationSec: 76 },
  outerWorlds2: { youtubeVideoId: 'WjlWK1Wl6dc', label: 'PS5 Showcase Bumper', durationSec: 119 },

  // Tech
  mac1984: { youtubeVideoId: 'VtvjbmoDx-I', label: 'Macintosh 1984', durationSec: 60 },
  win95Ad: { youtubeVideoId: 'Tw-GGT6900s', label: 'Windows 95 Spot', durationSec: 32 },
  macBookProKeynote: { youtubeVideoId: 'hnZI5uUSdEo', label: 'Apple Mac Showcase', durationSec: 117 },
  quantumAegiq: { youtubeVideoId: 'N5YLi8Ar3Wg', label: 'Quantum Silicon Showcase', durationSec: 106 },
  siemensRobotics: { youtubeVideoId: '784YQBiZArk', label: 'Siemens Robotics AI', durationSec: 93 },

  // Music
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 12 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju ID', durationSec: 21 },
  vh1Ident: { youtubeVideoId: 'LPhUn9YB0JE', label: 'VH1 Station ID', durationSec: 36 },
  vh1Europe: { youtubeVideoId: '0KYpemsVClg', label: 'VH1 Europe Ident', durationSec: 15 },

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
  cnbcAuto3D: { youtubeVideoId: '9YLr-qa6Qq8', label: 'CNBC Industrial Report', durationSec: 148 },

  // Sports & Cars
  topGear: { youtubeVideoId: 'H72XigM0jjQ', label: 'Top Gear Intro', durationSec: 98 },
  f12026Titles: { youtubeVideoId: 'Sks_fMr2Yss', label: 'Formula 1 Opening Titles', durationSec: 58 },
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

  // Additional Curated Widescreen Broadcast Bumpers, Commercials & Station IDs
  // Cars & Racing
  topGearWorld: { youtubeVideoId: 'EkrCqQ9VCI4', label: 'Top Gear Bumper', durationSec: 12 },
  audiR8: { youtubeVideoId: 'XflP9D53slY', label: 'Audi R8 Spot', durationSec: 62 },
  f1Bbc: { youtubeVideoId: 'ChxX3tR4mD0', label: 'Formula 1 Opener', durationSec: 62 },
  porsche911: { youtubeVideoId: 'DZAdVY9kKbc', label: 'Porsche 911 GT3', durationSec: 57 },
  hondaCog: { youtubeVideoId: 'bl2U1p3fVRk', label: 'Honda Accord Cog', durationSec: 121 },

  // Religion & Sacred Architecture
  notreDameOrgan: { youtubeVideoId: '_7ndrXCaEOw', label: 'Notre Dame Organ', durationSec: 126 },
  vaticanBells: { youtubeVideoId: '_DnheFu1dqQ', label: 'St. Peter Basilica Bells', durationSec: 17 },
  kingsChoir: { youtubeVideoId: 'g-qDQSjnzH8', label: 'Kings College Choir', durationSec: 149 },

  // Food & Culinary Nostalgia
  foodNetPromo: { youtubeVideoId: 'PGe_xPuNYIU', label: 'Food Network 1997 ID', durationSec: 30 },
  heinzKetchup: { youtubeVideoId: '0IobpIKshr8', label: 'Heinz Ketchup 1978', durationSec: 30 },
  mcDonalds86: { youtubeVideoId: 'nsVl1RhCrPc', label: 'McDonalds Field Trip', durationSec: 61 },
  tabascoMosquito: { youtubeVideoId: 'XZubL4mZ5n0', label: 'Tabasco Commercial', durationSec: 31 },
  cokeHilltop: { youtubeVideoId: '1VM2eLhvsSM', label: 'Coca-Cola Hilltop 1971', durationSec: 60 },

  // Fitness & Athletic Heritage
  reebokPump: { youtubeVideoId: 'VDwFD9tH93I', label: 'Reebok Pump 1991', durationSec: 30 },
  sportsCenterLineup: { youtubeVideoId: 'RFAQMnztwJ8', label: 'This is SportsCenter', durationSec: 30 },
  adidasAli: { youtubeVideoId: 'ifuO7QB0i6w', label: 'Adidas Impossible is Nothing', durationSec: 72 },
  nikeFirst1988: { youtubeVideoId: '0yO7xLAGugQ', label: 'Nike Just Do It 1988', durationSec: 31 },
  gatoradeJordan: { youtubeVideoId: 'Hu3FE489LUQ', label: 'Be Like Mike Gatorade', durationSec: 70 },

  // Business & Market Television
  bloomberg2009: { youtubeVideoId: 'hN-jdPPRSO8', label: 'Bloomberg TV Bumper', durationSec: 23 },
  cnbcBell: { youtubeVideoId: 'u2HlXLCPDek', label: 'CNBC Opening Bell', durationSec: 62 },
  appleThinkDiff: { youtubeVideoId: '5sMBhDv4sik', label: 'Apple Think Different', durationSec: 70 },
  nyseBell: { youtubeVideoId: '3qCDlUtzEVI', label: 'NYSE Opening Bell', durationSec: 50 },
  fedExFast: { youtubeVideoId: 'NeK5ZjtpO-M', label: 'FedEx Fast Paced World', durationSec: 57 },
  etradeBaby: { youtubeVideoId: 'EbnWbdR9wSY', label: 'E*Trade Baby', durationSec: 34 },

  // Architecture & Structural Icons
  fallingwater: { youtubeVideoId: 'C3RTgK0zipY', label: 'Fallingwater Masterwork', durationSec: 67 },
  bauhausDessau: { youtubeVideoId: 'tFXA0fR3D8I', label: 'Bauhaus Dessau Manifesto', durationSec: 174 },
  sydneyOpera: { youtubeVideoId: 'UV2nnsjNh2w', label: 'Sydney Opera House', durationSec: 139 },

  // Music & Broadcast Culture
  mtv1990: { youtubeVideoId: 'CsGD5XXWUmg', label: 'MTV 1990 Ident', durationSec: 24 },
  topOfThePops: { youtubeVideoId: 'ZRNsn7t17ac', label: 'Top of the Pops 1990s', durationSec: 25 },
  bbcEssentialMix: { youtubeVideoId: 'gm8-fyJ9yLg', label: 'BBC Radio 1 Essential Mix', durationSec: 37 },
  mtv1981: { youtubeVideoId: 'HvGiRElg3nQ', label: 'MTV 1981 Launch', durationSec: 69 },
  vh1PopUp: { youtubeVideoId: 'OUBCRdINnDo', label: 'VH1 Pop-Up Video', durationSec: 29 },

  // Movies / Studio Fanfares
  paramount100: { youtubeVideoId: 'JWb9v8OB8HA', label: 'Paramount Centennial', durationSec: 21 },
  columbiaTorch: { youtubeVideoId: 'm3BMBnQnEWY', label: 'Columbia Pictures Torch Lady', durationSec: 22 },
  mgmLion: { youtubeVideoId: 'MLR9-ymUvjE', label: 'MGM Lion Intro', durationSec: 15 },
  universal100: { youtubeVideoId: 'bNJW113tbKk', label: 'Universal Centennial', durationSec: 24 },

  // Cartoons & Classic Animation
  dextersLabIntro: { youtubeVideoId: 'QbZfY28ptv4', label: "Dexter's Laboratory Intro", durationSec: 30 },
  edEddEddyIntro: { youtubeVideoId: 'POy9ofAlCjU', label: 'Ed, Edd n Eddy Intro', durationSec: 30 },
  courageIntro: { youtubeVideoId: '7BW-r5Mf8X4', label: 'Courage The Cowardly Dog', durationSec: 32 },
  johnnyBravoTheme: { youtubeVideoId: 'Exe0IEB3hKs', label: 'Johnny Bravo Theme', durationSec: 31 },
  cn1999Next: { youtubeVideoId: 'zLR-9DcHt10', label: 'Cartoon Network Next Bumper', durationSec: 40 },
  hannaBarberaSwirl: { youtubeVideoId: 'GpE2IuAyVt4', label: 'Hanna-Barbera Swirling Star', durationSec: 6 },
  nicktoonsBlob: { youtubeVideoId: 'w5nV_VNpWzA', label: 'Nicktoons Blob ID', durationSec: 20 },
  porkyPigEnding: { youtubeVideoId: 'gBzJGckMYO4', label: "That's All Folks!", durationSec: 8 },

  // Industry & Manufacturing
  boeing787: { youtubeVideoId: 'w3UNIqdV4gw', label: 'Boeing 787 Assembly', durationSec: 168 },
  apollo11Launch: { youtubeVideoId: 'UExTN3_UOIY', label: 'Apollo 11 Launch', durationSec: 104 },
  roboticArms: { youtubeVideoId: 'csifG1AM5d8', label: 'Industrial Robotics', durationSec: 44 },

  // Science & Discovery
  cosmosTitle: { youtubeVideoId: 'GwzmCS-Eczo', label: 'Cosmos Opening Theme', durationSec: 98 },
  discoveryBoomDeYada: { youtubeVideoId: 'at_f98qOGY0', label: 'The World is Just Awesome', durationSec: 60 },
  marsLanding: { youtubeVideoId: 'pYSztFFpDPc', label: 'NASA Mars Rover Landing', durationSec: 98 },

  // Sports & Arenas
  nbaRoundballRock: { youtubeVideoId: 'u-cSFPglc90', label: 'NBA on NBC Theme', durationSec: 133 },
  championsLeague: { youtubeVideoId: 'LwKqcM4E3J8', label: 'Champions League Intro', durationSec: 39 },

  // Travel & Aviation
  britishAirwaysFace: { youtubeVideoId: 'hVGHmRweMbA', label: 'British Airways Face 1989', durationSec: 95 },
  panAm1968: { youtubeVideoId: 'ILpYbT3NTZQ', label: 'Pan American 1968', durationSec: 63 },
  natGeoExplorer: { youtubeVideoId: 'Lu6lI0vVm0s', label: 'NatGeo Explorer', durationSec: 69 },

  // Entertainment & Primetime
  comedyCentral91: { youtubeVideoId: 'rmcYCbggS_w', label: 'Comedy Central ID 1991', durationSec: 14 },
  nbcMustSeeTV: { youtubeVideoId: 'pnh9TfS3Cyw', label: 'NBC Must See TV 1996', durationSec: 61 },
  conanIntro: { youtubeVideoId: 'BcmYs3RnolM', label: 'Late Night Conan Intro', durationSec: 73 },

  // News Desks
  nbcChimes: { youtubeVideoId: 'A7-nHycrDy0', label: 'NBC Chimes Evolutions', durationSec: 18 },
  cbsCronkite: { youtubeVideoId: 'WyzynG3TXJY', label: 'CBS Evening News', durationSec: 93 },

  // Games & Console Boots
  ps2Boot: { youtubeVideoId: 'y9Ln-qyvX_I', label: 'PS2 Startup Screen', durationSec: 17 },
  xboxBoot: { youtubeVideoId: '6w75IVld3QI', label: 'Original Xbox Boot', durationSec: 12 },
  segaScream: { youtubeVideoId: 'rh5eis0sMHI', label: 'SEGA Scream', durationSec: 5 },

  // Tech Innovations
  ipodJet: { youtubeVideoId: 'GMlDzBWU4b4', label: 'Apple iPod Silhouette', durationSec: 32 },

  // Design & Typography
  helveticaTrailer: { youtubeVideoId: 'X80kSDxF4rg', label: 'Helvetica Film Trailer', durationSec: 95 },
  braunDieterRams: { youtubeVideoId: 'GHyEnrMy-Fc', label: 'Braun TP1 Dieter Rams', durationSec: 69 },
  // --- Expanded 200+ Clip Broadcast Rotation ---
  disneyHexedPromo: { youtubeVideoId: 'lQ9Kx_tCbNY', label: 'Disney Animation Showcase', durationSec: 72 },
  glitchGameoverse: { youtubeVideoId: '-jknl-GNjDw', label: 'Glitch Animation Bumper', durationSec: 70 },
  knightsOfGuinevere: { youtubeVideoId: '4-sO_dp1fkE', label: 'Knights of Guinevere Teaser', durationSec: 63 },
  digitalCircusArt: { youtubeVideoId: 'hfT8prJy7ZQ', label: 'Digital Circus Showcase', durationSec: 179 },
  disneyHexedTrailer: { youtubeVideoId: 'KXO21xZdUaM', label: 'Disney Animation Featurette', durationSec: 145 },
  ps5MarathonTrailer: { youtubeVideoId: 'bOpqPkOlCGA', label: 'PlayStation Marathon Trailer', durationSec: 155 },
  xboxThronefall: { youtubeVideoId: 'uRjiHf8OKb0', label: 'Xbox Launch Showcase', durationSec: 70 },
  valorantHypeFilm: { youtubeVideoId: '69sKYwsxUM8', label: 'Valorant Championship Film', durationSec: 109 },
  switch2Metroid: { youtubeVideoId: 'q56cEFowUgQ', label: 'Nintendo Switch 2 Showcase', durationSec: 122 },
  hytaleTrailer: { youtubeVideoId: 'YMhUV1hnzHE', label: 'Hytale Early Access Teaser', durationSec: 162 },
  residentEvilTeaser: { youtubeVideoId: 'Rma1KLKyZWs', label: 'Sony Pictures Creator Teaser', durationSec: 80 },
  dunePartThree: { youtubeVideoId: 'eeUQf24OfzA', label: 'Legendary Pictures Showcase', durationSec: 159 },
  hboFloridaMan: { youtubeVideoId: 'ahRyxQn1l58', label: 'HBO Max Original Teaser', durationSec: 132 },
  marvelVisionQuest: { youtubeVideoId: '2FdjsoGEQqg', label: 'Marvel Television Bumper', durationSec: 69 },
  streetFighterTeaser: { youtubeVideoId: 'hrx7cQFIIn0', label: 'Legendary Feature Trailer', durationSec: 169 },
  sonyPicturesAnniversary: { youtubeVideoId: 'NLVLsyE4uUA', label: 'Sony Pictures Anniversary', durationSec: 92 },
  badMonkeyApple: { youtubeVideoId: '9ZiePpwIlAE', label: 'Apple TV Original Promo', durationSec: 139 },
  jumanjiTrailer: { youtubeVideoId: 'nIw1O3zvOfE', label: 'Sony Pictures 4K Trailer', durationSec: 171 },
  hboHotline: { youtubeVideoId: 'XBY2ylbeOkM', label: 'HBO Max Feature Presentation', durationSec: 84 },
  switzerlandCinematic: { youtubeVideoId: 'G_fCDVyxH5w', label: 'Cinematic Cinema Showcase', durationSec: 152 },
  colorsSiennaSenate: { youtubeVideoId: 'TOBmHM6_hGc', label: 'A COLORS SHOW Studio Ident', durationSec: 180 },
  cercleDenisHorvat: { youtubeVideoId: 'gwLLvuVitx0', label: 'Cercle Records Electronic Ident', durationSec: 162 },
  ultraSummerInterlude: { youtubeVideoId: 'xZbcSF9itt8', label: 'Ultra Records Summer Interlude', durationSec: 118 },
  tomorrowlandIdent: { youtubeVideoId: 'SiYRxCfrPTw', label: 'Tomorrowland Festival Ident', durationSec: 185 },
  monstercatDillon: { youtubeVideoId: 'KeSwS7m_0vc', label: 'Monstercat Instinct Bumper', durationSec: 200 },
  asusProArtAi: { youtubeVideoId: 'T40hRXn6YMk', label: 'ASUS ProArt Studio Showcase', durationSec: 101 },
  samsungGalaxyTour: { youtubeVideoId: 'HJQ37cs9iHQ', label: 'Samsung Galaxy Visual Showcase', durationSec: 77 },
  appleAirTagPro: { youtubeVideoId: 'ysiyeCEtNMs', label: 'Apple Product Showcase', durationSec: 88 },
  asusAscentDefense: { youtubeVideoId: 'u00fLLJsQbc', label: 'ASUS AI Simulation Report', durationSec: 115 },
  f1AcademyShowcase: { youtubeVideoId: 'kqt1A8oB0BE', label: 'F1 Academy Season Showcase', durationSec: 124 },
  olympicsGymnastics: { youtubeVideoId: 'Ixb4d-8HNeQ', label: 'Olympic Games Floor Routine', durationSec: 94 },
  skySportsBarca: { youtubeVideoId: 'Q4xRXBVvHU4', label: 'Sky Sports Football Bumper', durationSec: 125 },
  nbaTopPlays: { youtubeVideoId: 'B5VNBCvu4E0', label: 'NBA Top 10 Plays Bumper', durationSec: 149 },
  olympics200mFinal: { youtubeVideoId: '074I4964nGw', label: 'Olympic Games 200m Sprint', durationSec: 173 },
  veritasiumInGenius: { youtubeVideoId: 'SsYKLXIU7no', label: 'Veritasium InGenius Showcase', durationSec: 92 },
  melodysheepFirstSec: { youtubeVideoId: 'XfXdF53wtBE', label: 'Melodysheep Cosmic Odyssey', durationSec: 127 },
  fiatConceptDesign: { youtubeVideoId: '3Mn6YnuH_AI', label: 'Fiat Automotive Engineering', durationSec: 114 },
  cnbcMarketBorrow: { youtubeVideoId: 'rkDiNKDv3Cg', label: 'CNBC Market Economics Update', durationSec: 68 },
  cnbcDebtCeiling: { youtubeVideoId: '6Q08nql7vCA', label: 'CNBC Financial Markets Report', durationSec: 62 },
  vmaArtistSpot: { youtubeVideoId: 'TWzJ2gSNuos', label: 'MTV VMAs Ceremony Bumper', durationSec: 166 },
  dezeenAiRobot: { youtubeVideoId: 'Ebn1Ju6fjEo', label: 'Dezeen Modernist Architecture', durationSec: 102 },
  dezeenDroidButler: { youtubeVideoId: 's-kMNm8Ob3U', label: 'Dezeen Product Design Studio', durationSec: 89 },
  panterGraphicDesign: { youtubeVideoId: 'c06pGep7tMk', label: 'Panter Typography Showcase', durationSec: 170 },
  damiLeeStudio: { youtubeVideoId: 'Rqcvc6MxCwM', label: 'Architect Studio Intermission', durationSec: 116 },
  polestarFormula2030: { youtubeVideoId: 'Wa-FclxjUS8', label: 'Polestar Formula 2030 Design', durationSec: 147 },
  porscheCayenneElectric: { youtubeVideoId: 'ZVicFs5_WVw', label: 'Porsche Cayenne Electric ID', durationSec: 191 },
  polestarCabinDesign: { youtubeVideoId: 'o33vflOHPxk', label: 'Polestar Cabin Performance', durationSec: 136 },
  porscheRedBullSpeed: { youtubeVideoId: 'jYOcIgHp5-s', label: 'Porsche Red Bull Speed Showcase', durationSec: 79 },
  minuteEarthSunsets: { youtubeVideoId: '9PJvV5PYDm0', label: 'MinuteEarth Atmospheric Science', durationSec: 163 },
  minuteEarthBirds: { youtubeVideoId: 'x-vpfrs7RIs', label: 'MinuteEarth Aerodynamics', durationSec: 163 },
  rickStevesVenice: { youtubeVideoId: 'W4lTVLOwzQQ', label: 'Rick Steves Venice Waterway', durationSec: 71 },
  rickStevesAlpine: { youtubeVideoId: '2vZA83_gQCA', label: 'Rick Steves Alpine Descent', durationSec: 75 },
  buffDudesWorkout: { youtubeVideoId: 'W--SWugwi_M', label: 'Buff Dudes Athletic Training', durationSec: 121 },
  madFitSession: { youtubeVideoId: 'o9l63Vr0HRs', label: 'MadFit Movement Interlude', durationSec: 189 },
  chromaMomaPaint: { youtubeVideoId: '7U63WKkHvcc', label: 'Chroma MoMA Canvas Showcase', durationSec: 68 },
  markCrilleyStudio: { youtubeVideoId: 'z4L3Gd76xaE', label: 'Mark Crilley Studio Session', durationSec: 148 },
  catholicCrusadePrayer: { youtubeVideoId: '8i8V5jjEHoU', label: 'Sacred Meditation Intermission', durationSec: 113 },
  catholicCrusadeHymn: { youtubeVideoId: '8IAYgfhGu_U', label: 'Sacred Choral Reflection', durationSec: 104 },
} satisfies Record<string, YouTubeBumperClip>;

const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [
    CLIPS.mac1984,
    CLIPS.win95Ad,
    CLIPS.macBookProKeynote,
    CLIPS.quantumAegiq,
    CLIPS.siemensRobotics,
    CLIPS.ipodJet,
    CLIPS.appleThinkDiff,
    CLIPS.asusProArtAi,
    CLIPS.samsungGalaxyTour,
    CLIPS.appleAirTagPro,
    CLIPS.asusAscentDefense,
  ],
  movies: [
    CLIPS.featurePres,
    CLIPS.hbo1992,
    CLIPS.thxDeepNote,
    CLIPS.driveInDog,
    CLIPS.paramount100,
    CLIPS.columbiaTorch,
    CLIPS.mgmLion,
    CLIPS.universal100,
    CLIPS.residentEvilTeaser,
    CLIPS.dunePartThree,
    CLIPS.hboFloridaMan,
    CLIPS.marvelVisionQuest,
    CLIPS.streetFighterTeaser,
    CLIPS.sonyPicturesAnniversary,
  ],
  film: [
    CLIPS.featurePres,
    CLIPS.hbo1992,
    CLIPS.thxDeepNote,
    CLIPS.driveInDog,
    CLIPS.paramount100,
    CLIPS.columbiaTorch,
    CLIPS.mgmLion,
    CLIPS.universal100,
    CLIPS.badMonkeyApple,
    CLIPS.jumanjiTrailer,
    CLIPS.hboHotline,
    CLIPS.switzerlandCinematic,
  ],
  cartoons: [
    CLIPS.cnCity1,
    CLIPS.asCheckered1,
    CLIPS.nick2001,
    CLIPS.cnCity2,
    CLIPS.asCheckered2,
    CLIPS.cnPowerhouse,
    CLIPS.pixarFriends,
    CLIPS.lofiGift,
    CLIPS.dextersLabIntro,
    CLIPS.edEddEddyIntro,
    CLIPS.courageIntro,
    CLIPS.johnnyBravoTheme,
    CLIPS.cn1999Next,
    CLIPS.hannaBarberaSwirl,
    CLIPS.nicktoonsBlob,
    CLIPS.porkyPigEnding,
    CLIPS.disneyHexedPromo,
    CLIPS.glitchGameoverse,
    CLIPS.knightsOfGuinevere,
    CLIPS.digitalCircusArt,
    CLIPS.disneyHexedTrailer,
  ],
  industry: [
    CLIPS.howItsMade,
    CLIPS.siemensRobotics,
    CLIPS.cnbcAuto3D,
    CLIPS.discoveryHd,
    CLIPS.boeing787,
    CLIPS.apollo11Launch,
    CLIPS.roboticArms,
    CLIPS.hondaCog,
    CLIPS.fiatConceptDesign,
  ],
  music: [
    CLIPS.mtvKaiju,
    CLIPS.mtvChainsaw,
    CLIPS.vh1Ident,
    CLIPS.vh1Europe,
    CLIPS.mtv1990,
    CLIPS.topOfThePops,
    CLIPS.bbcEssentialMix,
    CLIPS.mtv1981,
    CLIPS.vh1PopUp,
    CLIPS.colorsSiennaSenate,
    CLIPS.cercleDenisHorvat,
    CLIPS.ultraSummerInterlude,
    CLIPS.tomorrowlandIdent,
    CLIPS.monstercatDillon,
  ],
  science: [
    CLIPS.discoveryHd,
    CLIPS.billNye,
    CLIPS.discoveryBumper,
    CLIPS.natGeo,
    CLIPS.bbc1980s,
    CLIPS.bbc100,
    CLIPS.cosmosTitle,
    CLIPS.discoveryBoomDeYada,
    CLIPS.marsLanding,
    CLIPS.minuteEarthSunsets,
    CLIPS.minuteEarthBirds,
    CLIPS.veritasiumInGenius,
  ],
  food: [
    CLIPS.driveInDog,
    CLIPS.bourdainNoRes,
    CLIPS.bourdainParts,
    CLIPS.foodNetPromo,
    CLIPS.heinzKetchup,
    CLIPS.mcDonalds86,
    CLIPS.tabascoMosquito,
    CLIPS.cokeHilltop,
  ],
  games: [
    CLIPS.ps1Boot,
    CLIPS.gcBoot,
    CLIPS.ps1StartupSound,
    CLIPS.gta6Trailer,
    CLIPS.switch2Minecraft,
    CLIPS.outerWorlds2,
    CLIPS.ps2Boot,
    CLIPS.xboxBoot,
    CLIPS.segaScream,
    CLIPS.ps5MarathonTrailer,
    CLIPS.xboxThronefall,
    CLIPS.valorantHypeFilm,
    CLIPS.switch2Metroid,
    CLIPS.hytaleTrailer,
  ],
  sports: [
    CLIPS.f12026Titles,
    CLIPS.itvSport,
    CLIPS.nikeSpot,
    CLIPS.googleHoops,
    CLIPS.nbaRoundballRock,
    CLIPS.championsLeague,
    CLIPS.gatoradeJordan,
    CLIPS.sportsCenterLineup,
    CLIPS.f1Bbc,
    CLIPS.f1AcademyShowcase,
    CLIPS.olympicsGymnastics,
    CLIPS.skySportsBarca,
    CLIPS.nbaTopPlays,
    CLIPS.olympics200mFinal,
  ],
  travel: [
    CLIPS.bourdainParts,
    CLIPS.bourdainNoRes,
    CLIPS.natGeo,
    CLIPS.bbc100,
    CLIPS.britishAirwaysFace,
    CLIPS.panAm1968,
    CLIPS.natGeoExplorer,
    CLIPS.rickStevesVenice,
    CLIPS.rickStevesAlpine,
  ],
  fitness: [
    CLIPS.nikeSpot,
    CLIPS.itvSport,
    CLIPS.googleHoops,
    CLIPS.reebokPump,
    CLIPS.sportsCenterLineup,
    CLIPS.adidasAli,
    CLIPS.nikeFirst1988,
    CLIPS.gatoradeJordan,
    CLIPS.buffDudesWorkout,
    CLIPS.madFitSession,
  ],
  art: [
    CLIPS.bbcPaint,
    CLIPS.tateModern,
    CLIPS.momaMoment,
    CLIPS.bbcOptics,
    CLIPS.louvreIntro,
    CLIPS.helveticaTrailer,
    CLIPS.fallingwater,
    CLIPS.bauhausDessau,
    CLIPS.chromaMomaPaint,
    CLIPS.markCrilleyStudio,
  ],
  design: [
    CLIPS.mac1984,
    CLIPS.win95Ad,
    CLIPS.appleDesign20,
    CLIPS.appleWatchSteel,
    CLIPS.helveticaTrailer,
    CLIPS.braunDieterRams,
    CLIPS.appleThinkDiff,
    CLIPS.fallingwater,
    CLIPS.bauhausDessau,
    CLIPS.appleAirTagPro,
    CLIPS.dezeenAiRobot,
    CLIPS.dezeenDroidButler,
    CLIPS.panterGraphicDesign,
  ],
  learning: [
    CLIPS.pbs1990s,
    CLIPS.billNye,
    CLIPS.pbsKids,
    CLIPS.bbc100,
    CLIPS.discoveryBumper,
    CLIPS.cosmosTitle,
    CLIPS.discoveryBoomDeYada,
    CLIPS.natGeoExplorer,
    CLIPS.veritasiumInGenius,
  ],
  documentaries: [
    CLIPS.natGeo,
    CLIPS.bbc1980s,
    CLIPS.bbc100,
    CLIPS.discoveryHd,
    CLIPS.discoveryBumper,
    CLIPS.cosmosTitle,
    CLIPS.apollo11Launch,
    CLIPS.natGeoExplorer,
    CLIPS.melodysheepFirstSec,
  ],
  architecture: [
    CLIPS.appleDesign20,
    CLIPS.louvreIntro,
    CLIPS.bbcOptics,
    CLIPS.tateModern,
    CLIPS.fallingwater,
    CLIPS.bauhausDessau,
    CLIPS.sydneyOpera,
    CLIPS.dezeenAiRobot,
    CLIPS.fiatConceptDesign,
    CLIPS.damiLeeStudio,
  ],
  religion: [
    CLIPS.bbc100,
    CLIPS.featurePres,
    CLIPS.notreDameOrgan,
    CLIPS.vaticanBells,
    CLIPS.kingsChoir,
    CLIPS.louvreIntro,
    CLIPS.tateModern,
    CLIPS.catholicCrusadePrayer,
    CLIPS.catholicCrusadeHymn,
  ],
  cars: [
    CLIPS.topGear,
    CLIPS.f12026Titles,
    CLIPS.itvSport,
    CLIPS.topGearWorld,
    CLIPS.audiR8,
    CLIPS.f1Bbc,
    CLIPS.porsche911,
    CLIPS.hondaCog,
    CLIPS.polestarFormula2030,
    CLIPS.porscheCayenneElectric,
    CLIPS.polestarCabinDesign,
    CLIPS.porscheRedBullSpeed,
  ],
  business: [
    CLIPS.bloombergBumper,
    CLIPS.cnbcIdent,
    CLIPS.cnbcBreak,
    CLIPS.cnbcAuto3D,
    CLIPS.bloomberg2009,
    CLIPS.cnbcBell,
    CLIPS.appleThinkDiff,
    CLIPS.nyseBell,
    CLIPS.fedExFast,
    CLIPS.etradeBaby,
    CLIPS.cnbcMarketBorrow,
    CLIPS.cnbcDebtCeiling,
  ],
  news: [
    CLIPS.cnnSpecialReport,
    CLIPS.bbcNewsCount2024,
    CLIPS.cnbcIdent,
    CLIPS.cnbcBreak,
    CLIPS.bbcNewsTheme,
    CLIPS.kadnNews,
    CLIPS.abcNews,
    CLIPS.nbcChimes,
    CLIPS.cbsCronkite,
  ],
  entertainment: [
    CLIPS.hbo1992,
    CLIPS.vh1Europe,
    CLIPS.googleHoops,
    CLIPS.pixarFriends,
    CLIPS.comedyCentral91,
    CLIPS.nbcMustSeeTV,
    CLIPS.conanIntro,
    CLIPS.vh1PopUp,
    CLIPS.vmaArtistSpot,
  ],
};

const GENERAL_YOUTUBE_BUMPERS: YouTubeBumperClip[] = [
  CLIPS.hbo1992,
  CLIPS.pbs1990s,
  CLIPS.natGeo,
  CLIPS.bbc100,
  CLIPS.featurePres,
  CLIPS.appleThinkDiff,
  CLIPS.universal100,
  CLIPS.cokeHilltop,
  CLIPS.porkyPigEnding,
];

interface DeadpanCard {
  lead: string;
  punchline: string;
}

const CHANNEL_CARDS: Record<string, DeadpanCard[]> = {
  tech: [
    { lead: 'Checking thermal paste…', punchline: 'All circuits nominal. Next teardown in five.' },
    { lead: 'You could be scrolling a feed.', punchline: 'Instead you are watching linear television.' },
    { lead: 'Compiling shaders…', punchline: 'Zero dropouts detected. Next tech segment rolling.' },
  ],
  movies: [
    { lead: 'Changing 35mm reels.', punchline: 'Silence your phone in row G.' },
    { lead: 'No skip-intro button here.', punchline: 'Next feature presentation rolling shortly.' },
    { lead: 'Please visit the concession stand.', punchline: 'The projector cools down for nobody.' },
  ],
  cartoons: [
    { lead: 'Don’t touch that dial.', punchline: 'More animation right after this.' },
    { lead: 'Fresh ink drying.', punchline: 'Stay tuned — cartoons continue in seconds.' },
    { lead: 'Commercial timeout for Saturday morning.', punchline: 'Pour another bowl of cereal.' },
  ],
  industry: [
    { lead: 'Shift changeover.', punchline: 'Calibrating tolerances for the next build.' },
    { lead: 'Hydraulics pressure nominal.', punchline: 'Next factory inspection rolling shortly.' },
    { lead: 'Quality control checkpoint.', punchline: 'Assembly resumes on the other side.' },
  ],
  music: [
    { lead: 'Side A complete.', punchline: 'Flipping the tape to Side B now.' },
    { lead: 'Needle drop pending.', punchline: 'Check your turntable tracking weight.' },
    { lead: 'Broadcasting in stereo sound.', punchline: 'Turn up the monitors.' },
  ],
  science: [
    { lead: 'Peer review complete.', punchline: 'Next experiment begins in five seconds.' },
    { lead: 'Calibrating telescope mirrors.', punchline: 'Deep field observation continues.' },
    { lead: 'Hypothesis confirmed.', punchline: 'Resuming laboratory transmission now.' },
  ],
  food: [
    { lead: 'Letting the pan hit smoke point.', punchline: 'Order up in a moment.' },
    { lead: 'Deglazing the fond.', punchline: 'Next culinary journey plating shortly.' },
    { lead: 'Sharp knives only.', punchline: 'Dinner service resumes in seconds.' },
  ],
  games: [
    { lead: 'Memory card detected.', punchline: 'Loading next stage — stay locked in.' },
    { lead: 'Please do not turn off your console.', punchline: 'Saving state… next run begins in moments.' },
    { lead: 'Insert Coin to continue.', punchline: 'No continues needed — linear gaming rolls on.' },
  ],
  sports: [
    { lead: 'Television timeout.', punchline: 'Back to live coverage in seconds.' },
    { lead: 'Checking the replay booth.', punchline: 'Call stands. Action resumes now.' },
    { lead: 'Commercial break on court.', punchline: 'Both benches huddled. Resuming shortly.' },
  ],
  travel: [
    { lead: 'Next departure boarding.', punchline: 'Keep your window seat.' },
    { lead: 'Final call at Gate 4.', punchline: 'Wheels up in five seconds.' },
    { lead: 'Passport control clear.', punchline: 'Next destination on the horizon.' },
  ],
  film: [
    { lead: '24 frames per second.', punchline: 'Back to the director’s chair in five.' },
    { lead: 'Lighting check on set.', punchline: 'Quiet on set. Rolling sound in seconds.' },
    { lead: 'Director’s cut in progress.', punchline: 'No theatrical edits here.' },
  ],
  fitness: [
    { lead: 'Rest timer ending.', punchline: 'Next set starts shortly.' },
    { lead: 'Chalk your hands.', punchline: 'Next round begins right now.' },
    { lead: 'Active recovery period.', punchline: 'Heart rate steady. Resuming in seconds.' },
  ],
  art: [
    { lead: 'First layer drying.', punchline: 'Back in the studio in a second.' },
    { lead: 'Please do not touch the canvas.', punchline: 'Exhibition continues on the other side.' },
    { lead: 'Adjusting gallery spotlights.', punchline: 'Next piece coming into focus.' },
  ],
  design: [
    { lead: 'Tightening the kerning.', punchline: 'Next breakdown coming right up.' },
    { lead: 'Aligning to the 8pt grid.', punchline: 'Form follows function. Resuming shortly.' },
    { lead: 'Checking the Pantone swatch.', punchline: 'Next design study in seconds.' },
  ],
  learning: [
    { lead: 'Turning to chapter two.', punchline: 'Stay curious.' },
    { lead: 'Class is in session.', punchline: 'Next lecture rolling right up.' },
    { lead: 'Archival retrieval in progress.', punchline: 'Educational broadcast continues.' },
  ],
  documentaries: [
    { lead: 'Cueing archival reel.', punchline: 'Broadcast resumes in seconds.' },
    { lead: 'History in high definition.', punchline: 'Next chapter rolling in moments.' },
    { lead: 'Field researchers regrouping.', punchline: 'Transmission resumes shortly.' },
  ],
  cars: [
    { lead: 'Four fresh tires.', punchline: 'Back out on track now.' },
    { lead: 'Redlining the tachometer.', punchline: 'Next sprint rolling right after this.' },
    { lead: 'Pit stop complete — 2.1 seconds.', punchline: 'Green light is on.' },
  ],
  business: [
    { lead: 'Checking the ticker.', punchline: 'The invisible hand is taking a commercial break.' },
    { lead: 'Quarterly report nominal.', punchline: 'Next breakdown begins in moments.' },
    { lead: 'Market trading halt lifted.', punchline: 'Resuming business broadcast.' },
  ],
  news: [
    { lead: 'Developing story.', punchline: 'Anchors adjusting ties. Resuming in seconds.' },
    { lead: 'The world is still turning.', punchline: 'Stay tuned for continued coverage.' },
    { lead: 'Wire report incoming.', punchline: 'Updating the newsroom teleprompter.' },
  ],
  religion: [
    { lead: 'A moment of stillness.', punchline: 'Continuing broadcast right now.' },
    { lead: 'Cathedral bells chiming.', punchline: 'Quiet reflection continues.' },
    { lead: 'Sacred choral intermission.', punchline: 'Transmission resumes in seconds.' },
  ],
  entertainment: [
    { lead: 'Grabbing a cold drink.', punchline: 'Do not touch that dial. More laughs in seconds.' },
    { lead: 'Commercial timeout.', punchline: 'Back to the antics on the other side.' },
    { lead: 'Live studio audience applause.', punchline: 'Show returns in moments.' },
  ],
  architecture: [
    { lead: 'Checking the blueprints.', punchline: 'Next architectural tour begins shortly.' },
    { lead: 'Load-bearing inspection nominal.', punchline: 'Cantilevered views ahead.' },
    { lead: 'Concrete curing in progress.', punchline: 'Next monument rolling right up.' },
  ],
};

const LATE_NIGHT_CARDS: DeadpanCard[] = [
  { lead: 'It is late.', punchline: 'Nobody else is watching this channel right now. Except you.' },
  { lead: 'Past midnight broadcast.', punchline: 'Still no algorithm. Just television.' },
];

const DEFAULT_CARDS: DeadpanCard[] = [
  { lead: 'Zero feeds. Zero doomscroll.', punchline: 'Just Tuned. Up next in seconds.' },
  { lead: 'Station identification.', punchline: 'Continuing uninterrupted broadcast now.' },
  { lead: 'Broadcasting in stereo.', punchline: 'Next feature presentation rolling shortly.' },
];

// All motion bumper templates render immersive channel-specific Three.js 3D worlds with a strict minimum of 5 seconds (5000ms)
// Durations are rounded to exact whole seconds to eliminate fractional-second rounding gaps
const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number }[] = [
  { variant: 'cinematic', durationMs: 7000 },
  { variant: 'ident', durationMs: 6000 },
  { variant: 'testcard', durationMs: 6000 },
  { variant: 'field', durationMs: 6000 },
  { variant: 'vhs', durationMs: 6000 },
  { variant: 'visualizer', durationMs: 6000 },
  { variant: 'lineup', durationMs: 6000 },
  { variant: 'slate', durationMs: 6000 },
  { variant: 'card', durationMs: 6000 },
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
