import React from 'react';

let injected = false;
function useSectionHeadStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-sechead { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; margin-bottom: 64px; align-items: end; }
  .hx-sechead__h { font-family: var(--font-display); font-weight: 400; font-size: var(--fs-h2);
    line-height: 1.05; letter-spacing: -0.025em; color: var(--text); font-variation-settings: 'SOFT' 30, 'opsz' 144; }
  .hx-sechead__h em { font-style: italic; color: var(--accent); }
  .hx-sechead__lede { font-size: 17px; line-height: 1.55; max-width: 52ch; color: var(--text-dim); }
  @media (max-width: 860px) { .hx-sechead { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-sechead-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Section header — a mono eyebrow in the left column, a Fraunces h2 (use
 * <em> for the accent emphasis) and an optional lede in the right column.
 */
export function SectionHead({ eyebrow, children, lede, style = {}, ...rest }) {
  useSectionHeadStyles();
  return (
    <div className="hx-sechead" style={style} {...rest}>
      <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}</div>
      <div>
        <h2 className="hx-sechead__h">{children}</h2>
        {lede && <p className="hx-sechead__lede" style={{ marginTop: '20px' }}>{lede}</p>}
      </div>
    </div>
  );
}
