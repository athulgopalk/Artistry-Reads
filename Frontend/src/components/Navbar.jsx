/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";


function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  // Navigation items
  const navItems = (
    <>
      <li>
        <a href="/" className="text-gray-800 hover:text-gray-900">
          Home
        </a>
      </li>
      <li>
        <a href="/course" className="text-gray-800 hover:text-gray-900">
          Books
        </a>
      </li>
      <li>
        <a href="/contact" className="text-gray-800 hover:text-gray-900">
          Contact
        </a>
      </li>
      <li>
        <a href="/about" className="text-gray-800 hover:text-gray-900">
          About
        </a>
      </li>
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-white shadow-md transition-all duration-300 ease-in-out">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a
            href="/"
            className="text-2xl font-bold cursor-pointer text-gray-900"
          >
            Artistry Reads
          </a>
        </div>
        <div className="navbar-end space-x-3 ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-full flex items-center gap-2 bg-gray-300">
              <input
                type="text"
                className="grow outline-none rounded-full px-3 py-1 bg-gray-100"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {authUser ? (
            <Logout />
          ) : (
            <div className="">
              <a
                className="text-white px-3 py-2 rounded-md bg-gray-900 hover:bg-gray-700 duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
