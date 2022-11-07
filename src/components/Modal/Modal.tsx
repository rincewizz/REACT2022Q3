import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from './types';

export function Modal({ close, children }: ModalProps) {
  const el = document.body as HTMLElement;

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={close} data-testid="modal">
      <div className={styles.modal__window} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal__title-bar']}>
          <button className={styles.modal__close} onClick={close}>
            ✖
          </button>
        </div>
        <div className={styles['modal__window-contant']}>{children}</div>
      </div>
    </div>,
    el
  );
}
