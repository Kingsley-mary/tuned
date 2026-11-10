'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChannelLineup, Video } from '../lib/types';
import { YouTubePlayer } from './YouTubePlayer';
import {
  Play,
  Pause,
  SkipForward,
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
} from 'lucide-react';

interface WatchScreenProps {
  channels: ChannelLineup[];
  currentChannelIndex: number;
  currentVideoIndex: number;
  isPlaying: boolean;
  theme: 'dark' | 'light' | 'system';
  onToggleTheme: () => void;
  onSelectChannel: (channelIndex: number) => void;
  onSelectVideo: (videoIndex: number) => void;
  onTogglePlay: () => void;
  onNextVideo: () => void;
  onOpenGuide: () => void;
  onOpenManage: () => void;
  onPowerOff: () => void;
}

export const WatchScreen: React.FC<WatchScreenProps> = ({
  channels,
  currentChannelIndex,
  currentVideoIndex,
  isPlaying,
  theme,
  onToggleTheme,
  onSelectChannel,
  onSelectVideo,
  onTogglePlay,
  onNextVideo,
  onOpenGuide,
  onOpenManage,
  onPowerOff,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [isChannelPulsing, setIsChannelPulsing] = useState<boolean>(false);
  const [isBadgeFlipping, setIsBadgeFlipping] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const playerFrameRef = useRef<HTMLDivElement>(null);

  const activeChannel = channels[currentChannelIndex] || channels[0];
  const videos = activeChannel?.videos || [];
  const activeVideo: Video | undefined = videos[currentVideoIndex] || videos[0];

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

  // Fullscreen toggle handler
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        if (playerFrameRef.current) {
          if (playerFrameRef.current.requestFullscreen) {
            await playerFrameRef.current.requestFullscreen();
          } else if ((playerFrameRef.current as any).webkitRequestFullscreen) {
            await (playerFrameRef.current as any).webkitRequestFullscreen();
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

  // Keyboard navigation (PRD W-10 + 'F' for Fullscreen)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === ' ') {
        e.preventDefault();
        onTogglePlay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNextVideo();
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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChannelIndex, channels.length, onTogglePlay, onNextVideo, onSelectChannel, toggleFullscreen]);

  // Compute up next list (3 videos)
  const upNextList = [1, 2, 3]
    .map((offset) => {
      const idx = (currentVideoIndex + offset) % (videos.length || 1);
      return {
        index: idx,
        video: videos[idx],
      };
    })
    .filter((item) => !!item.video);

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="app-container">
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
          <button onClick={onToggleTheme} className="icon-btn" aria-label="Toggle theme">
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
          {/* YouTube Player Frame (PRD D-1: Never overlap anything on top of player) */}
          <div
            ref={playerFrameRef}
            className={`player-tv-frame ${isChannelPulsing ? 'pulse-glow' : ''}`}
          >
            {activeVideo?.youtubeVideoId ? (
              <YouTubePlayer
                videoId={activeVideo.youtubeVideoId}
                isPlaying={isPlaying}
                onEnded={onNextVideo}
                onError={(errCode) => {
                  console.warn(`Video ${activeVideo.youtubeVideoId} error (${errCode}), skipping...`);
                  onNextVideo();
                }}
                onTimeUpdate={(cur, dur) => {
                  setCurrentTime(cur);
                  if (dur > 0) setDuration(dur);
                }}
                onBuffering={setIsBuffering}
              />
            ) : (
              <div
                style={{
                  aspectRatio: '16/9',
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

            {/* Exit Fullscreen Floating Button when Fullscreen */}
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                aria-label="Exit Fullscreen"
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  zIndex: 100,
                  background: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                }}
              >
                <Minimize size={15} />
                <span>Exit Fullscreen (F)</span>
              </button>
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
                gap: 12,
                marginTop: 20,
                padding: '12px 18px',
                background: 'var(--panel)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
              }}
            >
              <button
                onClick={onTogglePlay}
                className="icon-btn primary"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{ width: 48, height: 48 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 2 }} />}
              </button>

              <button
                onClick={onNextVideo}
                className="icon-btn"
                aria-label="Skip to next video"
                title="Next video (Arrow Right)"
              >
                <SkipForward size={18} />
              </button>

              {/* Channel stepper buttons */}
              <div style={{ display: 'flex', gap: 4 }}>
                <button
                  onClick={() => {
                    const nextIdx = (currentChannelIndex - 1 + channels.length) % channels.length;
                    onSelectChannel(nextIdx);
                  }}
                  className="icon-btn"
                  title="Previous Channel (Up Arrow)"
                  aria-label="Previous channel"
                  style={{ width: 36, height: 36 }}
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
                  style={{ width: 36, height: 36 }}
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 99,
                  background: 'var(--subtle-bg)',
                  overflow: 'hidden',
                  margin: '0 8px',
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
                {formatTime(currentTime)} / {formatTime(duration || activeVideo?.durationSec || 0)}
              </span>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="icon-btn"
                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                style={{ width: 38, height: 38, flexShrink: 0, marginLeft: 2 }}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>
          </div>
        </main>

        {/* Side Column: Channels + Up Next (PRD W-1, W-2) */}
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

          {/* Up Next List (PRD W-5) */}
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
              Up Next
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {upNextList.map(({ index, video }) => (
                <button
                  key={video.youtubeVideoId + index}
                  onClick={() => onSelectVideo(index)}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: 8,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--panel)',
                    border: '1px solid var(--border)',
                    width: '100%',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-focus)';
                    e.currentTarget.style.background = 'var(--panel-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--panel)';
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
                        background: 'rgba(0,0,0,0.8)',
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 600,
                        padding: '1px 4px',
                        borderRadius: 4,
                      }}
                    >
                      {formatTime(video.durationSec)}
                    </span>
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
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
                    <div style={{ color: 'var(--ink-secondary)', fontSize: 12, marginTop: 4 }}>
                      {video.sourceChannelTitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
