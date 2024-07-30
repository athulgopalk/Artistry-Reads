import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import AboutPage from "./components/AboutPage";
import PayPage from "./components/PayPage";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();

  return (
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <nav className="bg-white shadow p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/course" className="text-gray-800 hover:text-gray-900">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-800 hover:text-gray-900">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-gray-900">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/pay" className="text-gray-800 hover:text-gray-900">
                Pay
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
