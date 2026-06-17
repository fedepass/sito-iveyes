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

function IveyesScreen({ lang = 'it' }) {
  const T = (it, en) => (lang === 'en' ? en : it);
  return (
    <main>
      {/* ===== PRODUCT HERO ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '50px 0 100px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <Tag tone="teal" style={{ marginBottom: '28px' }}><Logo brand="iveyes" wordmark={false} size={20} /> {T('Un prodotto Hexaros', 'A Hexaros product')}</Tag>
              <div style={{ marginBottom: '24px', color: 'var(--ivory)' }}><Logo brand="iveyes" size={48} /></div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px,6vw,80px)', lineHeight: 0.98, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144", color: 'var(--ivory)', marginBottom: '24px' }}>
                {T("L'operatore conduce. ", 'The operator leads. ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>{T('Il sistema documenta.', 'The system documents.')}</em>
              </h1>
              <p style={{ maxWidth: '52ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)', marginBottom: '32px' }}>
                {T(
                  "Smart Glasses Tracking Assistant: un visore indossabile che guida, traccia e fornisce agli operatori gli strumenti per validare le preparazioni in ambienti regolamentati. Flessibile per natura, rigoroso per definizione.",
                  'Smart Glasses Tracking Assistant: a wearable headset that guides, tracks and gives operators the tools to validate preparations in regulated environments. Flexible by nature, rigorous by definition.'
                )}
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Button variant="primary" arrow data-nav="contact">{T('Richiedi una demo', 'Request a demo')}</Button>
                <Button variant="ghost" href="#modalita">{T('Le tre modalità', 'The three modes')}</Button>
              </div>
              <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', padding: '24px 0', borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)' }}>
                <MetaItem k="Hardware" v="Vuzix" />
                <MetaItem k={T('Interfaccia', 'Interface')} v={T('Vocale, mani libere', 'Voice, hands-free')} />
                <MetaItem k="Compliance" v="GMP · Annex 11" />
                <MetaItem k={T('Integrazioni', 'Integrations')} v="HIS · LIMS · ERP" />
              </div>
            </div>
            {/* device panel */}
            <div style={{ position: 'relative', aspectRatio: '4 / 5', border: '1px solid var(--rule-dark)', borderRadius: '8px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', color: 'var(--ivory)', background: 'radial-gradient(ellipse at 30% 30%, rgba(31,132,102,0.14), transparent 60%), linear-gradient(135deg, var(--ink-2), var(--ink-3))' }}>
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
                    <rect x="20" y="22" width="36" height="3" fill="#1F8466" /><rect x="20" y="30" width="28" height="3" fill="#1F8466" opacity="0.6" /><circle cx="85" cy="38" r="4" fill="#3FB98C" />
                    <rect x="130" y="22" width="52" height="3" fill="#1F8466" /><rect x="130" y="30" width="32" height="3" fill="#1F8466" opacity="0.6" /><circle cx="195" cy="50" r="4" fill="#3FB98C" />
                  </g>
                </g>
                <g transform="translate(20,200)" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="currentColor" opacity="0.7">
                  <text x="0" y="0">01 — TASK ACTIVE</text>
                  <rect x="0" y="8" width="220" height="1" fill="currentColor" opacity="0.25" />
                  <text x="0" y="24" fill="#3FB98C" fontWeight="500" opacity="1">{T('Pesa prodotto', 'Weigh product')}</text>
                  <text x="0" y="40">{T('Target: 12.4 g · Tolleranza ±2%', 'Target: 12.4 g · Tolerance ±2%')}</text>
                  <rect x="0" y="52" width="220" height="4" rx="2" fill="currentColor" opacity="0.2" />
                  <rect x="0" y="52" width="165" height="4" rx="2" fill="#1F8466" />
                  <text x="0" y="72">75%</text><text x="198" y="72" textAnchor="end">VALIDATING...</text>
                </g>
              </svg>
              <div style={{ position: 'absolute', bottom: '24px', right: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--ivory-dim)', textAlign: 'right', lineHeight: 1.6 }}>v1.0 · Build 2026.03<br />{T('Preview — schermata illustrativa', 'Preview — illustrative screen')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRE MODALITÀ ===== */}
      <section id="modalita" className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Le tre modalità', 'The three modes')}>{T('Un assistente indossabile, ', 'One wearable assistant, ')}<em>{T('tre modi di lavorare.', 'three ways to work.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <ModeCard tag={T('01 · Flessibile', '01 · Flexible')} title={T('Tracciamento', 'Tracking')} subtitle={T("L'operatore conduce.", 'The operator leads.')}
              items={[T('Cattura automatica di immagini', 'Automatic image capture'), T('Confronto con archivio di riferimento', 'Comparison against a reference archive'), T('Comandi vocali: pesa, acquisisci, timer', 'Voice commands: weigh, capture, timer'), T('Pausa / ripresa con ripristino', 'Pause / resume with restore')]}>
              {T(
                "Il sistema affianca in modo passivo. Non impone una sequenza: segue le necessità reali della preparazione e mantiene la tracciabilità completa. Interazione vocale, mani libere.",
                'The system assists passively. It does not impose a sequence: it follows the real needs of the preparation and keeps full traceability. Voice interaction, hands-free.'
              )}
            </ModeCard>
            <ModeCard tag={T('02 · Modulare', '02 · Modular')} title={T('Guida', 'Guidance')} subtitle={T('Il sistema conduce.', 'The system leads.')}
              items={[T('Training di nuovi operatori tracciabile', 'Trackable training of new operators'), T('Preparazioni ad alta complessità', 'High-complexity preparations'), T('Flussi personalizzati su specifica cliente', 'Custom flows to client spec'), T('Curva di apprendimento misurabile', 'Measurable learning curve')]}>
              {T(
                "Il processo è suddiviso in step predefiniti. Ogni step deve essere completato e confermato prima di procedere. Pensato per training e preparazioni dove il protocollo non ammette scorciatoie.",
                'The process is split into predefined steps. Each step must be completed and confirmed before moving on. Designed for training and preparations where the protocol allows no shortcuts.'
              )}
            </ModeCard>
            <ModeCard tag={T('03 · Informativo', '03 · Informational')} title={T('Supporto', 'Support')} subtitle={T('Fuori cappa, sempre connesso.', 'Outside the hood, always connected.')}
              items={[T('Validazione consegna dei prodotti', 'Product delivery validation'), T('Conferma stampa ed etichette', 'Print and label confirmation'), T('Tracciamento flussi tra reparti', 'Inter-ward flow tracking'), T('Interfaccia per sistemi automatizzati', 'Interface for automated systems')]}>
              {T(
                'Visualizzazione e conferma di azioni negli scenari "mobile" della farmacia: consegna, etichettatura, smistamento, supporto ai sistemi automatizzati. La stessa piattaforma, un contesto diverso.',
                'Display and confirmation of actions in the pharmacy’s "mobile" scenarios: delivery, labelling, sorting, support for automated systems. The same platform, a different context.'
              )}
            </ModeCard>
          </div>
        </div>
      </section>

      {/* ===== SCENARI PER SPECIALITÀ ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Scenari di utilizzo', 'Use scenarios')}>{T('Una piattaforma, ', 'One platform, ')}<em>{T('tre contesti clinici.', 'three clinical contexts.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Oncologia */}
            <div style={{ background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 20px', background: 'rgba(63,185,140,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M8 4v4l3 2" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>{T('Farmaci hazardous', 'Hazardous drugs')}</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  {T('Oncologia e chemioterapia.', 'Oncology and chemotherapy.')}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  {T(
                    "La preparazione di farmaci citotossici richiede il massimo controllo: dose nominale verificata per ogni paziente, ogni step documentato con timestamp e firma elettronica. ivEyes guida l'operatore passo a passo in modalità Guida — nessuno step saltabile, audit trail immutabile per ogni sacca preparata.",
                    'Preparing cytotoxic drugs requires maximum control: nominal dose verified for each patient, every step documented with timestamp and electronic signature. ivEyes guides the operator step by step in Guidance mode — no step can be skipped, an immutable audit trail for every bag prepared.'
                  )}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[T('Verifica dose nominale per paziente', 'Nominal dose check per patient'), T('Step obbligatori — nessuna scorciatoia', 'Mandatory steps — no shortcuts'), T('Firma elettronica per ogni validazione', 'Electronic signature for each validation'), T('Tracciabilità lotto materie prime', 'Raw-material batch traceability')].map(item => (
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
              <div style={{ padding: '10px 20px', background: 'rgba(63,185,140,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="2" width="10" height="12" rx="2" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M6 6h4M6 9h4M6 12h2" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>{T('Multi-componente', 'Multi-component')}</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  {T('Nutrizione parenterale totale.', 'Total parenteral nutrition.')}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  {T(
                    "Le sacche NPT richiedono pesatura sequenziale di più componenti con tolleranze strette. ivEyes guida l'operatore componente per componente, verifica il peso catturato con la bilancia integrata, segnala vocalmente scostamenti dalla tolleranza e registra ogni step senza che l'operatore tocchi un terminale.",
                    'TPN bags require sequential weighing of multiple components with tight tolerances. ivEyes guides the operator component by component, checks the captured weight with the integrated scale, flags tolerance deviations by voice and records every step without the operator touching a terminal.'
                  )}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[T('Guida sequenziale multi-componente', 'Sequential multi-component guidance'), T('Verifica peso via bilancia integrata', 'Weight check via integrated scale'), T('Alert vocale su scostamento tolleranza', 'Voice alert on tolerance deviation'), T('Timer automatico per stabilità', 'Automatic timer for stability')].map(item => (
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
              <div style={{ padding: '10px 20px', background: 'rgba(63,185,140,0.08)', borderBottom: '1px solid var(--rule-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v4M4 6h8l-1 7H5L4 6z" stroke="var(--teal-bright)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-bright)' }}>{T('Preparazioni magistrali', 'Compounded preparations')}</span>
              </div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30,'opsz' 60", marginBottom: '14px' }}>
                  {T('Galenici e preparazioni magistrali.', 'Galenicals and compounded preparations.')}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ivory-dim)', marginBottom: '24px', flex: 1 }}>
                  {T(
                    "La variabilità delle preparazioni magistrali rende difficile standardizzare i processi. ivEyes permette di configurare protocolli specifici per formula, con guide operative adattabili. Ideale anche per l'onboarding di nuovi operatori su preparazioni complesse — la curva di apprendimento è tracciata e migliorata nel tempo.",
                    'The variability of compounded preparations makes processes hard to standardise. ivEyes lets you configure formula-specific protocols with adaptable operating guides. Ideal also for onboarding new operators on complex preparations — the learning curve is tracked and improved over time.'
                  )}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[T('Protocolli per formula configurabili', 'Configurable per-formula protocols'), T('Modalità training per nuovi operatori', 'Training mode for new operators'), T('Curva apprendimento misurata', 'Measured learning curve'), T('Storico per lotto e operatore', 'History by batch and operator')].map(item => (
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
            <Button variant="primary" arrow data-nav="contact">{T('Parla con un esperto del tuo scenario', 'Talk to an expert on your scenario')}</Button>
            <Button variant="ghost" data-nav="compliance">{T('Approfondisci la compliance →', 'Explore compliance →')}</Button>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '110px 0', background: 'var(--ink-3)' }}>
        <div className="wrap">
          <PullQuote cite={T('— Il principio di ivEyes', '— The principle of ivEyes')}>{T('Tracciabilità completa ', 'Full traceability ')}<em>{T('senza imporre rigidità', 'without imposing rigidity')}</em>{T(' al flusso di lavoro.', ' on the workflow.')}</PullQuote>
        </div>
      </section>

      {/* ===== BENEFICI ===== */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Benefici', 'Benefits')}>{T('Cosa cambia ', 'What changes ')}<em>{T('per chi governa il processo.', 'for those who govern the process.')}</em></SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule-dark)', border: '1px solid var(--rule-dark)', borderRadius: '4px', overflow: 'hidden' }}>
            <BenefitCard stat="100%" title={T('Tracciabilità di processo', 'Process traceability')}>{T('Ogni step documentato automaticamente: audit trail completo per conformità GMP · Annex 11.', 'Every step documented automatically: a complete audit trail for GMP · Annex 11 compliance.')}</BenefitCard>
            <BenefitCard stat="KPI" title={T('Dati operativi oggettivi', 'Objective operational data')}>{T('Tempi reali per preparazione, tipologia, operatore. Base dati per pianificazione e budget.', 'Real times by preparation, type and operator. A data foundation for planning and budgeting.')}</BenefitCard>
            <BenefitCard stat="↓" title={T('Onboarding più rapido', 'Faster onboarding')}>{T('Il nuovo operatore è produttivo prima e con meno supervisione, mantenendo la qualità.', 'New operators become productive sooner and with less supervision, while keeping quality.')}</BenefitCard>
            <BenefitCard stat="1 → N" title={T('Una piattaforma, più processi', 'One platform, many processes')}>{T('Sotto cappa, training, logistica: un solo investimento per scenari diversi.', 'Under the hood, training, logistics: a single investment for different scenarios.')}</BenefitCard>
            <BenefitCard stat="AR" title={T('Tecnologia consolidata', 'Proven technology')}>{T('Smart glasses Vuzix: hardware affermato, validato in ambienti GMP regolamentati europei.', 'Vuzix smart glasses: established hardware, validated in regulated European GMP environments.')}</BenefitCard>
            <BenefitCard stat="→" title={T('Riduzione del rischio', 'Risk reduction')}>{T('Validazione automatica degli step critici: meno errori, meno rilavorazioni.', 'Automatic validation of critical steps: fewer errors, less rework.')}</BenefitCard>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '20px', maxWidth: '20ch', marginInline: 'auto', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 96" }}>
            {T('Pronto a vedere ', 'Ready to see ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>{T('ivEyes al lavoro?', 'ivEyes at work?')}</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ivory-dim)', maxWidth: '52ch', margin: '0 auto 36px', lineHeight: 1.55 }}>
            {T(
              "Ti mostriamo il sistema su uno scenario reale della tua farmacia. Demo on-site o in videoconferenza, con un esperto di processo Hexaros a fianco.",
              "We'll show you the system on a real scenario from your pharmacy. On-site demo or video call, with a Hexaros process expert alongside."
            )}
          </p>
          <Button variant="primary" arrow data-nav="contact">{T('Prenota una demo', 'Book a demo')}</Button>
        </div>
      </section>
    </main>
  );
}

window.IveyesScreen = IveyesScreen;
