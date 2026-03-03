import React from "react";
import Clinet01 from "./images/client-01.png";

const Company = () => {

  const clients = [1,2,3,4,5,6];

  return (
    <section className="w-full bg-[#212741] py-16">

      <div className="max-w-6xl mx-auto px-6">
        
        <div className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-center 
          lg:justify-between 
          gap-8
        ">
          
          {clients.map((item, index) => (
            <img
              key={index}
              src={Clinet01}
              alt="client"
              className="h-12 object-contain"
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Company;