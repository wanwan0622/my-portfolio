import React from 'react';
import styles from '../styles/Title.module.css'

const Title = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>Ayari Takezawa's</h2>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <p className={styles.details}>竹澤彩里のポートフォリオです♡</p>
    </div>
  );
};

export default Title;