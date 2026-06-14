import React from 'react';
import { Logo } from '../brand/Logo';

let injected = false;
function useFooterStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-footer { position: relative; z-index: 2; padding: 80px 0 40px;
    border-top: 1px solid var(--rule-dark); font-size: 13.5px; }
  body.light .hx-footer, [data-theme="light"] .hx-footer { border-top-color: var(--rule-light); }
  .hx-footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 60px; }
  .hx-footer__brand { max-width: 32ch; color: var(--text); }
  .hx-footer__brand p { margin-top: 20px; color: var(--text-dim); line-height: 1.55; font-size: 14px; }
  .hx-footer__col h5 { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; margin-bottom: 18px; color: var(--accent); }
  .hx-footer__col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin: 0; padding: 0; }
  .hx-footer__col a { color: var(--text-dim); transition: color var(--dur) var(--ease); }
  .hx-footer__col a:hover { color: var(--text); }
  .hx-footer__bottom { padding-top: 32px; border-top: 1px solid var(--rule-dark); display: flex;
    justify-content: space-between; flex-wrap: wrap; gap: 16px; font-size: 12.5px; color: var(--text-dim); }
  body.light .hx-footer__bottom, [data-theme="light"] .hx-footer__bottom { border-top-color: var(--rule-light); }
  @media (max-width: 780px) { .hx-footer__grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
  @media (max-width: 480px) { .hx-footer__grid { grid-template-columns: 1fr; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-footer-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

const DEFAULT_COLS = [
  { title: 'Azienda', links: [{ label: 'Chi siamo', href: 'about.html' }, { label: 'Vision', href: 'about.html#vision' }, { label: 'Contatti', href: 'contact.html' }] },
  { title: 'Prodotti', links: [{ label: 'ivEyes', href: 'iveyes.html' }, { label: 'Modalità', href: 'iveyes.html#modalita' }, { label: 'Architettura', href: 'iveyes.html#architettura' }] },
  { title: 'Risorse', links: [{ label: 'Whitepaper (PDF)', href: '#' }, { label: 'Casi di studio', href: '#' }, { label: 'Press kit', href: '#' }] },
];

/**
 * The site footer — brand block + link columns + a bottom rule with the
 * copyright and location lines.
 */
export function SiteFooter({
  brand = 'hexaros',
  description = 'Tecnologie per la digitalizzazione dei processi di farmacia ospedaliera. Con sede a Trieste, Italia.',
  columns = DEFAULT_COLS,
  copyright = `© ${new Date().getFullYear()} Hexaros S.r.l. — Tutti i diritti riservati`,
  location = 'Trieste, Italia · info@hexaros.com',
  ...rest
}) {
  useFooterStyles();
  return (
    <footer className="hx-footer" {...rest}>
      <div className="wrap">
        <div className="hx-footer__grid">
          <div className="hx-footer__brand">
            <a href="index.html" style={{ color: 'var(--text)' }}><Logo brand={brand} size={28} /></a>
            <p>{description}</p>
          </div>
          {columns.map((col) => (
            <div className="hx-footer__col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="hx-footer__bottom">
          <span>{copyright}</span>
          <span>{location}</span>
        </div>
      </div>
    </footer>
  );
}
