import classNames from 'classnames';
import Button from 'components/Button';
import MinusIcon from 'components/MinusIcon';
import PlusIcon from 'components/PlusIcon';
import React from 'react';

import styles from './HandleCount.module.scss';

type HandleCountProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  count: number;
  className?: string;
};

const HandleCount: React.FC<HandleCountProps> = ({
  onIncrease, onDecrease, count, className,
}) => (
  <div className={classNames(className, styles.HandleCount)}>
    <Button onClick={onDecrease} icon={<MinusIcon />} />
    {count}
    <Button onClick={onIncrease} icon={<PlusIcon />} />
  </div>
);

export default React.memo(HandleCount);
