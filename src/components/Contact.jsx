import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-blue-600 px-4 py-8 md:px-20 md:py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="md:pl-8 mb-4 md:mb-0">
        <p className="text-md text-white">
          Have any questions or need assistance? Contact us now.
          <button className="border border-white text-white px-6 py-3 mx-2 rounded-full transition duration-300 hover:bg-blue-600 hover:text-yellow-500 hover:border-yellow-600">
            Contact Us
          </button>
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end items-center">
        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
          <FaHeadphones className="text-white text-4xl md:mr-4" />
          <div>
            <h1 className="text-lg md:text-xl text-white">Technical Support</h1>
            <p className="text-gray-100">056-123456789</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaHeadphones className="text-white text-4xl md:mr-4" />
          <div>
            <h1 className="text-lg md:text-xl text-white">Customer Support</h1>
            <p className="text-gray-100">056-123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
