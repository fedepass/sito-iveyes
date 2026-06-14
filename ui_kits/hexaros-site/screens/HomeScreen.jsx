/* Hexaros — Home (dark / company theme). Exports window.HomeScreen */
const { Button, Eyebrow, Tag, Metric, FeatureCard, SectionHead } = window.HexarosDesignSystem_c7b1f3;

/* ---- Social proof strip ---- */
function ProofStrip() {
  return (
    <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)', background: 'var(--ink-2)', padding: '28px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '40px' }}>
          <blockquote style={{ margin: 0, display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--accent)', lineHeight: 1, opacity: 0.5, fontVariationSettings: "'SOFT' 30,'opsz' 96", flexShrink: 0 }}>"</span>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px,1.6vw,19px)', color: 'var(--ivory)', fontWeight: 400, lineHeight: 1.35, margin: '0 0 10px', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>
                La tracciabilità non rallenta più il processo — <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 60" }}>lo accompagna.</em>
              </p>
              <cite style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', fontStyle: 'normal' }}>
                — Farmacista responsabile · Pilota ospedaliero 2026 · Triveneto
              </cite>
            </div>
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end', flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>In pilota attivo</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--accent)', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>2 farmacie</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>Nordest Italia · 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Wearable vs fixed comparison ---- */
const COMPARE_ROWS = [
  ['Operatività sotto cappa ISO 5', true, false, false],
  ['Mani sempre libere — zero touch terminale', true, false, false],
  ['Interazione vocale durante la preparazione', true, false, false],
  ['Nessuna contaminazione da tastiera/schermo', true, false, false],
  ['Documentazione automatica step-by-step', true, true, true],
  ['Integrazione HIS/LIMS/ERP', true, true, true],
  ['Audit trail GMP · Annex 11', true, true, true],
  ['Investimento hardware per reparto', '1 visore', 'Cabinet fisso', 'Robot + cleanroom'],
];

function CheckIcon({ ok, value }) {
  if (value !== undefined) {
    return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: ok ? 'var(--teal-bright)' : 'var(--ivory-dim)', opacity: ok ? 1 : 0.6 }}>{value}</span>;
  }
  return ok
    ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(52,160,192,0.12)" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M5 9l3 3 5-5" stroke="var(--teal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(255,255,255,0.03)" stroke="rgba(245,241,234,0.18)" strokeWidth="1.2"/><path d="M6 12l6-6M12 12L6 6" stroke="rgba(245,241,234,0.25)" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}

function WearableSection() {
  return (
    <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)' }}>
      <div className="wrap">
        <SectionHead eyebrow="Perché indossabile?">L'unico assistente <em>che lavora con te.</em></SectionHead>
        <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '58ch', marginBottom: '48px', marginTop: '-16px' }}>
          I sistemi fissi si fermano alla soglia della cappa a flusso laminare. ivEyes entra con l'operatore:
          indossabile, vocale, senza contatto con superfici critiche. Zero touch. Zero interruzione del processo sterile.
        </p>

        {/* comparison table */}
        <div style={{ border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden' }}>
          {/* header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--ink-3)', borderBottom: '1px solid var(--rule-dark)' }}>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>Funzionalità</div>
            {[
              { label: 'ivEyes', sub: 'Wearable AR', highlight: true },
              { label: 'Cabinet fisso', sub: 'es. Omnicell', highlight: false },
              { label: 'Robot compounding', sub: 'es. Grifols KIRO', highlight: false },
            ].map(({ label, sub, highlight }) => (
              <div key={label} style={{ padding: '18px 20px', textAlign: 'center', borderLeft: '1px solid var(--rule-dark)', background: highlight ? 'rgba(52,160,192,0.07)' : 'transparent' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: highlight ? 'var(--teal-bright)' : 'var(--ivory-dim)', fontWeight: highlight ? 600 : 400 }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.1em', color: 'var(--ivory-dim)', opacity: 0.5, marginTop: '3px' }}>{sub}</div>
              </div>
            ))}
          </div>
          {/* rows */}
          {COMPARE_ROWS.map(([feat, iv, cab, rob], i) => {
            const isLast = i === COMPARE_ROWS.length - 1;
            const isStr = typeof iv === 'string';
            return (
              <div key={feat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: isLast ? 'none' : '1px solid var(--rule-dark)', background: i % 2 === 0 ? 'var(--ink)' : 'var(--ink-2)' }}>
                <div style={{ padding: '16px 24px', fontSize: '13.5px', color: 'var(--ivory)', lineHeight: 1.4 }}>{feat}</div>
                {[iv, cab, rob].map((v, ci) => (
                  <div key={ci} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid var(--rule-dark)', background: ci === 0 ? 'rgba(52,160,192,0.04)' : 'transparent' }}>
                    {isStr
                      ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: ci === 0 ? 'var(--teal-bright)' : 'var(--ivory-dim)', textAlign: 'center', opacity: ci === 0 ? 1 : 0.55 }}>{v}</span>
                      : <CheckIcon ok={v} />}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <p style={{ marginTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--ivory-dim)', opacity: 0.6 }}>
          ¹ Confronto indicativo basato su caratteristiche pubblicamente documentate di Omnicell XT e Grifols KIRO Fill®. Non sponsorizzato.
        </p>

        <div style={{ marginTop: '40px' }}>
          <Button variant="primary" arrow data-nav="iveyes">Scopri come funziona ivEyes</Button>
        </div>
      </div>
    </section>
  );
}

function HomeScreen() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0 110px' }}>
        <div className="wrap">
          <Eyebrow rule style={{ marginBottom: '34px' }}>Hexaros — Tecnologie per la farmacia</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(46px, 8vw, 110px)',
            lineHeight: 0.98, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144",
            marginBottom: '28px', maxWidth: '16ch', color: 'var(--ivory)',
          }}>
            Il processo produttivo, <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>reso governabile.</em>
          </h1>
          <p style={{ maxWidth: '46ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)', marginBottom: '40px' }}>
            Progettiamo strumenti digitali per la farmacia ospedaliera. Tecnologie che tracciano, guidano e
            documentano i processi di allestimento — senza imporre rigidità al modo di lavorare di chi cura.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button variant="primary" arrow data-nav="iveyes">Scopri ivEyes</Button>
            <Button variant="ghost" data-nav="about">Conosci l'azienda</Button>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '80px', paddingTop: '40px',
            borderTop: '1px solid var(--rule-dark)', gap: '0',
          }}>
            <Metric value="100%" label="Tracciabilità di processo per la conformità GMP · Annex 11" />
            <Metric value="1 → N" label="Una piattaforma, più scenari: sotto cappa, training, logistica" />
            <Metric value="AR" label="Smart glasses, comandi vocali, mani libere per l'operatore" />
          </div>
        </div>
      </section>

      <ProofStrip />

      {/* ===== PERCHÉ ORA ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Perché ora">Tre pressioni convergenti, <em>una risposta sola.</em></SectionHead>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule-dark)',
            border: '1px solid var(--rule-dark)', borderRadius: '4px', overflow: 'hidden',
          }}>
            {[
              ['01 — Compliance', 'Tracciabilità che tiene.', 'GMP, Annex 11: i requisiti su documentazione e controllo dei processi di allestimento diventano ogni anno più stringenti. La tracciabilità manuale non scala.'],
              ['02 — Volumi', 'Velocità senza compromessi.', 'Oncologia, nutrizione parenterale totale, galenici: i volumi crescono, i margini sulla sicurezza no. Serve velocità misurabile, non percepita.'],
              ['03 — Persone', 'Curva di apprendimento, tracciata.', 'Turnover e formazione sono una sfida strutturale della farmacia. I nuovi operatori devono diventare produttivi prima, con meno supervisione.'],
            ].map(([k, t, p]) => (
              <div key={k} style={{ background: 'var(--ink)', padding: '40px 32px 48px' }}>
                <FeatureCard kicker={k} title={t}>{p}</FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODOTTI ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="I nostri prodotti">Strumenti pensati <em>per il processo produttivo.</em></SectionHead>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--rule-dark)',
            borderRadius: '6px', overflow: 'hidden', marginBottom: '24px',
          }}>
            <div style={{
              minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px',
              background: 'radial-gradient(circle at 30% 40%, rgba(52,160,192,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(28,114,147,0.22), transparent 60%), var(--ink-2)',
            }}>
              <svg width="220" height="120" viewBox="0 0 240 140">
                <g transform="translate(28.2,-26.6) scale(1.7)">
                  <path fill="none" stroke="#F5F1EA" strokeWidth="1.24" d="M24.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
                  <path fill="#F5F1EA" d="M33.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
                  <path fill="#F5F1EA" d="M49.75,46.3 h8.5 v3.4 h-8.5 z" />
                  <path fill="none" stroke="#F5F1EA" strokeWidth="1.24" d="M58.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
                  <path fill="var(--accent)" d="M67.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
                </g>
                <text x="120" y="112" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fontWeight="300" fill="#F5F1EA">iv<tspan fontWeight="700">Eyes</tspan></text>
              </svg>
            </div>
            <div style={{ padding: '48px 40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Tag tone="gold" style={{ marginBottom: '18px', alignSelf: 'flex-start' }}>Primo prodotto · Disponibile</Tag>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,3.5vw,44px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '20px', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 96" }}>ivEyes</h3>
              <p style={{ color: 'var(--ivory-dim)', fontSize: '15.5px', lineHeight: 1.6, marginBottom: '28px', maxWidth: '44ch' }}>
                Smart Glasses Tracking Assistant: un assistente indossabile che guida, traccia e documenta le
                preparazioni in cappa a flusso laminare. Tre modalità operative, una piattaforma, zero rigidità.
              </p>
              <a data-nav="iveyes" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: 'var(--accent)', alignSelf: 'flex-start' }}>
                Esplora ivEyes
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[['Q3 2026 — In sviluppo', 'Modulo LIMS Bridge', 'Integrazione nativa tra ivEyes e i sistemi di laboratorio ospedaliero.'],
              ['2027 — Roadmap', 'Orchestrator', 'Piattaforma di supervisione per flotte multi-reparto di smart glasses.']].map(([tag, h, p]) => (
              <div key={h} style={{ padding: '36px', border: '1px dashed var(--rule-dark-2)', borderRadius: '6px', opacity: 0.6 }}>
                <Tag tone="muted" dashed style={{ marginBottom: '16px' }}>{tag}</Tag>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--ivory)', margin: '10px 0' }}>{h}</h4>
                <p style={{ color: 'var(--ivory-dim)', fontSize: '13px', lineHeight: 1.55 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WearableSection />

      {/* ===== VISION CTA ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Dove andiamo">La farmacia <em>come sistema di dati operativi.</em></SectionHead>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.35, maxWidth: '32ch', color: 'var(--ivory)', fontWeight: 400, fontVariationSettings: "'SOFT' 30, 'opsz' 96", marginBottom: '40px' }}>
            Il prodotto giusto, al reparto giusto, al momento giusto — <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>documentato al grammo</em>.
          </p>
          <Button variant="ghost" data-nav="howwework" style={{ marginRight: '12px' }}>Come lavoriamo</Button>
          <Button variant="primary" arrow data-nav="contact">Parlaci del tuo reparto</Button>
        </div>
      </section>
    </main>
  );
}

window.HomeScreen = HomeScreen;
