import React, { useEffect, useState } from "react";

const Home = () => {
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
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center">Home Page</h1>

      <section>
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
                  educational institutions, offering a wide range of
                  high-quality stationery products tailored to the needs of
                  schools, universities, and educational centers. We collaborate
                  with institutions to provide students and educators with all
                  the essential tools they need for learning and productivity.
                  From notebooks and pens to specialized office supplies, our
                  extensive selection ensures that every student and teacher is
                  equipped for success. With competitive pricing and dependable
                  service, Stationery Hub is your go-to destination for all
                  educational stationery needs.
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
      </section>

      {/* <div>
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At <span className="text-blue-500 font-semibold">YourStore</span>,
            we believe in the magic of stationery. Our journey began with a
            simple idea—to provide high-quality, beautiful, and affordable
            stationery for students, professionals, and artists. Since our
            inception, we have grown into a trusted brand, serving thousands of
            happy customers.
          </p>
        </section>
      </div> */}
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
