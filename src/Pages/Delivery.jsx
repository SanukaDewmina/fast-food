import React, { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { shopcontext } from '../ContextApi';
import toast,{ Toaster } from 'react-hot-toast';

const DeliveryOptionsPage = () => {
  const navigate = useNavigate();
  const PaymentOptions = useNavigate();

  const {deliveryOptions , SetDeliveryOption} = useContext(shopcontext)

  function deliveryFeeReduce(){
    toast.success("-5$ On Your Total")
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-100 pt-[10vh]">
      <Toaster />
      {/* Delivery Page Container */}
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md md:p-10">
        

        {/* Step Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Delivery Information</h2>
          <p className="text-gray-500">Step 1 of 3</p>
        </div>

        {/* Delivery Method Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Select Delivery Method</h3>
          <ul className="space-y-4">
            {/* Standard Shipping */}
            <li className="flex items-center p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <input type="radio" name="delivery" className="w-5 h-5 text-blue-600 form-radio"

              checked={deliveryOptions === 'Standard'}
              value={'Standard'}
              onChange={()=>{SetDeliveryOption("Standard")}}
              />
              <span className="ml-3 text-lg font-medium">Standard $5(Near Ja-ela)</span>
            </li>

            {/* In-Store Pickup */}
            <li className="flex items-center p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <input type="radio" name="delivery" className="w-5 h-5 text-blue-600 form-radio"

              checked={deliveryOptions === "In-Store Pickup"}
              value={"In-Store Pickup"}
              onChange={()=>{
                SetDeliveryOption("In-Store Pickup")
                deliveryFeeReduce()
                }}/>
              <span className="ml-3 text-lg font-medium">In-Store Pickup</span>
            </li>

            {/* Express Delivery */}
          </ul>
        </div>

        {/* Delivery Address Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="sanuka dew"
                
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(+94) 123-456"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St, main rod"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 font-medium text-gray-700">City</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Colombo"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="12345"
              />
            </div>
          </div>
        </div>

        {/* Continue to Payment Button */}
        <button
          className="w-full py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => PaymentOptions("/payment")}
        >
          Continue to Payment
        </button>
      </div>


      {/* back to home btn */}

      <button
          className="flex items-center mb-6 font-semibold text-black hover:text-gray-700 absolute top-[20px] left-[10px]"
          onClick={() => navigate('/')}
        >
          <IoIosArrowBack className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </button>
    </div>
  );
};

export default DeliveryOptionsPage;
