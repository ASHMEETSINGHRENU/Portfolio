import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="font-bodoni text-2xl font-bold text-blue-500">Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="/home" className="hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="/resume" className="hover:text-blue-500 transition-colors">
            Resume
          </a>
          <a href="/certificates" className="hover:text-blue-500 transition-colors">
            Certificates
          </a>
          <a href="/projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 animate-fadeIn">
          <a
            href="/home"
            className="block hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/resume"
            className="block hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            Resume
          </a>
          <a
            href="/certificates"
            className="block hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            Certificates
          </a>
          <a
            href="/projects"
            className="block hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            Mobility
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
