import * as React from 'react';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Mono kicker — a number ("01 — Compliance"), role or label. */
  kicker?: React.ReactNode;
  /** Fraunces card title. */
  title: React.ReactNode;
  children?: React.ReactNode;
}

/** Numbered manifesto / principle / pillar card. */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
