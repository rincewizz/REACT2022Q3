import React, { createRef } from 'react';
import { InputControlProps } from 'types/types';
import styles from '../Form/Form.module.scss';

export default class InputControl extends React.Component<InputControlProps> {
  input: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLDivElement>;
  _value: null | string;
  constructor(props: InputControlProps) {
    super(props);
    this.input = createRef();
    this.error = createRef();
    this.change = this.change.bind(this);
    this._value = null;
  }

  get value() {
    if (this.props.type === 'switcher') {
      return this._value;
    }
    return this.input.current?.value;
  }

  change(e: React.ChangeEvent<HTMLInputElement>) {
    this._value = e.currentTarget.value;
    if (this.error.current) {
      this.error.current.innerText = '';
    }
    if (this.props.onChangeInputControll) {
      this.props.onChangeInputControll(this);
    }
  }
  validate(fn: (value: string | boolean) => string | undefined): boolean {
    if (this.input.current && this.error.current) {
      let errorMsg;
      if (this.props.type === 'checkbox') {
        errorMsg = fn(this.input.current.checked);
      } else if (this.props.type === 'switcher') {
        errorMsg = fn(this.value ?? '');
      } else if (this.props.type === 'file') {
        errorMsg = fn(!!this.input.current.files?.length);
      } else {
        errorMsg = fn(this.input.current.value);
      }
      this.error.current.innerText = errorMsg ?? '';
      if (!errorMsg) {
        return true;
      }
    }
    return false;
  }
  render() {
    const { type, name, id, className, description } = this.props;
    if (type === 'switcher') {
      return (
        <div>
          <div className={styles['form__switcher-field']}>
            <input
              type="radio"
              name={name}
              id={id + '_yes'}
              className={styles['form__switcher-element']}
              onChange={this.change}
              ref={this.input}
              value="yes"
              data-testid={`input-switcher-yes-${name}`}
            />
            <label htmlFor={id + '_yes'} className={styles['form__switcher-label']}>
              Yes
            </label>
            <input
              type="radio"
              name={name}
              id={id + '_no'}
              className={styles['form__switcher-element']}
              onChange={this.change}
              ref={this.input}
              value="no"
              data-testid={`input-switcher-no-${name}`}
            />
            <label htmlFor={id + '_no'} className={styles['form__switcher-label']}>
              No
            </label>
          </div>
          <div className={styles.form__error} ref={this.error}></div>
        </div>
      );
    } else {
      return (
        <div>
          <input
            type={type}
            name={name}
            id={id}
            className={className}
            onChange={this.change}
            ref={this.input}
            data-testid={`input-${name}`}
          />
          {description}
          <div className={styles.form__error} ref={this.error} data-testid={`error-${name}`}></div>
        </div>
      );
    }
  }
}
