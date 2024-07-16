import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Button } from './Button'; // Adjust the import path as necessary

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `/api/${id}/?organization_id=864bec66adff4f5c9ef157131dad2153&reverse_sort=false&page=1&size=31&Appid=HJ33VGFDDP92BVX&Apikey=52b1d0d3d13346069dc5ca6e7195728a20240713160414782825`,
        );
        const data = await response.json();

        const transformedProducts = data.items.map((product) => {
          return {
            id: product.id,
            imageUrl:
              `https://api.timbu.cloud/images/${product.photos[0]?.url}` || "",
            name: product.name,
            description: product.description,
            price: product.current_price[0]?.NGN[0]?.toString() || "N/A",
            quantityAvailable: item.available_quantity || 0,
          };
        });       

        setProduct(transformedProducts); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const price = product.current_price?.[0]?.NGN?.[0] ?? 'Price not available';

  return (
    <div className="container">
      {/* Product Image and Details */}
      <div className="flex flex-col md:flex-row md:gap-4 lg:pl-[5rem] lg:flex-row relative my-8">
        {/* Side Images */}
        <div className='flex'>
          <div className="pl-4 md:pl-8 md:flex-col lg:flex-row gap-4 lg:ml-4">
            {/* {imageUrl?.map((img, index) => ( */}
              <img
                key={index}
                src={img}
                alt={`product-${index}`}
                className="h-[6rem] w-[6rem] md:h-[8rem] md:w-[12rem] object-cover lg:mt-4 lg:h-[15rem] lg:w-[15rem] mt-4"
              />
            
          </div>
          {/* Main Product Image */}
          <div className="relative pt-[5rem] md:ml-11 lg:ml-32 mb-4 lg:mb-0">
            <img
              src={imageUrl}
              alt="main-product"
              className="h-[13rem] md:h-[14rem] md:w-[16rem] md:mt-16 lg:h-[27rem] lg:w-[28rem] object-cover"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="mt-[3rem] ml-3 md:ml-12 lg:mt-[15rem] lg:ml-16">
          <h2 className="text-4xl md:font-semibold font-bold">
            {product.name}
          </h2>
          <p className="text-3xl font-semibold mt-4">{price}</p>
          <div className="flex items-center mt-4">
            {[...Array(product.rating || 0)].map((_, i) => (
              <FaStar key={i} className="text-[#163b5c] mr-1" />
            ))}
            <span className="ml-2 text-gray-500">
              ({product.reviews || 0} Reviews)
            </span>
          </div>
          <p className="mt-4 ml-3 md:font-bold text-gray-600">
            {product.description || 'No description available'}
          </p>

          {/* Add to Cart Button */}
          <Button
            className="ml-2 mt-6 px-14 py-3 md:px-[6rem] bg-[#033F63] text-white font-medium rounded-md hover:bg-blue-700 border-none"
            label="Add to Cart"
          />
        </div>
      </div>

      {/* Other Products */}
      <div className="mt-12 md:pl-8">
        <h3 className="text-2xl font-bold">Other products from this brand</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {product.otherProducts && product.otherProducts.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`other-product-${index}`}
              className="h-40 w-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-12 bg-[#033F63] md:w-screen lg:w-auto md:pt-5 md:p-[3rem] flex justify-between">
        <div className="ml-3 mt-3 mb-5 w-[17rem] md:w-[29rem] lg:w-[40rem] lg:ml-[3rem]">
          <h3 className="sm:text-xl md:font-bold text-white md:text-3xl font-bold">
            Product details
          </h3>
          <p className="pt-2 sm:text-xl md:font-semibold text-white md:text-xl">
            {product.name}
          </p>
          <p className="mt-6 text-white text-xs md:flex-row md:text-lg md:font-medium">
            AIR AS A STATE OF MIND
            <br />
            <span className="text-xs md:text-sm">{product.description}</span>
          </p>
        </div>
        <div className="mt-[4rem] mr-3 md:flex-col md:mt-9 md:ml-[6rem] lg:mr-[15rem]">
          <h5 className="flex justify-center border p-1 rounded-t-lg border-zinc-300 md:text-2xl md:border md:p-3 md:border-zinc-300 md:rounded-t-lg md:font-semibold text-white">
            Discount
          </h5>
          <p className="flex justify-center p-6 items-center border border-zinc-300 font-bold bg-white text-[#033F63] md:pb-10 md:pt-10 md:text-2xl md:border md:p-3 md:border-zinc-300 md:font-bold md:bg-white md:text-[#033F63]">
            35%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

