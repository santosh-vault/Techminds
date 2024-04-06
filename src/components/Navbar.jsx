import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className=" navbar top-12 px-250 left-0 right-0 text-white flex justify-between items-center px-24 py-3  mx-auto"
      style={{ backgroundColor: "#020626" }}
    >
      <div className="logo">
        <img src="src\assets\TechmindsLogo 1.png" alt="Logo" className="h-16" />
      </div>
      <div className="nav-items flex items-center space-x-6">
        <Link to="/" className="text-white font-light">
          Home
        </Link>
        <Link to="/" className="text-white font-light">
          About Us
        </Link>
        <Link to="/" className="text-white font-light">
          Services
        </Link>
        <Link to="/" className="text-white font-light">
          Refer Offer
        </Link>
        <Link to="/" className="text-white font-light">
          Organization Support
        </Link>
        <button className="signup-btn bg-blue-500 text-white font-light px-4 py-2 rounded-md">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
