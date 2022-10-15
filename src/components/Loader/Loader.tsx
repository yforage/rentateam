import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.container}>
  <div className={styles.Loader} />
  </div>
);

export default React.memo(Loader);
