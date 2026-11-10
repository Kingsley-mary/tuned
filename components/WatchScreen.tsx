'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChannelLineup, Video } from '../lib/types';
import { YouTubePlayer } from './YouTubePlayer';
import { recordVideoDuration, getVideoDuration, buildChannelSchedule } from '../lib/broadcast-clock';
import {
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
  Tv,
  Settings,
  Power,
  Sun,
  Moon,
  Loader2,
  Maximize,
  Minimize,
  Volume2,
  VolumeX,
  RotateCcw,
  Timer,
  Share2,
  Check,
  Clock,
} from 'lucide-react';

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
  theme: 'dark' | 'light' | 'system';
  sleepTimerMode: SleepTimerMode;
  sleepRemainingSec: number | null;
  behindLiveSeconds?: number;
  onCycleSleepTimer: () => void;
  onToggleTheme: () => void;
  onSelectChannel: (channelIndex: number) => void;
  onRecallLastChannel: () => void;
  onTogglePlay: () => void;
  onNextVideo: () => void;
  onJumpToLive?: () => void;
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
  theme,
  sleepTimerMode,
  sleepRemainingSec,
  behindLiveSeconds = 0,
  onCycleSleepTimer,
  onToggleTheme,
  onSelectChannel,
  onRecallLastChannel,
  onTogglePlay,
  onNextVideo,
  onJumpToLive,
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
  const [isBumperActive, setIsBumperActive] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const tvStageRef = useRef<HTMLDivElement>(null);
  const bumperTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeChannel = channels[currentChannelIndex] || channels[0];
  const videos = activeChannel?.videos || [];
  const activeVideo: Video | undefined = videos[currentVideoIndex] || videos[0];
  const nextVideo: Video | undefined =
    videos.length > 0 ? videos[(currentVideoIndex + 1) % videos.length] : undefined;

  // Reset local time display and cancel any pending bumper when channel or video switches
  useEffect(() => {
    setCurrentTime(startSeconds || 0);
    setDuration(activeVideo ? getVideoDuration(activeVideo) : 0);
    if (bumperTimeoutRef.current) {
      clearTimeout(bumperTimeoutRef.current);
      bumperTimeoutRef.current = null;
    }
    setIsBumperActive(false);
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

  // Fullscreen toggle handler on tvStageRef (contains 16:9 video + non-overlapping bottom bezel bar)
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        if (tvStageRef.current) {
          if (tvStageRef.current.requestFullscreen) {
            await tvStageRef.current.requestFullscreen();
          } else if ((tvStageRef.current as any).webkitRequestFullscreen) {
            await (tvStageRef.current as any).webkitRequestFullscreen();
          }
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  }, []);

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

  // Handle natural end of show with a 2.4-second Network Station ID Bumper
  const handleVideoEndedNaturally = useCallback(() => {
    if (sleepTimerMode === 'end') {
      onPowerOff();
      return;
    }
    setIsBumperActive(true);
    if (bumperTimeoutRef.current) clearTimeout(bumperTimeoutRef.current);
    bumperTimeoutRef.current = setTimeout(() => {
      setIsBumperActive(false);
      onNextVideo();
    }, 2400);
  }, [onNextVideo, onPowerOff, sleepTimerMode]);

  // Share synchronized channel link
  const handleShareChannel = useCallback(() => {
    if (!activeChannel || typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('ch', activeChannel.categoryId);
    navigator.clipboard?.writeText(url.toString()).catch(() => {});
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
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
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const nextIdx = (currentChannelIndex - 1 + channels.length) % channels.length;
        onSelectChannel(nextIdx);
      } else if (e.key === 'ArrowDown') {
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
  ]);

  // Compute true linear schedule for Up Next (3 upcoming shows)
  const schedule = buildChannelSchedule(videos, currentVideoIndex, currentTime, 4);
  const upNextList = schedule.slice(1, 4);

  const effectiveDuration = duration > 0 ? duration : activeVideo ? getVideoDuration(activeVideo) : 600;
  const progressPercent =
    effectiveDuration > 0 ? Math.min(100, (currentTime / effectiveDuration) * 100) : 0;

  const sleepLabel =
    sleepTimerMode === 'off'
      ? 'Sleep'
      : sleepTimerMode === 'end'
      ? 'Sleep: End of Show'
      : sleepRemainingSec !== null
      ? `Sleep ${Math.ceil(sleepRemainingSec / 60)}m`
      : `Sleep ${sleepTimerMode}`;

  // ---- DStv-style on-screen display (OSD) ----
  const [osdOpen, setOsdOpen] = useState<boolean>(true);
  const osdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const osdHoverRef = useRef<boolean>(false);

  const pokeOsd = useCallback(() => {
    setOsdOpen(true);
    if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    osdTimerRef.current = setTimeout(() => {
      if (!osdHoverRef.current) setOsdOpen(false);
    }, 6000);
  }, []);

  useEffect(() => {
    pokeOsd();
    return () => {
      if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    };
  }, [currentChannelIndex, currentVideoIndex, tuneKey, pokeOsd]);

  useEffect(() => {
    if (isHidden) return;
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      pokeOsd();
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        onOpenGuide();
      } else if (e.key === 'i' || e.key === 'I' || e.key === 'Enter') {
        e.preventDefault();
        setOsdOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isHidden, onOpenGuide, pokeOsd]);

  const stepChannel = (dir: 1 | -1) =>
    onSelectChannel((currentChannelIndex + dir + channels.length) % channels.length);

  const now = new Date();
  const hh = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateLabel = now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
  const hue = activeChannel?.hue ?? 355;
  const rows = schedule.slice(0, 4);

  return (
    <div
      ref={tvStageRef}
      className={`tv-stage${osdOpen ? ' osd-on' : ''}`}
      style={{ display: isHidden ? 'none' : undefined, ['--h' as string]: hue } as React.CSSProperties}
      onMouseMove={pokeOsd}
    >
      {/* Video layer */}
      <div className={`tv-video ${isChannelPulsing ? 'pulse-glow' : ''}`}>
        {isBumperActive ? (
          <div
            className="tv-bumper"
            style={{
              background: `radial-gradient(circle at 50% 30%, hsla(${hue}, 80%, 24%, 0.7), #07070a 75%)`,
            }}
          >
            <div className="osd-chip">
              <span className="dot" style={{ background: `hsl(${hue}, 85%, 55%)` }} />
              CH {String(currentChannelIndex + 1).padStart(2, '0')} · {activeChannel?.categoryName}
            </div>
            <div className="osd-eyebrow">Up next on Tuned</div>
            <h3>{nextVideo?.title || 'Continuing broadcast…'}</h3>
            <p>{nextVideo?.sourceChannelTitle || activeChannel?.categoryName}</p>
          </div>
        ) : activeVideo?.youtubeVideoId ? (
          <div className="tv-yt">
            <YouTubePlayer
              videoId={activeVideo.youtubeVideoId}
              startSeconds={startSeconds}
              tuneKey={tuneKey}
              isPlaying={isPlaying}
              isMuted={isMuted}
              onEnded={handleVideoEndedNaturally}
              onError={(errCode) => {
                console.warn(`Video ${activeVideo.youtubeVideoId} error (${errCode}), skipping...`);
                onNextVideo();
              }}
              onTimeUpdate={(cur, dur) => {
                setCurrentTime(cur);
                if (dur > 0) {
                  setDuration(dur);
                  recordVideoDuration(activeVideo.youtubeVideoId, dur);
                }
                onProgressUpdate?.(cur, dur);
              }}
              onBuffering={setIsBuffering}
              onShortDetected={onShortDetected}
            />
          </div>
        ) : (
          <div className="tv-bumper">
            <p>No video available on this channel</p>
          </div>
        )}
      </div>

      {/* Click/hover capture layer so the OSD can be summoned over the iframe */}
      <div
        className="tv-capture"
        onClick={() => (osdOpen ? setOsdOpen(false) : pokeOsd())}
        onDoubleClick={toggleFullscreen}
        aria-hidden
      />

      {/* Top bar */}
      <div className="osd-top" onMouseEnter={() => (osdHoverRef.current = true)} onMouseLeave={() => { osdHoverRef.current = false; pokeOsd(); }}>
        <div className="brand-logo" style={{ color: '#fff' }}>
          <span className="brand-dot" />
          <span>tuned</span>
        </div>

        <div className="osd-top-right">
          {isBuffering && (
            <span className="osd-chip">
              <Loader2 size={13} className="animate-spin" /> Buffering…
            </span>
          )}
          {!isPlaying && <span className="osd-chip">Paused</span>}
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
          <button onClick={onToggleTheme} className="osd-btn icon" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={onPowerOff} className="osd-btn icon danger" aria-label="Power off" title="Power off">
            <Power size={16} />
          </button>
        </div>
      </div>

      {/* Bottom OSD */}
      <div
        className="osd-bottom"
        onMouseEnter={() => (osdHoverRef.current = true)}
        onMouseLeave={() => {
          osdHoverRef.current = false;
          pokeOsd();
        }}
      >
        <div className="osd-legend">
          <button onClick={onTogglePlay}>
            {isPlaying ? 'Pause' : 'Play'} <span className="kbd-osd">SPACE</span>
          </button>
          <button onClick={() => setIsMuted((m) => !m)}>
            {isMuted ? 'Unmute' : 'Mute'} <span className="kbd-osd">M</span>
          </button>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? 'Exit full' : 'Fullscreen'} <span className="kbd-osd">F</span>
          </button>
          <button onClick={onOpenGuide}>
            Guide <span className="kbd-osd">G</span>
          </button>
          {previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex && (
            <button onClick={onRecallLastChannel}>
              Last <span className="kbd-osd">L</span>
            </button>
          )}
          <button onClick={handleShareChannel}>
            {copiedShare ? 'Link copied' : 'Share'} <span className="kbd-osd">{copiedShare ? '✓' : 'LINK'}</span>
          </button>
        </div>

        <div className="osd-panel">
          <div className="osd-head">
            <div className="osd-head-left">
              <span className="osd-time">{hh}</span>
              <span className="osd-date">{dateLabel}</span>
            </div>

            <div className="osd-channel">
              <button onClick={() => stepChannel(-1)} aria-label="Previous channel" title="Previous channel (↑)">
                <ChevronUp size={18} style={{ transform: 'rotate(-90deg)' }} />
              </button>
              <span className={`osd-channel-name ${isBadgeFlipping ? 'flip' : ''}`}>
                <b>{String(currentChannelIndex + 1).padStart(2, '0')}</b>
                <span style={{ textTransform: 'capitalize' }}>{activeChannel?.categoryName || 'Channel'}</span>
              </span>
              <button onClick={() => stepChannel(1)} aria-label="Next channel" title="Next channel (↓)">
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
            </div>
          </div>

          {rows.map((slot, i) => {
            const isNow = i === 0;
            return (
              <div key={slot.video.youtubeVideoId + i} className={`osd-row${isNow ? ' now' : ''}`}>
                <span className="osd-row-time">{formatClockTime(isNow ? slot.startTimeMs : slot.startTimeMs)}</span>
                <span className="osd-row-tag">{isNow ? 'LIVE' : i === 1 ? 'NEXT' : ''}</span>
                <span className="osd-row-title">{isNow ? activeVideo?.title || slot.video.title : slot.video.title}</span>
                <span className="osd-row-src">{slot.video.sourceChannelTitle}</span>
                <span className="osd-row-dur">{formatTime(slot.durationSec)}</span>
                {isNow && (
                  <span className="osd-row-progress">
                    <span style={{ width: `${progressPercent}%` }} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};