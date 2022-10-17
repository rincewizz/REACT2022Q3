import React from 'react';
import styles from './Notification.module.scss';
import { NotificationProps } from './types';

export default class Notification extends React.Component<NotificationProps> {
  render() {
    return <div className={styles[this.props.type]}>{this.props.children}</div>;
  }
}
