import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Sidebar/Layout";
import Header from "@/components/Header/Header";
import ProductList from "@/components/Products/ProductList";
import ProductCard from "@/components/Products/ProductCard";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const products = [
    {
      title: "GitHub Account",
      price: 15449.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon-github.jpg",
    },
    {
      title: "YouTube Account",
      price: 38000.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_yt.png",
    },
    {
      title: "Website",
      price: 49000.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_web.png",
    },
    {
      title: "Twitter Account",
      price: 20999.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_twitter.png",
    },
    {
      title: "Instagram Account",
      price: 14599.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_insta.png",
    },
    {
      title: "Facebook Account",
      price: 13999.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_facebook.png",
    },
    {
      title: "Gmail Account",
      price: 98999.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_gmail.png",
    },
    {
      title: "LinkedIn Account",
      price: 25999.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_linkedin.png",
    },
    {
      title: "Book",
      price: 499.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png",
    },
    {
      title: "Book",
      price: 499.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png",
    },
    {
      title: "Book",
      price: 499.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/4._SS420.png",
    },
    {
      title: "Book",
      price: 499.99,
      image: "https://asrsnews.in/wp-content/uploads/2025/02/6._SS420.png",
    },
  ];

  return (
    <div className="flex">
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <header className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-[60vh]">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-lg max-w-xl">
            Building responsive and fast web applications using Vite and React.
          </p>
          <Button className="mt-6 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200">
            Get Started
          </Button>
        </header>
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductList key={index} index={index} />
          ))}
        </section>
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
