import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './Button';
import StarRating from './StarRating';
import { FaSliders, FaGreaterThan } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const {dispatch, cart} = useCart()
  const addToCart = (product) => {
     dispatch({ type: 'ADD_ITEM', payload: product }); 
    };
  console.log("mycart:", cart)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          '/api/products?organization_id=864bec66adff4f5c9ef157131dad2153&Appid=HJ33VGFDDP92BVX&Apikey=52b1d0d3d13346069dc5ca6e7195728a20240713160414782825'
        );
        const data = await response.json();
        console.log(data.items);
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      {/* Product list */}
      <div>
        <div className="px-4 lg:px-[5.4rem] lg:pt-[3rem]">
          <div>
            <h4 className="flex gap-3 text-lg md:text-xl lg:text-2xl pb-2 md:pb-3 lg:pb-5 mt-3 md:mt-4 lg:mt-5 font-medium">
              Home <FaGreaterThan className="mt-2" /> Products
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Categories
            </h3>
            <div className="flex items-center">
              <p className="flex font-bold text-xl pr-2 md:pr-3">Show Filter</p>
              <FaSliders className="h-7 w-8 hover:text-[#163B5C]" />
            </div>
          </div>
        </div>
        <section className="container mb-[5rem] mx-auto py-12 px-4 lg:px-[5REM]">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[4rem]">
            {currentItems.map((product) => {
              console.log(product.name);
              const imageUrl = product?.photos[0]?.url;
              const price = product?.current_price?.[0]?.NGN?.[0]?.toString() ?? "N/A";
              return (
                <div key={product.id} className="bg-white shadow-2xl rounded-3xl p-4 relative">
                  <img
                    src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                    alt={product?.name}
                    className="w-full object-cover rounded-md mb-4 md:h-36 lg:h-[18rem]"
                  />
                  <hr className="font-bold border-gray-300 pb-5 w-[100%]" />
                  <h4 className="text-md md:text-[1.3rem] lg:text-xl font-semibold mb-2">
                    {product?.name}
                  </h4>
                  <div className="flex items-center mb-4 gap-1 ">
                    <span>
                      <StarRating rating={product.rating || 0} />
                    </span>
                    <span className="md:ml-1 text-[0.6rem] md:text-sm lg:ml-6 lg:text-[1.3rem] lg:pt-3 text-gray-500">
                      {product.reviews || 0} reviews
                    </span>
                  </div>
                  <FaRegHeart className="absolute top-4 right-4 text-[#163B5C] lg:hover:text-red-900" />
                  <div className="flex justify-between items-center mb-5">
                    <p className="text-[#163B5C] text-[0.9rem] font-semibold mb-2 lg:font-bold lg:text-xl">
                      NGN {price}
                    </p>
                    
                      <Button
                      onClick={ () => addToCart(product)}
                        className="border-solid border-[#163b5c] text-[#163b5c] font-medium text-[0.7rem] px-1 py-1 md:px-2 lg:px-5 lg:py-2 lg:text-sm rounded-md hover:bg-[#163b5c] hover:text-white "
                        label="Add to Cart"
                      />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-[4rem]">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-2 ${
                  currentPage === index + 1 ? 'bg-lime-500 text-white' : 'bg-white'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
