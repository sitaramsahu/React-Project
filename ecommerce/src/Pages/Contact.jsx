import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const images = [
    "https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/3._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/4._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/5._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/6._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/8._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/9._SS420.png",
    "https://asrsnews.in/wp-content/uploads/2025/02/10._SS420.jpg",
    "https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png",
  ];

  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Increased interval for a smoother experience

    return () => clearInterval(interval);
  }, []); // Removed unnecessary dependency

  return (
    <>
      <div className="relative w-full bg-transparent py-0 m-0 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-transparent pb-4 rounded-lg shadow-md"
        >
          {submitted && (
            <div className="mt-4 text-green-600 text-center font-semibold bg-gray-100 p-2 rounded-lg">
              ✅ Successfully Submitted Contact Form!
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-900 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-2 border rounded-lg  bg-gradient-to-t to-indigo-700 from-sky-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-lg  bg-gradient-to-t to-indigo-700 from-sky-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-medium mb-1">
              Phone
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              required
              className="w-full p-2 border rounded-lg  bg-gradient-to-t to-indigo-700 from-sky-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="2"
              placeholder="Enter your message"
              required
              className="w-full p-2 border rounded-lg  bg-gradient-to-t to-indigo-700 from-sky-400 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Form
          </button>
        </form>

        <button
          type="submit"
          className="w-96 bg-blue-700 text-white p-2 ml-6 mt-6 mb-4 rounded-lg font-semibold hover:bg-black hover:text-black transition text-2xl"
        >
          <Link to="/about">
            <img
              src="https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png"
              alt="Contact-Us"
            />
          </Link>
        </button>
      </div>
      <div>
        <div className=" w-full bg-transparent py-0 m-0">
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
      </div>
    </>
  );
};

export default Contact;
