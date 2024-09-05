import React, { useContext, useState } from 'react';
import { FaTruck, FaCreditCard, FaBox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { shopcontext } from '../ContextApi';
import { MdDone,MdError } from "react-icons/md";

const ReviewOrderPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  // Extract context values
  const { cart, totalPrice, paymentOptions, deliveryOptions } = useContext(shopcontext);

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 ">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        {/* Back to Delivery Button */}
        

        {/* Check if order is confirmed */}
        {!isConfirmed ? (
          <>
            {/* Step Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Review Your Order</h2>
              <p className="text-gray-500">Step 3 of 3</p>
            </div>

            {/* Order Summary */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium">Order Summary</h3>
              <div className="p-4 space-y-4 border border-gray-300 rounded-lg max-h-[30vh] overflow-y-scroll">
                {/* Ordered Items */}
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <FaBox className="w-6 h-6 text-gray-600" />
                      <span className="text-lg font-medium">{item.name} x {item.amount}</span>
                    </div>
                    <span className="text-lg font-medium">${(item.price * item.amount).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Method */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium">Delivery Method</h3>
              <div className="flex items-center p-4 space-x-4 border border-gray-300 rounded-lg">
                <FaTruck className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-medium">{deliveryOptions}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium">Payment Method</h3>
              <div className="flex items-center p-4 space-x-4 border border-gray-300 rounded-lg">
                <FaCreditCard className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-medium">{paymentOptions}</span>
              </div>
            </div>

            {/* Total Cost */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium">Total Cost</h3>
              <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold text-offer">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Confirm Order Button */}
            <button
              className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </>
        ) : (
          <div className="text-center ">
            {cart.length ? (
              <>
                <button className='bg-green-400 rounded-full p-[20px]'><MdDone className='text-6xl text-white'/></button>
                <h2 className="my-4 text-4xl font-semibold text-gray-900">Thank You!</h2>
                <p className="mb-6 text-lg text-gray-600">Your order has been confirmed.</p>
                <button
                  className="w-[180px]  py-3 font-semibold text-black border border-black transition  rounded-[4px] hover:bg-black hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </>
            ) : (
              <>

                <button className=''><MdError className='text-red-400 text-8xl'/></button>
                <h2 className="my-4 text-4xl font-semibold text-gray-900">Oops!</h2>
                <p className="mb-6 text-lg text-red-400">It looks like your cart is empty. Please add some items before proceeding to checkout</p>
                <button
                  className="w-[180px] text-[16px]  py-3 font-semibold text-black border border-black transition  rounded-[4px] hover:bg-black hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>

                <button
                      className="flex items-center mt-[10px] text-[14px] text-blue-900 hover:text-gray-600 mx-auto "
                      onClick={() => navigate("/cart")}
                    >
                      <span>Confirm Your Cart</span>
                </button>

              </>
            )}
          </div>
        )}
      </div>
     
    </div>
  );
};

export default ReviewOrderPage;
