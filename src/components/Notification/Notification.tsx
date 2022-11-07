import React from 'react';
import styles from './Notification.module.scss';
import { NotificationProps } from './types';

export default function Notification({ type, children }: NotificationProps) {
  return (
    <div className={`${styles.notification} ${styles['notification--' + type]}`}>{children}</div>
  );
}
