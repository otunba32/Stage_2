import React from 'react';
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { Button } from '../component/Button';
import { Layout } from '../component/Layout'; // Use Layout

const Payment = () => {
  return (
    <Layout> {/* Wrap content in Layout */}
      <div className="container mx-auto p-4 md:p-8 max-w-2xl">
        <h1 className='text-center font-bold text-3xl md:text-4xl mb-8'>Select Payment Method</h1>
        
        {/* Payment Method Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className='flex justify-center items-center gap-2 bg-gray-200 font-semibold text-black py-3 px-4 rounded-md w-full hover:bg-gray-300'>
            <TbArrowsExchange2 size={24} /> Bank Transfer
          </button>
          <button className='flex justify-center items-center gap-2 bg-[#163B5C] text-white font-semibold py-3 px-4 rounded-md w-full ring-2 ring-offset-2 ring-[#163B5C]'>
            <CiCreditCard1 size={24} /> Debit Card
          </button>
          <button className='flex justify-center items-center gap-2 bg-gray-200 font-semibold text-black py-3 px-4 rounded-md w-full hover:bg-gray-300'>
            <FaPaypal size={20} /> Paypal
          </button>
        </div>

        {/* Payment Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="cardName" className='block font-semibold text-gray-700 mb-2'>NAME ON CARD</label>
            <input type="text" id="cardName" name="cardName" className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#163B5C] focus:border-transparent' />
          </div>
          <div>
            <label htmlFor="cardNumber" className='block font-semibold text-gray-700 mb-2'>CARD NUMBER</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#163B5C] focus:border-transparent' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <label htmlFor="expiryMonth" className='block font-semibold text-gray-700 mb-2'>MONTH</label>
              <select id="expiryMonth" name="month" className='w-full p-3 border border-gray-300 rounded-md bg-white'>
                <option>Select Month</option>
                {/* Populate months */}
              </select>
            </div>
            <div>
              <label htmlFor="expiryYear" className='block font-semibold text-gray-700 mb-2'>YEAR</label>
              <select id="expiryYear" name="year" className='w-full p-3 border border-gray-300 rounded-md bg-white'>
                <option>Select Year</option>
                {/* Populate years */}
              </select>
            </div>
            <div>
              <label htmlFor="cvv" className='block font-semibold text-gray-700 mb-2'>CVV</label>
              <input type="text" id="cvv" name="cvv" className='w-full p-3 border border-gray-300 rounded-md' />
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit" label="Proceed to Pay" className="w-full font-bold py-4 px-6 bg-[#163B5C] text-white rounded-lg hover:bg-[#1d4c76] transition-colors" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Payment;