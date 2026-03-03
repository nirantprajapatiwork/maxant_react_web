import React from "react";
import calculator_bg from "./images/calculator-bg.jpg";
import calculator_image from "./images/calculator-image.png";

const Form = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={calculator_bg}
        alt="bg"
        className="absolute inset-0 w-screen h-screen object-cover"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-5 py-20 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className=" hidden lg:flex lg:justify-start">
          <img
            src={calculator_image}
            alt="lady"
            className="max-w-full h-fix pt-12 "
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 w-full max-w-2xl text-white">

          <p className="text-[#ff511a] font-semibold mb-2 tracking-wide">
            YOUR FREEDOM
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Get A Financial Plan
          </h2>

          <form className="space-y-6">
            {/* Name & Email Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-[#798697b3] backdrop-blur-sm p-3 rounded-md focus:outline-none"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full bg-[#798697b3] backdrop-blur-sm p-3 rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                className="w-full bg-[#798697b3] backdrop-blur-sm p-3 rounded-md focus:outline-none"
              />
            </div>

            {/* Select */}
            <div>
              <label className="block mb-2">Your Reason</label>
              <select
                className="w-full bg-[#798697b3] backdrop-blur-sm p-3 rounded-md text-white focus:outline-none"
              >
                <option className="text-black">Choose an Option</option>
                <option className="text-black">Online Banking</option>
                <option className="text-black">Financial Control</option>
                <option className="text-black">Yearly Profit</option>
                   <option className="text-black">Crypto Investment</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#ff511a] px-8 py-3 rounded-md mt-4 hover:opacity-90 transition"
            >
              Submit Now
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Form;