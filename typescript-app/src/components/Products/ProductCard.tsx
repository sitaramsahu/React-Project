import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

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
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-600" />);
      } else if (halfStar && i === fullStars + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <Card>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        {/* <h3 className="text-lg font-semibold text-gray-800">{title}</h3> */}
        <CardTitle>{title}</CardTitle>
        <p className="text-gray-600 text-sm mt-1">
          This is a description of the item.
        </p>
        <CardTitle className="flex justify-center items-center mt-2">
          {renderStars()}
        </CardTitle>
        <CardTitle>₹{price.toFixed(2)}</CardTitle>
        <Button className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-green-300 hover:text-black hover:border-green-500 transition-all">
          <FaShoppingCart className="text-lg" /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
