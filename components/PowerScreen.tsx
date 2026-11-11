'use client';

import React, { useCallback, useEffect, useState } from 'react';
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

  const handleActivate = useCallback(() => {
    if (isPoweringUp) return;
    setIsPoweringUp(true);
    // iOS Safari requires audio/video context unlock immediately inside click handler
    onTurnOn();
  }, [isPoweringUp, onTurnOn]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleActivate();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleActivate]);

  return (
    <div className={`power-curtain ${isPoweringUp ? 'turning-on' : ''}`}>
      <div className="pw-inner">
        <button onClick={handleActivate} aria-label="Turn on Tuned" className="power-btn">
          <Power size={44} strokeWidth={1.7} />
        </button>

        <h1 className="brand-logo pw-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </h1>

        <p className="pw-sub">
          {isReturningUser
            ? `Resume · CH ${String(lastChannelNumber).padStart(2, '0')} ${lastCategoryName.toUpperCase()}`
            : 'Tap to turn on'}
        </p>

        {isReturningUser && (
          <button type="button" onClick={onChangeChannels} className="pw-chg">
            Change channels
          </button>
        )}
      </div>

      <div className="pw-keys" aria-hidden>
        <div>
          Power on <span className="pk-k">Space</span> <span className="pk-k">Enter</span>
        </div>
      </div>
    </div>
  );
};
