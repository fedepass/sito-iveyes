---
name: hexaros-design
description: Use this skill to generate well-branded interfaces and assets for Hexaros and its product ivEyes (hospital-pharmacy / AR smart-glasses technology), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, reusable components and a full website UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- `README.md` — the full design guide: brand context, content/voice fundamentals, visual foundations, iconography, and a file index. **Read this first.**
- `styles.css` + `tokens/` — link `styles.css` to inherit all CSS custom properties, the two themes (dark = company, light = product), the film-grain background, fonts and base reset. Default identity is `body class="dark"`.
- `components/` — React UI primitives, bundled under `window.HexarosDesignSystem_c7b1f3`. Each has a `.prompt.md` with a usage example. Load `_ds_bundle.js` after React.
- `ui_kits/hexaros-site/` — a working interactive recreation of the marketing site; the best reference for how the pieces compose.
- `foundations/` — specimen cards for color, type, spacing and brand.
- `assets/` — logos and favicon.

## House rules (the short version)
- Italian-first copy; editorial, precise, confident. Headlines pair a statement with an accent-italic turn. No emoji, no hype.
- Fraunces (display, with `'SOFT'`/`'opsz'` axes set) · IBM Plex Sans (body) · IBM Plex Mono (UPPERCASE eyebrows/labels).
- Clinical teal-blue is the accent through-line (`#34A0C0` on dark, `#0B6E8C` on light); validation green `#1E8466` for status. Company gold `#E8A44C` is retained as a legacy swatch only.
- Flat hairline-bordered cards, restrained radii, film grain + radial glows on dark, quiet slow motion. Thin `currentColor` line-art SVG icons — no icon font, no emoji.
