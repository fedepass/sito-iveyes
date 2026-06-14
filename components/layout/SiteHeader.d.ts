import * as React from 'react';

export interface NavLink { label: React.ReactNode; href: string; }

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand mark to show. */
  brand?: 'hexaros' | 'iveyes';
  /** Primary nav links. */
  links?: NavLink[];
  /** Href of the active link (gets the gold underline). */
  activeHref?: string;
  /** Trailing CTA pill. Pass null to hide. */
  cta?: { label: React.ReactNode; href: string } | null;
  /** Currently selected language. */
  lang?: 'it' | 'en';
  /** Language toggle handler. */
  onLangToggle?: () => void;
}

/**
 * Sticky translucent site header with nav, CTA and IT·EN toggle.
 *
 * @startingPoint section="Layout" subtitle="Sticky site header with nav + CTA" viewport="1280x84"
 */
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
