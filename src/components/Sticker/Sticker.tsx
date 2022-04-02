import classNames from 'classnames';
import React from 'react';
import styles from './Sticker.module.scss';

type StickerProps = {
  className?: string;
  type: 'hit' | 'new';
};

const Sticker: React.FC<StickerProps> = ({ className, type }) => {
  const text = {
    hit: 'Хит',
    new: 'Новое',
  };

  const classes = classNames(className, styles.Sticker, styles[type]);

  return (
    <div className={classes}>
      {text[type]}
    </div>
  );
};

export default React.memo(Sticker);
