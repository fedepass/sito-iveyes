Labelled form control — text, email, select or textarea — with the mono uppercase label and accent focus ring from the Hexaros contact form. Theme-aware (dark + light).

```jsx
<Field label="Nome e cognome" name="name" required />
<Field label="Email" type="email" name="email" required />
<Field label="Interesse" type="select" name="interest" full
       options={[{value:'demo',label:'Richiesta demo ivEyes'},{value:'info',label:'Informazioni generali'}]} />
<Field label="Messaggio" type="textarea" name="message" full placeholder="Raccontaci il tuo contesto…" />
```

Set `full` to span both columns of a two-column `.form-grid`. Compose inside a `Card` for the contact-form panel.
