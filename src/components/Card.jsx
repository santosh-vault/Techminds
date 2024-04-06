import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md p-6 text-left">
      <img src={imageUrl} alt="Service" className=" mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <button className="border border-blue-500 text-gray-900 py-2 px-8 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white">
        Learn More
      </button>
    </div>
  );
};

export default Card;
