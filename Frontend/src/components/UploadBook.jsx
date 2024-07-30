import React from "react";

function UploadBooksForm() {
  const handleSendEmail = () => {
    window.location.href = `mailto:athulgopal963@gmail.com`;
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="bg-white shadow-lg hover:shadow-xl transition duration-200 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Send Your Books to Us
          </h2>
          <p className="text-gray-700 mb-4">
            You can send your own books to us via email. Please include the
            title, author, format, and any additional details you want to share.
            <br />
           our email : artistryreads@gmail.com
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSendEmail}>
            Send Books
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadBooksForm;
