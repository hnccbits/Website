import React from 'react';
import styles from './index.module.css';

function AnimatedScrollButton({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mouse} onClick={onClick}>
        <div className={styles.cursor} />
      </div>
      <p className="text-lg">scroll down</p>
    </div>
  );
}

export default AnimatedScrollButton;
