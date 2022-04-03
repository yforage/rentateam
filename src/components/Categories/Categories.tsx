import Categorie from 'components/Categorie';
import ProductsTabs from 'components/ProductsTabs';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const categoriesProducts = useSelector((state: RootState) => state.categories.categories);

  return (
    <>
      <ProductsTabs />
      <div className={styles.Categories}>
        {categoriesProducts.map(({ id, name, products }) => (
          <Categorie
            key={name}
            id={id}
            name={name}
            products={products}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(Categories);
