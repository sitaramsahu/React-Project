import { useEffect, useState } from "react";

const Services = () => {
  const images = [
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo6-1.jpg.webp",
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo7-1.jpg.webp",
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo5-1.jpg.webp",
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo7-1.jpg.webp",
    "https://talkpal.ai/wp-content/uploads/2024/09/asseenonlogo5-1.jpg.webp",
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {/* <h1 className="font-bold bg-black text-yellow-300 text-center text-lg"> Testing </h1> */}
      </div>

      <div className="relative max-w-full mx-auto overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full absolute transition-opacity duration-1000 ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
