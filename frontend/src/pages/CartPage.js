// frontend/src/pages/CartPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Cart />
      </main>
    </div>
  );
};

export default CartPage;
