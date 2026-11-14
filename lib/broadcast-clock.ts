import { Video } from './types';
import { BreakPlan, computeChannelTransitions } from './bumpers';
import { getDeterministicDuration, getVideoDuration } from './video-duration';

export { getDeterministicDuration, getVideoDuration };

// In-memory cache of true video durations captured from the YouTube player
const KNOWN_DURATIONS = new Map<string, number>();

// Network-compensated server clock offset to keep separate devices in absolute synchronization
let serverClockOffsetMs = 0;
let isClockSynced = false;
let isCalibrating = false;

/**
 * Calibrates client clock with server UTC time using Cristian's algorithm over multiple samples.
 * Measures round-trip time (RTT) and picks the sample with lowest latency to eliminate network jitter.
 */
export async function calibrateServerClock(): Promise<number> {
  if (typeof window === 'undefined') return 0;
  if (isCalibrating) return serverClockOffsetMs;
  isCalibrating = true;

  try {
    let bestRtt = Infinity;
    let bestOffset = serverClockOffsetMs;

    for (let i = 0; i < 3; i++) {
      try {
        const t0 = performance.now();
        const clientSendEpoch = Date.now();
        const res = await fetch(`/api/time?t=${clientSendEpoch}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
        });
        const t1 = performance.now();
        const clientRecvEpoch = Date.now();
        const rtt = Math.max(0, t1 - t0);

        if (res.ok) {
          const data = await res.json();
          if (typeof data.serverTimeMs === 'number' && rtt < bestRtt) {
            bestRtt = rtt;
            const estimatedServerNowAtRecv = data.serverTimeMs + Math.round(rtt / 2);
            bestOffset = estimatedServerNowAtRecv - clientRecvEpoch;
          }
        }
      } catch {}
    }

    serverClockOffsetMs = bestOffset;
    isClockSynced = true;
    return serverClockOffsetMs;
  } finally {
    isCalibrating = false;
  }
}

/**
 * Record server timestamp and client ping timing to calibrate the global broadcast clock.
 */
export function recordServerTime(
  serverTimeMs: number,
  clientSendTimeMs?: number,
  clientReceiveTimeMs?: number
): void {
  if (!serverTimeMs) return;
  const now = Date.now();
  const send = clientSendTimeMs || now;
  const receive = clientReceiveTimeMs || now;
  const rtt = Math.max(0, receive - send);
  const estimatedServerNow = serverTimeMs + Math.floor(rtt / 2);
  serverClockOffsetMs = estimatedServerNow - receive;
  isClockSynced = true;
}

/**
 * Synchronized wall-clock timestamp in milliseconds across all devices.
 */
export function getSyncedNowMs(): number {
  return Date.now() + serverClockOffsetMs;
}

/**
 * Synchronized wall-clock timestamp in seconds across all devices.
 */
export function getSyncedNowSec(): number {
  return Math.floor(getSyncedNowMs() / 1000);
}

/**
 * Returns the currently active server clock offset in milliseconds.
 */
export function getServerClockOffsetMs(): number {
  return serverClockOffsetMs;
}

/**
 * Record true runtime in seconds reported by the official YouTube player.
 */
export function recordVideoDuration(videoId: string, durationSec: number): void {
  if (videoId && durationSec > 0) {
    KNOWN_DURATIONS.set(videoId, Math.floor(durationSec));
  }
}

/**
 * In-memory memoization cache for daily channel lineups:
 * key: `${categoryId}_dow_${localDay}_m${isMarathonPeriod ? 1 : 0}_len_${videos.length}`
 */
const DAILY_LINEUP_CACHE = new Map<string, Video[]>();

/**
 * Deterministic pseudo-random number generator (Mulberry32).
 */
function createMulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns true during Prime-Time Friday Night (Fri >= 18:00), Saturday (all day),
 * Sunday (all day), and late Sunday Night into early Monday morning (< 06:00).
 * During this window, channels guarantee multi-episode creator marathon programming!
 */
export function isWeekendOrFridayNight(nowMs: number = getSyncedNowMs()): boolean {
  const d = new Date(nowMs);
  const day = d.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat
  const hour = d.getHours();
  if (day === 5 && hour >= 18) return true;
  if (day === 6 || day === 0) return true;
  if (day === 1 && hour < 6) return true;
  return false;
}

/**
 * Returns a contextual label for active marathon badges.
 */
export function getMarathonScheduleLabel(nowMs: number = getSyncedNowMs()): string {
  const d = new Date(nowMs);
  const day = d.getDay();
  const hour = d.getHours();
  if (day === 5 && hour >= 18) return 'FRIDAY MARATHON';
  if (day === 6 || day === 0 || (day === 1 && hour < 6)) return 'WEEKEND MARATHON';
  return 'MARATHON';
}

/**
 * Deterministic day-of-week hash seed for a channel.
 * Cycles cleanly across the 7 days of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
 */
export function getCalendarDaySeed(categoryId: string, nowMs: number = getSyncedNowMs()): number {
  const d = new Date(nowMs);
  const dayOfWeek = d.getDay();
  let hash = 0;
  const str = `${categoryId}_dow_${dayOfWeek}_v2`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministic channel time offset combining channel ID and calendar-day seed.
 */
export function getChannelTimeOffset(categoryId: string, nowMs: number = getSyncedNowMs()): number {
  const daySeed = getCalendarDaySeed(categoryId, nowMs);
  const str = `${categoryId}_offset_v2_${daySeed}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) + (daySeed % 86400)) % 86400; // Offset within a 24-hour broadcast day
}

export interface BroadcastState {
  videoIndex: number;
  seekSeconds: number;
  seekSecondsFloat?: number;
  durationSec: number;
  remainingSec: number;
  currentVideo: Video | null;
  isBumperBreak?: boolean;
  activeBreakPlans?: BreakPlan[];      // Remaining plans in the current break, starting from the active bumper
  activeBumperElapsedMs?: number;      // How many ms into activeBreakPlans[0] we currently are
  activeBumperRemainingMs?: number;    // How many ms remain in activeBreakPlans[0]
}

/**
 * Filter out any YouTube Shorts or clips <= 60s so all broadcasts are full-length television programs.
 */
export function getEligibleVideos(videos: Video[]): Video[] {
  if (!videos || !Array.isArray(videos)) return [];
  return videos.filter(
    (v) =>
      (!v.durationSec || v.durationSec > 60) &&
      !/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(v.title || '')
  );
}

/**
 * Returns a deterministically shuffled channel lineup for the current calendar day of the week.
 *
 * - On Friday Night & Weekends: Actively clusters every creator's catalog into guaranteed
 *   back-to-back Marathon Blocks (3-5 consecutive episodes per creator) and shuffles blocks
 *   by day-of-week seed so viewers are guaranteed continuous creator marathons all weekend!
 * - On Mon-Fri Daytime: Preserves existing marathon blocks from the interleaved schedule
 *   and shuffles blocks deterministically per day of the week.
 *
 * 100% deterministic across all clients sharing the schedule period.
 */
export function getDailyChannelLineup(
  videos: Video[],
  categoryId: string,
  nowMs: number = getSyncedNowMs()
): Video[] {
  const eligible = getEligibleVideos(videos);
  const base = eligible.length > 0 ? eligible : videos;
  if (!base || base.length <= 2) return base;

  const d = new Date(nowMs);
  const dayOfWeek = d.getDay();
  const isMarathonPeriod = isWeekendOrFridayNight(nowMs);
  const cacheKey = `${categoryId}_dow_${dayOfWeek}_m${isMarathonPeriod ? 1 : 0}_len_${base.length}`;
  const cached = DAILY_LINEUP_CACHE.get(cacheKey);
  if (cached) return cached;

  const seed = getCalendarDaySeed(categoryId, nowMs) + (isMarathonPeriod ? 777 : 0);
  const prng = createMulberry32(seed);

  let blocks: Video[][] = [];

  if (isMarathonPeriod) {
    // Guaranteed Weekend / Friday Night Marathon Mode:
    // Group all channel videos by creator and pack into 3-5 episode marathon blocks!
    const byCreator = new Map<string, Video[]>();
    for (const v of base) {
      const creatorKey = (v.sourceChannelTitle || 'Various').trim().toLowerCase();
      if (!byCreator.has(creatorKey)) {
        byCreator.set(creatorKey, []);
      }
      byCreator.get(creatorKey)!.push(v);
    }

    const soloHolders: Video[] = [];
    for (const [, creatorVideos] of byCreator.entries()) {
      if (creatorVideos.length === 1) {
        // Keep rare single-video creators separate so they never interrupt a multi-episode marathon
        soloHolders.push(creatorVideos[0]);
        continue;
      }

      // Rotate creator's episodes by day seed so each weekend day starts with fresh episodes
      const offset = Math.floor(prng() * creatorVideos.length);
      const rotated = [...creatorVideos.slice(offset), ...creatorVideos.slice(0, offset)];

      let idx = 0;
      while (idx < rotated.length) {
        const remaining = rotated.length - idx;
        let blockSize = 3;
        if (remaining === 5) blockSize = 5;
        else if (remaining === 4) blockSize = 4;
        else if (remaining >= 6) blockSize = 3 + Math.floor(prng() * 3); // 3, 4, or 5
        else blockSize = remaining; // 2 (or trailing 1 attached cleanly below)

        if (blockSize === 1 && blocks.length > 0) {
          // Attach trailing single episode to the creator's previous block if < 6
          const prevBlock = blocks[blocks.length - 1];
          if (
            prevBlock[0].sourceChannelTitle?.trim().toLowerCase() ===
              rotated[idx].sourceChannelTitle?.trim().toLowerCase() &&
            prevBlock.length < 6
          ) {
            prevBlock.push(rotated[idx]);
          } else {
            blocks.push([rotated[idx]]);
          }
        } else {
          blocks.push(rotated.slice(idx, idx + blockSize));
        }
        idx += blockSize;
      }
    }

    if (soloHolders.length > 0) {
      blocks.push(soloHolders);
    }
  } else {
    // Mon-Fri Daytime: preserve existing consecutive creator marathon blocks
    let currentBlock: Video[] = [base[0]];

    for (let i = 1; i < base.length; i++) {
      const prev = base[i - 1];
      const curr = base[i];
      const prevCreator = (prev.sourceChannelTitle || '').trim().toLowerCase();
      const currCreator = (curr.sourceChannelTitle || '').trim().toLowerCase();

      if (prevCreator && currCreator && prevCreator === currCreator && currentBlock.length < 5) {
        currentBlock.push(curr);
      } else {
        blocks.push(currentBlock);
        currentBlock = [curr];
      }
    }
    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }
  }

  // Deterministic Fisher-Yates shuffle of blocks seeded by day-of-week
  const shuffledBlocks = [...blocks];
  for (let i = shuffledBlocks.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    const temp = shuffledBlocks[i];
    shuffledBlocks[i] = shuffledBlocks[j];
    shuffledBlocks[j] = temp;
  }

  const result = shuffledBlocks.flat();
  if (DAILY_LINEUP_CACHE.size > 80) DAILY_LINEUP_CACHE.clear();
  DAILY_LINEUP_CACHE.set(cacheKey, result);
  return result;
}

export interface ScheduledProgram {
  videoIndex: number;
  video: Video;
  durationSec: number;
  startTimeMs: number;
  endTimeMs: number;
  startsInSec: number;
  isLive: boolean;
  progressPercent: number;
}

/**
 * Computes the real-time live television broadcast state for a channel's lineup
 * based on wall-clock time (Linear Broadcast Clock).
 *
 * Uses computeChannelTransitions() to bake HOT_SWITCH (0s), SHORT_BUMPER, and BLOCK_IDENT
 * transitions directly into each slot's cycle time so every device stays locked in sync.
 */
export function getLiveBroadcastState(
  videos: Video[],
  categoryId: string,
  nowTimeInput?: number,
  completedIds?: Set<string>
): BroadcastState {
  // Single clock read: caller provides nowTimeInput or we sample getSyncedNowMs() exactly once
  const nowMs =
    typeof nowTimeInput === 'number'
      ? nowTimeInput > 1e11
        ? nowTimeInput
        : nowTimeInput * 1000
      : getSyncedNowMs();

  const activeVideos = getDailyChannelLineup(videos, categoryId, nowMs);

  if (!activeVideos || activeVideos.length === 0) {
    return {
      videoIndex: 0,
      seekSeconds: 0,
      seekSecondsFloat: 0,
      durationSec: 600,
      remainingSec: 600,
      currentVideo: null,
      isBumperBreak: false,
    };
  }

  const nowSecFloat = nowMs / 1000;
  const transitions = computeChannelTransitions(activeVideos, categoryId);

  // Build slot configurations using pure precomputed transition breaks
  const slotConfigs: {
    vidDur: number;
    breakInfo: { plans: BreakPlan[]; totalBreakSec: number };
    slotDur: number;
  }[] = [];

  for (let i = 0; i < activeVideos.length; i++) {
    const v = activeVideos[i];
    const vidDur = getVideoDuration(v);
    const t = transitions[i] || { tier: 'short_bumper', plans: [], totalBreakSec: 0 };
    const breakInfo = { plans: t.plans, totalBreakSec: t.totalBreakSec };
    const slotDur = vidDur + breakInfo.totalBreakSec;
    slotConfigs.push({ vidDur, breakInfo, slotDur });
  }

  const totalCycleSec = slotConfigs.reduce((acc, s) => acc + s.slotDur, 0);

  if (totalCycleSec <= 0) {
    return {
      videoIndex: 0,
      seekSeconds: 0,
      seekSecondsFloat: 0,
      durationSec: 600,
      remainingSec: 600,
      currentVideo: activeVideos[0],
      isBumperBreak: false,
    };
  }

  const channelOffset = getChannelTimeOffset(categoryId, nowMs);
  const secondsInBroadcastDay = ((nowSecFloat % 86400) + 86400) % 86400;
  const cycleTime = (secondsInBroadcastDay + channelOffset) % totalCycleSec;

  let accumulated = 0;
  for (let i = 0; i < activeVideos.length; i++) {
    const { vidDur, breakInfo, slotDur } = slotConfigs[i];
    if (cycleTime < accumulated + slotDur) {
      const offsetInSlotFloat = cycleTime - accumulated;
      const offsetInSlot = Math.floor(offsetInSlotFloat);
      const targetVid = activeVideos[i];

      // Case A: Show is airing
      if (offsetInSlotFloat < vidDur) {
        // If this slot is unplayable / completed, march remaining offset sequentially across playable slots
        if ((completedIds && completedIds.has(targetVid.youtubeVideoId)) || vidDur <= 60) {
          let rem = offsetInSlotFloat;
          let totalPlayableDur = 0;
          for (let j = 1; j < activeVideos.length; j++) {
            const nextIdx = (i + j) % activeVideos.length;
            const nextVid = activeVideos[nextIdx];
            const nextDur = slotConfigs[nextIdx].vidDur;
            if (!completedIds?.has(nextVid.youtubeVideoId) && nextDur > 60) {
              totalPlayableDur += nextDur;
              if (rem < nextDur) {
                const deterministicSeekFloat = rem;
                const deterministicSeek = Math.floor(deterministicSeekFloat);
                return {
                  videoIndex: nextIdx,
                  seekSeconds: deterministicSeek,
                  seekSecondsFloat: deterministicSeekFloat,
                  durationSec: nextDur,
                  remainingSec: Math.max(1, nextDur - deterministicSeek),
                  currentVideo: nextVid,
                  isBumperBreak: false,
                };
              }
              rem -= nextDur;
            }
          }
          if (totalPlayableDur > 0) {
            rem = rem % totalPlayableDur;
            for (let j = 1; j < activeVideos.length; j++) {
              const nextIdx = (i + j) % activeVideos.length;
              const nextVid = activeVideos[nextIdx];
              const nextDur = slotConfigs[nextIdx].vidDur;
              if (!completedIds?.has(nextVid.youtubeVideoId) && nextDur > 60) {
                if (rem < nextDur) {
                  const deterministicSeekFloat = rem;
                  const deterministicSeek = Math.floor(deterministicSeekFloat);
                  return {
                    videoIndex: nextIdx,
                    seekSeconds: deterministicSeek,
                    seekSecondsFloat: deterministicSeekFloat,
                    durationSec: nextDur,
                    remainingSec: Math.max(1, nextDur - deterministicSeek),
                    currentVideo: nextVid,
                    isBumperBreak: false,
                  };
                }
                rem -= nextDur;
              }
            }
          }
        }

        return {
          videoIndex: i,
          seekSeconds: Math.max(0, offsetInSlot),
          seekSecondsFloat: Math.max(0, offsetInSlotFloat),
          durationSec: vidDur,
          remainingSec: Math.max(0, vidDur - offsetInSlot),
          currentVideo: targetVid,
          isBumperBreak: false,
        };
      }

      // Case B: Station break is airing!
      const breakElapsedMs = (offsetInSlotFloat - vidDur) * 1000;
      const plans = breakInfo.plans;
      const totalBreakMs = breakInfo.totalBreakSec * 1000;

      if (!plans || plans.length === 0) {
        return {
          videoIndex: i,
          seekSeconds: vidDur,
          seekSecondsFloat: vidDur,
          durationSec: vidDur,
          remainingSec: 0,
          currentVideo: targetVid,
          isBumperBreak: false,
        };
      }

      let bumperAccumMs = 0;
      let activePlanIndex = plans.length - 1;
      let activeElapsedMs = 0;
      let activeRemainingMs = 250;

      for (let pIdx = 0; pIdx < plans.length; pIdx++) {
        const planDur = plans[pIdx].durationMs;
        if (breakElapsedMs < bumperAccumMs + planDur) {
          activePlanIndex = pIdx;
          activeElapsedMs = breakElapsedMs - bumperAccumMs;
          activeRemainingMs = Math.max(250, planDur - activeElapsedMs);
          break;
        }
        bumperAccumMs += planDur;
      }

      // Dead-air clamp guard: if breakElapsedMs >= totalBreakMs, clamp to last bumper
      if (breakElapsedMs >= totalBreakMs) {
        activePlanIndex = plans.length - 1;
        const lastPlan = plans[activePlanIndex];
        activeElapsedMs = Math.min(lastPlan.durationMs - 250, breakElapsedMs);
        activeRemainingMs = Math.max(250, totalBreakMs - breakElapsedMs);
      }

      const activeBreakPlans = plans.slice(activePlanIndex);

      return {
        videoIndex: i,
        seekSeconds: vidDur,
        seekSecondsFloat: vidDur,
        durationSec: vidDur,
        remainingSec: 0,
        currentVideo: targetVid,
        isBumperBreak: true,
        activeBreakPlans,
        activeBumperElapsedMs: activeElapsedMs,
        activeBumperRemainingMs: activeRemainingMs,
      };
    }
    accumulated += slotDur;
  }

  return {
    videoIndex: 0,
    seekSeconds: 0,
    seekSecondsFloat: 0,
    durationSec: slotConfigs[0]?.vidDur || 600,
    remainingSec: slotConfigs[0]?.vidDur || 600,
    currentVideo: activeVideos[0] || null,
    isBumperBreak: false,
  };
}

/**
 * Advances a channel's playback forward by elapsed time when a user returns to a channel.
 * Guarantees that time NEVER moves backwards and completed shows are never replayed.
 */
export function advanceChannelPlayback(
  videos: Video[],
  startIdx: number,
  startSeek: number,
  elapsedSec: number,
  completedIds: Set<string>
): { videoIndex: number; seekSeconds: number } {
  if (!videos || videos.length === 0) return { videoIndex: 0, seekSeconds: 0 };

  let idx = startIdx % videos.length;
  let seek = startSeek + Math.max(0, elapsedSec);

  let steps = 0;
  while (steps < videos.length) {
    const vid = videos[idx];
    const dur = getVideoDuration(vid);

    // If already marked as completed or detected as a short, skip forward immediately
    if (completedIds.has(vid.youtubeVideoId) || dur <= 60) {
      seek = 0;
      idx = (idx + 1) % videos.length;
      steps++;
      continue;
    }

    if (seek < dur) {
      return { videoIndex: idx, seekSeconds: Math.floor(seek) };
    }

    // Video runtime finished while away
    seek -= dur;
    completedIds.add(vid.youtubeVideoId);
    idx = (idx + 1) % videos.length;
    steps++;
  }

  return { videoIndex: idx, seekSeconds: 0 };
}

/**
 * Builds a linear TV schedule starting from a channel's current broadcast state,
 * calculating exact wall-clock start/end times for the current show and upcoming programs,
 * precisely accounting for deterministic station break packages between shows.
 */
export function buildChannelSchedule(
  videos: Video[],
  activeVideoIndex: number,
  activeSeekSeconds: number,
  count: number = 12,
  nowMs: number = getSyncedNowMs(),
  categoryId: string = 'general'
): ScheduledProgram[] {
  const activeVideos = getDailyChannelLineup(videos, categoryId, nowMs);
  if (!activeVideos || activeVideos.length === 0) return [];

  const transitions = computeChannelTransitions(activeVideos, categoryId);
  const schedule: ScheduledProgram[] = [];
  const safeStartIdx = ((activeVideoIndex % activeVideos.length) + activeVideos.length) % activeVideos.length;
  const activeVideo = activeVideos[safeStartIdx];
  const activeDur = getVideoDuration(activeVideo);
  const activeBreakSec = transitions[safeStartIdx]?.totalBreakSec ?? 0;
  const clampedSeek = Math.min(Math.max(0, activeSeekSeconds), Math.max(0, activeDur - 1));
  const remainingActiveSec = Math.max(1, activeDur - clampedSeek);

  // Current live show
  const currentStartMs = nowMs - clampedSeek * 1000;
  const currentEndMs = nowMs + remainingActiveSec * 1000;

  schedule.push({
    videoIndex: safeStartIdx,
    video: activeVideo,
    durationSec: activeDur,
    startTimeMs: currentStartMs,
    endTimeMs: currentEndMs,
    startsInSec: 0,
    isLive: true,
    progressPercent: activeDur > 0 ? Math.min(100, (clampedSeek / activeDur) * 100) : 0,
  });

  // Next show starts AFTER the active show ends PLUS its break duration!
  let cursorMs = currentEndMs + activeBreakSec * 1000;
  let accumulatedWaitSec = remainingActiveSec + activeBreakSec;

  const limit = Math.min(count, activeVideos.length);
  for (let offset = 1; offset < limit; offset++) {
    const idx = (safeStartIdx + offset) % activeVideos.length;
    const vid = activeVideos[idx];
    const dur = getVideoDuration(vid);
    const breakSec = transitions[idx]?.totalBreakSec ?? 0;
    const startMs = cursorMs;
    const endMs = startMs + dur * 1000;

    schedule.push({
      videoIndex: idx,
      video: vid,
      durationSec: dur,
      startTimeMs: startMs,
      endTimeMs: endMs,
      startsInSec: accumulatedWaitSec,
      isLive: false,
      progressPercent: 0,
    });

    cursorMs = endMs + breakSec * 1000;
    accumulatedWaitSec += dur + breakSec;
  }

  return schedule;
}
