import React from "react";
import Slide from "@/components/Slide";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-96 bg-cover bg-center">
          <img
            src="https://asrsnews.in/wp-content/uploads/2025/02/babli_stationary_01.png"
            alt="Hero Section Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center mt-24">
            <h1 className="text-green-700 text-5xl font-bold">My Shop</h1>
          </div>
        </div>
      </div>
      <div className="absolute inset-6 flex ">
        <Slide />
      </div>
    </>
  );
};

export default Home;
