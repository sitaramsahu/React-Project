import React, { useEffect, useState } from "react";

const Track = () => {
  // Array of images
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

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3000ms (3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full bg-blue-400 py-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move images horizontally
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="swiper-slide-inner w-full flex-shrink-0 flex justify-center items-center"
            >
              <picture className="swiper-slide-image w-full">
                <source
                  type="image/webp"
                  data-lazy-srcset={image}
                  srcSet={image}
                />
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-48 h-48 object-contain" // Use a valid width and height for the images
                />
                <noscript>
                  <img src={image} alt={`Slide ${index}`} />
                </noscript>
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
