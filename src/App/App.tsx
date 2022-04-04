import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <div className={styles.fullViewportHeight}>
      <Routes>
        <Route path='/' element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
