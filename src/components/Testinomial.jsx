import React from "react";
import testimonials_01 from "./images/testimonials-01.jpg";

const Testinomial = () => {
  return (
    <section className="w-full py-20 flex justify-center bg-gray-50">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE - TEXT */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-10">
            
            <p className="text-gray-600 leading-7">
              “Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper,
              vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec.”
            </p>

            {/* Headings under description */}
            <div className="mt-6">
              <h3 className="font-bold text-xl text-gray-800">
                David Eigenberg
              </h3>
              <p className="text-sm font-bold text-[#43ba7f]">
                CEO of Mexant
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="md:w-full h-64 md:h-auto">
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