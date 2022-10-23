import React from 'react';
import { InputControlProps } from './types';
import styles from '../Form/Form.module.scss';

export default function InputControl(props: InputControlProps) {
  return (
    <div className="form-control-input">
      <label htmlFor={props.name}>
        {props.type !== 'checkbox' && props.label}
        {props.required && '*'}
        <input
          id={props.name}
          type={props.type}
          {...props.register(props.name, props.validationSchema)}
          className={props.type !== 'checkbox' ? styles.form__field : ''}
        />
        {props.type === 'checkbox' && props.label}
      </label>

      {props.errors && (
        <div className={styles.form__error}>{props.errors[props.name]?.message}</div>
      )}
    </div>
  );
}
