'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChannelLineup, Video } from '../lib/types';
import { YouTubePlayer, CaptionFontSize, CaptionTrack } from './YouTubePlayer';
import { recordVideoDuration, getVideoDuration, buildChannelSchedule } from '../lib/broadcast-clock';
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
  sleepTimerMode: SleepTimerMode;
  sleepRemainingSec: number | null;
  behindLiveSeconds?: number;
  onCycleSleepTimer: () => void;
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
  sleepTimerMode,
  sleepRemainingSec,
  behindLiveSeconds = 0,
  onCycleSleepTimer,
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
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const onNextVideoRef = useRef(onNextVideo);
  onNextVideoRef.current = onNextVideo;

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

  // Fullscreen toggle handler on tvStageRef (with iOS Safari graceful fallback)
  const toggleFullscreen = useCallback(async () => {
    try {
      const docAny = document as any;
      const stageAny = tvStageRef.current as any;
      if (!document.fullscreenElement && !docAny.webkitFullscreenElement) {
        if (stageAny?.requestFullscreen) {
          await stageAny.requestFullscreen();
        } else if (stageAny?.webkitRequestFullscreen) {
          await stageAny.webkitRequestFullscreen();
        } else {
          // iOS Safari does not support requestFullscreen on div elements; toggle immersive OSD-hidden state
          setIsFullscreen((prev) => !prev);
          setOsdOpen(false);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (docAny.webkitExitFullscreen) {
          await docAny.webkitExitFullscreen();
        }
      }
    } catch (err) {
      setIsFullscreen((prev) => !prev);
      setOsdOpen(false);
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
      onNextVideoRef.current();
    }, 2400);
  }, [onPowerOff, sleepTimerMode]);

  // Share synchronized channel link
  const handleShareChannel = useCallback(() => {
    if (!activeChannel || typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('ch', activeChannel.categoryId);
    if (navigator.share) {
      navigator.share({ title: `Tuned · ${activeChannel.categoryName}`, url: url.toString() }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url.toString()).catch(() => {});
    }
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
    setOsdOpen(true);
    if (osdTimerRef.current) clearTimeout(osdTimerRef.current);
    osdTimerRef.current = setTimeout(() => {
      if (!osdHoverRef.current && !captionsMenuOpenRef.current) setOsdOpen(false);
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
        setCaptionsMenuOpen(false);
        onOpenGuide();
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setCaptionsEnabled((prev) => !prev);
      } else if (e.key === 'Escape' && captionsMenuOpenRef.current) {
        e.preventDefault();
        setCaptionsMenuOpen(false);
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
      className={`tv-stage${osdOpen ? ' osd-on' : ''}`}
      style={
        {
          visibility: isHidden ? 'hidden' : 'visible',
          pointerEvents: isHidden ? 'none' : undefined,
          ['--h' as string]: hue,
        } as React.CSSProperties
      }
      onMouseMove={pokeOsd}
    >
      {/* Video layer: keep YouTubePlayer mounted at full dimensions so its GPU video surface is never evicted */}
      <div className="tv-video">
        {isBumperActive && (
          <div
            className="tv-bumper"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
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
        )}
        {activeVideo?.youtubeVideoId ? (
          <div
            className="tv-yt"
            style={{
              opacity: isBumperActive ? 0 : 1,
              pointerEvents: isBumperActive ? 'none' : undefined,
            }}
          >
            <YouTubePlayer
              videoId={activeVideo.youtubeVideoId}
              startSeconds={startSeconds}
              tuneKey={tuneKey}
              isPlaying={isPlaying && !isBumperActive}
              isMuted={isMuted}
              captionsEnabled={captionsEnabled}
              captionFontSize={captionFontSize}
              captionLanguage={captionLanguage}
              onCaptionTracksChange={setCaptionTracks}
              onEnded={handleVideoEndedNaturally}
              onError={(errCode) => {
                console.warn(`Video ${activeVideo.youtubeVideoId} error (${errCode}), skipping...`);
                onNextVideoRef.current();
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
        className="osd-top"
        onMouseEnter={() => (osdHoverRef.current = true)}
        onMouseLeave={() => {
          osdHoverRef.current = false;
          pokeOsd();
        }}
        onTouchStart={() => pokeOsd()}
      >
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
        className="osd-bottom"
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
                <span className="osd-row-time">{formatClockTime(slot.startTimeMs)}</span>
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
