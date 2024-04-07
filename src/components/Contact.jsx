import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-blue-600  flex justify-around items-center px-20 py-4">
      <div className="pl-8">
        <p className="text-md text-white mb-4">
          Have any questions or need assistance? Contact us now.{" "}
          <span className="border border-white text-white px-6 py-3 mx-2 rounded-full transition duration-300 hover:bg-blue-600 hover:text-yellow-500 hover:border-yellow-600">
            Contact Us
          </span>
        </p>
      </div>

      <div className="w-1/2 flex justify-end p-8 ">
        <div className="flex items-center mr-8">
          <FaHeadphones className="text-white text-4xl mr-4" />
          <div>
            <h1 className="text-xl text-white">Technical Support</h1>
            <p className="text-gray-100">056-123456789</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaHeadphones className="text-white text-4xl mr-4" />
          <div>
            <h1 className="text-xl text-white ">Customer Support</h1>
            <p className="text-gray-100">056-123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
