import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from './types';

export function Modal(props: ModalProps) {
  const el = document.getElementById('modal-root') as HTMLDivElement;

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={props.close} data-testid="modal">
      <div className={styles.modal__window} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal__title-bar']}>
          <button className={styles.modal__close} onClick={props.close}>
            ✖
          </button>
        </div>
        <div className={styles['modal__window-contant']}>{props.children}</div>
      </div>
    </div>,
    el
  );
}
