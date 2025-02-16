import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import { Button } from "../ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating?: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  rating = 4.5,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-600" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-60  border border-gray-200 mt-4">
      {/* Product Image */}
      <img src={image} alt={title} className="w-full h-44 object-cover" />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-800">This is a description of the item.</p>
        {/* ⭐ Star Rating */}
        <div className="flex items-center mt-1">{renderStars()}</div>
        {/* Price */}
        <p className="text-gray-700 font-bold text-lg mt-2">
          ₹{price.toFixed(2)}
        </p>

        <Button className="mt-4   bg-black text-white  hover:bg-green-300 hover:text-black hover:border-green-500 ">
          <FaShoppingCart className="text-lg" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
