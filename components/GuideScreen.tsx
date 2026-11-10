'use client';

import React from 'react';
import { ChannelLineup } from '../lib/types';
import { ArrowLeft, Play } from 'lucide-react';

interface GuideScreenProps {
  channels: ChannelLineup[];
  currentChannelIndex: number;
  currentVideoIndex: number;
  onBackToWatch: () => void;
  onSelectProgram: (channelIndex: number, videoIndex: number) => void;
}

export const GuideScreen: React.FC<GuideScreenProps> = ({
  channels,
  currentChannelIndex,
  currentVideoIndex,
  onBackToWatch,
  onSelectProgram,
}) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.round(seconds / 60);
    return `${mins}m`;
  };

  return (
    <div className="app-container">
      <header className="top-nav">
        <button onClick={onBackToWatch} className="btn-pill" aria-label="Back to watching">
          <ArrowLeft size={16} />
          <span>Back to watching</span>
        </button>

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
          Guide
        </h1>
        <p style={{ color: 'var(--ink-secondary)', fontSize: 15, marginTop: 6 }}>
          Every channel and what’s on it. Tap a video to tune in.
        </p>
      </div>

      {/* Guide EPG Timeline (PRD G-2, G-5) */}
      <div className="guide-container">
        {channels.map((ch, chIdx) => {
          return (
            <div key={ch.categoryId + chIdx} className="guide-row">
              {/* Sticky Channel Header */}
              <div className="guide-channel-header">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: `hsl(${ch.hue}, 85%, 55%)`,
                    flexShrink: 0,
                  }}
                />
                <span style={{ opacity: 0.6, fontSize: 12 }}>
                  CH {String(chIdx + 1).padStart(2, '0')}
                </span>
                <span style={{ textTransform: 'capitalize', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {ch.categoryName}
                </span>
              </div>

              {/* Videos Row (Proportional widths) */}
              <div style={{ display: 'flex', gap: 8, flex: 1, paddingLeft: 12 }}>
                {ch.videos.map((vid, vidIdx) => {
                  const isCurrent = chIdx === currentChannelIndex && vidIdx === currentVideoIndex;
                  // Min width 140px, scaling with video duration
                  const blockWidth = Math.max(140, Math.min(360, (vid.durationSec || 600) * 0.16));

                  return (
                    <button
                      key={vid.youtubeVideoId + vidIdx}
                      onClick={() => onSelectProgram(chIdx, vidIdx)}
                      style={{
                        position: 'relative',
                        height: 54,
                        width: blockWidth,
                        flexShrink: 0,
                        borderRadius: 'var(--radius-md)',
                        padding: '8px 12px',
                        background: isCurrent ? 'var(--ink)' : 'var(--subtle-bg)',
                        color: isCurrent ? 'var(--bg)' : 'var(--ink)',
                        border: isCurrent
                          ? '2px solid var(--accent)'
                          : '1px solid var(--border)',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent) {
                          e.currentTarget.style.background = 'var(--panel-hover)';
                          e.currentTarget.style.borderColor = 'var(--border-focus)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) {
                          e.currentTarget.style.background = 'var(--subtle-bg)';
                          e.currentTarget.style.borderColor = 'var(--border)';
                        }
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
                        {isCurrent && <Play size={11} fill="currentColor" style={{ flexShrink: 0 }} />}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{vid.title}</span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: 11,
                          opacity: isCurrent ? 0.8 : 0.6,
                          marginTop: 3,
                        }}
                      >
                        <span>{vid.sourceChannelTitle}</span>
                        <span>{formatDuration(vid.durationSec)}</span>
                      </div>
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
