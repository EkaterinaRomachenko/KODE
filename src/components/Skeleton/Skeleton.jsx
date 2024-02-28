import React from 'react';
import styles from './skeleton.module.css';

function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__avatar}></div>
      <div className={styles.skeleton__wrapper}>
        <div className={styles.skeleton__title}></div>
        <div className={styles.skeleton__text}></div>
      </div>
    </div>
  );
}

export default Skeleton;
