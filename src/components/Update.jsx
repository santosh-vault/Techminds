import React from "react";
import UpdateCard from "./UpdateCard";

const cardDetails = {
  imageUrl: "src/assets/update/1.png",
  heading: "August 08",
  text: "A guide to finding the perfect ultimate Wi-Fi Plan for home",
  buttonText: "Read More",
};
const cardDetails1 = {
  imageUrl: "src/assets/update/2.png",
  heading: "September 20",
  text: "Grab the limited offer Wi-Fi plan for free of cost.....",
  buttonText: "Read More",
};
const cardDetails2 = {
  imageUrl: "src/assets/update/3.png",
  heading: "April 13",
  text: "A guide to choose the perfect saftey Wi-Fi Plan .....",
  buttonText: "Read More",
};
const cardDetails3 = {
  imageUrl: "src/assets/update/4.png",
  heading: "January 01",
  text: "Elevate your gamming experience with right Wi-Fi plans.......",
  buttonText: "Read More",
};

const Update = () => {
  return (
    <div className="mx-10 mt-24 mb-8">
      <div className="mb-8 justify-center flex">
        <h1 className="text-3xl text-center font-semibold mb-4">
          What’s New Update is <br />
          Coming
        </h1>
      </div>
      <div className="flex flex-wrap  px-16 justify-around">
        <UpdateCard {...cardDetails} />
        <UpdateCard {...cardDetails1} />
        <UpdateCard {...cardDetails2} />
        <UpdateCard {...cardDetails3} />
      </div>
    </div>
  );
};

export default Update;
