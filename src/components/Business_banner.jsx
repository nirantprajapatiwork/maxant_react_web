import React from "react";
import cta_bg from "./images/cta-bg.jpg";

const Business_banner = () => {
  return (
    <div className="relative w-full h-[400px] sm:flex-col">

      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={cta_bg}
        alt="cta_bg_background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 
                      flex flex-col md:flex-row 
                      items-center justify-center md:justify-between 
                      px-6 md:px-20 gap-6">

        {/* Left Side Text */}
        <h1 className="text-white font-bold 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       max-w-xl text-center md:text-left leading-16">
          Business{" "} 
          <span className="text-[#43ba7f]">Solutions</span> and{" "} <span className="text-[#ff511a]">Crypto</span> Investments
        </h1>

        {/* Right Side Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#43ba7f] px-6 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
            Discover More
          </button>
          <button className="bg-[#ff511a] px-6 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Business_banner;