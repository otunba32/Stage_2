import React, { useState } from 'react';
import { IoTrash } from "react-icons/io5";
import { MdAdd, MdRemove } from 'react-icons/md';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Women flat', price: 60.45, quantity: 2, img: '/shoe-09.png'},
    { id: 2, name: 'Unisex Lace up Sneakers', price: 70.45, quantity: 1, img: '/shoe_10.png' },
    { id: 3, name: 'Nike Air Max 9', price: 140.45, quantity: 1, img: '/shoe_06.png' },
    { id: 4, name: 'Brown Tassels Croc Mens Loafers', price: 190.75, quantity: 1, img: '/shoe_08.png' },
  ]);

  const handleIncrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Cart</h1>
      </header>

      <div className="space-y-8">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4 lg:ml-[5rem] lg:mr-[5rem]">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className=" h-14 shadow-2xl rounded-[1rem] object-cover lg:h-[10rem] lg:w-[15rem]" />
                <button className="border-none text-[#3A3A3A] flex items-center mt-2 hover:text-red-500 lg:text-[1.2rem]" onClick={() => handleRemove(item.id)}>
                  <IoTrash className="mr-1 h-[1rem] lg:h-[2rem] lg:w-[2.5rem]" /> Remove
                </button>
              </div>
              <div className="ml-4">
                <h2 className=" text:sm lg:text-xl font-semibold">{item.name}</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              <div className="flex items-center space-x-4 mt-2">
                <button onClick={() => handleDecrement(item.id)} className=" px-[0.4rem] py-[0.2rem] lg:px-2 lg:py-1 hover:bg-indigo-100 rounded">
                  <MdRemove />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)} className="px-[0.4rem] py-[0.2rem] lg:px-2 lg:py-1 bg-gray-200 hover:bg-green-400 rounded">
                  <MdAdd />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 lg:ml-[5rem] lg:mr-[5rem] lg:mb-10">
        <div className=' flex gap-5'>
        <h2 className="text-xl font-bold">Subtotal:</h2>
        <span className="text-2xl font-semibold">${subtotal.toFixed(2)}</span>
        </div>
      <div className="mt-8 text-center">
        <Link to="/Payment">
        <Button className="px-8 py-3 bg-[#163B5C]   text-white rounded-lg hover:bg-blue-700 lg:font-bold lg:text-xl lg:px-[6rem] lg:py-[0.8rem]" label="Check Out" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CartPage;