/* Hexaros — ivEyes product page (dark theme). Exports window.IveyesScreen */
const { Button, Eyebrow, Tag, Logo, ModeCard, BenefitCard, PullQuote, SectionHead } = window.HexarosDesignSystem_c7b1f3;

function MetaItem({ k, v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--ivory)', fontWeight: 500 }}>{v}</span>
    </div>
  );
}

function IveyesScreen() {
  return (
    <main>
      {/* ===== PRODUCT HERO ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '50px 0 100px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <Tag tone="teal" style={{ marginBottom: '28px' }}><Logo brand="iveyes" wordmark={false} size={20} /> Un prodotto Hexaros</Tag>
              <div style={{ marginBottom: '24px', color: 'var(--ivory)' }}><Logo brand="iveyes" size={48} /></div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px,6vw,80px)', lineHeight: 0.98, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", color: 'var(--ivory)', marginBottom: '24px' }}>
                L'operatore conduce. <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>Il sistema documenta.</em>
              </h1>
              <p style={{ maxWidth: '52ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)', marginBottom: '32px' }}>
                Smart Glasses Tracking Assistant: un visore indossabile che guida, traccia e fornisce agli
                operatori gli strumenti per validare le preparazioni in ambienti regolamentati. Flessibile per
                natura, rigoroso per definizione.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Button variant="primary" arrow data-nav="contact">Richiedi una demo</Button>
                <Button variant="ghost" href="#modalita">Le tre modalità</Button>
              </div>
              <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', padding: '24px 0', borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)' }}>
                <MetaItem k="Hardware" v="Vuzix" />
                <MetaItem k="Interfaccia" v="Vocale, mani libere" />
                <MetaItem k="Compliance" v="GMP · Annex 11" />
                <MetaItem k="Integrazioni" v="HIS · LIMS · ERP" />
              </div>
            </div>
            {/* device panel */}
            <div style={{ position: 'relative', aspectRatio: '4 / 5', border: '1px solid var(--rule-dark)', borderRadius: '8px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', color: 'var(--ivory)', background: 'radial-gradient(ellipse at 30% 30%, rgba(28,114,147,0.14), transparent 60%), linear-gradient(135deg, var(--ink-2), var(--ink-3))' }}>
              <span style={{ position: 'absolute', top: '24px', left: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--teal-bright)', textTransform: 'uppercase' }}>Platform Preview</span>
              <svg width="100%" height="100%" viewBox="0 0 260 320" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(20,80)">
                  <rect x="0" y="20" width="220" height="4" fill="currentColor" opacity="0.15" />
                  <rect x="10" y="10" width="90" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="120" y="10" width="90" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 100 28 Q 110 24 120 28" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 10 38 L -12 44" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M 210 38 L 232 44" stroke="currentColor" strokeWidth="2" fill="none" />
                  <g opacity="0.7">
                    <rect x="20" y="22" width="36" height="3" fill="#1C7293" /><rect x="20" y="30" width="28" height="3" fill="#1C7293" opacity="0.6" /><circle cx="85" cy="38" r="4" fill="#34A0C0" />
                    <rect x="130" y="22" width="52" height="3" fill="#1C7293" /><rect x="130" y="30" width="32" height="3" fill="#1C7293" opacity="0.6" /><circle cx="195" cy="50" r="4" fill="#34A0C0" />
                  </g>
                </g>
                <g transform="translate(20,200)" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="currentColor" opacity="0.7">
                  <text x="0" y="0">01 — TASK ACTIVE</text>
                  <rect x="0" y="8" width="220" height="1" fill="currentColor" opacity="0.25" />
                  <text x="0" y="24" fill="#34A0C0" fontWeight="500" opacity="1">Pesa prodotto</text>
                  <text x="0" y="40">Target: 12.4 g · Tolleranza ±2%</text>
                  <rect x="0" y="52" width="220" height="4" rx="2" fill="currentColor" opacity="0.2" />
                  <rect x="0" y="52" width="165" height="4" rx="2" fill="#1C7293" />
                  <text x="0" y="72">75%</text><text x="198" y="72" textAnchor="end">VALIDATING...</text>
                </g>
              </svg>
              <div style={{ position: 'absolute', bottom: '24px', right: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--ivory-dim)', textAlign: 'right', lineHeight: 1.6 }}>v1.0 · Build 2026.03<br />Preview — schermata illustrativa</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRE MODALITÀ ===== */}
      <section id="modalita" style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <SectionHead eyebrow="Le tre modalità">Un assistente indossabile, <em>tre modi di lavorare.</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <ModeCard tag="01 · Flessibile" title="Tracciamento" subtitle="L'operatore conduce."
              items={['Cattura automatica di immagini', 'Confronto con archivio di riferimento', 'Comandi vocali: pesa, acquisisci, timer', 'Pausa / ripresa con ripristino']}>
              Il sistema affianca in modo passivo. Non impone una sequenza: segue le necessità reali della
              preparazione e mantiene la tracciabilità completa. Interazione vocale, mani libere.
            </ModeCard>
            <ModeCard tag="02 · Modulare" title="Guida" subtitle="Il sistema conduce."
              items={['Training di nuovi operatori tracciabile', 'Preparazioni ad alta complessità', 'Flussi personalizzati su specifica cliente', 'Curva di apprendimento misurabile']}>
              Il processo è suddiviso in step predefiniti. Ogni step deve essere completato e confermato
              prima di procedere. Pensato per training e preparazioni dove il protocollo non ammette scorciatoie.
            </ModeCard>
            <ModeCard tag="03 · Informativo" title="Supporto" subtitle="Fuori cappa, sempre connesso."
              items={['Validazione consegna dei prodotti', 'Conferma stampa ed etichette', 'Tracciamento flussi tra reparti', 'Interfaccia per sistemi automatizzati']}>
              Visualizzazione e conferma di azioni negli scenari "mobile" della farmacia: consegna,
              etichettatura, smistamento, supporto ai sistemi automatizzati. La stessa piattaforma, un contesto diverso.
            </ModeCard>
          </div>
        </div>
      </section>

      {/* ===== SCENARI PER SPECIALITÀ ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Scenari di utilizzo">Una piattaforma, <em>tre contesti clinici.</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Oncologia */}
            <div style={{ background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 20px', background: 'rgba(52,160,192,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M8 4v4l3 2" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>Farmaci hazardous</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  Oncologia e chemioterapia.
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  La preparazione di farmaci citotossici richiede il massimo controllo: dose nominale verificata per ogni paziente,
                  ogni step documentato con timestamp e firma elettronica. ivEyes guida l'operatore passo a passo in modalità
                  Guida — nessuno step saltabile, audit trail immutabile per ogni sacca preparata.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Verifica dose nominale per paziente', 'Step obbligatori — nessuna scorciatoia', 'Firma elettronica per ogni validazione', 'Tracciabilità lotto materie prime'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--ivory-dim)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '1px', flexShrink: 0 }}><path d="M2 7l3 3 7-6" stroke="var(--teal-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NPT */}
            <div style={{ background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 20px', background: 'rgba(52,160,192,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="2" width="10" height="12" rx="2" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M6 6h4M6 9h4M6 12h2" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>Multi-componente</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  Nutrizione parenterale totale.
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  Le sacche NPT richiedono pesatura sequenziale di più componenti con tolleranze strette. ivEyes guida
                  l'operatore componente per componente, verifica il peso catturato con la bilancia integrata, segnala
                  vocalmente scostamenti dalla tolleranza e registra ogni step senza che l'operatore tocchi un terminale.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Guida sequenziale multi-componente', 'Verifica peso via bilancia integrata', 'Alert vocale su scostamento tolleranza', 'Timer automatico per stabilità'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--ivory-dim)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '1px', flexShrink: 0 }}><path d="M2 7l3 3 7-6" stroke="var(--teal-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Galenici */}
            <div style={{ background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 20px', background: 'rgba(52,160,192,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v4M4 6h8l-1 7H5L4 6z" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>Preparazioni magistrali</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  Galenici e preparazioni magistrali.
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  La variabilità delle preparazioni magistrali rende difficile standardizzare i processi. ivEyes permette di
                  configurare protocolli specifici per formula, con guide operative adattabili. Ideale anche per l'onboarding
                  di nuovi operatori su preparazioni complesse — la curva di apprendimento è tracciata e migliorata nel tempo.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Protocolli per formula configurabili', 'Modalità training per nuovi operatori', 'Curva apprendimento misurata', 'Storico per lotto e operatore'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--ivory-dim)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '1px', flexShrink: 0 }}><path d="M2 7l3 3 7-6" stroke="var(--teal-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '32px', display: 'flex', gap: '14px' }}>
            <Button variant="primary" arrow data-nav="contact">Parla con un esperto del tuo scenario</Button>
            <Button variant="ghost" data-nav="compliance">Approfondisci la compliance →</Button>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '110px 0', background: 'var(--ink-3)' }}>
        <div className="wrap">
          <PullQuote cite="— Il principio di ivEyes">Tracciabilità completa <em>senza imporre rigidità</em> al flusso di lavoro.</PullQuote>
        </div>
      </section>

      {/* ===== BENEFICI ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Benefici">Cosa cambia <em>per chi governa il processo.</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule-dark)', border: '1px solid var(--rule-dark)', borderRadius: '4px', overflow: 'hidden' }}>
            <BenefitCard stat="100%" title="Tracciabilità di processo">Ogni step documentato automaticamente: audit trail completo per conformità GMP · Annex 11.</BenefitCard>
            <BenefitCard stat="KPI" title="Dati operativi oggettivi">Tempi reali per preparazione, tipologia, operatore. Base dati per pianificazione e budget.</BenefitCard>
            <BenefitCard stat="↓" title="Onboarding più rapido">Il nuovo operatore è produttivo prima e con meno supervisione, mantenendo la qualità.</BenefitCard>
            <BenefitCard stat="1 → N" title="Una piattaforma, più processi">Sotto cappa, training, logistica: un solo investimento per scenari diversi.</BenefitCard>
            <BenefitCard stat="AR" title="Tecnologia consolidata">Smart glasses Vuzix: hardware affermato, validato in ambienti GMP regolamentati europei.</BenefitCard>
            <BenefitCard stat="→" title="Riduzione del rischio">Validazione automatica degli step critici: meno errori, meno rilavorazioni.</BenefitCard>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '20px', maxWidth: '20ch', marginInline: 'auto', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 96" }}>
            Pronto a vedere <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>ivEyes al lavoro?</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ivory-dim)', maxWidth: '52ch', margin: '0 auto 36px', lineHeight: 1.55 }}>
            Ti mostriamo il sistema su uno scenario reale della tua farmacia. Demo on-site o in videoconferenza,
            con un esperto di processo Hexaros a fianco.
          </p>
          <Button variant="primary" arrow data-nav="contact">Prenota una demo</Button>
        </div>
      </section>
    </main>
  );
}

window.IveyesScreen = IveyesScreen;
