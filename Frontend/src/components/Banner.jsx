import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-gray-100 rounded-lg shadow-lg">
        <div className="order-2 w-full md:w-1/2 mt-12 md:mt-36 md:text-left text-center p-8">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Discover the World of Books
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore our vast collection of books, from classics to the latest
              releases.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-4 md:w-96 w-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="input-grow w-full"
                placeholder="Enter your email"
              />
            </label>
            <button className="btn mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-96 md:h-96 mx-auto md:ml-12 rounded-lg shadow-md"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;