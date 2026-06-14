import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the filled gold/blue CTA; `ghost` is outlined. */
  variant?: 'primary' | 'ghost';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  /** Show the signature sliding arrow icon after the label. */
  arrow?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * The Hexaros call-to-action button.
 *
 * @startingPoint section="Core" subtitle="Primary & ghost pill buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
