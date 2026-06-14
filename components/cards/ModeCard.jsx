import React from 'react';

let injected = false;
function useModeStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-mode { background: var(--ink); padding: 36px 32px; border-radius: var(--radius-xs);
    border-top: 3px solid var(--accent); transition: transform var(--dur-slow) var(--ease), box-shadow var(--dur-slow) var(--ease); }
  .hx-mode:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
  .hx-mode__tag { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 24px; }
  .hx-mode__h { font-family: var(--font-display); font-size: 32px; font-weight: 400; letter-spacing: -0.02em;
    line-height: 1.05; margin-bottom: 16px; color: var(--ivory); font-variation-settings: 'SOFT' 30, 'opsz' 96; }
  .hx-mode__sub { font-family: var(--font-display); font-style: italic; font-size: 16px;
    color: var(--accent-soft); margin-bottom: 20px; font-variation-settings: 'SOFT' 100, 'opsz' 60; }
  .hx-mode__p { font-size: 14.5px; line-height: 1.6; color: var(--ivory-dim); margin-bottom: 24px; }
  .hx-mode__list { list-style: none; display: flex; flex-direction: column; gap: 10px;
    font-size: 13.5px; color: var(--ivory); }
  .hx-mode__list li { position: relative; padding-left: 18px; }
  .hx-mode__list li::before { content: '→'; position: absolute; left: 0; top: 0; color: var(--accent); }
  `;
  const el = document.createElement('style');
  el.id = 'hx-mode-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * An ivEyes operating-mode card — gold top accent, mono tag, Fraunces title,
 * italic subtitle, body and an arrow-bulleted feature list.
 */
export function ModeCard({ tag, title, subtitle, children, items = [], style = {}, ...rest }) {
  useModeStyles();
  return (
    <article className="hx-mode" style={style} {...rest}>
      {tag && <div className="hx-mode__tag">{tag}</div>}
      <h3 className="hx-mode__h">{title}</h3>
      {subtitle && <div className="hx-mode__sub">{subtitle}</div>}
      {children && <p className="hx-mode__p">{children}</p>}
      {items.length > 0 && (
        <ul className="hx-mode__list">
          {items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )}
    </article>
  );
}
