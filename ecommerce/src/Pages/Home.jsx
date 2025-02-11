import React, { useEffect, useState } from "react";

const Home = () => {
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
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center">Home Page</h1>
      <div></div>
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

export default Home;
