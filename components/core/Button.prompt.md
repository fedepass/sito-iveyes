Pill-shaped call-to-action button — filled with the clinical teal-blue accent (`ghost` is outlined); use the `arrow` prop for the signature sliding-arrow CTA seen across the site.

```jsx
<Button variant="primary" arrow href="contact.html">Richiedi una demo</Button>
<Button variant="ghost">Le tre modalità</Button>
```

Variants: `primary` (filled) · `ghost` (outline). Sizes: `sm` · `md` · `lg`. Renders an `<a>` when `href` is set, otherwise a `<button>`. Theme-aware: teal-blue accent on dark, deeper teal-blue on light under `body.light` / `[data-theme="light"]`.
