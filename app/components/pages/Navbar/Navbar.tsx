import { Link } from '@remix-run/react';
import  { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (left-aligned) */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">MyLogo</h1>
          </div>

          {/* Navbar Links (center-aligned) */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white py-2 px-4 rounded"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white py-2 px-4 rounded"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white py-2 px-4 rounded"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white py-2 px-4 rounded"
            >
              Contact
            </Link>
          </div>

          {/* Profile Button (right-aligned) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white py-2 px-4 rounded"
            >
              Profile
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-4 bg-gray-800 p-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:text-white py-2 px-4 rounded"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-300 hover:text-white py-2 px-4 rounded"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-300 hover:text-white py-2 px-4 rounded"
          >
            Contact
          </Link>
          <Link
            to="/profile"
            className="block text-gray-300 hover:text-white py-2 px-4 rounded"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
