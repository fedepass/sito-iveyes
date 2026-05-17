# Hexaros — sito aziendale

Sito statico multi-pagina, zero dipendenze di build. Pronto per l'upload su qualsiasi web server
(Apache, Nginx, IIS, servizi di hosting statico come Netlify / Vercel / GitHub Pages / Cloudflare Pages).

---

## Struttura

```
hexaros-site/
├── index.html          — Home (tema scuro)
├── about.html          — Azienda / Chi siamo (tema scuro)
├── iveyes.html         — Prodotto ivEyes (tema chiaro)
├── contact.html        — Contatti (tema scuro)
├── css/
│   ├── main.css        — Design system, temi, componenti comuni
│   └── product.css     — Stili pagina prodotto (tema chiaro)
├── js/
│   └── main.js         — Toggle mobile nav, reveal-on-scroll, anno footer
└── img/
    ├── logo-hexaros.svg
    ├── logo-iveyes.svg
    └── favicon.svg
```

---

## Deploy rapido

### Opzione 1 — Server Apache / Nginx / hosting classico

1. Carica via FTP/SFTP l'intera cartella `hexaros-site/` nella document root
   (`public_html/`, `htdocs/`, `/var/www/html/`, ecc.).
2. Se il server ha già una index, rinomina `index.html` o imposta Hexaros
   come sito principale.
3. Nessuna configurazione PHP/Node/DB richiesta.

### Opzione 2 — Hosting statico (Netlify / Vercel / Cloudflare Pages)

1. Trascina la cartella sulla dashboard del servizio, oppure
2. Collega un repository Git che contiene la cartella e indica come
   directory di pubblicazione `hexaros-site/`. Nessun build command richiesto.

### Opzione 3 — Anteprima locale

Dalla cartella `hexaros-site/`:

```bash
# Python 3
python -m http.server 8000

# oppure Node
npx serve .
```

Poi apri `http://localhost:8000`.

---

## Note tecniche

- **Font:** caricati da Google Fonts (Fraunces + IBM Plex Sans/Mono).
  Se il deploy è in ambiente senza internet, sostituiscili con i fallback
  già inclusi (`Georgia` e `-apple-system, sans-serif`).
- **Form contatti:** attualmente solo front-end demo. Per renderlo funzionante,
  collegalo a un servizio come Formspree, Basin, Netlify Forms, o a un
  endpoint backend custom modificando il blocco `<script>` in `contact.html`.
- **SEO:** i meta tag base sono presenti. Per arricchirli aggiungi Open Graph
  e Twitter Card nell'`<head>` di ogni pagina.
- **Accessibilità:** rispetta `prefers-reduced-motion`, contrasti AA, navigazione
  keyboard-friendly, ruoli ARIA sui menu.
- **Responsive:** breakpoint a 960/860/640/480 px. Testato in layout mobile.

---

## Personalizzazione rapida

- **Colori:** modifica le CSS custom properties in `:root` di `css/main.css`.
- **Contatti:** cerca `info@hexaros.com` e `support@hexaros.com` nei quattro file HTML.
- **Testi:** i contenuti sono in italiano, organizzati per sezioni commentate nell'HTML.

---

© Hexaros S.r.l. — Trieste, Italia
