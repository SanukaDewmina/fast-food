import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList';
import { Toaster } from 'react-hot-toast';
import PaymentOptionsPage from './Pages/PaymentOptionsPage ';
import DeliveryOptionsPage from './Pages/Delivery';
import ReviewOrderPage from './Pages/TrackOrder';



function App() {
  return (
   <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/payment" element={<PaymentOptionsPage />}/>
        <Route path="/delivery" element={<DeliveryOptionsPage />}/>
        <Route path="/trackOrder" element={<ReviewOrderPage />}/>
      </Routes>
 
   
   </>
  )
}

export default App