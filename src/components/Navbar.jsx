import React, { useState } from "react";
import sliderimage from "./images/slide-01.jpg";
import logo from "./images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelnav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src={sliderimage}
        alt="slider"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center 
                      px-4 sm:px-8 md:px-12 py-5 bg-[#212741] z-50">
        
        <img className="h-12 md:h-16" src={logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-white text-base lg:text-lg">
          <li className="hover:text-[#ff511a] cursor-pointer transition active: text-[#ff511a]">Home</li>
          <li className="hover:text-[#ff511a] cursor-pointer transition">Services</li>
          <li className="hover:text-[#ff511a] cursor-pointer transition">About</li>
          <li className="hover:text-[#ff511a] cursor-pointer transition">Pages</li>
          <li className="hover:text-[#ff511a] cursor-pointer transition">Testimonials</li>
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={handelnav}
          className="md:hidden text-white cursor-pointer z-50"
        >
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start 
                      h-full px-4 sm:px-8 md:px-16 text-white max-w-4xl">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Best One in Town <br /> & Crypto Services
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg max-w-xl">
          When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-8">
          <button className="bg-[#43ba7f] px-6 py-3 rounded-xl hover:bg-[#378a61] transition font-semibold">
            Discover more
          </button>

          <button className="bg-[#ff511a] px-6 py-3 rounded-xl hover:bg-[#ad3916] transition font-semibold">
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 ${
          nav ? "left-0" : "-left-full"
        } w-3/4 sm:w-1/2 h-full bg-[#212741] p-8 transition-all duration-500 z-40`}
      >
        <ul className="flex flex-col gap-8 text-white text-lg mt-20">
          <li onClick={handelnav} className="hover:text-[#ff511a] cursor-pointer transition">Home</li>
          <li onClick={handelnav} className="hover:text-[#ff511a] cursor-pointer transition">Services</li>
          <li onClick={handelnav} className="hover:text-[#ff511a] cursor-pointer transition">About</li>
          <li onClick={handelnav} className="hover:text-[#ff511a] cursor-pointer transition">Pages</li>
          <li onClick={handelnav} className="hover:text-[#ff511a] cursor-pointer transition">Testimonials</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;