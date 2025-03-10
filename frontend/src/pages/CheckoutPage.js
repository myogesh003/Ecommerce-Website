// frontend/src/pages/CheckoutPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Checkout />
      </main>
    </div>
  );
};

export default CheckoutPage;
