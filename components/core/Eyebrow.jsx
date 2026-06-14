import React from 'react';

/**
 * The mono kicker label that sits above headings and tags sections,
 * cards, and metadata throughout the site. Uppercase IBM Plex Mono with
 * wide tracking. Clinical teal-blue accent, theme-aware (follows --accent).
 */
export function Eyebrow({ children, as = 'span', rule = false, style = {}, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        display: rule ? 'inline-flex' : 'inline-block',
        alignItems: 'center',
        gap: '14px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-eyebrow)',
        fontWeight: 500,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span style={{ width: '36px', height: '1px', background: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />
      )}
      {children}
    </Tag>
  );
}
