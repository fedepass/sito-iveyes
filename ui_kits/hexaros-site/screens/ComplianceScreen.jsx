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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}><circle cx="8" cy="8" r="7" fill="rgba(52,160,192,0.12)" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M5 8l2.5 2.5L11 5.5" stroke="var(--teal-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

function ComplianceScreen() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 60px' }}>
        <div className="wrap">
          <Eyebrow style={{ marginBottom: '28px' }}>Compliance & Qualità</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(42px, 6vw, 78px)', lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30,'opsz' 144", maxWidth: '20ch', color: 'var(--ivory)', marginBottom: '28px' }}>
            Conformità come <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>fondamento.</em>
          </h1>
          <p style={{ maxWidth: '56ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)' }}>
            GMP, Annex 11, ISO 13485 non sono requisiti che si aggiungono a posteriori.
            Sono la spina dorsale su cui ivEyes è costruito. Ogni funzionalità è progettata partendo
            dalla domanda: "Come lo dimostriamo all'ispettore?"
          </p>
        </div>
      </section>

      {/* FRAMEWORK BADGES */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 0', borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
            <CertBadge label="GMP" sub="EU Good Manufacturing Practice · D.Lgs 219/2006" />
            <CertBadge label="Annex 11" sub="EU GMP Annex 11 · Computerised Systems" />
            <CertBadge label="21 CFR" sub="Part 11 · Electronic Records & Signatures (FDA)" />
            <CertBadge label="ISO 13485" sub="Medical Device QMS · in percorso" />
            <CertBadge label="GDPR" sub="Data residency EU · Crittografia AES-256" />
          </div>
        </div>
      </section>

      {/* REQUISITI vs COME LI GESTIAMO */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Annex 11 — Requisiti chiave">Da ogni requisito <em>a una funzionalità concreta.</em></SectionHead>

          {/* table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', background: 'var(--ink-3)', border: '1px solid var(--rule-dark)', borderRadius: '4px 4px 0 0' }}>
            {['Requisito', 'Cosa prescrive', 'Come lo gestisce ivEyes'].map((h, i) => (
              <div key={h} style={{ padding: '14px 24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', borderRight: i < 2 ? '1px solid var(--rule-dark)' : 'none' }}>{h}</div>
            ))}
          </div>

          {/* rows */}
          <div style={{ border: '1px solid var(--rule-dark)', borderTop: 'none', borderRadius: '0 0 4px 4px', overflow: 'hidden' }}>
            <ReqRow code="§ 4.8" title="Audit Trail" how="Log immutabile per ogni azione (pesa, acquisisci, valida, firma): timestamp, operatore, valore. Non modificabile né cancellabile.">
              Il sistema deve mantenere una registrazione cronologica di tutte le operazioni rilevanti per la sicurezza del prodotto, con data, ora e operatore.
            </ReqRow>
            <ReqRow code="§ 5" title="Computer System Validation" how="Documentazione IQ/OQ/PQ disponibile. Protocolli di convalida pre-configurati per l'ente. Supporto al responsabile qualità per l'iter CSV.">
              I sistemi computerizzati devono essere validati prima dell'uso. La convalida deve essere documentata e mantenuta aggiornata.
            </ReqRow>
            <ReqRow code="§ 6" title="Sicurezza dati & backup" how="Dati replicati in tempo reale su data center EU (Milano + Francoforte). Backup crittografato AES-256. RTO &lt; 4h, RPO &lt; 1h.">
              I dati devono essere protetti da perdita accidentale o intenzionale, con procedure di backup documentate e testate periodicamente.
            </ReqRow>
            <ReqRow code="§ 7" title="Firma elettronica" how="Firma elettronica qualificata per step critici: doppia autenticazione (PIN + voce o PIN + PIN secondo operatore). Conforme 21 CFR Part 11.">
              Le firme elettroniche devono essere autenticate e non ripudiabili, con collegamento inequivocabile all'identità dell'utente.
            </ReqRow>
            <ReqRow code="§ 10" title="Change management" how="Ogni aggiornamento software segue un processo documentato di impatto, test e rilascio. Nessun aggiornamento in produzione senza validazione.">
              Qualsiasi modifica al sistema deve seguire procedure formali di valutazione d'impatto e riconvalida prima dell'implementazione.
            </ReqRow>
            <ReqRow code="§ 11" title="Incident management" how="Sistema di ticketing dedicato per la segnalazione di anomalie software. Risposta garantita in SLA. Root cause documentata per ogni incidente.">
              Gli incidenti devono essere registrati, valutati, investigati e risolti con un processo documentato di CAPA (Corrective and Preventive Action).
            </ReqRow>
          </div>
        </div>
      </section>

      {/* ARCHITETTURA TECNICA */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <SectionHead eyebrow="Architettura di sicurezza">Dove risiedono <em>i tuoi dati.</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            {[
              ['Data residency', 'Tutti i dati processati e archiviati in data center certificati ISO 27001 all\'interno dell\'Unione Europea (Milano + Francoforte). Nessun dato fuori EU.'],
              ['Crittografia', 'AES-256 at rest, TLS 1.3 in transit. Le chiavi di cifratura sono gestite dall\'ente e non accessibili a Hexaros.'],
              ['Accesso e ruoli', 'RBAC granulare per ruolo (operatore, supervisore, responsabile qualità, IT). Log completo di ogni accesso. SSO con LDAP/AD supportato.'],
              ['Integrazioni', 'API REST + HL7 FHIR R4. Connettori pre-configurati per i principali HIS italiani (Dedalus, Intersystems). Webhook per notifiche real-time a LIMS/ERP.'],
            ].map(([title, body]) => (
              <div key={title} style={{ background: 'var(--ink)', border: '1px solid var(--rule-dark)', borderRadius: '4px', padding: '28px 28px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)', marginBottom: '12px' }}>{title}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)' }}>{body}</div>
              </div>
            ))}
          </div>

          {/* integration logos strip */}
          <div style={{ padding: '24px 0', borderTop: '1px solid var(--rule-dark)', display: 'flex', gap: '0', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginRight: '28px', flexShrink: 0 }}>Integrazioni validate</span>
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
              <Eyebrow style={{ marginBottom: '20px' }}>Supporto alla convalida</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,3.5vw,44px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 96", marginBottom: '20px' }}>
                Non ti lasciamo solo con <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 96" }}>il dossier CSV.</em>
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '32px' }}>
                Forniamo un pacchetto documentale pre-compilato (URS, DS, specifica funzionale, protocolli IQ/OQ/PQ)
                adattabile alla vostra procedura interna. Un referente qualità Hexaros vi accompagna durante l'iter
                di convalida e supporta le eventuali richieste dell'ufficio qualità aziendale o dell'ispettore GMP.
              </p>
              <Button variant="primary" arrow data-nav="contact">Parla con il nostro team qualità</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['URS', 'User Requirement Specification — pre-compilata e adattabile'],
                ['DS', 'Design Specification — architettura e sicurezza documentate'],
                ['IQ / OQ', 'Protocolli di Installation e Operational Qualification'],
                ['PQ', 'Performance Qualification — su scenari reali del reparto'],
                ['CAPA log', 'Procedura di gestione anomalie e azioni correttive'],
                ['Change control', 'Template procedura di change management software'],
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
            Pronti a valutare <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 96" }}>la compliance nel tuo contesto?</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ivory-dim)', maxWidth: '50ch', margin: '0 auto 32px', lineHeight: 1.55 }}>
            Organizziamo un incontro tecnico con il tuo team qualità — con la documentazione pronta da esaminare.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" arrow data-nav="contact">Richiedi incontro tecnico</Button>
            <Button variant="ghost" data-nav="howwework">Come lavoriamo →</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ComplianceScreen = ComplianceScreen;
