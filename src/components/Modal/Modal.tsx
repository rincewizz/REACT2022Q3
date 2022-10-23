import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from './types';

export class Modal extends React.Component<ModalProps> {
  el: HTMLElement;
  constructor(props: ModalProps) {
    super(props);
    this.el = document.body;
  }

  render() {
    return ReactDOM.createPortal(
      <div className={styles.modal} onClick={this.props.close} data-testid="modal">
        <div className={styles.modal__window} onClick={(e) => e.stopPropagation()}>
          <div className={styles['modal__title-bar']}>
            <button className={styles.modal__close} onClick={this.props.close}>
              ✖
            </button>
          </div>
          <div className={styles['modal__window-contant']}>{this.props.children}</div>
        </div>
      </div>,
      this.el
    );
  }
}
