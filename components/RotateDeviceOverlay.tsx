'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';

interface RotateDeviceOverlayProps {
  onEnterFullscreen?: () => void;
}

export const RotateDeviceOverlay: React.FC<RotateDeviceOverlayProps> = ({
  onEnterFullscreen,
}) => {
  return (
    <div
      className="rotate-device-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Rotate device to landscape"
    >
      <div className="rotate-device-scanlines" aria-hidden="true" />
      <div className="rotate-device-content">
        {/* Animated Phone Illustration */}
        <div className="rotate-phone-anim" aria-hidden="true">
          <div className="rotate-phone-device">
            <div className="rotate-phone-notch" />
            <div className="rotate-phone-screen">
              <span className="rotate-screen-dot" />
              <span className="rotate-screen-text">TUNED</span>
            </div>
          </div>
          <svg className="rotate-arrow-arc" viewBox="0 0 100 100" fill="none">
            <path
              d="M 24,50 A 28,28 0 0,1 50,22"
              stroke="#ff3b30"
              strokeWidth="3.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
            <polygon points="50,16 60,22 50,28" fill="#ff3b30" />
          </svg>
        </div>

        <div className="rotate-device-badge">
          <span className="brand-dot" />
          <span>WIDESCREEN TELEVISION</span>
        </div>

        <h2 className="rotate-device-title">ROTATE YOUR DEVICE</h2>

        <p className="rotate-device-desc">
          Tuned is designed exclusively for widescreen television viewing in landscape mode.
        </p>

        {onEnterFullscreen && (
          <button
            type="button"
            className="rotate-device-btn"
            onClick={onEnterFullscreen}
          >
            <RotateCcw size={16} />
            <span>Turn Phone Sideways</span>
          </button>
        )}
      </div>
    </div>
  );
};
