import React, { createRef } from 'react';
import { ButtonControlProps } from 'types/types';

export default class ButtonControl extends React.Component<ButtonControlProps> {
  button: React.RefObject<HTMLButtonElement>;
  constructor(props: ButtonControlProps) {
    super(props);
    this.disable = this.disable.bind(this);
    this.button = createRef();
  }
  disable(status: boolean) {
    if (this.button.current) {
      this.button.current.disabled = status;
    }
  }
  render() {
    const { type, id, className, children } = this.props;
    return (
      <button
        type={type}
        id={id}
        className={className}
        ref={this.button}
        disabled
        data-testid="submit"
      >
        {children}
      </button>
    );
  }
}
