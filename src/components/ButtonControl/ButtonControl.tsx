import React from 'react';
import { ButtonControlProps } from './types';

export default function ButtonControl({
  type,
  id,
  className,
  children,
  disabled,
}: ButtonControlProps) {
  return (
    <button type={type} id={id} className={className} disabled={disabled} data-testid="submit">
      {children}
    </button>
  );
}
