import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FaCircleChevronUp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { Button } from '../component/Button';

export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#999999] text-white px-12 py-12 ">
        <div className="container mx-auto px-4">
          <img src="./logo.png" alt="" className="pl-6  md:pl-12"/>
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 lg:space-x-12 py-8">
            <div className="flex flex-col mt-5">
              <h4 className="text-[1.8rem] font-bold mb-2 text-[#163B5C]">
                Categories
              </h4>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Men
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Women
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Children
              </a>
            </div>
            <div className="flex flex-col ">
              <h4 className="text-[1.8rem] font-bold mb-2 mt-[1.5rem] text-[#163B5C]">
                About Us
              </h4>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Our story
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Partners
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Careers
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Our Teams
              </a>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[1.8rem] font-bold mb-2 mt-[1.5rem] text-[#163B5C]">
                Help
              </h4>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Terms & Conditions
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Supports
              </a>
              <a href="#" className="text-xl mt-2 hover:text-[#097fe8]">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[1.8rem] font-bold mb-2 mt-[1.5rem] text-[#163B5C]">
                Contact Us
              </h4>
              <p className="flex items-center text-xl gap-2 mt-4 hover:text-[#097fe8]">
                <LuSmartphone className='h-8 w-10 ' />+234 824 345 3961
              </p>
              <p className="flex items-center text-xl gap-3 mt-4 hover:text-[#097fe8]">
                <MdOutlineMail className='h-8 w-10' />Hello@craftlux.org
              </p>
              <p className="text-white mt-2 text-xl">
                Subscribe to our newsletter
              </p>
              <div className="flex mt-4 items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="text-gray-500 py-2 px-4 rounded-l-md text-xl w-full sm:w-auto"
                />
                <Button className="flex items-center px-4 py-[0.4rem] text-white rounded-r-md bg-[#163B5C] hover:bg-sky-700 text-sm md:text-lg"
                  label="Subscribe" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <hr className="w-full" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center py-8 space-y-6 lg:space-y-0">
            <div className="flex gap-4">
              <FaFacebook className="md:h-7 md:w-7 lg:h-9 lg:w-9 hover:text-[#163B5C]" />
              <FaLinkedin className=" md:h-7 md:w-7 lg:h-9 lg:w-9 hover:text-[#163B5C]" />
              <FaTwitter className=" md:h-7 md:w-7 lg:h-9 lg:w-9 hover:text-[#163B5C]" />
              <FaPinterest className="md:h-7 md:w-7 lg:h-9 lg:w-9 hover:text-[#163B5C]" />
              <FaInstagram className=" md:h-7 md:w-7 lg:h-9 lg:w-9 hover:text-[#163B5C]" />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <p className="text-sm md:text-lg lg:text-xl">
                Copyright&copy; {new Date().getFullYear()} Craft Lux. All rights reserved
              </p>
              <FaCircleChevronUp className='bg-[#999999] h-10 w-10 hover:text-[#163B5C]' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
