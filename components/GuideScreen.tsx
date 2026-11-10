'use client';

import React from 'react';
import { ChannelLineup } from '../lib/types';
import { ArrowLeft, Play, Radio, Clock } from 'lucide-react';
import {
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

  const activeChannel = channels[currentChannelIndex];
  const activeVideo = activeChannel?.videos?.[currentVideoIndex];

  return (
    <div className="app-container">
      <header className="top-nav">
        <button onClick={onBackToWatch} className="btn-pill primary" aria-label="Back to watching">
          <ArrowLeft size={16} />
          <span>Back to watching</span>
        </button>

        {activeChannel && activeVideo && (
          <button
            onClick={onBackToWatch}
            className="btn-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              maxWidth: 420,
              overflow: 'hidden',
            }}
            title="Audio continues playing while browsing Guide — click to return"
          >
            <Radio size={14} style={{ color: '#22c55e', flexShrink: 0 }} className="animate-pulse" />
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

        <div className="brand-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </div>
      </header>

      <div style={{ marginBottom: 24 }}>
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
          All channels are broadcasting live right now. Select any channel to tune in.
        </p>
      </div>

      {/* Guide EPG Timeline (PRD G-2, G-5) */}
      <div className="guide-container">
        {channels.map((ch, chIdx) => {
          const isCurrentChannel = chIdx === currentChannelIndex;

          // Determine live broadcast position for this channel right now
          let chVideoIdx = 0;
          let chSeekSec = 0;

          if (isCurrentChannel) {
            chVideoIdx = currentVideoIndex;
            chSeekSec = currentPlaybackSeconds;
          } else {
            const saved = savedChannelStates.get(ch.categoryId);
            if (saved && ch.videos.length > 0) {
              const elapsedSec = (Date.now() - saved.leftAt) / 1000;
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
                Math.floor(Date.now() / 1000),
                completedVideoIds
              );
              chVideoIdx = live.videoIndex;
              chSeekSec = live.seekSeconds;
            }
          }

          const schedule = buildChannelSchedule(ch.videos, chVideoIdx, chSeekSec, 10);

          return (
            <div key={ch.categoryId + chIdx} className="guide-row">
              {/* Sticky Channel Header */}
              <button
                onClick={() => onTuneChannel(chIdx)}
                className="guide-channel-header"
                style={{
                  cursor: 'pointer',
                  textAlign: 'left',
                  border: isCurrentChannel ? '1px solid var(--accent)' : undefined,
                }}
                title={`Tune to CH ${String(chIdx + 1).padStart(2, '0')} ${ch.categoryName}`}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: `hsl(${ch.hue}, 85%, 55%)`,
                    boxShadow: isCurrentChannel ? `0 0 8px hsl(${ch.hue}, 85%, 55%)` : 'none',
                    flexShrink: 0,
                  }}
                />
                <span style={{ opacity: 0.65, fontSize: 12, fontWeight: 700 }}>
                  CH {String(chIdx + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    textTransform: 'capitalize',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 600,
                  }}
                >
                  {ch.categoryName}
                </span>
              </button>

              {/* Linear Schedule Row (Ordered starting from what's ON AIR right now) */}
              <div style={{ display: 'flex', gap: 8, flex: 1, paddingLeft: 12 }}>
                {schedule.map((slot, slotIdx) => {
                  const { video: vid, durationSec, startTimeMs, isLive, progressPercent } = slot;
                  const isWatchingNow = isCurrentChannel && isLive;
                  const blockWidth = Math.max(190, Math.min(360, Math.round(durationSec * 0.22)));
                  const minsLeft = Math.max(
                    1,
                    Math.round((durationSec * (1 - progressPercent / 100)) / 60)
                  );

                  return (
                    <button
                      key={vid.youtubeVideoId + '_' + slotIdx}
                      onClick={() => onTuneChannel(chIdx)}
                      title={
                        isLive
                          ? `ON AIR on CH ${String(chIdx + 1).padStart(2, '0')}: ${vid.title} — Click to tune in`
                          : `Upcoming at ${formatClockTime(startTimeMs)}: ${vid.title} — Click to tune to CH ${String(
                              chIdx + 1
                            ).padStart(2, '0')}`
                      }
                      style={{
                        position: 'relative',
                        height: 62,
                        width: blockWidth,
                        flexShrink: 0,
                        borderRadius: 'var(--radius-md)',
                        padding: '8px 12px 10px 12px',
                        background: isWatchingNow
                          ? 'var(--ink)'
                          : isLive
                          ? 'var(--panel)'
                          : 'var(--subtle-bg)',
                        color: isWatchingNow ? 'var(--bg)' : 'var(--ink)',
                        border: isWatchingNow
                          ? '2px solid var(--accent)'
                          : isLive
                          ? '2px solid #22c55e'
                          : '1px solid var(--border)',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        transition: 'all 0.15s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 13,
                          fontWeight: 600,
                          lineHeight: 1.2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {isWatchingNow && (
                          <Play size={11} fill="currentColor" style={{ flexShrink: 0 }} />
                        )}
                        {isLive && !isWatchingNow && (
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: '#22c55e',
                              boxShadow: '0 0 6px #22c55e',
                              flexShrink: 0,
                              display: 'inline-block',
                            }}
                          />
                        )}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {vid.title}
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: 11,
                          opacity: isWatchingNow ? 0.85 : 0.65,
                          marginTop: 4,
                        }}
                      >
                        <span
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {vid.sourceChannelTitle}
                        </span>
                        <span style={{ flexShrink: 0, fontWeight: isLive ? 700 : 500 }}>
                          {isLive
                            ? `ON AIR • ${minsLeft}m left`
                            : `${formatClockTime(startTimeMs)} • ${formatDuration(durationSec)}`}
                        </span>
                      </div>

                      {/* Live progress bar at bottom of currently airing card */}
                      {isLive && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 3,
                            background: isWatchingNow
                              ? 'rgba(255,255,255,0.2)'
                              : 'rgba(34, 197, 94, 0.2)',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: `${progressPercent}%`,
                              background: isWatchingNow ? 'var(--accent)' : '#22c55e',
                            }}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
