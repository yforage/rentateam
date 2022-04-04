import React from 'react';

import styles from './App.module.scss';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <div className={styles.fullViewportHeight}>
      <OrderPage />
    </div>
  );
}

export default App;
