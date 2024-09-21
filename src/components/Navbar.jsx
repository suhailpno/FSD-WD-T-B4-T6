import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Modal from "../components/Modal";
import {
  FaHome,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserCircle,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(ProductContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default
  const navigate = useNavigate();

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Handle sign out
  const handleSignOut = () => {
    setShowModal(true);
    setDropdownOpen(false);
  };

  // Close modal and navigate
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  // Update the body class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`top-0 z-50 sticky flex justify-between items-center p-4 rounded-b-lg transition duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black shadow-md"
      }`}
    >
      <Link
        to="/"
        onClick={scrollToTop}
        className={`font-extrabold text-2xl hover:text-purple-800 transform transition-transform cursor-pointer hover:scale-105 ${
          darkMode ? "text-purple-400" : "text-purple-600"
        }`}
      >
        React Router Task
      </Link>

      <div className="flex items-center space-x-6">
        {/* Home Link */}
        <Link
          to="/"
          onClick={scrollToTop}
          className={`flex items-center hover:shadow-lg px-3 py-2 rounded-lg font-semibold transition duration-300 ${
            darkMode
              ? "text-gray-200 hover:text-purple-400"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          <FaHome className="mr-2" />
          Home
        </Link>

        {/* Cart Link */}
        <Link
          to="/cart"
          className={`relative flex items-center hover:shadow-lg px-3 py-2 rounded-lg font-semibold transition duration-300 ${
            darkMode
              ? "text-gray-200 hover:text-purple-400"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          <FaShoppingCart className="mr-2" />
          Cart
          {cart.length > 0 && (
            <span className="-top-1 -right-2 absolute flex justify-center items-center bg-red-600 rounded-full w-5 h-5 text-white text-xs">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`flex items-center hover:shadow-lg px-3 py-2 rounded-lg font-semibold transition duration-300 ${
              darkMode
                ? "text-gray-200 hover:text-purple-400"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            <FaUserCircle className="mr-2 text-xl" />
            Profile
            <svg
              className={`ml-2 transition-transform duration-300 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.293 9.293a1 1 0 0 1 1.414 0L8 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div
              className="right-0 z-10 absolute bg-white shadow-lg mt-2 rounded-md w-48"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={handleSignOut}
                className="flex items-center hover:bg-gray-100 px-4 py-2 rounded-md w-full text-gray-600 text-left transition duration-300"
              >
                <FaSignOutAlt className="mr-2" />
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`hover:shadow-lg px-3 py-2 rounded-lg font-semibold transition duration-300 ${
            darkMode ? "text-yellow-400" : "text-gray-600"
          }`}
        >
          {darkMode ? (
            <FaSun className="text-2xl" />
          ) : (
            <FaMoon className="text-2xl" />
          )}
        </button>
      </div>

      {/* Sign-out Modal */}
      {showModal && (
        <Modal
          message="Visit us again!"
          onClose={handleCloseModal}
          confirmText="OK"
        />
      )}
    </nav>
  );
};

export default Navbar;
