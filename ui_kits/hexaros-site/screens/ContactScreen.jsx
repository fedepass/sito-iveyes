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

/* ---- Privacy policy content (GDPR — Reg. EU 2016/679 — + D.Lgs. 196/2003 as amended by D.Lgs. 101/2018) ---- */
const PRIVACY = {
  it: {
    title: 'Informativa sulla privacy',
    updated: 'Ultimo aggiornamento: giugno 2026',
    intro: 'Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, Hexaros S.r.l. fornisce le seguenti informazioni sul trattamento dei dati personali raccolti tramite questo form di contatto.',
    sections: [
      ['1. Titolare del trattamento', 'Hexaros S.r.l., con sede in Trieste, Italia — email info@hexaros.com. Per ogni questione relativa ai dati personali è possibile scrivere a privacy@hexaros.com.'],
      ['2. Dati trattati', 'Dati identificativi e di contatto forniti volontariamente (nome e cognome, ruolo, ente/ospedale, indirizzo email) e il contenuto del messaggio. Non sono raccolte categorie particolari di dati ex art. 9 GDPR; si invita a non includerle nel messaggio.'],
      ['3. Finalità e base giuridica', 'a) Riscontro alle richieste inviate (demo, valutazione pilota, informazioni): esecuzione di misure precontrattuali ed eventuale consenso (art. 6.1.b e 6.1.a). b) Comunicazioni commerciali: solo previo consenso facoltativo (art. 6.1.a). c) Adempimento di obblighi di legge (art. 6.1.c).'],
      ['4. Modalità del trattamento', 'Il trattamento avviene con strumenti elettronici, adottando misure tecniche e organizzative adeguate (crittografia, controllo degli accessi). Non sono effettuati processi decisionali automatizzati né attività di profilazione.'],
      ['5. Destinatari', 'I dati sono trattati da personale autorizzato e possono essere comunicati a fornitori di servizi IT e hosting nominati responsabili del trattamento ex art. 28 GDPR. I dati non sono oggetto di diffusione.'],
      ['6. Trasferimento extra-UE', 'I dati sono archiviati in data center situati nell’Unione Europea. Eventuali trasferimenti verso Paesi terzi avverrebbero esclusivamente in presenza di garanzie adeguate (decisione di adeguatezza o clausole contrattuali standard, artt. 44-46).'],
      ['7. Conservazione', 'I dati sono conservati per il tempo necessario a gestire la richiesta e, in caso di instaurazione di un rapporto, per il periodo previsto dagli obblighi di legge. I dati trattati per finalità di marketing sono conservati fino a revoca del consenso.'],
      ['8. Diritti dell’interessato', 'In qualsiasi momento è possibile esercitare i diritti di cui agli artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione, portabilità, opposizione, nonché revoca del consenso senza pregiudizio per la liceità del trattamento precedente. Le richieste vanno inviate a privacy@hexaros.com.'],
      ['9. Reclamo', 'Resta impregiudicato il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).'],
      ['10. Natura del conferimento', 'Il conferimento dei dati è facoltativo; il mancato conferimento di quelli contrassegnati come obbligatori impedisce però di dar seguito alla richiesta.'],
    ],
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: June 2026',
    intro: 'Pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (“GDPR”) and Italian Legislative Decree 196/2003 as amended by Legislative Decree 101/2018, Hexaros S.r.l. provides the following information on the processing of personal data collected through this contact form.',
    sections: [
      ['1. Data controller', 'Hexaros S.r.l., based in Trieste, Italy — email info@hexaros.com. For any matter concerning personal data you may write to privacy@hexaros.com.'],
      ['2. Data processed', 'Identification and contact data provided voluntarily (full name, role, organisation/hospital, email address) and the content of the message. No special categories of data under Art. 9 GDPR are collected; please do not include them in your message.'],
      ['3. Purposes and legal basis', 'a) Responding to requests (demo, pilot assessment, information): performance of pre-contractual measures and, where applicable, consent (Art. 6.1.b and 6.1.a). b) Marketing communications: only with optional prior consent (Art. 6.1.a). c) Compliance with legal obligations (Art. 6.1.c).'],
      ['4. Processing methods', 'Processing is carried out with electronic tools, applying appropriate technical and organisational measures (encryption, access control). No automated decision-making or profiling is performed.'],
      ['5. Recipients', 'Data is processed by authorised staff and may be disclosed to IT and hosting service providers appointed as data processors under Art. 28 GDPR. Data is not disseminated.'],
      ['6. Transfers outside the EU', 'Data is stored in data centres located within the European Union. Any transfer to third countries would take place only with adequate safeguards in place (adequacy decision or standard contractual clauses, Arts. 44-46).'],
      ['7. Retention', 'Data is kept for as long as necessary to handle the request and, where a relationship is established, for the period required by legal obligations. Data processed for marketing purposes is kept until consent is withdrawn.'],
      ['8. Your rights', 'At any time you may exercise the rights under Arts. 15-22 GDPR: access, rectification, erasure, restriction, portability, objection, and withdrawal of consent without affecting the lawfulness of prior processing. Requests should be sent to privacy@hexaros.com.'],
      ['9. Complaints', 'You retain the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it).'],
      ['10. Nature of provision', 'Providing data is optional; however, failure to provide the fields marked as mandatory will prevent us from following up on your request.'],
    ],
  },
};

function PrivacyModal({ lang, onClose }) {
  const p = PRIVACY[lang === 'en' ? 'en' : 'it'];
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div
      role="dialog" aria-modal="true" aria-label={p.title}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'rgba(6,12,10,0.72)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: '720px', maxHeight: '85vh', overflowY: 'auto', background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '10px', padding: '40px 44px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
      >
        <button type="button" onClick={onClose} aria-label={lang === 'en' ? 'Close' : 'Chiudi'}
          style={{ position: 'absolute', top: '18px', right: '18px', width: '34px', height: '34px', borderRadius: '50%', border: '1px solid var(--rule-dark)', color: 'var(--ivory-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1 }}>
          ×
        </button>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>{p.updated}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96", marginBottom: '18px' }}>{p.title}</h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ivory-dim)', marginBottom: '28px' }}>{p.intro}</p>
        {p.sections.map(([h, body]) => (
          <div key={h} style={{ marginBottom: '22px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 500, color: 'var(--ivory)', marginBottom: '8px', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>{h}</h3>
            <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: 'var(--ivory-dim)', margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactScreen({ lang = 'it' }) {
  const T = (it, en) => (lang === 'en' ? en : it);
  const [sent, setSent] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
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
              <Eyebrow style={{ marginBottom: '24px' }}>{T('Contatti', 'Contact')}</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", color: 'var(--ivory)', marginBottom: '28px' }}>
                {T('Parlaci del ', 'Tell us about ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>{T('tuo reparto.', 'your ward.')}</em>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--ivory-dim)', lineHeight: 1.55, maxWidth: '40ch', marginBottom: '40px' }}>
                {T(
                  "Se stai valutando ivEyes o una digitalizzazione più ampia dei processi di farmacia, ci piacerebbe conoscere il tuo contesto. Rispondiamo entro due giorni lavorativi.",
                  "If you're evaluating ivEyes or a broader digitalisation of your pharmacy processes, we'd love to learn about your context. We reply within two working days."
                )}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '32px', borderTop: '1px solid var(--rule-dark)' }}>
                <InfoItem k={T('Sede', 'Office')}>{T('Trieste, Italia', 'Trieste, Italy')}</InfoItem>
                <InfoItem k={T('Email commerciale', 'Sales email')}>info@hexaros.com</InfoItem>
                <InfoItem k={T('Supporto tecnico', 'Technical support')}>support@hexaros.com</InfoItem>
                <InfoItem k="LinkedIn">@hexaros</InfoItem>
              </div>
            </div>

            {/* form */}
            <form ref={formRef} onSubmit={submit} noValidate style={{ padding: '48px', background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Field label={T('Nome e cognome', 'Full name')} name="name" required autoComplete="name" />
                <Field label={T('Ruolo', 'Role')} name="role" placeholder={T('es. Direttore Farmacia', 'e.g. Head of Pharmacy')} />
                <Field label={T('Ente / ospedale', 'Organisation / hospital')} name="org" />
                <Field label="Email" type="email" name="email" required autoComplete="email" />
                <Field label={T('Interesse', 'Interest')} type="select" name="interest" full
                  options={[
                    { value: 'demo', label: T('Richiesta demo ivEyes', 'ivEyes demo request') },
                    { value: 'pilot', label: T('Valutazione pilota', 'Pilot assessment') },
                    { value: 'info', label: T('Informazioni generali', 'General information') },
                    { value: 'press', label: T('Richiesta stampa / partnership', 'Press / partnership enquiry') },
                    { value: 'other', label: T('Altro', 'Other') },
                  ]} />
                <Field label={T('Messaggio', 'Message')} type="textarea" name="message" full placeholder={T('Raccontaci brevemente il tuo contesto (volumi, tipologia preparazioni, sistemi in uso)…', 'Tell us briefly about your context (volumes, preparation types, systems in use)…')} />
                <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
                  <Checkbox id="consent" required>
                    {(() => {
                      const PrivacyLink = (
                        <button type="button"
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPrivacyOpen(true); }}
                          style={{ display: 'inline', padding: 0, color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '2px', font: 'inherit', cursor: 'pointer' }}>
                          {T('informativa privacy', 'privacy policy')}
                        </button>
                      );
                      return lang === 'en'
                        ? <>I have read the {PrivacyLink} and consent to the processing of my data to be contacted regarding this request.</>
                        : <>Ho letto l'{PrivacyLink} e acconsento al trattamento dei miei dati per essere ricontattato in merito alla richiesta.</>;
                    })()}
                  </Checkbox>
                </div>
                <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                  <Button variant="primary" arrow type="submit">{T('Invia richiesta', 'Send request')}</Button>
                </div>
              </div>
              <p style={{ marginTop: '20px', fontSize: '12.5px', color: 'var(--ivory-dim)', fontStyle: 'italic' }}>
                {T('Tempo medio di risposta: 48 ore lavorative. Per urgenze: support@hexaros.com', 'Average response time: 48 working hours. For urgent matters: support@hexaros.com')}
              </p>
              {sent && (
                <div style={{ padding: '20px 24px', marginTop: '20px', background: 'rgba(46,125,91,0.15)', border: '1px solid rgba(46,125,91,0.4)', borderRadius: '4px', color: 'var(--success-text)', fontSize: '14px' }}>
                  {T('Richiesta inviata. Ti ricontattiamo a breve.', "Request sent. We'll be in touch shortly.")}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      {privacyOpen && <PrivacyModal lang={lang} onClose={() => setPrivacyOpen(false)} />}
    </main>
  );
}

window.ContactScreen = ContactScreen;
