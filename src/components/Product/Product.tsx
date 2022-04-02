import classNames from 'classnames';
import AddIcon from 'components/AddIcon';
import Button from 'components/Button';
import HandleCount from 'components/HandleCount';
import Sticker from 'components/Sticker';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from 'store/cart/cartSlice';
import { PickupOptions } from 'store/pickup/pickupSlice';
import { IProduct } from 'store/products/types';
import { RootState } from 'store/rootReducer';
import styles from './Product.module.scss';

type ProductProps = {
  product: IProduct;
  className?: string;
};

const Product: React.FC<ProductProps> = ({ className, product }) => {
  const {
    name, price, delivery, img, newProduct, hit,
  } = product;

  const isDelivery = useSelector((state: RootState) => state.pickup === PickupOptions.delivery);
  const inCartCount = useSelector((state: RootState) => state.cart.reduce((acc, curr) => {
    if (curr.id === product.id) acc += 1;
    return acc;
  }, 0));

  const isAdd = inCartCount === 0;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  if (isDelivery && !delivery) return null;

  return (
    <div className={classNames(styles.Product, className)}>
      <div className={styles.Product_image}>
        <img className={styles.Product_image_src} src={img} alt={product.name} loading="lazy" />
        {hit && <Sticker className={styles.Product_sticker} type="hit" />}
        {newProduct && <Sticker className={styles.Product_sticker} type="new" />}
        {isAdd && (
        <Button
          className={classNames(styles.Product_add, styles.Product_add_first)}
          onClick={handleAdd}
          icon={<AddIcon />}
        />
        )}
        {!isAdd && (
        <HandleCount
          className={styles.Product_add}
          onIncrease={handleAdd}
          onDecrease={handleRemove}
          count={inCartCount}
        />
        )}
      </div>
      <span className={styles.Product_name}>{name}</span>
      <span className={styles.Product_price}>
        {price}
        {' '}
        ₽
      </span>
    </div>
  );
};

export default React.memo(Product);
