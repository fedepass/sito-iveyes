import React from 'react';

let injected = false;
function useCheckboxStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-check { display: flex; align-items: flex-start; gap: 12px; font-family: var(--font-body);
    font-size: 12.5px; color: var(--ivory-dim); line-height: 1.5; cursor: pointer; }
  body.light .hx-check, [data-theme="light"] .hx-check { color: var(--coal-soft); }
  .hx-check input { appearance: none; -webkit-appearance: none; margin: 0; flex-shrink: 0;
    width: 18px; height: 18px; margin-top: 1px; border: 1px solid var(--rule-dark-2);
    border-radius: var(--radius-xs); background: var(--ink); cursor: pointer;
    transition: border-color var(--dur) var(--ease), background var(--dur) var(--ease); position: relative; }
  body.light .hx-check input, [data-theme="light"] .hx-check input { background: #fff; border-color: var(--rule-light); }
  .hx-check input:checked { background: var(--accent); border-color: var(--accent); }
  body.light .hx-check input:checked, [data-theme="light"] .hx-check input:checked { background: var(--blue); border-color: var(--blue); }
  .hx-check input:checked::after { content: ''; position: absolute; left: 5px; top: 1px;
    width: 5px; height: 10px; border: solid var(--ink); border-width: 0 2px 2px 0; transform: rotate(45deg); }
  body.light .hx-check input:checked::after, [data-theme="light"] .hx-check input:checked::after { border-color: #fff; }
  .hx-check input:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  `;
  const el = document.createElement('style');
  el.id = 'hx-checkbox-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Custom checkbox with inline label — the GDPR consent control on the
 * contact form. Gold (dark) / blue (light) tick.
 */
export function Checkbox({ children, id, className = '', style = {}, ...rest }) {
  useCheckboxStyles();
  return (
    <label className={['hx-check', className].filter(Boolean).join(' ')} htmlFor={id} style={style}>
      <input type="checkbox" id={id} {...rest} />
      <span>{children}</span>
    </label>
  );
}
