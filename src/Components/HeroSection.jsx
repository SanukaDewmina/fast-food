import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-center h-screen">
      {/* Black overlay */}
      <div className='absolute inset-0 z-40 bg-black opacity-60'></div>

      {/* Hero text and buttons */}
      <div className="relative flex flex-col items-center justify-center h-full text-center z-[45] px-[5%] sm:px-[10%] pt-[10vh] bg-black/50">
        <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl font-jost">Experience the Sizzle</h1>
        <p className="max-w-3xl px-4 mt-4 text-lg font-light text-white md:text-xl lg:text-2xl font-jost">
          Perfectly Spiced Chicken Deviled, Just for You. Crafted with the finest ingredients, our signature dish is a feast for your senses. Savor the rich flavors and experience the ultimate indulgence in every bite.
        </p>

        <button 
  className="relative px-6 py-3 mt-8 overflow-hidden w-[200px] font-medium text-white transition-all ease-out duration-1000 bg-transparent border-2 border-white hover:border-black font-jost group"
  onClick={() => navigate("/menu")}
>
  <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-[-1]"></span>
  <span className="relative z-10">Order Now</span>
</button>

      </div>

     

    </div>
  );
}

export default HeroSection;
