import * as React from 'react';

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Quote text — wrap a phrase in <em> for the gold italic emphasis. */
  children: React.ReactNode;
  /** Attribution line (rendered in mono uppercase). */
  cite?: React.ReactNode;
}

/** Large Fraunces editorial pull quote with mono attribution. */
export function PullQuote(props: PullQuoteProps): JSX.Element;
