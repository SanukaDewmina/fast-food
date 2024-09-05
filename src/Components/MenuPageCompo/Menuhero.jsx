import React from 'react'

function Menuhero() {
  return (
      <div className="relative bg-[url('/menuhero.jpg')] bg-cover bg-center h-[20vh] grid place-items-end pb-[20px]">
        {/* black overlay */}
        <div className='absolute inset-0 z-40 bg-black opacity-90' ></div>

      </div>
  )
}

export default Menuhero