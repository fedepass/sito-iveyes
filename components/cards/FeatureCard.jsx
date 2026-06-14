import React from 'react';

/**
 * The numbered manifesto / principle / team card. A mono kicker (a number
 * or label), a Fraunces title, and body copy.
 */
export function FeatureCard({ kicker, title, children, style = {}, ...rest }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {kicker != null && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-eyebrow)', color: 'var(--accent)',
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px', display: 'block',
        }}>{kicker}</span>
      )}
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.15,
        letterSpacing: '-0.015em', marginBottom: '16px', color: 'var(--text)',
        fontVariationSettings: "'SOFT' 30, 'opsz' 60",
      }}>{title}</h3>
      <div style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-dim)' }}>{children}</div>
    </article>
  );
}
