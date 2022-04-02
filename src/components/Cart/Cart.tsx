import BasketIcon from 'components/BasketIcon';
import Button from 'components/Button';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const isDelivery = useSelector((state: RootState) => state.pickup);

  const cartCost = cart
    .filter((product) => (isDelivery ? product.delivery : true))
    .reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);

  return (
    <Button form="address-form" type="submit" icon={<BasketIcon />} className={styles.Cart}>
      {cartCost}
      {' '}
      ₽
    </Button>
  );
};

export default React.memo(Cart);
