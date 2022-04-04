import classNames from 'classnames';
import BrandIcon from 'components/BrandIcon';
import InfoSection from 'components/InfoSection';
import Links from 'components/Links';
import Logo from 'components/Logo';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';


type FooterInfo = {
  title: string;
  links: string[];
}

const data: FooterInfo[] = require('./data.json');

const Footer: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleSizeChange);
    return () => window.removeEventListener('resize', handleSizeChange);
  }, []);

  const isDesktop = width > 1000;
  const iconIndex = data.length / 2;

  return (
    <div className={classNames(styles.Footer, 'content')}>
      <div className={styles.Footer_stripes}>
        <div className={styles.Footer_stripes_block} />
        <div className={styles.Footer_stripes_block} />
        <div className={styles.Footer_stripes_block} />
        <div className={styles.Footer_stripes_block} />
        <div className={styles.Footer_stripes_block} />
      </div>
      <div className={styles.Footer_info}>
        {data.map((json: FooterInfo, index) => (
          <React.Fragment key={json.title}>
            {index === iconIndex && isDesktop && <Logo icon={<BrandIcon />} />}
            <InfoSection data={json} />
          </React.Fragment>
        ))}
      </div>
      <Links className={styles.Footer_links} />
    </div>
  );
};

export default React.memo(Footer);
