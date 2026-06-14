import React from 'react';

/**
 * A headline metric — a large Fraunces numeral over a mono/sans label.
 * Used in the hero metric strip (gold) and the benefits grid (teal).
 */
export function Metric({ value, label, tone = 'gold', style = {}, ...rest }) {
  const color = tone === 'teal' ? 'var(--teal-bright)' : 'var(--accent)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', ...style }} {...rest}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-stat)',
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color,
          fontVariationSettings: "'SOFT' 30, 'opsz' 144",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '13px',
          lineHeight: 1.4,
          color: 'var(--text-dim)',
          maxWidth: '28ch',
        }}
      >
        {label}
      </div>
    </div>
  );
}
