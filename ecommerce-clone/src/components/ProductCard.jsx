import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "sonner"


 function ProductCard({ title, price, image, rating, reviewCount, inStock }) {
  function cardHandler() {
      // console.log(`${title} added to cart`);
      toast.success(`${title} added to cart`, {
        
        description: "Go to Card and Checkout",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
  }
  return (
    <Card className="w-[280px] h-[200] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={image || "/favicon-32x32.png"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {inStock ? (
            <Badge className="absolute top-2 right-2 bg-green-500">In Stock</Badge>
          ) : (
            <Badge className="absolute top-2 right-2 bg-red-500">Out of Stock</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">₹{price.toFixed(2)}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({reviewCount})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-red-950" onClick={cardHandler}>
          <ShoppingCart className="mr-2 h-4 w-4 " /> Add to Cart 
        
        </Button>
      </CardFooter>
    </Card>
 
  );
}

export default ProductCard
