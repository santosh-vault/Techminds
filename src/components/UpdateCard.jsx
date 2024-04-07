import React from "react";

const UpdateCard = ({ imageUrl, heading, text, buttonText }) => {
  return (
    <div className="border rounded-xl shadow-md w-[291px] pb-4">
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-4md text-blue-600 font-semibold mb-2 px-4">
        {heading}
      </h2>
      <p className="text-gray-700 mb-4 px-4">{text}</p>
      <button className="bg-blue-500 text-white  px-8 ml-2 py-1 rounded-full hover:bg-blue-600 transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default UpdateCard;
