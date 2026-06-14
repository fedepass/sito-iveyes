import * as React from 'react';

export interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Fraunces year label, e.g. "2026", "2027 →". */
  year: React.ReactNode;
  /** Main roadmap line. */
  title: React.ReactNode;
  /** Optional supporting subtext. */
  children?: React.ReactNode;
}

/** Roadmap / timeline row (year + main line + subtext). */
export function TimelineItem(props: TimelineItemProps): JSX.Element;
