'use client';

import React, { useState } from 'react';
import { Video } from '../lib/types';
import { MotionBumperVariant, YouTubeBumperClip, BreakPlan } from '../lib/bumpers';
import { ThreeBumperCanvas, getSceneKindForCategory } from './ThreeBumperCanvas';
import { YouTubePlayer } from './YouTubePlayer';

interface BumperStageProps {
  plan?: BreakPlan;
  kind?: 'motion' | 'youtube';
  variant?: MotionBumperVariant;
  clip?: YouTubeBumperClip;
  durationMs: number;
  categoryId: string;
  channelNumber: number;
  channelName: string;
  hue: number;
  cardLead?: string;
  cardPunchline?: string;
  bumperIndex?: number;
  totalBumpers?: number;
  isMarathon?: boolean;
  marathonCreator?: string;
  isPreview?: boolean;
  isMuted?: boolean;
  nextVideo?: Video;
  laterVideo?: Video;
  thirdVideo?: Video;
  onEnded?: () => void;
  onExitPreview?: () => void;
}

export const BumperStage: React.FC<BumperStageProps> = ({
  plan,
  kind: propKind,
  variant: propVariant,
  clip: propClip,
  durationMs,
  categoryId,
  channelNumber,
  channelName,
  hue,
  cardLead = 'Station identification.',
  cardPunchline = 'Continuing uninterrupted broadcast now.',
  bumperIndex = 1,
  totalBumpers = 1,
  isMarathon = false,
  marathonCreator,
  isPreview = false,
  isMuted = false,
  nextVideo,
  laterVideo,
  thirdVideo,
  onEnded,
  onExitPreview,
}) => {
  const [fallbackTo3D, setFallbackTo3D] = useState(false);

  const resolvedKind = fallbackTo3D ? 'motion' : (plan?.kind || propKind || 'motion');
  const resolvedVariant = plan && plan.kind === 'motion' ? plan.variant : (propVariant || 'ident');
  const resolvedClip = plan && plan.kind === 'youtube' ? plan.clip : propClip;
  const resolvedIsPreview = plan?.isPreview ?? isPreview;
  const resolvedBumperIndex = plan?.bumperIndex ?? bumperIndex;
  const resolvedTotalBumpers = plan?.totalBumpers ?? totalBumpers;
  const resolvedIsMarathon = plan?.isMarathon ?? isMarathon;
  const resolvedMarathonCreator = plan?.marathonCreator ?? marathonCreator;
  const resolvedCardLead = plan && plan.kind === 'motion' ? plan.cardLead : cardLead;
  const resolvedCardPunchline = plan && plan.kind === 'motion' ? plan.cardPunchline : cardPunchline;

  const chCode = String(channelNumber).padStart(2, '0');
  const nowTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const isMultiBreak = resolvedTotalBumpers > 1;

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

  const usesThreeScene = resolvedKind === 'motion';

  const sceneKind =
    resolvedVariant === 'field'
      ? 'field'
      : resolvedVariant === 'visualizer'
      ? (categoryId === 'music' ? 'resonator' : 'plasma')
      : getSceneKindForCategory(categoryId);

  return (
    <div
      className={`tv-bumper bm-stage bm-${resolvedVariant}${resolvedKind === 'youtube' ? ' bm-has-youtube' : ''}`}
      style={
        {
          ['--h' as string]: hue,
          ['--bm-dur' as string]: `${durationMs}ms`,
        } as React.CSSProperties
      }
    >
      {/* 0. Retro Widescreen YouTube Bumper Clip (Cartoon Network, MTV, PS1, HBO, Adult Swim, etc.) */}
      {resolvedKind === 'youtube' && resolvedClip ? (
        <div className="bm-layer bm-youtube-layer">
          <div className="bm-youtube-media">
            <YouTubePlayer
              videoId={resolvedClip.youtubeVideoId}
              startSeconds={0}
              isPlaying={true}
              isMuted={isMuted}
              allowShortClip={true}
              onEnded={onEnded || (() => {})}
              onError={() => setFallbackTo3D(true)}
              onTimeUpdate={() => {}}
              onBuffering={() => {}}
            />
          </div>
          <div className="bm-scanlines" />
          <div className="bm-cinematic-bug">
            <span className="bm-cinematic-tag">
              {resolvedIsPreview
                ? 'STATION ID PREVIEW'
                : resolvedIsMarathon
                ? '🔥 MARATHON BLOCK'
                : isMultiBreak
                ? `BREAK ${resolvedBumperIndex}/${resolvedTotalBumpers}`
                : 'STATION BREAK'}
            </span>
            <span className="bm-cinematic-ch">{resolvedClip.label || channelName}</span>
          </div>
          {safeNext?.title && (
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{safeNext.title}</span>
            </div>
          )}
          {resolvedIsPreview && (
            <button
              type="button"
              className="bm-preview-exit-btn"
              onClick={onExitPreview}
              title="Exit Preview (B / ESC)"
            >
              PREVIEW · PRESS B OR ESC TO EXIT ✕
            </button>
          )}
        </div>
      ) : (
        <>
          {usesThreeScene && (
            <ThreeBumperCanvas
              kind={sceneKind}
              hue={hue}
              channelNumber={channelNumber}
              channelName={channelName}
              categoryId={categoryId}
            />
          )}

          {resolvedIsPreview && (
            <button
              type="button"
              className="bm-preview-exit-btn"
              onClick={onExitPreview}
              title="Exit Preview (B / ESC)"
            >
              PREVIEW · PRESS B OR ESC TO EXIT ✕
            </button>
          )}

          {/* 1. Three.js 3D Monolith Station ID */}
          {resolvedVariant === 'ident' && (
            <div className="bm-layer bm-ident-layer">
              <div className="bm-top-bar">
                <div className="brand-logo bm-logo">
                  <span className="brand-dot" />
                  <span>tuned</span>
                </div>
                <span className="osd-chip">
                  <span className="dot" /> CH {chCode} · {resolvedIsMarathon ? `MARATHON BLOCK` : isMultiBreak ? `BREAK ${resolvedBumperIndex}/${resolvedTotalBumpers}` : 'STEREO'}
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
          {resolvedVariant === 'cinematic' && (
            <div className="bm-layer bm-cinematic-layer">
              <div className="bm-top-bar">
                <div className="brand-logo bm-logo">
                  <span className="brand-dot" />
                  <span>tuned</span>
                </div>
                <span className="osd-chip bm-cinema-chip">
                  <span className="dot" /> CH {chCode} · {resolvedIsMarathon ? `MARATHON BLOCK` : channelName.toUpperCase()} {isMultiBreak ? `(${resolvedBumperIndex}/${resolvedTotalBumpers})` : ''}
                </span>
              </div>

              <div className="bm-support bm-cinematic-foot">
                <div className="bm-cinematic-bug">
                  <span className="bm-cinematic-tag">
                    {resolvedIsMarathon ? `🔥 MARATHON BLOCK` : isMultiBreak ? `STATION BREAK (${resolvedBumperIndex}/${resolvedTotalBumpers})` : 'STATION BREAK'}
                  </span>
                  <span className="bm-cinematic-ch">{channelName}</span>
                </div>
                <div className="bm-next-pill">
                  <b>UP NEXT</b>
                  <span>{safeNext?.title || `Continuing ${channelName}`}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. 2D Swiss International Broadcast Schedule */}
          {resolvedVariant === 'lineup' && (
            <div className="bm-layer bm-split">
              <div className="bm-split-left">
                <div className="brand-logo bm-logo">
                  <span className="brand-dot" />
                  <span>tuned</span>
                </div>
                <div className="bm-station-call">
                  <span className="bm-call-num">CH {chCode}</span>
                  <h1 className="bm-call-name">{channelName}</h1>
                  <span className="bm-call-clock">{nowTime}</span>
                </div>
              </div>

              <div className="bm-split-right">
                <div className="bm-schedule-head">
                  {resolvedIsMarathon ? `🔥 ALL-${(resolvedMarathonCreator || channelName).toUpperCase()} MARATHON` : 'COMING UP'}
                </div>
                <div className="bm-schedule-list">
                  {queueSlots.map((slot, idx) => (
                    <div
                      key={slot.video.youtubeVideoId + idx}
                      className={`bm-schedule-item${idx === 0 ? ' current' : ''}`}
                    >
                      <span className="bm-item-tag">{slot.tag}</span>
                      <div className="bm-item-body">
                        <h3>{slot.video.title}</h3>
                        {slot.video.sourceChannelTitle && (
                          <p>{slot.video.sourceChannelTitle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Swiss Typography Slate */}
          {resolvedVariant === 'slate' && (
            <div className="bm-layer bm-slate">
              <div className="bm-top-bar">
                <div className="brand-logo bm-logo">
                  <span className="brand-dot" />
                  <span>tuned</span>
                </div>
                <span className="osd-chip">
                  <span className="dot" /> CH {chCode} · {nowTime}
                </span>
              </div>

              <div className="bm-lead bm-slate-center">
                <div className="bm-slate-badge">
                  {resolvedIsMarathon ? `🔥 ${(resolvedMarathonCreator || channelName).toUpperCase()} MARATHON` : channelName.toUpperCase()}
                </div>
                <h2>{safeNext?.title || `Continuing ${channelName}`}</h2>
                {safeNext?.sourceChannelTitle && (
                  <p className="bm-slate-sub">{safeNext.sourceChannelTitle}</p>
                )}
              </div>

              <div className="bm-support bm-slate-foot">
                <span>STATION IDENTIFICATION · TUNED LINEAR BROADCAST</span>
                <span>CH {chCode} · {channelName.toUpperCase()}</span>
              </div>
            </div>
          )}

          {/* 5. Pure Minimal Black Adult Swim Card */}
          {resolvedVariant === 'card' && (
            <div className="bm-layer bm-blackcard">
              <div className="bm-blackcard-copy">
                <p className="bm-card-lead">{resolvedCardLead}</p>
                <h2 className="bm-card-punch">{resolvedCardPunchline}</h2>
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

          {/* 6. Three.js 3D Instanced Field + Curved Channel Plate & Plasma Fresnel Orb */}
          {resolvedVariant === 'field' && (
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

          {resolvedVariant === 'visualizer' && (
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
        </>
      )}
    </div>
  );
};
