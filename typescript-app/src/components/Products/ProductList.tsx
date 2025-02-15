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
        src="https://via.placeholder.com/300"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <p className="text-gray-600">This is a description of the product.</p>
      <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
        Buy Now
      </Button>
    </CardContent>
  </Card>
);

export default ProductList;
