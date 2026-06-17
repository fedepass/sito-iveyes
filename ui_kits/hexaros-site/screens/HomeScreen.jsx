/* Hexaros — Home (dark / company theme). Exports window.HomeScreen */
const { Button, Eyebrow, Tag, Metric, FeatureCard, SectionHead } = window.HexarosDesignSystem_c7b1f3;

/* ---- i18n helper (module-level lang, set by HomeScreen before render) ---- */
let _L = 'it';
const T = (it, en) => (_L === 'en' ? en : it);

/* ---- Social proof strip ---- */
function ProofStrip() {
  return (
    <div className="band-light" style={{ position: 'relative', zIndex: 2, borderTop: '1px solid var(--rule-dark)', borderBottom: '1px solid var(--rule-dark)', background: 'var(--ink-2)', padding: '28px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '40px' }}>
          <blockquote style={{ margin: 0, display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--accent)', lineHeight: 1, opacity: 0.5, fontVariationSettings: "'SOFT' 30,'opsz' 96", flexShrink: 0 }}>"</span>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px,1.6vw,19px)', color: 'var(--ivory)', fontWeight: 400, lineHeight: 1.35, margin: '0 0 10px', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>
                {T('La tracciabilità non rallenta più il processo — ', 'Traceability no longer slows the process down — ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100,'opsz' 60" }}>{T('lo accompagna.', 'it moves with it.')}</em>
              </p>
              <cite style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', fontStyle: 'normal' }}>
                {T('— Farmacista responsabile · Pilota ospedaliero 2026 · Triveneto', '— Lead pharmacist · Hospital pilot 2026 · North-East Italy')}
              </cite>
            </div>
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end', flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>{T('In pilota attivo', 'Active pilot')}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--accent)', fontVariationSettings: "'SOFT' 30,'opsz' 60" }}>{T('2 farmacie', '2 pharmacies')}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>{T('Nordest Italia · 2026', 'North-East Italy · 2026')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Wearable vs fixed comparison ---- */
function compareRows() {
  return [
    [T('Operatività sotto cappa ISO 5', 'Operation under an ISO 5 hood'), true, false, false],
    [T('Mani sempre libere — zero touch terminale', 'Hands always free — zero touch on the terminal'), true, false, false],
    [T('Interazione vocale durante la preparazione', 'Voice interaction during compounding'), true, false, false],
    [T('Nessuna contaminazione da tastiera/schermo', 'No contamination from keyboard/screen'), true, false, false],
    [T('Documentazione automatica step-by-step', 'Automatic step-by-step documentation'), true, true, true],
    [T('Integrazione HIS/LIMS/ERP', 'HIS/LIMS/ERP integration'), true, true, true],
    [T('Audit trail GMP · Annex 11', 'GMP audit trail · Annex 11'), true, true, true],
    [T('Investimento hardware per reparto', 'Hardware investment per ward'), T('1 visore', '1 headset'), T('Cabinet fisso', 'Fixed cabinet'), 'Robot + cleanroom'],
  ];
}

function CheckIcon({ ok, value }) {
  if (value !== undefined) {
    return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: ok ? 'var(--teal-bright)' : 'var(--ivory-dim)', opacity: ok ? 1 : 0.6 }}>{value}</span>;
  }
  return ok
    ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(63,185,140,0.12)" stroke="var(--teal-bright)" strokeWidth="1.2"/><path d="M5 9l3 3 5-5" stroke="var(--teal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(255,255,255,0.03)" stroke="rgba(245,241,234,0.18)" strokeWidth="1.2"/><path d="M6 12l6-6M12 12L6 6" stroke="rgba(245,241,234,0.25)" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}

function WearableSection() {
  const COMPARE_ROWS = compareRows();
  return (
    <section style={{ position: 'relative', zIndex: 2, padding: '90px 0', background: 'var(--ink-2)' }}>
      <div className="wrap">
        <SectionHead eyebrow={T('Perché indossabile?', 'Why wearable?')}>{T("L'unico assistente ", 'The only assistant ')}<em>{T('che lavora con te.', 'that works with you.')}</em></SectionHead>
        <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--ivory-dim)', maxWidth: '58ch', marginBottom: '48px', marginTop: '-16px' }}>
          {T(
            "I sistemi fissi si fermano alla soglia della cappa a flusso laminare. ivEyes entra con l'operatore: indossabile, vocale, senza contatto con superfici critiche. Zero touch. Zero interruzione del processo sterile.",
            'Fixed systems stop at the edge of the laminar-flow hood. ivEyes goes in with the operator: wearable, voice-driven, with no contact with critical surfaces. Zero touch. Zero interruption to the sterile process.'
          )}
        </p>

        {/* comparison table */}
        <div style={{ border: '1px solid var(--rule-dark)', borderRadius: '6px', overflow: 'hidden' }}>
          {/* header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--ink-3)', borderBottom: '1px solid var(--rule-dark)' }}>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>{T('Funzionalità', 'Feature')}</div>
            {[
              { label: 'ivEyes', sub: 'Wearable AR', highlight: true },
              { label: T('Cabinet fisso', 'Fixed cabinet'), sub: T('es. Omnicell', 'e.g. Omnicell'), highlight: false },
              { label: T('Robot compounding', 'Compounding robot'), sub: T('es. Grifols KIRO', 'e.g. Grifols KIRO'), highlight: false },
            ].map(({ label, sub, highlight }) => (
              <div key={label} style={{ padding: '18px 20px', textAlign: 'center', borderLeft: '1px solid var(--rule-dark)', background: highlight ? 'rgba(63,185,140,0.07)' : 'transparent' }}>
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
                  <div key={ci} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid var(--rule-dark)', background: ci === 0 ? 'rgba(63,185,140,0.04)' : 'transparent' }}>
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
          {T(
            '¹ Confronto indicativo basato su caratteristiche pubblicamente documentate di Omnicell XT e Grifols KIRO Fill®. Non sponsorizzato.',
            '¹ Indicative comparison based on publicly documented features of Omnicell XT and Grifols KIRO Fill®. Not sponsored.'
          )}
        </p>

        <div style={{ marginTop: '40px' }}>
          <Button variant="primary" arrow data-nav="iveyes">{T('Scopri come funziona ivEyes', 'See how ivEyes works')}</Button>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ lang = 'it' }) {
  _L = lang;
  return (
    <main>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 0 110px' }}>
        <div className="wrap">
          <Eyebrow rule style={{ marginBottom: '34px' }}>{T('Hexaros — Tecnologie per la farmacia', 'Hexaros — Pharmacy technology')}</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(46px, 8vw, 110px)',
            lineHeight: 0.98, letterSpacing: '-0.035em', fontVariationSettings: "'SOFT' 30, 'opsz' 144",
            marginBottom: '28px', maxWidth: '16ch', color: 'var(--ivory)',
          }}>
            {T('Il processo produttivo, ', 'The compounding process, ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>{T('reso governabile.', 'made governable.')}</em>
          </h1>
          <p style={{ maxWidth: '46ch', fontSize: '18px', lineHeight: 1.55, color: 'var(--ivory-dim)', marginBottom: '40px' }}>
            {T(
              'Progettiamo strumenti digitali per la farmacia ospedaliera. Tecnologie che tracciano, guidano e documentano i processi di allestimento — senza imporre rigidità al modo di lavorare di chi cura.',
              'We design digital tools for hospital pharmacy. Technology that tracks, guides and documents compounding processes — without imposing rigidity on the way caregivers work.'
            )}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button variant="primary" arrow data-nav="iveyes">{T('Scopri ivEyes', 'Discover ivEyes')}</Button>
            <Button variant="ghost" data-nav="about">{T("Conosci l'azienda", 'About the company')}</Button>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '80px', paddingTop: '40px',
            borderTop: '1px solid var(--rule-dark)', gap: '0',
          }}>
            <Metric value="100%" label={T('Tracciabilità di processo per la conformità GMP · Annex 11', 'Process traceability for GMP · Annex 11 compliance')} />
            <Metric value="1 → N" label={T('Una piattaforma, più scenari: sotto cappa, training, logistica', 'One platform, many scenarios: under the hood, training, logistics')} />
            <Metric value="AR" label={T('Smart glasses, comandi vocali, mani libere per l\'operatore', 'Smart glasses, voice commands, hands free for the operator')} />
          </div>
        </div>
      </section>

      <ProofStrip />

      {/* ===== PERCHÉ ORA ===== */}
      <section style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Perché ora', 'Why now')}>{T('Tre pressioni convergenti, ', 'Three converging pressures, ')}<em>{T('una risposta sola.', 'one single answer.')}</em></SectionHead>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule-dark)',
            border: '1px solid var(--rule-dark)', borderRadius: '4px', overflow: 'hidden',
          }}>
            {[
              ['01 — Compliance', T('Tracciabilità che tiene.', 'Traceability that holds.'), T('GMP, Annex 11: i requisiti su documentazione e controllo dei processi di allestimento diventano ogni anno più stringenti. La tracciabilità manuale non scala.', 'GMP, Annex 11: requirements on documentation and control of compounding processes get stricter every year. Manual traceability does not scale.')],
              [T('02 — Volumi', '02 — Volumes'), T('Velocità senza compromessi.', 'Speed without compromise.'), T('Oncologia, nutrizione parenterale totale, galenici: i volumi crescono, i margini sulla sicurezza no. Serve velocità misurabile, non percepita.', 'Oncology, total parenteral nutrition, galenicals: volumes grow, safety margins do not. You need measurable speed, not perceived speed.')],
              [T('03 — Persone', '03 — People'), T('Curva di apprendimento, tracciata.', 'A learning curve, tracked.'), T('Turnover e formazione sono una sfida strutturale della farmacia. I nuovi operatori devono diventare produttivi prima, con meno supervisione.', 'Turnover and training are a structural challenge for pharmacies. New operators must become productive sooner, with less supervision.')],
            ].map(([k, t, p]) => (
              <div key={k} style={{ background: 'var(--ink)', padding: '40px 32px 48px' }}>
                <FeatureCard kicker={k} title={t}>{p}</FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODOTTI ===== */}
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('I nostri prodotti', 'Our products')}>{T('Strumenti pensati ', 'Tools built ')}<em>{T('per il processo produttivo.', 'for the compounding process.')}</em></SectionHead>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--rule-dark)',
            borderRadius: '6px', overflow: 'hidden', marginBottom: '24px',
          }}>
            <div style={{
              minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px',
              background: 'radial-gradient(circle at 30% 40%, rgba(63,185,140,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(31,132,102,0.22), transparent 60%), var(--ink-2)',
            }}>
              <svg width="220" height="120" viewBox="0 0 240 140">
                <g transform="translate(28.2,-26.6) scale(1.7)">
                  <path fill="none" stroke="var(--ivory)" strokeWidth="1.24" d="M24.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
                  <path fill="var(--ivory)" d="M33.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
                  <path fill="var(--ivory)" d="M49.75,46.3 h8.5 v3.4 h-8.5 z" />
                  <path fill="none" stroke="var(--ivory)" strokeWidth="1.24" d="M58.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0" />
                  <path fill="var(--accent)" d="M67.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0" />
                </g>
                <text x="120" y="112" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fontWeight="300" fill="var(--ivory)">iv<tspan fontWeight="700">Eyes</tspan></text>
              </svg>
            </div>
            <div style={{ padding: '48px 40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Tag tone="gold" style={{ marginBottom: '18px', alignSelf: 'flex-start' }}>{T('Primo prodotto · Disponibile', 'First product · Available')}</Tag>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,3.5vw,44px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '20px', color: 'var(--ivory)', fontVariationSettings: "'SOFT' 30, 'opsz' 96" }}>ivEyes</h3>
              <p style={{ color: 'var(--ivory-dim)', fontSize: '15.5px', lineHeight: 1.6, marginBottom: '28px', maxWidth: '44ch' }}>
                {T(
                  'Smart Glasses Tracking Assistant: un assistente indossabile che guida, traccia e documenta le preparazioni in cappa a flusso laminare. Tre modalità operative, una piattaforma, zero rigidità.',
                  'Smart Glasses Tracking Assistant: a wearable assistant that guides, tracks and documents preparations under the laminar-flow hood. Three operating modes, one platform, zero rigidity.'
                )}
              </p>
              <a data-nav="iveyes" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: 'var(--accent)', alignSelf: 'flex-start' }}>
                {T('Esplora ivEyes', 'Explore ivEyes')}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[[T('Q3 2026 — In sviluppo', 'Q3 2026 — In development'), T('Modulo LIMS Bridge', 'LIMS Bridge module'), T('Integrazione nativa tra ivEyes e i sistemi di laboratorio ospedaliero.', 'Native integration between ivEyes and hospital laboratory systems.')],
              ['2027 — Roadmap', 'Orchestrator', T('Piattaforma di supervisione per flotte multi-reparto di smart glasses.', 'Supervision platform for multi-ward fleets of smart glasses.')]].map(([tag, h, p]) => (
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
      <section className="band-light" style={{ position: 'relative', zIndex: 2, padding: '90px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow={T('Dove andiamo', "Where we're going")}>{T('La farmacia ', 'The pharmacy ')}<em>{T('come sistema di dati operativi.', 'as a system of operational data.')}</em></SectionHead>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.35, maxWidth: '32ch', color: 'var(--ivory)', fontWeight: 400, fontVariationSettings: "'SOFT' 30, 'opsz' 96", marginBottom: '40px' }}>
            {T('Il prodotto giusto, al reparto giusto, al momento giusto — ', 'The right product, to the right ward, at the right time — ')}<em style={{ fontStyle: 'italic', color: 'var(--accent)', fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>{T('documentato al grammo', 'documented to the gram')}</em>.
          </p>
          <Button variant="ghost" data-nav="howwework" style={{ marginRight: '12px' }}>{T('Come lavoriamo', 'How we work')}</Button>
          <Button variant="primary" arrow data-nav="contact">{T('Parlaci del tuo reparto', 'Tell us about your ward')}</Button>
        </div>
      </section>
    </main>
  );
}

window.HomeScreen = HomeScreen;
