import React from 'react';
import { ButtonControlProps } from './types';

export default function ButtonControl(props: ButtonControlProps) {
  const { type, id, className, children } = props;
  return (
    <button
      type={type}
      id={id}
      className={className}
      disabled={props.disabled}
      data-testid="submit"
    >
      {children}
    </button>
  );
}
