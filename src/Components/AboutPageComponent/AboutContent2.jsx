import React, { useContext } from 'react'
import { shopcontext } from '../../ContextApi'

function AboutContent2() {
  
  const {otherImgs} = useContext(shopcontext);

  return (
    <>
    <div className='grid items-center grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-[20px] mt-[10vh]'>

      <div className='w-full overflow-hidden h-[80%] relative menu-bnr'>
        <img src={otherImgs[2].image} alt="banner img" className='object-cover object-center w-full h-full transition-all duration-1000 ease-out bnr-img' />
      </div>

      <div className='w-full p-6 md:w-auto'>
        <h1 className='mb-4 text-4xl font-semibold md:text-5xl font-jost'>Discover the Taste Behind Snacko</h1>
        
        <p className='mb-6 text-lg'>
            At Snacko, we’ve been serving up smiles since day one. Founded by Sanuka Athapaththu, our journey began with a passion for creating the perfect fast food experience. Every dish on our menu is crafted with love, using secret recipes that have been refined and perfected over time.
          </p>
          <p className='mb-6 text-lg'>
            Our history is rich with culinary innovation, blending traditional flavors with modern twists to bring you something truly unique. Whether it's a timeless classic or a bold new creation, each bite tells the story of our dedication to quality and taste. Discover the flavors that make Snacko special!
          </p>

      </div>

</div>
    </>
  )
}

export default AboutContent2