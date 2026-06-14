import * as React from 'react';

export interface SectionHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono eyebrow shown in the left column. */
  eyebrow?: React.ReactNode;
  /** The h2 content — wrap a phrase in <em> for the accent emphasis. */
  children: React.ReactNode;
  /** Optional supporting lede below the heading. */
  lede?: React.ReactNode;
}

/** Two-column section header (eyebrow + Fraunces h2 + optional lede). */
export function SectionHead(props: SectionHeadProps): JSX.Element;
