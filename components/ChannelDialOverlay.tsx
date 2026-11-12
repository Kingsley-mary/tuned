'use client';

import React from 'react';
import { ChannelLineup } from '../lib/types';
import { Hash, X, CornerDownLeft, Delete } from 'lucide-react';

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
  onToggleNumpad,
}) => {
  const chNum = parseInt(dialBuffer, 10);
  const maxDigits = Math.max(2, String(totalChannels).length);
  const displayDigits = dialBuffer || '—';
  const showTrailingDash = status === 'dialing' && dialBuffer.length < maxDigits;

  const accentColor = previewChannel
    ? `hsl(${previewChannel.hue}, 92%, 58%)`
    : status === 'invalid'
    ? '#ff4d4d'
    : '#3bf589';

  return (
    <div
      className={`tv-dial-card status-${status}`}
      onClick={(e) => e.stopPropagation()}
      style={{ ['--dial-accent' as string]: accentColor } as React.CSSProperties}
      role="dialog"
      aria-label="Direct channel dialer"
    >
      {/* Top Header */}
      <div className="tv-dial-head">
        <div className="tv-dial-eyebrow">
          <span className="tv-dial-indicator-dot" />
          <span>DIRECT CHANNEL TUNE</span>
        </div>
        <div className="tv-dial-actions">
          <button
            type="button"
            className={`tv-dial-action-btn${showNumpad ? ' active' : ''}`}
            onClick={onToggleNumpad}
            title={showNumpad ? 'Hide Keypad' : 'Show Keypad'}
            aria-label={showNumpad ? 'Hide Keypad' : 'Show Keypad'}
          >
            <Hash size={13} />
            <span>Keypad</span>
          </button>
          <button
            type="button"
            className="tv-dial-action-btn icon-only"
            onClick={onClose}
            title="Cancel (Esc)"
            aria-label="Cancel direct dialing"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Main Channel Digits Display */}
      <div className="tv-dial-display-row">
        <span className="tv-dial-prefix">CH</span>
        <span className="tv-dial-digits">
          {displayDigits}
          {showTrailingDash && <span className="tv-dial-cursor">-</span>}
        </span>
      </div>

      {/* Channel Preview / Status Info */}
      <div className="tv-dial-info-row">
        {status === 'tuning' && (
          <div className="tv-dial-status-msg tuning">
            <span className="tv-dial-spinner" />
            <span>Tuning to CH {String(chNum).padStart(2, '0')} {previewChannel?.categoryName ? `· ${previewChannel.categoryName.toUpperCase()}` : ''}</span>
          </div>
        )}

        {status === 'invalid' && (
          <div className="tv-dial-status-msg invalid">
            <span>⚠ CH {dialBuffer} NOT AVAILABLE (1–{totalChannels})</span>
          </div>
        )}

        {status === 'dialing' && previewChannel && (
          <div className="tv-dial-preview-content">
            <div className="tv-dial-badge-wrap">
              <span
                className="tv-dial-badge"
                style={{ backgroundColor: `hsl(${previewChannel.hue}, 85%, 52%)` }}
              >
                {previewChannel.categoryName}
              </span>
              <span className="tv-dial-channel-index">
                CH {String(chNum).padStart(2, '0')} of {totalChannels}
              </span>
            </div>
            <p className="tv-dial-desc">
              {previewChannel.description ||
                `Live broadcast · ${previewChannel.videos?.length || 0} scheduled programs`}
            </p>
          </div>
        )}

        {status === 'dialing' && !previewChannel && (
          <div className="tv-dial-status-msg prompt">
            <span>Enter channel number (1–{totalChannels})</span>
          </div>
        )}
      </div>

      {/* Animated Countdown Progress Bar */}
      {status === 'dialing' && (
        <div className="tv-dial-timer-track">
          <div
            key={timerKey}
            className="tv-dial-timer-fill"
            style={{ animationDuration: `${timeoutMs}ms` }}
          />
        </div>
      )}

      {/* Shortcut hints */}
      <div className="tv-dial-footer">
        <span className="tv-dial-hint">
          {status === 'dialing' ? (
            <>
              Press <b>0–9</b> · <b>Enter ⏎</b> to tune · <b>Esc</b> to cancel
            </>
          ) : status === 'tuning' ? (
            <>Switching broadcast feed…</>
          ) : (
            <>Channel out of bounds</>
          )}
        </span>
        {status === 'dialing' && previewChannel && (
          <button type="button" className="tv-dial-enter-pill" onClick={onEnter}>
            <span>Tune</span>
            <CornerDownLeft size={11} />
          </button>
        )}
      </div>

      {/* On-screen touch numpad */}
      {showNumpad && (
        <div className="tv-dial-numpad">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              type="button"
              className="tv-dial-num-btn"
              onClick={() => onDigitPress(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            type="button"
            className="tv-dial-num-btn fn-btn"
            onClick={onBackspace}
            title="Backspace"
            aria-label="Backspace"
          >
            <Delete size={16} />
          </button>
          <button
            type="button"
            className="tv-dial-num-btn"
            onClick={() => onDigitPress('0')}
          >
            0
          </button>
          <button
            type="button"
            className="tv-dial-num-btn enter-btn"
            onClick={onEnter}
            title="Tune Channel"
            aria-label="Tune Channel"
          >
            <CornerDownLeft size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
