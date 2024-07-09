import React, { useState } from 'react';
import { MdSearch, MdShoppingCart, MdMenu, MdClose } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { Button } from './Button';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  };

  return (
    <>
      <div className="p-4 bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center container mx-auto px-4">
          {!isOpen && (
            <div className="flex items-center">
              <Link to="/">
                <img src="/logo2.png" alt="Logo" className="h-16" />
              </Link>
            </div>
          )}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {isOpen ? <MdClose className="absolute top-4 right-4" /> : <MdMenu />}
            </button>
          </div>
          <ul className={`flex-col lg:flex-row lg:flex items-center gap-6 text-lg transition-transform duration-300 transform ${isOpen ? 'fixed top-0 right-0 w-full h-full flex bg-white z-50 p-8' : 'hidden lg:flex '}`}>
            {isOpen && (
              <button onClick={toggleMenu} className="text-3xl self-end">
                <MdClose className="h-10 w-10 hover:text-[#1683e3] cursor-pointer" />
              </button>
            )}
            <Link to="/" onClick={handleLinkClick}>
              <li className="text-[#B8B8B8] font-medium hover:text-[#163B5C]">
                Home
              </li>
            </Link>
            <Link to="/product" onClick={handleLinkClick}>
              <li className="text-[#163B5C] font-medium hover:text-[#B8B8B8]">
                Products
              </li>
            </Link>
            <li className="text-[#B8B8B8] font-medium hover:text-[#163B5C]">
              <a href="#" onClick={handleLinkClick}>About Us</a>
            </li>
            <li className="hover:underline" onClick={handleLinkClick}>
              <MdSearch className="inline-block h-10 w-10 hover:text-[#1683e3] cursor-pointer" />
            </li>
            <Link to="/checkout" onClick={handleLinkClick}>
              <li className="hover:underline" onClick={handleLinkClick}>
                <MdShoppingCart className="inline-block h-10 w-10 hover:text-[#1683e3] cursor-pointer" />
              </li>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <li className="hover:underline" onClick={handleLinkClick}>
                <IoMdContact className="inline-block h-10 w-10 hover:text-[#1683e3] cursor-pointer" />
              </li>
            </Link>
            <Button
              className="border-solid border-[#163b5c] text-[#fff] bg-[#163b5c] font-medium px-[1.3rem] py-[0.4rem] hover:bg-[#fff] hover:text-black rounded-md"
              label="Sign Up"
            />
            <Button
              className="border-[#8996a1] text-black font-medium px-[1.3rem] py-[0.4rem] hover:bg-[#163b5c] hover:text-white rounded-md"
              label="Log In"
            />
          </ul>
        </nav>
      </div>
      <div className="border-t-2 border-gray-300"></div>
      <Outlet />
    </>
  );
};
