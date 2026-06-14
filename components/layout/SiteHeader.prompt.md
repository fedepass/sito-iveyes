The sticky, blurred site header — brand mark, nav links with a gold active-underline, a CTA pill, and the IT·EN language toggle. Works over the dark or light theme.

```jsx
<SiteHeader
  activeHref="iveyes.html"
  links={[{label:'Home',href:'index.html'},{label:'Azienda',href:'about.html'},{label:'ivEyes',href:'iveyes.html'},{label:'Contatti',href:'contact.html'}]}
  cta={{label:'Richiedi demo', href:'contact.html'}}
/>
```

Defaults to the real Hexaros nav. Set `brand="iveyes"` for the product header. The mobile collapse is left to the consumer (links hide under 860px).
