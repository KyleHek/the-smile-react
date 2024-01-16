import React from 'react';
import './ShopSection.css';
import ShopItem from '../ShopItem/ShopItem.js';

const ShopSection = ({ sectionTitle, items, addToCart }) => {
  return (
    <section className="center container content-section">
      <h2 className="section-header">{sectionTitle}</h2>
      <div className="shop-items">
        {items.map((item) => (
          <ShopItem key={item.title} item={item} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ShopSection;