import React from 'react'

function Title(props) {
  return (
    <>
   <div className='py-[40px] flex justify-center items-center'>
      <h1 className='text-center text-3xl text-[#111111] font-jost font-medium relative inline-block '>
        {props.text}
        <span className='absolute bottom-[-8px] left-[50%] translate-x-[-50%] w-[70%] h-[3px] bg-underline'></span>
      </h1>
</div>

    
    </>
  )
}

export default Title