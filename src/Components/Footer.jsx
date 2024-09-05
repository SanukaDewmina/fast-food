import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='flex justify-around gap-[10px] flex-wrap items-start mt-[10vh] bg-white py-[40px]'>
      
      <div className='min-w-[150px] w-[17%]'>
        <h1 className='font-bold text-[#111111] text-xl mb-4'>Shop</h1>
        <ul>
          <li><p className='my-2 cursor-pointer hover:text-underline'>About Us</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Privacy Policy</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Terms & Conditions</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Products Return</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Wholesale Policy</p></li>
        </ul>
      </div>

      <div className='min-w-[150px] w-[17%]'>
        <h1 className='font-bold text-[#111111] text-xl mb-4'>Information</h1>
        <ul>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Pagination</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Terms & Conditions</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Contact</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Accessories</p></li>
        </ul>
      </div>

      <div className='min-w-[150px] w-[17%]'>
        <h1 className='font-bold text-[#111111] text-xl mb-4'>About</h1>
        <ul>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Menu items</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Help Center</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Address Store</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>Privacy Policy</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>HomePage</p></li>
        </ul>
      </div>

      <div className='min-w-[150px] w-[17%]'>
        <h1 className='font-bold text-[#111111] text-xl mb-4'>Contact Us</h1>
        <ul>
          <li><p className='my-2 cursor-pointer hover:text-underline'>077 123456789</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>077 123456789</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>info@gmail.com</p></li>
          <li><p className='my-2 cursor-pointer hover:text-underline'>NO 123/JA-ELA</p></li>
        </ul>
      </div>

      <div className='mt-6 lg:col-span-2 lg:mt-0 min-w-[150px] w-[17%]'>
        <h1 className='font-bold text-[#111111] text-xl mb-4'>Newsletters</h1>
        <p>Be the first to learn <br />about our great promotions!</p>
        <div className='flex items-center gap-4 mt-4 text-xl'>
          <a href="https://www.facebook.com/profile.php?id=61556399465130"><FaFacebookF className='cursor-pointer hover:text-underline'/></a>
          <a href="https://wa.me/0774301145"><FaWhatsapp className='cursor-pointer hover:text-underline'/></a>  
          <FaInstagram className='cursor-pointer hover:text-underline'/>
           <a href="https://www.tiktok.com/@s_anuka?_t=8pRQSt69kwB&_r=1"><FaTiktok className='cursor-pointer hover:text-underline'/></a>
          
        </div>
      </div>
      
    </div>
    <div>
      <hr />
      <p className='font-medium text-center font-jost'>© Copyright 2024 | Created By Sanuka.</p>
    </div>
    </>
  );
}

export default Footer;
