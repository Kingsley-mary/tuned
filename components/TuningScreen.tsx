'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  // Keep the latest callback in a ref so parent re-renders never restart the tuning timers.
  const completeRef = useRef(onTuningComplete);
  completeRef.current = onTuningComplete;

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
      completeRef.current();
    }, minTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [channels.length]);

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
              className={`tuning-chip${isReady ? ' ready' : ''}`}
              style={{ ['--h' as string]: ch.hue } as React.CSSProperties}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: `hsl(${ch.hue}, 85%, 55%)`,
                  boxShadow: isReady ? `0 0 10px hsl(${ch.hue}, 85%, 55%)` : 'none',
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
      <div className="tuning-bar"><div style={{ width: `${Math.min(100, (activeStep / Math.max(1, channels.length)) * 100)}%` }} /></div>
    </div>
  );
};
