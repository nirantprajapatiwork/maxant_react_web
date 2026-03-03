import React from "react";
import {
  FaBoxArchive,
  FaChargingStation,
  FaArchway,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";

const Cardsmenu = () => {
  const cards = [
    {
      icon: <FaBoxArchive />,
      title: "CSS Templates",
      desc: "TemplateMo website is the best for you to explore and download free website templates.",
    },
    {
      icon: <FaCloud />,
      title: "HTML5 Web Pages",
      desc: "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.",
    },
    {
      icon: <FaChargingStation />,
      title: "Responsive Designs",
      desc: "All of our CSS templates are 100% free to use for commercial or business websites.",
    },
    {
      icon: <BsSuitcaseLgFill />,
      title: "Mobile and Tablet Ready",
      desc: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.",
    },
    {
      icon: <FaArchway />,
      title: "Fast Customer Support",
      desc: "Do not hesitate to contact us if you have any question or concern about our templates.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Fully Customizable",
      desc: "If you have any idea or suggestion about new templates, feel free to let us know.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-10 py-10 ">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto mt-20">
        
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 
                       flex flex-col sm:flex-row items-center sm:items-start 
                       gap-6 shadow  "
          >
            {/* Icon */}
            <div className="flex  justify-center
                            w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 
                            shrink-0 hover:translate-y-3 duration-500">
              <div className="text-4xl sm:text-5xl lg:text-6xl text-[#43ba7f]">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-xs sm:text-xl lg:text-xl mb-2 sm:mb-3">
                {item.title}
              </h1>
              <p className="text-gray-600 text-base sm:text-[15px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cardsmenu;