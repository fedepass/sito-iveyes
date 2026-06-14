Teal stat + title + description, sized to sit in the hairline benefits grid (gaps reveal `--rule-dark` between cells).

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--rule-dark)'}}>
  <BenefitCard stat="100%" title="Tracciabilità di processo">Ogni step documentato automaticamente.</BenefitCard>
  <BenefitCard stat="1 → N" title="Una piattaforma, più processi">Un solo investimento per scenari diversi.</BenefitCard>
</div>
```
