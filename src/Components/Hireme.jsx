import React from 'react';
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import toast ,{ Toaster } from 'react-hot-toast';

function Hireme() {

function massengerNo(){
  toast.error("Sorry, please contact me through other social media.")

}

  return (
    <>
    <Toaster />
      <div className='w-full min-h-[70vh] grid place-items-center bg-gray-100'>
        <div className='p-[30px] text-center bg-white border border-gray-200 rounded-lg shadow-xl'>
          <h2 className='mb-4 text-2xl font-bold md:text-3xl'>Looking for a Front-End Web Developer?</h2>
          <p className='mb-4 text-base md:text-lg'>Hi, I'm Sanuka. Let’s bring your vision to life with stunning websites and applications. I’m here to help with all your front-end needs! <br /> Ready to start your project or have any questions? Contact me using the details below or fill out the form.</p>

          <div className='flex items-center justify-center mb-10 gap-[15px]'>

            <a href="https://wa.me/94774301145"><MdOutlineWhatsapp className='text-3xl hover:text-offer'/></a>
            <a href="https://www.facebook.com/profile.php?id=61556399465130"><RiFacebookCircleLine className='text-3xl hover:text-offer' /></a>
            <a href="https://www.tiktok.com/@s_anuka?_t=8pRQSt69kwB&_r=1"><IoLogoTiktok className='text-2xl hover:text-offer' /></a>
            <FaFacebookMessenger  className='text-2xl hover:text-offer' onClick={()=>{massengerNo()}}/>

          </div>

          <a href="https://wa.me/94774301145" target="_blank" className='inline-block px-6 py-2 mb-4 text-white transition duration-300 bg-black rounded hover:bg-gray-800' title='On Whatsap'>Hire Me</a>
          
          
        </div>
      </div>

    </>
  );
}

export default Hireme;
