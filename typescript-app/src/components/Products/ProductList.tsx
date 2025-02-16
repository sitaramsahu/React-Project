import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  index: number;
};

const ProductList: React.FC<ProductCardProps> = ({ index }) => (
  <Card>
    <CardHeader>
      <CardTitle>Product {index + 1}</CardTitle>
    </CardHeader>
    <CardContent>
      <img
        src="https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <p className="text-gray-600">This is a description of the product.</p>
      <Button className="mt-4 bg-blue-500 text-white hover:bg-orange-400">
        Buy Now
      </Button>
    </CardContent>
  </Card>
);

export default ProductList;
