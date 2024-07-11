import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from './Button';

const ProductDetail = () => {
    // Sample data for product
    const product = {
        name: "Nike Air Max 9",
        type: "UNISEX SHOE",
        price: "$140.55",
        reviews: 12,
        rating: 5,
        deliveryInfo: "Free delivery to LEKKI-AJAH",
        availableColors: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff"],
        sizes: [35, 32, 34, 36, 38, 42, 44, 45, 48],
        images: [
            "./Product_01.png",
            "./product_02.png",
            "./Product_03.png",
            "./Product_00.png"
        ],
        description: `
        Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design. Splashes of no-sew skins and stitched overlays keep heritage athletics DNA while super-breathable tactile mesh and visible Air accents add to the sleek design.`,
        otherProducts: [
            "./otherProduct_1.png",
            "./otherproduct_2.png",
            "./otherproduct.png",
            "./otherProduct_4.png",
            "./otherProduct_5.png"
        ]
    };

    return (
      <div className="container ">
        {/* Product Image and Details */}
        <div className="flex flex-col md:flex-row md:gap-4 lg:pl-[5rem] lg:flex-row relative my-8">
          {/* Side Images */}
          <div className=' flex'>
            <div className=" pl-4 md:pl-8 md:flex-col lg:flex-row gap-4 lg:ml-4">
              {product.images.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`product-${index}`}
                  className="h-[6rem] w-[6rem] md:h-[8rem] md:w-[12rem] object-cover lg:mt-4 lg:h-[15rem] lg:w-[15rem] mt-4"
                />
              ))}
            </div>
            {/* Main Product Image */}
            <div className=" relative pt-[5rem] md:ml-11 lg:ml-32 mb-4 lg:mb-0">
              <img
                src={product.images[3]}
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
            <p className="text-xl md:font-bold text-gray-600">{product.type}</p>
            <p className="text-3xl font-semibold mt-4">{product.price}</p>
            <div className="flex items-center mt-4">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#163b5c] mr-1" />
              ))}
              <span className="ml-2 text-gray-500">
                ({product.reviews} Reviews)
              </span>
            </div>
            <p className="mt-4 ml-3 md:font-bold text-gray-600">
              {product.deliveryInfo}
            </p>

            {/* Available Colors */}
            <div className="flex ml-2 items-center mt-4">
              <p className="mr-2 md:font-bold md:text-[1rem]">
                Also available in:
              </p>
              {product.availableColors.map((color, i) => (
                <div
                  key={i}
                  className="h-6 w-6 md:rounded-full md:h-5 md:w-5 md:pl-1 rounded-full mr-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <p className="mb-2 md:font-bold">Sizes available:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    className="border px-2 py-1 rounded-md hover:text-[red]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              className=" ml-2 mt-6 px-14 py-3 md:px-[6rem] bg-[#033F63] text-white font-medium rounded-md hover:bg-blue-700 border-none"
              label="Add to Cart"
            />
          </div>
        </div>

        {/* Other Products */}
        <div className="mt-12 md:pl-8">
          <h3 className="text-2xl font-bold">Other products from this brand</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {product.otherProducts.map((img, index) => (
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
          <div className=" ml-3 mt-3 mb-5 w-[17rem] md:w-[29rem] lg:w-[40rem] lg:ml-[3rem]">
            <h3 className="sm:text-xl md:font-bold text-white md:text-3xl font-bold">
              Product details
            </h3>
            <p className=" pt-2 sm:text-xl md:font-semibold text-white md:text-xl">
              Nike Air Max 9
            </p>
            <p className="mt-6 text-white text-xs md:flex-row md:text-lg md:font-medium">
              AIR AS A STATE OF MIND
              <br />
              <span className=" text-xs md:text-sm">{product.description}</span>
            </p>
          </div>
          <div className=" mt-[4rem] mr-3 md:flex-col md:mt-9 md:ml-[6rem] lg:mr-[15rem] ">
            <h5 className=" flex justify-center border p-1 rounded-t-lg border-zinc-300 md:text-2xl md:border md:p-3 md:border-zinc-300 md:rounded-t-lg md:font-semibold text-white">
              Discount
            </h5>
            <p className=" flex justify-center p-6 items-center border border-zinc-300 font-bold bg-white text-[#033F63] md:pb-10 md:pt-10 md:text-2xl md:border md:p-3 md:border-zinc-300 md:font-bold md:bg-white  md:text-[#033F63]">
              35%
            </p>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;
