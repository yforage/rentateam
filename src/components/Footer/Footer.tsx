import classNames from 'classnames';
import BrandIcon from 'components/BrandIcon';
import InfoSection from 'components/InfoSection';
import Links from 'components/Links';
import Logo from 'components/Logo';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';

const data = require('./data.json');

const Footer: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleSizeChange);
    return () => window.removeEventListener('resize', handleSizeChange);
  }, []);

  const isDesktop = width > 1000;

  return (
    <div className={classNames(styles.Footer, 'content')}>
      <div className={styles.Footer_info}>
        <InfoSection data={data[0]} />
        <InfoSection data={data[1]} />
        {isDesktop && <Logo icon={<BrandIcon />} />}
        <InfoSection data={data[2]} />
        <InfoSection data={data[3]} />
      </div>
      <Links className={styles.Footer_links} />
    </div>
  );
};

export default React.memo(Footer);
