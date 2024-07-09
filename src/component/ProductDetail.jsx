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
        description: `AIR AS A STATE OF MIND.
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
        <div className="container mx-auto px-4">
            {/* Product Image and Details */}
            <div className="flex flex-col  lg:pl-[5rem] lg:flex-row relative my-8">
                 {/* Side Images */}
                 <div className="flex md:flex-row-reverse flex-row lg:flex-col gap-4 lg:ml-4">
                    {product.images.slice(0, 3).map((img, index) => (
                        <img key={index} src={img} alt={`product-${index}`} className="h-40 w-40 object-cover lg:mt-0 mt-4" />
                    ))}
                </div>
                {/* Main Product Image */}
                <div className="relative ml-16 lg:ml-32 mb-4 lg:mb-0">
                    <img src={product.images[3]} alt="main-product" className="h-64 lg:h-96 object-cover" />
                </div>
                
               

                {/* Product Information */}
                <div className="mt-[3rem] lg:mt-[7rem] lg:ml-16">
                    <h2 className="text-4xl font-bold">{product.name}</h2>
                    <p className="text-xl text-gray-600">{product.type}</p>
                    <p className="text-3xl font-semibold mt-4">{product.price}</p>
                    <div className="flex items-center mt-4">
                        {[...Array(product.rating)].map((_, i) => (
                            <FaStar key={i} className="text-[#163b5c] mr-1" />
                        ))}
                        <span className="ml-2 text-gray-500">({product.reviews} Reviews)</span>
                    </div>
                    <p className="mt-4 text-gray-600">{product.deliveryInfo}</p>

                    {/* Available Colors */}
                    <div className="flex items-center mt-4">
                        <p className="mr-2">Also available in:</p>
                        {product.availableColors.map((color, i) => (
                            <div key={i} className="h-6 w-6 rounded-full mr-2" style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                    
                    {/* Sizes */}
                    <div className="mt-6">
                        <p className="mb-2">Sizes available:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, i) => (
                                <button key={i} className="border px-2 py-1 rounded-md hover:text-[red]">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button className="mt-6 px-6 py-3 bg-[#033F63] text-white font-medium rounded-md hover:bg-blue-700 border-none" label="Add to Cart" />
                </div>
            </div>

            {/* Other Products */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold">Other products from this brand</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {product.otherProducts.map((img, index) => (
                        <img key={index} src={img} alt={`other-product-${index}`} className="h-40 w-full object-cover" />
                    ))}
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold">Product details</h3>
                <p className="mt-4 text-gray-600">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
