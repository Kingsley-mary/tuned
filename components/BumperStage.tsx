'use client';

import React from 'react';
import { Video } from '../lib/types';
import { MotionBumperVariant } from '../lib/bumpers';
import { ThreeBumperCanvas, getSceneKindForCategory } from './ThreeBumperCanvas';

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
  categoryId,
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
  const nowTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const isNotShort = (v?: Video): v is Video =>
    Boolean(v && (!v.durationSec || v.durationSec > 60) && !/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(v.title));

  const safeNext = isNotShort(nextVideo) ? nextVideo : undefined;
  const safeLater = isNotShort(laterVideo) ? laterVideo : undefined;
  const safeThird = isNotShort(thirdVideo) ? thirdVideo : undefined;

  const queueSlots = [
    safeNext ? { tag: 'UP NEXT', video: safeNext } : null,
    safeLater && safeLater.youtubeVideoId !== safeNext?.youtubeVideoId
      ? { tag: 'LATER', video: safeLater }
      : null,
    safeThird &&
    safeThird.youtubeVideoId !== safeNext?.youtubeVideoId &&
    safeThird.youtubeVideoId !== safeLater?.youtubeVideoId
      ? { tag: 'STILL TO COME', video: safeThird }
      : null,
  ].filter(Boolean) as { tag: string; video: Video }[];

  const usesThreeScene =
    variant === 'ident' ||
    variant === 'cinematic' ||
    variant === 'field' ||
    variant === 'visualizer';

  const sceneKind =
    variant === 'field'
      ? 'field'
      : variant === 'visualizer'
      ? (categoryId === 'music' ? 'resonator' : 'plasma')
      : getSceneKindForCategory(categoryId);

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
      {usesThreeScene && (
        <ThreeBumperCanvas
          kind={sceneKind}
          hue={hue}
          channelNumber={channelNumber}
          channelName={channelName}
          categoryId={categoryId}
        />
      )}

      {/* 1. Three.js 3D Monolith Station ID */}
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
              <span>{safeNext?.title || `Continuing ${channelName}`}</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Fullscreen Immersive 3D Cinematic Intermission */}
      {variant === 'cinematic' && (
        <div className="bm-layer bm-cinematic-layer">
          <div className="bm-top-bar">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>tuned</span>
            </div>
            <span className="osd-chip bm-cinema-chip">
              <span className="dot" /> CH {chCode} · {channelName.toUpperCase()}
            </span>
          </div>

          <div className="bm-support bm-cinematic-foot">
            <div className="bm-cinematic-bug">
              <span className="bm-cinematic-tag">STATION BREAK</span>
              <span className="bm-cinematic-ch">{channelName}</span>
            </div>
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{safeNext?.title || `Continuing ${channelName}`}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Pure 2D Editorial Split-Frame Schedule Promo */}
      {variant === 'lineup' && (
        <div className="bm-layer bm-split">
          <div className="bm-lead bm-split-left">
            <div className="bm-preview-frame">
              {safeNext?.thumbnailUrl ? (
                <img
                  src={safeNext.thumbnailUrl}
                  alt={safeNext.title}
                  className="bm-preview-img"
                />
              ) : (
                <div className="bm-preview-fallback" />
              )}
              <div className="bm-preview-scrim" />
              <div className="bm-preview-meta">
                <span className="bm-eyebrow">CH {chCode} · {channelName}</span>
                <h3>{safeNext?.title || `Continuing ${channelName}`}</h3>
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

      {/* 3. Pure 2D Swiss Broadcast Test Slate */}
      {variant === 'slate' && (
        <div className="bm-layer bm-slate-grid">
          <div className="bm-slate-meta">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>tuned</span>
            </div>
            <span className="bm-slate-clock">CH {chCode} · {nowTime}</span>
          </div>

          <div className="bm-lead bm-slate-center">
            <div className="bm-slate-badge">{channelName.toUpperCase()}</div>
            <h2>{safeNext?.title || `Continuing ${channelName}`}</h2>
            {safeNext?.sourceChannelTitle && (
              <p className="bm-slate-sub">{safeNext.sourceChannelTitle}</p>
            )}
          </div>

          <div className="bm-support bm-slate-foot">
            <div className="bm-slate-foot-row">
              <span>UP NEXT ON CH {chCode}</span>
              <span>LIVE BROADCAST SCHEDULE</span>
            </div>
            <div className="bm-progress-track">
              <div className="bm-progress-fill" />
            </div>
          </div>
        </div>
      )}

      {/* 4. Pure Minimal Black Adult Swim Card */}
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
              CH {chCode} · Up next: {safeNext?.title || 'continuing broadcast'}
            </span>
          </div>
        </div>
      )}

      {/* 5. Three.js 3D Instanced Field + Curved Channel Plate & Plasma Fresnel Orb */}
      {variant === 'field' && (
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

          <div className="bm-support bm-orbital-foot">
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{safeNext?.title || `Continuing ${channelName}`}</span>
            </div>
            <div className="bm-progress-track">
              <div className="bm-progress-fill" />
            </div>
          </div>
        </div>
      )}

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
              <span>{safeNext?.title || `Continuing ${channelName}`}</span>
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
