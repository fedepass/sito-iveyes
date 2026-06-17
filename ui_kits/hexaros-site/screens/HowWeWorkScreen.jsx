/* Hexaros — Come lavoriamo (dark theme). Exports window.HowWeWorkScreen */
const { Button, Eyebrow, SectionHead } = window.HexarosDesignSystem_c7b1f3;

function Step({ n, title, subtitle, duration, children, last = false }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '40px', paddingBottom: last ? 0 : '64px', position: 'relative' }}>
      {/* connector line */}
      {!last && (
        <div style={{ position: 'absolute', left: '38px', top: '60px', bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent), rgba(63,185,140,0.06))', zIndex: 0 }} />
      )}
      {/* number bubble */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '4px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--ink)', flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--accent)', fontVariationSettings: "'SOFT' 30,'opsz' 60", lineHeight: 1 }}>{n}</span>
        </div>
        {duration && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ivory-dim)', textAlign: 'center', lineHeight: 1.4 }}>{duration}</span>
        )}
      </div>
      {/* content */}
      <div style={{ paddingTop: '10px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 2.8vw, 34px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96", marginBottom: '8px' }}>
          {title}
        </h3>
        {subtitle && (
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 60", marginBottom: '20px' }}>
            {subtitle}
          </div>
        )}
        <div style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ivory-dim)', maxWidth: '62ch' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function DeliverableTag({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase',
      padding: '6px 14px', borderRadius: '999px',
      background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
      border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
      color: 'var(--accent)',
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );
}

function HowWeWorkScreen({ lang = 'it' }) {
  const T = (it, en) => (lang === 'en' ? en : it);
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 60px' }}>
        <div className="wrap">
          <Eyebrow style={{ marginBottom: '28px' }}>{T('Come lavoriamo', 'How we work')}</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(42px, 6vw, 82px)', lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30,'opsz' 144", maxWidth: '18ch', color: 'var(--ivory)', marginBottom: '28px' }}>
            {T("Dall'interesse ", 'From interest ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>{T("all'operatività.", 'to operation.')}</em>
          </h1>
          <p style={{ maxWidth: '54ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)', marginBottom: '0' }}>
            {T(
              "Non vendiamo un prodotto e lasciamo il cliente da solo. Ogni installazione di ivEyes parte da un audit di contesto e si chiude solo quando gli operatori lavorano in autonomia — con dati reali, non promesse.",
              "We don't sell a product and leave the customer on their own. Every ivEyes installation starts with a context audit and ends only when operators work autonomously — with real data, not promises."
            )}
          </p>
        </div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '70px 0 100px', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px' }}>
            <Step n="01" title={T('Valutazione del contesto.', 'Context assessment.')} subtitle={T('Prima capiamo, poi proponiamo.', 'First we understand, then we propose.')} duration={T('1–2 sett.', '1–2 weeks')} >
              <p style={{ marginBottom: '16px' }}>
                {T(
                  "Il processo inizia con un incontro di 2–4 ore in reparto, non con una demo commerciale. Analizziamo volumi di preparazione, tipologia (oncologici, NPT, galenici), turni, sistemi informativi in uso (HIS, LIMS, ERP), e il livello di esperienza degli operatori. Usciamo con una mappa del processo attuale e i punti di frizione reali.",
                  "The process starts with a 2–4 hour meeting on the ward, not a sales demo. We analyse compounding volumes, type (oncology, TPN, galenicals), shifts, information systems in use (HIS, LIMS, ERP) and the operators' experience level. We leave with a map of the current process and the real friction points."
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DeliverableTag>{T('Mappa di processo', 'Process map')}</DeliverableTag>
                <DeliverableTag>{T('Scenari identificati', 'Scenarios identified')}</DeliverableTag>
                <DeliverableTag>{T('Piano pilota condiviso', 'Shared pilot plan')}</DeliverableTag>
              </div>
            </Step>

            <Step n="02" title={T('Pilota strutturato.', 'Structured pilot.')} subtitle={T('Dati reali, scenario reale.', 'Real data, real scenario.')} duration={T('4–8 sett.', '4–8 weeks')}>
              <p style={{ marginBottom: '16px' }}>
                {T(
                  "Il pilota avviene nel tuo reparto, su preparazioni reali, con i tuoi operatori. Non in laboratorio. Definiamo insieme le metriche di successo prima di iniziare (tempi, errori intercettati, carico documentale, gradimento operatori) e le misuriamo settimanalmente. Alla fine del pilota hai dati oggettivi per presentare l'adozione ai tuoi stakeholder interni.",
                  "The pilot runs in your ward, on real preparations, with your operators. Not in a lab. We define the success metrics together before starting (times, errors caught, documentation load, operator satisfaction) and measure them weekly. At the end of the pilot you have objective data to present adoption to your internal stakeholders."
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DeliverableTag>{T('KPI condivisi a priori', 'KPIs agreed up front')}</DeliverableTag>
                <DeliverableTag>{T('Report settimanale dati', 'Weekly data report')}</DeliverableTag>
                <DeliverableTag>{T('Report finale pilota', 'Final pilot report')}</DeliverableTag>
                <DeliverableTag>{T('Presentazione go/no-go', 'Go/no-go presentation')}</DeliverableTag>
              </div>
            </Step>

            <Step n="03" title={T('Formazione operatori.', 'Operator training.')} subtitle={T('Tracciata, certificata, breve.', 'Tracked, certified, short.')} duration={T('1–2 sett.', '1–2 weeks')}>
              <p style={{ marginBottom: '16px' }}>
                {T(
                  "Il sistema è progettato per essere appreso in meno di 4 ore di pratica guidata — lo abbiamo misurato nel pilota. La formazione è strutturata per ruolo (operatore, referente qualità, IT/sistemista) e produce un record di completamento per ogni partecipante, utilizzabile come documentazione GMP. Nessun operatore va in produzione da solo fino a validazione completata.",
                  "The system is designed to be learned in under 4 hours of guided practice — we measured it during the pilot. Training is structured by role (operator, quality lead, IT/sysadmin) and produces a completion record for each participant, usable as GMP documentation. No operator goes into production alone until validation is complete."
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DeliverableTag>{T('Percorsi per ruolo', 'Role-based paths')}</DeliverableTag>
                <DeliverableTag>{T('Attestati individuali', 'Individual certificates')}</DeliverableTag>
                <DeliverableTag>{T('Documentazione GMP', 'GMP documentation')}</DeliverableTag>
              </div>
            </Step>

            <Step n="04" title={T('Supporto continuativo.', 'Ongoing support.')} subtitle={T('Non sparisce nessuno.', 'Nobody disappears.')} duration="Ongoing" last>
              <p style={{ marginBottom: '16px' }}>
                {T(
                  "Post-go-live, un referente Hexaros segue il reparto per le prime 4 settimane di produzione. Dopodiché: aggiornamenti software inclusi, nuove modalità operative integrate, supporto all'estensione ad altri reparti o tipologie di preparazione. Il contratto di supporto include tempi di risposta garantiti e un canale dedicato per i responsabili qualità.",
                  "After go-live, a Hexaros contact follows the ward for the first 4 weeks of production. After that: software updates included, new operating modes integrated, support for extending to other wards or preparation types. The support contract includes guaranteed response times and a dedicated channel for quality managers."
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DeliverableTag>{T('4 sett. affiancamento', '4 weeks on-site support')}</DeliverableTag>
                <DeliverableTag>{T('Aggiornamenti inclusi', 'Updates included')}</DeliverableTag>
                <DeliverableTag>{T('SLA garantito', 'Guaranteed SLA')}</DeliverableTag>
                <DeliverableTag>{T('Canale qualità dedicato', 'Dedicated quality channel')}</DeliverableTag>
              </div>
            </Step>
          </div>
        </div>
      </section>

      {/* FAQ / DOMANDE COMUNI */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Domande frequenti', 'Frequently asked')}>{T('Quello che ', 'What ')}<em>{T('ci chiedono spesso.', 'we get asked often.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule-dark)', border: '1px solid var(--rule-dark)', borderRadius: '4px', overflow: 'hidden' }}>
            {[
              [T("Quanto dura l'installazione tecnica?", 'How long does the technical installation take?'), T("Un giorno lavorativo per la configurazione hardware e software. Il sistema è cloud-native: non richiede server locali, si integra con la rete esistente via VPN o connessione sicura certificata.", 'One working day for hardware and software configuration. The system is cloud-native: it needs no local servers and integrates with the existing network via VPN or a certified secure connection.')],
              [T('Serve approvazione IT centralizzata?', 'Is centralised IT approval required?'), T("Dipende dall'ente. Forniamo tutta la documentazione tecnica (architettura, crittografia, data residency EU, GDPR) per facilitare l'iter IT. Di solito basta un incontro con il team sistemistico.", 'It depends on the organisation. We provide all the technical documentation (architecture, encryption, EU data residency, GDPR) to ease the IT process. Usually a single meeting with the systems team is enough.')],
              [T('Cosa succede se un operatore non si abitua al visore?', "What if an operator doesn't get used to the headset?"), T("È raro, ma capitato: nel pilota gestiamo questa situazione caso per caso, spesso con un percorso di affiancamento dedicato. Il sistema ha anche una modalità tablet per chi non è a proprio agio con il wearable.", "It's rare, but it happens: during the pilot we handle this case by case, often with a dedicated coaching path. The system also has a tablet mode for anyone not comfortable with the wearable.")],
              [T('Si integra con il nostro HIS/LIMS?', 'Does it integrate with our HIS/LIMS?'), T("Con i principali sistemi italiani (Dedalus, Intersystems, SAP, Oracle Health) sì. Se usate altro, lo valutiamo nella fase di assessment: abbiamo API REST e HL7 FHIR disponibili.", 'With the main Italian systems (Dedalus, Intersystems, SAP, Oracle Health), yes. If you use something else, we assess it during the assessment phase: we have REST and HL7 FHIR APIs available.')],
            ].map(([q, a]) => (
              <div key={q} style={{ background: 'var(--ink)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 500, color: 'var(--ivory)', marginBottom: '12px', lineHeight: 1.25, fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>{q}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '20px', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96" }}>
            {T('Partiamo da ', "Let's start with ")}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 96" }}>{T('una valutazione.', 'an assessment.')}</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ivory-dim)', maxWidth: '48ch', margin: '0 auto 36px', lineHeight: 1.55 }}>
            {T(
              "Nessun impegno iniziale. Raccontaci il tuo reparto in 30 minuti — ti diciamo in modo onesto se e come ivEyes può aiutare.",
              "No initial commitment. Tell us about your ward in 30 minutes — we'll tell you honestly whether and how ivEyes can help."
            )}
          </p>
          <Button variant="primary" arrow data-nav="contact">{T('Richiedi una valutazione gratuita', 'Request a free assessment')}</Button>
        </div>
      </section>
    </main>
  );
}

window.HowWeWorkScreen = HowWeWorkScreen;
