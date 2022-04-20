import Categories from 'components/Categories';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'store/categories/categoriesSlice';
import { getProducts } from 'store/products/productsSlice';

const OrderPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
};

export default React.memo(OrderPage);
