// src/App.jsx

import React from "react";
import ProductCard from "@/components/ProductCard"; // Default import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
const products = [
  {
    title: "Awesome Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/300?text=Product+1", // Placeholder image
    rating: 4.5,
    reviewCount: 50,
    inStock: true,
  },
  {
    title: "Awesome Product 2",
    price: 49.99,
    image: "https://via.placeholder.com/300?text=Product+2", // Placeholder image
    rating: 3.8,
    reviewCount: 22,
    inStock: false,
  },
  {
    title: "Awesome Product 3",
    price: 19.99,
    image: "https://via.placeholder.com/300?text=Product+3", // Placeholder image
    rating: 4.0,
    reviewCount: 15,
    inStock: true,
  },
  {
    title: "Awesome Product 4",
    price: 99.99,
    image: "https://via.placeholder.com/300?text=Product+4", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  {
    title: "Awesome Product 4",
    price: 99.99,
    image: "https://via.placeholder.com/300?text=Product+4", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  // Add more products as needed
];
  

  return (
    <div>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
