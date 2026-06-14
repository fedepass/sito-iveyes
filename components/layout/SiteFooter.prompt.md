The full site footer — brand block with description, three link columns, and a bottom rule carrying the copyright and Trieste / email line. Defaults reproduce the real Hexaros footer.

```jsx
<SiteFooter />
<SiteFooter columns={[{title:'Prodotti', links:[{label:'ivEyes', href:'iveyes.html'}]}]} />
```

Theme-aware (hairlines + accent follow the theme). Pass `columns` to customize, otherwise the standard Azienda / Prodotti / Risorse set is used.
