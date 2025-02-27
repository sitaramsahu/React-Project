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
    }, 2000); // Increased interval for a smoother experience

    return () => clearInterval(interval);
  }, []); // Removed unnecessary dependency

  return (
    <div>
      <div className="relative w-full bg-transparent py-0 m-0">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-6"
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

      {/* Subscribe Button Section */}
      <div className="flex items-center justify-center mt-6">
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
    </div>
  );
};

export default Services;
