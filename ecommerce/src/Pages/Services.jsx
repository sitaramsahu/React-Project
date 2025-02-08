import React, { useState, useEffect } from "react";

const Services = () => {
  // Array of images (use the URLs you provided or any others)
  const images = [
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo11-1.jpg.webp",
    "https://upload.wikimedia.org/wikipedia/commons/3/32/MSN_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",
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
    <div>
      <div className="relative w-full bg-blue-400 py-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move the images
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="swiper-slide-inner w-full flex-shrink-0"
              >
                <picture decoding="async" className="swiper-slide-image w-full">
                  <source
                    type="image/webp"
                    data-lazy-srcset={image}
                    srcSet={image}
                  />
                  <img
                    decoding="async"
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-20 h-20 object-contain" // Fixed size of 80x80 (w-20, h-20)
                  />
                  <noscript>
                    <img decoding="async" src={image} alt={`Slide ${index}`} />
                  </noscript>
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
