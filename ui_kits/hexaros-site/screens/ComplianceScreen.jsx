/* Hexaros — Compliance (dark theme). Exports window.ComplianceScreen */
const { Button, Eyebrow, SectionHead } = window.HexarosDesignSystem_c7b1f3;

function ReqRow({ code, title, how, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '0', borderBottom: '1px solid var(--rule-dark)' }}>
      <div style={{ padding: '24px 20px', borderRight: '1px solid var(--rule-dark)', display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--teal-bright)', fontWeight: 600 }}>{code}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--ivory-dim)', textTransform: 'uppercase', lineHeight: 1.4 }}>{title}</span>
      </div>
      <div style={{ padding: '24px 24px', borderRight: '1px solid var(--rule-dark)', fontSize: '13.5px', lineHeight: 1.6, color: 'var(--ivory-dim)' }}>
        {children}
      </div>
      <div style={{ padding: '24px 24px', fontSize: '13.5px', lineHeight: 1.6, color: 'var(--ivory)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}><circle cx="8" cy="8" r="7" fill="rgba(63,185,140,0.12)" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M5 8l2.5 2.5L11 5.5" stroke="var(--teal-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span>{how}</span>
      </div>
    </div>
  );
}

function CertBadge({ label, sub }) {
  return (
    <div style={{ padding: '24px 28px', background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--teal-bright)', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ivory-dim)', lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

function ComplianceScreen({ lang = 'it' }) {
  const T = (it, en) => (lang === 'en' ? en : it);
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 60px' }}>
        <div className="wrap">
          <Eyebrow style={{ marginBottom: '28px' }}>{T('Compliance & Qualità', 'Compliance & Quality')}</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(42px, 6vw, 78px)', lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30,'opsz' 144", maxWidth: '20ch', color: 'var(--ivory)', marginBottom: '28px' }}>
            {T('Conformità come ', 'Compliance as a ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>{T('fondamento.', 'foundation.')}</em>
          </h1>
          <p style={{ maxWidth: '56ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)' }}>
            {T(
              'GMP, Annex 11, ISO 13485 non sono requisiti che si aggiungono a posteriori. Sono la spina dorsale su cui ivEyes è costruito. Ogni funzionalità è progettata partendo dalla domanda: "Come lo dimostriamo all\'ispettore?"',
              'GMP, Annex 11, ISO 13485 are not requirements bolted on afterwards. They are the backbone ivEyes is built on. Every feature is designed starting from one question: "How do we prove it to the inspector?"'
            )}
          </p>
        </div>
      </section>

      {/* FRAMEWORK BADGES */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '60px 0', borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
            <CertBadge label="GMP" sub="EU Good Manufacturing Practice · D.Lgs 219/2006" />
            <CertBadge label="Annex 11" sub="EU GMP Annex 11 · Computerised Systems" />
            <CertBadge label="21 CFR" sub="Part 11 · Electronic Records & Signatures (FDA)" />
            <CertBadge label="ISO 13485" sub={T('Medical Device QMS · in percorso', 'Medical Device QMS · in progress')} />
            <CertBadge label="GDPR" sub={T('Data residency EU · Crittografia AES-256', 'EU data residency · AES-256 encryption')} />
          </div>
        </div>
      </section>

      {/* REQUISITI vs COME LI GESTIAMO */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Annex 11 — Requisiti chiave', 'Annex 11 — Key requirements')}>{T('Da ogni requisito ', 'From each requirement ')}<em>{T('a una funzionalità concreta.', 'to a concrete feature.')}</em></SectionHead>

          {/* table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', background: 'var(--ink-3)', border: '1px solid var(--rule-dark)', borderRadius: '4px 4px 0 0' }}>
            {[T('Requisito', 'Requirement'), T('Cosa prescrive', 'What it prescribes'), T('Come lo gestisce ivEyes', 'How ivEyes handles it')].map((h, i) => (
              <div key={h} style={{ padding: '14px 24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', borderRight: i < 2 ? '1px solid var(--rule-dark)' : 'none' }}>{h}</div>
            ))}
          </div>

          {/* rows */}
          <div style={{ border: '1px solid var(--rule-dark)', borderTop: 'none', borderRadius: '0 0 4px 4px', overflow: 'hidden' }}>
            <ReqRow code="§ 4.8" title="Audit Trail" how={T('Log immutabile per ogni azione (pesa, acquisisci, valida, firma): timestamp, operatore, valore. Non modificabile né cancellabile.', 'Immutable log for every action (weigh, capture, validate, sign): timestamp, operator, value. Cannot be edited or deleted.')}>
              {T('Il sistema deve mantenere una registrazione cronologica di tutte le operazioni rilevanti per la sicurezza del prodotto, con data, ora e operatore.', 'The system must keep a chronological record of all operations relevant to product safety, with date, time and operator.')}
            </ReqRow>
            <ReqRow code="§ 5" title="Computer System Validation" how={T("Documentazione IQ/OQ/PQ disponibile. Protocolli di convalida pre-configurati per l'ente. Supporto al responsabile qualità per l'iter CSV.", 'IQ/OQ/PQ documentation available. Validation protocols pre-configured for the organisation. Support for the quality manager through the CSV process.')}>
              {T("I sistemi computerizzati devono essere validati prima dell'uso. La convalida deve essere documentata e mantenuta aggiornata.", 'Computerised systems must be validated before use. Validation must be documented and kept up to date.')}
            </ReqRow>
            <ReqRow code="§ 6" title={T('Sicurezza dati & backup', 'Data security & backup')} how={T('Dati replicati in tempo reale su data center EU (Milano + Francoforte). Backup crittografato AES-256. RTO < 4h, RPO < 1h.', 'Data replicated in real time to EU data centres (Milan + Frankfurt). AES-256 encrypted backup. RTO < 4h, RPO < 1h.')}>
              {T('I dati devono essere protetti da perdita accidentale o intenzionale, con procedure di backup documentate e testate periodicamente.', 'Data must be protected against accidental or intentional loss, with documented backup procedures tested periodically.')}
            </ReqRow>
            <ReqRow code="§ 7" title={T('Firma elettronica', 'Electronic signature')} how={T('Firma elettronica qualificata per step critici: doppia autenticazione (PIN + voce o PIN + PIN secondo operatore). Conforme 21 CFR Part 11.', 'Qualified electronic signature for critical steps: two-factor authentication (PIN + voice, or PIN + second operator PIN). Compliant with 21 CFR Part 11.')}>
              {T("Le firme elettroniche devono essere autenticate e non ripudiabili, con collegamento inequivocabile all'identità dell'utente.", "Electronic signatures must be authenticated and non-repudiable, with an unambiguous link to the user's identity.")}
            </ReqRow>
            <ReqRow code="§ 10" title="Change management" how={T('Ogni aggiornamento software segue un processo documentato di impatto, test e rilascio. Nessun aggiornamento in produzione senza validazione.', 'Every software update follows a documented process of impact, testing and release. No production update without validation.')}>
              {T("Qualsiasi modifica al sistema deve seguire procedure formali di valutazione d'impatto e riconvalida prima dell'implementazione.", 'Any change to the system must follow formal impact-assessment and re-validation procedures before implementation.')}
            </ReqRow>
            <ReqRow code="§ 11" title="Incident management" how={T('Sistema di ticketing dedicato per la segnalazione di anomalie software. Risposta garantita in SLA. Root cause documentata per ogni incidente.', 'Dedicated ticketing system for reporting software anomalies. SLA-guaranteed response. Documented root cause for every incident.')}>
              {T('Gli incidenti devono essere registrati, valutati, investigati e risolti con un processo documentato di CAPA (Corrective and Preventive Action).', 'Incidents must be recorded, assessed, investigated and resolved through a documented CAPA (Corrective and Preventive Action) process.')}
            </ReqRow>
          </div>
        </div>
      </section>

      {/* ARCHITETTURA TECNICA */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '80px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Architettura di sicurezza', 'Security architecture')}>{T('Dove risiedono ', 'Where ')}<em>{T('i tuoi dati.', 'your data lives.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            {[
              ['Data residency', T("Tutti i dati processati e archiviati in data center certificati ISO 27001 all'interno dell'Unione Europea (Milano + Francoforte). Nessun dato fuori EU.", 'All data processed and stored in ISO 27001 certified data centres within the European Union (Milan + Frankfurt). No data outside the EU.')],
              [T('Crittografia', 'Encryption'), T("AES-256 at rest, TLS 1.3 in transit. Le chiavi di cifratura sono gestite dall'ente e non accessibili a Hexaros.", 'AES-256 at rest, TLS 1.3 in transit. Encryption keys are managed by the organisation and not accessible to Hexaros.')],
              [T('Accesso e ruoli', 'Access and roles'), T('RBAC granulare per ruolo (operatore, supervisore, responsabile qualità, IT). Log completo di ogni accesso. SSO con LDAP/AD supportato.', 'Granular RBAC by role (operator, supervisor, quality manager, IT). Full log of every access. SSO with LDAP/AD supported.')],
              [T('Integrazioni', 'Integrations'), T('API REST + HL7 FHIR R4. Connettori pre-configurati per i principali HIS italiani (Dedalus, Intersystems). Webhook per notifiche real-time a LIMS/ERP.', 'REST API + HL7 FHIR R4. Pre-configured connectors for the main Italian HIS (Dedalus, Intersystems). Webhooks for real-time notifications to LIMS/ERP.')],
            ].map(([title, body]) => (
              <div key={title} style={{ background: 'var(--ink)', border: '1px solid var(--rule-dark)', borderRadius: '4px', padding: '28px 28px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)', marginBottom: '12px' }}>{title}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)' }}>{body}</div>
              </div>
            ))}
          </div>

          {/* integration logos strip */}
          <div style={{ padding: '24px 0', borderTop: '1px solid var(--rule-dark)', display: 'flex', gap: '0', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginRight: '28px', flexShrink: 0 }}>{T('Integrazioni validate', 'Validated integrations')}</span>
            {['HIS · Dedalus', 'HIS · Intersystems', 'SAP Healthcare', 'Oracle Health', 'HL7 FHIR R4', 'REST API', 'LDAP · AD SSO'].map((s, i, arr) => (
              <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--ivory)', padding: '0 18px', borderRight: i < arr.length - 1 ? '1px solid var(--rule-dark)' : 'none' }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CSV SUPPORT */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ marginBottom: '20px' }}>{T('Supporto alla convalida', 'Validation support')}</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,3.5vw,44px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96", marginBottom: '20px' }}>
                {T('Non ti lasciamo solo con ', "We don't leave you alone with ")}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 96" }}>{T('il dossier CSV.', 'the CSV dossier.')}</em>
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '32px' }}>
                {T(
                  "Forniamo un pacchetto documentale pre-compilato (URS, DS, specifica funzionale, protocolli IQ/OQ/PQ) adattabile alla vostra procedura interna. Un referente qualità Hexaros vi accompagna durante l'iter di convalida e supporta le eventuali richieste dell'ufficio qualità aziendale o dell'ispettore GMP.",
                  'We provide a pre-filled documentation pack (URS, DS, functional specification, IQ/OQ/PQ protocols) adaptable to your internal procedure. A Hexaros quality contact accompanies you through the validation process and supports any requests from your internal quality office or the GMP inspector.'
                )}
              </p>
              <Button variant="primary" arrow data-nav="contact">{T('Parla con il nostro team qualità', 'Talk to our quality team')}</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['URS', T('User Requirement Specification — pre-compilata e adattabile', 'User Requirement Specification — pre-filled and adaptable')],
                ['DS', T('Design Specification — architettura e sicurezza documentate', 'Design Specification — architecture and security documented')],
                ['IQ / OQ', T('Protocolli di Installation e Operational Qualification', 'Installation and Operational Qualification protocols')],
                ['PQ', T('Performance Qualification — su scenari reali del reparto', 'Performance Qualification — on real ward scenarios')],
                ['CAPA log', T('Procedura di gestione anomalie e azioni correttive', 'Anomaly-management and corrective-action procedure')],
                ['Change control', T('Template procedura di change management software', 'Software change-management procedure template')],
              ].map(([code, desc]) => (
                <div key={code} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--teal-bright)', letterSpacing: '0.08em', width: '48px', flexShrink: 0, paddingTop: '1px' }}>{code}</span>
                  <span style={{ fontSize: '13.5px', color: 'var(--ivory-dim)', lineHeight: 1.5 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0', background: 'var(--ink-2)', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96", marginBottom: '18px', maxWidth: '22ch', marginInline: 'auto' }}>
            {T('Pronti a valutare ', 'Ready to assess ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 96" }}>{T('la compliance nel tuo contesto?', 'compliance in your context?')}</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ivory-dim)', maxWidth: '50ch', margin: '0 auto 32px', lineHeight: 1.55 }}>
            {T('Organizziamo un incontro tecnico con il tuo team qualità — con la documentazione pronta da esaminare.', "We'll set up a technical meeting with your quality team — with documentation ready to review.")}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" arrow data-nav="contact">{T('Richiedi incontro tecnico', 'Request a technical meeting')}</Button>
            <Button variant="ghost" data-nav="howwework">{T('Come lavoriamo →', 'How we work →')}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ComplianceScreen = ComplianceScreen;
