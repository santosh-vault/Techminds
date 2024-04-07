import React from "react";
import { MdLocationOn } from "react-icons/md";

const CheckNet = () => {
  return (
    <div
      className="text-white py-4 px-4 md:px-32 flex flex-col md:flex-row justify-between items-center"
      style={{ backgroundColor: "#020626" }}
    >
      <div className="md:py-4">
        <p className="flex items-center mb-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
            <MdLocationOn />
          </span>
          <span className="ml-2 text-lg">use our service</span>
        </p>
        <h1 className="text-xl py-2 font-semibold text-center md:text-left">
          Check Availability to connect <br /> Our Service in Your Area
        </h1>
      </div>
      <div className=" justify-between flex w-auto bg-white text-blue-900 py-2 px-4 rounded-full focus:outline-none">
        <input type="email" placeholder="Your email address" className=" " />
        <button
          className="bg-white text-white py-2 px-8 ml-2 rounded-full transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700"
          style={{ backgroundColor: "#020626" }}
        >
          Check Now
        </button>
      </div>
    </div>
  );
};

export default CheckNet;
