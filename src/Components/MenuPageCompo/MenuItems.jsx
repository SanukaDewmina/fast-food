import React, { useContext, useEffect, useState } from 'react';
import MenuItemCard from './MenuItemCard';
import { shopcontext } from '../../ContextApi';

function MenuItems() {
  const { foods, selected, wishlist, SetWishList, cart, setCart } = useContext(shopcontext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(foods.filter(itm => itm.type.toLowerCase().includes(selected.toLowerCase())));
  }, [selected, foods]);

  function handleMenuWishList(id) {
    const item = foods.find(item => item.id === id);
    const isItemExists = wishlist.some(item => item.id === id);

    if (isItemExists) {
      SetWishList(prevWishlist => prevWishlist.filter(item => item.id !== id));
    } else {
      SetWishList(prevWishlist => [...prevWishlist, item]);
    }
  }

  // Menu add to cart
  function handleMenuAddToCart(id) {
    const item = foods.find(item => item.id === id);
    const alreadyInCart = cart.find(cartItem => cartItem.id === id);

    if (alreadyInCart) {
      // Update quantity
      setCart(prevCart => prevCart.map(cartItem => 
        cartItem.id === id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
      ));
    } else {
      // Add new item to cart
      setCart(prevCart => [...prevCart, { ...item, amount: 1 }]);
    }
  }

  

  return (
    <div className='grid items-center grid-cols-1 gap-[20px] justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen py-[10vh]'>
      {category.map(item => (
        <MenuItemCard
          key={item.id}
          name={item.name}
          img={item.image}
          dtl={item.details}
          price={item.price}
          id={item.id}
          isWished={wishlist.some(wishItem => wishItem.id === item.id)} // Pass the wished status
          hndlmenuwish={handleMenuWishList}
          hndAddToCart={handleMenuAddToCart}
        />
      ))}
    </div>
  );
}

export default MenuItems;
