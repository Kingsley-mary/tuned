'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScreenMode, Category, ChannelLineup, UserState } from '../lib/types';
import { CATEGORIES, SEED_LINEUPS } from '../lib/seed-catalog';
import { getLiveBroadcastState, advanceChannelPlayback } from '../lib/broadcast-clock';
import { PowerScreen } from '../components/PowerScreen';
import { PickInterestsScreen } from '../components/PickInterestsScreen';
import { TuningScreen } from '../components/TuningScreen';
import { WatchScreen } from '../components/WatchScreen';
import { GuideScreen } from '../components/GuideScreen';
import { ManageScreen } from '../components/ManageScreen';
import { OffAirScreen } from '../components/OffAirScreen';

const STORAGE_KEY = 'tuned_user_state_v1';
const DEFAULT_CATEGORIES = ['tech', 'music', 'science', 'food'];

export default function TunedApp() {
  const [screenMode, setScreenMode] = useState<ScreenMode>('power');
  const [isReturningUser, setIsReturningUser] = useState<boolean>(false);
  const [pickedCategoryIds, setPickedCategoryIds] = useState<string[]>(DEFAULT_CATEGORIES);
  const [channels, setChannels] = useState<ChannelLineup[]>([]);
  const [currentChannelIndex, setCurrentChannelIndex] = useState<number>(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [startSeconds, setStartSeconds] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system');
  const [offAirReason, setOffAirReason] = useState<string>('Nothing playable on this channel right now.');

  const isInitialLoadRef = useRef(true);
  const isDirtyRef = useRef(false);
  const channelPlaybackStatesRef = useRef<Map<string, { videoIndex: number; seekSeconds: number; leftAt: number }>>(new Map());
  const completedVideoIdsRef = useRef<Set<string>>(new Set());

  // Load user state from LocalStorage on mount (PRD Section 8 & 10)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: UserState = JSON.parse(saved);
        if (parsed.pickedCategoryIds && parsed.pickedCategoryIds.length >= 3) {
          setPickedCategoryIds(parsed.pickedCategoryIds);
          setIsReturningUser(true);
        }
        if (typeof parsed.lastChannelIndex === 'number') {
          setCurrentChannelIndex(parsed.lastChannelIndex);
        }
        if (parsed.theme) {
          setTheme(parsed.theme);
        }
      }
    } catch (e) {
      console.warn('Could not read user state from local storage:', e);
    }
  }, []);

  // Sync theme with DOM
  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Persist user state to LocalStorage
  const persistState = useCallback(
    (overrides?: Partial<UserState>) => {
      try {
        const stateToSave: UserState = {
          pickedCategoryIds,
          customSources: [],
          lastChannelIndex: currentChannelIndex,
          autoplay: true,
          isReturningUser: true,
          theme,
          ...overrides,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
      } catch (e) {
        console.warn('Could not save user state:', e);
      }
    },
    [pickedCategoryIds, currentChannelIndex, theme]
  );

  // Fetch or construct lineups for current picked categories
  const loadLineups = useCallback(async (categoryIds: string[]): Promise<ChannelLineup[]> => {
    try {
      const res = await fetch(`/api/lineup?ids=${categoryIds.join(',')}`);
      if (!res.ok) throw new Error('API lineup fetch failed');
      const data = await res.json();
      if (data.lineups && Array.isArray(data.lineups) && data.lineups.length > 0) {
        return data.lineups;
      }
    } catch (err) {
      console.warn('API error, falling back to seed catalog:', err);
    }

    // Fallback directly to seed catalog (works offline or without network)
    return categoryIds.map((id) => {
      const meta = CATEGORIES.find((c) => c.id === id);
      const seed = SEED_LINEUPS[id] || {
        categoryId: id,
        categoryName: meta?.name || id,
        hue: meta?.hue || 355,
        builtAt: Date.now(),
        videos: SEED_LINEUPS.tech.videos,
      };
      return seed;
    });
  }, []);

  // Preload lineups immediately and sync to live broadcast schedule
  useEffect(() => {
    loadLineups(pickedCategoryIds).then((loaded) => {
      setChannels(loaded);
      const active = loaded[currentChannelIndex] || loaded[0];
      if (active && active.videos?.length > 0) {
        const live = getLiveBroadcastState(active.videos, active.categoryId);
        setCurrentVideoIndex(live.videoIndex);
        setStartSeconds(live.seekSeconds);
      }
    });
  }, [pickedCategoryIds, loadLineups]);

  // Handlers for Power Screen
  const handleTurnOn = () => {
    if (isReturningUser) {
      const active = channels[currentChannelIndex] || channels[0];
      if (active && active.videos?.length > 0) {
        const live = getLiveBroadcastState(active.videos, active.categoryId);
        setCurrentVideoIndex(live.videoIndex);
        setStartSeconds(live.seekSeconds);
      }
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
    setPickedCategoryIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 8) return prev; // max 8 categories
        return [...prev, id];
      }
    });
    isDirtyRef.current = true;
  };

  const handleContinuePick = () => {
    setScreenMode('tuning');
  };

  const handleSkipPick = () => {
    setPickedCategoryIds(DEFAULT_CATEGORIES);
    isDirtyRef.current = true;
    setScreenMode('tuning');
  };

  // Handlers for Tuning Screen
  const handleTuningComplete = async () => {
    const loaded = await loadLineups(pickedCategoryIds);
    setChannels(loaded);

    if (loaded.length === 0 || !loaded.some((c) => c.videos.length > 0)) {
      setOffAirReason('No playable content found. Please check your connection or pick other categories.');
      setScreenMode('off');
      return;
    }

    const firstCh = loaded[0];
    const live = getLiveBroadcastState(firstCh.videos, firstCh.categoryId);
    setCurrentChannelIndex(0);
    setCurrentVideoIndex(live.videoIndex);
    setStartSeconds(live.seekSeconds);
    setIsPlaying(true);
    setIsReturningUser(true);
    persistState({ isReturningUser: true, lastChannelIndex: 0 });
    setScreenMode('watch');
  };

  // Handlers for Watch Screen
  const handleSelectChannel = (channelIndex: number) => {
    // 1. Save state of current channel before switching
    const currentCh = channels[currentChannelIndex];
    if (currentCh) {
      channelPlaybackStatesRef.current.set(currentCh.categoryId, {
        videoIndex: currentVideoIndex,
        seekSeconds: startSeconds,
        leftAt: Date.now(),
      });
    }

    setCurrentChannelIndex(channelIndex);
    const target = channels[channelIndex];
    if (target && target.videos?.length > 0) {
      const saved = channelPlaybackStatesRef.current.get(target.categoryId);
      if (saved) {
        // Resume target channel advancing forward by elapsed real time (never rewind!)
        const elapsedSec = (Date.now() - saved.leftAt) / 1000;
        const adv = advanceChannelPlayback(
          target.videos,
          saved.videoIndex,
          saved.seekSeconds,
          elapsedSec,
          completedVideoIdsRef.current
        );
        setCurrentVideoIndex(adv.videoIndex);
        setStartSeconds(adv.seekSeconds);
      } else {
        // First visit to this channel in this session: sync to live clock, skipping completed videos
        const live = getLiveBroadcastState(
          target.videos,
          target.categoryId,
          Math.floor(Date.now() / 1000),
          completedVideoIdsRef.current
        );
        setCurrentVideoIndex(live.videoIndex);
        setStartSeconds(live.seekSeconds);
      }
    } else {
      setCurrentVideoIndex(0);
      setStartSeconds(0);
    }
    setIsPlaying(true);
    persistState({ lastChannelIndex: channelIndex });
  };

  const handleSelectVideo = (videoIndex: number) => {
    setCurrentVideoIndex(videoIndex);
    setStartSeconds(0);
    setIsPlaying(true);
  };

  // Called when video ends naturally
  const handleNextVideo = () => {
    const active = channels[currentChannelIndex];
    if (!active || !active.videos?.length) return;

    // Mark completed so it is never replayed when returning
    const finishedVideo = active.videos[currentVideoIndex];
    if (finishedVideo?.youtubeVideoId) {
      completedVideoIdsRef.current.add(finishedVideo.youtubeVideoId);
    }

    let nextIdx = (currentVideoIndex + 1) % active.videos.length;
    // Skip any video in completedVideoIds
    let safety = 0;
    while (
      safety < active.videos.length &&
      completedVideoIdsRef.current.has(active.videos[nextIdx].youtubeVideoId)
    ) {
      nextIdx = (nextIdx + 1) % active.videos.length;
      safety++;
    }

    setCurrentVideoIndex(nextIdx);
    setStartSeconds(0);
    setIsPlaying(true);

    channelPlaybackStatesRef.current.set(active.categoryId, {
      videoIndex: nextIdx,
      seekSeconds: 0,
      leftAt: Date.now(),
    });
  };

  const handleJumpToLive = () => {
    const active = channels[currentChannelIndex];
    if (!active || !active.videos?.length) return;

    const live = getLiveBroadcastState(
      active.videos,
      active.categoryId,
      Math.floor(Date.now() / 1000),
      completedVideoIdsRef.current
    );
    setCurrentVideoIndex(live.videoIndex);
    setStartSeconds(live.seekSeconds);
    setIsPlaying(true);

    channelPlaybackStatesRef.current.set(active.categoryId, {
      videoIndex: live.videoIndex,
      seekSeconds: live.seekSeconds,
      leftAt: Date.now(),
    });
  };

  const handleShortDetected = (videoId: string) => {
    completedVideoIdsRef.current.add(videoId);
    handleNextVideo();
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    persistState({ theme: nextTheme });
  };

  const handlePowerOff = () => {
    setIsPlaying(false);
    persistState();
    setScreenMode('power');
  };

  // Handlers for Manage Screen
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setChannels((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
    setPickedCategoryIds((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
    isDirtyRef.current = true;
  };

  const handleMoveDown = (index: number) => {
    if (index >= channels.length - 1) return;
    setChannels((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
    setPickedCategoryIds((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
    isDirtyRef.current = true;
  };

  const handleRemoveChannel = (index: number) => {
    if (channels.length <= 3) return; // PRD M-2: min 3
    setChannels((prev) => prev.filter((_, idx) => idx !== index));
    setPickedCategoryIds((prev) => prev.filter((_, idx) => idx !== index));
    if (currentChannelIndex >= channels.length - 1) {
      setCurrentChannelIndex(0);
    }
    isDirtyRef.current = true;
  };

  const handleAddCategory = async (cat: Category) => {
    if (channels.length >= 8) return; // PRD M-2: max 8
    setPickedCategoryIds((prev) => [...prev, cat.id]);

    const newSeed = SEED_LINEUPS[cat.id] || {
      categoryId: cat.id,
      categoryName: cat.name,
      hue: cat.hue,
      builtAt: Date.now(),
      videos: SEED_LINEUPS.tech.videos,
    };

    setChannels((prev) => [...prev, newSeed]);
    isDirtyRef.current = true;
  };

  const handleAddCustomChannel = async (query: string): Promise<string | null> => {
    try {
      const res = await fetch(`/api/resolve-channel?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        return data.error || 'Could not resolve channel.';
      }

      // Generate a custom channel lineup with a unique hue
      const name = data.title || 'Custom';
      const hue = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;

      const customLineup: ChannelLineup = {
        categoryId: data.channelId || `custom_${Date.now()}`,
        categoryName: name,
        hue,
        builtAt: Date.now(),
        videos: SEED_LINEUPS.tech.videos.map((v, i) => ({
          ...v,
          sourceChannelTitle: name,
        })),
      };

      setChannels((prev) => [...prev, customLineup]);
      setPickedCategoryIds((prev) => [...prev, customLineup.categoryId]);
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

  // Render current screen
  return (
    <>
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
          channels={pickedCategoryIds.map((id, idx) => {
            const cat = CATEGORIES.find((c) => c.id === id);
            return {
              id,
              name: cat?.name || id,
              hue: cat?.hue || 355,
            };
          })}
          lineups={channels}
          onTuningComplete={handleTuningComplete}
        />
      )}

      {screenMode === 'watch' && (
        <WatchScreen
          channels={channels}
          currentChannelIndex={currentChannelIndex}
          currentVideoIndex={currentVideoIndex}
          startSeconds={startSeconds}
          isPlaying={isPlaying}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onSelectChannel={handleSelectChannel}
          onSelectVideo={handleSelectVideo}
          onTogglePlay={handleTogglePlay}
          onNextVideo={handleNextVideo}
          onJumpToLive={handleJumpToLive}
          onShortDetected={handleShortDetected}
          onOpenGuide={() => setScreenMode('guide')}
          onOpenManage={() => setScreenMode('manage')}
          onPowerOff={handlePowerOff}
        />
      )}

      {screenMode === 'guide' && (
        <GuideScreen
          channels={channels}
          currentChannelIndex={currentChannelIndex}
          currentVideoIndex={currentVideoIndex}
          onBackToWatch={() => setScreenMode('watch')}
          onSelectProgram={(chIdx, vidIdx) => {
            setCurrentChannelIndex(chIdx);
            setCurrentVideoIndex(vidIdx);
            const target = channels[chIdx];
            if (target) {
              const live = getLiveBroadcastState(target.videos, target.categoryId);
              if (live.videoIndex === vidIdx) {
                setStartSeconds(live.seekSeconds);
              } else {
                setStartSeconds(0);
              }
            } else {
              setStartSeconds(0);
            }
            setIsPlaying(true);
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
    </>
  );
}
