import ProductCard from "@/components/Products/ProductCard";
import React from "react";

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
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      {/* ✅ Page Header */}
      <div className="text-black text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center">
        <h3 className="text-blue-950 text-base sm:text-2xl font-bold">
          Product Of The Day
        </h3>
        <p className="text-gray-600 text-base sm:text-2xl font-semibold">
          Get your hands on the top-selling products from every category,
          updated daily!
        </p>
      </div>

      {/* ✅ Product Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
