import classNames from 'classnames';
import Product from 'components/Product';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategorie } from 'store/categories/categoriesSlice';
import { ICategorie } from 'store/categories/types';
import { PickupOptions } from 'store/pickup/pickupSlice';
import { RootState } from 'store/rootReducer';
import useOnScreen from 'utils/useOnScreen';
import styles from './Categorie.module.scss';

const Categorie: React.FC<ICategorie> = ({ id, name, products }) => {
  const categorieId = `categorie-${id.toString()}`;
  const allProducts = useSelector((state: RootState) => state.products);

  const isDelivery = useSelector((state: RootState) => state.pickup === PickupOptions.delivery);

  const currentProducts = allProducts
    .filter((product) => products.includes(product.id))
    .filter((product) => (isDelivery ? product?.delivery === true : true));

  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-47px');

  useEffect(() => {
    if (isVisible) {
      dispatch(selectCategorie(id));
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      id={categorieId}
      className={classNames(styles.Categorie, 'content')}
    >
      <span className={styles.Categorie_title}>{name}</span>
      <div>
        <div className={styles.Categorie_products}>
          {currentProducts.map((product) => (
            <Product
              className={styles.Categorie_products_item}
              key={`product-${product.id}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Categorie);
