import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-80 border border-gray-200">
      {/* Product Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Price */}
        <p className="text-gray-700 font-bold text-lg mt-2">
          ₹{price.toFixed(2)}
        </p>

        <button className="mt-4 w-full font-semibold border-2 border-transparent bg-black text-white py-2 rounded-md hover:bg-white hover:text-green-800 hover:border-green-800 transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
