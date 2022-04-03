import classNames from 'classnames';
import Address from 'components/Address';
import Button from 'components/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCart } from 'store/cart/cartSlice';
import { PickupOptions, selectPickup } from 'store/pickup/pickupSlice';
import { RootState } from 'store/rootReducer';
import styles from './Delivery.module.scss';

const Delivery: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPickup = useSelector((state: RootState) => state.pickup);
  const isDelivery = useSelector((state: RootState) => state.pickup === PickupOptions.delivery);

  const handleClick = (value: PickupOptions) => {
    dispatch(selectPickup(value));
    dispatch(filterCart(value));
  };

  return (
    <div className={styles.Delivery}>
      <div className={styles.Delivery_header}>
        <div>
          {isDelivery ? 'For delivery Moscow' : 'Click & Collect'}
        </div>
        <div className={styles.Delivery_header_selector}>
          <Button
            onClick={() => handleClick(PickupOptions.delivery)}
            className={classNames(
              styles.Delivery_header_selector_button,
              { [styles.Delivery_header_selector_selected]: selectedPickup === PickupOptions.delivery },
            )}
          >
            Delivery
          </Button>
          <Button
            onClick={() => handleClick(PickupOptions.pickup)}
            className={classNames(
              styles.Delivery_header_selector_button,
              { [styles.Delivery_header_selector_selected]: selectedPickup === PickupOptions.pickup },
            )}
          >
            Restaraunt
          </Button>
        </div>
      </div>
      {isDelivery && (<Address />)}
    </div>
  );
};

export default React.memo(Delivery);
