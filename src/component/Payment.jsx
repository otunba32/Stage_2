import React from 'react';
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { Button } from './Button';
import { Footer } from './Footer';




const Payment = () => {
  return (
    <div>
      <h2 className=' flex justify-center font-semibold mt-5 md:font-bold md:text-[1.8rem] lg:font-bold lg:text-[2rem]'>Select Payment Method</h2>
      <div className=" flex justify-center mt-5 pt-3 font-semibold text-[0.6rem] items-center gap-2 lg:gap-[6rem] md:flex-row md:mt-7 lg:m-[3rem] lg:flex lg:flex-row">
        <button className='flex justify-center items-center bg-[#8ca1b3] border-none gap-1 font-semibold lg:font-bold hover:bg-green-400 text-black py-3 px-1 md:text-xl md:font-bold md:px-[2rem] md:py-[0.6rem] lg:px-[2rem] lg:py-[0.5rem] rounded-md lg:gap-4'><TbArrowsExchange2  className=' hover:bg-green-400 h-[1.5rem] w-[2rem] text-gray-500  lg:h-[2rem] lg:w-[2rem] '/>
        Bank Transfer</button>
        <button className='flex justify-center items-center text-[#FFFFFF] border-none py-3 px-3 font-semibold gap-1 md:text-xl md:px-[2rem] md:py-[0.6rem] md:font-bold lg:font-bold hover:bg-green-400 bg-[#163B5C] lg:px-[3rem] lg:py-[0.9rem] rounded-md lg:gap-4'><CiCreditCard1 className=' h-[1.8rem] w-[2rem] text-[#FFC100] lg:h-[2rem] lg:w-[2rem] ' />
        Debit Card</button>
        <button className='flex justify-center items-center bg-[#8ca1b3] border-none font-semibold py-3 px-3 md:text-xl gap-1 md:px-[2rem] md:py-[0.6rem] md:font-bold lg:px-[4rem] lg:font-bold lg:py-[0.9rem] hover:bg-green-400 rounded-md lg:gap-4'><FaPaypal className=' text-gray-500 h-[1.8rem] w-[2rem] lg:h-[1.4rem] lg:w-[1.5rem] ' />
        Paypal</button>
      </div>
      <form className=" flex flex-col mt-3 justify-center items-center md:mt-8 lg:flex ">
        <label className=' flex flex-col font-semibold pb-[2rem] md:font-bold lg:font-bold'>
          NAME ON CARD
          <input type="text" name="name" className=' border-2 rounded-md text-[1.5rem] border-gray-300  md:pl-5 lg:pl-8 lg:py-[0.9rem] lg:px-[7rem]' />
        </label>
        <label className=' flex flex-col font-semibold pb-[2rem] md:font-bold lg:font-bold'>
          CARD NUMBER
          <input type="text" name="cardNumber"className=' border-2 rounded-md text-[1.5rem] border-gray-300 md:pl-5 lg:pl-8 lg:px-[7rem] lg:py-[0.9rem]' />
        </label>
       <div className=' flex flex-col md:gap-[3rem] md:flex-row lg:gap-[6rem] lg:flex-row'> 
       <label className=' flex flex-col md:font-bold lg:font-bold'>
          MONTH
          <select name="month" className=' rounded-md bg-gray-300 py-3 px-5 flex justify-center items-center'>
            <option className=' border-2 rounded-md border-gray-300 py-10'>Select Month</option>
            {/* Add more months */}
          </select>
        </label>
        <label className=' flex flex-col md:font-bold lg:font-bold'>
          YEAR
          <select name="year" className=' rounded-md bg-gray-300 py-3 px-5 flex justify-center items-center'>
            <option>Select Year</option>
            {/* Add more years */}
          </select>
        </label>
        <label className=' rounded-md md:font-bold lg:font-bold'>
          CVV
          <input type="text" name="cvv" className=' rounded-md bg-gray-300 py-3 px-5 flex border-gray-300 md:pl-5 '/>
        </label>
       </div>
        <div className=" flex justify-center items-center mt-8 hover:bg-">
        <Button type="submit" label="Proceed" className=" rounded-md border-none font-semibold py-3 px-6 mb-[4rem] hover:bg-green-400 bg-[#163B5C] text-white md:font-bold md:px-[4rem] md:py-[1rem] lg:px-[5rem] lg:py-[1rem] hover:cursor-pointer"  />
        </div>
      </form>
      <Footer />
    </div>
    
  );
};

export default Payment;
