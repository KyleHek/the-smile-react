import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ showCart, setShowCart, cartItems }) => {
  const cartCount = cartItems.length;
  return (
      <nav className="nav main-nav">
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/store">STORE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li>
          <button 
          className='cart-button'
          onClick={() => setShowCart(!showCart)}>
            CART (<span id="cart-number">{cartCount}</span>)
          </button>
        </li>
        </ul>
      </nav>
  );
};

export default Navigation;