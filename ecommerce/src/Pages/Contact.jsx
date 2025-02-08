import React, { useEffect, useState } from "react";
const Contact = () => {
  // Image sources (can be replaced with actual URLs or imports)
  const images = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg38JuI3HTwj53KhhH0i-U0So57jScIBF6ANHCzIhI_8aQhbleoEH9HJVRi33nGkLCIP3p14KTYpdSKkcpgJzKEiwGHDnU-zA65zHjyv1vMA4BHnDiuGhQq53kDP1Nv3ymeytUt5Wu9HGv11PU-5hGcFaAffoT6w_GR71Bbg8qLH2_N0S3LG0lHSXQSuW91/w640-h640/2025_quotes_%20(5).jpg",
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
  }, []);

  return (
    <>
      <div className="min-h-screen bg-transparent">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                My Stationery Hub
              </h1>
              <p className="text-lg text-gray-600">
                <span className="text-pink-500">Stationery</span> Hub is the
                <span className="text-pink-500"> perfect partner</span> for
                educational institutions, offering a wide range of high-quality
                stationery products tailored to the needs of schools,
                universities, and educational centers. We collaborate with
                institutions to provide students and educators with all the
                essential tools they need for learning and productivity. From
                notebooks and pens to specialized office supplies, our extensive
                selection ensures that every student and teacher is equipped for
                success. With competitive pricing and dependable service,
                Stationery Hub is your go-to destination for all educational
                stationery needs.
              </p>
              <button className="bg-[#3843D0] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2d36a8] transition-colors">
                Get Started
              </button>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://asrsnews.in/wp-content/uploads/2025/02/new-1024x1024-1.webp"
                alt="Students studying in a grand library with sunlit arched windows"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-400 py-8 relative">
        <div className="slider-container overflow-hidden">
          {/* Image Slider */}
          <div
            className="slider flex items-center gap-x-8 md:gap-x-16 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative w-[120px] md:w-[180px]">
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
