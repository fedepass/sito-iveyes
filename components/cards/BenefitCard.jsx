import React from 'react';

/**
 * A benefit cell — a teal Fraunces stat over a title and description.
 * Lives inside the hairline benefits grid.
 */
export function BenefitCard({ stat, title, children, style = {}, ...rest }) {
  return (
    <div style={{ background: 'var(--ink)', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '12px', ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--fs-stat)', fontWeight: 300, lineHeight: 1,
        color: 'var(--teal-bright)', letterSpacing: '-0.02em', fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      }}>{stat}</div>
      <h4 style={{
        fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 500, color: 'var(--ivory)',
        letterSpacing: '-0.01em', marginTop: '8px', fontVariationSettings: "'SOFT' 30, 'opsz' 60",
      }}>{title}</h4>
      <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--ivory-dim)' }}>{children}</p>
    </div>
  );
}
