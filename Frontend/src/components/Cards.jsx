import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Cards({ item }) {
  const [authUser] = useAuth();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (authUser) {
      navigate("/pay");
    } else {
      toast.error("You must log in to buy this item");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="bg-white shadow-lg hover:shadow-xl transition duration-200 rounded-lg overflow-hidden">
        <figure className="h-60 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.name}
          </h2>
          <p className="text-gray-600">{item.title}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-gray-700">${item.price}</div>
            <button
              className="bg-blue-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition duration-200"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
