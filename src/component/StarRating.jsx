// src/component/StarRating.jsx

import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          // The color is determined by whether the index is less than the rating
          className={index < rating ? 'text-yellow-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export default StarRating;