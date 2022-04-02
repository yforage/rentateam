import React from 'react';
import styles from './InfoSection.module.scss';

type InfoSectionProps = {
  data: {
    title: string;
    links: string[];
  }
};

const InfoSection: React.FC<InfoSectionProps> = ({ data: { title, links } }) => (
  <div className={styles.InfoSection}>
    <div className={styles.InfoSection_title}>{title}</div>
    {links.map((link) => <span key={link} className={styles.InfoSection_link}>{link}</span>)}
  </div>
);

export default React.memo(InfoSection);
