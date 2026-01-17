import React, { useState } from 'react';
import { IoTrash } from "react-icons/io5";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { QuantityControl } from './QuantityControl';
import { parse } from 'postcss';

const CartPage = () => {
  const [count, setCount] = useState(1)
  const { cart: cartItems, subtotal, total, dispatch } = useCart();
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Cart</h1>
      </header>
      <div className="space-y-8">
        {cartItems.map(item => {
          const price = item?.current_price?.[0]?.NGN?.[0]?.toString() ?? "N/A"
          return (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 lg:ml-[5rem] lg:mr-[5rem]">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                <img
                      src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                      alt={item?.name}
                     className=" h-14 shadow-2xl rounded-[1rem] object-cover lg:h-[10rem] lg:w-[15rem]"
                    />
                  <button onClick={() => removeFromCart(item)} className="border-none text-[#3A3A3A] flex items-center mt-2 hover:text-red-500 lg:text-[1.2rem]" >
                    <IoTrash className="mr-1 h-[1rem] lg:h-[2rem] lg:w-[2.5rem]" /> Remove
                  </button>
                </div>
                <div className="ml-4">
                  <h2 className=" text:sm lg:text-xl font-semibold">{item.name}</h2>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">NGN {item.qty * parseFloat(price)}</span>
                <QuantityControl item={item} />
              </div>
            </div> 
          )
        }
        )}
      </div>
      <div className="flex justify-between items-center mt-8 lg:ml-[5rem] lg:mr-[5rem] lg:mb-10">
        <div className=' flex gap-5'>
        <h2 className="text-xl font-bold">Total:</h2>
        <span className="text-2xl font-semibold">{total.toFixed(2)}</span>
        </div>
      <div className="mt-8 text-center">
        <Link to="/Payment">
        <Button className="px-8 py-3 bg-[#163B5C]   text-white rounded-lg hover:bg-blue-700 lg:font-bold lg:text-xl lg:px-[6rem] lg:py-[0.8rem]" label="Check Out" />
        </Link>
      </div>
      </div> 
      <div className='pt-[3rem]'>
      <button className=' px-5 py-3 bg-[#163B5C] rounded-md text-white' onClick={() => clearCart()}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;