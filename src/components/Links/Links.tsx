import classNames from 'classnames';
import AppStoreIcon from 'components/AppStoreIcon';
import Button from 'components/Button';
import FacebookIcon from 'components/FacebookIcon';
import GooglePlayIcon from 'components/GooglePlayIcon';
import OkIcon from 'components/OkIcon';
import TwitterIcon from 'components/TwitterIcon';
import VkIcon from 'components/VkIcon';
import React from 'react';
import styles from './Links.module.scss';

type LinksProps = {
  className?: string;
};

const Links: React.FC<LinksProps> = ({ className }) => (
  <div className={classNames(styles.Links, className)}>
    <div className={styles.Links_left} />
    <div className={styles.Links_icons}>
      <Button icon={<VkIcon />} />
      <Button icon={<FacebookIcon />} />
      <Button icon={<TwitterIcon />} />
      <Button icon={<OkIcon />} />
    </div>
    <div className={styles.Links_stores}>
      <Button icon={<GooglePlayIcon />} />
      <Button icon={<AppStoreIcon />} />
    </div>
  </div>
);

export default React.memo(Links);
