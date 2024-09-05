import { createContext, useState } from "react";
import {foods,menuIcons,slider,trendingFoods,otherImgs} from "../src/data.js"


export const shopcontext = createContext();

const ContextProvider = (props)=>{

  // navbar scroll

  const [navbarscroll,setNavbarScroll] = useState(false);
  

  // wishlist add

  const [wishlist,SetWishList] = useState([]);


  // addtocart add

  const [cart ,setCart] = useState([])

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.amount);
  }, 0);

   let deliveryCost;

  if(totalPrice === 0){
     deliveryCost = 0;
  }
  else{
     deliveryCost = 5;
  }




 const [selected,SetSelected] = useState("burger")

  const currency ="$";

  // payment Options

  const  [paymentOptions , SetPaymentOption] = useState("Cash on Delivery")

  // Delivery Options
  const  [deliveryOptions , SetDeliveryOption] = useState("Standard")


  

return(
  <shopcontext.Provider value={
    {currency,menuIcons,slider,foods,trendingFoods,selected,SetSelected,wishlist,SetWishList,cart ,setCart,totalPrice,deliveryCost,paymentOptions , SetPaymentOption,deliveryOptions , SetDeliveryOption,navbarscroll,setNavbarScroll,otherImgs}}>
    {props.children}
  </shopcontext.Provider>
)

}

export default ContextProvider;