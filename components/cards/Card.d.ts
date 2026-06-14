import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Tint + strengthen border on hover. */
  hover?: boolean;
  /** Lift with a drop shadow on hover. */
  lift?: boolean;
  /** No fill — just the border. */
  flat?: boolean;
  /** Element to render. Default `div`. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** Generic bordered surface container. */
export function Card(props: CardProps): JSX.Element;
