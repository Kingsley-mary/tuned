'use client';

import React, { useState } from 'react';
import { Category, ChannelLineup } from '../lib/types';
import { ArrowUp, ArrowDown, X, Plus, AlertCircle, RefreshCw } from 'lucide-react';

interface ManageScreenProps {
  channels: ChannelLineup[];
  allCategories: Category[];
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onRemoveChannel: (index: number) => void;
  onAddCategory: (category: Category) => void;
  onAddCustomChannel: (input: string) => Promise<string | null>; // Returns error or null on success
  onRetryChannel?: (index: number) => void;
  onDone: () => void;
  onPreviewOffAir: () => void;
}

export const ManageScreen: React.FC<ManageScreenProps> = ({
  channels,
  allCategories,
  onMoveUp,
  onMoveDown,
  onRemoveChannel,
  onAddCategory,
  onAddCustomChannel,
  onRetryChannel,
  onDone,
  onPreviewOffAir,
}) => {
  const [customInput, setCustomInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isResolving, setIsResolving] = useState(false);

  const channelCount = channels.length;
  const canRemove = channelCount > 3; // PRD M-2: Must keep between 3 and 8 channels
  const canAdd = channelCount < 8;

  // Unpicked categories for "Add a channel" chips
  const unpickedCategories = allCategories.filter(
    (cat) => !channels.some((ch) => ch.categoryId === cat.id)
  );

  const handleAddCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = customInput.trim();

    if (!query) {
      setErrorMessage('Paste a YouTube link or @handle first.');
      return;
    }

    if (!canAdd) {
      setErrorMessage('You’re at the 8 channel max.');
      return;
    }

    setIsResolving(true);
    setErrorMessage('');

    try {
      const err = await onAddCustomChannel(query);
      if (err) {
        setErrorMessage(err);
      } else {
        setCustomInput('');
        setErrorMessage('');
      }
    } catch {
      setErrorMessage('Could not resolve channel. Check your network connection.');
    } finally {
      setIsResolving(false);
    }
  };

  return (
    <div className="app-container">
      <header className="top-nav">
        <div className="brand-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </div>

        <button onClick={onDone} className="btn-pill primary" style={{ minWidth: 90 }}>
          Done
        </button>
      </header>

      <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          Your channels
        </h1>
        <p style={{ color: 'var(--ink-secondary)', fontSize: 15, marginTop: 6 }}>
          Keep between 3 and 8. The top one plays first.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}
      >
        {/* Left Column: Active Channels List */}
        <div
          style={{
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: 20,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-secondary)',
              marginBottom: 16,
            }}
          >
            Current Lineup ({channelCount} of 8)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {channels.map((ch, idx) => {
              return (
                <div
                  key={ch.categoryId + idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    height: 52,
                    padding: '0 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--subtle-bg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      color: 'var(--ink-secondary)',
                      width: 24,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: `hsl(${ch.hue}, 85%, 55%)`,
                      flexShrink: 0,
                    }}
                  />

                  <span style={{ flex: 1, fontWeight: 600, fontSize: 15, textTransform: 'capitalize' }}>
                    {ch.categoryName}
                  </span>

                  {ch.error && (
                    <button
                      onClick={() => onRetryChannel?.(idx)}
                      className="btn-pill"
                      style={{ height: 32, padding: '0 8px', fontSize: 12, color: 'var(--accent)' }}
                      title="Retry loading this channel"
                    >
                      <RefreshCw size={12} />
                      <span>Retry</span>
                    </button>
                  )}

                  {/* Actions: Move Up, Move Down, Remove */}
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button
                      onClick={() => onMoveUp(idx)}
                      disabled={idx === 0}
                      className="icon-btn"
                      style={{ width: 32, height: 32 }}
                      aria-label="Move channel up"
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      onClick={() => onMoveDown(idx)}
                      disabled={idx === channelCount - 1}
                      className="icon-btn"
                      style={{ width: 32, height: 32 }}
                      aria-label="Move channel down"
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      onClick={() => onRemoveChannel(idx)}
                      disabled={!canRemove}
                      className="icon-btn"
                      style={{ width: 32, height: 32, color: canRemove ? 'var(--accent)' : undefined }}
                      aria-label="Remove channel"
                      title={!canRemove ? 'Minimum 3 channels required' : 'Remove channel'}
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {!canRemove && (
            <p style={{ color: 'var(--ink-secondary)', fontSize: 13, marginTop: 14 }}>
              Minimum 3 channels required.
            </p>
          )}
        </div>

        {/* Right Column: Add Category & Add Custom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Add a Channel from Categories (PRD M-3) */}
          <div
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-secondary)',
                marginBottom: 12,
              }}
            >
              Add a Channel
            </div>

            {!canAdd ? (
              <p style={{ color: 'var(--ink-secondary)', fontSize: 14 }}>
                You’re at the 8 channel max. Remove one to add another.
              </p>
            ) : unpickedCategories.length === 0 ? (
              <p style={{ color: 'var(--ink-secondary)', fontSize: 14 }}>
                All default categories added!
              </p>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {unpickedCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onAddCategory(cat)}
                    className="btn-pill"
                    style={{ fontSize: 13 }}
                  >
                    <Plus size={14} />
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add Your Own (PRD M-4) */}
          <div
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-secondary)',
                marginBottom: 6,
              }}
            >
              Add Your Own
            </div>
            <p style={{ color: 'var(--ink-secondary)', fontSize: 13, marginBottom: 14 }}>
              Paste a YouTube channel link or @handle.
            </p>

            <form onSubmit={handleAddCustom} style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={customInput}
                onChange={(e) => {
                  setCustomInput(e.target.value);
                  setErrorMessage('');
                }}
                disabled={!canAdd || isResolving}
                placeholder="youtube.com/@yourchannel"
                style={{
                  flex: 1,
                  height: 44,
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border)',
                  background: 'var(--subtle-bg)',
                  padding: '0 16px',
                  fontSize: 14,
                }}
              />
              <button
                type="submit"
                disabled={!canAdd || isResolving || !customInput.trim()}
                className="btn-pill primary"
                style={{ minWidth: 80 }}
              >
                {isResolving ? 'Adding…' : 'Add'}
              </button>
            </form>

            {errorMessage && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--accent)',
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                <AlertCircle size={15} />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Demo tools (PRD M-6 / Demo) */}
          <div
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-secondary)',
                marginBottom: 10,
              }}
            >
              Demo Tools
            </div>
            <button onClick={onPreviewOffAir} className="btn-pill" style={{ fontSize: 13 }}>
              Preview off-air test pattern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
