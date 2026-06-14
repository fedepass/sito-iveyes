# Hexaros Design System

The brand and interface system for **Hexaros S.r.l.** — an Italian company (Trieste) building technology for the digitalization of **hospital-pharmacy** processes. Its first and flagship product is **ivEyes**, a *Smart Glasses Tracking Assistant*: an AR wearable that guides, tracks and documents drug preparation under laminar-flow hoods, in compliance with GMP / Annex 11.

The system is **clinical-first**, with two surface modes that share one cool, professional accent language:
- **Dark theme — the company (Hexaros).** Deep cool-navy ink, clinical teal-blue accent, a cool off-white text, film grain. Confident, serious, technical.
- **Light theme — the product & clinical surfaces (ivEyes).** Cool clinical paper, slate-ink text, the same teal-blue accent and a validation green. Bright, operational, coherent with a hospital/GMP environment.

The **clinical teal-blue** is the through-line accent in both themes (brighter `#34A0C0` on dark, deeper `#0B6E8C` on light), exposed as `--accent` so components adapt automatically. The historical company gold (`#E8A44C`) is retained in `tokens/colors.css` as a legacy swatch only — it is no longer used as a UI accent.

---

## Sources

This system was reverse-engineered from the official Hexaros website source:
- **GitHub:** `https://github.com/fedepass/sito-iveyes` (branch `master`) — a dependency-free static multi-page site (`index.html`, `about.html`, `iveyes.html`, `contact.html`, `css/main.css`, `css/product.css`, `js/i18n.js`, `js/main.js`). Explore it for the full bilingual copy deck (`i18n.js`), the exact section markup, and the canonical CSS this system is distilled from.

Token values, type settings, component structure and copy below are lifted verbatim from that repository where possible. If you need a detail not captured here (e.g. the complete IT/EN translation table, exact responsive breakpoints), read the repo directly.

---

## Content fundamentals — how Hexaros writes

**Language.** Primary language is **Italian**; the site ships a full English translation (`i18n.js`) toggled via an IT·EN switch. Write Italian first.

**Voice.** Editorial, precise, quietly confident. Short declarative sentences, often paired as a *thesis + turn*: "L'operatore conduce. **Il sistema documenta.**" / "Flessibile per natura, rigoroso per definizione." The italic half of a headline (always gold) carries the emphasis.

**Register.** Domain-fluent and technical without jargon-stuffing — it speaks to hospital pharmacists and quality managers. Real regulatory anchors appear as proof: *GMP*, *Annex 11*, *HIS · LIMS · ERP*, *Vuzix*, *flusso laminare*, *galenici*, *NPT*. Numbers are concrete (`Target: 12.4 g · Tolleranza ±2%`).

**Pronouns.** Collective **"noi"** for the company ("Progettiamo…", "Crediamo che…") and direct **"tu/tuo"** to the reader ("Parlaci del *tuo reparto*", "la tua farmacia"). Warm but professional — never salesy.

**Casing.** Sentence case for body and headlines. **Eyebrows and labels are UPPERCASE** mono with wide tracking ("PERCHÉ ORA", "LE TRE MODALITÀ", "HARDWARE"). Section kickers are often numbered: "01 — COMPLIANCE", "02 · Modulare".

**Punctuation texture.** The middot `·` separates metadata ("GMP · Annex 11", "Trieste, Italia · info@hexaros.com"). The em dash `—` sets off the editorial turn. The arrow `→` marks progression ("1 → N", "2027 →") and bullets feature lists.

**Tone do/don't.** Do: governable, traceable, measurable, flexible-by-design. Don't: hype, exclamation marks, emoji, growth-hacky CTA copy. CTAs are plain invitations — "Scopri ivEyes", "Richiedi una demo", "Parlaci del tuo reparto", "Scrivici".

**No emoji. Ever.** The brand never uses emoji.

---

## Visual foundations

**Color.** Two palettes (see `tokens/colors.css`). Dark (company): `--ink #0A0F1A` background through `--ink-2`/`--ink-3` surfaces; `--ivory #ECEFF3` cool text, `--ivory-dim #93A2AF` secondary; accent `--teal-bright #34A0C0` with `--teal-soft #6FC3DE`. Light (**clinical**, product theme): `--paper #F4F7F8` cool background, `#FFFFFF` cards, `--coal #16242E` slate text, `--coal-soft #5B6B77`; primary accent `--blue #0B6E8C` (clinical teal-blue), `--success #1E8466` (validation green), `--rule-light #DCE4E8` hairlines. The legacy company gold `--gold #E8A44C` is retained but unused as an accent. Semantic aliases (`--bg`, `--surface`, `--text`, `--accent`, `--accent-soft`, `--rule`, `--on-accent`) re-point per theme — **prefer them in component code**; the accent is the clinical teal-blue in both themes.

**Type.** Three families (`tokens/typography.css` + `tokens/fonts.css`):
- **Fraunces** — variable optical serif for all display/editorial. Weight 400 for headings, 300 for big numerals. Always set the softness/optical axes: `font-variation-settings: 'SOFT' 30, 'opsz' 144` for large display, dropping to `'opsz' 60` for small headings. Italic emphasis uses `'SOFT' 100` and is colored gold/blue. Tight tracking (`-0.035em`) on hero display.
- **IBM Plex Sans** — UI and body (400/500/600).
- **IBM Plex Mono** — eyebrows, keys, codes, badges. UPPERCASE, `letter-spacing: 0.2–0.24em`, 11px.

**Backgrounds.** Dark pages carry a **fixed film-grain overlay** (`feTurbulence` SVG, `mix-blend-mode: overlay`, opacity 0.35) plus two soft **radial ambient glows** (teal top-right, cool teal mid-left). No photographic imagery in the source; product visuals are built from clean line-art SVG (smart-glasses, architecture diagram, weighing UI). Backgrounds are atmospheric, never busy.

**Layout.** Centered `.wrap` at `max-width: 1280px`, 32px gutters (20px mobile). Generous vertical rhythm — sections at ~90–100px padding. Section headers are a 1fr/2fr grid (eyebrow left, heading right). Hairline grids: cards sit on a 1px `--rule` background so dividers read as thin lines. Breakpoints: 960 / 860 / 640 / 480px.

**Borders & radii.** Hairline `1px` rules in low-opacity ivory (`--rule-dark`) or `--rule-light`. Radii are restrained: `4px` inputs/mode-cards, `6px` product/form cards, `8px` panels/modals, `999px` pills. Roadmap/coming-soon items use **dashed** borders at reduced opacity.

**Cards.** Flat ink/paper fills with a hairline border — *not* heavy shadows. Mode cards add a `3px` accent **top accent** (the clinical teal-blue). Hover = a subtle surface tint (`--ink → --ink-2/3`, `--paper → --paper-warm`) and/or border strengthening; mode cards lift `translateY(-4px)` with a soft shadow. Shadows appear only on elevation/hover and in modals.

**Motion.** Quiet and slow. Entrances `rise` (24px up + fade) and `fade`, staggered 80–460ms, on `--ease-out cubic-bezier(0.16,1,0.3,1)`. Interactions on `--ease cubic-bezier(0.22,1,0.36,1)`, 180–400ms. Buttons translate `-2px` on hover; the CTA arrow slides `+4px`. No bounce, no infinite decorative loops. Full `prefers-reduced-motion` support.

**Hover / press states.** Hover: lighten surface or strengthen border; primary button → `--accent-soft` + lift; ghost button → inverts (fills ivory, ink text). Links → full-strength text color or gold. Active nav item carries a `1.5px` gold underline. Focus: inputs get a gold/blue border + tinted fill; keyboard focus rings on controls.

**Transparency & blur.** The sticky header is translucent (`rgba(...,0.72/0.82)`) with `backdrop-filter: saturate(140%) blur(10px)`. Modal backdrops blur `4px`. Tinted chips use low-alpha accent/teal fills (`rgba(232,164,76,0.10)`).

---

## Iconography

**Approach: minimal, line-based, hand-placed SVG — there is no icon font and no icon library.** The source site draws every glyph inline as small `currentColor` SVGs with `stroke-width` ~1.5–2.5, matching the editorial line weight. Use the same approach: thin strokes, rounded line caps/joins, `currentColor` so icons inherit theme text color, with the occasional gold (`#E8A44C`) accent fill.

Recurring marks (all in `assets/`, also available as the `Logo` component):
- **Hexaros mark** — a hexagon outline with a single teal-blue core dot (`--accent`). The "hexa-" hexagon is the company's visual root.
- **ivEyes mark** — two eye/lens ellipses, the right pupil in the teal-blue accent — evoking the AR glasses.
- **The CTA arrow** — `M3 8h10M9 4l4 4-4 4`, 1.5px stroke, slides on hover. Reuse it for every "forward" affordance.

Bullets use a typographic arrow `→` (accent) rather than an icon. Metadata uses the middot `·`. **No emoji, no Unicode pictographs** beyond `→ · ↓`. When you need a product/diagram icon (glasses, scale, network, monitor), draw a small stroked SVG in the same weight — see the architecture diagram in the original `iveyes.html` for the house style. Do not import a third-party icon set; it will break the hand-drawn register.

---

## Index / manifest

**Root**
- `styles.css` — the entry point consumers link. Import manifest only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css` (reset, grain, helpers, keyframes).
- `assets/` — `logo-hexaros.svg`, `logo-iveyes.svg`, `favicon.svg`.
- `README.md` (this file), `SKILL.md`.

**Foundations** (`foundations/` — Design System tab cards): color (ink, accent, text, light), type (display, body, mono, scale), spacing (scale, radii, motion, surface/grain), brand (logos).

**Components** (`components/<group>/`, namespace `window.HexarosDesignSystem_c7b1f3`)
- `core/` — `Button`, `Eyebrow`, `Tag`, `Metric`
- `forms/` — `Field`, `Checkbox`
- `cards/` — `Card`, `FeatureCard`, `ModeCard`, `BenefitCard`, `TimelineItem`
- `layout/` — `SectionHead`, `PullQuote`, `SiteHeader`, `SiteFooter`
- `brand/` — `Logo`

Each component directory has a `.d.ts` (props), `.prompt.md` (usage), and a `@dsCard` HTML demo.

**UI kit** (`ui_kits/hexaros-site/`) — interactive recreation of the full marketing site (Home, Azienda, ivEyes, Contatti). See its own `README.md`.

> **Font note:** the three families load from **Google Fonts** (the brand's own choice — see `tokens/fonts.css`), not bundled binaries. If you need an offline build, download Fraunces / IBM Plex Sans / IBM Plex Mono and add local `@font-face` rules; the declared fallbacks are Georgia (display) and system sans (body/mono).
