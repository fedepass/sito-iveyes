/* Hexaros — Contact (dark theme), interactive form. Exports window.ContactScreen */
const { Button, Eyebrow, Field, Checkbox } = window.HexarosDesignSystem_c7b1f3;

function InfoItem({ k, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 60" }}>{children}</span>
    </div>
  );
}

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef(null);

  function submit(e) {
    e.preventDefault();
    if (formRef.current && !formRef.current.checkValidity()) { formRef.current.reportValidity(); return; }
    setSent(true);
    formRef.current && formRef.current.reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <main>
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 110px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }}>
            {/* intro */}
            <div>
              <Eyebrow style={{ marginBottom: '24px' }}>Contatti</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", color: 'var(--ivory)', marginBottom: '28px' }}>
                Parlaci del <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>tuo reparto.</em>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--ivory-dim)', lineHeight: 1.55, maxWidth: '40ch', marginBottom: '40px' }}>
                Se stai valutando ivEyes o una digitalizzazione più ampia dei processi di farmacia, ci
                piacerebbe conoscere il tuo contesto. Rispondiamo entro due giorni lavorativi.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '32px', borderTop: '1px solid var(--rule-dark)' }}>
                <InfoItem k="Sede">Trieste, Italia</InfoItem>
                <InfoItem k="Email commerciale">info@hexaros.com</InfoItem>
                <InfoItem k="Supporto tecnico">support@hexaros.com</InfoItem>
                <InfoItem k="LinkedIn">@hexaros</InfoItem>
              </div>
            </div>

            {/* form */}
            <form ref={formRef} onSubmit={submit} noValidate style={{ padding: '48px', background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Field label="Nome e cognome" name="name" required autoComplete="name" />
                <Field label="Ruolo" name="role" placeholder="es. Direttore Farmacia" />
                <Field label="Ente / ospedale" name="org" />
                <Field label="Email" type="email" name="email" required autoComplete="email" />
                <Field label="Interesse" type="select" name="interest" full
                  options={[
                    { value: 'demo', label: 'Richiesta demo ivEyes' },
                    { value: 'pilot', label: 'Valutazione pilota' },
                    { value: 'info', label: 'Informazioni generali' },
                    { value: 'press', label: 'Richiesta stampa / partnership' },
                    { value: 'other', label: 'Altro' },
                  ]} />
                <Field label="Messaggio" type="textarea" name="message" full placeholder="Raccontaci brevemente il tuo contesto (volumi, tipologia preparazioni, sistemi in uso)…" />
                <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
                  <Checkbox id="consent" required>
                    Ho letto l'informativa privacy e acconsento al trattamento dei miei dati per essere ricontattato in merito alla richiesta.
                  </Checkbox>
                </div>
                <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                  <Button variant="primary" arrow type="submit">Invia richiesta</Button>
                </div>
              </div>
              <p style={{ marginTop: '20px', fontSize: '12.5px', color: 'var(--ivory-dim)', fontStyle: 'italic' }}>
                Tempo medio di risposta: 48 ore lavorative. Per urgenze: support@hexaros.com
              </p>
              {sent && (
                <div style={{ padding: '20px 24px', marginTop: '20px', background: 'rgba(46,125,91,0.15)', border: '1px solid rgba(46,125,91,0.4)', borderRadius: '4px', color: 'var(--success-text)', fontSize: '14px' }}>
                  Richiesta inviata. Ti ricontattiamo a breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ContactScreen = ContactScreen;
