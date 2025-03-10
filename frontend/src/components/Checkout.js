// frontend/src/components/Checkout.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [error, setError] = useState(null);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = async () => {
    setPaymentProcessing(true);
    try {
      // Create a payment intent on the backend (amount in cents)
      const { data } = await axios.post('/api/payment/create-payment-intent', {
        amount: Math.round(totalAmount * 100),
      });
      // Use data.clientSecret with your payment library (e.g., Stripe) to complete payment
      console.log('Client Secret:', data.clientSecret);
      setPaymentProcessing(false);
      // You can then navigate to a payment confirmation page or update the UI accordingly
    } catch (err) {
      setError(err.response?.data.message || 'Payment failed');
      setPaymentProcessing(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleCheckout} disabled={paymentProcessing}>
        {paymentProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Checkout;
