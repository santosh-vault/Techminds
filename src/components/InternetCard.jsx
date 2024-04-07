import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

const InternetCard = ({
  packageName,
  speed,
  features,
  price,
  vat,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="border rounded-md shadow-4xl hover:shadow-lg px-8 bg-white lg:w-[393px]">
      <div className="flex items-center justify-center">
        <img
          src={imageUrl}
          alt={packageName}
          className="w-34 h-34 object-cover rounded-t-md p-2"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl text-center font-semibold mb-4">
          {packageName}
        </h2>
        <div className="flex justify-center items-center mb-2">
          <p className="text-blue-600 font-bold text-4xl mr-1">{speed}</p>
          <p className="text-blue-600">Mbps</p>
        </div>

        <ul className="list-disc list-inside mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 mb-4">
              <FaCircleChevronRight className="text-blue-600 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="">
          <div className="flex flex-col mb-4">
            <div className="flex items-center">
              <p className="text-yellow-600 text-4xl">{price}</p>
              <p className="ml-1"> / Year</p>
            </div>
            <div className="flex items-center text-gray-600">
              inclusive of <p className="ml-1 text-blue-500">{vat}</p> VAT
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <button className="block w-full bg-blue-500 text-white px-6 py-2 rounded-full mb-2 hover:bg-blue-600 transition duration-300">
              {buttonText}
            </button>
            <button className="block w-full bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300">
              More Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetCard;
