import React, { useState, useEffect } from "react";

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState([
    "src/assets/client.png",
    "src/assets/banner.png",
    "src/assets/client.png",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative overflow-hidden my-8">
      <div
        className="flex justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Review ${index + 1}`}
            className="w-1/2 h-auto"
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 bg-gray-300 rounded-full ${
              index === currentIndex ? "bg-gray-600" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
