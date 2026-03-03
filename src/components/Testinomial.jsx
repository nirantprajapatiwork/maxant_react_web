import React from "react";
import testimonials_01 from "./images/testimonials-01.jpg";

const Testinomial = () => {
  return (
    <section className="w-full py-20 bg-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[#ff511a] font-bold tracking-wider">
          TESTIMONIALS
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2">
          What They Say
        </h1>
      </div>

      <div className="flex justify-center px-6">

        <div className="max-w-4xl h-1/3 w-full rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">

          {/* LEFT SIDE */}
          <div className="md:w-2/3 bg-white px-8 py-8 flex flex-col justify-center">

            {/* Quote Icon */}
            <div className="bg-[#43ba7f] w-14 h-14 rounded-lg flex items-center justify-center mb-8">
              <span className="text-white text-3xl font-bold">“</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-7 text-lg mb-8">
              Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
              Phasellus in tristique magna, ac gravida leo.
              Integer sed lorem sapien.
            </p>

            {/* Name & Role */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                George Lopez
              </h3>
              <p className="text-[#43ba7f] font-semibold text-base">
                Crypto Manager
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/3 h-fit">
            <img
              src={testimonials_01}
              alt="client"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testinomial;