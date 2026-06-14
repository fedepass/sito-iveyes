import React from 'react';

/* Theme-aware: `gold` follows --accent (gold on dark, clinical teal-blue on
   light). `teal` stays a fixed data-accent. `success` is the validation green. */
const TONES = {
  gold: { bg: 'color-mix(in srgb, var(--accent) 12%, transparent)', border: 'color-mix(in srgb, var(--accent) 32%, transparent)', color: 'var(--accent)' },
  teal: { bg: 'rgba(28,114,147,0.10)', border: 'rgba(28,114,147,0.22)', color: 'var(--teal-bright)' },
  success: { bg: 'color-mix(in srgb, var(--success) 14%, transparent)', border: 'color-mix(in srgb, var(--success) 34%, transparent)', color: 'var(--success)' },
  muted: { bg: 'transparent', border: 'var(--rule-strong)', color: 'var(--text-dim)' },
  solid: { bg: 'var(--accent)', border: 'var(--accent)', color: 'var(--on-accent)' },
};

/**
 * A small pill chip / status badge. Mono uppercase text in a tinted or
 * solid capsule — e.g. "Un prodotto Hexaros", "Disponibile", "Q3 2026".
 */
export function Tag({ children, tone = 'gold', dashed = false, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.gold;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.color,
        border: `1px ${dashed ? 'dashed' : 'solid'} ${t.border}`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
