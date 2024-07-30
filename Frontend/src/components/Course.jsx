// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex-grow">
        <div className="mt-28 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Book Store!
            <span className="text-pink-500"> Explore Your Next Read.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover a world of knowledge and imagination with our curated
            collection of books. Whether you're looking for classics,
            bestsellers, or something new, we have it all.
          </p>
          <Link to="/" className="block mt-8">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {books.map((book) => (
            <Cards key={book.id} item={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
