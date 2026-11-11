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
        <button onClick={handleActivate} aria-label="Turn on Tuned" className="power-btn">
          <Power size={40} strokeWidth={1.8} />
        </button>

        <h1
          className="brand-logo"
          style={{
            justifyContent: 'center',
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: '#f5f4f0',
          }}
        >
          <span className="brand-dot" />
          <span>tuned</span>
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
