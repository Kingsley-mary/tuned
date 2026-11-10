'use client';

import React, { useEffect, useState } from 'react';
import { Power } from 'lucide-react';

interface PowerScreenProps {
  isReturningUser: boolean;
  lastChannelNumber?: number;
  lastCategoryName?: string;
  onTurnOn: () => void;
  onChangeChannels: () => void;
}

export const PowerScreen: React.FC<PowerScreenProps> = ({
  isReturningUser,
  lastChannelNumber = 1,
  lastCategoryName = 'Tech',
  onTurnOn,
  onChangeChannels,
}) => {
  const [isPoweringUp, setIsPoweringUp] = useState(false);

  const handleActivate = () => {
    if (isPoweringUp) return;
    setIsPoweringUp(true);
    // iOS Safari requires audio/video context unlock immediately inside click handler
    onTurnOn();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleActivate();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`power-curtain ${isPoweringUp ? 'turning-on' : ''}`}>
      <div style={{ textAlign: 'center', padding: '24px' }}>
        <button
          onClick={handleActivate}
          aria-label="Turn on Tuned"
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            marginBottom: 24,
            transition: 'all 0.25s ease',
            boxShadow: '0 0 30px rgba(255, 75, 62, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 75, 62, 0.2)';
          }}
        >
          <Power size={36} strokeWidth={2} />
        </button>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#f5f4f0',
          }}
        >
          tuned
        </h1>

        <p
          style={{
            color: 'rgba(245, 244, 240, 0.65)',
            fontSize: 16,
            marginTop: 10,
            fontFamily: 'var(--font-body)',
          }}
        >
          {isReturningUser
            ? `Resume · CH ${String(lastChannelNumber).padStart(2, '0')} ${lastCategoryName}`
            : 'Tap to turn on'}
        </p>

        {isReturningUser && (
          <div style={{ marginTop: 24 }}>
            <button
              onClick={onChangeChannels}
              style={{
                fontSize: 14,
                color: 'rgba(245, 244, 240, 0.8)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Change channels
            </button>
          </div>
        )}

        <div style={{ marginTop: 32, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          Press Space or Enter to power on
        </div>
      </div>
    </div>
  );
};
