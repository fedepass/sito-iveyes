import * as React from 'react';

export interface FooterColumn {
  title: React.ReactNode;
  links: { label: React.ReactNode; href: string }[];
}

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand mark in the footer. */
  brand?: 'hexaros' | 'iveyes';
  /** Brand description paragraph. */
  description?: React.ReactNode;
  /** Link columns. */
  columns?: FooterColumn[];
  /** Copyright line. */
  copyright?: React.ReactNode;
  /** Location / contact line. */
  location?: React.ReactNode;
}

/** Site footer with brand block, link columns and bottom rule. */
export function SiteFooter(props: SiteFooterProps): JSX.Element;
