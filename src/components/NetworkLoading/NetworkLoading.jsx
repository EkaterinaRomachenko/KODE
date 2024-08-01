import React from 'react';
import styles from './networkLoading.module.css';

function NetworkLoading() {
  return (
    <div className={styles.networkLoading}>
      <h2 className={styles.title}>Поиск</h2>
      <p className={styles.text}>Секундочку, гружусь...</p>
    </div>
  );
}

export default NetworkLoading;
