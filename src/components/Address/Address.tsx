import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from 'store/cart/cartSlice';
import { RootState } from 'store/rootReducer';
import styles from './Address.module.scss';

const Address: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const [address, setAddress] = useState({ street: '', house: '' });
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleClick = useCallback(() => {
    if (isSubmit) setSubmit(false);
  }, [isSubmit]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    if (!cart.length || !address.street || !address.house) return;
    const order = {
      address,
      products: cart,
    };
    dispatch(sendOrder(order));
  }, [cart, address]);

  return (
    <form onSubmit={handleSubmit} id="address-form" className={styles.Address}>
      <div className={styles.Address_field}>
        <label htmlFor="street" className={styles.Address_field_name}>
          Street
          <input
            type="text"
            className={styles.Address_field_input}
            placeholder="Ostozhenka"
            onChange={handleChange}
            onFocus={handleClick}
            name="street"
          />
        </label>
        {isSubmit && !address.street && (
          <div className={styles.Tooltip}>
            Required for delivery
          </div>
        )}
      </div>
      <div className={styles.Address_field}>
        <label htmlFor="house" className={styles.Address_field_name}>
          House
          <input
            type="text"
            className={styles.Address_field_input}
            placeholder="2"
            onChange={handleChange}
            onFocus={handleClick}
            name="house"
          />

        </label>
        {isSubmit && address.street && !address.house
        && (
        <div className={styles.Tooltip}>
          Required for delivery
        </div>
        )}
      </div>
    </form>
  );
};

export default React.memo(Address);
