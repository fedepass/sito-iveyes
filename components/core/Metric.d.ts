import * as React from 'react';

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The large numeral / short value, e.g. "100%", "1 → N", "AR". */
  value: React.ReactNode;
  /** Supporting description below the value. */
  label: React.ReactNode;
  /** Accent color of the value. `gold` for company, `teal` for product KPIs. */
  tone?: 'gold' | 'teal';
}

/** Large Fraunces metric / KPI with a supporting label. */
export function Metric(props: MetricProps): JSX.Element;
