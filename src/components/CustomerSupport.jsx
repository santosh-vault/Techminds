import React from "react";

const CustomerSupport = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-6 my-10 md:h-[560px]">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={"src/assets/customer.png"}
          alt="Customer Support"
          className="w-full md:w-[658px] h-auto "
        />
      </div>

      <div className="md:w-[505px] md:ml-6 px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          We Provide 24hrs Customer Support
        </h2>
        <p className="text-base md:text-lg mb-4">
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
