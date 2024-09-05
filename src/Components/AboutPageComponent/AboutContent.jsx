import React, { useContext } from 'react'
import { shopcontext } from '../../ContextApi'

function AboutContent() {

  const {otherImgs} = useContext(shopcontext)
  return (
    <div className='grid items-center grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-[20px] mt-[10vh]'>

        <div className='w-full p-6 md:w-auto'>
          <h1 className='mb-4 text-[18px] font-medium font-jost text-[#222222] '>Who we are?</h1>
          <h1 className='mb-4 text-4xl font-semibold md:text-5xl font-jost'>Where Every Meal Tells a Story </h1>
          
          <p className='mb-6 text-lg'>
          Snacko, founded by Sanuka Athapaththu, is your go-to destination for fast food that hits the spot every time. From classic favorites to innovative new flavors, our menu is designed to satisfy all your cravings.
          </p>
          <p className='mb-6 text-lg'>
          Whether you're looking for a quick snack or a filling meal, Snacko has something delicious waiting for you. Come and experience the taste that makes us stand out!
          </p>
        </div>

        <div className='w-full overflow-hidden h-[80%] relative menu-bnr'>
          <img src={otherImgs[1].image} alt="banner img" className='object-cover object-center w-full h-full transition-all duration-1000 ease-out bnr-img' />
        </div>

</div>
  )
}

export default AboutContent