import React from 'react'
import { Button } from './Button'

export const Banner = () => {
  return (
    <div>
         {/* Banner */}
      <div className="py-12">
        {/* <div className="container mx-auto flex flex-col-reverse md:flex-col justify-between items-center px-4 lg:px-[4rem]"> */}
        <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-[4rem]">

          <div className="md:w-1/2">
            <h2 className="text-black font-bold text-3xl md:pt-9 md:text-4xl lg:text-7xl">
              PREMIUM QUALITY!
            </h2>
            <p className="text-[#606060] pt-4 font-medium text-xl md:text-2xl lg:text-4xl">
              We give you a seamless shopping experience.
            </p>
            <Button
              className="flex items-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 font-medium text-white rounded-md mt-4 lg:mt-7 text-sm md:text-lg bg-[#163B5C] hover:bg-sky-700"
              label="View Details"
              icon="./rightarrowicon.png"
            />
          </div>
          <div className="relative pb-5 md:w-1/2 md:mt-0 lg:mt-4">
            <img
              src="./shoe_1.png"
              alt="banner_shoe"
              className="relative z-10 h-[9rem] ml-0 md:h-56 md:ml-10 lg:ml-[6.6rem] pt-4 md:pt-6 lg:pt-[2rem] lg:h-[20rem] mt-6 lg:mt-9"
            />
            <img
              src="./shoe_mid_icon.png"
              alt="Shoe icon"
              className="absolute inset-0 z-0 h-[12rem] md:mt-5 md:h-64 md:w-64 lg:h-[25rem] lg:w-[25rem] lg:ml-[3rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
