import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';
import { RiInstagramFill } from "react-icons/ri";
import { shopcontext } from '../ContextApi';

function BannerToMenu() {

  const {otherImgs} = useContext(shopcontext) 

  const navigate = useNavigate();

  function tostrun(){

    toast.custom(
    <div className='w-full sm:w-1/2 bg-pink-100 p-[10px] flex justify-center items-center gap-[5px]'>
      <RiInstagramFill className='text-4xl text-pink-500'/> 
      <p className='text-lg text-pink-500'>Sorry, this Instagram link is taking a nap</p>
    </div>,
    {
      duration: 5000  
    });;
   
  }
  return (
    <div className='grid items-center grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-[20px] mt-[10vh]'>
        <Toaster />

        <div className='w-full p-6 md:w-auto'>
          <h1 className='mb-4 text-[18px] font-medium font-jost text-[#222222] '>Discover the Taste of Tradition</h1>
          <h1 className='mb-4 text-4xl font-semibold md:text-5xl font-jost'>Delight in Every Bite,  Explore Our Menu!</h1>
          
          <p className='mb-6 text-lg'>
            From classic favorites to modern twists, our menu is crafted to satisfy every craving. Whether you're in the mood for a hearty meal or a light snack, we've got something special waiting for you. Come, taste the difference
          </p>

          <button className='px-[30px] font-medium font-jost py-3 text-white transition duration-300 bg-black border-2 border-black hover:bg-white hover:text-black'onClick={()=>{navigate("/menu")}}>
            Visit Now
          </button>
        </div>

        <div className='w-full overflow-hidden h-[80%] relative menu-bnr'>
          <span className='absolute grid w-full h-full text-gray-300 transition-all duration-1000 ease-out opacity-0 bg-black/0 place-items-center indet-0 bnr-ovr'>
            <FaInstagram className='text-4xl cursor-pointer hover:text-white' onClick={()=>{tostrun()}}/>
          </span>
          <img src={otherImgs[0].image} alt="banner img" className='object-cover object-center w-full h-full transition-all duration-1000 ease-out bnr-img' />
        </div>

</div>

  )
}

export default BannerToMenu