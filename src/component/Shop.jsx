// src/component/Shop.jsx

import React, { useEffect, useState } from 'react';
import { FaSliders, FaGreaterThan } from 'react-icons/fa6';
import { Products } from './ProductsCard'; // <-- Import the reusable card
import { useCart } from './CartContext';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Changed to 9 for a nice 3x3 grid

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          '/api/products?organization_id=864bec66adff4f5c9ef157131dad2153&Appid=HJ33VGFDDP92BVX&Apikey=52b1d0d3d13346069dc5ca6e7195728a20240713160414782825'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  // Render loading state
  if (loading) {
    return <div className="text-center py-20 text-xl">Loading products...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-center py-20 text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Breadcrumbs and Filters */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500">
          <span>Home</span>
          <FaGreaterThan size={12} />
          <span className="font-semibold text-gray-800">Products</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Our Products</h1>
        <button className="flex items-center gap-2 font-semibold text-lg hover:text-[#163B5C]">
          <span>Show Filter</span>
          <FaSliders />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex justify-center mt-16" aria-label="Pagination">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              className={`px-4 py-2 mx-1 rounded-md transition-colors ${
                currentPage === pageNumber
                  ? 'bg-[#163B5C] text-white font-bold shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handlePageChange(pageNumber)}
              aria-current={currentPage === pageNumber ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </nav>
    </div>
  );
}