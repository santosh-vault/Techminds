import React from "react";

const Copyright = () => {
  return (
    <footer className="bg-gray-900 text-white pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around">
        <div className="w-full text-center text-md ">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
