import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Services = () => {
  const images = [
    "https://asrsnews.in/wp-content/uploads/2025/02/10._SS420.jpg",
    "https://asrsnews.in/wp-content/uploads/2025/02/9._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/8._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/6._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/5._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/4._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/3._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">ASRS Subscribe Button</h1>{" "}
      <br />
      <div>
        <div className="flex items-center justify-center ">
          <div className="relative w-72 p-4 bg-transparent rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 rounded-lg"></div>
            <button
              className="relative w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              aria-label="Subscribe Now"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://asrsnews.in/wp-content/uploads/2024/12/android-chrome-192x192-1.png"
                  alt="ASRS News"
                  width={40}
                  height={40}
                />
                <span className="text-gray-800 font-medium">ASRS News</span>
              </div>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                Subscribe Now
              </span>
            </button>
          </div>
        </div>

        {/* 
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-pink-400 px-4 py-6 rounded-2xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <img
                  src="https://asrsnews.in/wp-content/uploads/2024/12/android-chrome-192x192-1.png"
                  alt="ASRS News"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-semibold text-white">
                  ASRS News
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                ASRS Premium News
              </h2>
              <p className="text-lg text-gray-300">
                Subscribe Now & Dive Deeper with ASRS News
              </p>
            </div>
            <Button
              className="bg-blue-800 text-white hover:bg-purple-400 font-serif text-2xl"
              size="lg"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
       */}
      </div>
      <br />
      <div>
        <div className="relative w-full bg-transparent py-0 m-0">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-75 gap-6"
              style={{
                transform: `translateX(-${currentIndex * 110}px)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
