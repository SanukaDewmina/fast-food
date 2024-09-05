import React, { useContext } from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { shopcontext } from '../ContextApi';

function WishList() {
 const {wishlist,SetWishList} = useContext(shopcontext);

  const navigate = useNavigate()

  // remove wish item
  function removeWishItem(index){
    SetWishList(prevWishlist => prevWishlist.filter(item => item.id !== index));
  }

  

  return (
    <>
    <div className='fixed top-0 z-50 w-full bg-white h-[10vh] border-b-2 border-gray-200'>
        <div className='relative inset-0 flex items-center justify-center w-full h-full'>
          <MdOutlineArrowBackIosNew className='absolute left-[10px] top-1/2 translate-y-[-50%] text-2xl cursor-pointer' onClick={()=>{navigate(-1)}}/>
          <p className='text-xl text-center'>{`WishLists (${wishlist.length})`} </p>

        </div>
    </div>
    
       

        {/* Cart table */}
        <table className="w-full md:w-[60%] mx-auto border-collapse bg-white-300 mt-[12vh]">
          <tbody>
            
            {/* table row */}

            {wishlist.map(item => {
              return(

                <tr key={item.id} className="flex justify-between items-center hover:bg-gray-100 px-[10px]" >
                {/* Image Cell */}
                <td className="p-2 border-b min-w-[40px] w-[20%] sm:p-4">
                  <img src={item.image} alt="cart-add-img" className="w-full h-auto rounded-lg" />
                </td>
              
                {/* Name Cell */}
                <td className="p-4 text-center border-b w-[20%]">
                  <h1 className="text-sm font-medium text-gray-800 sm:text-base">{item.name}</h1>
                </td>
              
              
                {/* Price Cell */}
                <td className="p-4 text-center text-gray-800 border-b w-[20%]">
                  <h1 className="text-sm font-medium sm:text-base">${Number(item.price).toFixed(2)}</h1>
                </td>
              
                {/* Delete Icon Cell */}
                <td className="p-4 text-center border-b w-[20%]">
                  <RiDeleteBinLine className="text-lg text-red-500 cursor-pointer hover:text-red-700" onClick={() => removeWishItem(item.id)} />
                </td>
              </tr>
              


              )
            })
            }
           
            
          </tbody>
        </table> 
    </>
  )
}

export default WishList