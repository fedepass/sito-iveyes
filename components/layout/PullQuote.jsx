import React from 'react';

/**
 * Editorial pull quote — a large Fraunces blockquote with a mono cite.
 * Wrap emphasis in <em> for the gold italic. Render inside a tinted
 * section band (e.g. background var(--ink-3)) for the full effect.
 */
export function PullQuote({ children, cite, style = {}, ...rest }) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <blockquote style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2,
        fontWeight: 400, letterSpacing: '-0.02em', maxWidth: '28ch', color: 'var(--text)',
        fontVariationSettings: "'SOFT' 30, 'opsz' 96", margin: 0,
      }}>
        {children}
      </blockquote>
      {cite && (
        <figcaption style={{
          marginTop: '32px', fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.2em',
          textTransform: 'uppercase', fontStyle: 'normal', color: 'var(--accent-soft)',
        }}>
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
