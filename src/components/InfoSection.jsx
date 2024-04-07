import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const InfoSection = () => {
  return (
    <div className="hidden lg:flex information-section flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="flex flex-col lg:flex-row gap-4 text-white">
        <p>Residential Services</p>
        <p>Business Services</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center text-white">
        <p className="flex gap-2 items-center">
          <FaPhoneAlt />
          <span>+977-987456321</span>
        </p>
        <p className="flex gap-2 items-center">
          <MdMarkEmailRead />
          <span>example@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
