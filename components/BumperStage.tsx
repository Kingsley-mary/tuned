'use client';

import React from 'react';
import { Video } from '../lib/types';
import { MotionBumperVariant } from '../lib/bumpers';
import { ThreeBumperCanvas } from './ThreeBumperCanvas';

interface BumperStageProps {
  variant: MotionBumperVariant;
  durationMs: number;
  categoryId: string;
  channelNumber: number;
  channelName: string;
  hue: number;
  cardLead: string;
  cardPunchline: string;
  nextVideo?: Video;
  laterVideo?: Video;
  thirdVideo?: Video;
}

export const BumperStage: React.FC<BumperStageProps> = ({
  variant,
  durationMs,
  channelNumber,
  channelName,
  hue,
  cardLead,
  cardPunchline,
  nextVideo,
  laterVideo,
  thirdVideo,
}) => {
  const chCode = String(channelNumber).padStart(2, '0');

  const queueSlots = [
    nextVideo ? { tag: 'UP NEXT', video: nextVideo } : null,
    laterVideo && laterVideo.youtubeVideoId !== nextVideo?.youtubeVideoId
      ? { tag: 'LATER', video: laterVideo }
      : null,
    thirdVideo &&
    thirdVideo.youtubeVideoId !== nextVideo?.youtubeVideoId &&
    thirdVideo.youtubeVideoId !== laterVideo?.youtubeVideoId
      ? { tag: 'STILL TO COME', video: thirdVideo }
      : null,
  ].filter(Boolean) as { tag: string; video: Video }[];

  const sceneKind =
    variant === 'ident'
      ? 'monolith'
      : variant === 'visualizer'
      ? 'orbital'
      : variant === 'lineup'
      ? 'ribbon'
      : 'dust';

  return (
    <div
      className={`tv-bumper bm-stage bm-${variant}`}
      style={
        {
          ['--h' as string]: hue,
          ['--bm-dur' as string]: `${durationMs}ms`,
        } as React.CSSProperties
      }
    >
      <ThreeBumperCanvas kind={sceneKind} hue={hue} />

      {/* 1. Studio 3D Monolith Station ID */}
      {variant === 'ident' && (
        <div className="bm-layer bm-ident-layer">
          <div className="bm-top-bar">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>tuned</span>
            </div>
            <span className="osd-chip">
              <span className="dot" /> CH {chCode} · STEREO
            </span>
          </div>

          <div className="bm-lead bm-ident-center">
            <span className="bm-eyebrow">YOU ARE WATCHING</span>
            <h2>{channelName}</h2>
          </div>

          <div className="bm-support bm-bottom-bar">
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{nextVideo?.title || `Continuing ${channelName}`}</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Split-Frame Preview + Staggered Schedule */}
      {variant === 'lineup' && (
        <div className="bm-layer bm-split">
          <div className="bm-lead bm-split-left">
            <div className="bm-preview-frame">
              {nextVideo?.thumbnailUrl ? (
                <img
                  src={nextVideo.thumbnailUrl}
                  alt={nextVideo.title}
                  className="bm-preview-img"
                />
              ) : (
                <div className="bm-preview-fallback" />
              )}
              <div className="bm-preview-scrim" />
              <div className="bm-preview-meta">
                <span className="bm-eyebrow">CH {chCode} · {channelName}</span>
                <h3>{nextVideo?.title || `Continuing ${channelName}`}</h3>
              </div>
            </div>
          </div>

          <div className="bm-split-right">
            <div className="bm-schedule-head">COMING UP</div>
            <div className="bm-schedule-list">
              {queueSlots.map((slot, idx) => (
                <div
                  key={slot.video.youtubeVideoId + idx}
                  className={`bm-schedule-row${idx === 0 ? ' primary' : ''}`}
                  style={{ animationDelay: `${80 + idx * 70}ms` }}
                >
                  <span className="bm-schedule-tag">{slot.tag}</span>
                  <strong>{slot.video.title}</strong>
                  <small>{slot.video.sourceChannelTitle}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Adult Swim Minimalist Black Card */}
      {variant === 'card' && (
        <div className="bm-layer bm-blackcard">
          <div className="bm-blackcard-copy">
            <p className="bm-card-lead">{cardLead}</p>
            <h2 className="bm-card-punch">{cardPunchline}</h2>
          </div>

          <div className="bm-blackcard-foot">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>[tuned]</span>
            </div>
            <span className="bm-blackcard-next">
              CH {chCode} · Up next: {nextVideo?.title || 'continuing broadcast'}
            </span>
          </div>
        </div>
      )}

      {/* 4. 3D Chrome Orbital Station Telemetry */}
      {variant === 'visualizer' && (
        <div className="bm-layer bm-orbital-layer">
          <div className="bm-top-bar">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>tuned</span>
            </div>
            <span className="osd-chip">
              <span className="dot" /> CH {chCode} · {channelName}
            </span>
          </div>

          <div className="bm-lead bm-ident-center">
            <span className="bm-eyebrow">STAY TUNED</span>
            <h2>{channelName}</h2>
          </div>

          <div className="bm-support bm-orbital-foot">
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{nextVideo?.title || `Continuing ${channelName}`}</span>
            </div>
            <div className="bm-progress-track">
              <div className="bm-progress-fill" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
