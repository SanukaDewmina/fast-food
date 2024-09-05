import React from 'react'

function AboutHero() {
  return (
    <div className="relative bg-[url('/abouthero.jpg')] bg-cover bg-center h-[30vh] grid place-items-end pb-[20px]">
        {/* black overlay */}
        <div className='absolute inset-0 z-40 bg-black opacity-70' ></div>

      </div>
  )
}

export default AboutHero