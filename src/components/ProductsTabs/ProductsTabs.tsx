import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import classNames from 'classnames';
import Button from 'components/Button';
import styles from './ProductsTabs.module.scss';

const ProductsTabs: React.FC = () => {
  const selectedTab = useSelector((state: RootState) => state.categories.selected);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    const categorie = document.getElementById(`categorie-${id}`);
    categorie?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classNames(styles.ProductsTabs, 'content')}>
      {categories.map(({ id, name }) => (
        <Button
          value={id.toString()}
          onClick={handleScroll}
          className={classNames(
            styles.ProductsTabs_button,
            { [styles.ProductsTabs_selected]: selectedTab === id },
          )}
          key={id}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default React.memo(ProductsTabs);
