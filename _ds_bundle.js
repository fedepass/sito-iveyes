/* @ds-bundle: {"format":3,"namespace":"HexarosDesignSystem_c7b1f3","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BenefitCard","sourcePath":"components/cards/BenefitCard.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"ModeCard","sourcePath":"components/cards/ModeCard.jsx"},{"name":"TimelineItem","sourcePath":"components/cards/TimelineItem.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Metric","sourcePath":"components/core/Metric.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"PullQuote","sourcePath":"components/layout/PullQuote.jsx"},{"name":"SectionHead","sourcePath":"components/layout/SectionHead.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"a8b2be726307","components/cards/BenefitCard.jsx":"38c6f632c318","components/cards/Card.jsx":"a8accf10b0ab","components/cards/FeatureCard.jsx":"9d179f6c7a15","components/cards/ModeCard.jsx":"5eb8d3bffcf1","components/cards/TimelineItem.jsx":"26427af03b87","components/core/Button.jsx":"04e2789a513f","components/core/Eyebrow.jsx":"fd31b178a0d6","components/core/Metric.jsx":"daeb8961639a","components/core/Tag.jsx":"8b6f82aa4d24","components/forms/Checkbox.jsx":"1b314882c13a","components/forms/Field.jsx":"7461e06eaed4","components/layout/PullQuote.jsx":"fc025ffe3cc2","components/layout/SectionHead.jsx":"0d5c7b29ce12","components/layout/SiteFooter.jsx":"f5db2b95f48d","components/layout/SiteHeader.jsx":"5556fe61dcf8","ui_kits/hexaros-site/screens/AboutScreen.jsx":"ec6990844b68","ui_kits/hexaros-site/screens/ComplianceScreen.jsx":"207f9859cca1","ui_kits/hexaros-site/screens/ContactScreen.jsx":"9775a1fd4ffe","ui_kits/hexaros-site/screens/HomeScreen.jsx":"e8377792c7c7","ui_kits/hexaros-site/screens/HowWeWorkScreen.jsx":"d8f7e81c95e5","ui_kits/hexaros-site/screens/IveyesScreen.jsx":"05aaf6fee3ad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HexarosDesignSystem_c7b1f3 = window.HexarosDesignSystem_c7b1f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand marks. `brand="hexaros"` renders the hexagon + teal-blue core; the
 * mark inherits `currentColor` for the outline. `wordmark` adds the name
 * set in Fraunces (Hexaros) / IBM Plex Sans (ivEyes).
 */
function Logo({
  brand = 'hexaros',
  wordmark = true,
  size = 32,
  style = {},
  ...rest
}) {
  if (brand === 'iveyes') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        color: 'currentColor',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: size * 1.18,
      height: size,
      viewBox: "0 0 108 108",
      style: {
        flexShrink: 0
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.1",
      d: "M24.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M33.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M49.75,46.3 h8.5 v3.4 h-8.5 z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.1",
      d: "M58.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "var(--accent)",
      d: "M67.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0"
    })), wordmark && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: size * 0.7,
        fontWeight: 300,
        letterSpacing: '0.01em'
      }
    }, "iv", /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 700
      }
    }, "Eyes")));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      color: 'currentColor',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size * 0.89,
    height: size,
    viewBox: "0 0 48 54",
    style: {
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "24,2 44,14 44,38 24,50 4,38 4,14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "26",
    r: "4.5",
    fill: "var(--accent)"
  })), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.69,
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 60"
    }
  }, "Hexaros"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/BenefitCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A benefit cell — a teal Fraunces stat over a title and description.
 * Lives inside the hairline benefits grid.
 */
function BenefitCard({
  stat,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--ink)',
      padding: '36px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-stat)',
      fontWeight: 300,
      lineHeight: 1,
      color: 'var(--teal-bright)',
      letterSpacing: '-0.02em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144"
    }
  }, stat), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 500,
      color: 'var(--ivory)',
      letterSpacing: '-0.01em',
      marginTop: '8px',
      fontVariationSettings: "'SOFT' 30, 'opsz' 60"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--ivory-dim)'
    }
  }, children));
}
Object.assign(__ds_scope, { BenefitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BenefitCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useCardStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-card {
    background: var(--ink-2); border: 1px solid var(--rule-dark);
    border-radius: var(--radius-sm); padding: 32px;
    transition: border-color var(--dur-slow) var(--ease), background var(--dur-slow) var(--ease), transform var(--dur-slow) var(--ease), box-shadow var(--dur-slow) var(--ease);
  }
  body.light .hx-card, [data-theme="light"] .hx-card { background: #fff; border-color: var(--rule-light); }
  .hx-card--flat { background: transparent; }
  body.light .hx-card--flat, [data-theme="light"] .hx-card--flat { background: transparent; }
  .hx-card--hover:hover { background: var(--ink-3); border-color: var(--rule-dark-2); }
  body.light .hx-card--hover:hover, [data-theme="light"] .hx-card--hover:hover { background: var(--paper-warm); border-color: var(--mute); }
  .hx-card--lift:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
  `;
  const el = document.createElement('style');
  el.id = 'hx-card-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Generic bordered surface — the base for form panels, team cards and any
 * boxed content. Optional hover tint or lift.
 */
function Card({
  hover = false,
  lift = false,
  flat = false,
  as = 'div',
  className = '',
  children,
  style = {},
  ...rest
}) {
  useCardStyles();
  const Tag = as;
  const cls = ['hx-card', flat ? 'hx-card--flat' : '', hover ? 'hx-card--hover' : '', lift ? 'hx-card--lift' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The numbered manifesto / principle / team card. A mono kicker (a number
 * or label), a Fraunces title, and body copy.
 */
function FeatureCard({
  kicker,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), kicker != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-eyebrow)',
      color: 'var(--accent)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '24px',
      display: 'block'
    }
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      marginBottom: '16px',
      color: 'var(--text)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 60"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14.5px',
      lineHeight: 1.6,
      color: 'var(--text-dim)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ModeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useModeStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-mode { background: var(--ink); padding: 36px 32px; border-radius: var(--radius-xs);
    border-top: 3px solid var(--accent); transition: transform var(--dur-slow) var(--ease), box-shadow var(--dur-slow) var(--ease); }
  .hx-mode:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
  .hx-mode__tag { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 24px; }
  .hx-mode__h { font-family: var(--font-display); font-size: 32px; font-weight: 400; letter-spacing: -0.02em;
    line-height: 1.05; margin-bottom: 16px; color: var(--ivory); font-variation-settings: 'SOFT' 30, 'opsz' 96; }
  .hx-mode__sub { font-family: var(--font-display); font-style: italic; font-size: 16px;
    color: var(--accent-soft); margin-bottom: 20px; font-variation-settings: 'SOFT' 100, 'opsz' 60; }
  .hx-mode__p { font-size: 14.5px; line-height: 1.6; color: var(--ivory-dim); margin-bottom: 24px; }
  .hx-mode__list { list-style: none; display: flex; flex-direction: column; gap: 10px;
    font-size: 13.5px; color: var(--ivory); }
  .hx-mode__list li { position: relative; padding-left: 18px; }
  .hx-mode__list li::before { content: '→'; position: absolute; left: 0; top: 0; color: var(--accent); }
  `;
  const el = document.createElement('style');
  el.id = 'hx-mode-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * An ivEyes operating-mode card — gold top accent, mono tag, Fraunces title,
 * italic subtitle, body and an arrow-bulleted feature list.
 */
function ModeCard({
  tag,
  title,
  subtitle,
  children,
  items = [],
  style = {},
  ...rest
}) {
  useModeStyles();
  return /*#__PURE__*/React.createElement("article", _extends({
    className: "hx-mode",
    style: style
  }, rest), tag && /*#__PURE__*/React.createElement("div", {
    className: "hx-mode__tag"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    className: "hx-mode__h"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "hx-mode__sub"
  }, subtitle), children && /*#__PURE__*/React.createElement("p", {
    className: "hx-mode__p"
  }, children), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "hx-mode__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it))));
}
Object.assign(__ds_scope, { ModeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ModeCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useTimelineStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-tl { display: grid; grid-template-columns: 140px 1fr; gap: 40px; padding: 24px 0;
    border-bottom: 1px solid var(--rule-dark); align-items: baseline; transition: background var(--dur) var(--ease); }
  .hx-tl:hover { background: rgba(63,185,140, 0.03); }
  .hx-tl__year { font-family: var(--font-display); font-size: 22px; color: var(--accent); font-weight: 400;
    letter-spacing: -0.01em; font-variation-settings: 'SOFT' 30, 'opsz' 60; }
  .hx-tl__main { font-size: 16px; line-height: 1.55; color: var(--ivory); }
  .hx-tl__sub { display: block; margin-top: 6px; font-size: 13.5px; color: var(--ivory-dim); }
  @media (max-width: 640px) { .hx-tl { grid-template-columns: 1fr; gap: 4px; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-timeline-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * A roadmap row — a Fraunces year beside a main line and optional subtext.
 * Stack several inside a list for the company timeline.
 */
function TimelineItem({
  year,
  title,
  children,
  style = {},
  ...rest
}) {
  useTimelineStyles();
  return /*#__PURE__*/React.createElement("li", _extends({
    className: "hx-tl",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "hx-tl__year"
  }, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hx-tl__main"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "hx-tl__sub"
  }, children)));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject a component stylesheet once. Tokens come from styles.css. */
let injected = false;
function useButtonStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 24px; border-radius: var(--radius-pill);
    font-family: var(--font-body); font-size: 14px; font-weight: 600;
    letter-spacing: 0.01em; cursor: pointer; border: 1px solid transparent;
    transition: transform var(--dur) var(--ease), background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease);
    text-decoration: none; white-space: nowrap;
  }
  .hx-btn--sm { padding: 9px 16px; font-size: 13px; }
  .hx-btn--lg { padding: 17px 30px; font-size: 15px; }
  .hx-btn .hx-btn__arr { transition: transform 250ms var(--ease); }
  .hx-btn:hover .hx-btn__arr { transform: translateX(4px); }

  /* primary — gold on dark, blue on light */
  .hx-btn--primary { background: var(--accent); color: var(--on-accent); }
  .hx-btn--primary:hover { background: var(--accent-soft); transform: translateY(-2px); }
  body.light .hx-btn--primary, [data-theme="light"] .hx-btn--primary { background: var(--blue); color: var(--paper); }
  body.light .hx-btn--primary:hover, [data-theme="light"] .hx-btn--primary:hover { background: var(--blue-deep); }

  /* ghost — outline */
  .hx-btn--ghost { border-color: var(--rule-dark-2); color: var(--ivory); }
  .hx-btn--ghost:hover { background: var(--ivory); color: var(--ink); border-color: var(--ivory); }
  body.light .hx-btn--ghost, [data-theme="light"] .hx-btn--ghost { border-color: var(--rule-light); color: var(--coal); }
  body.light .hx-btn--ghost:hover, [data-theme="light"] .hx-btn--ghost:hover { background: var(--coal); color: var(--paper); border-color: var(--coal); }

  .hx-btn[disabled], .hx-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
  `;
  const el = document.createElement('style');
  el.id = 'hx-button-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
const ArrowRight = () => /*#__PURE__*/React.createElement("svg", {
  className: "hx-btn__arr",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 8h10M9 4l4 4-4 4",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Hexaros pill button. Gold-on-ink (dark) or blue-on-paper (light theme).
 * Set `arrow` for the signature sliding-arrow CTA.
 */
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  children,
  className = '',
  ...rest
}) {
  useButtonStyles();
  const cls = ['hx-btn', `hx-btn--${variant}`, size === 'sm' ? 'hx-btn--sm' : size === 'lg' ? 'hx-btn--lg' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement(ArrowRight, null));
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The mono kicker label that sits above headings and tags sections,
 * cards, and metadata throughout the site. Uppercase IBM Plex Mono with
 * wide tracking. Clinical teal-blue accent, theme-aware (follows --accent).
 */
function Eyebrow({
  children,
  as = 'span',
  rule = false,
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: rule ? 'inline-flex' : 'inline-block',
      alignItems: 'center',
      gap: '14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 500,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '1px',
      background: 'var(--accent)',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A headline metric — a large Fraunces numeral over a mono/sans label.
 * Used in the hero metric strip (gold) and the benefits grid (teal).
 */
function Metric({
  value,
  label,
  tone = 'gold',
  style = {},
  ...rest
}) {
  const color = tone === 'teal' ? 'var(--teal-bright)' : 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-stat)',
      fontWeight: 300,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color,
      fontVariationSettings: "'SOFT' 30, 'opsz' 144"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      lineHeight: 1.4,
      color: 'var(--text-dim)',
      maxWidth: '28ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Metric.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Theme-aware: `gold` follows --accent (gold on dark, clinical teal-blue on
   light). `teal` stays a fixed data-accent. `success` is the validation green. */
const TONES = {
  gold: {
    bg: 'color-mix(in srgb, var(--accent) 12%, transparent)',
    border: 'color-mix(in srgb, var(--accent) 32%, transparent)',
    color: 'var(--accent)'
  },
  teal: {
    bg: 'rgba(31,132,102,0.10)',
    border: 'rgba(31,132,102,0.22)',
    color: 'var(--teal-bright)'
  },
  success: {
    bg: 'color-mix(in srgb, var(--success) 14%, transparent)',
    border: 'color-mix(in srgb, var(--success) 34%, transparent)',
    color: 'var(--success)'
  },
  muted: {
    bg: 'transparent',
    border: 'var(--rule-strong)',
    color: 'var(--text-dim)'
  },
  solid: {
    bg: 'var(--accent)',
    border: 'var(--accent)',
    color: 'var(--on-accent)'
  }
};

/**
 * A small pill chip / status badge. Mono uppercase text in a tinted or
 * solid capsule — e.g. "Un prodotto Hexaros", "Disponibile", "Q3 2026".
 */
function Tag({
  children,
  tone = 'gold',
  dashed = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.color,
      border: `1px ${dashed ? 'dashed' : 'solid'} ${t.border}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useCheckboxStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-check { display: flex; align-items: flex-start; gap: 12px; font-family: var(--font-body);
    font-size: 12.5px; color: var(--ivory-dim); line-height: 1.5; cursor: pointer; }
  body.light .hx-check, [data-theme="light"] .hx-check { color: var(--coal-soft); }
  .hx-check input { appearance: none; -webkit-appearance: none; margin: 0; flex-shrink: 0;
    width: 18px; height: 18px; margin-top: 1px; border: 1px solid var(--rule-dark-2);
    border-radius: var(--radius-xs); background: var(--ink); cursor: pointer;
    transition: border-color var(--dur) var(--ease), background var(--dur) var(--ease); position: relative; }
  body.light .hx-check input, [data-theme="light"] .hx-check input { background: #fff; border-color: var(--rule-light); }
  .hx-check input:checked { background: var(--accent); border-color: var(--accent); }
  body.light .hx-check input:checked, [data-theme="light"] .hx-check input:checked { background: var(--blue); border-color: var(--blue); }
  .hx-check input:checked::after { content: ''; position: absolute; left: 5px; top: 1px;
    width: 5px; height: 10px; border: solid var(--ink); border-width: 0 2px 2px 0; transform: rotate(45deg); }
  body.light .hx-check input:checked::after, [data-theme="light"] .hx-check input:checked::after { border-color: #fff; }
  .hx-check input:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  `;
  const el = document.createElement('style');
  el.id = 'hx-checkbox-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Custom checkbox with inline label — the GDPR consent control on the
 * contact form. Gold (dark) / blue (light) tick.
 */
function Checkbox({
  children,
  id,
  className = '',
  style = {},
  ...rest
}) {
  useCheckboxStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['hx-check', className].filter(Boolean).join(' '),
    htmlFor: id,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useFieldStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-field { display: flex; flex-direction: column; gap: 8px; }
  .hx-field--full { grid-column: 1 / -1; }
  .hx-field > label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent);
  }
  body.light .hx-field > label, [data-theme="light"] .hx-field > label { color: var(--blue); }
  .hx-field input, .hx-field select, .hx-field textarea {
    font-family: var(--font-body); font-size: 15px; padding: 14px 16px;
    background: var(--ink); border: 1px solid var(--rule-dark); color: var(--ivory);
    border-radius: var(--radius-xs);
    transition: border-color var(--dur) var(--ease), background var(--dur) var(--ease);
  }
  body.light .hx-field input, body.light .hx-field select, body.light .hx-field textarea,
  [data-theme="light"] .hx-field input, [data-theme="light"] .hx-field select, [data-theme="light"] .hx-field textarea {
    background: #FFFFFF; border-color: var(--rule-light); color: var(--coal);
  }
  .hx-field input:focus, .hx-field select:focus, .hx-field textarea:focus {
    outline: none; border-color: var(--accent); background: var(--ink-3);
  }
  body.light .hx-field input:focus, body.light .hx-field select:focus, body.light .hx-field textarea:focus,
  [data-theme="light"] .hx-field input:focus, [data-theme="light"] .hx-field select:focus, [data-theme="light"] .hx-field textarea:focus {
    border-color: var(--blue); background: var(--paper-warm);
  }
  .hx-field input::placeholder, .hx-field textarea::placeholder { color: var(--ivory-dim); opacity: 0.6; }
  .hx-field textarea { resize: vertical; min-height: 140px; }
  .hx-field select {
    appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 42px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23B8B0A0' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
    background-repeat: no-repeat; background-position: calc(100% - 16px) center;
  }
  `;
  const el = document.createElement('style');
  el.id = 'hx-field-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Labelled form field — text, email, select or textarea — matching the
 * Hexaros contact form. Mono uppercase label, accent focus ring.
 */
function Field({
  label,
  type = 'text',
  options = [],
  full = false,
  id,
  className = '',
  children,
  ...rest
}) {
  useFieldStyles();
  const fieldId = id || (rest.name ? `f-${rest.name}` : undefined);
  const cls = ['hx-field', full ? 'hx-field--full' : '', className].filter(Boolean).join(' ');
  let control;
  if (type === 'textarea') {
    control = /*#__PURE__*/React.createElement("textarea", _extends({
      id: fieldId
    }, rest));
  } else if (type === 'select') {
    control = /*#__PURE__*/React.createElement("select", _extends({
      id: fieldId
    }, rest), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o) : /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label)));
  } else {
    control = /*#__PURE__*/React.createElement("input", _extends({
      id: fieldId,
      type: type
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId
  }, label), control);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/layout/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial pull quote — a large Fraunces blockquote with a mono cite.
 * Wrap emphasis in <em> for the gold italic. Render inside a tinted
 * section band (e.g. background var(--ink-3)) for the full effect.
 */
function PullQuote({
  children,
  cite,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 3.5vw, 44px)',
      lineHeight: 1.2,
      fontWeight: 400,
      letterSpacing: '-0.02em',
      maxWidth: '28ch',
      color: 'var(--text)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 96",
      margin: 0
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '32px',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontStyle: 'normal',
      color: 'var(--accent-soft)'
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useSectionHeadStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-sechead { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; margin-bottom: 64px; align-items: end; }
  .hx-sechead__h { font-family: var(--font-display); font-weight: 400; font-size: var(--fs-h2);
    line-height: 1.05; letter-spacing: -0.025em; color: var(--text); font-variation-settings: 'SOFT' 30, 'opsz' 144; }
  .hx-sechead__h em { font-style: italic; color: var(--accent); }
  .hx-sechead__lede { font-size: 17px; line-height: 1.55; max-width: 52ch; color: var(--text-dim); }
  @media (max-width: 860px) { .hx-sechead { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-sechead-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Section header — a mono eyebrow in the left column, a Fraunces h2 (use
 * <em> for the accent emphasis) and an optional lede in the right column.
 */
function SectionHead({
  eyebrow,
  children,
  lede,
  style = {},
  ...rest
}) {
  useSectionHeadStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "hx-sechead",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "hx-sechead__h"
  }, children), lede && /*#__PURE__*/React.createElement("p", {
    className: "hx-sechead__lede",
    style: {
      marginTop: '20px'
    }
  }, lede)));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useFooterStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-footer { position: relative; z-index: 2; padding: 80px 0 40px;
    border-top: 1px solid var(--rule-dark); font-size: 13.5px; }
  body.light .hx-footer, [data-theme="light"] .hx-footer { border-top-color: var(--rule-light); }
  .hx-footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 60px; }
  .hx-footer__brand { max-width: 32ch; color: var(--text); }
  .hx-footer__brand p { margin-top: 20px; color: var(--text-dim); line-height: 1.55; font-size: 14px; }
  .hx-footer__col h5 { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; margin-bottom: 18px; color: var(--accent); }
  .hx-footer__col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin: 0; padding: 0; }
  .hx-footer__col a { color: var(--text-dim); transition: color var(--dur) var(--ease); }
  .hx-footer__col a:hover { color: var(--text); }
  .hx-footer__bottom { padding-top: 32px; border-top: 1px solid var(--rule-dark); display: flex;
    justify-content: space-between; flex-wrap: wrap; gap: 16px; font-size: 12.5px; color: var(--text-dim); }
  body.light .hx-footer__bottom, [data-theme="light"] .hx-footer__bottom { border-top-color: var(--rule-light); }
  @media (max-width: 780px) { .hx-footer__grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
  @media (max-width: 480px) { .hx-footer__grid { grid-template-columns: 1fr; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-footer-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
const DEFAULT_COLS = [{
  title: 'Azienda',
  links: [{
    label: 'Chi siamo',
    href: 'about.html'
  }, {
    label: 'Vision',
    href: 'about.html#vision'
  }, {
    label: 'Contatti',
    href: 'contact.html'
  }]
}, {
  title: 'Prodotti',
  links: [{
    label: 'ivEyes',
    href: 'iveyes.html'
  }, {
    label: 'Modalità',
    href: 'iveyes.html#modalita'
  }, {
    label: 'Architettura',
    href: 'iveyes.html#architettura'
  }]
}, {
  title: 'Risorse',
  links: [{
    label: 'Whitepaper (PDF)',
    href: '#'
  }, {
    label: 'Casi di studio',
    href: '#'
  }, {
    label: 'Press kit',
    href: '#'
  }]
}];

/**
 * The site footer — brand block + link columns + a bottom rule with the
 * copyright and location lines.
 */
function SiteFooter({
  brand = 'hexaros',
  description = 'Tecnologie per la digitalizzazione dei processi di farmacia ospedaliera. Con sede a Trieste, Italia.',
  columns = DEFAULT_COLS,
  copyright = `© ${new Date().getFullYear()} Hexaros S.r.l. — Tutti i diritti riservati`,
  location = 'Trieste, Italia · info@hexaros.com',
  ...rest
}) {
  useFooterStyles();
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "hx-footer"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    brand: brand,
    size: 28
  })), /*#__PURE__*/React.createElement("p", null, description)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "hx-footer__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h5", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "hx-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("span", null, location))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useHeaderStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .hx-header { position: sticky; top: 0; z-index: 50; padding: 20px 0;
    transition: background var(--dur-slow) var(--ease); }
  body.dark .hx-header, [data-theme="dark"] .hx-header { background: rgba(11,20,17,0.88);
    backdrop-filter: saturate(140%) blur(10px); -webkit-backdrop-filter: saturate(140%) blur(10px);
    border-bottom: 1px solid var(--rule-dark); }
  body.light .hx-header, [data-theme="light"] .hx-header { background: rgba(250,250,247,0.82);
    backdrop-filter: saturate(140%) blur(10px); -webkit-backdrop-filter: saturate(140%) blur(10px);
    border-bottom: 1px solid var(--rule-light); }
  .hx-nav { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
  .hx-brand { display: flex; align-items: center; color: var(--text); }
  .hx-navlinks { display: flex; gap: 2px; list-style: none; align-items: center; margin: 0; padding: 0; }
  .hx-navlinks a { padding: 10px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 500;
    letter-spacing: 0.01em; position: relative; transition: color var(--dur) var(--ease); color: var(--text-dim); }
  .hx-navlinks a:hover, .hx-navlinks a.is-active { color: var(--text); }
  .hx-navlinks a.is-active::after { content: ''; position: absolute; bottom: 2px; left: 16px; right: 16px;
    height: 1.5px; background: var(--accent); }
  .hx-cta { padding: 10px 18px; border-radius: var(--radius-pill); font-size: 13px; font-weight: 600;
    letter-spacing: 0.02em; transition: transform var(--dur-fast) var(--ease), background var(--dur) var(--ease), color var(--dur) var(--ease);
    background: #0B1512; color: #FFFFFF; border: 1px solid var(--accent); }
  body.light .hx-cta, [data-theme="light"] .hx-cta { background: var(--coal); color: var(--paper); border-color: var(--coal); }
  .hx-cta:hover { transform: translateY(-1px); background: var(--accent); color: #0B1512; }
  .hx-lang { display: flex; align-items: center; gap: 3px; font-family: var(--font-mono); font-size: 11px;
    font-weight: 500; letter-spacing: 0.12em; padding: 7px 12px; border-radius: var(--radius-pill);
    border: 1px solid var(--rule-dark); color: var(--text-dim); transition: border-color var(--dur-fast) var(--ease); }
  body.light .hx-lang, [data-theme="light"] .hx-lang { border-color: var(--rule-light); }
  .hx-lang:hover { border-color: var(--rule-dark-2); }
  .hx-lang .on { color: var(--accent); }
  .hx-lang .sep { opacity: 0.35; }
  .hx-lang .off { opacity: 0.5; }
  @media (max-width: 860px) { .hx-navlinks { display: none; } }
  `;
  const el = document.createElement('style');
  el.id = 'hx-header-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * The sticky site header — brand mark, nav links, accent CTA pill and the
 * IT·EN language toggle. Translucent blurred bar over either theme.
 */
function SiteHeader({
  brand = 'hexaros',
  links = [{
    label: 'Home',
    href: 'index.html'
  }, {
    label: 'Azienda',
    href: 'about.html'
  }, {
    label: 'ivEyes',
    href: 'iveyes.html'
  }, {
    label: 'Contatti',
    href: 'contact.html'
  }],
  activeHref,
  cta = {
    label: 'Richiedi demo',
    href: 'contact.html'
  },
  lang = 'it',
  onLangToggle,
  ...rest
}) {
  useHeaderStyles();
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "hx-header"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "hx-nav",
    "aria-label": "Navigazione principale"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hx-brand",
    href: links[0]?.href || '#',
    "aria-label": `${brand} — home`
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    brand: brand
  })), /*#__PURE__*/React.createElement("ul", {
    className: "hx-navlinks",
    role: "list"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    className: activeHref === l.href ? 'is-active' : ''
  }, l.label))), cta && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: cta.href,
    className: "hx-cta"
  }, cta.label)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "hx-lang",
    "aria-label": "Cambia lingua / Switch language",
    onClick: onLangToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: lang === 'it' ? 'on' : 'off'
  }, "IT"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: lang === 'en' ? 'on' : 'off'
  }, "EN")))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/AboutScreen.jsx
try { (() => {
/* Hexaros — Azienda / About (dark theme). Exports window.AboutScreen */
const {
  Button,
  Eyebrow,
  Card,
  FeatureCard,
  TimelineItem,
  SectionHead
} = window.HexarosDesignSystem_c7b1f3;
function AboutScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '70px 0 50px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '28px'
    }
  }, "Azienda \xB7 Chi siamo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(42px,6.5vw,82px)',
      lineHeight: 1,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      maxWidth: '18ch',
      color: 'var(--ivory)'
    }
  }, "Un'azienda italiana per ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 144"
    }
  }, "la farmacia che cambia.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '60px 0 90px',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    as: "div",
    style: {
      marginBottom: '20px'
    }
  }, "La nostra missione"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--ivory-dim)',
      maxWidth: '48ch'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ivory)',
      fontWeight: 500
    }
  }, "Hexaros nasce per rendere governabile il processo di allestimento dei farmaci in ospedale."), " Non con generici strumenti gestionali, ma con tecnologie costruite sul banco di lavoro reale \u2014 quello delle farmacie oncologiche, delle preparazioni NPT, dei galenici.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    as: "div",
    style: {
      marginBottom: '20px'
    }
  }, "Cosa facciamo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--ivory-dim)',
      maxWidth: '48ch'
    }
  }, "Progettiamo software e dispositivi indossabili che si integrano con i sistemi ospedalieri (HIS, LIMS, ERP) e raccolgono automaticamente i dati operativi. Il nostro primo prodotto, ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ivory)',
      fontWeight: 500
    }
  }, "ivEyes"), ", porta gli smart glasses AR dentro la cappa a flusso laminare."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "I nostri principi"
  }, "Come ", /*#__PURE__*/React.createElement("em", null, "pensiamo"), " un prodotto per ambienti regolamentati."), [['01', 'Strumenti, non piattaforme.', 'Non costruiamo "sistemi completi" che chiedono al reparto di adattarsi. Costruiamo strumenti che si integrano con quello che già funziona.'], ['02', 'Il dato, come effetto collaterale.', 'Un buon strumento genera dati puliti senza che nessuno debba pensarci. La tracciabilità perfetta nasce quando l\'operatore lavora al meglio.'], ['03', 'Flessibile di mestiere.', 'Ogni farmacia ha le sue routine, le sue eccezioni, i suoi protocolli. I nostri prodotti si riconfigurano: stesso core, scenari diversi.'], ['04', 'Compliance come fondamento.', 'GMP, Annex 11, requisiti di qualità: non sono un\'aggiunta, sono la spina dorsale su cui tutto il resto si costruisce.']].map(([n, t, p], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '100px 1fr 2fr',
      gap: '48px',
      padding: '40px 0',
      borderTop: '1px solid var(--rule-dark)',
      borderBottom: i === 3 ? '1px solid var(--rule-dark)' : 'none',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      fontWeight: 300,
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 96"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15.5px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      maxWidth: '54ch'
    }
  }, p))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Come lavoriamo"
  }, "Tre discipline, ", /*#__PURE__*/React.createElement("em", null, "un tavolo solo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px'
    }
  }, [['Clinical', 'Farmacisti ospedalieri', 'Capiamo i processi perché abbiamo lavorato su quei banchi. Ogni funzionalità passa dallo scrutinio di chi i farmaci li ha davvero preparati.'], ['Engineering', 'Software & AR', 'Backend distribuito, integrazioni HL7/FHIR, applicazioni AR native su Vuzix. Cose che devono funzionare mille volte al giorno senza cadere.'], ['Regulatory', 'Qualità & compliance', 'Sistemi di gestione qualità conformi a GMP Annex 11 e ISO 9001. Documentazione, convalida, audit: non accessorio, non posticipato.']].map(([role, name, p]) => /*#__PURE__*/React.createElement(Card, {
    key: role,
    hover: true
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    kicker: role,
    title: name
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Roadmap"
  }, "Dal banco di lavoro ", /*#__PURE__*/React.createElement("em", null, "al sistema ospedaliero.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(TimelineItem, {
    year: "2025",
    title: "Concept di ivEyes e prototipazione"
  }, "Sviluppo del concept e prototipazione in laboratorio; architettura software consolidata."), /*#__PURE__*/React.createElement(TimelineItem, {
    year: "2026",
    title: "Fondazione Hexaros e primo pilota ospedaliero"
  }, "Fondazione Hexaros. Avvio del programma pilota con i primi partner ospedalieri."), /*#__PURE__*/React.createElement(TimelineItem, {
    year: "2027 \u2192",
    title: "Prima release commerciale e nuovi moduli"
  }, "Release commerciale di ivEyes con tre modalit\xE0. LIMS Bridge, Orchestrator multi-reparto, espansione EU.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Scrivici")))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/ComplianceScreen.jsx
try { (() => {
/* Hexaros — Compliance (dark theme). Exports window.ComplianceScreen */
const {
  Button,
  Eyebrow,
  SectionHead
} = window.HexarosDesignSystem_c7b1f3;
function ReqRow({
  code,
  title,
  how,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr 1fr',
      gap: '0',
      borderBottom: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px',
      borderRight: '1px solid var(--rule-dark)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      color: 'var(--teal-bright)',
      fontWeight: 600
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.08em',
      color: 'var(--ivory-dim)',
      textTransform: 'uppercase',
      lineHeight: 1.4
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px',
      borderRight: '1px solid var(--rule-dark)',
      fontSize: '13.5px',
      lineHeight: 1.6,
      color: 'var(--ivory-dim)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px',
      fontSize: '13.5px',
      lineHeight: 1.6,
      color: 'var(--ivory)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      marginTop: '2px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    fill: "rgba(63,185,140,0.12)",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8l2.5 2.5L11 5.5",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, how)));
}
function CertBadge({
  label,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 400,
      color: 'var(--teal-bright)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)',
      lineHeight: 1.5
    }
  }, sub));
}
function ComplianceScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '70px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '28px'
    }
  }, "Compliance & Qualit\xE0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(42px, 6vw, 78px)',
      lineHeight: 1,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30,'opsz' 144",
      maxWidth: '20ch',
      color: 'var(--ivory)',
      marginBottom: '28px'
    }
  }, "Conformit\xE0 come ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 144"
    }
  }, "fondamento.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '56ch',
      fontSize: '18px',
      lineHeight: 1.55,
      color: 'var(--ivory-dim)'
    }
  }, "GMP, Annex 11, ISO 13485 non sono requisiti che si aggiungono a posteriori. Sono la spina dorsale su cui ivEyes \xE8 costruito. Ogni funzionalit\xE0 \xE8 progettata partendo dalla domanda: \"Come lo dimostriamo all'ispettore?\""))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '60px 0',
      borderTop: '1px solid var(--rule-dark)',
      borderBottom: '1px solid var(--rule-dark)',
      background: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(CertBadge, {
    label: "GMP",
    sub: "EU Good Manufacturing Practice \xB7 D.Lgs 219/2006"
  }), /*#__PURE__*/React.createElement(CertBadge, {
    label: "Annex 11",
    sub: "EU GMP Annex 11 \xB7 Computerised Systems"
  }), /*#__PURE__*/React.createElement(CertBadge, {
    label: "21 CFR",
    sub: "Part 11 \xB7 Electronic Records & Signatures (FDA)"
  }), /*#__PURE__*/React.createElement(CertBadge, {
    label: "ISO 13485",
    sub: "Medical Device QMS \xB7 in percorso"
  }), /*#__PURE__*/React.createElement(CertBadge, {
    label: "GDPR",
    sub: "Data residency EU \xB7 Crittografia AES-256"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Annex 11 \u2014 Requisiti chiave"
  }, "Da ogni requisito ", /*#__PURE__*/React.createElement("em", null, "a una funzionalit\xE0 concreta.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr 1fr',
      background: 'var(--ink-3)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px 4px 0 0'
    }
  }, ['Requisito', 'Cosa prescrive', 'Come lo gestisce ivEyes'].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '14px 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)',
      borderRight: i < 2 ? '1px solid var(--rule-dark)' : 'none'
    }
  }, h))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--rule-dark)',
      borderTop: 'none',
      borderRadius: '0 0 4px 4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 4.8",
    title: "Audit Trail",
    how: "Log immutabile per ogni azione (pesa, acquisisci, valida, firma): timestamp, operatore, valore. Non modificabile n\xE9 cancellabile."
  }, "Il sistema deve mantenere una registrazione cronologica di tutte le operazioni rilevanti per la sicurezza del prodotto, con data, ora e operatore."), /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 5",
    title: "Computer System Validation",
    how: "Documentazione IQ/OQ/PQ disponibile. Protocolli di convalida pre-configurati per l'ente. Supporto al responsabile qualit\xE0 per l'iter CSV."
  }, "I sistemi computerizzati devono essere validati prima dell'uso. La convalida deve essere documentata e mantenuta aggiornata."), /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 6",
    title: "Sicurezza dati & backup",
    how: "Dati replicati in tempo reale su data center EU (Milano + Francoforte). Backup crittografato AES-256. RTO < 4h, RPO < 1h."
  }, "I dati devono essere protetti da perdita accidentale o intenzionale, con procedure di backup documentate e testate periodicamente."), /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 7",
    title: "Firma elettronica",
    how: "Firma elettronica qualificata per step critici: doppia autenticazione (PIN + voce o PIN + PIN secondo operatore). Conforme 21 CFR Part 11."
  }, "Le firme elettroniche devono essere autenticate e non ripudiabili, con collegamento inequivocabile all'identit\xE0 dell'utente."), /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 10",
    title: "Change management",
    how: "Ogni aggiornamento software segue un processo documentato di impatto, test e rilascio. Nessun aggiornamento in produzione senza validazione."
  }, "Qualsiasi modifica al sistema deve seguire procedure formali di valutazione d'impatto e riconvalida prima dell'implementazione."), /*#__PURE__*/React.createElement(ReqRow, {
    code: "\xA7 11",
    title: "Incident management",
    how: "Sistema di ticketing dedicato per la segnalazione di anomalie software. Risposta garantita in SLA. Root cause documentata per ogni incidente."
  }, "Gli incidenti devono essere registrati, valutati, investigati e risolti con un processo documentato di CAPA (Corrective and Preventive Action).")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '80px 0',
      background: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Architettura di sicurezza"
  }, "Dove risiedono ", /*#__PURE__*/React.createElement("em", null, "i tuoi dati.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginBottom: '40px'
    }
  }, [['Data residency', 'Tutti i dati processati e archiviati in data center certificati ISO 27001 all\'interno dell\'Unione Europea (Milano + Francoforte). Nessun dato fuori EU.'], ['Crittografia', 'AES-256 at rest, TLS 1.3 in transit. Le chiavi di cifratura sono gestite dall\'ente e non accessibili a Hexaros.'], ['Accesso e ruoli', 'RBAC granulare per ruolo (operatore, supervisore, responsabile qualità, IT). Log completo di ogni accesso. SSO con LDAP/AD supportato.'], ['Integrazioni', 'API REST + HL7 FHIR R4. Connettori pre-configurati per i principali HIS italiani (Dedalus, Intersystems). Webhook per notifiche real-time a LIMS/ERP.']].map(([title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--ink)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px',
      padding: '28px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--teal-bright)',
      marginBottom: '12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)'
    }
  }, body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      borderTop: '1px solid var(--rule-dark)',
      display: 'flex',
      gap: '0',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)',
      marginRight: '28px',
      flexShrink: 0
    }
  }, "Integrazioni validate"), ['HIS · Dedalus', 'HIS · Intersystems', 'SAP Healthcare', 'Oracle Health', 'HL7 FHIR R4', 'REST API', 'LDAP · AD SSO'].map((s, i, arr) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      color: 'var(--ivory)',
      padding: '0 18px',
      borderRight: i < arr.length - 1 ? '1px solid var(--rule-dark)' : 'none'
    }
  }, s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '20px'
    }
  }, "Supporto alla convalida"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,3.5vw,44px)',
      fontWeight: 400,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 96",
      marginBottom: '20px'
    }
  }, "Non ti lasciamo solo con ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 96"
    }
  }, "il dossier CSV.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15.5px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      marginBottom: '32px'
    }
  }, "Forniamo un pacchetto documentale pre-compilato (URS, DS, specifica funzionale, protocolli IQ/OQ/PQ) adattabile alla vostra procedura interna. Un referente qualit\xE0 Hexaros vi accompagna durante l'iter di convalida e supporta le eventuali richieste dell'ufficio qualit\xE0 aziendale o dell'ispettore GMP."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Parla con il nostro team qualit\xE0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, [['URS', 'User Requirement Specification — pre-compilata e adattabile'], ['DS', 'Design Specification — architettura e sicurezza documentate'], ['IQ / OQ', 'Protocolli di Installation e Operational Qualification'], ['PQ', 'Performance Qualification — su scenari reali del reparto'], ['CAPA log', 'Procedura di gestione anomalie e azioni correttive'], ['Change control', 'Template procedura di change management software']].map(([code, desc]) => /*#__PURE__*/React.createElement("div", {
    key: code,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      padding: '16px 20px',
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--teal-bright)',
      letterSpacing: '0.08em',
      width: '48px',
      flexShrink: 0,
      paddingTop: '1px'
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13.5px',
      color: 'var(--ivory-dim)',
      lineHeight: 1.5
    }
  }, desc))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '80px 0',
      background: 'var(--ink-2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px,3.5vw,44px)',
      fontWeight: 400,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 96",
      marginBottom: '18px',
      maxWidth: '22ch',
      marginInline: 'auto'
    }
  }, "Pronti a valutare ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 96"
    }
  }, "la compliance nel tuo contesto?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      color: 'var(--ivory-dim)',
      maxWidth: '50ch',
      margin: '0 auto 32px',
      lineHeight: 1.55
    }
  }, "Organizziamo un incontro tecnico con il tuo team qualit\xE0 \u2014 con la documentazione pronta da esaminare."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Richiedi incontro tecnico"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    "data-nav": "howwework"
  }, "Come lavoriamo \u2192")))));
}
window.ComplianceScreen = ComplianceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/ComplianceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/ContactScreen.jsx
try { (() => {
/* Hexaros — Contact (dark theme), interactive form. Exports window.ContactScreen */
const {
  Button,
  Eyebrow,
  Field,
  Checkbox
} = window.HexarosDesignSystem_c7b1f3;
function InfoItem({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      color: 'var(--accent)',
      textTransform: 'uppercase'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 60"
    }
  }, children));
}
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef(null);
  function submit(e) {
    e.preventDefault();
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
    setSent(true);
    formRef.current && formRef.current.reset();
    setTimeout(() => setSent(false), 5000);
  }
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '70px 0 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: '80px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '24px'
    }
  }, "Contatti"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px,6vw,72px)',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      color: 'var(--ivory)',
      marginBottom: '28px'
    }
  }, "Parlaci del ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 144"
    }
  }, "tuo reparto.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      color: 'var(--ivory-dim)',
      lineHeight: 1.55,
      maxWidth: '40ch',
      marginBottom: '40px'
    }
  }, "Se stai valutando ivEyes o una digitalizzazione pi\xF9 ampia dei processi di farmacia, ci piacerebbe conoscere il tuo contesto. Rispondiamo entro due giorni lavorativi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      paddingTop: '32px',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement(InfoItem, {
    k: "Sede"
  }, "Trieste, Italia"), /*#__PURE__*/React.createElement(InfoItem, {
    k: "Email commerciale"
  }, "info@hexaros.com"), /*#__PURE__*/React.createElement(InfoItem, {
    k: "Supporto tecnico"
  }, "support@hexaros.com"), /*#__PURE__*/React.createElement(InfoItem, {
    k: "LinkedIn"
  }, "@hexaros"))), /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: submit,
    noValidate: true,
    style: {
      padding: '48px',
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome e cognome",
    name: "name",
    required: true,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Ruolo",
    name: "role",
    placeholder: "es. Direttore Farmacia"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Ente / ospedale",
    name: "org"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    name: "email",
    required: true,
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Interesse",
    type: "select",
    name: "interest",
    full: true,
    options: [{
      value: 'demo',
      label: 'Richiesta demo ivEyes'
    }, {
      value: 'pilot',
      label: 'Valutazione pilota'
    }, {
      value: 'info',
      label: 'Informazioni generali'
    }, {
      value: 'press',
      label: 'Richiesta stampa / partnership'
    }, {
      value: 'other',
      label: 'Altro'
    }]
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Messaggio",
    type: "textarea",
    name: "message",
    full: true,
    placeholder: "Raccontaci brevemente il tuo contesto (volumi, tipologia preparazioni, sistemi in uso)\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "consent",
    required: true
  }, "Ho letto l'informativa privacy e acconsento al trattamento dei miei dati per essere ricontattato in merito alla richiesta.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    type: "submit"
  }, "Invia richiesta"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '20px',
      fontSize: '12.5px',
      color: 'var(--ivory-dim)',
      fontStyle: 'italic'
    }
  }, "Tempo medio di risposta: 48 ore lavorative. Per urgenze: support@hexaros.com"), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      marginTop: '20px',
      background: 'rgba(46,125,91,0.15)',
      border: '1px solid rgba(46,125,91,0.4)',
      borderRadius: '4px',
      color: 'var(--success-text)',
      fontSize: '14px'
    }
  }, "Richiesta inviata. Ti ricontattiamo a breve."))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/HomeScreen.jsx
try { (() => {
/* Hexaros — Home (dark / company theme). Exports window.HomeScreen */
const {
  Button,
  Eyebrow,
  Tag,
  Metric,
  FeatureCard,
  SectionHead
} = window.HexarosDesignSystem_c7b1f3;

/* ---- Social proof strip ---- */
function ProofStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid var(--rule-dark)',
      borderBottom: '1px solid var(--rule-dark)',
      background: 'var(--ink-2)',
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'center',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      color: 'var(--accent)',
      lineHeight: 1,
      opacity: 0.5,
      fontVariationSettings: "'SOFT' 30,'opsz' 96",
      flexShrink: 0
    }
  }, "\""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(16px,1.6vw,19px)',
      color: 'var(--ivory)',
      fontWeight: 400,
      lineHeight: 1.35,
      margin: '0 0 10px',
      fontVariationSettings: "'SOFT' 30,'opsz' 60"
    }
  }, "La tracciabilit\xE0 non rallenta pi\xF9 il processo \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 60"
    }
  }, "lo accompagna.")), /*#__PURE__*/React.createElement("cite", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)',
      fontStyle: 'normal'
    }
  }, "\u2014 Farmacista responsabile \xB7 Pilota ospedaliero 2026 \xB7 Triveneto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'flex-end',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)'
    }
  }, "In pilota attivo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 400,
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60"
    }
  }, "2 farmacie"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)'
    }
  }, "Nordest Italia \xB7 2026")))));
}

/* ---- Wearable vs fixed comparison ---- */
const COMPARE_ROWS = [['Operatività sotto cappa ISO 5', true, false, false], ['Mani sempre libere — zero touch terminale', true, false, false], ['Interazione vocale durante la preparazione', true, false, false], ['Nessuna contaminazione da tastiera/schermo', true, false, false], ['Documentazione automatica step-by-step', true, true, true], ['Integrazione HIS/LIMS/ERP', true, true, true], ['Audit trail GMP · Annex 11', true, true, true], ['Investimento hardware per reparto', '1 visore', 'Cabinet fisso', 'Robot + cleanroom']];
function CheckIcon({
  ok,
  value
}) {
  if (value !== undefined) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: ok ? 'var(--teal-bright)' : 'var(--ivory-dim)',
        opacity: ok ? 1 : 0.6
      }
    }, value);
  }
  return ok ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: "rgba(63,185,140,0.12)",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9l3 3 5-5",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: "rgba(255,255,255,0.03)",
    stroke: "rgba(245,241,234,0.18)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12l6-6M12 12L6 6",
    stroke: "rgba(245,241,234,0.25)",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }));
}
function WearableSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      background: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Perch\xE9 indossabile?"
  }, "L'unico assistente ", /*#__PURE__*/React.createElement("em", null, "che lavora con te.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      lineHeight: 1.6,
      color: 'var(--ivory-dim)',
      maxWidth: '58ch',
      marginBottom: '48px',
      marginTop: '-16px'
    }
  }, "I sistemi fissi si fermano alla soglia della cappa a flusso laminare. ivEyes entra con l'operatore: indossabile, vocale, senza contatto con superfici critiche. Zero touch. Zero interruzione del processo sterile."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      background: 'var(--ink-3)',
      borderBottom: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)'
    }
  }, "Funzionalit\xE0"), [{
    label: 'ivEyes',
    sub: 'Wearable AR',
    highlight: true
  }, {
    label: 'Cabinet fisso',
    sub: 'es. Omnicell',
    highlight: false
  }, {
    label: 'Robot compounding',
    sub: 'es. Grifols KIRO',
    highlight: false
  }].map(({
    label,
    sub,
    highlight
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: '18px 20px',
      textAlign: 'center',
      borderLeft: '1px solid var(--rule-dark)',
      background: highlight ? 'rgba(63,185,140,0.07)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: highlight ? 'var(--teal-bright)' : 'var(--ivory-dim)',
      fontWeight: highlight ? 600 : 400
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9.5px',
      letterSpacing: '0.1em',
      color: 'var(--ivory-dim)',
      opacity: 0.5,
      marginTop: '3px'
    }
  }, sub)))), COMPARE_ROWS.map(([feat, iv, cab, rob], i) => {
    const isLast = i === COMPARE_ROWS.length - 1;
    const isStr = typeof iv === 'string';
    return /*#__PURE__*/React.createElement("div", {
      key: feat,
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        borderBottom: isLast ? 'none' : '1px solid var(--rule-dark)',
        background: i % 2 === 0 ? 'var(--ink)' : 'var(--ink-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        fontSize: '13.5px',
        color: 'var(--ivory)',
        lineHeight: 1.4
      }
    }, feat), [iv, cab, rob].map((v, ci) => /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '1px solid var(--rule-dark)',
        background: ci === 0 ? 'rgba(63,185,140,0.04)' : 'transparent'
      }
    }, isStr ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: ci === 0 ? 'var(--teal-bright)' : 'var(--ivory-dim)',
        textAlign: 'center',
        opacity: ci === 0 ? 1 : 0.55
      }
    }, v) : /*#__PURE__*/React.createElement(CheckIcon, {
      ok: v
    }))));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      color: 'var(--ivory-dim)',
      opacity: 0.6
    }
  }, "\xB9 Confronto indicativo basato su caratteristiche pubblicamente documentate di Omnicell XT e Grifols KIRO Fill\xAE. Non sponsorizzato."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "iveyes"
  }, "Scopri come funziona ivEyes"))));
}
function HomeScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '80px 0 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    style: {
      marginBottom: '34px'
    }
  }, "Hexaros \u2014 Tecnologie per la farmacia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(46px, 8vw, 110px)',
      lineHeight: 0.98,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      marginBottom: '28px',
      maxWidth: '16ch',
      color: 'var(--ivory)'
    }
  }, "Il processo produttivo, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 144"
    }
  }, "reso governabile.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '46ch',
      fontSize: '18px',
      lineHeight: 1.55,
      color: 'var(--ivory-dim)',
      marginBottom: '40px'
    }
  }, "Progettiamo strumenti digitali per la farmacia ospedaliera. Tecnologie che tracciano, guidano e documentano i processi di allestimento \u2014 senza imporre rigidit\xE0 al modo di lavorare di chi cura."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "iveyes"
  }, "Scopri ivEyes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    "data-nav": "about"
  }, "Conosci l'azienda")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      marginTop: '80px',
      paddingTop: '40px',
      borderTop: '1px solid var(--rule-dark)',
      gap: '0'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    value: "100%",
    label: "Tracciabilit\xE0 di processo per la conformit\xE0 GMP \xB7 Annex 11"
  }), /*#__PURE__*/React.createElement(Metric, {
    value: "1 \u2192 N",
    label: "Una piattaforma, pi\xF9 scenari: sotto cappa, training, logistica"
  }), /*#__PURE__*/React.createElement(Metric, {
    value: "AR",
    label: "Smart glasses, comandi vocali, mani libere per l'operatore"
  })))), /*#__PURE__*/React.createElement(ProofStrip, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Perch\xE9 ora"
  }, "Tre pressioni convergenti, ", /*#__PURE__*/React.createElement("em", null, "una risposta sola.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'var(--rule-dark)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, [['01 — Compliance', 'Tracciabilità che tiene.', 'GMP, Annex 11: i requisiti su documentazione e controllo dei processi di allestimento diventano ogni anno più stringenti. La tracciabilità manuale non scala.'], ['02 — Volumi', 'Velocità senza compromessi.', 'Oncologia, nutrizione parenterale totale, galenici: i volumi crescono, i margini sulla sicurezza no. Serve velocità misurabile, non percepita.'], ['03 — Persone', 'Curva di apprendimento, tracciata.', 'Turnover e formazione sono una sfida strutturale della farmacia. I nuovi operatori devono diventare produttivi prima, con meno supervisione.']].map(([k, t, p]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--ink)',
      padding: '40px 32px 48px'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    kicker: k,
    title: t
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "I nostri prodotti"
  }, "Strumenti pensati ", /*#__PURE__*/React.createElement("em", null, "per il processo produttivo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      overflow: 'hidden',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px',
      background: 'radial-gradient(circle at 30% 40%, rgba(63,185,140,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(31,132,102,0.22), transparent 60%), var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "220",
    height: "120",
    viewBox: "0 0 240 140"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(28.2,-26.6) scale(1.7)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#F5F1EA",
    strokeWidth: "1.24",
    d: "M24.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F1EA",
    d: "M33.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F1EA",
    d: "M49.75,46.3 h8.5 v3.4 h-8.5 z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#F5F1EA",
    strokeWidth: "1.24",
    d: "M58.25,48 a12.75,9.35 0 1,0 25.5,0 a12.75,9.35 0 1,0 -25.5,0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "var(--accent)",
    d: "M67.175,48 a3.825,3.825 0 1,0 7.65,0 a3.825,3.825 0 1,0 -7.65,0"
  })), /*#__PURE__*/React.createElement("text", {
    x: "120",
    y: "112",
    textAnchor: "middle",
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "24",
    fontWeight: "300",
    fill: "#F5F1EA"
  }, "iv", /*#__PURE__*/React.createElement("tspan", {
    fontWeight: "700"
  }, "Eyes")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px',
      background: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    style: {
      marginBottom: '18px',
      alignSelf: 'flex-start'
    }
  }, "Primo prodotto \xB7 Disponibile"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,3.5vw,44px)',
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      marginBottom: '20px',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 96"
    }
  }, "ivEyes"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-dim)',
      fontSize: '15.5px',
      lineHeight: 1.6,
      marginBottom: '28px',
      maxWidth: '44ch'
    }
  }, "Smart Glasses Tracking Assistant: un assistente indossabile che guida, traccia e documenta le preparazioni in cappa a flusso laminare. Tre modalit\xE0 operative, una piattaforma, zero rigidit\xE0."), /*#__PURE__*/React.createElement("a", {
    "data-nav": "iveyes",
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--accent)',
      alignSelf: 'flex-start'
    }
  }, "Esplora ivEyes", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    }
  }, [['Q3 2026 — In sviluppo', 'Modulo LIMS Bridge', 'Integrazione nativa tra ivEyes e i sistemi di laboratorio ospedaliero.'], ['2027 — Roadmap', 'Orchestrator', 'Piattaforma di supervisione per flotte multi-reparto di smart glasses.']].map(([tag, h, p]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '36px',
      border: '1px dashed var(--rule-dark-2)',
      borderRadius: '6px',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "muted",
    dashed: true,
    style: {
      marginBottom: '16px'
    }
  }, tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 400,
      color: 'var(--ivory)',
      margin: '10px 0'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-dim)',
      fontSize: '13px',
      lineHeight: 1.55
    }
  }, p)))))), /*#__PURE__*/React.createElement(WearableSection, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Dove andiamo"
  }, "La farmacia ", /*#__PURE__*/React.createElement("em", null, "come sistema di dati operativi.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(22px,2.4vw,30px)',
      lineHeight: 1.35,
      maxWidth: '32ch',
      color: 'var(--ivory)',
      fontWeight: 400,
      fontVariationSettings: "'SOFT' 30, 'opsz' 96",
      marginBottom: '40px'
    }
  }, "Il prodotto giusto, al reparto giusto, al momento giusto \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 96"
    }
  }, "documentato al grammo"), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    "data-nav": "howwework",
    style: {
      marginRight: '12px'
    }
  }, "Come lavoriamo"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Parlaci del tuo reparto"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/HowWeWorkScreen.jsx
try { (() => {
/* Hexaros — Come lavoriamo (dark theme). Exports window.HowWeWorkScreen */
const {
  Button,
  Eyebrow,
  SectionHead
} = window.HexarosDesignSystem_c7b1f3;
function Step({
  n,
  title,
  subtitle,
  duration,
  children,
  last = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: '40px',
      paddingBottom: last ? 0 : '64px',
      position: 'relative'
    }
  }, !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '38px',
      top: '60px',
      bottom: 0,
      width: '2px',
      background: 'linear-gradient(to bottom, var(--accent), rgba(63,185,140,0.06))',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      paddingTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      border: '2px solid var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ink)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 400,
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60",
      lineHeight: 1
    }
  }, n)), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)',
      textAlign: 'center',
      lineHeight: 1.4
    }
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px, 2.8vw, 34px)',
      fontWeight: 400,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 96",
      marginBottom: '8px'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 60",
      marginBottom: '20px'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      maxWidth: '62ch'
    }
  }, children)));
}
function DeliverableTag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '6px 14px',
      borderRadius: '999px',
      background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
      border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5l2 2 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), children);
}
function HowWeWorkScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '70px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '28px'
    }
  }, "Come lavoriamo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(42px, 6vw, 82px)',
      lineHeight: 1,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30,'opsz' 144",
      maxWidth: '18ch',
      color: 'var(--ivory)',
      marginBottom: '28px'
    }
  }, "Dall'interesse ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 144"
    }
  }, "all'operativit\xE0.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch',
      fontSize: '18px',
      lineHeight: 1.55,
      color: 'var(--ivory-dim)',
      marginBottom: '0'
    }
  }, "Non vendiamo un prodotto e lasciamo il cliente da solo. Ogni installazione di ivEyes parte da un audit di contesto e si chiude solo quando gli operatori lavorano in autonomia \u2014 con dati reali, non promesse."))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '70px 0 100px',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '820px'
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: "01",
    title: "Valutazione del contesto.",
    subtitle: "Prima capiamo, poi proponiamo.",
    duration: "1\u20132 sett."
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '16px'
    }
  }, "Il processo inizia con un incontro di 2\u20134 ore in reparto, non con una demo commerciale. Analizziamo volumi di preparazione, tipologia (oncologici, NPT, galenici), turni, sistemi informativi in uso (HIS, LIMS, ERP), e il livello di esperienza degli operatori. Usciamo con una mappa del processo attuale e i punti di frizione reali."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(DeliverableTag, null, "Mappa di processo"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Scenari identificati"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Piano pilota condiviso"))), /*#__PURE__*/React.createElement(Step, {
    n: "02",
    title: "Pilota strutturato.",
    subtitle: "Dati reali, scenario reale.",
    duration: "4\u20138 sett."
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '16px'
    }
  }, "Il pilota avviene nel tuo reparto, su preparazioni reali, con i tuoi operatori. Non in laboratorio. Definiamo insieme le metriche di successo prima di iniziare (tempi, errori intercettati, carico documentale, gradimento operatori) e le misuriamo settimanalmente. Alla fine del pilota hai dati oggettivi per presentare l'adozione ai tuoi stakeholder interni."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(DeliverableTag, null, "KPI condivisi a priori"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Report settimanale dati"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Report finale pilota"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Presentazione go/no-go"))), /*#__PURE__*/React.createElement(Step, {
    n: "03",
    title: "Formazione operatori.",
    subtitle: "Tracciata, certificata, breve.",
    duration: "1\u20132 sett."
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '16px'
    }
  }, "Il sistema \xE8 progettato per essere appreso in meno di 4 ore di pratica guidata \u2014 lo abbiamo misurato nel pilota. La formazione \xE8 strutturata per ruolo (operatore, referente qualit\xE0, IT/sistemista) e produce un record di completamento per ogni partecipante, utilizzabile come documentazione GMP. Nessun operatore va in produzione da solo fino a validazione completata."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(DeliverableTag, null, "Percorsi per ruolo"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Attestati individuali"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Documentazione GMP"))), /*#__PURE__*/React.createElement(Step, {
    n: "04",
    title: "Supporto continuativo.",
    subtitle: "Non sparisce nessuno.",
    duration: "Ongoing",
    last: true
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '16px'
    }
  }, "Post-go-live, un referente Hexaros segue il reparto per le prime 4 settimane di produzione. Dopodich\xE9: aggiornamenti software inclusi, nuove modalit\xE0 operative integrate, supporto all'estensione ad altri reparti o tipologie di preparazione. Il contratto di supporto include tempi di risposta garantiti e un canale dedicato per i responsabili qualit\xE0."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(DeliverableTag, null, "4 sett. affiancamento"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Aggiornamenti inclusi"), /*#__PURE__*/React.createElement(DeliverableTag, null, "SLA garantito"), /*#__PURE__*/React.createElement(DeliverableTag, null, "Canale qualit\xE0 dedicato")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '80px 0',
      background: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Domande frequenti"
  }, "Quello che ", /*#__PURE__*/React.createElement("em", null, "ci chiedono spesso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--rule-dark)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, [['Quanto dura l\'installazione tecnica?', 'Un giorno lavorativo per la configurazione hardware e software. Il sistema è cloud-native: non richiede server locali, si integra con la rete esistente via VPN o connessione sicura certificata.'], ['Serve approvazione IT centralizzata?', 'Dipende dall\'ente. Forniamo tutta la documentazione tecnica (architettura, crittografia, data residency EU, GDPR) per facilitare l\'iter IT. Di solito basta un incontro con il team sistemistico.'], ['Cosa succede se un operatore non si abitua al visore?', 'È raro, ma capitato: nel pilota gestiamo questa situazione caso per caso, spesso con un percorso di affiancamento dedicato. Il sistema ha anche una modalità tablet per chi non è a proprio agio con il wearable.'], ['Si integra con il nostro HIS/LIMS?', 'Con i principali sistemi italiani (Dedalus, Intersystems, SAP, Oracle Health) sì. Se usate altro, lo valutiamo nella fase di assessment: abbiamo API REST e HL7 FHIR disponibili.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: 'var(--ink)',
      padding: '36px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 500,
      color: 'var(--ivory)',
      marginBottom: '12px',
      lineHeight: 1.25,
      fontVariationSettings: "'SOFT' 30,'opsz' 60"
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)'
    }
  }, a)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px, 4vw, 48px)',
      fontWeight: 400,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      marginBottom: '20px',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 96"
    }
  }, "Partiamo da ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100,'opsz' 96"
    }
  }, "una valutazione.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      color: 'var(--ivory-dim)',
      maxWidth: '48ch',
      margin: '0 auto 36px',
      lineHeight: 1.55
    }
  }, "Nessun impegno iniziale. Raccontaci il tuo reparto in 30 minuti \u2014 ti diciamo in modo onesto se e come ivEyes pu\xF2 aiutare."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Richiedi una valutazione gratuita"))));
}
window.HowWeWorkScreen = HowWeWorkScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/HowWeWorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hexaros-site/screens/IveyesScreen.jsx
try { (() => {
/* Hexaros — ivEyes product page (dark theme). Exports window.IveyesScreen */
const {
  Button,
  Eyebrow,
  Tag,
  Logo,
  ModeCard,
  BenefitCard,
  PullQuote,
  SectionHead
} = window.HexarosDesignSystem_c7b1f3;
function MetaItem({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ivory-dim)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ivory)',
      fontWeight: 500
    }
  }, v));
}
function IveyesScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '50px 0 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "teal",
    style: {
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    brand: "iveyes",
    wordmark: false,
    size: 20
  }), " Un prodotto Hexaros"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px',
      color: 'var(--ivory)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    brand: "iveyes",
    size: 48
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px,6vw,80px)',
      lineHeight: 0.98,
      letterSpacing: '-0.035em',
      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
      color: 'var(--ivory)',
      marginBottom: '24px'
    }
  }, "L'operatore conduce. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 144"
    }
  }, "Il sistema documenta.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      fontSize: '18px',
      lineHeight: 1.55,
      color: 'var(--ivory-dim)',
      marginBottom: '32px'
    }
  }, "Smart Glasses Tracking Assistant: un visore indossabile che guida, traccia e fornisce agli operatori gli strumenti per validare le preparazioni in ambienti regolamentati. Flessibile per natura, rigoroso per definizione."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Richiedi una demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#modalita"
  }, "Le tre modalit\xE0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '36px',
      flexWrap: 'wrap',
      padding: '24px 0',
      borderTop: '1px solid var(--rule-dark)',
      borderBottom: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement(MetaItem, {
    k: "Hardware",
    v: "Vuzix"
  }), /*#__PURE__*/React.createElement(MetaItem, {
    k: "Interfaccia",
    v: "Vocale, mani libere"
  }), /*#__PURE__*/React.createElement(MetaItem, {
    k: "Compliance",
    v: "GMP \xB7 Annex 11"
  }), /*#__PURE__*/React.createElement(MetaItem, {
    k: "Integrazioni",
    v: "HIS \xB7 LIMS \xB7 ERP"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      border: '1px solid var(--rule-dark)',
      borderRadius: '8px',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: 'var(--ivory)',
      background: 'radial-gradient(ellipse at 30% 30%, rgba(31,132,102,0.14), transparent 60%), linear-gradient(135deg, var(--ink-2), var(--ink-3))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '24px',
      left: '24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.2em',
      color: 'var(--teal-bright)',
      textTransform: 'uppercase'
    }
  }, "Platform Preview"), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 260 320",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(20,80)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "20",
    width: "220",
    height: "4",
    fill: "currentColor",
    opacity: "0.15"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "10",
    width: "90",
    height: "56",
    rx: "6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "120",
    y: "10",
    width: "90",
    height: "56",
    rx: "6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 100 28 Q 110 24 120 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 38 L -12 44",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 210 38 L 232 44",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "22",
    width: "36",
    height: "3",
    fill: "#1F8466"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "30",
    width: "28",
    height: "3",
    fill: "#1F8466",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "85",
    cy: "38",
    r: "4",
    fill: "#3FB98C"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "130",
    y: "22",
    width: "52",
    height: "3",
    fill: "#1F8466"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "130",
    y: "30",
    width: "32",
    height: "3",
    fill: "#1F8466",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "195",
    cy: "50",
    r: "4",
    fill: "#3FB98C"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(20,200)",
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: "9",
    fill: "currentColor",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "0"
  }, "01 \u2014 TASK ACTIVE"), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "8",
    width: "220",
    height: "1",
    fill: "currentColor",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "24",
    fill: "#3FB98C",
    fontWeight: "500",
    opacity: "1"
  }, "Pesa prodotto"), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "40"
  }, "Target: 12.4 g \xB7 Tolleranza \xB12%"), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "52",
    width: "220",
    height: "4",
    rx: "2",
    fill: "currentColor",
    opacity: "0.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "52",
    width: "165",
    height: "4",
    rx: "2",
    fill: "#1F8466"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "72"
  }, "75%"), /*#__PURE__*/React.createElement("text", {
    x: "198",
    y: "72",
    textAnchor: "end"
  }, "VALIDATING..."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.2em',
      color: 'var(--ivory-dim)',
      textAlign: 'right',
      lineHeight: 1.6
    }
  }, "v1.0 \xB7 Build 2026.03", /*#__PURE__*/React.createElement("br", null), "Preview \u2014 schermata illustrativa"))))), /*#__PURE__*/React.createElement("section", {
    id: "modalita",
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      background: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Le tre modalit\xE0"
  }, "Un assistente indossabile, ", /*#__PURE__*/React.createElement("em", null, "tre modi di lavorare.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(ModeCard, {
    tag: "01 \xB7 Flessibile",
    title: "Tracciamento",
    subtitle: "L'operatore conduce.",
    items: ['Cattura automatica di immagini', 'Confronto con archivio di riferimento', 'Comandi vocali: pesa, acquisisci, timer', 'Pausa / ripresa con ripristino']
  }, "Il sistema affianca in modo passivo. Non impone una sequenza: segue le necessit\xE0 reali della preparazione e mantiene la tracciabilit\xE0 completa. Interazione vocale, mani libere."), /*#__PURE__*/React.createElement(ModeCard, {
    tag: "02 \xB7 Modulare",
    title: "Guida",
    subtitle: "Il sistema conduce.",
    items: ['Training di nuovi operatori tracciabile', 'Preparazioni ad alta complessità', 'Flussi personalizzati su specifica cliente', 'Curva di apprendimento misurabile']
  }, "Il processo \xE8 suddiviso in step predefiniti. Ogni step deve essere completato e confermato prima di procedere. Pensato per training e preparazioni dove il protocollo non ammette scorciatoie."), /*#__PURE__*/React.createElement(ModeCard, {
    tag: "03 \xB7 Informativo",
    title: "Supporto",
    subtitle: "Fuori cappa, sempre connesso.",
    items: ['Validazione consegna dei prodotti', 'Conferma stampa ed etichette', 'Tracciamento flussi tra reparti', 'Interfaccia per sistemi automatizzati']
  }, "Visualizzazione e conferma di azioni negli scenari \"mobile\" della farmacia: consegna, etichettatura, smistamento, supporto ai sistemi automatizzati. La stessa piattaforma, un contesto diverso.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Scenari di utilizzo"
  }, "Una piattaforma, ", /*#__PURE__*/React.createElement("em", null, "tre contesti clinici.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      background: 'rgba(63,185,140,0.08)',
      borderBottom: '1px solid var(--rule-dark)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4v4l3 2",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--teal-bright)'
    }
  }, "Farmaci hazardous")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 28px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60",
      marginBottom: '14px'
    }
  }, "Oncologia e chemioterapia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      marginBottom: '24px',
      flex: 1
    }
  }, "La preparazione di farmaci citotossici richiede il massimo controllo: dose nominale verificata per ogni paziente, ogni step documentato con timestamp e firma elettronica. ivEyes guida l'operatore passo a passo in modalit\xE0 Guida \u2014 nessuno step saltabile, audit trail immutabile per ogni sacca preparata."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, ['Verifica dose nominale per paziente', 'Step obbligatori — nessuna scorciatoia', 'Firma elettronica per ogni validazione', 'Tracciabilità lotto materie prime'].map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: '13px',
      color: 'var(--ivory-dim)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      marginTop: '1px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 7l3 3 7-6",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), item))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      background: 'rgba(63,185,140,0.08)',
      borderBottom: '1px solid var(--rule-dark)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "10",
    height: "12",
    rx: "2",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6h4M6 9h4M6 12h2",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--teal-bright)'
    }
  }, "Multi-componente")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 28px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60",
      marginBottom: '14px'
    }
  }, "Nutrizione parenterale totale."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      marginBottom: '24px',
      flex: 1
    }
  }, "Le sacche NPT richiedono pesatura sequenziale di pi\xF9 componenti con tolleranze strette. ivEyes guida l'operatore componente per componente, verifica il peso catturato con la bilancia integrata, segnala vocalmente scostamenti dalla tolleranza e registra ogni step senza che l'operatore tocchi un terminale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, ['Guida sequenziale multi-componente', 'Verifica peso via bilancia integrata', 'Alert vocale su scostamento tolleranza', 'Timer automatico per stabilità'].map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: '13px',
      color: 'var(--ivory-dim)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      marginTop: '1px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 7l3 3 7-6",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), item))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-2)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '6px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      background: 'rgba(63,185,140,0.08)',
      borderBottom: '1px solid var(--rule-dark)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4M4 6h8l-1 7H5L4 6z",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--teal-bright)'
    }
  }, "Preparazioni magistrali")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 28px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30,'opsz' 60",
      marginBottom: '14px'
    }
  }, "Galenici e preparazioni magistrali."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ivory-dim)',
      marginBottom: '24px',
      flex: 1
    }
  }, "La variabilit\xE0 delle preparazioni magistrali rende difficile standardizzare i processi. ivEyes permette di configurare protocolli specifici per formula, con guide operative adattabili. Ideale anche per l'onboarding di nuovi operatori su preparazioni complesse \u2014 la curva di apprendimento \xE8 tracciata e migliorata nel tempo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, ['Protocolli per formula configurabili', 'Modalità training per nuovi operatori', 'Curva apprendimento misurata', 'Storico per lotto e operatore'].map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: '13px',
      color: 'var(--ivory-dim)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      marginTop: '1px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 7l3 3 7-6",
    stroke: "var(--teal-bright)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), item)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Parla con un esperto del tuo scenario"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    "data-nav": "compliance"
  }, "Approfondisci la compliance \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '110px 0',
      background: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(PullQuote, {
    cite: "\u2014 Il principio di ivEyes"
  }, "Tracciabilit\xE0 completa ", /*#__PURE__*/React.createElement("em", null, "senza imporre rigidit\xE0"), " al flusso di lavoro."))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Benefici"
  }, "Cosa cambia ", /*#__PURE__*/React.createElement("em", null, "per chi governa il processo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'var(--rule-dark)',
      border: '1px solid var(--rule-dark)',
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "100%",
    title: "Tracciabilit\xE0 di processo"
  }, "Ogni step documentato automaticamente: audit trail completo per conformit\xE0 GMP \xB7 Annex 11."), /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "KPI",
    title: "Dati operativi oggettivi"
  }, "Tempi reali per preparazione, tipologia, operatore. Base dati per pianificazione e budget."), /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "\u2193",
    title: "Onboarding pi\xF9 rapido"
  }, "Il nuovo operatore \xE8 produttivo prima e con meno supervisione, mantenendo la qualit\xE0."), /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "1 \u2192 N",
    title: "Una piattaforma, pi\xF9 processi"
  }, "Sotto cappa, training, logistica: un solo investimento per scenari diversi."), /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "AR",
    title: "Tecnologia consolidata"
  }, "Smart glasses Vuzix: hardware affermato, validato in ambienti GMP regolamentati europei."), /*#__PURE__*/React.createElement(BenefitCard, {
    stat: "\u2192",
    title: "Riduzione del rischio"
  }, "Validazione automatica degli step critici: meno errori, meno rilavorazioni.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '90px 0',
      background: 'var(--ink-2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,4vw,52px)',
      fontWeight: 400,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      marginBottom: '20px',
      maxWidth: '20ch',
      marginInline: 'auto',
      color: 'var(--ivory)',
      fontVariationSettings: "'SOFT' 30, 'opsz' 96"
    }
  }, "Pronto a vedere ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontVariationSettings: "'SOFT' 100, 'opsz' 96"
    }
  }, "ivEyes al lavoro?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      color: 'var(--ivory-dim)',
      maxWidth: '52ch',
      margin: '0 auto 36px',
      lineHeight: 1.55
    }
  }, "Ti mostriamo il sistema su uno scenario reale della tua farmacia. Demo on-site o in videoconferenza, con un esperto di processo Hexaros a fianco."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    "data-nav": "contact"
  }, "Prenota una demo"))));
}
window.IveyesScreen = IveyesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hexaros-site/screens/IveyesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BenefitCard = __ds_scope.BenefitCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ModeCard = __ds_scope.ModeCard;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
