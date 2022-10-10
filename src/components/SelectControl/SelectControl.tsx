import React, { createRef } from 'react';
import { SelectControlProps } from 'types/types';

export default class SelectControl extends React.Component<SelectControlProps> {
  input: React.RefObject<HTMLSelectElement>;
  error: React.RefObject<HTMLDivElement>;
  _value: null | string;
  constructor(props: SelectControlProps) {
    super(props);
    this.input = createRef();
    this.error = createRef();
    this._value = null;
  }

  get value() {
    return this.input.current?.value;
  }

  render() {
    const { name, id, className } = this.props;
    return (
      <div>
        <select name={name} id={id} className={className} ref={this.input}>
          {this.props.children}
        </select>
        <div className="error" ref={this.error}></div>
      </div>
    );
  }
}
