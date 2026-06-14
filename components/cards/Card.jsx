import React from 'react';

let injected = false;
function useCardStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-card {
    background: var(--ink-2); border: 1px solid var(--rule-dark);
    border-radius: var(--radius-sm); padding: 32px;
    transition: border-color var(--dur-slow) var(--ease), background var(--dur-slow) var(--ease), transform var(--dur-slow) var(--ease), box-shadow var(--dur-slow) var(--ease);
  }
  body.light .hx-card, [data-theme="light"] .hx-card { background: #fff; border-color: var(--rule-light); }
  .hx-card--flat { background: transparent; }
  body.light .hx-card--flat, [data-theme="light"] .hx-card--flat { background: transparent; }
  .hx-card--hover:hover { background: var(--ink-3); border-color: var(--rule-dark-2); }
  body.light .hx-card--hover:hover, [data-theme="light"] .hx-card--hover:hover { background: var(--paper-warm); border-color: var(--mute); }
  .hx-card--lift:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
  `;
  const el = document.createElement('style');
  el.id = 'hx-card-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Generic bordered surface — the base for form panels, team cards and any
 * boxed content. Optional hover tint or lift.
 */
export function Card({ hover = false, lift = false, flat = false, as = 'div', className = '', children, style = {}, ...rest }) {
  useCardStyles();
  const Tag = as;
  const cls = ['hx-card', flat ? 'hx-card--flat' : '', hover ? 'hx-card--hover' : '', lift ? 'hx-card--lift' : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} style={style} {...rest}>{children}</Tag>;
}
