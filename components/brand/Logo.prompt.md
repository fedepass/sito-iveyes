The Hexaros hexagon mark (teal-blue core) and the ivEyes paired-lens mark. The outline inherits `currentColor` so the logo adapts to dark/light surfaces; the accent core follows --accent (clinical teal-blue).

```jsx
<Logo brand="hexaros" />
<Logo brand="iveyes" size={40} />
<Logo brand="hexaros" wordmark={false} size={28} />   {/* glyph only */}
```

Set `size` (glyph height in px); the wordmark scales with it. Place inside a link for the header brand.
