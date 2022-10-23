import React from 'react';
import styles from '../Form/Form.module.scss';
import { SelectControlProps } from './types';

export default function SelectControl(props: SelectControlProps) {
  return (
    <div className="form-control-input">
      <label htmlFor={props.name}>
        {props.label}
        {props.required && '*'}
        <select
          id={props.name}
          {...props.register(props.name, props.validationSchema)}
          className={styles.form__field}
        >
          {props.children}
        </select>
      </label>

      {props.errors && (
        <div className={styles.form__error}>{props.errors[props.name]?.message}</div>
      )}
    </div>
  );
}
