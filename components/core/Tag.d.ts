import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment of the chip. `gold` follows the theme accent. */
  tone?: 'gold' | 'teal' | 'success' | 'muted' | 'solid';
  /** Use a dashed border (roadmap / coming-soon items). */
  dashed?: boolean;
  children?: React.ReactNode;
}

/** Small mono pill chip / status badge. */
export function Tag(props: TagProps): JSX.Element;
