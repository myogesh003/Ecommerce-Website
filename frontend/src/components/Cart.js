// frontend/src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go Back</Link>
        </p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
              <img src={item.image} alt={item.name} width="50" />
              <Link to={`/product/${item._id}`}>{item.name}</Link>
              <p>${item.price}</p>
              <p>Qty: {item.qty}</p>
              <button onClick={() => removeHandler(item._id)}>Remove</button>
            </div>
          ))}
          <div style={{ marginTop: '2rem' }}>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
            </h2>
            <p>
              Total: $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)}
            </p>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
