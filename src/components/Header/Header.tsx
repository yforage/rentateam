import Cart from 'components/Cart';
import Button from 'components/Button';
import Delivery from 'components/Delivery';
import DrawerIcon from 'components/DrawerIcon';
import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <div className={classNames(styles.Header, 'content')}>
    <div className={styles.Header_top}>
      <Button icon={<DrawerIcon />} />
      <Cart />
    </div>
    <Delivery />
  </div>
);

export default React.memo(Header);
