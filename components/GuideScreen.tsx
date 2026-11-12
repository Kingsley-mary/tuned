'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { ChannelLineup } from '../lib/types';
import { getLiveBroadcastState, buildChannelSchedule, getVideoDuration, getSyncedNowMs, getDailyChannelLineup, getMarathonScheduleLabel } from '../lib/broadcast-clock';
import { computeChannelTransitions } from '../lib/bumpers';

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
  isMarathon?: boolean;
}

const VIS = 7;

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

/**
 * Anchors the live window start 15-30 minutes before `nowMin` on a clean 15-minute boundary
 * so the NOW tracker line is always clearly visible inside the timeline and aligned with the time ticks.
 */
function getLiveWindowStart(nowMin: number): number {
  return Math.floor((nowMin - 15) / 15) * 15;
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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Use 60-minute timeline window on mobile phones so program titles have plenty of room; 90 minutes on desktop
  const WIN = isMobile ? 60 : 90;

  const dayStartMs = useMemo(() => getDayStartMs(nowMs), [nowMs]);
  const nowMin = (nowMs - dayStartMs) / 60000;
  const liveW0 = useMemo(() => getLiveWindowStart(nowMin), [Math.floor(nowMin)]);

  const safeCurrentCh = Math.max(0, Math.min(channels.length - 1, currentChannelIndex));

  // Selected row & time cursor for inspecting programs
  const [selRow, setSelRow] = useState<number>(safeCurrentCh);
  const [topRow, setTopRow] = useState<number>(() => {
    if (safeCurrentCh >= VIS) {
      return Math.min(Math.max(0, channels.length - VIS), safeCurrentCh - Math.floor(VIS / 2));
    }
    return 0;
  });
  const [selSlotId, setSelSlotId] = useState<string | null>(null);
  const [winOffsetMin, setWinOffsetMin] = useState<number>(0);

  const [toastMsg, setToastMsg] = useState<string>('');
  const [toastOn, setToastOn] = useState<boolean>(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowsRef = useRef<HTMLDivElement | null>(null);
  const touchRef = useRef<{ x: number; y: number; startTop: number; startOffset: number } | null>(null);

  // Sync highlighted/selected row whenever currentChannelIndex changes
  useEffect(() => {
    const chIdx = Math.max(0, Math.min(channels.length - 1, currentChannelIndex));
    setSelRow(chIdx);
    setSelSlotId(null);
    setWinOffsetMin(0);
  }, [currentChannelIndex, channels.length]);

  const flash = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastOn(false), 2200);
  }, []);

  // Tick real-time clock every 1 second so the NOW line and clock track live time continuously
  useEffect(() => {
    setNowMs(getSyncedNowMs());
    const id = setInterval(() => {
      setNowMs(getSyncedNowMs());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Build continuous linear schedule for each channel (including preceding slots back to w0 and upcoming slots)
  const scheduleAnchorMs = useMemo(() => Math.floor(nowMs / 10000) * 10000, [Math.floor(nowMs / 10000)]);

  const schedules: GuideSlot[][] = useMemo(() => {
    const nowEpochSec = Math.floor(scheduleAnchorMs / 1000);
    return channels.map((ch, idx) => {
      if (!ch.videos || ch.videos.length === 0) return [];
      const dailyVideos = getDailyChannelLineup(ch.videos, ch.categoryId, scheduleAnchorMs);
      if (!dailyVideos || dailyVideos.length === 0) return [];

      let activeIdx = 0;
      let activeSeek = 0;

      if (idx === currentChannelIndex && currentPlaybackSeconds > 0) {
        activeIdx = currentVideoIndex;
        activeSeek = currentPlaybackSeconds + Math.max(0, (scheduleAnchorMs - nowMs) / 1000);
      } else {
        const live = getLiveBroadcastState(
          dailyVideos,
          ch.categoryId,
          nowEpochSec,
          completedVideoIds
        );
        activeIdx = live.videoIndex;
        activeSeek = live.seekSeconds;
      }

      const transitions = computeChannelTransitions(dailyVideos, ch.categoryId);
      const forward = buildChannelSchedule(
        dailyVideos,
        activeIdx,
        activeSeek,
        Math.min(36, dailyVideos.length),
        scheduleAnchorMs,
        ch.categoryId
      );
      const forwardSlots: GuideSlot[] = forward.map((slot, sIdx) => ({
        id: `${ch.categoryId}-f${sIdx}-${slot.video.youtubeVideoId}`,
        s: (slot.startTimeMs - dayStartMs) / 60000,
        e: (slot.endTimeMs - dayStartMs) / 60000,
        t: slot.video.title,
        src: slot.video.sourceChannelTitle,
        videoId: slot.video.youtubeVideoId,
      }));

      // Keep appending wrapped slots until the schedule covers the full scrollable horizon (+6h)
      const maxTargetMin = liveW0 + 460;
      const lastForwardSlot = forward[forward.length - 1];
      const lastForwardBreakMin = lastForwardSlot
        ? (transitions[lastForwardSlot.videoIndex]?.totalBreakSec ?? 0) / 60
        : 0;
      let forwardCursorMin = (forwardSlots[forwardSlots.length - 1]?.e ?? (scheduleAnchorMs - dayStartMs) / 60000) + lastForwardBreakMin;
      let nextOffset = forwardSlots.length;
      while (forwardCursorMin < maxTargetMin && nextOffset < 200) {
        const nextIdx = (activeIdx + nextOffset) % dailyVideos.length;
        const vid = dailyVideos[nextIdx];
        const durMin = Math.max(1 / 60, getVideoDuration(vid) / 60);
        const breakMin = (transitions[nextIdx]?.totalBreakSec ?? 0) / 60;
        const slotStart = forwardCursorMin;
        const slotEnd = slotStart + durMin;
        forwardSlots.push({
          id: `${ch.categoryId}-f${nextOffset}-${vid.youtubeVideoId}`,
          s: slotStart,
          e: slotEnd,
          t: vid.title,
          src: vid.sourceChannelTitle,
          videoId: vid.youtubeVideoId,
        });
        forwardCursorMin = slotEnd + breakMin;
        nextOffset++;
      }

      // Prepend preceding videos before the currently airing show so the left side of the NOW line is filled
      const pastSlots: GuideSlot[] = [];
      let cursorStartMin = forwardSlots[0] ? forwardSlots[0].s : (scheduleAnchorMs - dayStartMs) / 60000;
      const minTargetMin = liveW0 - 60;
      let stepBack = 1;
      while (cursorStartMin > minTargetMin && stepBack <= 200) {
        const prevIdx =
          (((activeIdx - stepBack) % dailyVideos.length) + dailyVideos.length) % dailyVideos.length;
        const prevVid = dailyVideos[prevIdx];
        const prevDurMin = getVideoDuration(prevVid) / 60;
        const prevBreakMin = (transitions[prevIdx]?.totalBreakSec ?? 0) / 60;
        const prevEndMin = cursorStartMin - prevBreakMin;
        const prevStartMin = prevEndMin - prevDurMin;
        pastSlots.unshift({
          id: `${ch.categoryId}-p${stepBack}-${prevVid.youtubeVideoId}`,
          s: prevStartMin,
          e: prevEndMin,
          t: prevVid.title,
          src: prevVid.sourceChannelTitle,
          videoId: prevVid.youtubeVideoId,
        });
        cursorStartMin = prevStartMin;
        stepBack++;
      }

      const allSlots = [...pastSlots, ...forwardSlots];
      // Mark marathon slots: if creator matches previous or next video on this channel
      return allSlots.map((slot, sIdx) => {
        const prev = allSlots[sIdx - 1];
        const next = allSlots[sIdx + 1];
        const src = slot.src?.trim();
        const isMarathon = Boolean(
          src &&
          ((prev?.src && prev.src.trim().toLowerCase() === src.toLowerCase()) ||
           (next?.src && next.src.trim().toLowerCase() === src.toLowerCase()))
        );
        return {
          ...slot,
          isMarathon,
        };
      });
    });
  }, [
    channels,
    currentChannelIndex,
    currentVideoIndex,
    currentPlaybackSeconds,
    completedVideoIds,
    scheduleAnchorMs,
    dayStartMs,
    liveW0,
  ]);

  // Find currently airing slot on a row
  const getAiringSlot = useCallback(
    (r: number): GuideSlot | undefined => {
      const list = schedules[r] || [];
      return list.find((p) => p.s <= nowMin && nowMin < p.e) || list.find((p) => p.e > nowMin) || list[0];
    },
    [schedules, nowMin]
  );

  // Currently selected slot on selRow
  const selectedSlot = useMemo((): GuideSlot | undefined => {
    const list = schedules[selRow] || [];
    if (selSlotId) {
      const found = list.find((p) => p.id === selSlotId);
      if (found) return found;
    }
    return getAiringSlot(selRow);
  }, [schedules, selRow, selSlotId, getAiringSlot]);

  // Keep selRow visible inside [fittedTop, fittedTop + VIS)
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

  const w0 = liveW0 + winOffsetMin;
  const w1 = w0 + WIN;

  // Move focus with keyboard arrows or buttons
  const move = useCallback(
    (dr: number, dt: number) => {
      if (dr) {
        const nextRow = Math.max(0, Math.min(channels.length - 1, selRow + dr));
        setSelRow(nextRow);
        const targetList = schedules[nextRow] || [];
        const curMid = selectedSlot ? Math.max(selectedSlot.s + 1, nowMin) : nowMin;
        const match =
          targetList.find((p) => p.s <= curMid && curMid < p.e) || getAiringSlot(nextRow);
        setSelSlotId(match ? match.id : null);
      }
      if (dt) {
        const list = schedules[selRow] || [];
        const cur = selectedSlot || getAiringSlot(selRow);
        const idx = cur ? list.findIndex((p) => p.id === cur.id) : -1;
        const next = list[idx + dt];
        if (next && next.e > liveW0) {
          setSelSlotId(next.id);
          const slotStart = Math.max(next.s, liveW0);
          if (slotStart >= w1 - 10) {
            setWinOffsetMin((off) => off + 30);
          } else if (slotStart < w0) {
            setWinOffsetMin((off) => Math.max(0, off - 30));
          }
        }
      }
    },
    [channels.length, selRow, schedules, selectedSlot, nowMin, getAiringSlot, liveW0, w0, w1]
  );

  const handleTune = useCallback(
    (targetRow: number, targetSlot?: GuideSlot) => {
      const ch = channels[targetRow];
      if (!ch) return;
      const slot = targetSlot || getAiringSlot(targetRow);
      const isLiveSlot = !slot || (slot.s <= nowMin && nowMin < slot.e);
      if (!isLiveSlot && slot) {
        flash(
          `Tuning to CH ${pad(targetRow + 1)} ${ch.categoryName.toUpperCase()} (Live Now)`
        );
      }
      onTuneChannel(targetRow);
    },
    [channels, getAiringSlot, nowMin, onTuneChannel, flash]
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
        handleTune(selRow, selectedSlot);
      } else if (k === 'Escape' || k === 'g' || k === 'G') {
        e.preventDefault();
        onBackToWatch();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [move, handleTune, selRow, selectedSlot, onBackToWatch]);

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

  // Mobile Touch Drag/Swipe on Guide rows (vertical = scroll channels, horizontal = scroll timeline)
  const handleRowsTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touchRef.current = {
      x: t.clientX,
      y: t.clientY,
      startTop: fittedTop,
      startOffset: winOffsetMin,
    };
  };

  const handleRowsTouchEnd = (e: React.TouchEvent) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    if (!t) return;

    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    if (Math.abs(dy) > 36 && Math.abs(dy) >= Math.abs(dx)) {
      const rowsDelta = dy < 0 ? 2 : -2;
      const maxTop = Math.max(0, channels.length - VIS);
      const nextTop = Math.max(0, Math.min(maxTop, start.startTop + rowsDelta));
      setTopRow(nextTop);
      setSelRow((r) => {
        const nextR = Math.max(0, Math.min(channels.length - 1, r + (dy < 0 ? 1 : -1)));
        if (nextR < nextTop) return nextTop;
        if (nextR >= nextTop + VIS) return Math.min(channels.length - 1, nextTop + VIS - 1);
        return nextR;
      });
    } else if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) {
      const timeStep = dx < 0 ? 30 : -30;
      setWinOffsetMin((off) => Math.max(0, Math.min(360, off + timeStep)));
    }
  };

  // Format header clock & date matching Tuned — TV Guide.html
  const clockDateObj = new Date(nowMs);
  const clockText = `${pad(clockDateObj.getHours())}:${pad(clockDateObj.getMinutes())}`;
  const dateText = clockDateObj.toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  // 30-min time markers aligned to the timeline window [w0, w0 + WIN]
  const timeTicks = useMemo(() => {
    const step = isMobile ? 30 : 30;
    const firstTick = Math.ceil(w0 / step) * step;
    const ticks: number[] = [];
    for (let m = firstTick; m < w0 + WIN - 6; m += step) {
      ticks.push(m);
    }
    return ticks;
  }, [w0, WIN, isMobile]);

  const visibleRowIndices = useMemo(() => {
    const indices: number[] = [];
    const end = Math.min(fittedTop + VIS, channels.length);
    for (let r = fittedTop; r < end; r++) indices.push(r);
    return indices;
  }, [fittedTop, channels.length]);

  const nowFraction = (nowMin - w0) / WIN;
  const selChannel = channels[selRow];

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (
      target.closest('button, a, input, select, textarea, .ch, .pr, .pgb, .info, .keys > div, .keys > button')
    ) {
      return;
    }
    onBackToWatch();
  };

  return (
    <div className="tvg-guide-screen" onClick={handleBackgroundClick}>
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
              <div className="today">
                <span>Today</span>
                {winOffsetMin > 0 && (
                  <button
                    type="button"
                    className="pgb"
                    onClick={() => {
                      setWinOffsetMin(0);
                      setSelSlotId(null);
                    }}
                  >
                    Now
                  </button>
                )}
              </div>
              <div className="times">
                {timeTicks.map((m) => (
                  <span key={m} style={{ left: `${((m - w0) / WIN) * 100}%` }}>
                    {hm(m)}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="rows"
              ref={rowsRef}
              onTouchStart={handleRowsTouchStart}
              onTouchEnd={handleRowsTouchEnd}
            >
              {visibleRowIndices.map((r) => {
                const c = channels[r];
                const isCurrentPlayingChannel = r === safeCurrentCh;
                const isFocusedRow = r === selRow;
                const rowSlots = (schedules[r] || []).filter(
                  (p) => p.e > w0 && p.s < w1
                );

                return (
                  <div
                    key={c.categoryId}
                    className={`row ${isCurrentPlayingChannel ? 'sel' : ''} ${isFocusedRow && !isCurrentPlayingChannel ? 'foc' : ''}`}
                  >
                    <button
                      type="button"
                      className="ch"
                      onClick={() => handleTune(r)}
                    >
                      <span>{c.categoryName}</span>
                    </button>

                    <div className="trk">
                      {rowSlots.map((p) => {
                        const a = Math.max(p.s, w0);
                        const b = Math.min(p.e, w1);
                        const air = p.s <= nowMin && nowMin < p.e;
                        const isOn = selectedSlot?.id === p.id && isFocusedRow;
                        const cl = p.s < w0 - 0.5;
                        const cr = p.e > w1 + 0.5;
                        const leftPct = ((a - w0) / WIN) * 100;
                        const widthPct = ((b - a) / WIN) * 100;

                        return (
                          <button
                            key={p.id}
                            type="button"
                            className={`pr ${air ? 'air' : ''} ${isOn ? 'on' : ''} ${cl ? 'cl' : ''} ${cr ? 'cr' : ''} ${p.isMarathon ? 'is-marathon' : ''}`}
                            style={{
                              left: `${leftPct}%`,
                              width: widthPct > 0.8 ? `calc(${widthPct}% - 4px)` : `${widthPct}%`,
                            }}
                            onMouseEnter={() => {
                              setSelRow(r);
                              setSelSlotId(p.id);
                            }}
                            onClick={() => {
                              if (air || (selRow === r && selectedSlot?.id === p.id)) {
                                handleTune(r, p);
                              } else {
                                setSelRow(r);
                                setSelSlotId(p.id);
                              }
                            }}
                          >
                            {p.isMarathon && (
                              <span className="gd-marathon-badge" title={`Continuous marathon of ${p.src}`}>
                                🔥 {getMarathonScheduleLabel(scheduleAnchorMs) || 'MARATHON'}
                              </span>
                            )}
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
              <div
                className="info"
                onClick={() => handleTune(selRow, selectedSlot)}
                style={{ cursor: 'pointer' }}
                title="Tap to watch this channel"
              >
                <div className="tm">
                  {hm(selectedSlot.s)} – {hm(selectedSlot.e)}
                </div>
                <div className="tt">
                  {selectedSlot.isMarathon && (
                    <span className="osd-row-tag is-marathon" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-flex' }}>
                      🔥 {getMarathonScheduleLabel(scheduleAnchorMs) || 'MARATHON'}
                    </span>
                  )}
                  {selectedSlot.t}
                </div>
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
          <div onClick={() => handleTune(selRow, selectedSlot)} style={{ cursor: 'pointer' }}>
            Watch<span className="k">Enter</span>
          </div>
          <div
            onClick={() => move(1, 0)}
            style={{ cursor: 'pointer' }}
            title="Tap to step through channels"
          >
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
