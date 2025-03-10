// frontend/src/pages/ProductPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <ProductDetail />
      </main>
    </div>
  );
};

export default ProductPage;
