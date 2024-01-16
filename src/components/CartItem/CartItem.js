import React from 'react';
import './CartItem.css';

import plus from './plus.svg';
import minus from './minus.svg';

const CartItem = ({ image, title, price, quantity, removeCartItem, updateQuantity }) => {

  const handleRemoveClick = () => {
    removeCartItem(title, price, quantity);
  };
  
  return (
    <div className='cart-item'>
      <img 
      alt={`product: ${title}`} 
      src={image} />
      <p className='font title-size'>{title}</p>
      <div className="quantity">
        <button 
        className="plus-btn" 
        type="button" 
        name="button"
        onClick={() => updateQuantity(title, 'increment')}
        >
          <img src={plus} alt="" />
        </button>
        <input type="text" name="name" value={quantity}/>
        <button 
        className="minus-btn" 
        type="button" 
        name="button"
        onClick={() => updateQuantity(title, 'decrement')}
        readOnly={true}
        >
          <img src={minus} alt="" />
        </button>
      </div>
      <p>Price: £{price}</p>
      <button 
        className='btn-remove' 
        onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
};

export default CartItem;