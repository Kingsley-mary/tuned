'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChannelLineup } from '../lib/types';
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

interface GuideSlot {
  startMs: number;
  endMs: number;
  startMin: number;
  endMin: number;
  title: string;
  source: string;
  videoId: string;
  isLive: boolean;
  progressPercent: number;
  extraCount: number;
}

const VIS = 7; // 7 visible channel rows at a time
const WIN = 120; // 120-minute (2-hour) horizontal broadcast window
const MIN_SLOT_MS = 18 * 60 * 1000; // Group very short clips (<18m) so every TV guide block is wide & readable

const pad = (n: number) => String(n).padStart(2, '0');

const formatHmFromEpoch = (epochMs: number) => {
  const d = new Date(epochMs);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const formatDurationMin = (mins: number) => {
  const safe = Math.max(1, Math.round(mins));
  if (safe >= 60) {
    const h = Math.floor(safe / 60);
    const m = safe % 60;
    return m > 0 ? `${h}h ${pad(m)}m` : `${h}h`;
  }
  return `${safe}m`;
};

function buildReadableSlots(schedule: ScheduledProgram[], nowMs: number, epochOriginMs: number): GuideSlot[] {
  const slots: GuideSlot[] = [];
  let i = 0;

  while (i < schedule.length) {
    const first = schedule[i];
    let endMs = first.endTimeMs;
    let extraCount = 0;
    let j = i + 1;

    while (endMs - first.startTimeMs < MIN_SLOT_MS && j < schedule.length) {
      endMs = schedule[j].endTimeMs;
      extraCount++;
      j++;
    }

    const isLive = first.startTimeMs <= nowMs && nowMs < endMs;
    const totalDurMs = Math.max(1, endMs - first.startTimeMs);
    const progressPercent = isLive
      ? Math.min(100, Math.max(0, ((nowMs - first.startTimeMs) / totalDurMs) * 100))
      : 0;

    slots.push({
      startMs: first.startTimeMs,
      endMs,
      startMin: (first.startTimeMs - epochOriginMs) / 60000,
      endMin: (endMs - epochOriginMs) / 60000,
      title: first.video.title,
      source: first.video.sourceChannelTitle,
      videoId: first.video.youtubeVideoId,
      isLive,
      progressPercent,
      extraCount,
    });

    i = j;
  }

  return slots;
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
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  const [selRow, setSelRow] = useState<number>(() =>
    Math.max(0, Math.min(channels.length - 1, currentChannelIndex))
  );
  const [topRow, setTopRow] = useState<number>(() =>
    Math.max(0, Math.min(Math.max(0, channels.length - VIS), currentChannelIndex - Math.floor(VIS / 2)))
  );
  // Selected time offset in minutes relative to nowMs (0 = live now)
  const [selOffsetMin, setSelOffsetMin] = useState<number>(0);
  // Window start offset in minutes relative to nowMs (0 = starts at current time)
  const [winOffsetMin, setWinOffsetMin] = useState<number>(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);

  const flashToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMsg(null);
    }, 2200);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Update clock every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setNowMs(Date.now());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // Midnight of today as minute-0 reference so minute math matches Tuned — TV Guide.html
  const dayOriginMs = useMemo(() => {
    const d = new Date(nowMs);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }, [nowMs]);

  const nowMin = (nowMs - dayOriginMs) / 60000;
  const w0 = nowMin + winOffsetMin;
  const w1 = w0 + WIN;
  const targetTimeMin = nowMin + selOffsetMin;

  // Build linear schedules for all channels
  const allRows = useMemo(() => {
    return channels.map((ch, chIdx) => {
      const isCurrentChannel = chIdx === currentChannelIndex;
      let vIdx = 0;
      let seek = 0;

      if (isCurrentChannel) {
        vIdx = currentVideoIndex;
        seek = currentPlaybackSeconds;
      } else {
        const saved = savedChannelStates.get(ch.categoryId);
        if (saved && ch.videos.length > 0) {
          const adv = advanceChannelPlayback(
            ch.videos,
            saved.videoIndex,
            saved.seekSeconds,
            (nowMs - saved.leftAt) / 1000,
            new Set(completedVideoIds)
          );
          vIdx = adv.videoIndex;
          seek = adv.seekSeconds;
        } else {
          const live = getLiveBroadcastState(
            ch.videos,
            ch.categoryId,
            Math.floor(nowMs / 1000),
            completedVideoIds
          );
          vIdx = live.videoIndex;
          seek = live.seekSeconds;
        }
      }

      const rawSchedule = buildChannelSchedule(ch.videos, vIdx, seek, 75, nowMs);
      const slots = buildReadableSlots(rawSchedule, nowMs, dayOriginMs);
      return {
        ch,
        chIdx,
        isCurrentChannel,
        slots,
      };
    });
  }, [
    channels,
    currentChannelIndex,
    currentVideoIndex,
    currentPlaybackSeconds,
    savedChannelStates,
    completedVideoIds,
    nowMs,
    dayOriginMs,
  ]);

  const slotAt = useCallback(
    (rowIdx: number, tMin: number): GuideSlot | undefined => {
      const list = allRows[rowIdx]?.slots || [];
      return list.find((p) => p.startMin <= tMin && tMin < p.endMin) || list.find((p) => p.endMin > nowMin) || list[0];
    },
    [allRows, nowMin]
  );

  // Keep row viewport (topRow) and time window (winOffsetMin) fitted to selection
  const fitViewport = useCallback(
    (nextRow: number, nextSelOffsetMin: number) => {
      setTopRow((prevTop) => {
        let t = prevTop;
        if (nextRow < t) t = nextRow;
        if (nextRow >= t + VIS) t = nextRow - VIS + 1;
        return Math.max(0, Math.min(Math.max(0, channels.length - VIS), t));
      });

      const slot = slotAt(nextRow, nowMin + nextSelOffsetMin);
      if (slot) {
        const psOffset = Math.max(0, slot.startMin - nowMin);
        setWinOffsetMin((prevWin) => {
          let nextW = prevWin;
          if (psOffset < nextW || psOffset >= nextW + WIN) {
            nextW = psOffset;
          }
          return Math.max(0, nextW);
        });
      }
    },
    [channels.length, nowMin, slotAt]
  );

  const moveSelection = useCallback(
    (dr: number, dt: number) => {
      let nextRow = selRow;
      let nextSelOffset = selOffsetMin;

      if (dr !== 0) {
        nextRow = Math.max(0, Math.min(channels.length - 1, selRow + dr));
      }

      if (dt !== 0) {
        const list = allRows[nextRow]?.slots || [];
        const curSlot = slotAt(nextRow, nowMin + selOffsetMin);
        const curIdx = curSlot ? list.indexOf(curSlot) : 0;
        const targetSlot = list[curIdx + dt];
        if (targetSlot && targetSlot.endMin > nowMin) {
          nextSelOffset = Math.max(0, targetSlot.startMin - nowMin + 0.5);
        }
      }

      setSelRow(nextRow);
      setSelOffsetMin(nextSelOffset);
      fitViewport(nextRow, nextSelOffset);
    },
    [selRow, selOffsetMin, channels.length, allRows, slotAt, nowMin, fitViewport]
  );

  const pageChannels = useCallback(
    (dir: 1 | -1) => {
      const maxTop = Math.max(0, channels.length - VIS);
      const nextTop = Math.max(0, Math.min(maxTop, topRow + dir * VIS));
      setTopRow(nextTop);
      if (selRow < nextTop) setSelRow(nextTop);
      else if (selRow >= nextTop + VIS) setSelRow(Math.min(channels.length - 1, nextTop + VIS - 1));
    },
    [channels.length, topRow, selRow]
  );

  const handleWatchSelected = useCallback(
    (rowIdx: number = selRow) => {
      const targetRow = allRows[rowIdx];
      if (!targetRow) return;
      const slot = slotAt(rowIdx, targetTimeMin);
      flashToast(
        `Tuning to CH ${pad(rowIdx + 1)} ${targetRow.ch.categoryName.toUpperCase()} — ${slot?.title || 'Live'}`
      );
      onTuneChannel(rowIdx);
    },
    [selRow, allRows, slotAt, targetTimeMin, flashToast, onTuneChannel]
  );

  // Keyboard navigation matching Tuned — TV Guide.html
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveSelection(-1, 0);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveSelection(1, 0);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveSelection(0, -1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveSelection(0, 1);
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        pageChannels(-1);
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        pageChannels(1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleWatchSelected(selRow);
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        onBackToWatch();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [moveSelection, pageChannels, handleWatchSelected, selRow, onBackToWatch]);

  // Wheel scrolling over rows (matching Tuned — TV Guide.html)
  useEffect(() => {
    const el = rowsContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (channels.length <= VIS) {
        const nextRow = Math.max(0, Math.min(channels.length - 1, selRow + (e.deltaY > 0 ? 1 : -1)));
        setSelRow(nextRow);
        return;
      }
      const maxTop = Math.max(0, channels.length - VIS);
      const nextTop = Math.max(0, Math.min(maxTop, topRow + (e.deltaY > 0 ? 1 : -1)));
      setTopRow(nextTop);
      if (selRow < nextTop) setSelRow(nextTop);
      if (selRow >= nextTop + VIS) setSelRow(Math.min(channels.length - 1, nextTop + VIS - 1));
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [channels.length, topRow, selRow]);

  // 30-minute time axis ticks inside [w0, w0 + WIN]
  const timeTicks = useMemo(() => {
    const firstTick = Math.ceil(w0 / 30) * 30;
    return [0, 1, 2, 3, 4]
      .map((k) => firstTick + k * 30)
      .filter((m) => m < w0 + WIN - 12)
      .map((m) => ({
        min: m,
        leftPct: ((m - w0) / WIN) * 100,
        label: formatHmFromEpoch(dayOriginMs + m * 60000),
      }));
  }, [w0, dayOriginMs]);

  const visibleRowSlice = allRows.slice(topRow, Math.min(topRow + VIS, allRows.length));
  const selectedSlot = slotAt(selRow, targetTimeMin);
  const selectedRowData = allRows[selRow];
  const nowProgressP = (nowMin - w0) / WIN;

  const nowDate = new Date(nowMs);
  const clockTimeStr = `${pad(nowDate.getHours())}:${pad(nowDate.getMinutes())}`;
  const clockDateStr = nowDate.toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  const scrollThumbTopPct = channels.length > 0 ? (topRow / channels.length) * 100 : 0;
  const scrollThumbHeightPct = channels.length > 0 ? Math.min(100, (VIS / channels.length) * 100) : 100;

  return (
    <div
      className="tvg-root"
      style={{ ['--h' as string]: selectedRowData?.ch.hue ?? 355 } as React.CSSProperties}
    >
      <div className="tvg-bg" />
      <div className={`tvg-toast${toastMsg ? ' on' : ''}`}>{toastMsg}</div>

      <div className="tvg-app">
        {/* Top Header */}
        <div className="tvg-top">
          <div>
            <div className="tvg-lg">
              <i />
              tuned
            </div>
            <div className="tvg-tg">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 3l4 4 4-4" />
              </svg>
              TV Guide
            </div>
          </div>

          <div className="tvg-clock">
            <small>{clockDateStr}</small>
            <b>{clockTimeStr}</b>
          </div>
        </div>

        {/* Main Scrollable Timeline Area */}
        <div className="tvg-scroll">
          <div>
            {/* Time Axis */}
            <div className="tvg-axis">
              <div className="tvg-today">
                <span>{winOffsetMin > 5 ? `+${Math.round(winOffsetMin / 60)}h` : 'Today'}</span>
                {channels.length > VIS && (
                  <div style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
                    <button
                      className="tvg-pgb"
                      onClick={() => pageChannels(-1)}
                      title="Previous channels (PageUp)"
                    >
                      P-
                    </button>
                    <button
                      className="tvg-pgb"
                      onClick={() => pageChannels(1)}
                      title="More channels (PageDown)"
                    >
                      P+
                    </button>
                  </div>
                )}
                {winOffsetMin > 5 && (
                  <button
                    className="tvg-pgb"
                    onClick={() => {
                      setSelOffsetMin(0);
                      setWinOffsetMin(0);
                    }}
                    title="Jump back to Live Now"
                  >
                    Now
                  </button>
                )}
              </div>

              <div className="tvg-times">
                {timeTicks.map((tk) => (
                  <span key={tk.min} style={{ left: `${tk.leftPct}%` }}>
                    {tk.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Channel Rows */}
            <div className="tvg-rows" ref={rowsContainerRef}>
              {visibleRowSlice.map(({ ch, chIdx, isCurrentChannel, slots }) => {
                const isRowSelected = chIdx === selRow;
                const rowSelSlot = isRowSelected ? selectedSlot : undefined;

                const visibleSlots = slots.filter(
                  (p) =>
                    p.endMin > w0 &&
                    p.startMin < w1 &&
                    (Math.min(p.endMin, w1) - Math.max(p.startMin, w0) >= 3 ||
                      (p === rowSelSlot && isRowSelected))
                );

                return (
                  <div key={ch.categoryId + '_' + chIdx} className={`tvg-row${isRowSelected ? ' sel' : ''}`}>
                    <button
                      className="tvg-ch"
                      onClick={() => {
                        setSelRow(chIdx);
                        handleWatchSelected(chIdx);
                      }}
                      onMouseEnter={() => setSelRow(chIdx)}
                      title={`Tune to CH ${pad(chIdx + 1)} ${ch.categoryName}`}
                    >
                      <small className="tvg-ch-num">{pad(chIdx + 1)}</small>
                      <span>{ch.categoryName}</span>
                      {isCurrentChannel && <i className="tvg-ch-playing" title="Currently watching" />}
                    </button>

                    <div className="tvg-trk">
                      {visibleSlots.map((p, idx) => {
                        let a = Math.max(p.startMin, w0);
                        if (idx === 0 && a - w0 < 3) a = w0;
                        const b = Math.min(p.endMin, w1);
                        const air = p.startMin <= nowMin && nowMin < p.endMin;
                        const isSlotOn = isRowSelected && rowSelSlot?.startMs === p.startMs;
                        const clippedLeft = p.startMin < w0 - 1;
                        const clippedRight = p.endMin > w1;

                        const leftPct = ((a - w0) / WIN) * 100;
                        const widthPct = Math.max(2.5, ((b - a) / WIN) * 100);

                        return (
                          <button
                            key={p.videoId + '_' + p.startMs}
                            className={`tvg-pr${air ? ' air' : ''}${isSlotOn ? ' on' : ''}${
                              clippedLeft ? ' cl' : ''
                            }${clippedRight ? ' cr' : ''}`}
                            style={{
                              left: `${leftPct}%`,
                              width: `calc(${widthPct}% - 5px)`,
                            }}
                            onMouseEnter={() => {
                              setSelRow(chIdx);
                              setSelOffsetMin(Math.max(0, p.startMin - nowMin + 0.5));
                            }}
                            onClick={() => {
                              const alreadySelected = isRowSelected && rowSelSlot?.startMs === p.startMs;
                              setSelRow(chIdx);
                              setSelOffsetMin(Math.max(0, p.startMin - nowMin + 0.5));
                              if (alreadySelected || air) {
                                handleWatchSelected(chIdx);
                              }
                            }}
                          >
                            <span>
                              {p.title}
                              {p.extraCount > 0 ? ` (+${p.extraCount})` : ''}
                            </span>
                            {air && (
                              <i
                                className="tvg-pr-prog"
                                style={{ width: `${p.progressPercent}%` }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Vertical NOW Indicator Line */}
              {nowProgressP >= 0 && nowProgressP <= 1 && (
                <div
                  className="tvg-now"
                  style={{ ['--p' as string]: nowProgressP } as React.CSSProperties}
                >
                  <b>NOW</b>
                </div>
              )}

              {/* Right Scrollbar Indicator */}
              <div className="tvg-sbar">
                <i
                  style={{
                    top: `${scrollThumbTopPct}%`,
                    height: `${scrollThumbHeightPct}%`,
                  }}
                />
              </div>
            </div>

            {/* Cream Selected Program Info Banner */}
            {selectedSlot && selectedRowData && (
              <div className="tvg-info">
                <div className="tm">
                  {formatHmFromEpoch(selectedSlot.startMs)} – {formatHmFromEpoch(selectedSlot.endMs)}
                </div>
                <div className="tt">
                  {selectedSlot.title}
                  {selectedSlot.extraCount > 0 ? ` (+${selectedSlot.extraCount} more)` : ''}
                </div>
                <div className="rt">
                  <span>
                    CH {pad(selRow + 1)} · {selectedRowData.ch.categoryName} · {selectedSlot.source}
                  </span>
                  <b className="tvg-bdg">
                    {formatDurationMin(selectedSlot.endMin - selectedSlot.startMin)}
                  </b>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Remote Keys Legend */}
        <div className="tvg-keys">
          <button onClick={() => handleWatchSelected(selRow)}>
            Watch <span className="tvg-k">Enter</span>
          </button>
          <div>
            Browse <span className="tvg-k">← ↑ ↓ →</span>
          </div>
          {channels.length > VIS && (
            <button onClick={() => pageChannels(1)}>
              More Channels <span className="tvg-k">PgDn</span>
            </button>
          )}
          <button onClick={onBackToWatch}>
            Return <span className="tvg-k">Esc</span>
          </button>
        </div>
      </div>
    </div>
  );
};
