import React from "react";

const products = [
  {
    title: "GitHub Account",
    price: 15449.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon-github.jpg",
    rating: 4.7,
  },
  {
    title: "YouTube Account",
    price: 38000.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_yt.png",
    rating: 4.8,
  },
  {
    title: "Website",
    price: 49000.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_web.png",
    rating: 4.5,
  },
  {
    title: "Twitter Account",
    price: 20999.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_twitter.png",
    rating: 4.2,
  },
  {
    title: "Instagram Account",
    price: 14599.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_insta.png",
    rating: 4.6,
  },
  {
    title: "Facebook Account",
    price: 13999.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_facebook.png",
    rating: 4.4,
  },
  {
    title: "Gmail Account",
    price: 98999.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_gmail.png",
    rating: 5.0,
  },
  {
    title: "LinkedIn Account",
    price: 25999.99,
    image: "https://asrsnews.in/wp-content/uploads/2025/02/icon_linkedin.png",
    rating: 4.3,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* ✅ Page Header */}
      <div className="text-black text-center font-bold mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          My TypeScript Page
        </h1>
      </div>

      {/* ✅ Product Section */}
      <div className="text-center mb-6">
        <h3 className="text-blue-950 text-lg sm:text-2xl font-bold">
          Product Of The Day
        </h3>
        <p className="text-gray-600 text-sm sm:text-lg font-semibold">
          Get your hands on the top-selling products from every category,
          updated daily!
        </p>
      </div>

      {/* ✅ Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
