# Hexaros Website — UI Kit

A high-fidelity, interactive recreation of the Hexaros marketing site, built entirely from the design-system components. Open `index.html` to click through all four views.

## Screens
| File | View | Showcases |
|---|---|---|
| `screens/HomeScreen.jsx` | Home | Hero + metric strip, "why now" pillar wall, split product card, vision CTA |
| `screens/AboutScreen.jsx` | Azienda | Mission grid, numbered principles, team cards, roadmap timeline |
| `screens/IveyesScreen.jsx` | ivEyes | Product hero + device panel, three operating-mode cards, pull quote, benefits grid |
| `screens/ContactScreen.jsx` | Contatti | Contact info column + working (faked) form with validation & success state |

## Interaction
- The `SiteHeader` nav, footer links, and any `[data-nav]` button route between views in-page (no reload). Clicks are intercepted at the app root.
- The **IT · EN** toggle flips the header indicator (copy stays Italian — translations live in the original site's `i18n.js`, not ported here).
- The contact form validates required fields and shows the success banner; nothing is sent.
- The current view persists in `localStorage` (`hx-kit-view`).

## Composition
Every surface is assembled from `window.HexarosDesignSystem_c7b1f3` components — `SiteHeader`, `SiteFooter`, `SectionHead`, `Button`, `Eyebrow`, `Tag`, `Metric`, `FeatureCard`, `ModeCard`, `BenefitCard`, `TimelineItem`, `PullQuote`, `Card`, `Field`, `Checkbox`, `Logo`. Page-specific compositions (the hero headlines, the split product card, the device-preview SVG) are inlined in the screen files, matching the original `main.css` / `product.css` rules.

The whole kit runs on the dark (company) theme, which is the site's identity. Add `class="light"` / `[data-theme="light"]` on a container to preview the product (ivEyes) palette on any component.
