import React, { useEffect, useState } from "react";
const Contact = () => {
  const images = [
    "https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/3._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/4._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/5._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/6._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/8._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/9._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/10._SS420.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="w-full bg-blue-400 py-8 relative">
        <div className="slider-container overflow-hidden">
          {/* Image Slider */}
          <div
            className="slider flex items-center gap-x-8 md:gap-x-16 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 110}px)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-[120px] md:w-[180px] flex-shrink-0 flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="h-8 md:h-20 object-contain hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
