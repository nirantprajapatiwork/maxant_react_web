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
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-10 py-10">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-8xl mx-auto">
        
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 
                       flex flex-col sm:flex-row items-center sm:items-start 
                       gap-6 hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
          >
            
            {/* Icon */}
            <div className="flex items-center justify-center 
                            w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 
                            shrink-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl text-[#43ba7f]">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3">
                {item.title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
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