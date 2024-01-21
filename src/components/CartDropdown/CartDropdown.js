import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem.js';
import './CartDropdown.css'

const CartDropdown = ({ cartItems, total, removeCartItem, closeCart, updateQuantity }) => {
  const hasItems = cartItems.length > 0;
    return (
      <div className="cart-dropdown">
        {!hasItems && (
          <div className='empty-basket'>
            <span>Your Basket is Empty</span>
          </div>
        )}
        <div className='cart-items scroll'>
          {cartItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <CartItem
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                updateQuantity={updateQuantity}
                removeCartItem={removeCartItem}
              />
              {index !== cartItems.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
        <div className='total-position'>
          <span>Total: £{total.toFixed(2)}</span>
          <button 
            className="btn btn-primary cart-btn"
            onClick={closeCart}>
            <Link className='no-dec' to="/checkout">CHECKOUT</Link>
          </button>
        </div>
      </div>
    );
  };
  
export default CartDropdown;