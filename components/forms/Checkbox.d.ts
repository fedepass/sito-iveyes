import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Inline label content shown beside the box. */
  children?: React.ReactNode;
}

/** Custom checkbox with inline label (e.g. GDPR consent). */
export function Checkbox(props: CheckboxProps): JSX.Element;
