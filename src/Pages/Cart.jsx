import React, { useContext } from 'react';
import { MdOutlineArrowBackIosNew, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { shopcontext } from '../ContextApi';


function Cart() {
  const { cart, setCart ,totalPrice,deliveryCost} = useContext(shopcontext);
  
  const myPayment = useNavigate();
  const navigate = useNavigate();

  // Function to remove item from cart
  function removeCartItem(index) {
    setCart(prevCart => prevCart.filter(item => item.id !== index));
  }

  // Function to decrement the quantity of an item
  function decreQuantity(index) {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === index && item.amount > 1 
          ? { ...item, amount: item.amount - 1 } 
          : item
      )
    );
  }

  // Function to increment the quantity of an item
  function increQuantity(index) {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === index 
          ? { ...item, amount: item.amount + 1 } 
          : item
      )
    );
  }
  // toster

  return (
    <>
      <div className='fixed top-0 z-50 w-full bg-white h-[10vh] border-b-2 border-gray-200'>
        <div className='relative inset-0 flex items-center justify-center w-full h-full'>
          <MdOutlineArrowBackIosNew className='absolute left-[10px] top-1/2 translate-y-[-50%] text-2xl cursor-pointer' onClick={() => navigate(-1)} />
          <p className='text-xl text-center'>{`Cart Items(${cart.length})`}</p>
        </div>
      </div>

      {/* Cart table */}
      <table className="w-full md:w-[60%] mx-auto border-collapse bg-white mt-[12vh] min-h-[50vh]">
        <tbody>
          {cart.map(item => (
            <tr key={item.id} className="flex justify-between items-center hover:bg-gray-100 px-[10px]">
              {/* Image Cell */}
              <td className="p-2 border-b min-w-[40px] w-[20%] sm:p-4">
                <img src={item.image} alt="cart-add-img" className="w-full h-auto rounded-lg" />
              </td>

              {/* Name Cell */}
              <td className="p-4 text-center border-b w-[20%]">
                <h1 className="text-sm font-medium text-gray-800 sm:text-base">{item.name}</h1>
              </td>

              {/* Quantity Input Cell */}
              <td className="hidden p-4 text-center gap-[5px] border-b w-[20%] sm:flex justify-center items-center">
                <MdArrowBackIosNew 
                  className='font-normal text-gray-500 cursor-pointer' 
                  onClick={() => decreQuantity(item.id)} 
                />
                <h1 className="text-sm font-medium sm:text-base">{item.amount}</h1>
                <MdArrowForwardIos 
                  className='font-normal text-gray-500 cursor-pointer' 
                  onClick={() => increQuantity(item.id)} 
                />
              </td>

              {/* Price Cell */}
              <td className="p-4 text-center text-gray-800 border-b w-[20%]">
                <h1 className="text-sm font-medium sm:text-base">${Number(item.price * item.amount).toFixed(2)}</h1>
              </td>

              {/* Delete Icon Cell */}
              <td className="p-4 text-center border-b w-[20%]">
                <RiDeleteBinLine 
                  className="text-lg text-red-500 cursor-pointer hover:text-red-700" 
                  onClick={() => removeCartItem(item.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Amount and BUY NOW */}

      <div className="w-full mx-auto md:w-1/3 h-[30vh]">
      <table className="w-full bg-white border border-gray-300 rounded-md">
        <tbody>
          {/* Price row */}
          <tr className="border-b">
            <td className="p-4 font-medium font-jost">Price</td>
            <td className="p-4 text-right">${totalPrice.toFixed(2)}</td>
          </tr>

          {/* Delivery cost row */}
          <tr className="border-b">
            <td className="p-4 font-medium font-jost">Delivery($5.00)</td>
            <td className="p-4 text-right">${deliveryCost.toFixed(2)}</td>
          </tr>

          {/* Final total row */}
          <tr className="border-b">
            <td className="p-4 text-xl font-semibold font-jost">Total</td>
            <td className="p-4 text-xl font-medium text-right font-jost">${(totalPrice + deliveryCost).toFixed(2)}</td>
          </tr>

          {/* Payment button row */}
          <tr>
            <td className="p-4"></td>
            <td className="p-4 text-right">
              <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-400"
              onClick={()=>{myPayment("/delivery")}}
              >
                Proceed to Payment
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  );
}

export default Cart;
