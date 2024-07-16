import React, { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md';
import { useCart } from './CartContext';


export const QuantityControl = ( {item} ) => {
    const { dispatch,  } = useCart();
  const handleIncrement = () => {
    dispatch({ type: "UPDATE_ITEM", payload: { ...item, qty: item.qty + 1 } });
  };

  const handleDecrement = () => {
    if (item.qty > 1) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: { ...item, qty: item.qty - 1 },
      });
    }
  };
  const updateQty = (product, qty) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { ...product, qty } });
  };
  return (
    <div className="flex items-center space-x-4 mt-2">
      <button
        onClick={() => handleDecrement()}
        className=" px-[0.4rem] py-[0.2rem] lg:px-2 lg:py-1 hover:bg-indigo-100 rounded"
      >
        <MdRemove />
      </button>
      <span>{item.qty}</span>
      <button
        onClick={() => handleIncrement()}
        className="px-[0.4rem] py-[0.2rem] lg:px-2 lg:py-1 bg-gray-200 hover:bg-green-400 rounded"
      >
        <MdAdd />
      </button>
    </div>
  );
}
