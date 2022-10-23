import React from 'react';
import styles from './Notification.module.scss';
import { NotificationProps } from './types';

export default function Notification(props: NotificationProps) {
  return <div className={styles[props.type]}>{props.children}</div>;
}
