'use client';

import React, { useEffect, useState } from 'react';
import { ChannelLineup } from '../lib/types';
import { Radio } from 'lucide-react';

interface TuningScreenProps {
  channels: { id: string; name: string; hue: number }[];
  lineups: ChannelLineup[];
  onTuningComplete: () => void;
}

export const TuningScreen: React.FC<TuningScreenProps> = ({
  channels,
  lineups,
  onTuningComplete,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    // Light up channels one by one
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < channels.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 350);

    // Minimum display time 2s, max 8s (T-2)
    const minTime = Math.max(2200, channels.length * 350 + 800);
    const timeout = setTimeout(() => {
      onTuningComplete();
    }, minTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [channels.length, onTuningComplete]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div className="brand-logo" style={{ marginBottom: 32 }}>
        <span className="brand-dot" />
        <span style={{ fontSize: 26 }}>tuned</span>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: 640,
          marginBottom: 32,
        }}
      >
        {channels.map((ch, idx) => {
          const isReady = idx < activeStep;
          return (
            <div
              key={ch.id}
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-md)',
                border: isReady ? '1px solid transparent' : '1px solid var(--border)',
                background: isReady ? 'var(--ink)' : 'var(--panel)',
                color: isReady ? 'var(--bg)' : 'var(--ink-secondary)',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                transform: isReady ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isReady
                  ? `0 6px 20px hsla(${ch.hue}, 85%, 55%, 0.35)`
                  : '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: `hsl(${ch.hue}, 85%, 55%)`,
                  display: 'inline-block',
                }}
              />
              <span>
                {String(idx + 1).padStart(2, '0')} {ch.name}
              </span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink-secondary)' }}>
        <Radio size={18} className="animate-pulse" style={{ color: 'var(--accent)' }} />
        <p style={{ fontSize: 15, fontWeight: 500 }}>Tuning your channels…</p>
      </div>
    </div>
  );
};
