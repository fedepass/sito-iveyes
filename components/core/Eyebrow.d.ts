import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** Element tag to render. Default `span`. */
  as?: keyof JSX.IntrinsicElements;
  /** Prepend the short gold rule used in hero labels. */
  rule?: boolean;
  children?: React.ReactNode;
}

/** Uppercase mono kicker / section label. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
