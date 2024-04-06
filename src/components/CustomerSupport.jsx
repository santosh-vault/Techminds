// CustomerSupport.js
import React from "react";

const CustomerSupport = () => {
  return (
    <div className="flex items-center justify-center py-6 my-10 h-[560px]">
      <div className="w-1/2 ">
        <img
          src={"src/assets/customer.png"}
          alt="Customer Support"
          className="w-[658px] "
        />
      </div>

      <div className="w-[505px] ">
        <h2 className="text-4xl font-semibold mb-4">
          We Provide 24hrs Customer Support
        </h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur. Fermentum non in vulputate
          aliquet. Diam purus sed tincidunt eget risus. Accumsan urna arcu velit
          amet pretium libero posuere odio. At vestibulum nulla adipiscing
          pharetra enim egestas nunc ut nec.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;
