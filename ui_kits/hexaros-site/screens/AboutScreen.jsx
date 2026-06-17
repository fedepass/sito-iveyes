/* Hexaros — Azienda / About (dark theme). Exports window.AboutScreen */
const { Button, Eyebrow, Card, FeatureCard, TimelineItem, SectionHead } = window.HexarosDesignSystem_c7b1f3;

function AboutScreen({ lang = 'it' }) {
  const T = (it, en) => (lang === 'en' ? en : it);
  return (
    <main>
      {/* hero */}
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 50px' }}>
        <div className="wrap">
          <Eyebrow style={{ marginBottom: '28px' }}>{T('Azienda · Chi siamo', 'Company · About us')}</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(42px,6.5vw,82px)', lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", maxWidth: '18ch', color: 'var(--ivory)' }}>
            {T("Un'azienda italiana per ", 'An Italian company for ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>{T('la farmacia che cambia.', 'a changing pharmacy.')}</em>
          </h1>
        </div>
      </section>

      {/* intro grid */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 0 90px', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <Eyebrow as="div" style={{ marginBottom: '20px' }}>{T('La nostra missione', 'Our mission')}</Eyebrow>
              <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '48ch' }}>
                <strong style={{ color: 'var(--ivory)', fontWeight: 500 }}>{T('Hexaros nasce per rendere governabile il processo di allestimento dei farmaci in ospedale.', 'Hexaros exists to make the hospital drug-compounding process governable.')}</strong>{T(' Non con generici strumenti gestionali, ma con tecnologie costruite sul banco di lavoro reale — quello delle farmacie oncologiche, delle preparazioni NPT, dei galenici.', ' Not with generic management software, but with technology built on the real workbench — that of oncology pharmacies, TPN preparations and galenicals.')}
              </p>
            </div>
            <div>
              <Eyebrow as="div" style={{ marginBottom: '20px' }}>{T('Cosa facciamo', 'What we do')}</Eyebrow>
              <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '48ch' }}>
                {T('Progettiamo software e dispositivi indossabili che si integrano con i sistemi ospedalieri (HIS, LIMS, ERP) e raccolgono automaticamente i dati operativi. Il nostro primo prodotto, ', 'We design software and wearable devices that integrate with hospital systems (HIS, LIMS, ERP) and automatically collect operational data. Our first product, ')}<strong style={{ color: 'var(--ivory)', fontWeight: 500 }}>ivEyes</strong>{T(', porta gli smart glasses AR dentro la cappa a flusso laminare.', ', brings AR smart glasses inside the laminar-flow hood.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* principles */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('I nostri principi', 'Our principles')}>{T('Come ', 'How we ')}<em>{T('pensiamo', 'think')}</em>{T(' un prodotto per ambienti regolamentati.', ' about products for regulated environments.')}</SectionHead>
          {[
            ['01', T('Strumenti, non piattaforme.', 'Tools, not platforms.'), T('Non costruiamo "sistemi completi" che chiedono al reparto di adattarsi. Costruiamo strumenti che si integrano con quello che già funziona.', 'We don\'t build "complete systems" that ask the ward to adapt. We build tools that integrate with what already works.')],
            ['02', T('Il dato, come effetto collaterale.', 'Data, as a side effect.'), T('Un buon strumento genera dati puliti senza che nessuno debba pensarci. La tracciabilità perfetta nasce quando l\'operatore lavora al meglio.', 'A good tool produces clean data without anyone having to think about it. Perfect traceability happens when the operator works at their best.')],
            ['03', T('Flessibile di mestiere.', 'Flexible by trade.'), T('Ogni farmacia ha le sue routine, le sue eccezioni, i suoi protocolli. I nostri prodotti si riconfigurano: stesso core, scenari diversi.', 'Every pharmacy has its own routines, exceptions and protocols. Our products reconfigure: same core, different scenarios.')],
            ['04', T('Compliance come fondamento.', 'Compliance as a foundation.'), T('GMP, Annex 11, requisiti di qualità: non sono un\'aggiunta, sono la spina dorsale su cui tutto il resto si costruisce.', 'GMP, Annex 11, quality requirements: not an add-on, but the backbone everything else is built on.')],
          ].map(([n, t, p], i) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 2fr', gap: '48px', padding: '40px 0', borderTop: '1px solid var(--rule-dark)', borderBottom: i === 3 ? '1px solid var(--rule-dark)' : 'none', alignItems: 'start' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300, color: 'var(--accent)', fontVariationSettings: "'SOFT' 30, 'opsz' 144", letterSpacing: '-0.02em' }}>{n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 96" }}>{t}</h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: 'var(--ivory-dim)', maxWidth: '54ch' }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Come lavoriamo', 'How we work')}>{T('Tre discipline, ', 'Three disciplines, ')}<em>{T('un tavolo solo.', 'one single table.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              ['Clinical', T('Farmacisti ospedalieri', 'Hospital pharmacists'), T('Capiamo i processi perché abbiamo lavorato su quei banchi. Ogni funzionalità passa dallo scrutinio di chi i farmaci li ha davvero preparati.', 'We understand the processes because we have worked at those benches. Every feature passes the scrutiny of people who have actually prepared the drugs.')],
              ['Engineering', 'Software & AR', T('Backend distribuito, integrazioni HL7/FHIR, applicazioni AR native su Vuzix. Cose che devono funzionare mille volte al giorno senza cadere.', 'Distributed backend, HL7/FHIR integrations, native AR apps on Vuzix. Things that must work a thousand times a day without failing.')],
              ['Regulatory', T('Qualità & compliance', 'Quality & compliance'), T('Sistemi di gestione qualità conformi a GMP Annex 11 e ISO 9001. Documentazione, convalida, audit: non accessorio, non posticipato.', 'Quality management systems compliant with GMP Annex 11 and ISO 9001. Documentation, validation, audit: not optional, not deferred.')],
            ].map(([role, name, p]) => (
              <Card key={role} hover>
                <FeatureCard kicker={role} title={name}>{p}</FeatureCard>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <SectionHead eyebrow="Roadmap">{T('Dal banco di lavoro ', 'From the workbench ')}<em>{T('al sistema ospedaliero.', 'to the hospital system.')}</em></SectionHead>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <TimelineItem year="2025" title={T('Concept di ivEyes e prototipazione', 'ivEyes concept and prototyping')}>{T('Sviluppo del concept e prototipazione in laboratorio; architettura software consolidata.', 'Concept development and lab prototyping; software architecture consolidated.')}</TimelineItem>
            <TimelineItem year="2026" title={T('Fondazione Hexaros e primo pilota ospedaliero', 'Hexaros founded and first hospital pilot')}>{T('Fondazione Hexaros. Avvio del programma pilota con i primi partner ospedalieri.', 'Hexaros founded. Launch of the pilot programme with the first hospital partners.')}</TimelineItem>
            <TimelineItem year="2027 →" title={T('Prima release commerciale e nuovi moduli', 'First commercial release and new modules')}>{T('Release commerciale di ivEyes con tre modalità. LIMS Bridge, Orchestrator multi-reparto, espansione EU.', 'Commercial release of ivEyes with three modes. LIMS Bridge, multi-ward Orchestrator, EU expansion.')}</TimelineItem>
          </ul>
          <div style={{ marginTop: '48px' }}>
            <Button variant="primary" arrow data-nav="contact">{T('Scrivici', 'Get in touch')}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutScreen = AboutScreen;
