import React from "react";
import bgImage from "../assets/stationery-hero.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section
          className="relative w-full h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">About Us</h1>
          </div>
        </section>

        {/* About Story */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At
            <Link to="/">
              <span className="text-blue-500 font-semibold">YourStore</span>
            </Link>
            , we believe in the magic of stationery. Our journey began with a
            simple idea—to provide high-quality, beautiful, and affordable
            stationery for students, professionals, and artists. Since our
            inception, we have grown into a trusted brand, serving thousands of
            happy customers.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="container mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Our Mission & Values
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="max-w-sm p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Quality First
              </h3>
              <p className="mt-2 text-gray-700">
                We ensure premium-quality products with excellent craftsmanship.
              </p>
            </div>
            <div className="max-w-sm p-6 bg-green-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                Eco-Friendly
              </h3>
              <p className="mt-2 text-gray-700">
                We use sustainable materials to reduce environmental impact.
              </p>
            </div>
            <div className="max-w-sm p-6 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-600">
                Customer Happiness
              </h3>
              <p className="mt-2 text-gray-700">
                We prioritize customer satisfaction through great service.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Our Collection
          </h2>
          <p className="mt-4 text-gray-600">
            From elegant notebooks to premium pens, find everything you need!
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png"
                alt="Notebooks"
                className="w-full rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">Notebooks</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://asrsnews.in/wp-content/uploads/2025/02/3._SS420.png"
                alt="Pens"
                className="w-full rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">Premium Pens</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png"
                alt="Accessories"
                className="w-full rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">Desk Accessories</h3>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white text-center py-12">
          <h2 className="text-4xl font-bold">Join Our Stationery Community</h2>
          <p className="mt-4 text-lg">
            Sign up for exclusive deals and updates on the latest stationery
            trends!
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Sign Up Now
          </button>
        </section>
      </div>
    </>
  );
};
export default About;
