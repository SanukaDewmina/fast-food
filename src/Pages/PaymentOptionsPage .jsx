import React, { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { shopcontext } from '../ContextApi';

const PaymentOptionsPage = () => {
  const navigate = useNavigate();
  const trackOrder = useNavigate();

  const {paymentOptions , SetPaymentOption,otherImgs} = useContext(shopcontext)

  return (
    <>
    
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-100 pt-[10vh]">
      {/* Payment Page Container */}
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg md:p-8">
        

        {/* Step Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Payment Information</h2>
          <p className="text-gray-500">Step 2 of 3</p>
        </div>

        {/* Payment Method Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Select Payment Method</h3>
          <div className="grid gap-4 md:grid-cols-3">

            {/* Cash on Delivery Option */}
            <div className="flex items-center p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <input type="radio" name="payment" className="w-5 h-5 text-blue-600 form-radio"
              
              checked={paymentOptions === 'Cash on Delivery'}
              value={'Cash on Delivery'}
              onChange={()=>{SetPaymentOption("Cash on Delivery")}}
              
              />
              <img src={otherImgs[3].image} className='w-[30px] ml-4' alt="visa" />
              <span className="ml-3 text-lg font-medium">Cash on Delivery</span>
            </div>

            {/* Credit Card Option */}
            <div className="flex items-center p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <input type="radio" name="payment" className="w-5 h-5 text-blue-600 form-radio"
              
              checked={paymentOptions === 'Credit/Debit Card'}
              value={'Credit/Debit Card'}
              onChange={()=>{SetPaymentOption("Credit/Debit Card")}}
              
              />
              <img src={otherImgs[5].image} className='object-cover w-[40px] ml-4' alt="visa" />
              <span className="ml-3 text-lg font-medium">Credit/Debit Card</span>
            </div>

            {/* PayPal Option */}
            <div className="flex items-center p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <input type="radio" name="payment" className="w-5 h-5 text-blue-600 form-radio"
              
              checked={paymentOptions === 'PayPal'}
              value={'PayPal'}
              onChange={()=>{SetPaymentOption("PayPal")}}

              />
              <img src={otherImgs[4].image} className='w-[25px] ml-4' alt="visa" />
              <span className="ml-3 text-lg font-medium">PayPal</span>
            </div>

          </div>
        </div>

        {/* Card Information Form */}

        {
          paymentOptions === "Credit/Debit Card" &&        
           <div className="space-y-4 transition-all duration-700">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9101 1121"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Card Holder Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sanuk Dew"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
              />
            </div>
          </div>
           </div>
        }


        {/* Proceed to Pay Button */}
        <button
          className="w-full py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => trackOrder("/trackOrder")}
          
        >
          Proceed to Pay
        </button>
      </div>

      {/* Back to Home Button */}
      <button
          className="flex items-center mb-6 font-semibold text-black hover:text-gray-800 absolute top-[20px] left-[10px]"
          onClick={() => navigate('/')}
        >
          <IoIosArrowBack className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </button>
    </div>
    </>
  );
};

export default PaymentOptionsPage;
