import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ebeef1] p-4 md:px-24 neumorphism-container">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700">Dr Appointment</div>

        {/* Hamburger Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-700"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="neumorphism-containe font-semibold text-black md:px-4 md:py-2 rounded-lg  hover:text-gray-900">Home</a>
          <a href="/doctors" className="neumorphism-containe font-semibold text-black md:px-4 md:py-2 rounded-lg  hover:text-gray-900">Doctors</a>
          <a href="/appointments" className="neumorphism-containe font-semibold text-black md:px-4 md:py-2 rounded-lg  hover:text-gray-900">Appointment</a>
          <a href="/contact" className="neumorphism-containe font-semibold text-white bg-green-500 md:px-4 md:py-2 rounded-lg  hover:text-gray-900">Contact</a>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="/" className="neumorphism-containe block hover:text-gray-900 px-4 bg-[#ebeef1] rounded-lg mt-5 py-2">Home</a>
          <a href="/doctors" className="neumorphism-containe block hover:text-gray-900 px-4 bg-[#ebeef1] rounded-lg mt-5 py-2">Doctors</a>
          <a href="/appointments" className="neumorphism-containe block hover:text-gray-900 px-4 bg-[#ebeef1] rounded-lg mt-5 py-2">Appointment</a>
          <a href="/contact" className="neumorphism-containe text-white bg-green-500 px-4 py-2 rounded-lg block mt-5 hover:text-gray-900">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
