import React from 'react';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__ripple}>
        <div></div>
        <div></div>
      </div>
      Loading...
    </div>
  );
}
