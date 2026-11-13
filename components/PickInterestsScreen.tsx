'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Category } from '../lib/types';
import { ArrowLeft, Sparkles, Tv } from 'lucide-react';

interface PickInterestsScreenProps {
  categories: Category[];
  selectedIds: string[];
  onToggleCategory: (id: string) => void;
  onContinue: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export const PickInterestsScreen: React.FC<PickInterestsScreenProps> = ({
  categories,
  selectedIds,
  onToggleCategory,
  onContinue,
  onSkip,
  onBack,
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [focusedIdx, setFocusedIdx] = useState<number>(0);

  const count = selectedIds.length;
  const isMinReached = count >= 3;
  const firstCategory = selectedIds.length > 0 ? categories.find((c) => c.id === selectedIds[0]) : null;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const N = categories.length;
      if (N === 0) return;

      const gridEl = gridRef.current;
      const cols = gridEl
        ? Math.max(1, getComputedStyle(gridEl).gridTemplateColumns.split(' ').filter(Boolean).length)
        : 5;

      const moveFocus = (delta: number) => {
        e.preventDefault();
        setFocusedIdx((prev) => {
          const next = Math.max(0, Math.min(N - 1, prev + delta));
          const btn = gridEl?.querySelector<HTMLButtonElement>(`[data-pk-idx="${next}"]`);
          btn?.focus();
          return next;
        });
      };

      if (e.key === 'ArrowRight') moveFocus(1);
      else if (e.key === 'ArrowLeft') moveFocus(-1);
      else if (e.key === 'ArrowDown') moveFocus(cols);
      else if (e.key === 'ArrowUp') moveFocus(-cols);
      else if (e.key === 'Enter' || e.key === ' ') {
        const active = document.activeElement as HTMLElement | null;
        if (active?.classList.contains('pk-tile')) {
          e.preventDefault();
          const idxAttr = active.getAttribute('data-pk-idx');
          const idx = idxAttr ? parseInt(idxAttr, 10) : focusedIdx;
          const targetCat = categories[idx];
          if (targetCat) {
            setFocusedIdx(idx);
            onToggleCategory(targetCat.id);
          }
        }
      } else if (e.key === 'c' || e.key === 'C') {
        if (isMinReached) {
          e.preventDefault();
          onContinue();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [categories, focusedIdx, isMinReached, onBack, onContinue, onToggleCategory]);

  return (
    <div className="pk-screen">
      <div className="pk-inner">
        <header className="pk-top">
          <div className="pk-brand-wrap">
            <button
              type="button"
              onClick={onBack}
              className="pk-mobile-back"
              aria-label="Back to power screen"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
            <div>
              <div className="brand-logo" style={{ color: '#fff' }}>
                <span className="brand-dot" />
                <span>tuned</span>
              </div>
              <div className="pk-tv">
                <Tv size={18} strokeWidth={1.6} />
                <span>Pick your channels</span>
              </div>
            </div>
          </div>

          <div className="pk-cnt">
            <div className="pk-cnt-text">
              <b>{count} picked</b>
              <small>
                {count < 3
                  ? 'Minimum 3 channels'
                  : `${firstCategory?.name || 'Channel 1'} plays first`}
              </small>
            </div>
            <button type="button" onClick={onSkip} className="pk-pill g" title="Pick default channels">
              <Sparkles size={16} strokeWidth={1.6} />
              <span>Skip</span>
            </button>
            <button
              type="button"
              onClick={onContinue}
              disabled={!isMinReached}
              className="pk-pill w"
            >
              Continue
            </button>
          </div>
        </header>

        <h1 className="pk-heading">What do you want to watch?</h1>
        <p className="pk-sub">Pick at least 3 channels. You can change or add more anytime.</p>

        <div className="pk-grid" ref={gridRef}>
          {categories.map((cat, idx) => {
            const selectionOrder = selectedIds.indexOf(cat.id);
            const isSelected = selectionOrder > -1;

            return (
              <button
                key={cat.id}
                type="button"
                data-pk-idx={idx}
                onClick={() => {
                  setFocusedIdx(idx);
                  onToggleCategory(cat.id);
                }}
                aria-pressed={isSelected}
                className={`pk-tile${isSelected ? ' on' : ''}`}
              >
                {isSelected && (
                  <span className="pk-chp">CH {String(selectionOrder + 1).padStart(2, '0')}</span>
                )}
                {selectionOrder === 0 && <span className="pk-fst">Plays first</span>}
                <span className="pk-ck">{isSelected ? '✓' : '+'}</span>
                <span className="pk-nm">{cat.name}</span>
              </button>
            );
          })}
        </div>

        <div className="pk-keys">
          <div>
            Select <span className="pk-k">Enter</span>
          </div>
          <div>
            Move <span className="pk-k">↑ ↓ ← →</span>
          </div>
          <button
            type="button"
            onClick={() => isMinReached && onContinue()}
            disabled={!isMinReached}
            style={{ opacity: isMinReached ? 1 : 0.4 }}
          >
            Continue <span className="pk-k">C</span>
          </button>
          <button type="button" onClick={onBack}>
            Back <span className="pk-k">Esc</span>
          </button>
        </div>
      </div>
    </div>
  );
};
