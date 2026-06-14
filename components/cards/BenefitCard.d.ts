import * as React from 'react';

export interface BenefitCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Teal Fraunces stat — "100%", "KPI", "1 → N", "↓". */
  stat: React.ReactNode;
  /** Benefit title. */
  title: React.ReactNode;
  children?: React.ReactNode;
}

/** Benefit cell (teal stat + title + description) for the benefits grid. */
export function BenefitCard(props: BenefitCardProps): JSX.Element;
