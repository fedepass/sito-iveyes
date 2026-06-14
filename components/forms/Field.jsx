import React from 'react';

let injected = false;
function useFieldStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-field { display: flex; flex-direction: column; gap: 8px; }
  .hx-field--full { grid-column: 1 / -1; }
  .hx-field > label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent);
  }
  body.light .hx-field > label, [data-theme="light"] .hx-field > label { color: var(--blue); }
  .hx-field input, .hx-field select, .hx-field textarea {
    font-family: var(--font-body); font-size: 15px; padding: 14px 16px;
    background: var(--ink); border: 1px solid var(--rule-dark); color: var(--ivory);
    border-radius: var(--radius-xs);
    transition: border-color var(--dur) var(--ease), background var(--dur) var(--ease);
  }
  body.light .hx-field input, body.light .hx-field select, body.light .hx-field textarea,
  [data-theme="light"] .hx-field input, [data-theme="light"] .hx-field select, [data-theme="light"] .hx-field textarea {
    background: #FFFFFF; border-color: var(--rule-light); color: var(--coal);
  }
  .hx-field input:focus, .hx-field select:focus, .hx-field textarea:focus {
    outline: none; border-color: var(--accent); background: var(--ink-3);
  }
  body.light .hx-field input:focus, body.light .hx-field select:focus, body.light .hx-field textarea:focus,
  [data-theme="light"] .hx-field input:focus, [data-theme="light"] .hx-field select:focus, [data-theme="light"] .hx-field textarea:focus {
    border-color: var(--blue); background: var(--paper-warm);
  }
  .hx-field input::placeholder, .hx-field textarea::placeholder { color: var(--ivory-dim); opacity: 0.6; }
  .hx-field textarea { resize: vertical; min-height: 140px; }
  .hx-field select {
    appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 42px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23B8B0A0' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
    background-repeat: no-repeat; background-position: calc(100% - 16px) center;
  }
  `;
  const el = document.createElement('style');
  el.id = 'hx-field-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Labelled form field — text, email, select or textarea — matching the
 * Hexaros contact form. Mono uppercase label, accent focus ring.
 */
export function Field({
  label,
  type = 'text',
  options = [],
  full = false,
  id,
  className = '',
  children,
  ...rest
}) {
  useFieldStyles();
  const fieldId = id || (rest.name ? `f-${rest.name}` : undefined);
  const cls = ['hx-field', full ? 'hx-field--full' : '', className].filter(Boolean).join(' ');

  let control;
  if (type === 'textarea') {
    control = <textarea id={fieldId} {...rest} />;
  } else if (type === 'select') {
    control = (
      <select id={fieldId} {...rest}>
        {children || options.map((o) =>
          typeof o === 'string'
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>
        )}
      </select>
    );
  } else {
    control = <input id={fieldId} type={type} {...rest} />;
  }

  return (
    <div className={cls}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {control}
    </div>
  );
}
