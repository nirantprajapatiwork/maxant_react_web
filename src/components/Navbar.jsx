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
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={sliderimage}
        alt="slider"
      />

      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-[#212741] z-50">
        <img className="h-16" src={logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white text-lg">
          <li className="hover:text-[#ff511a] cursor-pointer">Home</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Services</li>
          <li className="hover:text-[#ff511a] cursor-pointer">About</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Pages</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Testimonials</li>
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={handelnav}
          className="block md:hidden text-white cursor-pointer"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-12 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl  text-left font-bold leading-tight">
          Best One in Town <br /> & Crypto Services
        </h1>
        <p className="mt-6 items-start text-left text-xs md:text-xl max-w-xl ">When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
        <div className="flex flex-col gap-8 mt-8 md:flex-row">
             <button className="bg-[#43ba7f] p-3 rounded-xl hover:bg-[#378a61] font-semibold">
            Discover more
        </button>
         <button className="bg-[#ff511a] p-3 rounded-xl hover:bg-[#ad3916] font-semibold">
            Contact us
        </button>
        </div>
       
      </div>

      {/* Mobile Sidebar */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#212741] p-6 ease-in-out duration-500 z-40"
            : "fixed left-[-100%] top-0 w-[60%] h-full bg-[#212741d] p-6 ease-in-out duration-500 z-40"
        }
      >
        <ul className="flex flex-col gap-8 text-white text-lg mt-16">
          <li className="hover:text-[#ff511a] cursor-pointer">Home</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Services</li>
          <li className="hover:text-[#ff511a] cursor-pointer">About</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Pages</li>
          <li className="hover:text-[#ff511a] cursor-pointer">Testimonials</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
