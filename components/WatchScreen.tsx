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

  return (
    <div
      className="app-container"
      style={{
        display: isHidden ? 'none' : undefined,
      }}
    >
      {/* Top Bar (PRD W-1) */}
      <header className="top-nav">
        <div className="brand-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </div>

        <div className="nav-actions">
          <button onClick={onOpenGuide} className="btn-pill" aria-label="Open TV Guide">
            <Tv size={16} />
            <span>Guide</span>
          </button>
          <button onClick={onOpenManage} className="btn-pill" aria-label="Manage Channels">
            <Settings size={16} />
            <span>Manage</span>
          </button>
          <button
            onClick={onCycleSleepTimer}
            className="btn-pill"
            title="Cycle Sleep Timer (Off / 15m / 30m / 60m / End of Show)"
            aria-label="Sleep Timer"
            style={{
              borderColor: sleepTimerMode !== 'off' ? 'var(--accent)' : undefined,
              color: sleepTimerMode !== 'off' ? 'var(--accent)' : undefined,
            }}
          >
            <Timer size={15} />
            <span>{sleepLabel}</span>
          </button>
          <button onClick={onToggleTheme} className="icon-btn" aria-label="Toggle theme" title="Toggle light/dark theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={onPowerOff}
            className="icon-btn"
            title="Power off"
            aria-label="Power off"
            style={{ color: 'var(--accent)' }}
          >
            <Power size={18} />
          </button>
        </div>
      </header>

      {/* Main Grid Layout (PRD W-1 desktop, W-2 mobile) */}
      <div className="watch-grid">
        {/* Main Column: Player + Info & Controls */}
        <main>
          {/* TV Stage Wrapper (Fullscreens 16:9 frame + bottom bezel bar without overlapping video) */}
          <div
            ref={tvStageRef}
            style={
              isFullscreen
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100vw',
                    height: '100vh',
                    background: '#050507',
                  }
                : undefined
            }
          >
            {/* YouTube Player Frame (PRD D-1: Never overlap anything on top of active video) */}
            <div
              className={`player-tv-frame ${isChannelPulsing ? 'pulse-glow' : ''}`}
              style={
                isFullscreen
                  ? {
                      flex: 1,
                      minHeight: 0,
                      width: '100%',
                      borderRadius: 0,
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#000',
                    }
                  : undefined
              }
            >
              {isBumperActive ? (
                /* 2.4-Second Network Station ID Bumper between shows */
                <div
                  style={{
                    aspectRatio: '16/9',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `radial-gradient(circle at 50% 30%, hsla(${activeChannel?.hue || 355}, 80%, 22%, 0.55), #07070a 75%)`,
                    color: '#f5f4f0',
                    padding: 32,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '6px 16px',
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: `hsl(${activeChannel?.hue || 355}, 85%, 55%)`,
                        boxShadow: `0 0 10px hsl(${activeChannel?.hue || 355}, 85%, 55%)`,
                      }}
                    />
                    <span>
                      CH {String(currentChannelIndex + 1).padStart(2, '0')} • {activeChannel?.categoryName}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'rgba(245,244,240,0.55)',
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    Up Next on Tuned
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(20px, 3vw, 32px)',
                      fontWeight: 700,
                      maxWidth: 640,
                      lineHeight: 1.25,
                      marginBottom: 8,
                    }}
                  >
                    {nextVideo?.title || 'Continuing Broadcast…'}
                  </h3>

                  <p style={{ fontSize: 15, color: 'rgba(245,244,240,0.7)', fontWeight: 500 }}>
                    {nextVideo?.sourceChannelTitle || activeChannel?.categoryName}
                  </p>
                </div>
              ) : activeVideo?.youtubeVideoId ? (
                <div style={{ width: '100%', maxHeight: isFullscreen ? 'calc(100vh - 76px)' : undefined, aspectRatio: '16/9' }}>
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
                <div
                  style={{
                    aspectRatio: '16/9',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#09090c',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 14,
                  }}
                >
                  No video available on this channel
                </div>
              )}
            </div>

            {/* Dedicated Fullscreen Broadcast Bezel Bar BELOW the 16:9 video (Zero video overlap) */}
            {isFullscreen && (
              <div
                style={{
                  height: 76,
                  width: '100%',
                  background: '#0b0b0f',
                  borderTop: '1px solid rgba(255,255,255,0.12)',
                  padding: '0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                  color: '#f5f4f0',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0, flex: 1 }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: 6,
                      background: `hsl(${activeChannel?.hue || 355}, 85%, 50%)`,
                      color: '#fff',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 13,
                      flexShrink: 0,
                    }}
                  >
                    CH {String(currentChannelIndex + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'rgba(255,255,255,0.7)',
                      flexShrink: 0,
                    }}
                  >
                    {activeChannel?.categoryName}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {activeVideo?.title}
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', flexShrink: 0 }}>
                    • {activeVideo?.sourceChannelTitle}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                  <button
                    onClick={() => {
                      const prevIdx = (currentChannelIndex - 1 + channels.length) % channels.length;
                      onSelectChannel(prevIdx);
                    }}
                    className="icon-btn"
                    style={{ width: 36, height: 36, color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                    title="Previous Channel (Up Arrow)"
                  >
                    <ChevronUp size={18} />
                  </button>
                  <button
                    onClick={() => {
                      const nextIdx = (currentChannelIndex + 1) % channels.length;
                      onSelectChannel(nextIdx);
                    }}
                    className="icon-btn"
                    style={{ width: 36, height: 36, color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                    title="Next Channel (Down Arrow)"
                  >
                    <ChevronDown size={18} />
                  </button>
                  <button
                    onClick={() => setIsMuted((m) => !m)}
                    className="icon-btn"
                    style={{ width: 36, height: 36, color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                    title="Mute / Unmute (M)"
                  >
                    {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                  </button>
                  {onJumpToLive && (
                    <button
                      onClick={onJumpToLive}
                      style={{
                        padding: '6px 12px',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#22c55e',
                        border: '1px solid rgba(34, 197, 94, 0.4)',
                        background: 'rgba(34, 197, 94, 0.12)',
                        borderRadius: 999,
                        cursor: 'pointer',
                      }}
                    >
                      ● LIVE
                    </button>
                  )}
                  <button
                    onClick={toggleFullscreen}
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '9999px',
                      padding: '8px 14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Minimize size={14} />
                    <span>Exit (F)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Info Block (PRD W-3: 24px spacing from player) */}
          <div style={{ marginTop: 24 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
                fontSize: 13,
                color: 'var(--ink-secondary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <span className={`channel-badge ${isBadgeFlipping ? 'flip' : ''}`}>
                CH {String(currentChannelIndex + 1).padStart(2, '0')}
              </span>
              <span>{activeChannel?.categoryName || 'Channel'}</span>
              <span>•</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#22c55e',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.08em',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                ON AIR
              </span>
              {isBuffering && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--accent)',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: 12,
                  }}
                >
                  <Loader2 size={13} className="animate-spin" />
                  Buffering…
                </span>
              )}
              <button
                onClick={handleShareChannel}
                className="btn-pill"
                title="Copy synchronized link to this channel"
                style={{
                  marginLeft: 'auto',
                  height: 28,
                  padding: '0 10px',
                  fontSize: 11,
                  textTransform: 'none',
                  letterSpacing: 0,
                }}
              >
                {copiedShare ? <Check size={13} /> : <Share2 size={13} />}
                <span>{copiedShare ? 'Channel Link Copied' : 'Share Channel'}</span>
              </button>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                marginTop: 10,
                marginBottom: 4,
              }}
            >
              {activeVideo?.title || 'Loading video…'}
            </h2>

            <p style={{ color: 'var(--ink-secondary)', fontSize: 15, fontWeight: 500 }}>
              {activeVideo?.sourceChannelTitle || 'YouTube'}
            </p>

            {/* Custom Controls (PRD W-4: 16px below title) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 20,
                padding: '12px 18px',
                background: 'var(--panel)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={onTogglePlay}
                className="icon-btn primary"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                style={{ width: 48, height: 48 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 2 }} />}
              </button>

              {/* Channel stepper buttons (The primary TV remote buttons) */}
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const nextIdx = (currentChannelIndex - 1 + channels.length) % channels.length;
                    onSelectChannel(nextIdx);
                  }}
                  className="icon-btn"
                  title="Previous Channel (Up Arrow)"
                  aria-label="Previous channel"
                  style={{ width: 38, height: 38 }}
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  onClick={() => {
                    const nextIdx = (currentChannelIndex + 1) % channels.length;
                    onSelectChannel(nextIdx);
                  }}
                  className="icon-btn"
                  title="Next Channel (Down Arrow)"
                  aria-label="Next channel"
                  style={{ width: 38, height: 38 }}
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              {/* Last Channel Recall Button */}
              {previousChannelIndex !== null && previousChannelIndex !== currentChannelIndex && (
                <button
                  onClick={onRecallLastChannel}
                  className="btn-pill"
                  title={`Flip back to CH ${String(previousChannelIndex + 1).padStart(2, '0')} (Press L or Backspace)`}
                  style={{
                    height: 36,
                    padding: '0 12px',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  <RotateCcw size={13} />
                  <span>LAST</span>
                </button>
              )}

              {/* Mute / Unmute Button */}
              <button
                onClick={() => setIsMuted((prev) => !prev)}
                className="icon-btn"
                title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                style={{
                  width: 38,
                  height: 38,
                  color: isMuted ? 'var(--accent)' : undefined,
                }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* Jump to Live broadcast button */}
              {onJumpToLive && (
                <button
                  onClick={onJumpToLive}
                  className="btn-pill"
                  title={
                    behindLiveSeconds > 0
                      ? `You are ${behindLiveSeconds}s behind live broadcast — click to catch up`
                      : 'Synced to live broadcast'
                  }
                  style={{
                    padding: '6px 14px',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: behindLiveSeconds > 0 ? '#f59e0b' : '#22c55e',
                    border:
                      behindLiveSeconds > 0
                        ? '1px solid rgba(245, 158, 11, 0.45)'
                        : '1px solid rgba(34, 197, 94, 0.35)',
                    background:
                      behindLiveSeconds > 0
                        ? 'rgba(245, 158, 11, 0.12)'
                        : 'rgba(34, 197, 94, 0.08)',
                    borderRadius: '9999px',
                    cursor: behindLiveSeconds > 0 ? 'pointer' : 'default',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: behindLiveSeconds > 0 ? '#f59e0b' : '#22c55e',
                      boxShadow:
                        behindLiveSeconds > 0 ? '0 0 6px #f59e0b' : '0 0 6px #22c55e',
                      display: 'inline-block',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  <span>
                    {behindLiveSeconds > 0
                      ? `JUMP TO LIVE (+${formatTime(behindLiveSeconds)})`
                      : 'LIVE'}
                  </span>
                </button>
              )}

              {/* Progress bar */}
              <div
                style={{
                  flex: 1,
                  minWidth: 80,
                  height: 6,
                  borderRadius: 99,
                  background: 'var(--subtle-bg)',
                  overflow: 'hidden',
                  margin: '0 6px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progressPercent}%`,
                    background: 'var(--ink)',
                    borderRadius: 99,
                    transition: 'width 0.25s linear',
                  }}
                />
              </div>

              {/* Time display */}
              <span
                style={{
                  fontSize: 13,
                  color: 'var(--ink-secondary)',
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap',
                  fontWeight: 500,
                }}
              >
                {formatTime(currentTime)} / {formatTime(effectiveDuration)}
              </span>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="icon-btn"
                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                style={{ width: 38, height: 38, flexShrink: 0 }}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: 'var(--ink-secondary)',
                opacity: 0.75,
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <span>Keys: 1–{channels.length} Tune Channel</span>
              <span>•</span>
              <span>↑/↓ Flip Channel</span>
              <span>•</span>
              <span>L Last Channel</span>
              <span>•</span>
              <span>M Mute</span>
              <span>•</span>
              <span>F Fullscreen</span>
            </div>
          </div>
        </main>

        {/* Side Column: Channels + Up Next Broadcast Schedule (PRD W-1, W-2) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Channel list */}
          <div>
            <h3
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-secondary)',
                marginBottom: 10,
              }}
            >
              Channels
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              {channels.map((ch, idx) => {
                const isActive = idx === currentChannelIndex;
                return (
                  <button
                    key={ch.categoryId + idx}
                    onClick={() => onSelectChannel(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      height: 44,
                      padding: '0 14px',
                      borderRadius: 'var(--radius-md)',
                      width: '100%',
                      textAlign: 'left',
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                      background: isActive ? 'var(--ink)' : 'var(--panel)',
                      color: isActive ? 'var(--bg)' : 'var(--ink)',
                      border: '1px solid',
                      borderColor: isActive ? 'transparent' : 'var(--border)',
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        opacity: isActive ? 0.8 : 0.6,
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        width: 24,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span style={{ flex: 1, textTransform: 'capitalize' }}>{ch.categoryName}</span>
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        background: `hsl(${ch.hue}, 85%, 55%)`,
                        boxShadow: isActive ? `0 0 8px hsl(${ch.hue}, 85%, 55%)` : 'none',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Up Next Schedule Preview (Non-clickable linear TV schedule) */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-secondary)',
                }}
              >
                Up Next on CH {String(currentChannelIndex + 1).padStart(2, '0')}
              </h3>
              <span style={{ fontSize: 11, color: 'var(--ink-secondary)', opacity: 0.75 }}>
                Linear Schedule
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {upNextList.map((slot, slotIdx) => {
                const { video, durationSec, startsInSec, startTimeMs } = slot;
                const minsAway = Math.max(1, Math.round(startsInSec / 60));
                return (
                  <div
                    key={video.youtubeVideoId + slot.videoIndex}
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                      textAlign: 'left',
                      padding: 10,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--panel)',
                      border: '1px solid var(--border)',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: 88,
                        height: 52,
                        borderRadius: 8,
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: '#111',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 4,
                          right: 4,
                          background: 'rgba(0,0,0,0.82)',
                          color: '#fff',
                          fontSize: 10,
                          fontWeight: 600,
                          padding: '1px 5px',
                          borderRadius: 4,
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {formatTime(durationSec)}
                      </span>
                    </div>

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 11,
                          fontWeight: 700,
                          color: slotIdx === 0 ? 'var(--accent)' : 'var(--ink-secondary)',
                          marginBottom: 3,
                        }}
                      >
                        <Clock size={11} />
                        <span>
                          {slotIdx === 0 ? `Next • in ${minsAway}m` : formatClockTime(startTimeMs)}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          lineHeight: 1.3,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {video.title}
                      </div>
                      <div style={{ color: 'var(--ink-secondary)', fontSize: 12, marginTop: 3 }}>
                        {video.sourceChannelTitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
