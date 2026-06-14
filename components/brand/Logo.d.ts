import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which mark to render. */
  brand?: 'hexaros' | 'iveyes';
  /** Include the wordmark beside the glyph. */
  wordmark?: boolean;
  /** Glyph height in px (wordmark scales with it). Default 32. */
  size?: number;
}

/**
 * Hexaros / ivEyes logo marks (inherit currentColor).
 *
 * @startingPoint section="Brand" subtitle="Hexaros & ivEyes logo marks" viewport="700x150"
 */
export function Logo(props: LogoProps): JSX.Element;
