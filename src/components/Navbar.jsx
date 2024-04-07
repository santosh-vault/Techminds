import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white" style={{ backgroundColor: "#020626" }}>
      <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center py-4">
        <div className="logo">
          <img
            src="src\assets\TechmindsLogo 1.png"
            alt="Logo"
            className="h-10 lg:h-16"
          />
        </div>
        <button className="lg:hidden focus:outline-none" onClick={toggleNavbar}>
          <RiMenuLine className="w-6 h-6" />
        </button>
        <div
          className={`lg:flex lg:items-center justify-center lg:justify-start space-x-6 ${
            isOpen
              ? "block h-80 p-8 text-center lg:block absolute top-16 left-0 right-0  text-white px-4 pt-4 pb-2"
              : "hidden"
          }`}
          style={{ backgroundColor: "#020626" }}
        >
          <Link
            to="/"
            className="font-light block text-sm lg:text-base mb-4 lg:mb-0"
            style={{ color: "#ffffff" }}
          >
            Home
          </Link>
          <Link
            to="/"
            className="font-light block text-sm lg:text-base mb-4 lg:mb-0"
            style={{ color: "#ffffff" }}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="font-light block text-sm lg:text-base mb-4 lg:mb-0"
            style={{ color: "#ffffff" }}
          >
            Services
          </Link>
          <Link
            to="/"
            className="font-light block text-sm lg:text-base mb-4 lg:mb-0"
            style={{ color: "#ffffff" }}
          >
            Refer Offer
          </Link>
          <Link
            to="/"
            className="font-light block text-sm lg:text-base mb-4 lg:mb-0"
            style={{ color: "#ffffff" }}
          >
            Organization Support
          </Link>
          <button className="signup-btn bg-blue-500 text-white font-light px-8 py-2 rounded-full hover:bg-blue-600 text-sm lg:text-base">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
