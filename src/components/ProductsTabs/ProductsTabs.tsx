import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import classNames from 'classnames';
import Button from 'components/Button';
import { PickupOptions } from 'store/pickup/pickupSlice';
import styles from './ProductsTabs.module.scss';

const ProductsTabs: React.FC = () => {
  const selectedTab = useSelector((state: RootState) => state.categories.selected);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const isDelivery = useSelector((state: RootState) => state.pickup === PickupOptions.delivery);
  const allProducts = useSelector((state: RootState) => state.products);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    const categorie = document.getElementById(`categorie-${id}`);
    categorie?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!categories.length) return null;

  return (
    <div className={classNames(styles.ProductsTabs, 'content')}>
      {categories.map(({ id, name, products }) => {
        const availableProducts = products.filter(
          (productId) => (isDelivery ? allProducts[productId]?.delivery === true : true),
        );
        if (!availableProducts.length) return null;
        return (
          <Button
            value={id.toString()}
            onClick={handleScroll}
            className={classNames(
              styles.ProductsTabs_button,
              { [styles.ProductsTabs_selected]: selectedTab === id },
            )}
            key={`product-tab-${id}`}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default React.memo(ProductsTabs);
