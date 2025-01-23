// src/App.jsx

import React from "react";
import ProductCard from "@/components/ProductCard"; // Default import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slide from "./components/Slide";

function App() {
  
const products = [
  {
    title: "Awesome Product 1",
    price: 929.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj81wjz4CZdH4rjgv77uOMPXR3R5JVp7yhdZ016uhsmfUdx_cpLM-x4CEORYP-LFpHLVengXVbGBZWKzafptxcEMOrVQV7aq044zGg4kSQDtOX4UwxgFA4FF7r13hmCgMq46zd3CtKYm4Exef-MuZg9kCnIBUTYeIx1T3SAjYqyeYh5t-U5ZPuuXEdeZjyW/w150-h200/img%20(9).jpeg", // Placeholder image
    rating: 4.5,
    reviewCount: 50,
    inStock: true,
  },
  {
    title: "Awesome Product 2",
    price: 149.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiBozuRCR7aHr41_Y-hcdbiGnceoCHniAlyRX0-fgHVb5Qa4veU6Iy9Cpw25dsK-gr7IkIdLymkJpK3OIRU_-ivXYcO1DL4JR0Qv-lyTOrAcsaqs8jMETN_SRCVwnvfE6IjPxTJ-_O_rcJJHHm6JNkNteBgxmropwqdr8Lk1fcX36dVNM6hyl0_pUe0sKi/w167-h200/img%20(4).jpeg", // Placeholder image
    rating: 3.8,
    reviewCount: 22,
    inStock: false, 
  },
  {
    title: "Awesome Product 3",
    price: 299,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiroHSS3PzKGX5L-wV67MSNhciLsETDccHn4K81shtqArnyZsaiBnQW8GmYGe-FXlaDbPjOc7J4TLneoyaXNdBXKd2YXOm8Hk6UG9MwRpGUdBhhajksXUrOiUNB0-W8O-jmEd8OnJyR2swNa2HgGolHNwtIadtmXq8BvXyMgphIwDWbmv-FDXLNp0D4Bk_/w171-h200/img%20(6).jpeg", // Placeholder image
    rating: 4.0,
    reviewCount: 15,
    inStock: true,
  },
  {
    title: "Awesome Product 4",
    price: 899.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWbk25UJV_bLsBMb4eQaFrj1LO9eKopWCT9t-jcEctIVEMmFkYa4hXQpUw4dw3FXwVWCR9OUWJQhxsQu-HaLLabMVeTfLW5XXFDfwnCASf5-z1EePZ1XSb4aXOPBVJrwYlQZgdeABRhSDgGJJUbFQ9zs4TARh01NNrIvVEJ-80sco4Palo5Mq5WVDCr6sk/w150-h200/img%20(3).jpeg", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  {
    title: "Awesome Product 5",
    price: 499.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9NTAx6zCmdpgG8rPrRM-OmatXlS3abYuZWMd3djAUcHAn_O5tmO6jXa_3xPybboe-N1NNgxwoDU7E2Sw6bcv-_MYLyr9nsfkdLZ5EXWuM6dcb1GFkJWjgKSwwPhuibqbwSBlgZaCCphmt5A6qir-02NJ9kupiuuUolyFPSUOG20fAyWAC0QbXJt7O3uLk/w166-h200/img%20(7).jpeg", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  {
    title: "Awesome Product 6",
    price: 499.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYYCMMuxRgf_PIgFI0sXl5dfAPOjsJy4GOvRqpUCyxt4JpDPUVA5p8w9wI64aFjeXf5lBu4HUtddLBlAXUyvD2SCsvwGy5Kw0yyj_g43GdOLUZs3Xc3IBVGxAoRKUWpu7YWNIuFKoaaFJ4vNiMI-O3QWg_F0XA3usjZCb9f5QuWBHErn_a9OLsh4EW3IcA/w150-h200/img%20(2).jpeg", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  {
    title: "Awesome Product 1",
    price: 999.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj81wjz4CZdH4rjgv77uOMPXR3R5JVp7yhdZ016uhsmfUdx_cpLM-x4CEORYP-LFpHLVengXVbGBZWKzafptxcEMOrVQV7aq044zGg4kSQDtOX4UwxgFA4FF7r13hmCgMq46zd3CtKYm4Exef-MuZg9kCnIBUTYeIx1T3SAjYqyeYh5t-U5ZPuuXEdeZjyW/w150-h200/img%20(9).jpeg", // Placeholder image
    rating: 4.5,
    reviewCount: 50,
    inStock: true,
  },
  {
    title: "Awesome Product 4",
    price: 789.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWbk25UJV_bLsBMb4eQaFrj1LO9eKopWCT9t-jcEctIVEMmFkYa4hXQpUw4dw3FXwVWCR9OUWJQhxsQu-HaLLabMVeTfLW5XXFDfwnCASf5-z1EePZ1XSb4aXOPBVJrwYlQZgdeABRhSDgGJJUbFQ9zs4TARh01NNrIvVEJ-80sco4Palo5Mq5WVDCr6sk/w150-h200/img%20(3).jpeg", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
  {
    title: "Awesome Product 5",
    price: 349.99,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9NTAx6zCmdpgG8rPrRM-OmatXlS3abYuZWMd3djAUcHAn_O5tmO6jXa_3xPybboe-N1NNgxwoDU7E2Sw6bcv-_MYLyr9nsfkdLZ5EXWuM6dcb1GFkJWjgKSwwPhuibqbwSBlgZaCCphmt5A6qir-02NJ9kupiuuUolyFPSUOG20fAyWAC0QbXJt7O3uLk/w166-h200/img%20(7).jpeg", // Placeholder image
    rating: 5.0,
    reviewCount: 120,
    inStock: true,
  },
];




  return (
    <div className="p-2">
    <Navbar />
    <Slide />
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
