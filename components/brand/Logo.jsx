import React from 'react';

/**
 * Brand marks. `brand="hexaros"` renders the hexagon + teal-blue core; the
 * mark inherits `currentColor` for the outline. `wordmark` adds the name
 * set in Fraunces (Hexaros) / IBM Plex Sans (ivEyes).
 */
export function Logo({ brand = 'hexaros', wordmark = true, size = 32, style = {}, ...rest }) {
  if (brand === 'iveyes') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'currentColor', ...style }} {...rest}>
        <svg width={size * 1.18} height={size} viewBox="0 0 108 108" style={{ flexShrink: 0 }} aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="2.1" d="M24.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
          <path fill="currentColor" d="M33.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
          <path fill="currentColor" d="M49.75,46.3 h8.5 v3.4 h-8.5 z" />
          <path fill="none" stroke="currentColor" strokeWidth="2.1" d="M58.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
          <path fill="var(--accent)" d="M67.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
        </svg>
        {wordmark && (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: size * 0.7, fontWeight: 300, letterSpacing: '0.01em' }}>
            iv<strong style={{ fontWeight: 700 }}>Eyes</strong>
          </span>
        )}
      </span>
    );
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'currentColor', ...style }} {...rest}>
      <svg width={size * 0.89} height={size} viewBox="0 0 48 54" style={{ flexShrink: 0 }} aria-hidden="true">
        <polygon points="24,2 44,14 44,38 24,50 4,38 4,14" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="26" r="4.5" fill="var(--accent)" />
      </svg>
      {wordmark && (
        <span style={{ fontFamily: 'var(--font-display)', fontSize: size * 0.69, fontWeight: 600, letterSpacing: '0.02em', fontVariationSettings: "'SOFT' 30, 'opsz' 60" }}>
          Hexaros
        </span>
      )}
    </span>
  );
}
