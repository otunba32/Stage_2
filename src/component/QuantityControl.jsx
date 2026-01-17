// src/component/QuantityControl.jsx

import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useCart } from './CartContext';

export const QuantityControl = ({ item }) => {
  const { dispatch } = useCart();

  const handleIncrement = () => {
    dispatch({ type: "UPDATE_ITEM", payload: { ...item, qty: item.qty + 1 } });
  };

  const handleDecrement = () => {
    // Prevent quantity from going below 1
    if (item.qty > 1) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: { ...item, qty: item.qty - 1 },
      });
    }
  };

  return (
    <div className="flex items-center border rounded-md">
      <button
        type="button" // Accessibility: prevent form submission
        aria-label="Decrease quantity" // Accessibility: label for screen readers
        onClick={handleDecrement}
        className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        disabled={item.qty <= 1} // Disable button when quantity is 1
      >
        <MdRemove />
      </button>
      <span className="px-4 font-semibold">{item.qty}</span>
      <button
        type="button" // Accessibility: prevent form submission
        aria-label="Increase quantity" // Accessibility: label for screen readers
        onClick={handleIncrement}
        className="p-2 text-gray-600 hover:bg-gray-100"
      >
        <MdAdd />
      </button>
    </div>
  );
};