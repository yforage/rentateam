import React from 'react';

import Categories from 'components/Categories';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.fullViewportHeight}>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
