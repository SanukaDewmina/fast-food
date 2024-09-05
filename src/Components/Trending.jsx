import React, { useContext, useEffect } from 'react';
import TrendingCard from './TrendingCard';
import { shopcontext } from '../ContextApi';

function Trending() {
  const { foods,trendingFoods, SetWishList, wishlist ,cart,setCart} = useContext(shopcontext);


  // add to wish list function

  function handlAddToWish(index) {
    const beforeAddTowish = trendingFoods.find(item => item.id === index);
    const alreadyIn = wishlist.some(item => item.id === index);

    if (alreadyIn) {
      // Remove item from wishlist if already exists
      SetWishList(prevWishlist => prevWishlist.filter(item => item.id !== index));
    } else {
      // Add item to wishlist if it doesn't exist
      SetWishList(prevWishlist => [...prevWishlist, beforeAddTowish]);
    }
  }



  // add to cart trending items

   function handleMenuAddToCart(id) {
    const item = trendingFoods.find(item => item.id === id);
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
    <>
      <div className='flex gap-[20px] md:justify-around overflow-x-scroll px-[30px] tr-scrl'>
        {trendingFoods.slice(0, 4).map(item => (
          <TrendingCard
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            hdladtowish={handlAddToWish}
            hndAddToCart={handleMenuAddToCart}
            id={item.id}
            isWished={wishlist.some(wishItem => wishItem.id === item.id)}
          />
        ))}
      </div>
      <div className='flex gap-[20px] md:justify-around overflow-x-scroll mt-[10vh] px-[20px] tr-scrl'>
        {trendingFoods.slice(4, 8).map(item => (
          <TrendingCard
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            hdladtowish={handlAddToWish}
            hndAddToCart={handleMenuAddToCart}
            id={item.id}
            isWished={wishlist.some(wishItem => wishItem.id === item.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Trending;
