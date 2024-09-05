import React from 'react';
import toast,{Toaster} from 'react-hot-toast';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

function MenuItemCard({ name, img, dtl, price, id, isWished, hndlmenuwish ,hndAddToCart }) {


// added notification

function addedfunc(){
  toast.success("Added it to your cart")
}



  return (
    <div className='min-w-[270px] w-[300px] h-[350px] trending-card border shadow-sm shadow-gray-400/60 rounded-[10px] overflow-hidden'>
      <div className='w-full h-[65%] grid place-items-center relative overflow-hidden'>
        <img src={img} alt={name} className='w-full h-full object-cover'/>

        {/* hover icons */}
        <button
          className='absolute bottom-[-60px] left-[15px] p-[8px] rounded-full bg-white text-black hover:bg-underline hover:text-white m-heart-btn transition-all duration-[600ms] delay-150'
          onClick={() => {
            hndlmenuwish(id)
          
          }}
        >
          {isWished ? <RiHeartFill className='text-2xl text-pink-500' /> : <RiHeartLine className='text-2xl' />}
        </button>
         {/* ddedt card notification */}
         <Toaster />
        <button className='absolute bottom-[-100px] right-[15px] p-[8px] rounded-full bg-white text-black hover:bg-underline hover:text-white m-cart-btn transition-all duration-[700ms] delay-200'
         onClick={()=>{
          hndAddToCart(id)
          addedfunc()
        }}
        >
          <LiaShoppingBagSolid className='text-2xl' />
        </button>
      </div>

       {/*card text  */}
      <div className='flex flex-col gap-[8px] items-center justify-center h-[35%]'>
        <h1 className='text-[20px] text-[#111111] font-medium font-jost'>{name}</h1>
        <h1 className='text-[16px] text-gray-400 text-center font-medium font-jost'>{dtl}</h1>
        <p className='font-semibold text-underline text-md font-jost'>${price}</p>
      </div>
    </div>
  );
}

export default MenuItemCard;
