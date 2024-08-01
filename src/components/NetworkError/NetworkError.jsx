import React from 'react';
import styles from './networkError.module.css';

function NetworkError() {
  return (
    <div className={styles.networkError}>
      <h2 className={styles.title}>Поиск</h2>
      <p className={styles.text}>Не могу обновить данные. Проверь соединение с интернетом.</p>
    </div>
  );
}

export default NetworkError;
