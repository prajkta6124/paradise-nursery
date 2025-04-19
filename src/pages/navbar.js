// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <div style={{ background: 'green', padding: '10px', color: 'white' }}>
      <h2 style={{ display: 'inline-block', marginRight: '20px' }}>Paradise Nursery</h2>
      <Link to="/cart" style={{ color: 'white' }}>
        🛒 Cart: {cartCount}
      </Link>
    </div>
  );
}

export default Navbar;
