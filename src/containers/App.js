import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from '../components/Navigation/Navigation.js';
import CartDropdown from '../components/CartDropdown/CartDropdown.js';
import Backdrop from '../components/Backdrop/Backdrop.js';
import Banner from '../components/Banner/Banner.js';
import ToursSection from '../components/ToursSection/ToursSection.js';
import ShopSection from '../components/ShopSection/ShopSection.js';
import Checkout from '../components/Checkout/Checkout.js';
import AboutSection from '../components/AboutSection/AboutSection.js';
import Footer from '../components/Footer/Footer.js';
import './App.css';

import BlackVinyl from '../assets/blackvinyl.webp';
import YellowVinyl from '../assets/yellowvinyl.webp';
import Digital from '../assets/digital.webp';
import CD from '../assets/cd.webp';
import BlackTShirt from '../assets/blacktshirt.webp';
import HexTShirt from '../assets/hextshirt.webp';
import GreyTShirt from '../assets/greytshirt.webp';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
          toast.error('Cannot decrease quantity past 1. Please click X to remove.');
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

  //use simple server and database to grab shop items
  const musicItems = [
    { title: 'YELLOW 2LP', image: YellowVinyl, price: 28 },
    { title: 'BLACK 2LP', image: BlackVinyl, price: 25 },
    { title: 'CD', image: CD, price: 10 },
    { title: 'DIGITAL', image: Digital, price: 8 },
    // Add more items as needed
  ];

  const merchItems = [
    { title: 'BLACK T-SHIRT', image: BlackTShirt, price: 30 },
    { title: 'HEX T-SHIRT', image: HexTShirt, price: 30 },
    { title: 'GREY T-SHIRT', image: GreyTShirt, price: 30 },
    // Add more items as needed
  ];

  return (
    <Router basename='/the-smile-react'>
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
          <Route path='/checkout' element={<Checkout cartItems={cartItems} calculateTotal={calculateTotal} updateQuantity={updateQuantity} removeCartItem={removeCartItem}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
