// frontend/src/pages/Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <ProductList />
      </main>
    </div>
  );
};

export default Home;
