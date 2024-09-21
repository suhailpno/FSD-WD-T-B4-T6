import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <footer className="relative bg-gray-900 py-6 text-white">
      <div className="mx-auto px-4 text-center container">
        {/* Company Info */}
        <div className="mb-4">
          <h1 className="mb-1 font-bold text-2xl">React Router Task</h1>
          <p className="text-gray-400 text-sm">
            Quality products, exceptional service
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="relative mb-4">
          {showAlert && (
            <div className="top-[-60px] left-1/2 absolute bg-blue-600 shadow-lg px-4 py-2 rounded-lg text-white transform -translate-x-1/2">
              <p>Thank You for the Subscription</p>
            </div>
          )}

          <form
            onSubmit={handleSubscribe}
            className="flex sm:flex-row flex-col justify-center items-center"
          >
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 sm:mr-2 mb-2 sm:mb-0 px-4 py-2 border-none rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-gray-400 text-xs">
          <p>&copy; React Router Task - No rights reserved</p>
        </div>
      </div>

      {/* Appealing Source Code Button */}
      <a
        href="https://github.com/suhailpno/FSD-WD-T-B4-T6.git"
        target="_blank"
        rel="noopener noreferrer"
        className="right-4 bottom-4 fixed flex items-center bg-gray-800 hover:bg-gray-700 shadow-lg p-3 rounded-full transition-colors duration-300"
        aria-label="GitHub repository"
      >
        <FaGithub className="mr-2 text-4xl text-white" />
        <span className="font-semibold text-sm text-white">Source Code</span>
      </a>
    </footer>
  );
};

export default Footer;
