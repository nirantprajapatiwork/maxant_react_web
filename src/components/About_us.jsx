import React from "react";

const About_us = () => {
  return (
    <div className="w-full bg-gray-50">
      {/*Heading */}
      <section className="py-20 text-center">
        <h2 className="font-bold text-[#ff511a] text-xl">ABOUT US</h2>

        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3">
          Know Us Better
        </h1>
      </section>

      <section className="px-6 md:px-20 pb-20">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Side Button*/}
          <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">
            <div className="bg-white shadow-lg px-8 py-5 text-center rounded-md hover:text-[#ff511a] transition">
              <button className="text-lg font-semibold">Web Design</button>
            </div>

            <div className="bg-white shadow-lg px-8 py-5 text-center rounded-md hover:text-[#ff511a] transition">
              <span className="text-lg font-semibold">Graphics</span>
            </div>

            <div className="bg-white shadow-lg px-8 py-5 text-center rounded-md hover:text-[#ff511a] transition">
              <span className="text-lg font-semibold">Web Coding</span>
            </div>
          </div>

          {/* Right Side Button*/}
          <div className="flex-1 max-w-md mr-9 lg:pl-24">
            <h1 className="font-bold text-xl sm:text-2xl leading-snug ">
              Please tell us about your idea and how you want it to be
            </h1>
            <p className="font-light text-sm mt-6 text-black leading-7">
              You are allowed to use this template for your websites. You are{" "}
              <span className="font-bold">NOT</span> allowed to redistribute the
              template ZIP file on any other template websites.
            </p>
            <p className="font-light text-sm mt-6 text-black leading-7">
              Thank you for downloading and using our templates. Please tell
              your friends about our website.
            </p>
            <button className="mt-6 bg-[#43ba7f] w-40 h-11 rounded-[5px] text-white">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;
