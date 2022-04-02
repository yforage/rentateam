import React from 'react';
import styles from './Logo.module.scss';

type LogoProps = {
  src?: string;
  icon?: React.ReactNode;
};

const Logo: React.FC<LogoProps> = ({ src, icon }) => (
  <div className={styles.Logo}>
    {src && <img className={styles.Logo_image} src={src} alt="logo" />}
    {icon}
  </div>
);

export default React.memo(Logo);
