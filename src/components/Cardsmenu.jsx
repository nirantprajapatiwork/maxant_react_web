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
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-3xl p-10 flex items-center gap-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-28 h-28 shrink-0">
              <div className="text-6xl text-[#43ba7f]">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="font-bold text-3xl mb-3">
                {item.title}
              </h1>
              <p className="text-gray-600 text-lg">
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