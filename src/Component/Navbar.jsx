import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            Recipe Calories
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-gray-700">
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
            <a href="#recipes" className="hover:text-gray-900">
              Recipes
            </a>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#search" className="hover:text-gray-900">
              Search
            </a>
          </div>

          {/* Search Bar & Profile Icon */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <IoSearchOutline />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="rounded-full py-2 pl-10 pr-4 bg-gray-100 border border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Profile Icon */}
            <div className="rounded-full bg-green-400 p-2">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#recipes"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Recipes
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#search"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Search
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
