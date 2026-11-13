'use client';

import React from 'react';
import { ChannelLineup } from '../lib/types';
import { Delete, CornerDownLeft, X } from 'lucide-react';

export interface ChannelDialOverlayProps {
  dialBuffer: string;
  previewChannel?: ChannelLineup | null;
  totalChannels: number;
  status: 'dialing' | 'tuning' | 'invalid';
  timeoutMs: number;
  timerKey: number;
  showNumpad: boolean;
  onDigitPress: (digit: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
  onClose: () => void;
  onToggleNumpad: () => void;
}

export const ChannelDialOverlay: React.FC<ChannelDialOverlayProps> = ({
  dialBuffer,
  previewChannel,
  totalChannels,
  status,
  timeoutMs,
  timerKey,
  showNumpad,
  onDigitPress,
  onEnter,
  onBackspace,
  onClose,
}) => {
  const chNum = parseInt(dialBuffer, 10);
  const accentColor = previewChannel
    ? `hsl(${previewChannel.hue}, 85%, 52%)`
    : status === 'invalid'
    ? 'var(--accent)'
    : '#ffffff';

  const accentHue = previewChannel ? previewChannel.hue : 355;

  return (
    <div
      className={`tv-dial-hud status-${status}${showNumpad ? ' has-numpad' : ''}`}
      onClick={(e) => e.stopPropagation()}
      style={
        {
          ['--dial-accent']: accentColor,
          ['--dial-accent-hue']: accentHue,
        } as React.CSSProperties
      }
      role="dialog"
      aria-label="Direct channel dialer"
    >
      <div className="tv-dial-display">
        {/* Centered Large Digits Row */}
        <div className="tv-dial-digits-row">
          {dialBuffer ? (
            dialBuffer.split('').map((digit, idx) => (
              <span key={`${idx}-${digit}`} className="tv-dial-digit">
                {digit}
              </span>
            ))
          ) : (
            <span className="tv-dial-digit placeholder">—</span>
          )}
        </div>

        {/* Channel Information Pill (Matches .osd-channel-name in dock) */}
        <div className="tv-dial-meta-row">
          {previewChannel && status !== 'invalid' && (
            <div className="tv-dial-channel-pill">
              <b
                className="tv-dial-channel-badge"
                style={{ backgroundColor: `hsl(${previewChannel.hue}, 80%, 48%)` }}
              >
                CH {String(chNum).padStart(2, '0')}
              </b>
              <span className="tv-dial-channel-name">
                {previewChannel.categoryName}
              </span>
            </div>
          )}

          {status === 'invalid' && (
            <div className="tv-dial-channel-pill invalid">
              <span className="tv-dial-channel-error">
                CH {dialBuffer || '—'} Unavailable (1–{totalChannels})
              </span>
            </div>
          )}

          {status === 'dialing' && !previewChannel && !dialBuffer && (
            <div className="tv-dial-channel-pill placeholder">
              <span className="tv-dial-channel-hint">Enter channel 1–{totalChannels}</span>
            </div>
          )}
        </div>

        {/* Minimal Countdown Progress Bar */}
        {status === 'dialing' && dialBuffer && (
          <div className="tv-dial-timer-track">
            <div
              key={timerKey}
              className="tv-dial-timer-fill"
              style={{ animationDuration: `${timeoutMs}ms` }}
            />
          </div>
        )}
      </div>

      {/* Optional On-Screen Keypad (for touch / mobile) */}
      {showNumpad && (
        <div className="tv-dial-keypad-wrap">
          <div className="tv-dial-keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <button
                key={digit}
                type="button"
                className="tv-dial-key-btn"
                onClick={() => onDigitPress(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="tv-dial-key-btn fn-btn"
              onClick={onBackspace}
              title="Backspace"
              aria-label="Backspace"
            >
              <Delete size={17} />
            </button>
            <button
              type="button"
              className="tv-dial-key-btn"
              onClick={() => onDigitPress('0')}
            >
              0
            </button>
            <button
              type="button"
              className="tv-dial-key-btn enter-btn"
              onClick={onEnter}
              title="Tune Channel"
              aria-label="Tune Channel"
            >
              <CornerDownLeft size={17} />
            </button>
          </div>
          <button
            type="button"
            className="tv-dial-keypad-close"
            onClick={onClose}
            aria-label="Close Keypad"
          >
            <X size={14} />
            <span>Close</span>
          </button>
        </div>
      )}
    </div>
  );
};
