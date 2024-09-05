import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../ContextApi'
import { useNavigate } from 'react-router-dom'

function Slider() {
  const { slider } = useContext(shopcontext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const slideCount = slider.length

  // Auto slide effect every 10s
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideCount)
    }, 10000) // 10s interval

    return () => clearInterval(autoSlide) // Clear interval on component unmount
  }, [slideCount])

  // Handle manual pagination click
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      {/* slider container */}
      <div className='relative w-full overflow-hidden pt-[30px] pb-[70px] my-[40px]'>
        {/* slidebox/move box */}
        <div
          className='flex pl-[20px] gap-[20px] transition-transform duration-1000 ease-in-out h-[80%]'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slider.map((item, index) => (
            <div
              key={item.id}
              className="flex overflow-hidden shadow-lg h-[280px] md:h-[400px] lg:h-[500px] min-w-[100%] w-full bg-white slidecard"
            >
              {/* Image Section */}
              <div className="relative w-1/2 overlay">
                <img
                  src={item.img}
                  alt={`slide-${index}`}
                  className="object-cover w-full md:w-[80%] h-full transition-opacity duration-700 absolute left-1/2 top-0 translate-x-[-50%]"
                />
              </div>
              
              {/* Text Section */}
              <div className="flex flex-col justify-center w-1/2 p-6 md:items-center">
                <p className="text-[14px] md:text-[20px] text-[#111111] font-jost font-medium">
                  {item.offer}
                </p>
                <h1 className="mb-4 text-2xl md:text-5xl font-medium text-[#222222] font-jost mt-4">
                  {item.detail}
                </h1>

                {/* Button */}
                <button 
                className="relative w-[80px] md:w-[100px] justify-center py-0 text-black font-semibold text-[16px] md:text-xl text-start mt-4 slider-btn transition-colors duration-[1500ms] ease-out" onClick={()=>{navigate("/menu")}}>
                  Shop Now
                  <span className="absolute bottom-[-4px]  left-0 w-[0] h-[2px] bg-[#E12C43] span-1 transition-all ease-in-out duration-1000 "></span>
                  <span className="absolute bottom-[-4px]  right-0 w-[100%] h-[2px] bg-black span-2 transition-all ease-in-out duration-900 "></span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute flex space-x-3 transform -translate-x-1/2 bottom-4 left-1/2">
          {slider.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-1000 ${
                currentIndex === index ? 'bg-offer/80 w-[20px] h-[11px]' : 'border-2 border-offer/50'
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
