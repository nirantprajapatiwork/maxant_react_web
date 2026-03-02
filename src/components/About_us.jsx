import React from "react";

const About_us = () => {
  return (
    <div className="w-full bg-white">

      <section className="py-20 text-center">
        <h2 className="font-bold text-[#ff511a] text-lg tracking-wider">
          ABOUT US
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-3 text-gray-800">
          Know Us Better
        </h1>
      </section>

      <section className="px-6 md:px-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex-1">

            {/* Tabs */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="bg-white text-xl shadow-md px-8 py-5 rounded-md text-[#ff511a] font-semibold cursor-pointer">
                Web Design
              </div>

              <div className="bg-white text-xl shadow-md px-8 py-5 rounded-md font-semibold cursor-pointer hover:text-[#ff511a] transition">
                Graphics
              </div>

              <div className="bg-white text-xl shadow-md px-8 py-5 rounded-md font-semibold cursor-pointer hover:text-[#ff511a] transition">
                Web Coding
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 pb-6 border-b border-gray-300 font-semibold text-gray-800">
              <h3>Project Title</h3>
              <h3>Budget</h3>
              <h3>Deadline</h3>
              <h3>Client</h3>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-4 py-6 border-b border-gray-300 text-gray-700">
              <p className="text-[#43ba7f] font-semibold">Website Redesign</p>
              <p>$1,500 to $2,200</p>
              <p>2022 Dec 12</p>
              <p>Web Biz</p>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 py-6 border-b border-gray-300 text-gray-700">
              <p className="text-[#43ba7f] font-semibold">Website Renovation</p>
              <p>$2,500 to $3,600</p>
              <p>2022 Dec 10</p>
              <p>Online Ads</p>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 py-6 border-b border-gray-300 text-gray-700">
              <p className="text-[#43ba7f] font-semibold">Marketing Plan</p>
              <p>$2,500 to $4,200</p>
              <p>2022 Dec 8</p>
              <p>Web Biz</p>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-4 py-6 border-b border-gray-300 text-gray-700">
              <p className="text-[#43ba7f] font-semibold">All-new Website</p>
              <p>$3,000 to $6,600</p>
              <p>2022 Dec 2</p>
              <p>Web Presence</p>
            </div>

          </div>


          <div className="flex-1 max-w-sm space-y-13 ">

            <h2 className="text-2xl font-bold leading-snug  text-gray-800">
              Please tell us about your idea and how you want it to be
            </h2>

            <p className="text-gray-600 leading-7   ">
              You are allowed to use this template for your websites.
              You are <span className="font-bold">NOT allowed</span> to
              redistribute the template ZIP file on any other template websites.
            </p>

            <p className="text-gray-600 leading-7 ">
              Thank you for downloading and using our templates.
              Please tell your friends about our website.
            </p>

            <button className="bg-[#43ba7f] text-white px-8 py-3 rounded-md hover:opacity-90 transition">
              Discover More
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About_us;