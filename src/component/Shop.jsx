import React from "react";
import { Button } from "./Button";
import StarRating from "./StarRating";
import { FaSliders, FaGreaterThan } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Unisex Sneakers",
    imageUrl: "./shoe_01.png",
    rating: 4,
    reviews: "( 12 reviews )",
    price: "$70.45",
  },
  {
    id: 2,
    name: "Female Sneakers",
    imageUrl: "./shoe_02.png",
    rating: 5,
    reviews: "( 2 reviews )",
    price: "$67.99",
  },
  {
    id: 3,
    name: "Female Sneakers",
    imageUrl: "./shoe_03.png",
    rating: 3,
    reviews: "( 23 reviews )",
    price: "$45.00",
  },
  {
    id: 4,
    name: "Male brown boots",
    imageUrl: "./shoe_04.png",
    rating: 4,
    reviews: "( 12 reviews )",
    price: "$100.99",
  },
  {
    id: 5,
    name: "Fila envizion unisex shoe",
    imageUrl: "./shoe_05.png",
    rating: 5,
    reviews: "( 17 reviews )",
    price: "$120.50",
  },
  {
    id: 6,
    name: "Nike Air Max9 unisex shoe",
    imageUrl: "./shoe_06.png",
    rating: 5,
    reviews: "( 12 reviews )",
    price: "$140.55",
  },
  {
    id: 7,
    name: "female Lace up boots",
    imageUrl: "./shoe_07.png",
    rating: 5,
    reviews: "( 12 reviews )",
    price: "$$175.45",
  },
  {
    id: 8,
    name: "Brown Tassels Croc Mens Loafers",
    imageUrl: "./shoe_08.png",
    rating: 5,
    reviews: "( 12 reviews )",
    price: "$190.75",
  },

  {
    id: 9,
    name: "Pointed toe women's flat",
    imageUrl: "./shoe-09.png",
    rating: 5,
    reviews: "( 12 reviews )",
    price: "$60.45",
  },
  {
    id: 10,
    name: "Unisex Lace up Sneakers",
    imageUrl: "./shoe_10.png",
    rating: 4,
    reviews: "( 12 reviews )",
    price: "$70.45",
  },
  {
    id: 11,
    name: "Oxford male shoe",
    imageUrl: "./shoe_11.png",
    rating: 5,
    reviews: "( 17 reviews )",
    price: "$90.00",
  },
  {
    id: 12,
    name: "Men milano fringe loafers",
    imageUrl: "./shoe_12.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$206.50",
  },
  {
    id: 13,
    name: "Women flat shoes",
    imageUrl: "./shoe_13.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$148.50",
  },
  {
    id: 14,
    name: "Women Crystal tuscany heels",
    imageUrl: "./shoe_14.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$148.50",
  },
  {
    id: 15,
    name: "Women mix suede leather heels",
    imageUrl: "./shoe_15.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$156.50",
  },
  {
    id: 16,
    name: "Women armani flat shoes",
    imageUrl: "./shoe_16.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$148.50",
  },
  {
    id: 17,
    name: "Casual fashion unisex sneakers",
    imageUrl: "./shoe_17.png",
    rating: 5,
    reviews: "( 21 reviews )",
    price: "$78.50",
  },
  {
    id: 18,
    name: "Santiago Men's shoe",
    imageUrl: "./shoe_18.png",
    rating: 4,
    reviews: "( 21 reviews )",
    price: "$97.90",
  },
];

export default function Shop() {
  return (
    <>
      {/* Product list */}
      <div>
        <div className="px-4 lg:px-[5.4rem] lg:pt-[3rem]">
          <div>
            <h4 className=" flex gap-3 text-lg md:text-xl lg:text-2xl pb-2 md:pb-3 lg:pb-5 mt-3 md:mt-4 lg:mt-5 font-medium">
              Home <FaGreaterThan className=" mt-2" /> Products
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Categories
            </h3>
            <div className="flex items-center">
              <p className="flex font-bold text-xl pr-2 md:pr-3">Show Filter</p>
              <FaSliders className=" h-7 w-8 hover:text-[#163B5C]" />
            </div>
          </div>
        </div>
        <section className="container mb-[5rem] mx-auto py-12 px-4 lg:px-[5REM]">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[4rem]">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-2xl rounded-3xl p-4 relative"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full object-cover rounded-md mb-4 md:h-36 lg:h-[18rem]"
                />
                <hr className=" font-bold border-gray-300 pb-5 w-[100%]" />
                <h4 className="text-md md:text-[1.3rem] lg:text-xl font-semibold mb-2">
                  {product.name}
                </h4>
                <div className="flex items-center mb-4 gap-1 ">
                  <span className=" ">
                    <StarRating rating={product.rating} />
                  </span>
                  <span className=" md:ml-1 text-[0.6rem] md:text-sm lg:ml-6 lg:text-[1.3rem] lg:pt-3 text-gray-500">
                    {product.reviews}
                  </span>
                </div>
                <FaRegHeart className="absolute top-4 right-4 text-[#163B5C] lg:hover:text-red-900" />
                <div className="flex justify-between items-center mb-5">
                  <p className="text-[#163B5C] text-[0.9rem] font-semibold mb-2 lg:font-bold lg:text-3xl">
                    {product.price}
                  </p>
                  <Button
                    className="border-solid border-[#163b5c] text-[#163b5c] font-medium text-[0.7rem] px-1 py-1 md:px-2 lg:px-8 lg:py-3 lg:text-xl rounded-md hover:bg-[#163b5c] hover:text-white "
                    label="View Product"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
