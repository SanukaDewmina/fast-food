import React from 'react';
import toast,{Toaster} from 'react-hot-toast';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

function TrendingCard({ img, name, price, hdladtowish, id ,hndAddToCart,isWished,setIsWished}) {

  function addedfunc(){
    toast.success("Added it to your cart")
  }
  function addwishnotifi(){
    toast.success("Added it to your WishList")
  }

  return (
    <div className='min-w-[270px] h-[350px] trending-card border '>
      <div className='w-full h-[65%] grid place-items-center relative overflow-hidden'>
        <img src={img} alt={name}  />

        {/* hover icons */}
        <Toaster/>
        <button
          className='absolute bottom-[-60px] left-[15px] p-[8px] rounded-full bg-white text-black hover:bg-underline hover:text-white heart-btn transition-all duration-[600ms] delay-150'
          onClick={() => {
            hdladtowish(id);
            setIsWished(!isWished); // Toggle the heart btn
            addwishnotifi();
          }}
        >
          {isWished ? (
            <RiHeartFill className='text-2xl text-pink-500' />
          ) : (
            <RiHeartLine className='text-2xl' />
          )}
        </button>
        {/* ADDED TO CART NOTIFICATION */}
        

        <button className='absolute bottom-[-100px] right-[15px] p-[8px] rounded-full bg-white text-black hover:bg-underline hover:text-white cart-btn transition-all duration-[700ms] delay-200'
        onClick={()=>{
          hndAddToCart(id)
          addedfunc()
        
        }}
        >
          <LiaShoppingBagSolid className='text-2xl' />
        </button>
      </div>

      <div className='flex flex-col gap-[8px] items-center justify-center h-[35%]'>
        <h1 className='text-[20px] text-[#111111] font-medium font-jost'>{name}</h1>
        <p className='font-semibold text-underline text-md font-jost'>${price}</p>
      </div>
    </div>
  );
}

export default TrendingCard;
