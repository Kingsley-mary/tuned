'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChannelLineup } from '../lib/types';
import { Play, Radio, Tv } from 'lucide-react';
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
    <div className="gd-screen" style={{ ['--h' as string]: focusedChannel?.hue ?? 355 } as React.CSSProperties}>
      <header className="gd-header">
        <div>
          <div className="brand-logo" style={{ color: '#fff' }}>
            <span className="brand-dot" />
            <span>tuned</span>
          </div>
          <div className="gd-title">
            <Tv size={14} /> TV Guide
          </div>
        </div>
        <div className="gd-clock">
          <div className="gd-date">{new Date(nowMs).toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}</div>
          <div className="gd-time">{formatClockTime(nowMs)}</div>
        </div>
      </header>

      <div className="gd-grid" ref={shellRef}>
        <div className="guide-scroll gd-scroll">
          <div className="guide-ruler gd-ruler">
            <div className="guide-corner gd-corner">Today</div>
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
              const rowFocused = focus?.r === r;
              return (
                <div key={ch.categoryId + chIdx} className={`guide-row gd-row${rowFocused ? ' row-focused' : ''}`}>
                  <button
                    onClick={() => onTuneChannel(chIdx)}
                    className={`guide-channel-header gd-channel${isCurrentChannel ? ' current' : ''}`}
                    style={{ ['--h' as string]: ch.hue } as React.CSSProperties}
                    title={`Tune to CH ${String(chIdx + 1).padStart(2, '0')} ${ch.categoryName}`}
                  >
                    <span className="gd-ch-num">{String(chIdx + 1).padStart(2, '0')}</span>
                    <span className="gd-ch-name">{ch.categoryName}</span>
                    {isCurrentChannel && <Radio size={13} className="gd-ch-live" />}
                  </button>

                  <div className="guide-track" style={{ width: trackWidth }}>
                    {schedule.map((slot, c) => {
                      const left = Math.max(0, msToX(slot.startTimeMs));
                      const right = Math.min(trackWidth, msToX(slot.endTimeMs));
                      const width = Math.max(20, right - left - 6);
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
                          className={`gd-slot${slot.isLive ? ' live' : ''}${isWatchingNow ? ' watching' : ''}${isFocused ? ' focused' : ''}`}
                          style={{ left: left + 3, width }}
                        >
                          <span className="gd-slot-title">
                            {isWatchingNow && <Play size={11} fill="currentColor" style={{ flexShrink: 0 }} />}
                            {cutLeft && <span style={{ opacity: 0.5 }}>‹</span>}
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{slot.video.title}</span>
                          </span>
                          {slot.isLive && <span className="gd-slot-progress" style={{ width: `${slot.progressPercent}%` }} />}
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
      </div>

      <footer className="gd-footer">
        {focusedSlot && focusedChannel && (
          <div className="gd-selected">
            <span className="gd-sel-time">
              {formatClockTime(focusedSlot.startTimeMs)} – {formatClockTime(focusedSlot.endTimeMs)}
            </span>
            <span className="gd-sel-title">{focusedSlot.video.title}</span>
            <span className="gd-sel-src">
              CH {String(focusedChannelIdx + 1).padStart(2, '0')} · {focusedChannel.categoryName} · {focusedSlot.video.sourceChannelTitle}
            </span>
            <span className="gd-sel-badge">{formatDuration(focusedSlot.durationSec)}</span>
          </div>
        )}
        <div className="gd-legend">
          <button onClick={() => focusedSlot && onTuneChannel(focusedChannelIdx)}>
            Watch <span className="kbd-osd">ENTER</span>
          </button>
          <span>
            Browse <span className="kbd-osd">←↑↓→</span>
          </span>
          <button onClick={onBackToWatch}>
            Return <span className="kbd-osd">ESC</span>
          </button>
        </div>
      </footer>
    </div>
  );
};