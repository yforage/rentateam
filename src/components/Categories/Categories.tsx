import Categorie from 'components/Categorie';
import ProductsTabs from 'components/ProductsTabs';
import React from 'react';
import { useSelector } from 'react-redux';
import { PickupOptions } from 'store/pickup/pickupSlice';
import { RootState } from 'store/rootReducer';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const categoriesProducts = useSelector((state: RootState) => state.categories.categories);

  const isDelivery = useSelector((state: RootState) => state.pickup === PickupOptions.delivery);
  const allProducts = useSelector((state: RootState) => state.products);

  return (
    <>
      <ProductsTabs />
      <div className={styles.Categories}>
        {categoriesProducts.map(({ id, name, products }) => {
          const availableProducts = products.filter((id) => isDelivery ? allProducts[id].delivery === true : true);
          if (!availableProducts.length) return;
          return (
          <Categorie
            key={`categorie-${id}`}
            id={id}
            name={name}
            products={products}
          />
        )})}
      </div>
    </>
  );
};

export default React.memo(Categories);
