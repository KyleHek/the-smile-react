import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Checkout.css';

const Checkout = ({ cartItems, calculateTotal, removeCartItem, updateQuantity, purchaseItems }) => {
    const hasItems = cartItems.length > 0;
    const total = calculateTotal();

    return (
        <section className="center content-section container">
            <h2 className="section-header">Checkout</h2>
            {!hasItems && (
                    <div className='empty-basket'>
                        <span>Your Basket is Empty</span>
                    </div>
            )}
            <div className='checkout-items'>
                {cartItems.map((item, index) => (
                    <div>
                        <CartItem
                            key={item.title}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            quantity={item.quantity}
                            updateQuantity={updateQuantity}
                            removeCartItem={removeCartItem}
                        />
                        {index !== cartItems.length - 1 && <hr />}
                    </div>
                ))}
            </div>
            {hasItems && (
                <div className='purchase-section'>
                    <span>Total: £{total.toFixed(2)}</span>
                    <button 
                    className='btn btn-primary'
                    onClick={purchaseItems}>
                        Purchase
                    </button>
                </div>
            )}
        </section>
    );
  };
  
  export default Checkout;