'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScreenMode, Category, ChannelLineup, UserState, CustomSource } from '../lib/types';
import { CATEGORIES, SEED_LINEUPS } from '../lib/seed-catalog';
import { getLiveBroadcastState, advanceChannelPlayback, calibrateServerClock, getSyncedNowSec, getSyncedNowMs, getEligibleVideos } from '../lib/broadcast-clock';
import { isMobileTouchDevice, isLandscapeViewport, isDeviceFullscreen, enterAppFullscreen, exitAppFullscreen } from '../lib/device';
import { unlockBumperAudio } from '../lib/bumper-synth';
import { PowerScreen } from '../components/PowerScreen';
import { PickInterestsScreen } from '../components/PickInterestsScreen';
import { TuningScreen } from '../components/TuningScreen';
import { WatchScreen, SleepTimerMode } from '../components/WatchScreen';
import { GuideScreen, ChannelSavedState } from '../components/GuideScreen';
import { ManageScreen } from '../components/ManageScreen';
import { OffAirScreen } from '../components/OffAirScreen';
import { RotateDeviceOverlay } from '../components/RotateDeviceOverlay';

const STORAGE_KEY = 'tuned_user_state_v1';
const PLAYBACK_STORAGE_KEY = 'tuned_playback_session_v1';
const ENTERTAINMENT_MIGRATION_KEY = 'tuned_movies_cartoons_industry_v2';
const DEFAULT_CATEGORIES = ['tech', 'movies', 'cartoons', 'industry', 'music', 'science', 'food'];
// Menu overlays that float over the blurred live video stage
const MENU_OVERLAY_MODES = new Set<ScreenMode>(['guide', 'manage']);

export default function TunedApp() {
  const [screenMode, setScreenMode] = useState<ScreenMode>('power');
  const [hasEnteredWatch, setHasEnteredWatch] = useState<boolean>(false);
  const [isReturningUser, setIsReturningUser] = useState<boolean>(false);
  const [pickedCategoryIds, setPickedCategoryIds] = useState<string[]>(DEFAULT_CATEGORIES);
  const [customSources, setCustomSources] = useState<CustomSource[]>([]);
  const [channels, setChannels] = useState<ChannelLineup[]>([]);
  const [currentChannelIndex, setCurrentChannelIndex] = useState<number>(0);
  const [previousChannelIndex, setPreviousChannelIndex] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [startSeconds, setStartSeconds] = useState<number>(0);
  const [tuneKey, setTuneKey] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [offAirReason, setOffAirReason] = useState<string>('Nothing playable on this channel right now.');

  // Sleep Timer state
  const [sleepTimerMode, setSleepTimerMode] = useState<SleepTimerMode>('off');
  const [sleepRemainingSec, setSleepRemainingSec] = useState<number | null>(null);
  const [behindLiveSeconds, setBehindLiveSeconds] = useState<number>(0);

  // Mobile Landscape & Orientation Fullscreen state
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(false);
  const lastOrientationRef = useRef<'portrait' | 'landscape' | null>(null);
  const pendingFullscreenRef = useRef<boolean>(false);

  // Early 90s CRT Power On/Off Transition state
  const [crtTransition, setCrtTransition] = useState<'on' | 'off' | null>(null);
  const crtTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDirtyRef = useRef(false);
  const hasSharedChannelRef = useRef(false);
  const [hasHydratedStorage, setHasHydratedStorage] = useState<boolean>(false);
  const pickedCategoryIdsRef = useRef<string[]>(pickedCategoryIds);
  pickedCategoryIdsRef.current = pickedCategoryIds;
  const customSourcesRef = useRef<CustomSource[]>(customSources);
  customSourcesRef.current = customSources;
  const currentChannelIndexRef = useRef<number>(currentChannelIndex);
  currentChannelIndexRef.current = currentChannelIndex;
  const channelsRef = useRef<ChannelLineup[]>(channels);
  channelsRef.current = channels;
  const currentPlaybackTimeRef = useRef<number>(0);
  const channelPlaybackStatesRef = useRef<Map<string, ChannelSavedState>>(new Map());
  const failedVideoIdsRef = useRef<Set<string>>(new Set());

  // Load user state from LocalStorage on mount (PRD Section 8 & 10)
  useEffect(() => {
    try {
      // Clear legacy per-browser playback drift so all browsers lock to the global broadcast clock
      localStorage.removeItem(PLAYBACK_STORAGE_KEY);
    } catch {}

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      let loadedCategories = Array.from(new Set(DEFAULT_CATEGORIES));

      if (saved) {
        const parsed: UserState = JSON.parse(saved);
        if (parsed.pickedCategoryIds && parsed.pickedCategoryIds.length >= 3) {
          // Always deduplicate category IDs so no channel (like Games) can ever appear twice
          let nextCats = Array.from(new Set(parsed.pickedCategoryIds));
          if (!localStorage.getItem(ENTERTAINMENT_MIGRATION_KEY)) {
            for (const newCh of ['movies', 'cartoons', 'industry']) {
              if (!nextCats.includes(newCh)) {
                nextCats.push(newCh);
              }
            }
            localStorage.setItem(ENTERTAINMENT_MIGRATION_KEY, '1');
          }
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ ...parsed, pickedCategoryIds: nextCats })
          );
          loadedCategories = nextCats;
          setPickedCategoryIds(nextCats);
          setIsReturningUser(true);
        }
        if (Array.isArray(parsed.customSources)) {
          setCustomSources(parsed.customSources);
        }
        if (typeof parsed.lastChannelIndex === 'number') {
          setCurrentChannelIndex(parsed.lastChannelIndex);
        }
      }

      // Support shared ?ch=<categoryId> URL parameter
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const sharedCh = params.get('ch');
        if (sharedCh) {
          const existingIdx = loadedCategories.indexOf(sharedCh);
          if (existingIdx !== -1) {
            hasSharedChannelRef.current = true;
            setCurrentChannelIndex(existingIdx);
          } else if (CATEGORIES.some((c) => c.id === sharedCh)) {
            hasSharedChannelRef.current = true;
            const nextCats = [sharedCh, ...loadedCategories.filter((id) => id !== sharedCh)];
            setPickedCategoryIds(nextCats);
            setCurrentChannelIndex(0);
          }
        }
      }
    } catch (e) {
      console.warn('Could not read user state from local storage:', e);
    } finally {
      setHasHydratedStorage(true);
    }
  }, []);
  // Tuned is dark-only: lock the theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Auto-fullscreen on mobile landscape & auto-exit on mobile portrait (Hardcoded Mobile Landscape)
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
          // Entering landscape on mobile: auto enter fullscreen
          enterAppFullscreen(document.documentElement).then((success) => {
            pendingFullscreenRef.current = !success;
          });
        } else if (prev !== null) {
          // Entering portrait on mobile: auto exit fullscreen
          pendingFullscreenRef.current = false;
          exitAppFullscreen();
        }
      }
    };

    // Immediate initial check
    checkOrientation();

    // Re-check after minor layout reflows (essential for iOS Safari dimension updates)
    const t1 = setTimeout(checkOrientation, 150);
    const t2 = setTimeout(checkOrientation, 350);

    const handleOrientationChange = () => {
      checkOrientation();
      setTimeout(checkOrientation, 150);
      setTimeout(checkOrientation, 350);
    };

    const mql = typeof window.matchMedia === 'function' ? window.matchMedia('(orientation: landscape)') : null;
    if (mql) {
      if (mql.addEventListener) {
        mql.addEventListener('change', handleOrientationChange);
      } else if ((mql as any).addListener) {
        (mql as any).addListener(handleOrientationChange);
      }
    }

    if (window.screen?.orientation?.addEventListener) {
      window.screen.orientation.addEventListener('change', handleOrientationChange);
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // Any user touch/click in landscape seamlessly upgrades to native fullscreen
    const handlePendingTouch = () => {
      if (isMobileTouchDevice() && isLandscapeViewport() && !isDeviceFullscreen()) {
        enterAppFullscreen(document.documentElement).then((success) => {
          if (success) pendingFullscreenRef.current = false;
        });
      }
    };

    window.addEventListener('touchend', handlePendingTouch, { capture: true });
    window.addEventListener('click', handlePendingTouch, { capture: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (mql) {
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handleOrientationChange);
        } else if ((mql as any).removeListener) {
          (mql as any).removeListener(handleOrientationChange);
        }
      }
      if (window.screen?.orientation?.removeEventListener) {
        window.screen.orientation.removeEventListener('change', handleOrientationChange);
      }
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('touchend', handlePendingTouch, { capture: true });
      window.removeEventListener('click', handlePendingTouch, { capture: true });
    };
  }, []);

  // Persist user state to LocalStorage
  const persistState = useCallback((overrides?: Partial<UserState>) => {
    try {
      const stateToSave: UserState = {
        pickedCategoryIds: pickedCategoryIdsRef.current,
        customSources: customSourcesRef.current,
        lastChannelIndex: currentChannelIndexRef.current,
        autoplay: true,
        isReturningUser: true,
        ...overrides,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
      localStorage.setItem(ENTERTAINMENT_MIGRATION_KEY, '1');
    } catch (e) {
      console.warn('Could not save user state:', e);
    }
  }, []);

  // Synchronize client wall clock with server UTC to eliminate cross-device offset
  useEffect(() => {
    let mounted = true;

    // Perform initial Cristian's algorithm calibration
    calibrateServerClock().then((offset) => {
      if (!mounted) return;
      // If server clock had significant skew, realign the initial channel's broadcast position
      if (Math.abs(offset) > 200) {
        const loadedChannels = channelsRef.current;
        const safeChIdx = currentChannelIndexRef.current < loadedChannels.length ? currentChannelIndexRef.current : 0;
        const active = loadedChannels[safeChIdx] || loadedChannels[0];
        if (active && active.videos?.length > 0) {
          const pos = resolveChannelContinuousState(active);
          setCurrentVideoIndex(pos.videoIndex);
          setStartSeconds(pos.seekSeconds);
          currentPlaybackTimeRef.current = pos.seekSeconds;
        }
      }
    });

    // Periodic calibration every 45s prevents system clock skew
    const interval = setInterval(() => {
      calibrateServerClock();
    }, 45000);

    const onFocusOrVisible = () => {
      if (document.visibilityState === 'visible') {
        calibrateServerClock();
      }
    };
    window.addEventListener('focus', onFocusOrVisible);
    document.addEventListener('visibilitychange', onFocusOrVisible);
    window.addEventListener('online', onFocusOrVisible);

    return () => {
      mounted = false;
      clearInterval(interval);
      window.removeEventListener('focus', onFocusOrVisible);
      document.removeEventListener('visibilitychange', onFocusOrVisible);
      window.removeEventListener('online', onFocusOrVisible);
    };
  }, []);

  // Resolve target channel's live broadcast state from the global deterministic wall-clock
  // Guarantees every browser, tab, and device sees the exact same video & timestamp,
  // while channels continue advancing in real time while you watch other channels!
  const resolveChannelContinuousState = useCallback(
    (target: ChannelLineup): { videoIndex: number; seekSeconds: number } => {
      if (!target || !target.videos?.length) {
        return { videoIndex: 0, seekSeconds: 0 };
      }

      const live = getLiveBroadcastState(
        target.videos,
        target.categoryId,
        getSyncedNowMs(),
        failedVideoIdsRef.current
      );
      return { videoIndex: live.videoIndex, seekSeconds: live.seekSeconds };
    },
    []
  );

  // Fetch or construct lineups for current picked categories (deduplicated)
  const loadLineups = useCallback(
    async (categoryIds: string[], knownCustomSources: CustomSource[] = customSources): Promise<ChannelLineup[]> => {
      const uniqueIds = Array.from(new Set(categoryIds));
      try {
        const res = await fetch(`/api/lineup?ids=${uniqueIds.join(',')}`);
        if (!res.ok) throw new Error('API lineup fetch failed');
        const data = await res.json();
        if (data.lineups && Array.isArray(data.lineups) && data.lineups.length > 0) {
          const seen = new Set<string>();
          return data.lineups
            .filter((lineup: ChannelLineup) => {
              if (seen.has(lineup.categoryId)) return false;
              seen.add(lineup.categoryId);
              return true;
            })
            .map((lineup: ChannelLineup) => {
              const customMeta = knownCustomSources.find((cs) => cs.channelId === lineup.categoryId);
              return {
                ...lineup,
                categoryName: customMeta?.title || lineup.categoryName,
                videos: getEligibleVideos(lineup.videos),
              };
            });
        }
      } catch (err) {
        console.warn('API error, falling back to seed catalog:', err);
      }

      // Fallback directly to seed catalog (works offline or without network)
      return uniqueIds.map((id) => {
        const meta = CATEGORIES.find((c) => c.id === id);
        const customMeta = knownCustomSources.find((cs) => cs.channelId === id);
        const seed = SEED_LINEUPS[id] || {
          categoryId: id,
          categoryName: customMeta?.title || meta?.name || id,
          hue: meta?.hue || 355,
          builtAt: Date.now(),
          videos: SEED_LINEUPS.tech.videos,
        };
        return {
          ...seed,
          videos: getEligibleVideos(seed.videos),
        };
      });
    },
    [customSources]
  );

  // Preload lineups immediately after storage hydration and sync to continuous broadcast schedule
  useEffect(() => {
    if (!hasHydratedStorage) return;
    let cancelled = false;
    loadLineups(pickedCategoryIds).then((loaded) => {
      if (cancelled) return;
      setChannels(loaded);
      const safeChIdx = currentChannelIndexRef.current < loaded.length ? currentChannelIndexRef.current : 0;
      const active = loaded[safeChIdx] || loaded[0];
      if (active && active.videos?.length > 0) {
        const pos = resolveChannelContinuousState(active);
        setCurrentVideoIndex(pos.videoIndex);
        setStartSeconds(pos.seekSeconds);
        currentPlaybackTimeRef.current = pos.seekSeconds;
      }
    });
    return () => {
      cancelled = true;
    };
  }, [hasHydratedStorage, pickedCategoryIds, loadLineups, resolveChannelContinuousState]);

  // Sleep Timer countdown effect
  useEffect(() => {
    if (sleepRemainingSec === null || sleepRemainingSec <= 0) return;

    const timer = setInterval(() => {
      setSleepRemainingSec((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          // Time's up: power off TV with CRT animation
          setSleepTimerMode('off');
          setTimeout(() => {
            handlePowerOff();
          }, 0);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sleepRemainingSec]);

  const handleCycleSleepTimer = useCallback(() => {
    const order: SleepTimerMode[] = ['off', '15m', '30m', '60m', 'end'];
    const nextMode = order[(order.indexOf(sleepTimerMode) + 1) % order.length];
    setSleepTimerMode(nextMode);
    if (nextMode === '15m') setSleepRemainingSec(15 * 60);
    else if (nextMode === '30m') setSleepRemainingSec(30 * 60);
    else if (nextMode === '60m') setSleepRemainingSec(60 * 60);
    else setSleepRemainingSec(null);
  }, [sleepTimerMode]);

  // Track seconds accumulated behind live broadcast while paused
  useEffect(() => {
    if (!hasEnteredWatch || isPlaying || screenMode === 'power') return;

    const pauseTimer = setInterval(() => {
      setBehindLiveSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(pauseTimer);
  }, [hasEnteredWatch, isPlaying, screenMode]);

  // Handlers for Power Screen
  const handleTurnOn = () => {
    unlockBumperAudio();
    if (isMobileTouchDevice()) {
      enterAppFullscreen(document.documentElement);
    }
    if (crtTimerRef.current) clearTimeout(crtTimerRef.current);
    setCrtTransition('on');
    crtTimerRef.current = setTimeout(() => {
      setCrtTransition(null);
    }, 650);

    if (isReturningUser || hasSharedChannelRef.current) {
      const safeIdx = currentChannelIndex < channels.length ? currentChannelIndex : 0;
      const active = channels[safeIdx] || channels[0];
      if (active && active.videos?.length > 0) {
        const pos = resolveChannelContinuousState(active);
        setCurrentVideoIndex(pos.videoIndex);
        setStartSeconds(pos.seekSeconds);
        currentPlaybackTimeRef.current = pos.seekSeconds;
        setTuneKey((k) => k + 1);
      }
      setBehindLiveSeconds(0);
      setHasEnteredWatch(true);
      setScreenMode('watch');
      setIsPlaying(true);
    } else {
      setScreenMode('pick');
    }
  };

  const handleChangeChannelsFromPower = () => {
    setScreenMode('manage');
  };

  // Handlers for Pick Interests Screen
  const handleToggleCategory = (id: string) => {
    const current = pickedCategoryIdsRef.current;
    const next = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    pickedCategoryIdsRef.current = next;
    setPickedCategoryIds(next);
    isDirtyRef.current = true;
  };

  const handleContinuePick = () => {
    setIsReturningUser(true);
    currentChannelIndexRef.current = 0;
    setCurrentChannelIndex(0);
    persistState({
      pickedCategoryIds: pickedCategoryIdsRef.current,
      isReturningUser: true,
      lastChannelIndex: 0,
    });
    setScreenMode('tuning');
  };

  const handleSkipPick = () => {
    pickedCategoryIdsRef.current = DEFAULT_CATEGORIES;
    currentChannelIndexRef.current = 0;
    setPickedCategoryIds(DEFAULT_CATEGORIES);
    setIsReturningUser(true);
    setCurrentChannelIndex(0);
    isDirtyRef.current = true;
    persistState({
      pickedCategoryIds: DEFAULT_CATEGORIES,
      isReturningUser: true,
      lastChannelIndex: 0,
    });
    setScreenMode('tuning');
  };

  // Handlers for Tuning Screen
  const handleTuningComplete = async () => {
    const loaded = await loadLineups(pickedCategoryIdsRef.current);
    setChannels(loaded);

    if (loaded.length === 0 || !loaded.some((c) => c.videos.length > 0)) {
      setOffAirReason('No playable content found. Please check your connection or pick other categories.');
      setScreenMode('off');
      return;
    }

    const safeIdx = currentChannelIndex < loaded.length ? currentChannelIndex : 0;
    const firstCh = loaded[safeIdx] || loaded[0];
    const pos = resolveChannelContinuousState(firstCh);
    setCurrentChannelIndex(safeIdx);
    setCurrentVideoIndex(pos.videoIndex);
    setStartSeconds(pos.seekSeconds);
    currentPlaybackTimeRef.current = pos.seekSeconds;
    setTuneKey((k) => k + 1);
    setIsPlaying(true);
    setIsReturningUser(true);
    setHasEnteredWatch(true);
    isDirtyRef.current = false;
    persistState({ isReturningUser: true, lastChannelIndex: safeIdx });
    setScreenMode('watch');
  };

  // Handlers for Watch Screen
  const handleSelectChannel = useCallback(
    (channelIndex: number) => {
      if (channelIndex < 0 || channelIndex >= channels.length) return;

      if (channelIndex !== currentChannelIndex) {
        setPreviousChannelIndex(currentChannelIndex);
      }

      setCurrentChannelIndex(channelIndex);
      const target = channels[channelIndex];
      if (target && target.videos?.length > 0) {
        const pos = resolveChannelContinuousState(target);
        setCurrentVideoIndex(pos.videoIndex);
        setStartSeconds(pos.seekSeconds);
        currentPlaybackTimeRef.current = pos.seekSeconds;
      } else {
        setCurrentVideoIndex(0);
        setStartSeconds(0);
        currentPlaybackTimeRef.current = 0;
      }

      setBehindLiveSeconds(0);
      setTuneKey((k) => k + 1);
      setIsPlaying(true);
      persistState({ lastChannelIndex: channelIndex });
    },
    [
      channels,
      currentChannelIndex,
      resolveChannelContinuousState,
      persistState,
    ]
  );

  const handleRecallLastChannel = useCallback(() => {
    if (previousChannelIndex !== null && previousChannelIndex < channels.length) {
      handleSelectChannel(previousChannelIndex);
    }
  }, [previousChannelIndex, channels.length, handleSelectChannel]);

  // Called when video ends naturally or is skipped on error
  const handleNextVideo = useCallback(
    (isErrorSkip: boolean = false) => {
      const active = channels[currentChannelIndex];
      if (!active || !active.videos?.length) return;

      const finishedVideo = active.videos[currentVideoIndex];
      // Only add genuinely unplayable/Short videos to failedVideoIdsRef so naturally ended videos
      // never cause per-browser session drift away from the global broadcast clock.
      if (isErrorSkip && finishedVideo?.youtubeVideoId) {
        failedVideoIdsRef.current.add(finishedVideo.youtubeVideoId);
      }

      let nextIdx = (currentVideoIndex + 1) % active.videos.length;
      let safety = 0;
      while (
        safety < active.videos.length &&
        failedVideoIdsRef.current.has(active.videos[nextIdx].youtubeVideoId)
      ) {
        nextIdx = (nextIdx + 1) % active.videos.length;
        safety++;
      }

      setCurrentVideoIndex(nextIdx);
      setStartSeconds(0);
      currentPlaybackTimeRef.current = 0;
      setBehindLiveSeconds(0);
      setTuneKey((k) => k + 1);
      setIsPlaying(true);
    },
    [channels, currentChannelIndex, currentVideoIndex]
  );

  // True Live TV resync: snaps forward to global wall-clock live position after offline/long buffer recovery
  const handleSyncToLive = useCallback(() => {
    const active = channels[currentChannelIndex];
    if (!active || !active.videos?.length) return;

    const live = getLiveBroadcastState(
      active.videos,
      active.categoryId,
      getSyncedNowMs(),
      failedVideoIdsRef.current
    );

    if (live.videoIndex !== currentVideoIndex) {
      setCurrentVideoIndex(live.videoIndex);
      setStartSeconds(live.seekSeconds);
      currentPlaybackTimeRef.current = live.seekSeconds;
      setBehindLiveSeconds(0);
      setTuneKey((k) => k + 1);
      setIsPlaying(true);
    } else {
      currentPlaybackTimeRef.current = live.seekSeconds;
      setBehindLiveSeconds(0);
      setIsPlaying(true);
    }
  }, [channels, currentChannelIndex, currentVideoIndex]);

  // Auto-resync to True Live TV immediately when browser regains internet while watching
  useEffect(() => {
    const onOnline = () => {
      if (hasEnteredWatch && isPlaying && screenMode !== 'power') {
        handleSyncToLive();
      }
    };
    window.addEventListener('online', onOnline);
    return () => window.removeEventListener('online', onOnline);
  }, [hasEnteredWatch, isPlaying, screenMode, handleSyncToLive]);

  const handleJumpToLive = useCallback(() => {
    // If already at live edge (haven't paused), do not switch or reload video!
    if (behindLiveSeconds <= 0) {
      if (!isPlaying) setIsPlaying(true);
      return;
    }

    const active = channels[currentChannelIndex];
    if (!active || !active.videos?.length) return;

    // Sync directly to the global wall-clock live broadcast state
    const live = getLiveBroadcastState(
      active.videos,
      active.categoryId,
      getSyncedNowMs(),
      failedVideoIdsRef.current
    );
    setCurrentVideoIndex(live.videoIndex);
    setStartSeconds(live.seekSeconds);
    currentPlaybackTimeRef.current = live.seekSeconds;
    setBehindLiveSeconds(0);
    setTuneKey((k) => k + 1);
    setIsPlaying(true);
  }, [
    behindLiveSeconds,
    isPlaying,
    channels,
    currentChannelIndex,
  ]);

  const handleShortDetected = useCallback(
    (videoId: string) => {
      failedVideoIdsRef.current.add(videoId);
      handleNextVideo(true);
    },
    [handleNextVideo]
  );

  const handleProgressUpdate = useCallback((cur: number) => {
    if (cur > 0) {
      currentPlaybackTimeRef.current = cur;
    }
  }, []);

  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handlePowerOff = useCallback(() => {
    if (crtTimerRef.current) clearTimeout(crtTimerRef.current);
    setIsPlaying(false);
    persistState();
    setCrtTransition('off');
    crtTimerRef.current = setTimeout(() => {
      setScreenMode('power');
      setCrtTransition(null);
    }, 520);
  }, [persistState]);

  // Handlers for Manage Screen
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setChannels((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
    const nextIds = [...pickedCategoryIdsRef.current];
    if (index < nextIds.length) {
      [nextIds[index - 1], nextIds[index]] = [nextIds[index], nextIds[index - 1]];
      pickedCategoryIdsRef.current = nextIds;
      setPickedCategoryIds(nextIds);
      persistState({ pickedCategoryIds: nextIds });
    }
    isDirtyRef.current = true;
  };

  const handleMoveDown = (index: number) => {
    if (index >= channels.length - 1) return;
    setChannels((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
    const nextIds = [...pickedCategoryIdsRef.current];
    if (index + 1 < nextIds.length) {
      [nextIds[index], nextIds[index + 1]] = [nextIds[index + 1], nextIds[index]];
      pickedCategoryIdsRef.current = nextIds;
      setPickedCategoryIds(nextIds);
      persistState({ pickedCategoryIds: nextIds });
    }
    isDirtyRef.current = true;
  };

  const handleRemoveChannel = (index: number) => {
    if (channels.length <= 3) return; // Minimum 3 channels
    const removed = channels[index];
    setChannels((prev) => prev.filter((_, idx) => idx !== index));
    const nextIds = pickedCategoryIdsRef.current.filter((_, idx) => idx !== index);
    pickedCategoryIdsRef.current = nextIds;
    setPickedCategoryIds(nextIds);
    const nextCustomSources = removed
      ? customSourcesRef.current.filter((cs) => cs.channelId !== removed.categoryId)
      : customSourcesRef.current;
    customSourcesRef.current = nextCustomSources;
    setCustomSources(nextCustomSources);
    const nextChIdx = currentChannelIndex >= channels.length - 1 ? 0 : currentChannelIndex;
    if (nextChIdx !== currentChannelIndex) {
      setCurrentChannelIndex(nextChIdx);
    }
    persistState({
      pickedCategoryIds: nextIds,
      customSources: nextCustomSources,
      lastChannelIndex: nextChIdx,
    });
    isDirtyRef.current = true;
  };

  const handleAddCategory = async (cat: Category) => {
    // Prevent duplicate channels in lineup
    const currentIds = pickedCategoryIdsRef.current;
    const nextIds = currentIds.includes(cat.id) ? currentIds : [...currentIds, cat.id];
    if (nextIds !== currentIds) {
      pickedCategoryIdsRef.current = nextIds;
      setPickedCategoryIds(nextIds);
      persistState({ pickedCategoryIds: nextIds });
    }

    const newSeed = SEED_LINEUPS[cat.id] || {
      categoryId: cat.id,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: Date.now(),
      videos: SEED_LINEUPS.tech.videos,
    };

    setChannels((prev) => (prev.some((ch) => ch.categoryId === cat.id) ? prev : [...prev, newSeed]));
    isDirtyRef.current = true;
  };

  const handleAddCustomChannel = async (query: string): Promise<string | null> => {
    try {
      const res = await fetch(`/api/resolve-channel?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        return data.error || 'Could not resolve channel.';
      }

      if (pickedCategoryIdsRef.current.includes(data.channelId)) {
        return 'That channel is already in your lineup.';
      }

      const name = data.title || 'Custom';
      const hue = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;

      const customLineup: ChannelLineup = {
        categoryId: data.channelId,
        categoryName: name,
        hue,
        builtAt: Date.now(),
        videos: Array.isArray(data.videos) && data.videos.length > 0 ? data.videos : [],
      };

      const nextCustomSources: CustomSource[] = [
        ...customSourcesRef.current.filter((cs) => cs.channelId !== data.channelId),
        { channelId: data.channelId, handle: query, title: name },
      ];
      const nextPickedIds = [...pickedCategoryIdsRef.current, customLineup.categoryId];

      customSourcesRef.current = nextCustomSources;
      pickedCategoryIdsRef.current = nextPickedIds;
      setCustomSources(nextCustomSources);
      setChannels((prev) => [...prev, customLineup]);
      setPickedCategoryIds(nextPickedIds);
      persistState({
        pickedCategoryIds: nextPickedIds,
        customSources: nextCustomSources,
      });
      isDirtyRef.current = true;
      return null;
    } catch {
      return 'Failed to reach channel resolver. Please try again.';
    }
  };

  const handleDoneManage = () => {
    persistState();
    if (isDirtyRef.current) {
      isDirtyRef.current = false;
      setScreenMode('tuning');
    } else {
      setHasEnteredWatch(true);
      setIsPlaying(true);
      setScreenMode('watch');
    }
  };

  const handleRetryChannel = async (index: number) => {
    const ch = channels[index];
    if (!ch) return;
    const refreshed = await loadLineups([ch.categoryId]);
    if (refreshed.length > 0) {
      setChannels((prev) => {
        const next = [...prev];
        next[index] = refreshed[0];
        return next;
      });
    }
  };

  const keepPlayerMounted = channels.length > 0 && screenMode !== 'off';

  return (
    <div
      className={`crt-chassis${
        crtTransition === 'on'
          ? ' crt-turning-on'
          : crtTransition === 'off'
          ? ' crt-turning-off'
          : ''
      }`}
    >
      <div className="crt-tube">
        {screenMode === 'power' && (
          <PowerScreen
            isReturningUser={isReturningUser}
            lastChannelNumber={currentChannelIndex + 1}
            lastCategoryName={channels[currentChannelIndex]?.categoryName || 'Tech'}
            onTurnOn={handleTurnOn}
            onChangeChannels={handleChangeChannelsFromPower}
          />
        )}

        {screenMode === 'pick' && (
          <PickInterestsScreen
            categories={CATEGORIES}
            selectedIds={pickedCategoryIds}
            onToggleCategory={handleToggleCategory}
            onContinue={handleContinuePick}
            onSkip={handleSkipPick}
            onBack={() => setScreenMode('power')}
          />
        )}

        {screenMode === 'tuning' && (
          <TuningScreen
            channels={pickedCategoryIds.map((id) => {
              const cat = CATEGORIES.find((c) => c.id === id);
              const customMeta = customSources.find((cs) => cs.channelId === id);
              const name = customMeta?.title || cat?.name || id;
              const hue =
                cat?.hue ?? ([...name].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360);
              return {
                id,
                name,
                hue,
              };
            })}
            lineups={channels}
            onTuningComplete={handleTuningComplete}
          />
        )}

        {/* Keep WatchScreen mounted during Guide and Manage so live broadcast audio/video never cuts out */}
        {keepPlayerMounted && (
          <WatchScreen
            channels={channels}
            currentChannelIndex={currentChannelIndex}
            previousChannelIndex={previousChannelIndex}
            currentVideoIndex={currentVideoIndex}
            startSeconds={startSeconds}
            tuneKey={tuneKey}
            isPlaying={isPlaying}
            isHidden={screenMode !== 'watch'}
            keepVideoVisible={MENU_OVERLAY_MODES.has(screenMode)}
            sleepTimerMode={sleepTimerMode}
            sleepRemainingSec={sleepRemainingSec}
            behindLiveSeconds={behindLiveSeconds}
            onCycleSleepTimer={handleCycleSleepTimer}
            onSelectChannel={handleSelectChannel}
            onRecallLastChannel={handleRecallLastChannel}
            onTogglePlay={handleTogglePlay}
            onNextVideo={handleNextVideo}
            onJumpToLive={handleJumpToLive}
            onSyncToLive={handleSyncToLive}
            onShortDetected={handleShortDetected}
            onProgressUpdate={handleProgressUpdate}
            onOpenGuide={() => {
              setScreenMode('guide');
            }}
            onOpenManage={() => {
              setScreenMode('manage');
            }}
            onPowerOff={handlePowerOff}
          />
        )}

        {screenMode === 'guide' && (
          <GuideScreen
            channels={channels}
            currentChannelIndex={currentChannelIndex}
            currentVideoIndex={currentVideoIndex}
            currentPlaybackSeconds={currentPlaybackTimeRef.current}
            savedChannelStates={channelPlaybackStatesRef.current}
            completedVideoIds={failedVideoIdsRef.current}
            onBackToWatch={() => setScreenMode('watch')}
            onTuneChannel={(chIdx) => {
              if (chIdx !== currentChannelIndex) {
                handleSelectChannel(chIdx);
              }
              setScreenMode('watch');
            }}
          />
        )}

        {screenMode === 'manage' && (
          <ManageScreen
            channels={channels}
            allCategories={CATEGORIES}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onRemoveChannel={handleRemoveChannel}
            onAddCategory={handleAddCategory}
            onAddCustomChannel={handleAddCustomChannel}
            onRetryChannel={handleRetryChannel}
            onDone={handleDoneManage}
            onPreviewOffAir={() => setScreenMode('off')}
          />
        )}

        {screenMode === 'off' && (
          <OffAirScreen
            reason={offAirReason}
            onTryAgain={() => {
              setScreenMode('tuning');
            }}
          />
        )}
      </div>

      {crtTransition && (
        <div
          className={`crt-beam-overlay ${crtTransition === 'on' ? 'beam-on' : 'beam-off'}`}
          aria-hidden
        />
      )}

      {/* Hardcoded Landscape Mobile Prompt: prompts user to rotate device to landscape */}
      {isMobilePortrait && (
        <RotateDeviceOverlay
          onEnterFullscreen={() => {
            enterAppFullscreen(document.documentElement).then((success) => {
              if (success) {
                pendingFullscreenRef.current = false;
              }
            });
          }}
        />
      )}
    </div>
  );
}
