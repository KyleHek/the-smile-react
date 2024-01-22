import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from '../components/Navigation/Navigation.js';
import CartDropdown from '../components/CartDropdown/CartDropdown.js';
import Backdrop from '../components/Backdrop/Backdrop.js';
import Banner from '../components/Banner/Banner.js';
import ToursSection from '../components/ToursSection/ToursSection.js';
import ShopSection from '../components/ShopSection/ShopSection.js';
import Checkout from '../components/Checkout/Checkout.js';
import SuccessSection from '../components/SuccessSection/SuccessSection.js';
import CancelSection from '../components/CancelSection/CancelSection.js';
import AboutSection from '../components/AboutSection/AboutSection.js';
import Footer from '../components/Footer/Footer.js';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return storedCartItems;
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const closeCart = () => {
    setShowCart(false);
  };

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (title, operation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === title) {
        if (operation === 'decrement' && item.quantity === 1) {
          // Show an error message using react-toastify
          toast.error('Cannot decrease quantity below 1. Please click X to remove.');
          return item;
        }
        return {
          ...item,
          quantity: operation === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (title, price, quantity) => {
    const updatedCart = cartItems.filter(
      (item) => item.title !== title || item.price !== price 
      // this code stops the remove button from removing cart items with quantities more than 1
      // || item.quantity !== quantity
    );
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const purchaseItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!cartItems || cartItems.length === 0) {
      // handle empty cart
      console.log('Cart is empty');
      return;
    }

    fetch('https://the-smile-api.onrender.com/stripe-checkout', {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/Json'}),
      body: JSON.stringify({
        items: cartItems,
      }),
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        const checkoutUrl = response.checkoutUrl;
        // Redirect to checkoutUrl
        window.location.href = checkoutUrl;
      } else {
        console.error('error creating Checkout session:', response.error);
      }
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    const handleSuccessRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('success')) {
        // Clear local storage and update state on successful payment
        localStorage.removeItem('cartItems');
        setCartItems([]); // Assuming you have a state setter function for cartItems
      }
    };
    
    handleSuccessRedirect();

    // Attach the event listener
    window.addEventListener('popstate', handleSuccessRedirect);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handleSuccessRedirect);
    };
  }, [setCartItems]);

  // grabbing shop items and images
  const musicItems = [
    { title: 'YELLOW 2LP', image: 'https://i.ibb.co/dDpbKGx/yellowvinyl.webp', price: 28 },
    { title: 'BLACK 2LP', image: 'https://i.ibb.co/H7SL1pB/blackvinyl.webp', price: 25 },
    { title: 'CD', image: 'https://i.ibb.co/8MgzjsJ/cd.webp', price: 10 },
    { title: 'DIGITAL', image: 'https://i.ibb.co/S0mCNYP/digital.webp', price: 8 },
  ];

  const merchItems = [
    { title: 'BLACK T-SHIRT', image: 'https://i.ibb.co/18S5pth/blacktshirt.webp', price: 30 },
    { title: 'HEX T-SHIRT', image: 'https://i.ibb.co/zhwM0xF/hextshirt.webp', price: 30 },
    { title: 'GREY T-SHIRT', image: 'https://i.ibb.co/TwNyZgc/greytshirt.webp', price: 30 },
  ];

  return (
      <div className="App">
        <ToastContainer className="custom-toast-container"/>
        {showCart && <Backdrop onClick={() => setShowCart(false)} />} 
        <Navigation showCart={showCart} setShowCart={setShowCart} cartItems={cartItems}/>
        {showCart && (
          <CartDropdown 
          cartItems={cartItems} 
          total={calculateTotal()}
          updateQuantity={updateQuantity}
          removeCartItem={removeCartItem}
          closeCart={closeCart}
          />
        )}
        <Banner />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ToursSection />} />
          <Route path="/store" element={
            <>
              <ShopSection sectionTitle="MUSIC" items={musicItems} addToCart={addToCart}/>
              <ShopSection sectionTitle="MERCH" items={merchItems} addToCart={addToCart}/>
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path='/checkout' element={<Checkout cartItems={cartItems} calculateTotal={calculateTotal} updateQuantity={updateQuantity} removeCartItem={removeCartItem} purchaseItems={purchaseItems}/>} />
          <Route path='/success' element={<SuccessSection />} />
          <Route path='/cancel' element={<CancelSection />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
