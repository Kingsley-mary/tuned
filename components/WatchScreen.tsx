'use client';

import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { ChannelLineup, Video } from '../lib/types';
import { YouTubePlayer, CaptionFontSize, CaptionTrack } from './YouTubePlayer';
import { recordVideoDuration, getVideoDuration, buildChannelSchedule } from '../lib/broadcast-clock';
import { pickNextBreak, pickBreakPackage, BreakPlan } from '../lib/bumpers';
import { playChannelJingle, unlockBumperAudio } from '../lib/bumper-synth';
import { BumperStage } from './BumperStage';
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

function isMobileTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const hasTouch = 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  if (!hasTouch) return false;
  const isCoarse = typeof window.matchMedia === 'function' ? window.matchMedia('(pointer: coarse)').matches : false;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
  const isSmallScreen = Math.min(window.screen.width, window.screen.height) <= 1024;
  return isCoarse || isMobileUA || isSmallScreen;
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
  const deckEpochsRef = useRef<[number, number]>([0, 0]);
  const promotedPrebufferedIdRef = useRef<string | null>(null);
  const pendingBreakPlansRef = useRef<BreakPlan[] | null>(null);
  const failedBumperIdsRef = useRef<Set<string>>(new Set());
  const breakCounterRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const onNextVideoRef = useRef(onNextVideo);
  onNextVideoRef.current = onNextVideo;

  const activeChannel = channels[currentChannelIndex] || channels[0];
  const videos = activeChannel?.videos || [];

  // Filter out any YouTube Shorts from queue and bumpers so all television broadcasts are full-length
  const eligibleVideos = useMemo(
    () =>
      videos.filter(
        (v) => (!v.durationSec || v.durationSec > 60) && !/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(v.title)
      ),
    [videos]
  );
  const activeVideo: Video | undefined = eligibleVideos[currentVideoIndex] || eligibleVideos[0] || videos[0];
  const nextVideo: Video | undefined =
    eligibleVideos.length > 0 ? eligibleVideos[(currentVideoIndex + 1) % eligibleVideos.length] : undefined;
  const laterVideo: Video | undefined =
    eligibleVideos.length > 1 ? eligibleVideos[(currentVideoIndex + 2) % eligibleVideos.length] : undefined;
  const thirdVideo: Video | undefined =
    eligibleVideos.length > 2 ? eligibleVideos[(currentVideoIndex + 3) % eligibleVideos.length] : undefined;

  // Reset local time display and cancel any pending break unless we just promoted a pre-buffered deck
  useEffect(() => {
    const promotedId = promotedPrebufferedIdRef.current;
    if (promotedId && activeVideo?.youtubeVideoId === promotedId) {
      promotedPrebufferedIdRef.current = null;
      setPromotedTarget(null);
      setCurrentTime(0);
      setDuration(activeVideo ? getVideoDuration(activeVideo) : 0);
      return;
    }

    promotedPrebufferedIdRef.current = null;
    setPromotedTarget(null);
    setCurrentTime(startSeconds || 0);
    setDuration(activeVideo ? getVideoDuration(activeVideo) : 0);
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    breakQueueRef.current = [];
    pendingBreakPlansRef.current = null;
    setActiveMotionBreak(null);
    setStandbyTarget(null);
    deckEpochsRef.current[activeSlot] += 1;
  }, [currentChannelIndex, currentVideoIndex, startSeconds, tuneKey]);

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
    try {
      const docAny = document as any;
      const stageAny = tvStageRef.current as any;
      const isAlreadyFs = !!(document.fullscreenElement || docAny.webkitFullscreenElement);
      if (!isAlreadyFs && stageAny) {
        if (stageAny.requestFullscreen) {
          await stageAny.requestFullscreen();
        } else if (stageAny.webkitRequestFullscreen) {
          await stageAny.webkitRequestFullscreen();
        }
      }
      setIsFullscreen(true);
      pendingFullscreenRef.current = false;
      if (typeof screen !== 'undefined' && screen.orientation && 'lock' in screen.orientation) {
        (screen.orientation as any).lock('landscape').catch(() => {});
      }
    } catch {
      // Browser blocked requestFullscreen (e.g. requires transient user gesture)
      setIsFullscreen(true);
      pendingFullscreenRef.current = true;
    }
  }, []);

  // Exit fullscreen helper
  const exitFullscreen = useCallback(async () => {
    pendingFullscreenRef.current = false;
    try {
      const docAny = document as any;
      const isAlreadyFs = !!(document.fullscreenElement || docAny.webkitFullscreenElement);
      if (isAlreadyFs) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (docAny.webkitExitFullscreen) {
          await docAny.webkitExitFullscreen();
        }
      }
      setIsFullscreen(false);
      if (typeof screen !== 'undefined' && screen.orientation && 'unlock' in screen.orientation) {
        try {
          screen.orientation.unlock();
        } catch {}
      }
    } catch {
      setIsFullscreen(false);
    }
  }, []);

  // Fullscreen toggle handler on tvStageRef (with iOS Safari graceful fallback)
  const toggleFullscreen = useCallback(async () => {
    const docAny = document as any;
    const isFs = !!(document.fullscreenElement || docAny.webkitFullscreenElement || isFullscreen);
    if (isFs) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  // Listen for fullscreen state changes
  useEffect(() => {
    const handleFsChange = () => {
      const isFs = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);
      setIsFullscreen(isFs);
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  // Auto-fullscreen on mobile landscape & auto-exit on mobile portrait
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkOrientation = () => {
      if (!isMobileTouchDevice()) {
        setIsMobilePortrait(false);
        return;
      }

      const isLandscape =
        window.matchMedia('(orientation: landscape)').matches ||
        window.innerWidth > window.innerHeight;

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

    const mql = window.matchMedia('(orientation: landscape)');
    const handleMql = () => checkOrientation();

    if (mql.addEventListener) {
      mql.addEventListener('change', handleMql);
    } else if ((mql as any).addListener) {
      (mql as any).addListener(handleMql);
    }

    if (window.screen?.orientation?.addEventListener) {
      window.screen.orientation.addEventListener('change', checkOrientation);
    }

    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handleMql);
      } else if ((mql as any).removeListener) {
        (mql as any).removeListener(handleMql);
      }
      if (window.screen?.orientation?.removeEventListener) {
        window.screen.orientation.removeEventListener('change', checkOrientation);
      }
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, [enterFullscreen, exitFullscreen]);

  // Promote pre-buffered standby slot to foreground (or advance normally if none queued)
  const advanceFromBreakToNextVideo = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    breakQueueRef.current = [];
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
  }, [nextVideo?.youtubeVideoId, standbyTarget?.videoId]);

  const handleExitPreview = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    breakQueueRef.current = [];
    setActiveMotionBreak(null);
  }, []);

  const advanceBreakQueue = useCallback(() => {
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }

    const nextPlan = breakQueueRef.current.shift();
    if (!nextPlan) {
      if (activeMotionBreak?.isPreview) {
        // Manual station ID preview finished: dismiss preview, NEVER advance video!
        setActiveMotionBreak(null);
      } else {
        // Real commercial break finished: advance to next show!
        advanceFromBreakToNextVideo();
      }
      return;
    }

    setActiveMotionBreak(nextPlan);
    const isFirst = (nextPlan.bumperIndex ?? 1) === 1;

    if (nextPlan.kind === 'motion') {
      playChannelJingle(activeChannel?.categoryId || 'tech', {
        muted: isMuted,
        volume: isFirst ? 0.24 : 0.16,
      });
    }

    bumperTimeoutRef.current = setTimeout(() => {
      advanceBreakQueue();
    }, nextPlan.durationMs);
  }, [activeMotionBreak?.isPreview, activeChannel?.categoryId, isMuted, advanceFromBreakToNextVideo]);

  const startBreakSequence = useCallback(
    (packagePlans: BreakPlan[]) => {
      if (!packagePlans || packagePlans.length === 0) {
        advanceFromBreakToNextVideo();
        return;
      }

      const isPreview = Boolean(packagePlans[0]?.isPreview);

      // Only pre-buffer standby slot if this is a REAL commercial break between shows
      if (!isPreview && nextVideo?.youtubeVideoId && standbyTarget?.videoId !== nextVideo.youtubeVideoId) {
        setStandbyTarget({
          videoId: nextVideo.youtubeVideoId,
          allowShortClip: false,
          startSeconds: 0,
        });
      }

      breakQueueRef.current = [...packagePlans];
      advanceBreakQueue();
    },
    [advanceBreakQueue, nextVideo?.youtubeVideoId, standbyTarget?.videoId, advanceFromBreakToNextVideo]
  );

  // Triggered when a main show finishes naturally
  const handleActiveDeckEnded = useCallback(() => {
    if (sleepTimerMode === 'end') {
      onPowerOff();
      return;
    }

    const chId = activeChannel?.categoryId || 'tech';
    const isMarathon = Boolean(
      activeVideo?.sourceChannelTitle &&
      nextVideo?.sourceChannelTitle &&
      activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
    );
    const marathonCreator = isMarathon ? activeVideo?.sourceChannelTitle : undefined;
    const plans =
      pendingBreakPlansRef.current ||
      (() => {
        const picked = pickBreakPackage(chId, breakCounterRef.current, marathonCreator, false);
        breakCounterRef.current += 1;
        return picked;
      })();
    pendingBreakPlansRef.current = null;
    startBreakSequence(plans);
  }, [
    activeChannel?.categoryId,
    activeVideo?.sourceChannelTitle,
    nextVideo?.sourceChannelTitle,
    onPowerOff,
    sleepTimerMode,
    startBreakSequence,
  ]);

  const triggerManualBreak = useCallback(() => {
    // If preview is ALREADY playing, pressing B again immediately closes it!
    if (activeMotionBreak?.isPreview) {
      handleExitPreview();
      return;
    }

    if (!activeChannel) return;
    breakCounterRef.current += 1;
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

      if (
        dur > 60 &&
        cur > 5 &&
        dur - cur <= 2.2 &&
        !pendingBreakPlansRef.current &&
        !activeMotionBreak
      ) {
        const chId = activeChannel?.categoryId || 'tech';
        const isMarathon = Boolean(
          activeVideo?.sourceChannelTitle &&
          nextVideo?.sourceChannelTitle &&
          activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase()
        );
        const marathonCreator = isMarathon ? activeVideo?.sourceChannelTitle : undefined;
        const plans = pickBreakPackage(chId, breakCounterRef.current, marathonCreator);
        breakCounterRef.current += 1;
        pendingBreakPlansRef.current = plans;

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
      activeVideo?.sourceChannelTitle,
      activeVideo?.youtubeVideoId,
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

  // Keyboard navigation (PRD W-10 + Number keys 1-8 + L/Backspace Recall + M Mute + F Fullscreen)
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
      } else if (e.key === 'l' || e.key === 'L' || e.key === 'Backspace') {
        if (previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex) {
          e.preventDefault();
          onRecallLastChannel();
        }
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        triggerManualBreak();
      } else if (/^[1-9]$/.test(e.key)) {
        const targetIdx = parseInt(e.key, 10) - 1;
        if (targetIdx >= 0 && targetIdx < channels.length && targetIdx !== currentChannelIndex) {
          e.preventDefault();
          onSelectChannel(targetIdx);
        }
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
  ]);

  // Compute true linear schedule for Up Next (3 upcoming shows)
  const schedule = buildChannelSchedule(videos, currentVideoIndex, currentTime, 4);

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

  // ---- DStv-style on-screen display (OSD) ----
  const [osdOpen, setOsdOpen] = useState<boolean>(true);
  const osdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const osdHoverRef = useRef<boolean>(false);
  const captionsMenuOpenRef = useRef<boolean>(false);
  captionsMenuOpenRef.current = captionsMenuOpen;

  const pokeOsd = useCallback(() => {
    // When bumper/ident is showing, do NOT automatically pop up the OSD!
    if (activeMotionBreak) {
      setOsdOpen(false);
      return;
    }
    setOsdOpen(true);
    if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    osdTimerRef.current = setTimeout(() => {
      if (!osdHoverRef.current && !captionsMenuOpenRef.current) setOsdOpen(false);
    }, 5000);
  }, [activeMotionBreak]);

  useEffect(() => {
    if (activeMotionBreak) {
      setOsdOpen(false);
      if (osdTimerRef.current) {
        clearTimeout(osdTimerRef.current);
        osdTimerRef.current = null;
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
      if (!activeMotionBreak) {
        pokeOsd();
      }
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setCaptionsMenuOpen(false);
        onOpenGuide();
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setCaptionsEnabled((prev) => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (activeMotionBreak?.isPreview) {
          handleExitPreview();
          return;
        }
        if (captionsMenuOpenRef.current) {
          setCaptionsMenuOpen(false);
        }
      } else if (e.key === 'i' || e.key === 'I' || e.key === 'Enter') {
        e.preventDefault();
        setCaptionsMenuOpen(false);
        setOsdOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isHidden, onOpenGuide, pokeOsd]);

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

  return (
    <div
      ref={tvStageRef}
      className={`tv-stage${osdOpen && !isHidden && !activeMotionBreak ? ' osd-on' : ''}${isFullscreen ? ' is-fullscreen' : ''}`}
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
            categoryId={activeChannel?.categoryId || 'tech'}
            channelNumber={currentChannelIndex + 1}
            channelName={activeChannel?.categoryName || 'Tuned'}
            hue={hue}
            isMuted={isMuted}
            nextVideo={nextVideo}
            laterVideo={laterVideo}
            thirdVideo={thirdVideo}
            onExitPreview={handleExitPreview}
            onEnded={() => {
              advanceBreakQueue();
            }}
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
                  videoId={deckVideoId}
                  startSeconds={deckStart}
                  tuneKey={deckTuneKey}
                  allowShortClip={false}
                  prebufferOnly={!isActiveDeck || Boolean(activeMotionBreak)}
                  isPlaying={isActiveDeck && isPlaying && !activeMotionBreak}
                  isMuted={isActiveDeck ? isMuted : true}
                  captionsEnabled={isActiveDeck ? captionsEnabled : false}
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

      {/* Top bar */}
      <div
        className={`osd-top${activeMotionBreak ? ' osd-hidden' : ''}`}
        style={activeMotionBreak ? { opacity: 0, pointerEvents: 'none', display: 'none' } : undefined}
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
          <button onClick={onOpenGuide} className="osd-btn" aria-label="Open TV Guide">
            <Tv size={16} /> <span>Guide</span>
          </button>
          <button onClick={onOpenManage} className="osd-btn" aria-label="Manage Channels">
            <Settings size={16} /> <span>Manage</span>
          </button>
          <button
            onClick={onCycleSleepTimer}
            className={`osd-btn${sleepTimerMode !== 'off' ? ' active' : ''}`}
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
        className={`osd-bottom${activeMotionBreak ? ' osd-hidden' : ''}`}
        style={activeMotionBreak ? { opacity: 0, pointerEvents: 'none', display: 'none' } : undefined}
        onMouseEnter={() => (osdHoverRef.current = true)}
        onMouseLeave={() => {
          osdHoverRef.current = false;
          pokeOsd();
        }}
        onTouchStart={() => pokeOsd()}
      >
        <div className="osd-legend">
          <button onClick={onTogglePlay}>
            {isPlaying ? 'Pause' : 'Play'} <span className="kbd-osd">SPACE</span>
          </button>
          <button onClick={() => setIsMuted((m) => !m)}>
            {isMuted ? 'Unmute' : 'Mute'} <span className="kbd-osd">M</span>
          </button>
          <button
            onClick={() => {
              setCaptionsMenuOpen((prev) => !prev);
              pokeOsd();
            }}
          >
            {captionsEnabled ? 'Captions On' : 'Captions'} <span className="kbd-osd">C</span>
          </button>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? 'Exit full' : 'Fullscreen'} <span className="kbd-osd">F</span>
          </button>
          <button
            type="button"
            onClick={() => {
              triggerManualBreak();
            }}
            title="Preview Station ID & Bumper (B)"
          >
            Ident <span className="kbd-osd">B</span>
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
              <span className={`osd-channel-name ${isBadgeFlipping ? 'flip' : ''}`}>
                <b>{String(currentChannelIndex + 1).padStart(2, '0')}</b>
                <span style={{ textTransform: 'capitalize' }}>{activeChannel?.categoryName || 'Channel'}</span>
                {activeVideo?.sourceChannelTitle &&
                  nextVideo?.sourceChannelTitle &&
                  activeVideo.sourceChannelTitle.toLowerCase() === nextVideo.sourceChannelTitle.toLowerCase() && (
                    <span className="osd-marathon-pill" title={`Continuous marathon of ${activeVideo.sourceChannelTitle}`}>
                      🔥 MARATHON
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
                      🔥 MARATHON
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
                        {i === 0 ? (isUpcomingMarathon ? '🔥 MARATHON' : 'NEXT') : ''}
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
    </div>
  );
};
