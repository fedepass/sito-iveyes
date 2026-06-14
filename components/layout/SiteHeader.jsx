import React from 'react';
import { Logo } from '../brand/Logo';

let injected = false;
function useHeaderStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-header { position: sticky; top: 0; z-index: 50; padding: 20px 0;
    transition: background var(--dur-slow) var(--ease); }
  body.dark .hx-header, [data-theme="dark"] .hx-header { background: rgba(10,15,26,0.72);
    backdrop-filter: saturate(140%) blur(10px); -webkit-backdrop-filter: saturate(140%) blur(10px);
    border-bottom: 1px solid var(--rule-dark); }
  body.light .hx-header, [data-theme="light"] .hx-header { background: rgba(250,250,247,0.82);
    backdrop-filter: saturate(140%) blur(10px); -webkit-backdrop-filter: saturate(140%) blur(10px);
    border-bottom: 1px solid var(--rule-light); }
  .hx-nav { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
  .hx-brand { display: flex; align-items: center; color: var(--text); }
  .hx-navlinks { display: flex; gap: 2px; list-style: none; align-items: center; margin: 0; padding: 0; }
  .hx-navlinks a { padding: 10px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 500;
    letter-spacing: 0.01em; position: relative; transition: color var(--dur) var(--ease); color: var(--text-dim); }
  .hx-navlinks a:hover, .hx-navlinks a.is-active { color: var(--text); }
  .hx-navlinks a.is-active::after { content: ''; position: absolute; bottom: 2px; left: 16px; right: 16px;
    height: 1.5px; background: var(--accent); }
  .hx-cta { padding: 10px 18px; border-radius: var(--radius-pill); font-size: 13px; font-weight: 600;
    letter-spacing: 0.02em; transition: transform var(--dur-fast) var(--ease); background: var(--accent); color: var(--on-accent); }
  body.light .hx-cta, [data-theme="light"] .hx-cta { background: var(--coal); color: var(--paper); }
  .hx-cta:hover { transform: translateY(-1px); }
  .hx-lang { display: flex; align-items: center; gap: 3px; font-family: var(--font-mono); font-size: 11px;
    font-weight: 500; letter-spacing: 0.12em; padding: 7px 12px; border-radius: var(--radius-pill);
    border: 1px solid var(--rule-dark); color: var(--text-dim); transition: border-color var(--dur-fast) var(--ease); }
  body.light .hx-lang, [data-theme="light"] .hx-lang { border-color: var(--rule-light); }
  .hx-lang:hover { border-color: var(--rule-dark-2); }
  .hx-lang .on { color: var(--accent); }
  .hx-lang .sep { opacity: 0.35; }
  .hx-lang .off { opacity: 0.5; }
  @media (max-width: 860px) { .hx-navlinks { display: none; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-header-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * The sticky site header — brand mark, nav links, accent CTA pill and the
 * IT·EN language toggle. Translucent blurred bar over either theme.
 */
export function SiteHeader({
  brand = 'hexaros',
  links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Azienda', href: 'about.html' },
    { label: 'ivEyes', href: 'iveyes.html' },
    { label: 'Contatti', href: 'contact.html' },
  ],
  activeHref,
  cta = { label: 'Richiedi demo', href: 'contact.html' },
  lang = 'it',
  onLangToggle,
  ...rest
}) {
  useHeaderStyles();
  return (
    <header className="hx-header" {...rest}>
      <div className="wrap">
        <nav className="hx-nav" aria-label="Navigazione principale">
          <a className="hx-brand" href={links[0]?.href || '#'} aria-label={`${brand} — home`}>
            <Logo brand={brand} />
          </a>
          <ul className="hx-navlinks" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={activeHref === l.href ? 'is-active' : ''}>{l.label}</a>
              </li>
            ))}
            {cta && <li><a href={cta.href} className="hx-cta">{cta.label}</a></li>}
            <li>
              <button className="hx-lang" aria-label="Cambia lingua / Switch language" onClick={onLangToggle}>
                <span className={lang === 'it' ? 'on' : 'off'}>IT</span>
                <span className="sep">·</span>
                <span className={lang === 'en' ? 'on' : 'off'}>EN</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
