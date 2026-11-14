'use client';

import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { ChannelLineup, Video } from '../lib/types';
import { YouTubePlayer, YouTubePlayerHandle, CaptionFontSize, CaptionTrack } from './YouTubePlayer';
import { recordVideoDuration, getVideoDuration, buildChannelSchedule, getLiveBroadcastState, getSyncedNowSec, getSyncedNowMs, getDailyChannelLineup, getMarathonScheduleLabel } from '../lib/broadcast-clock';
import { isMobileTouchDevice, isLandscapeViewport, isDeviceFullscreen, enterAppFullscreen, exitAppFullscreen } from '../lib/device';
import { pickNextBreak, pickBreakPackage, computeChannelTransitions, BreakPlan } from '../lib/bumpers';
import { playChannelJingle, unlockBumperAudio, playRemoteKeyBeep, playErrorBuzz } from '../lib/bumper-synth';
import { BumperStage } from './BumperStage';
import { ChannelDialOverlay } from './ChannelDialOverlay';
import {
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
  Tv,
  Settings,
  Power,
  Loader2,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  RotateCcw,
  Timer,
  Share2,
  Check,
  Clock,
  Captions,
  CaptionsOff,
  Hash,
} from 'lucide-react';

const CAPTION_PREFS_KEY = 'tuned_caption_prefs_v1';
const CAPTION_SIZES: { value: CaptionFontSize; label: string; title: string }[] = [
  { value: -1, label: 'S', title: 'Small (75%)' },
  { value: 0, label: 'M', title: 'Medium (100%)' },
  { value: 1, label: 'L', title: 'Large (150%)' },
  { value: 2, label: 'XL', title: 'Extra Large (200%)' },
  { value: 3, label: 'XXL', title: 'Huge (300%)' },
];

export type SleepTimerMode = 'off' | '15m' | '30m' | '60m' | 'end';

interface WatchScreenProps {
  channels: ChannelLineup[];
  currentChannelIndex: number;
  previousChannelIndex: number | null;
  currentVideoIndex: number;
  startSeconds?: number;
  tuneKey?: number;
  isPlaying: boolean;
  isHidden?: boolean;
  keepVideoVisible?: boolean;
  sleepTimerMode: SleepTimerMode;
  sleepRemainingSec: number | null;
  behindLiveSeconds?: number;
  onCycleSleepTimer: () => void;
  onSelectChannel: (channelIndex: number) => void;
  onRecallLastChannel: () => void;
  onTogglePlay: () => void;
  onNextVideo: (isErrorSkip?: boolean) => void;
  onJumpToLive?: () => void;
  onSyncToLive?: () => void;
  onShortDetected?: (videoId: string) => void;
  onProgressUpdate?: (currentTime: number, duration: number) => void;
  onOpenGuide: () => void;
  onOpenManage: () => void;
  onPowerOff: () => void;
}

export const WatchScreen: React.FC<WatchScreenProps> = ({
  channels,
  currentChannelIndex,
  previousChannelIndex,
  currentVideoIndex,
  startSeconds = 0,
  tuneKey = 0,
  isPlaying,
  isHidden = false,
  keepVideoVisible = false,
  sleepTimerMode,
  sleepRemainingSec,
  behindLiveSeconds = 0,
  onCycleSleepTimer,
  onSelectChannel,
  onRecallLastChannel,
  onTogglePlay,
  onNextVideo,
  onJumpToLive,
  onSyncToLive,
  onShortDetected,
  onProgressUpdate,
  onOpenGuide,
  onOpenManage,
  onPowerOff,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(startSeconds || 0);
  const [duration, setDuration] = useState<number>(0);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isChannelPulsing, setIsChannelPulsing] = useState<boolean>(false);
  const [isBadgeFlipping, setIsBadgeFlipping] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(false);
  const lastOrientationRef = useRef<'portrait' | 'landscape' | null>(null);
  const pendingFullscreenRef = useRef<boolean>(false);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [activeMotionBreak, setActiveMotionBreak] = useState<BreakPlan | null>(null);
  const [activeBumperInitialElapsedMs, setActiveBumperInitialElapsedMs] = useState<number>(0);
  const [standbyTarget, setStandbyTarget] = useState<{
    videoId: string;
    allowShortClip: boolean;
    startSeconds: number;
  } | null>(null);
  const [promotedTarget, setPromotedTarget] = useState<{ videoId: string } | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [isDockMinimized, setIsDockMinimized] = useState<boolean>(true);
  const [dockAnim, setDockAnim] = useState<'minimizing' | 'maximizing' | null>(null);
  const isBumperActive = Boolean(activeMotionBreak);
  const shareTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const stallStartedAtRef = useRef<number | null>(null);
  const onSyncToLiveRef = useRef(onSyncToLive);
  onSyncToLiveRef.current = onSyncToLive;

  // True Live TV: track offline status & long buffering stalls so regaining signal snaps forward to live time
  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      if (isPlaying && stallStartedAtRef.current === null) {
        stallStartedAtRef.current = Date.now();
      }
    };
    const handleOnline = () => {
      setIsOnline(true);
      if (isPlaying && behindLiveSeconds === 0) {
        stallStartedAtRef.current = null;
        onSyncToLiveRef.current?.();
      }
    };
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [isPlaying, behindLiveSeconds]);

  useEffect(() => {
    if (!isPlaying || behindLiveSeconds > 0) {
      stallStartedAtRef.current = null;
      return;
    }
    if (isBuffering) {
      if (stallStartedAtRef.current === null) {
        stallStartedAtRef.current = Date.now();
      }
    } else if (stallStartedAtRef.current !== null && isOnline) {
      const stalledMs = Date.now() - stallStartedAtRef.current;
      stallStartedAtRef.current = null;
      if (stalledMs >= 8000) {
        onSyncToLiveRef.current?.();
      }
    }
  }, [isBuffering, isPlaying, isOnline, behindLiveSeconds]);

  // Caption settings (persisted across channels & refreshes)
  const [captionsEnabled, setCaptionsEnabled] = useState<boolean>(false);
  const [captionFontSize, setCaptionFontSize] = useState<CaptionFontSize>(0);
  const [captionLanguage, setCaptionLanguage] = useState<string>('auto');
  const [captionTracks, setCaptionTracks] = useState<CaptionTrack[]>([]);
  const [captionsMenuOpen, setCaptionsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CAPTION_PREFS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.enabled === 'boolean') setCaptionsEnabled(parsed.enabled);
        if ([-1, 0, 1, 2, 3].includes(parsed.fontSize)) setCaptionFontSize(parsed.fontSize);
        if (typeof parsed.language === 'string') setCaptionLanguage(parsed.language);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        CAPTION_PREFS_KEY,
        JSON.stringify({ enabled: captionsEnabled, fontSize: captionFontSize, language: captionLanguage })
      );
    } catch {}
  }, [captionsEnabled, captionFontSize, captionLanguage]);

  const tvStageRef = useRef<HTMLDivElement>(null);
  const bumperTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const breakQueueRef = useRef<BreakPlan[]>([]);
  const isPreviewActiveRef = useRef<boolean>(false);
  const activeBreakPlanRef = useRef<BreakPlan | null>(null);
  const bumperStartTimeRef = useRef<number>(0);
  const deckEpochsRef = useRef<[number, number]>([0, 0]);
  const deckPlayerRef0 = useRef<YouTubePlayerHandle | null>(null);
  const deckPlayerRef1 = useRef<YouTubePlayerHandle | null>(null);
  const deckPlayerRefs = useRef([deckPlayerRef0, deckPlayerRef1]).current;
  const initialBufferSyncedRef = useRef<string | null>(null);
  const lastSyncSeekTimeRef = useRef<number>(0);
  const promotedPrebufferedIdRef = useRef<string | null>(null);
  const pendingBreakPlansRef = useRef<BreakPlan[] | null>(null);
  const failedBumperIdsRef = useRef<Set<string>>(new Set());
  const breakCounterRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const onNextVideoRef = useRef(onNextVideo);
  onNextVideoRef.current = onNextVideo;
  const advanceBreakQueueRef = useRef<() => void>(() => {});
  const startupSyncDoneRef = useRef<string | null>(null);
  const startupSeekAttemptsRef = useRef<number>(0);

  // Persist ongoing bumper breaks per channel across channel surfing (True Live TV Continuity)
  interface ChannelBreakSession {
    plans: BreakPlan[];
    breakStartedAtMs: number;
    isPreview: boolean;
  }
  const channelBreaksRef = useRef<Map<string, ChannelBreakSession>>(new Map());

  // Direct TV channel number dialing overlay & timer
  const [dialBuffer, setDialBuffer] = useState<string>('');
  const [dialStatus, setDialStatus] = useState<'dialing' | 'tuning' | 'invalid'>('dialing');
  const [dialTimeoutMs, setDialTimeoutMs] = useState<number>(1800);
  const [dialTimerKey, setDialTimerKey] = useState<number>(0);
  const [showDialNumpad, setShowDialNumpad] = useState<boolean>(false);
  const dialTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialBufferRef = useRef<string>('');
  dialBufferRef.current = dialBuffer;
  const dialStatusRef = useRef<'dialing' | 'tuning' | 'invalid'>('dialing');
  dialStatusRef.current = dialStatus;

  const maxDialDigits = useMemo(() => Math.max(2, String(channels.length).length), [channels.length]);

  const previewChannel = useMemo(() => {
    if (!dialBuffer) return null;
    const num = parseInt(dialBuffer, 10);
    if (isNaN(num) || num < 1 || num > channels.length) return null;
    return channels[num - 1] || null;
  }, [dialBuffer, channels]);

  const activeChannel = channels[currentChannelIndex] || channels[0];
  const videos = activeChannel?.videos || [];

  // Periodic bucket so midnight day-rollover or Friday 18:00 / Mon 06:00 marathon window flips cleanly
  const [scheduleBucket, setScheduleBucket] = useState<string>(() => {
    const now = getSyncedNowMs();
    const d = new Date(now);
    return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}-${getMarathonScheduleLabel(now) || 'std'}`;
  });
  useEffect(() => {
    const id = setInterval(() => {
      const now = getSyncedNowMs();
      const d = new Date(now);
      const next = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}-${getMarathonScheduleLabel(now) || 'std'}`;
      setScheduleBucket((prev) => (prev === next ? prev : next));
    }, 60000);
    return () => clearInterval(id);
  }, []);

  // Daily shuffled channel lineup with day-of-week seed and creator marathon preservation
  const eligibleVideos = useMemo(
    () => getDailyChannelLineup(videos, activeChannel?.categoryId || 'general', getSyncedNowMs()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [videos, activeChannel?.categoryId, scheduleBucket]
  );
  const activeVideo: Video | undefined = eligibleVideos[currentVideoIndex] || eligibleVideos[0] || videos[0];
  const nextVideo: Video | undefined =
    eligibleVideos.length > 0 ? eligibleVideos[(currentVideoIndex + 1) % eligibleVideos.length] : undefined;
  const laterVideo: Video | undefined =
    eligibleVideos.length > 1 ? eligibleVideos[(currentVideoIndex + 2) % eligibleVideos.length] : undefined;
  const thirdVideo: Video | undefined =
    eligibleVideos.length > 2 ? eligibleVideos[(currentVideoIndex + 3) % eligibleVideos.length] : undefined;

  // Stale closure guards for tuning and synchronizing
  const behindLiveSecondsRef = useRef(behindLiveSeconds);
  behindLiveSecondsRef.current = behindLiveSeconds;
  const eligibleVideosRef = useRef(eligibleVideos);
  eligibleVideosRef.current = eligibleVideos;
  const activeChannelRef = useRef(activeChannel);
  activeChannelRef.current = activeChannel;
  const isMutedRef = useRef(isMuted);
  isMutedRef.current = isMuted;
  const nextVideoRef = useRef(nextVideo);
  nextVideoRef.current = nextVideo;
  const activeSlotRef = useRef(activeSlot);
  activeSlotRef.current = activeSlot;
  const activeVideoRef = useRef(activeVideo);
  activeVideoRef.current = activeVideo;
  const startSecondsRef = useRef(startSeconds);
  startSecondsRef.current = startSeconds;

  // Reset local time display and check if the tuned channel is in the middle of a continuous station break
  useEffect(() => {
    startupSyncDoneRef.current = null;
    startupSeekAttemptsRef.current = 0;
    initialBufferSyncedRef.current = null;
    lastSyncSeekTimeRef.current = 0;
    const curActiveVideo = activeVideoRef.current;
    const promotedId = promotedPrebufferedIdRef.current;
    if (promotedId && curActiveVideo?.youtubeVideoId === promotedId) {
      promotedPrebufferedIdRef.current = null;
      setPromotedTarget(null);
      setCurrentTime(0);
      setDuration(curActiveVideo ? getVideoDuration(curActiveVideo) : 0);
      return;
    }

    promotedPrebufferedIdRef.current = null;
    setPromotedTarget(null);
    setCurrentTime(startSeconds || 0);
    setDuration(curActiveVideo ? getVideoDuration(curActiveVideo) : 0);

    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }

    const curBehindLive = behindLiveSecondsRef.current;
    const curEligible = eligibleVideosRef.current;
    const curChannel = activeChannelRef.current;
    const curSlot = activeSlotRef.current;
    const curNextVideo = nextVideoRef.current;

    // Check if this channel is currently airing a global synchronized station break!
    if (curBehindLive === 0 && curEligible.length > 0) {
      const nowMs = getSyncedNowMs();
      const live = getLiveBroadcastState(
        curEligible,
        curChannel?.categoryId || 'tech',
        nowMs
      );

      if (live.isBumperBreak && live.activeBreakPlans && live.activeBreakPlans.length > 0) {
        const firstBumper = live.activeBreakPlans[0];
        const remainingQueue = live.activeBreakPlans.slice(1);
        const elapsed = live.activeBumperElapsedMs || 0;
        const remaining = live.activeBumperRemainingMs || 5000;

        isPreviewActiveRef.current = false;
        activeBreakPlanRef.current = firstBumper;
        breakQueueRef.current = remainingQueue;
        setActiveBumperInitialElapsedMs(elapsed);
        setActiveMotionBreak(firstBumper);
        bumperStartTimeRef.current = Date.now() - elapsed;

        if (firstBumper.kind === 'motion') {
          playChannelJingle(curChannel?.categoryId || 'tech', {
            muted: isMutedRef.current,
            volume: 0.2,
          });
          bumperTimeoutRef.current = setTimeout(() => {
            advanceBreakQueueRef.current();
          }, Math.max(1000, remaining));
        } else {
          const clipDur = firstBumper.clip.durationSec || 30;
          bumperTimeoutRef.current = setTimeout(() => {
            advanceBreakQueueRef.current();
          }, Math.max(120000, (remaining || clipDur * 1000) + 45000));
        }

        // Pre-buffer next video at 0:00 on standby deck
        if (curNextVideo?.youtubeVideoId) {
          setStandbyTarget({
            videoId: curNextVideo.youtubeVideoId,
            allowShortClip: false,
            startSeconds: 0,
          });
        }
        return;
      }
    }

    setActiveBumperInitialElapsedMs(0);
    breakQueueRef.current = [];
    pendingBreakPlansRef.current = null;
    isPreviewActiveRef.current = false;
    activeBreakPlanRef.current = null;
    initialBufferSyncedRef.current = null;
    lastSyncSeekTimeRef.current = 0;
    setActiveMotionBreak(null);
    setStandbyTarget(null);
    deckEpochsRef.current[curSlot] += 1;
  }, [
    currentChannelIndex,
    currentVideoIndex,
    tuneKey,
  ]);

  useEffect(() => {
    return () => {
      if (bumperTimeoutRef.current) clearTimeout(bumperTimeoutRef.current);
    };
  }, []);

  // Set CSS custom property for channel hue and trigger pulse on channel switch (PRD W-9)
  useEffect(() => {
    if (!activeChannel) return;
    document.documentElement.style.setProperty('--ch-hue', String(activeChannel.hue));

    setIsChannelPulsing(true);
    setIsBadgeFlipping(true);

    const timer = setTimeout(() => {
      setIsChannelPulsing(false);
      setIsBadgeFlipping(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [currentChannelIndex, activeChannel?.hue]);

  // Enter fullscreen helper with Screen Orientation API lock to landscape
  const enterFullscreen = useCallback(async () => {
    const success = await enterAppFullscreen(document.documentElement);
    setIsFullscreen(isDeviceFullscreen());
    pendingFullscreenRef.current = !success;
  }, []);

  // Exit fullscreen helper
  const exitFullscreen = useCallback(async () => {
    pendingFullscreenRef.current = false;
    await exitAppFullscreen();
    setIsFullscreen(false);
  }, []);

  // Fullscreen toggle handler (with iOS Safari graceful fallback)
  const toggleFullscreen = useCallback(async () => {
    if (isDeviceFullscreen()) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [enterFullscreen, exitFullscreen]);

  // Listen for fullscreen state changes
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(isDeviceFullscreen());
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
    };
  }, []);

  // When on mobile in landscape, ANY user tap/touch seamlessly upgrades to native fullscreen
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLandscapeUserGesture = () => {
      if (isHidden) return;
      if (isMobileTouchDevice() && isLandscapeViewport() && !isDeviceFullscreen()) {
        enterFullscreen();
      }
    };

    window.addEventListener('click', handleLandscapeUserGesture, { capture: true });
    window.addEventListener('touchend', handleLandscapeUserGesture, { capture: true });
    return () => {
      window.removeEventListener('click', handleLandscapeUserGesture, { capture: true });
      window.removeEventListener('touchend', handleLandscapeUserGesture, { capture: true });
    };
  }, [enterFullscreen]);

  // Auto-fullscreen on mobile landscape & auto-exit on mobile portrait
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkOrientation = () => {
      if (!isMobileTouchDevice()) {
        setIsMobilePortrait(false);
        return;
      }

      const isLandscape = isLandscapeViewport();
      setIsMobilePortrait(!isLandscape);

      const currentOrientation = isLandscape ? 'landscape' : 'portrait';

      if (lastOrientationRef.current !== currentOrientation) {
        const prev = lastOrientationRef.current;
        lastOrientationRef.current = currentOrientation;

        if (isLandscape) {
          enterFullscreen();
        } else if (prev !== null) {
          exitFullscreen();
        }
      }
    };

    checkOrientation();

    // Check with slight delays for iOS Safari delayed reflow
    const t1 = setTimeout(checkOrientation, 150);
    const t2 = setTimeout(checkOrientation, 350);

    const handleOrientation = () => {
      checkOrientation();
      setTimeout(checkOrientation, 150);
      setTimeout(checkOrientation, 350);
    };

    const mql = typeof window.matchMedia === 'function' ? window.matchMedia('(orientation: landscape)') : null;
    if (mql) {
      if (mql.addEventListener) {
        mql.addEventListener('change', handleOrientation);
      } else if ((mql as any).addListener) {
        (mql as any).addListener(handleOrientation);
      }
    }

    if (window.screen?.orientation?.addEventListener) {
      window.screen.orientation.addEventListener('change', handleOrientation);
    }

    window.addEventListener('orientationchange', handleOrientation);
    window.addEventListener('resize', handleOrientation);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (mql) {
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handleOrientation);
        } else if ((mql as any).removeListener) {
          (mql as any).removeListener(handleOrientation);
        }
      }
      if (window.screen?.orientation?.removeEventListener) {
        window.screen.orientation.removeEventListener('change', handleOrientation);
      }
      window.removeEventListener('orientationchange', handleOrientation);
      window.removeEventListener('resize', handleOrientation);
    };
  }, [enterFullscreen, exitFullscreen]);

  // Promote pre-buffered standby slot to foreground (or advance normally if none queued)
  const advanceFromBreakToNextVideo = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    const chId = activeChannel?.categoryId;
    if (chId) channelBreaksRef.current.delete(chId);
    breakQueueRef.current = [];
    pendingBreakPlansRef.current = null;
    setActiveBumperInitialElapsedMs(0);
    setActiveMotionBreak(null);

    if (nextVideo?.youtubeVideoId && standbyTarget?.videoId === nextVideo.youtubeVideoId) {
      promotedPrebufferedIdRef.current = nextVideo.youtubeVideoId;
      setPromotedTarget({ videoId: nextVideo.youtubeVideoId });
      setActiveSlot((prev) => (prev === 0 ? 1 : 0));
      setStandbyTarget(null);
    } else {
      setStandbyTarget(null);
    }

    onNextVideoRef.current(false);
  }, [activeChannel?.categoryId, nextVideo?.youtubeVideoId, standbyTarget?.videoId]);

  const handleExitPreview = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    const chId = activeChannel?.categoryId;
    if (chId) channelBreaksRef.current.delete(chId);
    isPreviewActiveRef.current = false;
    activeBreakPlanRef.current = null;
    breakQueueRef.current = [];
    setActiveMotionBreak(null);
  }, [activeChannel?.categoryId]);

  const advanceBreakQueue = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }

    const isPreview = isPreviewActiveRef.current;

    // Continuous Preview Mode:
    // If user pressed B to preview, when a bumper finishes, queue and play the NEXT bumper in rotation!
    // Never advance or interrupt the broadcast show during preview!
    if (isPreview && breakQueueRef.current.length === 0) {
      breakCounterRef.current += 1;
      const chId = activeChannel?.categoryId || 'tech';
      const isMarathon = Boolean(
        activeVideo?.sourceChannelTitle &&
        nextVideo?.sourceChannelTitle &&
        activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
      );
      const marathonCreator = isMarathon ? activeVideo?.sourceChannelTitle : undefined;
      const nextPreviewPlans = pickBreakPackage(chId, breakCounterRef.current, marathonCreator, true);
      breakQueueRef.current = [...nextPreviewPlans];
    }

    const nextPlan = breakQueueRef.current.shift();
    if (!nextPlan) {
      // Natural scheduled commercial break completed: advance to next show!
      const chId = activeChannel?.categoryId;
      if (chId) channelBreaksRef.current.delete(chId);
      isPreviewActiveRef.current = false;
      activeBreakPlanRef.current = null;
      setActiveMotionBreak(null);
      advanceFromBreakToNextVideo();
      return;
    }

    activeBreakPlanRef.current = nextPlan;
    setActiveBumperInitialElapsedMs(0);
    setActiveMotionBreak(nextPlan);
    bumperStartTimeRef.current = Date.now();

    const chId = activeChannel?.categoryId;
    if (chId) {
      channelBreaksRef.current.set(chId, {
        plans: [nextPlan, ...breakQueueRef.current],
        breakStartedAtMs: bumperStartTimeRef.current,
        isPreview,
      });
    }

    const isFirst = (nextPlan.bumperIndex ?? 1) === 1;

    if (nextPlan.kind === 'motion') {
      playChannelJingle(activeChannel?.categoryId || 'tech', {
        muted: isMuted,
        volume: isFirst ? 0.24 : 0.16,
      });

      // Procedural 3D motion bumper: strict minimum 5.0 seconds
      const motionDur = Math.max(5000, nextPlan.durationMs);
      bumperTimeoutRef.current = setTimeout(() => {
        advanceBreakQueue();
      }, motionDur);
    } else {
      // YouTube video bumper clip:
      // Broadcast clips have varying length! Let the video play for its FULL natural duration.
      // YouTubePlayer fires onEnded when the clip completes naturally.
      // We set a very generous safety watchdog (at least 3 min or clip + 45s) only as an extreme fallback in case the iframe freezes.
      const clipDurSec = nextPlan.clip.durationSec || 30;
      const safetyLimit = Math.max(180000, clipDurSec * 1000 + 45000);
      bumperTimeoutRef.current = setTimeout(() => {
        console.warn('[Tuned] Video bumper safety watchdog fired after', safetyLimit, 'ms');
        advanceBreakQueue();
      }, safetyLimit);
    }
  }, [
    activeChannel?.categoryId,
    activeVideo?.sourceChannelTitle,
    nextVideo?.sourceChannelTitle,
    isMuted,
    advanceFromBreakToNextVideo,
  ]);
  advanceBreakQueueRef.current = advanceBreakQueue;

  const handleBumperEnded = useCallback(() => {
    const active = activeBreakPlanRef.current;
    if (!active) return;

    const elapsed = Date.now() - bumperStartTimeRef.current;

    // Rule: "If a video is less than 5 seconds long then it qualifies for a second bumper to play after it"
    if (active.kind === 'youtube' && elapsed < 5000) {
      if (breakQueueRef.current.length === 0) {
        breakCounterRef.current += 1;
        const chId = activeChannel?.categoryId || 'tech';
        const isMarathon = Boolean(
          activeVideo?.sourceChannelTitle &&
          nextVideo?.sourceChannelTitle &&
          activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
        );
        const marathonCreator = isMarathon ? activeVideo?.sourceChannelTitle : undefined;
        // Schedule a follow-up 3D motion bumper to play immediately after the short video
        const followUpPlans = pickBreakPackage(
          chId,
          breakCounterRef.current,
          marathonCreator,
          isPreviewActiveRef.current
        );
        const secondBumper = followUpPlans[0];
        if (secondBumper) {
          secondBumper.bumperIndex = 2;
          secondBumper.totalBumpers = 2;
          breakQueueRef.current.push(secondBumper);
        }
      }
    }

    advanceBreakQueue();
  }, [
    activeChannel?.categoryId,
    activeVideo?.sourceChannelTitle,
    nextVideo?.sourceChannelTitle,
    advanceBreakQueue,
  ]);

  const startBreakSequence = useCallback(
    (packagePlans: BreakPlan[]) => {
      if (!packagePlans || packagePlans.length === 0) {
        advanceFromBreakToNextVideo();
        return;
      }

      const isPreview = Boolean(packagePlans[0]?.isPreview);
      isPreviewActiveRef.current = isPreview;

      const chId = activeChannel?.categoryId;
      if (chId) {
        channelBreaksRef.current.set(chId, {
          plans: [...packagePlans],
          breakStartedAtMs: Date.now(),
          isPreview,
        });
      }

      // Only pre-buffer standby slot if this is a REAL commercial break between shows
      if (!isPreview && nextVideo?.youtubeVideoId && standbyTarget?.videoId !== nextVideo.youtubeVideoId) {
        setStandbyTarget({
          videoId: nextVideo.youtubeVideoId,
          allowShortClip: false,
          startSeconds: 0,
        });
      }

      setActiveBumperInitialElapsedMs(0);
      breakQueueRef.current = [...packagePlans];
      advanceBreakQueue();
    },
    [advanceBreakQueue, nextVideo?.youtubeVideoId, standbyTarget?.videoId, advanceFromBreakToNextVideo, activeChannel?.categoryId]
  );

  // Triggered when a main show finishes naturally
  const handleActiveDeckEnded = useCallback(() => {
    if (sleepTimerMode === 'end') {
      onPowerOff();
      return;
    }

    // Auto-snap paused / time-shifted viewers back to live broadcast clock on show end
    if (behindLiveSeconds > 0) {
      onJumpToLive?.();
      return;
    }

    const chId = activeChannel?.categoryId || 'tech';
    const plans =
      pendingBreakPlansRef.current ||
      computeChannelTransitions(eligibleVideos, chId)[currentVideoIndex]?.plans ||
      [];
    pendingBreakPlansRef.current = null;

    if (plans.length === 0) {
      // HOT_SWITCH (0s break): cut directly to pre-buffered standby deck on next frame
      advanceFromBreakToNextVideo();
      return;
    }

    startBreakSequence(plans);
  }, [
    activeChannel?.categoryId,
    advanceFromBreakToNextVideo,
    behindLiveSeconds,
    currentVideoIndex,
    eligibleVideos,
    onJumpToLive,
    onPowerOff,
    sleepTimerMode,
    startBreakSequence,
  ]);

  const triggerManualBreak = useCallback(() => {
    // If preview is ALREADY playing, pressing B again immediately closes it!
    if (isPreviewActiveRef.current || activeMotionBreak?.isPreview) {
      handleExitPreview();
      return;
    }

    if (!activeChannel) return;
    breakCounterRef.current += 1;
    isPreviewActiveRef.current = true;
    setOsdOpen(false);
    const chId = activeChannel.categoryId || 'tech';
    const isMarathon = Boolean(
      activeVideo?.sourceChannelTitle &&
      nextVideo?.sourceChannelTitle &&
      activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
    );
    const marathonCreator = isMarathon ? activeVideo?.sourceChannelTitle : undefined;
    // Pass isPreview = true: strictly a preview, never advances the broadcast!
    const plans = pickBreakPackage(chId, breakCounterRef.current, marathonCreator, true);
    startBreakSequence(plans);
  }, [
    activeMotionBreak?.isPreview,
    handleExitPreview,
    activeChannel,
    activeVideo?.sourceChannelTitle,
    nextVideo?.sourceChannelTitle,
    startBreakSequence,
  ]);

  // Begin buffering upcoming break or next video ~1.5-2.2s before active video finishes
  const handleActiveDeckTimeUpdate = useCallback(
    (cur: number, dur: number) => {
      setCurrentTime(cur);
      if (dur > 0) {
        setDuration(dur);
        if (activeVideo?.youtubeVideoId) {
          recordVideoDuration(activeVideo.youtubeVideoId, dur);
        }
      }
      onProgressUpdate?.(cur, dur);

      // Multi-device broadcast synchronizer (Lockstep Linear TV):
      // When watching live TV (not paused, not in station break), keep playback locked to the global broadcast clock.
      if (
        !activeMotionBreak &&
        behindLiveSeconds === 0 &&
        eligibleVideos.length > 0 &&
        isPlaying &&
        cur > 0.8
      ) {
        const nowMs = getSyncedNowMs();
        const subSecOffset = (nowMs % 1000) / 1000;
        const live = getLiveBroadcastState(
          eligibleVideos,
          activeChannel.categoryId,
          nowMs
        );

        if (live.isBumperBreak && live.activeBreakPlans && live.activeBreakPlans.length > 0) {
          // Channel transitioned to a scheduled global station break!
          const firstBumper = live.activeBreakPlans[0];
          const remainingQueue = live.activeBreakPlans.slice(1);
          const elapsed = live.activeBumperElapsedMs || 0;
          const remaining = live.activeBumperRemainingMs || 5000;

          isPreviewActiveRef.current = false;
          activeBreakPlanRef.current = firstBumper;
          breakQueueRef.current = remainingQueue;
          setActiveBumperInitialElapsedMs(elapsed);
          setActiveMotionBreak(firstBumper);
          bumperStartTimeRef.current = Date.now() - elapsed;

          if (firstBumper.kind === 'motion') {
            playChannelJingle(activeChannel?.categoryId || 'tech', {
              muted: isMuted,
              volume: 0.2,
            });
            bumperTimeoutRef.current = setTimeout(() => {
              advanceBreakQueueRef.current();
            }, Math.max(1000, remaining));
          } else {
            const clipDur = firstBumper.clip.durationSec || 30;
            bumperTimeoutRef.current = setTimeout(() => {
              advanceBreakQueueRef.current();
            }, Math.max(120000, (remaining || clipDur * 1000) + 45000));
          }

          if (nextVideo?.youtubeVideoId) {
            setStandbyTarget({
              videoId: nextVideo.youtubeVideoId,
              allowShortClip: false,
              startSeconds: 0,
            });
          }
          return;
        }

        if (live.videoIndex !== currentVideoIndex) {
          // Program finished on the global broadcast clock — transition to next program
          onSyncToLiveRef.current?.();
        } else {
          // True floating-point live second (eliminates up to 0.99s Math.floor jitter)
          const expectedSec = live.seekSecondsFloat ?? (live.seekSeconds + subSecOffset);
          const drift = expectedSec - cur;
          const activeKey = `${activeChannel.categoryId}_${currentVideoIndex}_${activeVideo?.youtubeVideoId}`;
          const activePlayer = deckPlayerRefs[activeSlot].current;
          const now = Date.now();

          // 1. Startup Buffering Latency Alignment:
          // Devices take different amounts of time (1-5s) to buffer the video iframe stream.
          // Once the video starts playing, snap immediately to the true wall-clock second.
          if (startupSyncDoneRef.current !== activeKey) {
            if (Math.abs(drift) <= 0.30) {
              startupSyncDoneRef.current = activeKey;
            } else if (now - lastSyncSeekTimeRef.current >= 1200) {
              startupSeekAttemptsRef.current = (startupSeekAttemptsRef.current || 0) + 1;
              lastSyncSeekTimeRef.current = now;
              console.log(
                `[Tuned Sync] Aligning startup drift: ${drift.toFixed(2)}s -> seeking to ${expectedSec.toFixed(2)}s (attempt ${startupSeekAttemptsRef.current})`
              );
              activePlayer?.seekTo(expectedSec, true);
              if (startupSeekAttemptsRef.current >= 3) {
                startupSyncDoneRef.current = activeKey;
              }
              return;
            }
          } else {
            // 2. Continuous Broadcast Lock:
            // If network stalls, tab throttling, or frame drops cause the device to lag by > 0.55s,
            // imperatively snap back into lockstep without reloading the video.
            if (now - lastSyncSeekTimeRef.current > 3500) {
              if (Math.abs(drift) > 0.55) {
                console.log(
                  `[Tuned Sync] Correcting live drift: ${drift.toFixed(2)}s -> seeking to ${expectedSec.toFixed(2)}s`
                );
                lastSyncSeekTimeRef.current = now;
                activePlayer?.seekTo(expectedSec, true);
              }
            }
          }
        }
      }

      if (
        dur > 60 &&
        cur > 5 &&
        dur - cur <= 2.2 &&
        !pendingBreakPlansRef.current &&
        !activeMotionBreak
      ) {
        const chId = activeChannel?.categoryId || 'tech';
        const slotTransition = computeChannelTransitions(eligibleVideos, chId)[currentVideoIndex];
        pendingBreakPlansRef.current = slotTransition ? slotTransition.plans : [];

        if (nextVideo?.youtubeVideoId) {
          setStandbyTarget({
            videoId: nextVideo.youtubeVideoId,
            allowShortClip: false,
            startSeconds: 0,
          });
        }
      }
    },
    [
      activeChannel?.categoryId,
      activeMotionBreak,
      activeSlot,
      activeVideo?.sourceChannelTitle,
      activeVideo?.youtubeVideoId,
      advanceBreakQueue,
      behindLiveSeconds,
      currentVideoIndex,
      deckPlayerRefs,
      eligibleVideos,
      isMuted,
      isPlaying,
      nextVideo?.sourceChannelTitle,
      nextVideo?.youtubeVideoId,
      onProgressUpdate,
    ]
  );

  // Share synchronized channel link (always copy clean URL to clipboard; native share sheet only on touch devices)
  const handleShareChannel = useCallback(async () => {
    if (!activeChannel || typeof window === 'undefined') return;
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('ch', activeChannel.categoryId);
    const shareUrl = url.toString();

    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        const host = document.fullscreenElement || document.body;
        const ta = document.createElement('textarea');
        ta.value = shareUrl;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-9999px';
        ta.style.opacity = '0';
        host.appendChild(ta);
        ta.focus();
        ta.select();
        copied = document.execCommand('copy');
        host.removeChild(ta);
      } catch {
        copied = false;
      }
    }

    const isTouchDevice =
      typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice && typeof navigator.share === 'function') {
      navigator.share({ title: `Tuned · ${activeChannel.categoryName}`, url: shareUrl }).catch(() => {});
    }

    if (copied) {
      setCopiedShare(true);
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
      shareTimerRef.current = setTimeout(() => setCopiedShare(false), 2000);
    }
  }, [activeChannel]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const formatClockTime = (epochMs: number) => {
    try {
      return new Date(epochMs).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  // ---- DStv-style on-screen display (OSD) ----
  const [osdOpen, setOsdOpen] = useState<boolean>(true);
  const osdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const osdHoverRef = useRef<boolean>(false);
  const captionsMenuOpenRef = useRef<boolean>(false);
  captionsMenuOpenRef.current = captionsMenuOpen;
  const prevBumperActiveRef = useRef<boolean>(false);

  const pokeOsd = useCallback(() => {
    setOsdOpen(true);
    if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    osdTimerRef.current = setTimeout(() => {
      if (!osdHoverRef.current && !captionsMenuOpenRef.current) setOsdOpen(false);
    }, 5000);
  }, []);

  const cancelDial = useCallback(() => {
    if (dialTimerRef.current) {
      clearTimeout(dialTimerRef.current);
      dialTimerRef.current = null;
    }
    setDialBuffer('');
    setShowDialNumpad(false);
    setDialStatus('dialing');
  }, []);

  const executeDial = useCallback(
    (explicitBuffer?: string) => {
      if (dialTimerRef.current) {
        clearTimeout(dialTimerRef.current);
        dialTimerRef.current = null;
      }
      const raw = explicitBuffer !== undefined ? explicitBuffer : dialBufferRef.current;
      const chNum = parseInt(raw, 10);

      if (!isNaN(chNum) && chNum >= 1 && chNum <= channels.length) {
        setDialStatus('tuning');
        unlockBumperAudio();
        const targetIdx = chNum - 1;
        playChannelJingle(channels[targetIdx]?.categoryId || 'tech', { muted: isMutedRef.current });
        onSelectChannel(targetIdx);
        pokeOsd();

        dialTimerRef.current = setTimeout(() => {
          setDialBuffer('');
          setShowDialNumpad(false);
          setDialStatus('dialing');
          dialTimerRef.current = null;
        }, 380);
      } else {
        setDialStatus('invalid');
        playErrorBuzz();
        dialTimerRef.current = setTimeout(() => {
          setDialBuffer('');
          setShowDialNumpad(false);
          setDialStatus('dialing');
          dialTimerRef.current = null;
        }, 1200);
      }
    },
    [channels, onSelectChannel, pokeOsd]
  );

  const handleDialDigit = useCallback(
    (digit: string) => {
      unlockBumperAudio();
      playRemoteKeyBeep();

      if (dialTimerRef.current) {
        clearTimeout(dialTimerRef.current);
        dialTimerRef.current = null;
      }

      let nextBuffer = dialBufferRef.current;
      if (dialStatusRef.current !== 'dialing' || nextBuffer.length >= maxDialDigits) {
        nextBuffer = digit;
      } else {
        nextBuffer = nextBuffer + digit;
      }

      setDialBuffer(nextBuffer);

      const chNum = parseInt(nextBuffer, 10);
      const isCandidateValid = !isNaN(chNum) && chNum >= 1 && chNum <= channels.length;

      if (!isCandidateValid && chNum > channels.length) {
        setDialStatus('invalid');
        playErrorBuzz();
        setDialTimeoutMs(1200);
        setDialTimerKey((k) => k + 1);
        dialTimerRef.current = setTimeout(() => {
          setDialBuffer('');
          setShowDialNumpad(false);
          setDialStatus('dialing');
          dialTimerRef.current = null;
        }, 1200);
        return;
      }

      setDialStatus('dialing');
      const waitMs = nextBuffer.length >= maxDialDigits ? 900 : 1800;
      setDialTimeoutMs(waitMs);
      setDialTimerKey((k) => k + 1);

      dialTimerRef.current = setTimeout(() => {
        executeDial(nextBuffer);
      }, waitMs);
    },
    [channels.length, executeDial, maxDialDigits]
  );

  const handleDialBackspace = useCallback(() => {
    unlockBumperAudio();
    playRemoteKeyBeep();

    if (dialTimerRef.current) {
      clearTimeout(dialTimerRef.current);
      dialTimerRef.current = null;
    }

    const current = dialBufferRef.current;
    if (current.length <= 1) {
      if (showDialNumpad) {
        setDialBuffer('');
        setDialStatus('dialing');
      } else {
        cancelDial();
      }
      return;
    }

    const trimmed = current.slice(0, -1);
    setDialBuffer(trimmed);
    setDialStatus('dialing');
    setDialTimeoutMs(1800);
    setDialTimerKey((k) => k + 1);

    dialTimerRef.current = setTimeout(() => {
      executeDial(trimmed);
    }, 1800);
  }, [cancelDial, executeDial, showDialNumpad]);

  const openDialerWithNumpad = useCallback(() => {
    unlockBumperAudio();
    playRemoteKeyBeep();
    pokeOsd();

    if (dialBufferRef.current || showDialNumpad) {
      cancelDial();
    } else {
      setShowDialNumpad(true);
      setDialStatus('dialing');
      setDialTimeoutMs(4000);
      setDialTimerKey((k) => k + 1);
      if (dialTimerRef.current) clearTimeout(dialTimerRef.current);
      dialTimerRef.current = setTimeout(() => {
        if (!dialBufferRef.current) {
          cancelDial();
        }
      }, 4000);
    }
  }, [cancelDial, pokeOsd, showDialNumpad]);

  useEffect(() => {
    return () => {
      if (dialTimerRef.current) {
        clearTimeout(dialTimerRef.current);
      }
    };
  }, []);

  // Keyboard navigation (PRD W-10 + Direct Channel Dialing 0-9 + L/Backspace Recall + M Mute + F Fullscreen)
  useEffect(() => {
    if (isHidden) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === ' ') {
        e.preventDefault();
        onTogglePlay();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const nextIdx = (currentChannelIndex - 1 + channels.length) % channels.length;
        onSelectChannel(nextIdx);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIdx = (currentChannelIndex + 1) % channels.length;
        onSelectChannel(nextIdx);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      } else if (e.key === 'Backspace') {
        if (dialBufferRef.current) {
          e.preventDefault();
          handleDialBackspace();
        } else if (previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex) {
          e.preventDefault();
          onRecallLastChannel();
        }
      } else if (e.key === 'l' || e.key === 'L') {
        if (previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex) {
          e.preventDefault();
          onRecallLastChannel();
        }
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        triggerManualBreak();
      } else if (e.key === '#') {
        e.preventDefault();
        openDialerWithNumpad();
      } else if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        handleDialDigit(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isHidden,
    currentChannelIndex,
    previousChannelIndex,
    channels.length,
    onTogglePlay,
    onSelectChannel,
    onRecallLastChannel,
    toggleFullscreen,
    triggerManualBreak,
    handleDialDigit,
    handleDialBackspace,
    openDialerWithNumpad,
  ]);

  // Compute true linear schedule for Up Next (3 upcoming shows)
  const schedule = buildChannelSchedule(
    eligibleVideos,
    currentVideoIndex,
    currentTime,
    4,
    getSyncedNowMs(),
    activeChannel?.categoryId || 'tech'
  );

  const effectiveDuration = duration > 0 ? duration : activeVideo ? getVideoDuration(activeVideo) : 600;
  const progressPercent =
    effectiveDuration > 0 ? Math.min(100, (currentTime / effectiveDuration) * 100) : 0;

  const sleepLabel =
    sleepTimerMode === 'off'
      ? 'Sleep'
      : sleepTimerMode === 'end'
      ? 'Sleep: End'
      : sleepRemainingSec !== null
      ? `Sleep ${Math.ceil(sleepRemainingSec / 60)}m`
      : `Sleep ${sleepTimerMode}`;

  useEffect(() => {
    const isBumperNow = Boolean(activeMotionBreak);
    const wasBumper = prevBumperActiveRef.current;
    prevBumperActiveRef.current = isBumperNow;

    if (isBumperNow) {
      // Do NOT auto-show OSD when a bumper begins, but keep it accessible on demand
      if (!wasBumper) {
        setOsdOpen(false);
        if (osdTimerRef.current) {
          clearTimeout(osdTimerRef.current);
          osdTimerRef.current = null;
        }
      }
    } else {
      pokeOsd();
    }
    return () => {
      if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    };
  }, [currentChannelIndex, currentVideoIndex, tuneKey, activeMotionBreak, pokeOsd]);

  useEffect(() => {
    if (isHidden) return;
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      pokeOsd();
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setCaptionsMenuOpen(false);
        onOpenGuide();
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setCaptionsEnabled((prev) => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (dialBufferRef.current || showDialNumpad) {
          cancelDial();
          return;
        }
        if (activeMotionBreak?.isPreview || isPreviewActiveRef.current) {
          handleExitPreview();
          return;
        }
        if (captionsMenuOpenRef.current) {
          setCaptionsMenuOpen(false);
        }
      } else if (e.key === 'Enter') {
        if (dialBufferRef.current) {
          e.preventDefault();
          executeDial();
          return;
        }
        e.preventDefault();
        setCaptionsMenuOpen(false);
        setOsdOpen((o) => !o);
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        setCaptionsMenuOpen(false);
        setOsdOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isHidden, onOpenGuide, pokeOsd, cancelDial, executeDial, showDialNumpad]);

  const stepChannel = useCallback(
    (dir: 1 | -1) => {
      if (channels.length === 0) return;
      onSelectChannel((currentChannelIndex + dir + channels.length) % channels.length);
      pokeOsd();
    },
    [channels.length, currentChannelIndex, onSelectChannel, pokeOsd]
  );

  // Touch swipe gestures for mobile channel surfing (Swipe Up/Left = Next Ch, Swipe Down/Right = Prev Ch)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (pendingFullscreenRef.current && isMobileTouchDevice()) {
      const isLandscape =
        window.matchMedia('(orientation: landscape)').matches ||
        window.innerWidth > window.innerHeight;
      if (isLandscape) {
        enterFullscreen();
      }
    }
    const t = e.touches[0];
    if (!t) return;
    touchStartRef.current = { x: t.clientX, y: t.clientY, time: Date.now() };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    if (!t) return;

    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    const dt = Date.now() - start.time;

    // Swipe gesture threshold
    if (dt < 700 && (Math.abs(dy) > 48 || Math.abs(dx) > 56)) {
      if (Math.abs(dy) >= Math.abs(dx)) {
        // Swipe up -> next channel, swipe down -> prev channel
        stepChannel(dy < 0 ? 1 : -1);
      } else {
        // Swipe left -> next channel, swipe right -> prev channel
        stepChannel(dx < 0 ? 1 : -1);
      }
    }
  };

  const now = new Date();
  const hh = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateLabel = now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
  const hue = activeChannel?.hue ?? 355;
  const rows = schedule.slice(0, 4);

  // Effective fullscreen: either native browser fullscreen OR mobile in landscape orientation
  const isMobileLandscape = isMobileTouchDevice() && !isMobilePortrait;
  const isEffectiveFullscreen = isFullscreen || isMobileLandscape;

  return (
    <div
      ref={tvStageRef}
      className={`tv-stage${osdOpen && !isHidden ? ' osd-on' : ''}${isEffectiveFullscreen ? ' is-fullscreen' : ''}${activeMotionBreak?.isPreview ? ' has-bumper-preview' : ''}`}
      style={
        {
          visibility: isHidden && !keepVideoVisible ? 'hidden' : 'visible',
          pointerEvents: isHidden ? 'none' : undefined,
          ['--h' as string]: hue,
        } as React.CSSProperties
      }
      onMouseMove={isHidden ? undefined : pokeOsd}
      aria-hidden={isHidden || undefined}
    >
      {/* Video layer: ping-pong dual decks keep GPU surfaces warm & pre-buffered without gaps */}
      <div className="tv-video">
        {activeMotionBreak && (
          <BumperStage
            plan={activeMotionBreak}
            durationMs={activeMotionBreak.durationMs}
            initialElapsedMs={activeBumperInitialElapsedMs}
            categoryId={activeChannel?.categoryId || 'tech'}
            channelNumber={currentChannelIndex + 1}
            channelName={activeChannel?.categoryName || 'Tuned'}
            hue={hue}
            isMuted={isMuted}
            nextVideo={nextVideo}
            laterVideo={laterVideo}
            thirdVideo={thirdVideo}
            onExitPreview={handleExitPreview}
            onEnded={handleBumperEnded}
          />
        )}

        {activeVideo?.youtubeVideoId || promotedTarget ? (
          [0, 1].map((slotIdx) => {
            const isActiveDeck = slotIdx === activeSlot;
            const resolvedActiveId = promotedTarget?.videoId || activeVideo?.youtubeVideoId || '';
            const deckVideoId = isActiveDeck ? resolvedActiveId : standbyTarget?.videoId || '';
            const deckStart = isActiveDeck
              ? promotedTarget
                ? 0
                : startSeconds
              : standbyTarget?.startSeconds || 0;
            const deckTuneKey = deckEpochsRef.current[slotIdx];
            const isVisibleDeck = isActiveDeck && !activeMotionBreak && Boolean(deckVideoId);

            return (
              <div
                key={`deck-${slotIdx}`}
                className="tv-yt"
                style={{
                  opacity: isVisibleDeck ? 1 : 0,
                  pointerEvents: isVisibleDeck ? undefined : 'none',
                  zIndex: isVisibleDeck ? 1 : 0,
                }}
                aria-hidden={!isVisibleDeck || undefined}
              >
                <YouTubePlayer
                  ref={deckPlayerRefs[slotIdx]}
                  videoId={deckVideoId}
                  startSeconds={deckStart}
                  tuneKey={deckTuneKey}
                  allowShortClip={false}
                  prebufferOnly={!isActiveDeck || Boolean(activeMotionBreak)}
                  isPlaying={isActiveDeck && isPlaying && !activeMotionBreak}
                  isMuted={isActiveDeck ? isMuted : true}
                  captionsEnabled={isActiveDeck && !activeMotionBreak ? captionsEnabled : false}
                  disableCaptions={Boolean(activeMotionBreak)}
                  captionFontSize={captionFontSize}
                  captionLanguage={captionLanguage}
                  onCaptionTracksChange={isActiveDeck ? setCaptionTracks : undefined}
                  onEnded={() => {
                    if (isActiveDeck) {
                      handleActiveDeckEnded();
                    }
                  }}
                  onError={(errCode) => {
                    if (!isActiveDeck) return;
                    console.warn(`Video ${deckVideoId} error (${errCode}), skipping...`);
                    onNextVideoRef.current(true);
                  }}
                  onTimeUpdate={(cur, dur) => {
                    if (isActiveDeck) {
                      handleActiveDeckTimeUpdate(cur, dur);
                    }
                  }}
                  onBuffering={(buff) => {
                    if (isActiveDeck && !activeMotionBreak) {
                      setIsBuffering(buff);
                    }
                  }}
                  onShortDetected={onShortDetected}
                />
              </div>
            );
          })
        ) : (
          !isBumperActive && (
            <div className="tv-bumper">
              <p>No video available on this channel</p>
            </div>
          )
        )}
      </div>

      {/* Click/touch/swipe capture layer so the OSD can be summoned and channels swiped on mobile */}
      <div
        className="tv-capture"
        onClick={() => {
          unlockBumperAudio();
          if (dialBufferRef.current || showDialNumpad) {
            cancelDial();
            return;
          }
          if (captionsMenuOpen) {
            setCaptionsMenuOpen(false);
            pokeOsd();
            return;
          }
          if (osdOpen) setOsdOpen(false);
          else pokeOsd();
        }}
        onDoubleClick={toggleFullscreen}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-hidden
      />

      {/* Direct channel dialing HUD */}
      {(dialBuffer || showDialNumpad) && (
        <div className="tv-dial-layer" onClick={cancelDial}>
          <ChannelDialOverlay
            dialBuffer={dialBuffer}
            previewChannel={previewChannel}
            totalChannels={channels.length}
            status={dialStatus}
            timeoutMs={dialTimeoutMs}
            timerKey={dialTimerKey}
            showNumpad={showDialNumpad}
            onDigitPress={handleDialDigit}
            onEnter={() => executeDial()}
            onBackspace={handleDialBackspace}
            onClose={cancelDial}
            onToggleNumpad={() => setShowDialNumpad((p) => !p)}
          />
        </div>
      )}

      {/* Top bar */}
      <div
        className={`osd-top${!osdOpen ? ' osd-hidden' : ''}`}
        onMouseEnter={() => (osdHoverRef.current = true)}
        onMouseLeave={() => {
          osdHoverRef.current = false;
          pokeOsd();
        }}
        onTouchStart={() => pokeOsd()}
      >
        <div className="osd-top-left">
          <div className="brand-logo" style={{ color: '#fff' }}>
            <span className="brand-dot" />
            <span>tuned</span>
          </div>
          {isMobilePortrait && (
            <button
              className="osd-rotate-pill"
              onClick={enterFullscreen}
              title="Rotate device to landscape for fullscreen TV"
              aria-label="Rotate device to landscape for fullscreen TV"
            >
              <RotateCcw size={12} className="osd-rotate-spin" />
              <span>Rotate for TV</span>
            </button>
          )}
        </div>

        <div className="osd-top-right">
          {!isOnline && (
            <span className="osd-chip">
              <Loader2 size={13} className="animate-spin" /> Offline · Reconnecting…
            </span>
          )}
          {isOnline && isBuffering && (
            <span className="osd-chip">
              <Loader2 size={13} className="animate-spin" /> Buffering…
            </span>
          )}
          {!isPlaying && <span className="osd-chip">Paused</span>}
          <button
            onClick={() => {
              setCaptionsMenuOpen((prev) => !prev);
              pokeOsd();
            }}
            className={`osd-btn${captionsEnabled ? ' active' : ''}`}
            aria-label="Caption settings"
            aria-expanded={captionsMenuOpen}
            title="Captions & Subtitles (C)"
          >
            {captionsEnabled ? <Captions size={16} /> : <CaptionsOff size={16} />}
            <span>CC</span>
          </button>
          <button
            onClick={openDialerWithNumpad}
            className={`osd-btn${dialBuffer || showDialNumpad ? ' active' : ''}`}
            aria-label="Direct channel dialer"
            title="Dial Channel Number (# or 0-9)"
          >
            <Hash size={16} /> <span>Dial</span>
          </button>
          <button onClick={onOpenGuide} className="osd-btn" aria-label="Open TV Guide">
            <Tv size={16} /> <span>Guide</span>
          </button>
          <button onClick={onOpenManage} className="osd-btn" aria-label="Manage Channels">
            <Settings size={16} /> <span>Manage</span>
          </button>
          <button
            onClick={onCycleSleepTimer}
            className={`osd-btn${sleepTimerMode !== 'off' ? ' active' : ''}`}
            data-sleep-active={sleepTimerMode !== 'off' ? 'true' : undefined}
            title="Cycle Sleep Timer (Off / 15m / 30m / 60m / End of Show)"
            aria-label="Sleep Timer"
          >
            <Timer size={16} /> <span>{sleepLabel}</span>
          </button>
          <button onClick={onPowerOff} className="osd-btn icon danger" aria-label="Power off" title="Power off">
            <Power size={16} />
          </button>
        </div>

        {captionsMenuOpen && (
          <div
            className="cc-popover"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => (osdHoverRef.current = true)}
          >
            <div className="cc-row">
              <div>
                <div className="cc-title">Captions</div>
                <div className="cc-sub">{captionsEnabled ? 'Subtitles enabled' : 'Subtitles off'}</div>
              </div>
              <button
                type="button"
                className={`cc-toggle${captionsEnabled ? ' on' : ''}`}
                onClick={() => setCaptionsEnabled((prev) => !prev)}
                aria-pressed={captionsEnabled}
              >
                {captionsEnabled ? 'On' : 'Off'}
              </button>
            </div>

            <div className={`cc-section${!captionsEnabled ? ' disabled' : ''}`}>
              <div className="cc-label">Text size</div>
              <div className="cc-sizes">
                {CAPTION_SIZES.map((sz) => (
                  <button
                    key={sz.value}
                    type="button"
                    disabled={!captionsEnabled}
                    title={sz.title}
                    className={`cc-size-btn${captionFontSize === sz.value ? ' on' : ''}`}
                    onClick={() => setCaptionFontSize(sz.value)}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={`cc-section${!captionsEnabled ? ' disabled' : ''}`}>
              <div className="cc-label">Language</div>
              <div className="cc-langs">
                <button
                  type="button"
                  disabled={!captionsEnabled}
                  className={`cc-lang-btn${captionLanguage === 'auto' ? ' on' : ''}`}
                  onClick={() => setCaptionLanguage('auto')}
                >
                  Auto (EN)
                </button>
                {captionTracks.map((tr) => (
                  <button
                    key={tr.languageCode}
                    type="button"
                    disabled={!captionsEnabled}
                    className={`cc-lang-btn${captionLanguage === tr.languageCode ? ' on' : ''}`}
                    onClick={() => setCaptionLanguage(tr.languageCode)}
                  >
                    {tr.displayName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom OSD */}
      <div
        className={`osd-bottom${!osdOpen ? ' osd-hidden' : ''}`}
        onMouseEnter={() => (osdHoverRef.current = true)}
        onMouseLeave={() => {
          osdHoverRef.current = false;
          pokeOsd();
        }}
        onTouchStart={() => pokeOsd()}
      >
        <div className="osd-legend">
          <button
            onClick={onTogglePlay}
            className={!isPlaying ? 'is-on' : undefined}
          >
            {isPlaying ? 'Pause' : 'Play'} <span className="kbd-osd">SPACE</span>
          </button>
          <button
            onClick={() => setIsMuted((m) => !m)}
            className={isMuted ? 'is-on' : undefined}
          >
            {isMuted ? 'Unmute' : 'Mute'} <span className="kbd-osd">M</span>
          </button>
          <button
            onClick={() => {
              setCaptionsMenuOpen((prev) => !prev);
              pokeOsd();
            }}
            className={captionsEnabled ? 'is-on' : undefined}
          >
            {captionsEnabled ? 'Captions On' : 'Captions'} <span className="kbd-osd">C</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className={isFullscreen ? 'is-on' : undefined}
          >
            {isFullscreen ? 'Exit full' : 'Fullscreen'} <span className="kbd-osd">F</span>
          </button>
          <button
            type="button"
            onClick={() => {
              triggerManualBreak();
            }}
            className={isBumperActive ? 'is-on' : undefined}
            title="Preview Station ID & Bumper (B)"
          >
            Ident <span className="kbd-osd">B</span>
          </button>
          <button
            onClick={openDialerWithNumpad}
            className={dialBuffer || showDialNumpad ? 'is-on' : undefined}
            title="Direct Channel Tuning (0-9 or #)"
          >
            Dial <span className="kbd-osd">#</span>
          </button>
          <button onClick={onOpenGuide}>
            Guide <span className="kbd-osd">G</span>
          </button>
          {previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex && (
            <button onClick={onRecallLastChannel}>
              Last <span className="kbd-osd">L</span>
            </button>
          )}
          <button
            type="button"
            className={copiedShare ? 'is-on' : undefined}
            onClick={() => {
              handleShareChannel();
              pokeOsd();
            }}
          >
            {copiedShare ? 'Link copied' : 'Share'} <span className="kbd-osd">{copiedShare ? '✓' : 'LINK'}</span>
          </button>
        </div>

        <div
          className={`osd-panel${isDockMinimized ? ' minimized' : ''}${dockAnim ? ` anim-${dockAnim}` : ''}`}
          onAnimationEnd={(e) => {
            if (e.target === e.currentTarget) {
              setDockAnim(null);
            }
          }}
        >
          <div className="osd-head">
            <div className="osd-head-left">
              <span className="osd-time">{hh}</span>
              <span className="osd-date">{dateLabel}</span>
            </div>

            <div className="osd-channel">
              <button onClick={() => stepChannel(-1)} aria-label="Previous channel" title="Previous channel (←)">
                <ChevronUp size={18} style={{ transform: 'rotate(-90deg)' }} />
              </button>
              <span
                className={`osd-channel-name ${isBadgeFlipping ? 'flip' : ''}`}
                onClick={openDialerWithNumpad}
                title="Direct Channel Tuning (Press 0-9 or click to dial)"
                style={{ cursor: 'pointer' }}
              >
                <b>{String(currentChannelIndex + 1).padStart(2, '0')}</b>
                <span style={{ textTransform: 'capitalize' }}>{activeChannel?.categoryName || 'Channel'}</span>
                {activeVideo?.sourceChannelTitle &&
                  nextVideo?.sourceChannelTitle &&
                  activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase() && (
                    <span className="osd-marathon-pill" title={`Continuous marathon of ${activeVideo.sourceChannelTitle}`}>
                      🔥 {getMarathonScheduleLabel() || 'MARATHON'}
                    </span>
                  )}
              </span>
              <button onClick={() => stepChannel(1)} aria-label="Next channel" title="Next channel (→)">
                <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
              </button>
            </div>

            <div className="osd-head-right">
              {onJumpToLive && behindLiveSeconds > 0 ? (
                <button className="osd-live behind" onClick={onJumpToLive}>
                  Jump to live +{formatTime(behindLiveSeconds)}
                </button>
              ) : (
                <span className="osd-live">
                  <span className="dot" /> Watching live
                </span>
              )}
              <button
                type="button"
                className="osd-dock-toggle"
                onClick={() => {
                  setIsDockMinimized((prev) => {
                    const next = !prev;
                    setDockAnim(next ? 'minimizing' : 'maximizing');
                    return next;
                  });
                  pokeOsd();
                }}
                aria-label={isDockMinimized ? 'Expand dock' : 'Minimize dock'}
                title={isDockMinimized ? 'Expand dock' : 'Minimize dock'}
              >
                {isDockMinimized ? <Maximize2 size={15} /> : <Minimize2 size={15} />}
              </button>
            </div>
          </div>

          {rows.slice(0, 1).map((slot) => {
            const isMarathonActive = Boolean(
              activeVideo?.sourceChannelTitle &&
              nextVideo?.sourceChannelTitle &&
              activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
            );

            return (
              <div key={slot.video.youtubeVideoId + 'now'} className="osd-row now">
                <span className="osd-row-time">{formatClockTime(slot.startTimeMs)}</span>
                <span className="osd-row-tag">LIVE</span>
                <span className="osd-row-title">
                  {isMarathonActive && (
                    <span className="osd-marathon-pill" title={`All-${slot.video.sourceChannelTitle} marathon block`}>
                      🔥 {getMarathonScheduleLabel() || 'MARATHON'}
                    </span>
                  )}
                  {activeVideo?.title || slot.video.title}
                </span>
                <span className="osd-row-src osd-row-src-live">
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo?.youtubeVideoId || slot.video.youtubeVideoId}&t=${Math.max(0, Math.floor(currentTime))}s`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="osd-yt-btn"
                    aria-label="Watch on YouTube"
                    title="Watch on YouTube"
                  >
                    <span className="osd-yt-label">Watch on YT</span>
                    <svg className="osd-yt-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#FF0000"
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                      />
                      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <span className="osd-row-src-name">{slot.video.sourceChannelTitle}</span>
                </span>
                <span className="osd-row-dur">{formatTime(slot.durationSec)}</span>
                <span className="osd-row-progress">
                  <span style={{ width: `${progressPercent}%` }} />
                </span>
              </div>
            );
          })}

          {rows.length > 1 && (
            <div className="osd-upcoming" aria-hidden={isDockMinimized}>
              <div className="osd-upcoming-inner">
                {rows.slice(1).map((slot, i) => {
                  const isUpcomingMarathon = Boolean(
                    activeVideo?.sourceChannelTitle &&
                    slot.video?.sourceChannelTitle &&
                    activeVideo.sourceChannelTitle.toLowerCase() === slot.video.sourceChannelTitle.toLowerCase()
                  );

                  return (
                    <div key={slot.video.youtubeVideoId + (i + 1)} className="osd-row">
                      <span className="osd-row-time">{formatClockTime(slot.startTimeMs)}</span>
                      <span className={`osd-row-tag${isUpcomingMarathon && i === 0 ? ' is-marathon' : ''}`}>
                        {i === 0 ? (isUpcomingMarathon ? `🔥 ${getMarathonScheduleLabel() || 'MARATHON'}` : 'NEXT') : ''}
                      </span>
                      <span className="osd-row-title">
                        {slot.video.title}
                      </span>
                      <span className="osd-row-src">{slot.video.sourceChannelTitle}</span>
                      <span className="osd-row-dur">{formatTime(slot.durationSec)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Landscape Floating Fullscreen Pill (appears if native fullscreen was blocked without user gesture) */}
      {!isHidden && !activeMotionBreak && isMobileTouchDevice() && !isMobilePortrait && !isFullscreen && (
        <button
          type="button"
          className="tv-floating-fs-pill"
          onClick={(e) => {
            e.stopPropagation();
            enterFullscreen();
          }}
          title="Tap for Fullscreen"
          aria-label="Tap for Fullscreen"
        >
          <Maximize2 size={13} />
          <span>Fullscreen</span>
        </button>
      )}
    </div>
  );
};
