// pages/CheckoutPage.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <h3>Order Summary:</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity} = ${item.price * item.quantity}
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
