'use client';

import React from 'react';
import { Category } from '../lib/types';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

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
  const count = selectedIds.length;
  const isMinReached = count >= 3;
  const isMaxReached = count >= 8;

  const getCounterText = () => {
    if (count < 3) return `${count} of 3 picked`;
    if (count >= 8) return '8 picked · that’s the max for now';
    return `${count} picked`;
  };

  return (
    <div className="app-container" style={{ paddingBottom: 100 }}>
      <header className="top-nav">
        <button onClick={onBack} className="btn-pill" aria-label="Go back to power screen">
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <div className="brand-logo">
          <span className="brand-dot" />
          <span>tuned</span>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
          }}
        >
          What do you want to watch?
        </h1>
        <p style={{ color: 'var(--ink-secondary)', fontSize: 16, marginTop: 8, marginBottom: 28 }}>
          Pick at least 3, up to 8. You can change these anytime.
        </p>

        <div className="category-grid">
          {categories.map((cat) => {
            const isSelected = selectedIds.includes(cat.id);
            const selectionOrder = selectedIds.indexOf(cat.id);

            return (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                aria-pressed={isSelected}
                style={{
                  position: 'relative',
                  height: 130,
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px',
                  color: '#ffffff',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  overflow: 'hidden',
                  background: `radial-gradient(circle at 80% 20%, hsl(${cat.hue}, 85%, 55%), transparent 70%), linear-gradient(135deg, hsl(${cat.hue}, 70%, 25%), hsl(${cat.hue}, 80%, 12%))`,
                  border: isSelected ? '3px solid var(--ink)' : '1px solid var(--border)',
                  boxShadow: isSelected
                    ? `0 0 0 2px var(--panel), 0 8px 24px hsla(${cat.hue}, 70%, 50%, 0.35)`
                    : '0 4px 12px rgba(0,0,0,0.06)',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  cursor: !isSelected && isMaxReached ? 'not-allowed' : 'pointer',
                  opacity: !isSelected && isMaxReached ? 0.45 : 1,
                }}
              >
                {/* Selection Badge */}
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: '#fff',
                      color: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 700,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}

                {isSelected && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      background: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(4px)',
                      padding: '2px 8px',
                      borderRadius: 99,
                      letterSpacing: '0.05em',
                    }}
                  >
                    CH {String(selectionOrder + 1).padStart(2, '0')}
                  </span>
                )}

                <span
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      {/* Sticky Bottom Bar (PRD K-8) */}
      <footer
        style={{
          position: 'fixed',
          bottom: 24,
          left: 16,
          right: 16,
          maxWidth: 900,
          margin: '0 auto',
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-pill)',
          padding: '10px 16px 10px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
          zIndex: 50,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: count < 3 ? 'var(--ink-secondary)' : count >= 8 ? 'var(--accent)' : 'var(--ink)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {getCounterText()}
        </span>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={onSkip} className="btn-pill" title="Pick 4 default categories">
            <Sparkles size={15} />
            <span>Skip</span>
          </button>
          <button
            onClick={onContinue}
            disabled={!isMinReached}
            className="btn-pill primary"
            style={{ minWidth: 120 }}
          >
            <span>Continue</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
