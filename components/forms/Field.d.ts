import * as React from 'react';

export interface FieldOption { value: string; label: string; }

export interface FieldProps {
  /** Mono uppercase label text. */
  label?: React.ReactNode;
  /** Control type. `text` (or any input type), `email`, `select`, `textarea`. */
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  /** Options for `select` (strings or {value,label}). */
  options?: (string | FieldOption)[];
  /** Span the full width of a two-column form grid. */
  full?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler;
  children?: React.ReactNode;
}

/** Labelled input / select / textarea matching the contact form. */
export function Field(props: FieldProps): JSX.Element;
