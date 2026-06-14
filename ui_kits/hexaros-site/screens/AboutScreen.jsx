/* Hexaros — Azienda / About (dark theme). Exports window.AboutScreen */
const { Button, Eyebrow, Card, FeatureCard, TimelineItem, SectionHead } = window.HexarosDesignSystem_c7b1f3;

function AboutScreen() {
  return (
    <main>
      {/* hero */}
      <section style={{ position: 'relative', zIndex: 2, padding: '70px 0 50px' }}>
        <div className="wrap">
          <Eyebrow style={{ marginBottom: '28px' }}>Azienda · Chi siamo</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(42px,6.5vw,82px)', lineHeight: 1, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", maxWidth: '18ch', color: 'var(--ivory)' }}>
            Un'azienda italiana per <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>la farmacia che cambia.</em>
          </h1>
        </div>
      </section>

      {/* intro grid */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 0 90px', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <Eyebrow as="div" style={{ marginBottom: '20px' }}>La nostra missione</Eyebrow>
              <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '48ch' }}>
                <strong style={{ color: 'var(--ivory)', fontWeight: 500 }}>Hexaros nasce per rendere governabile il processo di allestimento dei farmaci in ospedale.</strong> Non con generici strumenti gestionali, ma con tecnologie costruite sul banco di lavoro reale — quello delle farmacie oncologiche, delle preparazioni NPT, dei galenici.
              </p>
            </div>
            <div>
              <Eyebrow as="div" style={{ marginBottom: '20px' }}>Cosa facciamo</Eyebrow>
              <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '48ch' }}>
                Progettiamo software e dispositivi indossabili che si integrano con i sistemi ospedalieri (HIS, LIMS, ERP) e raccolgono automaticamente i dati operativi. Il nostro primo prodotto, <strong style={{ color: 'var(--ivory)', fontWeight: 500 }}>ivEyes</strong>, porta gli smart glasses AR dentro la cappa a flusso laminare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* principles */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="I nostri principi">Come <em>pensiamo</em> un prodotto per ambienti regolamentati.</SectionHead>
          {[
            ['01', 'Strumenti, non piattaforme.', 'Non costruiamo "sistemi completi" che chiedono al reparto di adattarsi. Costruiamo strumenti che si integrano con quello che già funziona.'],
            ['02', 'Il dato, come effetto collaterale.', 'Un buon strumento genera dati puliti senza che nessuno debba pensarci. La tracciabilità perfetta nasce quando l\'operatore lavora al meglio.'],
            ['03', 'Flessibile di mestiere.', 'Ogni farmacia ha le sue routine, le sue eccezioni, i suoi protocolli. I nostri prodotti si riconfigurano: stesso core, scenari diversi.'],
            ['04', 'Compliance come fondamento.', 'GMP, Annex 11, requisiti di qualità: non sono un\'aggiunta, sono la spina dorsale su cui tutto il resto si costruisce.'],
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
          <SectionHead eyebrow="Come lavoriamo">Tre discipline, <em>un tavolo solo.</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              ['Clinical', 'Farmacisti ospedalieri', 'Capiamo i processi perché abbiamo lavorato su quei banchi. Ogni funzionalità passa dallo scrutinio di chi i farmaci li ha davvero preparati.'],
              ['Engineering', 'Software & AR', 'Backend distribuito, integrazioni HL7/FHIR, applicazioni AR native su Vuzix. Cose che devono funzionare mille volte al giorno senza cadere.'],
              ['Regulatory', 'Qualità & compliance', 'Sistemi di gestione qualità conformi a GMP Annex 11 e ISO 9001. Documentazione, convalida, audit: non accessorio, non posticipato.'],
            ].map(([role, name, p]) => (
              <Card key={role} hover>
                <FeatureCard kicker={role} title={name}>{p}</FeatureCard>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', borderTop: '1px solid var(--rule-dark)' }}>
        <div className="wrap">
          <SectionHead eyebrow="Roadmap">Dal banco di lavoro <em>al sistema ospedaliero.</em></SectionHead>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <TimelineItem year="2025" title="Concept di ivEyes e prototipazione">Sviluppo del concept e prototipazione in laboratorio; architettura software consolidata.</TimelineItem>
            <TimelineItem year="2026" title="Fondazione Hexaros e primo pilota ospedaliero">Fondazione Hexaros. Avvio del programma pilota con i primi partner ospedalieri.</TimelineItem>
            <TimelineItem year="2027 →" title="Prima release commerciale e nuovi moduli">Release commerciale di ivEyes con tre modalità. LIMS Bridge, Orchestrator multi-reparto, espansione EU.</TimelineItem>
          </ul>
          <div style={{ marginTop: '48px' }}>
            <Button variant="primary" arrow data-nav="contact">Scrivici</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutScreen = AboutScreen;
