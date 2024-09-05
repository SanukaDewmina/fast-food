import React from 'react'
import toast,{ Toaster } from 'react-hot-toast';

function ContactForm() {

  function sendEmail(){

    toast.success('Successfully Your Hacked!s',{
      duration: 3000  
    });

  }


  return (
    <>
    <Toaster />
    <div className='w-full min-h-[auto] px-[10px]'>
    <form onSubmit={(e)=>{e.preventDefault()}} className=' w-full sm:w-1/2 min-w-[300px] p-[10px] bg-white shadow-lg  mx-auto mt-[10vh]'>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='First name'
              className='w-full p-1 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Second name'
              className='w-full p-1 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type="email"
              placeholder='Email'
              className='w-full p-1 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type="tel"
              placeholder='Phone'
              className='w-full p-1 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Address'
              className='w-full p-1 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
          <textarea
              placeholder='Message'
              className='w-full p-1 text-base border border-gray-300 resize-none focus:outline-none focus:border-blue-500'
              rows="4"
            />
          </div>
          <div>
            <button
              type="submit"
              className='w-full px-4 py-3 text-white bg-[#FF6766] hover:bg-[#a73030] focus:outline-none focus:ring-2 focus:ring-[#FF6766] focus:ring-opacity-50'
              onClick={()=>{sendEmail()}}>
              Submit
            </button>
          </div>
     </form>
     </div>
    </>
  )
}

export default ContactForm