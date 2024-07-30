import React from "react";

function Contacts() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-blue-500 p-6">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Artistry Reads
            </h3>
            <p className="text-gray-700 mt-2">
              At Artistry Reads, we are passionate about connecting readers with
              books that inspire, inform, and entertain. We believe in the power
              of literature to transform lives and broaden horizons. Whether
              you're an author looking to publish your work or a reader
              searching for your next great read, we're here to help.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <ul className="text-gray-700 mt-2">
              <li className="flex items-center mt-2">
                <span className="font-bold">CEO:</span> Athul Gopal K -
                9846844413
              </li>
              <li className="flex items-center mt-2">
                <span className="font-bold">Company Manager:</span>{" "}
                Pranav - 9778191859
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() =>
                (window.location.href = `mailto:athulgopal963@gmail.com`)
              }
            >
              Send Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
