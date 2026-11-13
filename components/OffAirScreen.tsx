'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';

interface OffAirScreenProps {
  reason?: string;
  onTryAgain: () => void;
}

export const OffAirScreen: React.FC<OffAirScreenProps> = ({
  reason = 'Nothing playable on this channel right now.',
  onTryAgain,
}) => {
  return (
    <div className="offair-screen">
      {/* SMPTE Color Bars Graphic (PRD O-2) */}
      <div className="offair-wrap"><span className="offair-badge">NO SIGNAL</span><div className="smpte-bars">
        <div className="smpte-bar" style={{ background: '#dcdcdc' }} />
        <div className="smpte-bar" style={{ background: '#e6d94a' }} />
        <div className="smpte-bar" style={{ background: '#3ec7d6' }} />
        <div className="smpte-bar" style={{ background: '#4dc35e' }} />
        <div className="smpte-bar" style={{ background: '#c24fc9' }} />
        <div className="smpte-bar" style={{ background: '#e5484d' }} />
        <div className="smpte-bar" style={{ background: '#3b5bdb' }} />
      </div>
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          marginBottom: 10,
        }}
      >
        Off air
      </h1>

      <p style={{ color: 'var(--ink-secondary)', fontSize: 16, marginBottom: 28, maxWidth: 440 }}>
        {reason}
      </p>

      <button onClick={onTryAgain} className="btn-pill primary" style={{ minWidth: 140 }}>
        <RefreshCw size={16} />
        <span>Try again</span>
      </button>
    </div>
  );
};
