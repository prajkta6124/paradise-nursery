// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <img src={item.image} alt={item.name} width="50" />
              <strong>{item.name}</strong> - ${item.price} × {item.quantity}
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <div style={{ marginTop: '10px' }}>
            <Link to="/products"><button>Continue Shopping</button></Link>{' '}
            <Link to="/checkout"><button>Checkout</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
