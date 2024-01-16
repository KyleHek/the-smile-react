import React from 'react';
import './ShopItem.css';

const ShopItem = ({ item, addToCart }) => {
  const {title, image, price } = item;
  return (
    <div className="shop-item">
      <span className="shop-item-title">{title}</span>
      <img className="shop-item-image grow" src={image} alt={title} />
      <div className="shop-item-details">
        <span className="shop-item-price">{`£${price}.00`}</span>
        <button onClick={() => addToCart(item)} className="btn btn-primary shop-item-button" >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShopItem;