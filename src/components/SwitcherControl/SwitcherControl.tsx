import React from 'react';
import styles from '../Form/Form.module.scss';
import { SwitcherControlProps } from './types';

export default function SwitcherControl(props: SwitcherControlProps) {
  return (
    <div className="form-control-input">
      <label htmlFor={props.name}>
        {props.label}
        {props.required && '*'}

        <div className={styles['form__switcher-field']}>
          <input
            type="radio"
            id={props.name + '_yes'}
            className={styles['form__switcher-element']}
            value="yes"
            data-testid={`input-switcher-yes-${props.name}`}
            {...props.register(props.name, props.validationSchema)}
          />
          <label htmlFor={props.name + '_yes'} className={styles['form__switcher-label']}>
            Yes
          </label>
          <input
            type="radio"
            id={props.name + '_no'}
            className={styles['form__switcher-element']}
            value="no"
            data-testid={`input-switcher-no-${props.name}`}
            {...props.register(props.name, props.validationSchema)}
          />
          <label htmlFor={props.name + '_no'} className={styles['form__switcher-label']}>
            No
          </label>
        </div>
      </label>

      {props.errors && (
        <div className={styles.form__error}>{props.errors[props.name]?.message}</div>
      )}
    </div>
  );
}
