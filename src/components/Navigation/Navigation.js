import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// import profile from '../../assets/profile.png';
import cart from '../../assets/cart.png';

const Navigation = ({ showCart, setShowCart, cartItems }) => {
  const cartCount = cartItems.length;
  return (
      <nav className="nav main-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/store">STORE</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <div className='nav-user'>
            {/* <button
            className='profile-btn'
            type='button'
            name='button'
            onClick={null}>
              <img className='profile' src={profile} alt='profile'/>
            </button> */}
            <div>
              <button
              className='cart-btn'
              type='button'
              name='button'
              onClick={() => setShowCart(!showCart)}>
                <img id='cart-icon' src={cart} alt='cart'/>
                {cartItems.length > 0 && (
                <span className='cart-number' id='cart-number'>
                {cartCount}
                </span>
                )}
              </button>
            </div>
          </div>
        </ul>
      </nav>
  );
};

export default Navigation;