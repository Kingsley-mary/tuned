'use client';

import React, { useEffect, useState } from 'react';
import { Category, ChannelLineup } from '../lib/types';
import { ArrowUp, ArrowDown, X, Plus, AlertCircle, RefreshCw, Tv } from 'lucide-react';

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
  const canRemove = channelCount > 3; // Minimum 3 channels

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

  const [sel, setSel] = useState(0);
  const safeSel = Math.min(sel, Math.max(0, channelCount - 1));
  const colSplit = Math.ceil(channelCount / 2);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onDone();
      } else if (e.key === 'ArrowUp' && e.shiftKey) {
        e.preventDefault();
        if (safeSel > 0) {
          onMoveUp(safeSel);
          setSel(safeSel - 1);
        }
      } else if (e.key === 'ArrowDown' && e.shiftKey) {
        e.preventDefault();
        if (safeSel < channelCount - 1) {
          onMoveDown(safeSel);
          setSel(safeSel + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSel(Math.max(0, safeSel - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSel(Math.min(channelCount - 1, safeSel + 1));
      } else if (e.key === 'ArrowLeft') {
        if (safeSel >= colSplit) {
          e.preventDefault();
          setSel(safeSel - colSplit);
        }
      } else if (e.key === 'ArrowRight') {
        if (safeSel < colSplit && safeSel + colSplit < channelCount) {
          e.preventDefault();
          setSel(safeSel + colSplit);
        }
      } else if ((e.key === 'Delete' || e.key === 'Backspace') && canRemove) {
        e.preventDefault();
        onRemoveChannel(safeSel);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [safeSel, channelCount, colSplit, canRemove, onDone, onMoveUp, onMoveDown, onRemoveChannel]);

  const selected = channels[safeSel];
  const columns = [
    { offset: 0, items: channels.slice(0, colSplit) },
    { offset: colSplit, items: channels.slice(colSplit) },
  ].filter((col) => col.items.length > 0);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest('button, a, input, select, textarea, form, .mg-card, .mg-item')) {
      return;
    }
    onDone();
  };

  return (
    <div
      className="gd-screen mg-screen"
      onClick={handleBackgroundClick}
      style={{ ['--h' as string]: selected?.hue ?? 355 } as React.CSSProperties}
    >
      <header className="gd-header">
        <div>
          <div className="brand-logo" style={{ color: '#fff' }}>
            <span className="brand-dot" />
            <span>tuned</span>
          </div>
          <div className="gd-title">
            <Tv size={14} /> Channel lineup
          </div>
        </div>
        <div className="gd-clock" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div>
            <div className="gd-date">{channelCount} channels</div>
            <div className="mg-sub">Minimum 3 channels</div>
          </div>
          <button onClick={onDone} className="osd-btn active-solid" style={{ height: 38, padding: '0 18px' }}>
            Done
          </button>
        </div>
      </header>

      <div className="mg-body">
        {/* Left: lineup split into two columns so all channels stay visible without deep scrolling */}
        <section className="mg-list">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="mg-col">
              {col.items.map((ch, localIdx) => {
                const idx = col.offset + localIdx;
                return (
                  <button
                    key={ch.categoryId + idx}
                    onClick={() => setSel(idx)}
                    onDoubleClick={onDone}
                    className={`mg-item${idx === safeSel ? ' selected' : ''}`}
                    style={{ ['--h' as string]: ch.hue } as React.CSSProperties}
                  >
                    <span className="mg-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="mg-name">{ch.categoryName}</span>
                    {ch.error && <span className="mg-err">Failed to load</span>}
                    {idx === 0 && <span className="mg-tag">Plays first</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </section>

        {/* Right: contextual actions for the focused channel + add */}
        <section className="mg-side">
          {selected && (
            <div className="mg-card">
              <div className="mg-card-eyebrow">Selected · CH {String(safeSel + 1).padStart(2, '0')}</div>
              <div className="mg-card-title">{selected.categoryName}</div>
              <div className="mg-actions">
                <button className="osd-btn" disabled={safeSel === 0} onClick={() => { onMoveUp(safeSel); setSel(safeSel - 1); }}>
                  <ArrowUp size={15} /> Move up
                </button>
                <button className="osd-btn" disabled={safeSel === channelCount - 1} onClick={() => { onMoveDown(safeSel); setSel(safeSel + 1); }}>
                  <ArrowDown size={15} /> Move down
                </button>
                <button className="osd-btn danger" disabled={!canRemove} title={!canRemove ? 'Minimum 3 channels required' : 'Remove channel'} onClick={() => onRemoveChannel(safeSel)}>
                  <X size={15} /> Remove
                </button>
                {selected.error && (
                  <button className="osd-btn" onClick={() => onRetryChannel?.(safeSel)}>
                    <RefreshCw size={14} /> Retry
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="mg-card">
            <div className="mg-card-eyebrow">Add a channel</div>
            {unpickedCategories.length > 0 && (
              <div className="mg-chips">
                {unpickedCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onAddCategory(cat)}
                    className="mg-chip"
                    style={{ ['--h' as string]: cat.hue } as React.CSSProperties}
                  >
                    <Plus size={13} /> {cat.name}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={handleAddCustom} className="mg-form">
              <input
                type="text"
                value={customInput}
                onChange={(e) => {
                  setCustomInput(e.target.value);
                  setErrorMessage('');
                }}
                disabled={isResolving}
                placeholder="Paste a YouTube link or @handle"
                className="input-pill mg-input"
              />
              <button type="submit" disabled={isResolving || !customInput.trim()} className="osd-btn active-solid">
                {isResolving ? 'Adding…' : 'Add'}
              </button>
            </form>
            {errorMessage && (
              <div className="mg-error">
                <AlertCircle size={15} /> <span>{errorMessage}</span>
              </div>
            )}
          </div>

          <button onClick={onPreviewOffAir} className="mg-link">Preview off-air test pattern</button>
        </section>
      </div>

      <footer className="gd-footer">
        <div className="gd-legend">
          <span>Select <span className="kbd-osd">↑↓ ←→</span></span>
          <span>Reorder <span className="kbd-osd">SHIFT + ↑↓</span></span>
          <span>Remove <span className="kbd-osd">DEL</span></span>
          <button onClick={onDone}>Done <span className="kbd-osd">ESC</span></button>
        </div>
      </footer>
    </div>
  );
};