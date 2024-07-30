import React, { useState } from "react";
import { toast } from "react-hot-toast";


function PayPage() {
  const [form, setForm] = useState({
    address: "",
    name: "",
    paymentMode: "Cash on Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.address && form.name) {
      toast.success("Order placed successfully!");
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="bg-white shadow-lg hover:shadow-xl transition duration-200 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Delivery Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="paymentMode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Payment Mode:
              </label>
              <input
                type="text"
                id="paymentMode"
                name="paymentMode"
                value={form.paymentMode}
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default PayPage;
