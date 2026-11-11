'use client';

import React, { useEffect, useRef } from 'react';
import { Video } from '../lib/types';
import { MotionBumperVariant } from '../lib/bumpers';

export type VisualizerMode = 'wave' | 'grid' | 'halftone' | 'scope';

const VISUALIZER_BY_CHANNEL: Record<string, VisualizerMode> = {
  music: 'wave',
  entertainment: 'wave',
  art: 'wave',
  fitness: 'wave',
  tech: 'grid',
  games: 'grid',
  cars: 'grid',
  industry: 'grid',
  design: 'grid',
  cartoons: 'halftone',
  food: 'halftone',
  travel: 'halftone',
  sports: 'halftone',
  science: 'scope',
  film: 'scope',
  movies: 'scope',
  documentaries: 'scope',
  learning: 'scope',
  architecture: 'scope',
  news: 'scope',
  business: 'scope',
  religion: 'scope',
};

function getVisualizerMode(categoryId: string): VisualizerMode {
  if (VISUALIZER_BY_CHANNEL[categoryId]) return VISUALIZER_BY_CHANNEL[categoryId];
  const modes: VisualizerMode[] = ['wave', 'grid', 'halftone', 'scope'];
  let h = 0;
  for (let i = 0; i < categoryId.length; i++) h = (h * 31 + categoryId.charCodeAt(i)) | 0;
  return modes[Math.abs(h) % modes.length];
}

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chCode = String(channelNumber).padStart(2, '0');
  const vizMode = getVisualizerMode(categoryId);

  // Live 60fps HTML5 Canvas Visualizer for the 'visualizer' bumper mode
  useEffect(() => {
    if (variant !== 'visualizer') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const startMs = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const render = (now: number) => {
      const t = (now - startMs) / 1000;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;

      // Dark base wash with subtle trail
      ctx.fillStyle = `hsla(${hue}, 38%, 6%, 0.34)`;
      ctx.fillRect(0, 0, w, h);

      if (vizMode === 'wave') {
        // Layered luminous audio sine ribbons + bars
        for (let layer = 0; layer < 4; layer++) {
          ctx.beginPath();
          const amp = h * (0.06 + layer * 0.032);
          const freq = 0.0045 + layer * 0.0018;
          const speed = 2.6 + layer * 0.9;
          for (let x = 0; x <= w; x += 8) {
            const env = Math.sin((x / w) * Math.PI);
            const y =
              h * 0.5 +
              Math.sin(x * freq + t * speed + layer * 1.4) * amp * env +
              Math.cos(x * freq * 1.7 - t * 1.8) * (amp * 0.35) * env;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `hsla(${(hue + layer * 24) % 360}, 90%, ${62 - layer * 6}%, ${0.75 - layer * 0.14})`;
          ctx.lineWidth = 3.2 - layer * 0.45;
          ctx.stroke();
        }
        const barCount = 36;
        const gap = w / barCount;
        for (let i = 0; i < barCount; i++) {
          const val = 0.25 + 0.75 * Math.abs(Math.sin(t * 4.2 + i * 0.38) * Math.cos(t * 1.9 - i * 0.21));
          const bh = val * h * 0.22;
          ctx.fillStyle = `hsla(${hue}, 88%, 64%, 0.24)`;
          ctx.fillRect(i * gap + gap * 0.2, h - bh, gap * 0.6, bh);
        }
      } else if (vizMode === 'grid') {
        // Retro 3D perspective horizon grid + geometric sun
        const horizonY = h * 0.44;
        const cx = w * 0.5;
        const sunRadius = Math.min(w, h) * 0.17;
        const sunGrad = ctx.createLinearGradient(0, horizonY - sunRadius, 0, horizonY + 20);
        sunGrad.addColorStop(0, `hsla(${hue}, 95%, 68%, 0.9)`);
        sunGrad.addColorStop(1, `hsla(${(hue + 38) % 360}, 92%, 50%, 0.15)`);
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, horizonY - sunRadius * 0.15, sunRadius, Math.PI, 0);
        ctx.closePath();
        ctx.fillStyle = sunGrad;
        ctx.fill();
        ctx.restore();

        ctx.strokeStyle = `hsla(${hue}, 90%, 64%, 0.55)`;
        ctx.lineWidth = 1.4;
        // Radiating perspective spokes
        const spokes = 16;
        for (let i = -spokes; i <= spokes; i++) {
          ctx.beginPath();
          ctx.moveTo(cx + i * 18, horizonY);
          ctx.lineTo(cx + i * 165, h);
          ctx.stroke();
        }
        // Advancing horizontal lines
        const scroll = (t * 0.9) % 1;
        for (let i = 0; i < 14; i++) {
          const p = (i + scroll) / 14;
          const y = horizonY + Math.pow(p, 2.2) * (h - horizonY);
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      } else if (vizMode === 'halftone') {
        // Bouncy Cartoon Network / Nickelodeon rippling halftone dot matrix
        const cell = Math.max(26, Math.min(w, h) / 18);
        const cols = Math.ceil(w / cell) + 1;
        const rows = Math.ceil(h / cell) + 1;
        const cx = w * 0.5;
        const cy = h * 0.5;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = c * cell + (r % 2 ? cell * 0.5 : 0);
            const y = r * cell;
            const dist = Math.hypot(x - cx, y - cy) * 0.015;
            const pulse = 0.5 + 0.5 * Math.sin(dist - t * 4.4);
            const radius = (cell * 0.4) * (0.2 + 0.8 * pulse);
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${(hue + (r + c) * 6) % 360}, 88%, ${48 + pulse * 20}%, ${0.22 + pulse * 0.45})`;
            ctx.fill();
          }
        }
      } else {
        // Oscilloscope Lissajous & orbital broadcast rings
        const cx = w * 0.5;
        const cy = h * 0.5;
        const maxR = Math.min(w, h) * 0.36;
        for (let ring = 1; ring <= 3; ring++) {
          ctx.beginPath();
          ctx.arc(cx, cy, (maxR / 3) * ring, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${hue}, 80%, 66%, ${0.25 / ring})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.beginPath();
        const steps = 240;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const x = cx + Math.sin(theta * 3 + t * 2.1) * maxR * 0.92;
          const y = cy + Math.sin(theta * 2 - t * 1.6) * maxR * 0.72;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsla(${hue}, 92%, 68%, 0.85)`;
        ctx.lineWidth = 2.6;
        ctx.stroke();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [variant, vizMode, hue]);

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
      {/* Template 1: Full-Screen Kinetic Color-Block Station Ident */}
      {variant === 'ident' && (
        <div className="bm-ident-wrap">
          <div className="bm-blocks" aria-hidden>
            <div className="bm-block bm-b1" />
            <div className="bm-block bm-b2" />
            <div className="bm-block bm-b3" />
            <div className="bm-block bm-b4" />
          </div>

          <div className="bm-marquee top" aria-hidden>
            <span>
              YOU ARE WATCHING TUNED · CH {chCode} {channelName.toUpperCase()} · STEREO BROADCAST ·{' '}
              YOU ARE WATCHING TUNED · CH {chCode} {channelName.toUpperCase()} · STEREO BROADCAST ·
            </span>
          </div>

          <div className="bm-ident-hero">
            <div className="bm-ident-badge">CH {chCode}</div>
            <div className="bm-ident-title-wrap">
              <span className="bm-eyebrow">YOU&apos;RE WATCHING</span>
              <h2>{channelName}</h2>
            </div>
          </div>

          <div className="bm-bottom-bar">
            <div className="brand-logo bm-logo">
              <span className="brand-dot" />
              <span>tuned</span>
            </div>
            <div className="bm-next-pill">
              <b>UP NEXT</b>
              <span>{nextVideo?.title || `Continuing ${channelName} broadcast`}</span>
            </div>
          </div>
        </div>
      )}

      {/* Template 2: Full-Screen Split-Frame "NOW / UP NEXT / LATER" Promo */}
      {variant === 'lineup' && (
        <div className="bm-split">
          <div className="bm-split-left">
            {nextVideo?.thumbnailUrl && (
              <div
                className="bm-split-thumb"
                style={{ backgroundImage: `url(${nextVideo.thumbnailUrl})` }}
              />
            )}
            <div className="bm-split-tint" />
            <div className="bm-split-copy">
              <div className="brand-logo bm-logo">
                <span className="brand-dot" />
                <span>tuned</span>
              </div>
              <span className="bm-eyebrow">COMING UP ON CH {chCode}</span>
              <h2>{channelName}</h2>
              {nextVideo && <p className="bm-split-sub">{nextVideo.sourceChannelTitle}</p>}
            </div>
          </div>

          <div className="bm-split-right">
            <div className="bm-schedule-head">TONIGHT&apos;S LINEUP</div>
            <div className="bm-schedule-list">
              {queueSlots.map((slot, idx) => (
                <div
                  key={slot.video.youtubeVideoId + idx}
                  className={`bm-schedule-row${idx === 0 ? ' primary' : ''}`}
                  style={{ animationDelay: `${0.12 + idx * 0.14}s` }}
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

      {/* Template 3: Minimal Black Adult Swim-Style Deadpan Text Card */}
      {variant === 'card' && (
        <div className="bm-blackcard">
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
              CH {chCode} {channelName} · Up next: {nextVideo?.title || 'continuing broadcast'}
            </span>
          </div>
        </div>
      )}

      {/* Template 4: Live Full-Screen Generative Canvas Visualizer */}
      {variant === 'visualizer' && (
        <div className="bm-viz">
          <canvas ref={canvasRef} className="bm-canvas" />
          <div className="bm-viz-overlay">
            <div className="bm-viz-top">
              <div className="brand-logo bm-logo">
                <span className="brand-dot" />
                <span>tuned</span>
              </div>
              <span className="osd-chip">
                <span className="dot" /> CH {chCode} · {channelName}
              </span>
            </div>

            <div className="bm-viz-center">
              <span className="bm-eyebrow">STAY TUNED</span>
              <h2>{channelName}</h2>
            </div>

            <div className="bm-viz-bottom">
              <div className="bm-next-pill">
                <b>UP NEXT</b>
                <span>{nextVideo?.title || `Continuing ${channelName}`}</span>
              </div>
              <div className="bm-progress-track">
                <div className="bm-progress-fill" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
