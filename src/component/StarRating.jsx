import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5 }) => {
  const starArray = [...Array(totalStars)].map((_, index) => {
    return (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-[#163B5C]' : 'text-gray-300'
        } h-5 w-3 lg:h-[1.5rem] lg:w-[1.5rem] lg:mt-5 lg:mb-4`}
      />
    );
  });

  return <div className="flex md:gap-0 lg:gap-1">{starArray}</div>;
};

export default StarRating;
