'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChannelLineup } from '../lib/types';
import { ArrowLeft, Play, Radio, Clock } from 'lucide-react';
import {
  ScheduledProgram,
  getLiveBroadcastState,
  advanceChannelPlayback,
  buildChannelSchedule,
} from '../lib/broadcast-clock';

export interface ChannelSavedState {
  videoIndex: number;
  seekSeconds: number;
  leftAt: number;
}

interface GuideScreenProps {
  channels: ChannelLineup[];
  currentChannelIndex: number;
  currentVideoIndex: number;
  currentPlaybackSeconds: number;
  savedChannelStates: Map<string, ChannelSavedState>;
  completedVideoIds: Set<string>;
  onBackToWatch: () => void;
  onTuneChannel: (channelIndex: number) => void;
}

export const GuideScreen: React.FC<GuideScreenProps> = ({
  channels,
  currentChannelIndex,
  currentVideoIndex,
  currentPlaybackSeconds,
  savedChannelStates,
  completedVideoIds,
  onBackToWatch,
  onTuneChannel,
}) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.max(1, Math.round(seconds / 60));
    if (mins >= 60) {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    return `${mins}m`;
  };

  const formatClockTime = (epochMs: number) => {
    try {
      return new Date(epochMs).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  const PX_PER_MIN = 5;
  const WINDOW_MIN = 240;

  const [nowMs, setNowMs] = useState(() => Date.now());
  const [focus, setFocus] = useState<{ r: number; c: number } | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now()), 15000);
    return () => clearInterval(t);
  }, []);

  const HALF_HOUR = 30 * 60 * 1000;
  const winStart = Math.floor(nowMs / HALF_HOUR) * HALF_HOUR - HALF_HOUR;
  const winEnd = winStart + WINDOW_MIN * 60 * 1000;
  const trackWidth = WINDOW_MIN * PX_PER_MIN;
  const msToX = (ms: number) => ((ms - winStart) / 60000) * PX_PER_MIN;

  const rows = useMemo(() => {
    return channels.map((ch, chIdx) => {
      const isCurrentChannel = chIdx === currentChannelIndex;
      let chVideoIdx = 0;
      let chSeekSec = 0;

      if (isCurrentChannel) {
        chVideoIdx = currentVideoIndex;
        chSeekSec = currentPlaybackSeconds;
      } else {
        const saved = savedChannelStates.get(ch.categoryId);
        if (saved && ch.videos.length > 0) {
          const elapsedSec = (nowMs - saved.leftAt) / 1000;
          const adv = advanceChannelPlayback(
            ch.videos,
            saved.videoIndex,
            saved.seekSeconds,
            elapsedSec,
            new Set(completedVideoIds)
          );
          chVideoIdx = adv.videoIndex;
          chSeekSec = adv.seekSeconds;
        } else {
          const live = getLiveBroadcastState(
            ch.videos,
            ch.categoryId,
            Math.floor(nowMs / 1000),
            completedVideoIds
          );
          chVideoIdx = live.videoIndex;
          chSeekSec = live.seekSeconds;
        }
      }

      const schedule = buildChannelSchedule(ch.videos, chVideoIdx, chSeekSec, 14, nowMs).filter(
        (s) => s.startTimeMs < winEnd
      );
      return { ch, chIdx, isCurrentChannel, schedule };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channels, currentChannelIndex, currentVideoIndex, Math.floor(nowMs / 15000), winStart]);

  const activeChannel = channels[currentChannelIndex];
  const activeVideo = activeChannel?.videos?.[currentVideoIndex];

  const focusedRow = focus ? rows[focus.r] : undefined;
  const focusedSlot: ScheduledProgram | undefined =
    focusedRow?.schedule[focus!.c] ?? rows[currentChannelIndex]?.schedule[0];
  const focusedChannelIdx = focusedRow ? focusedRow.chIdx : currentChannelIndex;
  const focusedChannel = channels[focusedChannelIdx];

  const moveFocus = (r: number, c: number) => {
    const nr = Math.max(0, Math.min(rows.length - 1, r));
    const maxC = Math.max(0, (rows[nr]?.schedule.length ?? 1) - 1);
    const nc = Math.max(0, Math.min(maxC, c));
    setFocus({ r: nr, c: nc });
    const el = shellRef.current?.querySelector<HTMLElement>(`[data-r="${nr}"][data-c="${nc}"]`);
    el?.focus({ preventScroll: false });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        onBackToWatch();
        return;
      }
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      e.preventDefault();
      const cur = focus ?? { r: currentChannelIndex, c: 0 };
      // Moving vertically keeps the same moment in time, not the same column index.
      const keepTimeCol = (toRow: number) => {
        const refMs = rows[cur.r]?.schedule[cur.c]?.startTimeMs ?? nowMs;
        const sch = rows[toRow]?.schedule ?? [];
        let best = 0;
        sch.forEach((s, i) => {
          if (s.startTimeMs <= Math.max(refMs, nowMs) && s.endTimeMs > Math.max(refMs, nowMs)) best = i;
        });
        return best;
      };
      if (e.key === 'ArrowLeft') moveFocus(cur.r, cur.c - 1);
      else if (e.key === 'ArrowRight') moveFocus(cur.r, cur.c + 1);
      else if (e.key === 'ArrowUp') moveFocus(cur.r - 1, keepTimeCol(Math.max(0, cur.r - 1)));
      else moveFocus(cur.r + 1, keepTimeCol(Math.min(rows.length - 1, cur.r + 1)));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, rows, currentChannelIndex, nowMs]);

  const ticks: number[] = [];
  for (let t = winStart; t < winEnd; t += HALF_HOUR) ticks.push(t);

  const nowX = msToX(nowMs);

  return (
    <div className="app-container">
      <header className="top-nav">
        <button onClick={onBackToWatch} className="btn-pill primary" aria-label="Back to watching">
          <ArrowLeft size={16} />
          <span>Back to watching</span>
        </button>

        <div className="brand-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 20,
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            TV Guide
          </h1>
          <p style={{ color: 'var(--ink-secondary)', fontSize: 15, marginTop: 6 }}>
            Everything is live right now. Pick a show to tune in.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {activeChannel && activeVideo && (
            <button
              onClick={onBackToWatch}
              className="btn-pill"
              style={{ maxWidth: 360, overflow: 'hidden' }}
              title="Audio keeps playing while you browse. Click to return."
            >
              <Radio size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                CH {String(currentChannelIndex + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: 'var(--ink-secondary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {activeVideo.title}
              </span>
            </button>
          )}
          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
                lineHeight: 1,
              }}
            >
              {formatClockTime(nowMs)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4 }}>
              {new Date(nowMs).toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}
            </div>
          </div>
        </div>
      </div>

      <div className="guide-shell" ref={shellRef}>
        <div className="guide-scroll">
          <div className="guide-ruler">
            <div className="guide-corner">Channel</div>
            <div className="guide-ticks" style={{ width: trackWidth }}>
              {ticks.map((t) => (
                <div key={t} className="guide-tick" style={{ left: msToX(t) }}>
                  {formatClockTime(t)}
                </div>
              ))}
              <span className="guide-now-chip" style={{ left: nowX }}>
                NOW
              </span>
            </div>
          </div>

          <div style={{ position: 'relative', minWidth: 'max-content' }}>
            {rows.map(({ ch, chIdx, isCurrentChannel, schedule }, r) => {
              const hue = ch.hue;
              return (
                <div key={ch.categoryId + chIdx} className="guide-row">
                  <button
                    onClick={() => onTuneChannel(chIdx)}
                    className="guide-channel-header"
                    title={`Tune to CH ${String(chIdx + 1).padStart(2, '0')} ${ch.categoryName}`}
                  >
                    <span className="guide-ch-bar" style={{ background: `hsl(${hue}, 85%, 55%)`, opacity: isCurrentChannel ? 1 : 0.5 }} />
                    <span className="guide-ch-num">{String(chIdx + 1).padStart(2, '0')}</span>
                    <span className="guide-ch-name" style={{ color: isCurrentChannel ? 'var(--ink)' : undefined }}>
                      {ch.categoryName}
                    </span>
                  </button>

                  <div className="guide-track" style={{ width: trackWidth }}>
                    {schedule.map((slot, c) => {
                      const left = Math.max(0, msToX(slot.startTimeMs));
                      const right = Math.min(trackWidth, msToX(slot.endTimeMs));
                      const width = Math.max(48, right - left - 4);
                      const isWatchingNow = isCurrentChannel && slot.isLive;
                      const cutLeft = slot.startTimeMs < winStart;
                      const isFocused = focus?.r === r && focus?.c === c;
                      return (
                        <button
                          key={slot.video.youtubeVideoId + '_' + c}
                          data-r={r}
                          data-c={c}
                          onClick={() => onTuneChannel(chIdx)}
                          onFocus={() => setFocus({ r, c })}
                          onMouseEnter={() => setFocus({ r, c })}
                          title={`${slot.video.title} (${formatClockTime(slot.startTimeMs)})`}
                          className={`guide-slot${slot.isLive ? ' live' : ''}${isWatchingNow ? ' watching' : ''}${isFocused ? ' focused' : ''}`}
                          style={{ left: left + 2, width, ['--slot-hue' as string]: hue } as React.CSSProperties}
                        >
                          <span className="guide-slot-title">
                            {isWatchingNow && <Play size={11} fill="currentColor" style={{ flexShrink: 0 }} />}
                            {cutLeft && <span style={{ opacity: 0.5 }}>‹</span>}
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{slot.video.title}</span>
                          </span>
                          <span className="guide-slot-meta">
                            {slot.isLive
                              ? `On air · ${Math.max(1, Math.round((slot.durationSec * (1 - slot.progressPercent / 100)) / 60))}m left`
                              : `${formatClockTime(slot.startTimeMs)} · ${formatDuration(slot.durationSec)}`}
                          </span>
                          {slot.isLive && (
                            <span className="guide-slot-progress" style={{ width: `${slot.progressPercent}%` }} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="guide-now-line" style={{ left: `calc(var(--guide-ch-w, 168px) + ${nowX - 1}px)` }} />
          </div>
        </div>

        {focusedSlot && focusedChannel && (
          <div className="guide-detail">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, color: 'var(--ink-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                CH {String(focusedChannelIdx + 1).padStart(2, '0')} · {focusedChannel.categoryName} ·{' '}
                {formatClockTime(focusedSlot.startTimeMs)} – {formatClockTime(focusedSlot.endTimeMs)}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 4,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {focusedSlot.video.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginTop: 2 }}>
                {focusedSlot.video.sourceChannelTitle} · {formatDuration(focusedSlot.durationSec)}
              </div>
            </div>
            <button onClick={() => onTuneChannel(focusedChannelIdx)} className="btn-pill primary" style={{ flexShrink: 0 }}>
              <Play size={14} fill="currentColor" />
              <span>{focusedSlot.isLive ? 'Watch now' : 'Tune to channel'}</span>
            </button>
          </div>
        )}
      </div>

      <div className="guide-hints">
        <span><span className="kbd">←↑↓→</span>Browse</span>
        <span><span className="kbd">Enter</span>Tune in</span>
        <span><span className="kbd">Esc</span>Back to watching</span>
      </div>
    </div>
  );
};