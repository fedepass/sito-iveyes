import React from 'react';

let injected = false;
function useTimelineStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-tl { display: grid; grid-template-columns: 140px 1fr; gap: 40px; padding: 24px 0;
    border-bottom: 1px solid var(--rule-dark); align-items: baseline; transition: background var(--dur) var(--ease); }
  .hx-tl:hover { background: rgba(52, 160, 192, 0.03); }
  .hx-tl__year { font-family: var(--font-display); font-size: 22px; color: var(--accent); font-weight: 400;
    letter-spacing: -0.01em; font-variation-settings: 'SOFT' 30, 'opsz' 60; }
  .hx-tl__main { font-size: 16px; line-height: 1.55; color: var(--ivory); }
  .hx-tl__sub { display: block; margin-top: 6px; font-size: 13.5px; color: var(--ivory-dim); }
  @media (max-width: 640px) { .hx-tl { grid-template-columns: 1fr; gap: 4px; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-timeline-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * A roadmap row — a Fraunces year beside a main line and optional subtext.
 * Stack several inside a list for the company timeline.
 */
export function TimelineItem({ year, title, children, style = {}, ...rest }) {
  useTimelineStyles();
  return (
    <li className="hx-tl" style={style} {...rest}>
      <div className="hx-tl__year">{year}</div>
      <div>
        <span className="hx-tl__main">{title}</span>
        {children && <span className="hx-tl__sub">{children}</span>}
      </div>
    </li>
  );
}
