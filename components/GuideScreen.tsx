'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { ChannelLineup } from '../lib/types';
import { getLiveBroadcastState, buildChannelSchedule } from '../lib/broadcast-clock';

export interface ChannelSavedState {
  videoIndex: number;
  seekSeconds: number;
  savedAtMs: number;
  completedVideoIds: Set<string>;
}

export interface GuideScreenProps {
  channels: ChannelLineup[];
  currentChannelIndex: number;
  currentVideoIndex: number;
  currentPlaybackSeconds?: number;
  savedChannelStates?: Map<string, ChannelSavedState>;
  completedVideoIds?: Set<string>;
  onBackToWatch: () => void;
  onTuneChannel: (channelIndex: number) => void;
}

interface GuideSlot {
  id: string;
  s: number; // minutes from start of today (00:00 local)
  e: number; // minutes from start of today (00:00 local)
  t: string;
  src: string;
  videoId: string;
}

const VIS = 7;
const WIN = 120; // 120 minutes

const pad = (n: number) => String(n).padStart(2, '0');

const hm = (m: number) => {
  const norm = ((Math.floor(m) % 1440) + 1440) % 1440;
  return `${pad(Math.floor(norm / 60))}:${pad(norm % 60)}`;
};

const dur = (d: number) => {
  const mins = Math.max(1, Math.round(d));
  return mins >= 60 ? `${Math.floor(mins / 60)}h ${pad(mins % 60)}m` : `${mins}m`;
};

function getDayStartMs(nowMs: number): number {
  const d = new Date(nowMs);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function GuideScreen({
  channels,
  currentChannelIndex,
  currentVideoIndex,
  currentPlaybackSeconds = 0,
  completedVideoIds,
  onBackToWatch,
  onTuneChannel,
}: GuideScreenProps) {
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  const dayStartMs = useMemo(() => getDayStartMs(nowMs), [nowMs]);
  const nowMin = (nowMs - dayStartMs) / 60000;

  // S.r (selected channel row), S.top (top visible row), S.t (time cursor), S.w0 (window start)
  const [selRow, setSelRow] = useState<number>(() =>
    Math.max(0, Math.min(channels.length - 1, currentChannelIndex))
  );
  const [topRow, setTopRow] = useState<number>(() => {
    const r = Math.max(0, Math.min(channels.length - 1, currentChannelIndex));
    if (r >= VIS) return Math.min(Math.max(0, channels.length - VIS), r - VIS + 1);
    return 0;
  });
  const [selTime, setSelTime] = useState<number>(() => (Date.now() - getDayStartMs(Date.now())) / 60000);
  const [winStart, setWinStart] = useState<number>(() => (Date.now() - getDayStartMs(Date.now())) / 60000);

  const [toastMsg, setToastMsg] = useState<string>('');
  const [toastOn, setToastOn] = useState<boolean>(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowsRef = useRef<HTMLDivElement | null>(null);

  const flash = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastOn(false), 2200);
  }, []);

  // Update clock every 15s and keep w0/t advancing with live clock just like Tuned — TV Guide.html
  useEffect(() => {
    const id = setInterval(() => {
      const nextMs = Date.now();
      const nextDayStart = getDayStartMs(nextMs);
      const nextNowMin = (nextMs - nextDayStart) / 60000;
      setNowMs((prevMs) => {
        const prevNowMin = (prevMs - getDayStartMs(prevMs)) / 60000;
        setWinStart((w0) => (Math.abs(w0 - prevNowMin) < 1 ? nextNowMin : Math.max(w0, nextNowMin)));
        setSelTime((t) => Math.max(t, nextNowMin));
        return nextMs;
      });
    }, 15000);
    return () => clearInterval(id);
  }, []);

  // Build real linear TV schedule for each channel
  const schedules: GuideSlot[][] = useMemo(() => {
    const nowEpochSec = Math.floor(nowMs / 1000);
    return channels.map((ch, idx) => {
      let activeIdx = 0;
      let activeSeek = 0;

      if (idx === currentChannelIndex && currentPlaybackSeconds > 0) {
        activeIdx = currentVideoIndex;
        activeSeek = currentPlaybackSeconds;
      } else {
        const live = getLiveBroadcastState(
          ch.videos,
          ch.categoryId,
          nowEpochSec,
          completedVideoIds
        );
        activeIdx = live.videoIndex;
        activeSeek = live.seekSeconds;
      }

      const raw = buildChannelSchedule(ch.videos, activeIdx, activeSeek, 36, nowMs);
      return raw.map((slot, sIdx) => ({
        id: `${ch.categoryId}-${sIdx}-${slot.video.youtubeVideoId}`,
        s: (slot.startTimeMs - dayStartMs) / 60000,
        e: (slot.endTimeMs - dayStartMs) / 60000,
        t: slot.video.title,
        src: slot.video.sourceChannelTitle,
        videoId: slot.video.youtubeVideoId,
      }));
    });
  }, [
    channels,
    currentChannelIndex,
    currentVideoIndex,
    currentPlaybackSeconds,
    completedVideoIds,
    Math.floor(nowMs / 15000),
    dayStartMs,
  ]);

  const at = useCallback(
    (r: number, t: number): GuideSlot | undefined => {
      const list = schedules[r] || [];
      return list.find((p) => p.s <= t && t < p.e) || list.find((p) => p.e > nowMin) || list[0];
    },
    [schedules, nowMin]
  );

  // fit() logic from Tuned — TV Guide.html
  const fittedTop = useMemo(() => {
    let top = topRow;
    if (selRow < top) top = selRow;
    if (selRow >= top + VIS) top = selRow - VIS + 1;
    const maxTop = Math.max(0, channels.length - VIS);
    return Math.max(0, Math.min(maxTop, top));
  }, [selRow, topRow, channels.length]);

  useEffect(() => {
    if (fittedTop !== topRow) setTopRow(fittedTop);
  }, [fittedTop, topRow]);

  const selectedSlot = useMemo(() => at(selRow, selTime), [at, selRow, selTime]);

  const fittedW0 = useMemo(() => {
    let w0 = winStart;
    if (selectedSlot) {
      const ps = Math.max(selectedSlot.s, nowMin);
      if (ps < w0 || ps >= w0 + WIN) w0 = ps;
    }
    if (w0 < nowMin) w0 = nowMin;
    return w0;
  }, [winStart, selectedSlot, nowMin]);

  useEffect(() => {
    if (Math.abs(fittedW0 - winStart) > 0.01) setWinStart(fittedW0);
  }, [fittedW0, winStart]);

  const w0 = fittedW0;
  const w1 = w0 + WIN;

  const move = useCallback(
    (dr: number, dt: number) => {
      if (dr) {
        setSelRow((prev) => Math.max(0, Math.min(channels.length - 1, prev + dr)));
      }
      if (dt) {
        const list = schedules[selRow] || [];
        const cur = at(selRow, selTime);
        const idx = cur ? list.findIndex((p) => p.id === cur.id) : -1;
        const next = list[idx + dt];
        if (next && next.e > nowMin) {
          setSelTime(Math.max(next.s, nowMin));
        }
      }
    },
    [channels.length, schedules, selRow, selTime, at, nowMin]
  );

  const watchSelected = useCallback(
    (targetRow = selRow, targetSlot = selectedSlot) => {
      const ch = channels[targetRow];
      if (!ch) return;
      const isLiveSlot = !targetSlot || (targetSlot.s <= nowMin && nowMin < targetSlot.e);
      if (isLiveSlot) {
        onTuneChannel(targetRow);
      } else {
        flash(
          `Tuning to CH ${pad(targetRow + 1)} ${ch.categoryName.toUpperCase()} — ${targetSlot.t}`
        );
        onTuneChannel(targetRow);
      }
    },
    [selRow, selectedSlot, channels, nowMin, onTuneChannel, flash]
  );

  // Keyboard navigation matching Tuned — TV Guide.html
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key;
      if (k === 'ArrowUp') {
        e.preventDefault();
        move(-1, 0);
      } else if (k === 'ArrowDown') {
        e.preventDefault();
        move(1, 0);
      } else if (k === 'ArrowLeft') {
        e.preventDefault();
        move(0, -1);
      } else if (k === 'ArrowRight') {
        e.preventDefault();
        move(0, 1);
      } else if (k === 'Enter') {
        e.preventDefault();
        watchSelected();
      } else if (k === 'Escape' || k === 'g' || k === 'G') {
        e.preventDefault();
        onBackToWatch();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [move, watchSelected, onBackToWatch]);

  // Wheel scrolling matching Tuned — TV Guide.html
  useEffect(() => {
    const el = rowsRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const maxTop = Math.max(0, channels.length - VIS);
      const nextTop = Math.max(0, Math.min(maxTop, fittedTop + (e.deltaY > 0 ? 1 : -1)));
      setTopRow(nextTop);
      setSelRow((r) => {
        if (r < nextTop) return nextTop;
        if (r >= nextTop + VIS) return Math.min(channels.length - 1, nextTop + VIS - 1);
        return r;
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [channels.length, fittedTop]);

  // Format header clock & date matching Tuned — TV Guide.html
  const clockDateObj = new Date(nowMs);
  const clockText = `${pad(clockDateObj.getHours())}:${pad(clockDateObj.getMinutes())}`;
  const dateText = clockDateObj.toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  // 30-min time markers matching Tuned — TV Guide.html
  const timeTicks = useMemo(() => {
    const base = Math.ceil(w0 / 30) * 30;
    return [0, 1, 2, 3, 4]
      .map((k) => base + k * 30)
      .filter((m) => m < w0 + WIN - 12);
  }, [w0]);

  const visibleRowIndices = useMemo(() => {
    const indices: number[] = [];
    const end = Math.min(fittedTop + VIS, channels.length);
    for (let r = fittedTop; r < end; r++) indices.push(r);
    return indices;
  }, [fittedTop, channels.length]);

  const nowFraction = (nowMin - w0) / WIN;
  const selChannel = channels[selRow];

  return (
    <div className="tvg-guide-screen">
      <div className="bg" />
      <div className={`toast ${toastOn ? 'on' : ''}`}>{toastMsg}</div>

      <div className="app">
        <div className="top">
          <div>
            <div className="lg">
              <i />
              tuned
            </div>
            <div className="tg">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 3l4 4 4-4" />
              </svg>
              TV Guide
            </div>
          </div>
          <div className="clock">
            <small>{dateText}</small>
            <b>{clockText}</b>
          </div>
        </div>

        <div className="scroll">
          <div>
            <div className="axis">
              <div className="today">Today</div>
              <div className="times">
                {timeTicks.map((m) => (
                  <span key={m} style={{ left: `${((m - w0) / WIN) * 100}%` }}>
                    {hm(m)}
                  </span>
                ))}
              </div>
            </div>

            <div className="rows" ref={rowsRef}>
              {visibleRowIndices.map((r) => {
                const c = channels[r];
                const rowSlots = (schedules[r] || []).filter(
                  (p) =>
                    p.e > w0 &&
                    p.s < w1 &&
                    (Math.min(p.e, w1) - Math.max(p.s, w0) >= 3 ||
                      (selectedSlot?.id === p.id && r === selRow))
                );

                return (
                  <div key={c.categoryId} className={`row ${r === selRow ? 'sel' : ''}`}>
                    <button
                      type="button"
                      className="ch"
                      onClick={() => {
                        if (selRow === r) {
                          onTuneChannel(r);
                        } else {
                          setSelRow(r);
                        }
                      }}
                    >
                      <span>{c.categoryName}</span>
                    </button>

                    <div className="trk">
                      {rowSlots.map((p, i) => {
                        let a = Math.max(p.s, w0);
                        if (i === 0 && a - w0 < 3) a = w0;
                        const b = Math.min(p.e, w1);
                        const air = p.s <= nowMin && nowMin < p.e;
                        const isOn = selectedSlot?.id === p.id && r === selRow;
                        const cl = p.s < w0 - 0.5;
                        const cr = p.e > w1 + 0.5;
                        const leftPct = ((a - w0) / WIN) * 100;
                        const widthPct = Math.max(2, ((b - a) / WIN) * 100);

                        return (
                          <button
                            key={p.id}
                            type="button"
                            className={`pr ${air ? 'air' : ''} ${isOn ? 'on' : ''} ${cl ? 'cl' : ''} ${cr ? 'cr' : ''}`}
                            style={{
                              left: `${leftPct}%`,
                              width: `calc(${widthPct}% - 5px)`,
                            }}
                            onClick={() => {
                              const same =
                                selRow === r && selectedSlot?.id === p.id;
                              setSelRow(r);
                              setSelTime(Math.max(p.s, nowMin));
                              if (same) {
                                watchSelected(r, p);
                              }
                            }}
                          >
                            <span>{p.t}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {nowFraction >= 0 && nowFraction <= 1 && (
                <div
                  className="now"
                  style={{ '--p': nowFraction } as React.CSSProperties}
                >
                  <b>NOW</b>
                </div>
              )}

              <div className="sbar">
                <i
                  style={{
                    top: `${(fittedTop / Math.max(1, channels.length)) * 100}%`,
                    height: `${Math.min(1, VIS / Math.max(1, channels.length)) * 100}%`,
                  }}
                />
              </div>
            </div>

            {selChannel && selectedSlot && (
              <div className="info">
                <div className="tm">
                  {hm(selectedSlot.s)} – {hm(selectedSlot.e)}
                </div>
                <div className="tt">{selectedSlot.t}</div>
                <div className="rt">
                  <span>
                    CH {pad(selRow + 1)} · {selChannel.categoryName} · {selectedSlot.src}
                  </span>
                  <b className="bdg">{dur(selectedSlot.e - selectedSlot.s)}</b>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="keys">
          <div onClick={() => watchSelected()} style={{ cursor: 'pointer' }}>
            Watch<span className="k">Enter</span>
          </div>
          <div>
            Browse<span className="k">↑ ↓</span>
          </div>
          <div onClick={onBackToWatch} style={{ cursor: 'pointer' }}>
            Return<span className="k">Esc</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideScreen;
