export type MotionBumperVariant = 'ident' | 'lineup' | 'card' | 'signal';

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
      eyebrow: string;
      cardLine: string;
    }
  | {
      kind: 'youtube';
      clip: YouTubeBumperClip;
    };

// Verified horizontal, embeddable short TV station idents & retro bumpers (4s - 21s)
const CLIPS = {
  nick2001: { youtubeVideoId: 'p0DOSv1sA2w', label: 'Nickelodeon Ident', durationSec: 10 },
  filmCountdown4k: { youtubeVideoId: 'I8-YbI98ikk', label: 'Film Countdown', durationSec: 11 },
  oldFilmCountdown: { youtubeVideoId: 'GVuiftq3KsI', label: 'Reel Countdown', durationSec: 13 },
  featurePres: { youtubeVideoId: '8HEL4YHdj68', label: 'Feature Presentation', durationSec: 17 },
  tvStatic: { youtubeVideoId: 'zSpg77VNQ8A', label: 'Signal Static', durationSec: 5 },
  sbsIdent: { youtubeVideoId: 'd198bKXlCWU', label: 'SBS Ident', durationSec: 14 },
  mtvChainsaw: { youtubeVideoId: 'he3SszCkNOc', label: 'MTV Station ID', durationSec: 11 },
  mtvKaiju: { youtubeVideoId: 'Y41t0L-pfVc', label: 'MTV Kaiju Ident', durationSec: 21 },
  kadnNews: { youtubeVideoId: 'mg5gUVCaRvA', label: 'News Desk ID', durationSec: 5 },
  abcNews: { youtubeVideoId: 'WOmvzb9IBEA', label: 'WLS News ID', durationSec: 5 },
  itvSport: { youtubeVideoId: 'W4jCRwJh87o', label: 'Sport Bumper', durationSec: 5 },
  sportsBroadcast: { youtubeVideoId: 'tTLkY-beUJ0', label: 'Broadcast Bumper', durationSec: 13 },
  tyneTees: { youtubeVideoId: '5dHV8-7hV2Q', label: 'Classic Network ID', durationSec: 11 },
  metroNet: { youtubeVideoId: 'Ds-W4slQd4Y', label: 'Metro Network ID', durationSec: 6 },
} satisfies Record<string, YouTubeBumperClip>;

const YOUTUBE_BUMPERS_BY_CHANNEL: Record<string, YouTubeBumperClip[]> = {
  tech: [CLIPS.tvStatic, CLIPS.sbsIdent, CLIPS.metroNet],
  movies: [CLIPS.featurePres, CLIPS.filmCountdown4k, CLIPS.oldFilmCountdown],
  cartoons: [CLIPS.nick2001, CLIPS.mtvKaiju, CLIPS.tyneTees],
  industry: [CLIPS.metroNet, CLIPS.tvStatic],
  music: [CLIPS.mtvChainsaw, CLIPS.mtvKaiju],
  science: [CLIPS.metroNet, CLIPS.tyneTees],
  food: [CLIPS.tyneTees, CLIPS.sbsIdent],
  games: [CLIPS.mtvKaiju, CLIPS.tvStatic],
  sports: [CLIPS.itvSport, CLIPS.sportsBroadcast],
  travel: [CLIPS.tyneTees, CLIPS.sbsIdent],
  film: [CLIPS.filmCountdown4k, CLIPS.featurePres, CLIPS.oldFilmCountdown],
  fitness: [CLIPS.itvSport, CLIPS.metroNet],
  art: [CLIPS.mtvChainsaw, CLIPS.sbsIdent],
  design: [CLIPS.sbsIdent, CLIPS.metroNet],
  learning: [CLIPS.tyneTees, CLIPS.metroNet],
  documentaries: [CLIPS.oldFilmCountdown, CLIPS.tyneTees],
  architecture: [CLIPS.metroNet, CLIPS.sbsIdent],
  religion: [CLIPS.tyneTees],
  cars: [CLIPS.itvSport, CLIPS.tvStatic],
  business: [CLIPS.kadnNews, CLIPS.abcNews],
  news: [CLIPS.kadnNews, CLIPS.abcNews],
  entertainment: [CLIPS.featurePres, CLIPS.sbsIdent],
};

const GENERAL_YOUTUBE_BUMPERS: YouTubeBumperClip[] = [
  CLIPS.metroNet,
  CLIPS.tyneTees,
  CLIPS.sbsIdent,
  CLIPS.tvStatic,
];

const CHANNEL_CARD_LINES: Record<string, string[]> = {
  tech: [
    'All circuits nominal. Next hardware teardown coming right up.',
    'You are watching Tuned Tech · zero algorithms were harmed.',
    'Checking thermal paste before rolling the next tape.',
  ],
  movies: [
    'Silencing phones in row G. Next reel starts in a moment.',
    'Now changing projection reels — stay right where you are.',
    'Grab popcorn. Feature broadcast resumes shortly.',
  ],
  cartoons: [
    'Don’t touch that dial — more animation right after this break.',
    'Re-inking cels for the next episode. Back in five.',
    'All cartoons, all hours, straight to your screen.',
  ],
  industry: [
    'Shift changeover in progress — next build starts shortly.',
    'Calibrating tolerances. Back to the floor in a moment.',
  ],
  music: [
    'Flipping to Side B. Keep the volume right there.',
    'Late-night frequency locked in · Tuned Stereo.',
  ],
  science: [
    'Running a quick peer review between broadcasts.',
    'Recalibrating telescope coordinates — next episode ahead.',
  ],
  food: [
    'Letting the pan heat up. Next dish hits the pass shortly.',
    'Tasting for seasoning before the next kitchen run.',
  ],
  games: [
    'Insert coin to continue — loading next stage.',
    'Autosaving progress. Next run starts in a moment.',
  ],
  sports: [
    'Back from the studio desk with the next matchup shortly.',
    'Catching our breath before the next whistle.',
  ],
  travel: [
    'Boarding call for our next stop — stay tuned.',
    'Checking platform departures for the next journey.',
  ],
  film: [
    'Frame rate locked at 24fps. Next essay coming up.',
    'Adjusting focus pull — back to the cut in a moment.',
  ],
  fitness: [
    'Rest interval complete. Next set begins shortly.',
    'Water break almost done — stay locked in.',
  ],
  art: [
    'Letting the first coat dry before the next studio session.',
    'Cleaning brushes between pieces — back shortly.',
  ],
  design: [
    'Kerning the next lower-third. Broadcast resumes in a moment.',
    'Checking grids and margins before rolling the next reel.',
  ],
  learning: [
    'Turning the page — next deep dive starts in seconds.',
    'Filing notes from the last segment. Stay curious.',
  ],
  documentaries: [
    'Cueing up the next archival reel. Stay with us.',
    'Real stories, uncut schedules — back in a moment.',
  ],
  architecture: [
    'Reviewing blueprints before the next site tour.',
    'Measuring sightlines — broadcast resumes shortly.',
  ],
  religion: [
    'A quiet pause between broadcasts. Back in a moment.',
  ],
  cars: [
    'Pit stop complete. Back out on track in seconds.',
    'Shifting up into the next drive — stay tuned.',
  ],
  business: [
    'Checking the ticker between segments — back shortly.',
  ],
  news: [
    'Stand by at the anchor desk. Next report up next.',
  ],
  entertainment: [
    'Backstage cue in five — stay right there.',
  ],
};

const DEFAULT_CARD_LINES = [
  'Stay right there — your next broadcast starts in a moment.',
  'Live schedule locked · up next on Tuned.',
];

const MOTION_ROTATION: { variant: MotionBumperVariant; durationMs: number; eyebrow: string }[] = [
  { variant: 'ident', durationMs: 3200, eyebrow: 'STATION ID' },
  { variant: 'lineup', durationMs: 3600, eyebrow: 'COMING UP' },
  { variant: 'card', durationMs: 3500, eyebrow: 'INTERMISSION' },
  { variant: 'signal', durationMs: 3000, eyebrow: 'BROADCAST' },
];

/**
 * Picks the next station break for a channel so consecutive breaks alternate
 * cleanly between Option 1 motion/jingle cards and Option 3 YouTube mini-bumpers.
 */
export function pickNextBreak(
  categoryId: string,
  breakCount: number,
  failedIds?: Set<string>
): BreakPlan {
  const pool = (YOUTUBE_BUMPERS_BY_CHANNEL[categoryId] || GENERAL_YOUTUBE_BUMPERS).filter(
    (clip) => !failedIds?.has(clip.youtubeVideoId)
  );

  // Every 2nd break (e.g., breakCount % 2 === 1) plays a curated Option 3 YouTube bumper when available,
  // while even breaks play rotating Option 1 motion + Web Audio chime cards.
  if (pool.length > 0 && breakCount % 2 === 1) {
    const clipIdx = Math.floor(breakCount / 2) % pool.length;
    return {
      kind: 'youtube',
      clip: pool[clipIdx],
    };
  }

  const motionIdx = Math.floor(breakCount / (pool.length > 0 ? 2 : 1)) % MOTION_ROTATION.length;
  const template = MOTION_ROTATION[motionIdx];
  const lines = CHANNEL_CARD_LINES[categoryId] || DEFAULT_CARD_LINES;
  const cardLine = lines[breakCount % lines.length];

  return {
    kind: 'motion',
    variant: template.variant,
    durationMs: template.durationMs,
    eyebrow: template.eyebrow,
    cardLine,
  };
}
