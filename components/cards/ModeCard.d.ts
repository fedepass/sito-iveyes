import * as React from 'react';

export interface ModeCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Mono tag, e.g. "01 · Flessibile". */
  tag?: React.ReactNode;
  /** Fraunces title, e.g. "Tracciamento". */
  title: React.ReactNode;
  /** Italic subtitle, e.g. "L'operatore conduce.". */
  subtitle?: React.ReactNode;
  /** Body paragraph. */
  children?: React.ReactNode;
  /** Arrow-bulleted feature list. */
  items?: React.ReactNode[];
}

/** ivEyes operating-mode card with gold top accent and feature list. */
export function ModeCard(props: ModeCardProps): JSX.Element;
