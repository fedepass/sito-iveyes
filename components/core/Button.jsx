import React from 'react';

/* Inject a component stylesheet once. Tokens come from styles.css. */
let injected = false;
function useButtonStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 24px; border-radius: var(--radius-pill);
    font-family: var(--font-body); font-size: 14px; font-weight: 600;
    letter-spacing: 0.01em; cursor: pointer; border: 1px solid transparent;
    transition: transform var(--dur) var(--ease), background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease);
    text-decoration: none; white-space: nowrap;
  }
  .hx-btn--sm { padding: 9px 16px; font-size: 13px; }
  .hx-btn--lg { padding: 17px 30px; font-size: 15px; }
  .hx-btn .hx-btn__arr { transition: transform 250ms var(--ease); }
  .hx-btn:hover .hx-btn__arr { transform: translateX(4px); }

  /* primary — gold on dark, blue on light */
  .hx-btn--primary { background: var(--accent); color: var(--on-accent); }
  .hx-btn--primary:hover { background: var(--accent-soft); transform: translateY(-2px); }
  body.light .hx-btn--primary, [data-theme="light"] .hx-btn--primary { background: var(--blue); color: var(--paper); }
  body.light .hx-btn--primary:hover, [data-theme="light"] .hx-btn--primary:hover { background: var(--blue-deep); }

  /* ghost — outline */
  .hx-btn--ghost { border-color: var(--rule-dark-2); color: var(--ivory); }
  .hx-btn--ghost:hover { background: var(--ivory); color: var(--ink); border-color: var(--ivory); }
  body.light .hx-btn--ghost, [data-theme="light"] .hx-btn--ghost { border-color: var(--rule-light); color: var(--coal); }
  body.light .hx-btn--ghost:hover, [data-theme="light"] .hx-btn--ghost:hover { background: var(--coal); color: var(--paper); border-color: var(--coal); }

  .hx-btn[disabled], .hx-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
  `;
  const el = document.createElement('style');
  el.id = 'hx-button-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

const ArrowRight = () => (
  <svg className="hx-btn__arr" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hexaros pill button. Gold-on-ink (dark) or blue-on-paper (light theme).
 * Set `arrow` for the signature sliding-arrow CTA.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  children,
  className = '',
  ...rest
}) {
  useButtonStyles();
  const cls = [
    'hx-btn',
    `hx-btn--${variant}`,
    size === 'sm' ? 'hx-btn--sm' : size === 'lg' ? 'hx-btn--lg' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight />}
    </>
  );

  if (href) {
    return <a href={href} className={cls} {...rest}>{content}</a>;
  }
  return <button className={cls} {...rest}>{content}</button>;
}
