import React from "react";
import img1 from "../assets/fresh.png";
import img3 from "../assets/hand3.png";
import img2 from "../assets/22.png";
import chef from "../assets/chef.png";

function Banner() {
  return (
    <div className="bg-veg w-full z-0 h-full text-white" id="#banner">
      <div className="px-6 sm:px-12 lg:px-32 py-8">
        <div className="flex items-center flex-col gap-2 py-5">
          <p className="text-secondary font-dancing font-semibold">CHOOSE YOUR FLAVOR</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center">
            FOOD THAT BRINGS PEOPLE TOGETHER!
          </h1>
          <p className="md:w-145 text-center text-[12px] sm:text-sm mt-5 text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            doloremque doloribus repellat quis. At explicabo quam Dolorum, quae.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mt-8 lg:mt-10">
          <div>
            <img src={chef} className="w-72 md:w-95" />
          </div>
          <div className="flex flex-col items-center justify-center gap-15 md:gap-10">
            <div className="flex flex-col lg:flex-row items-center justify-center text-center md:translate-x-[-70%] lg:translate-x-[-20%]">
              <img src={img1} className="w-44 md:w-52"></img>
              <div className="w-80 mt-5 lg:w-125 md:mt-0">
                <h1 className="font-dancing font-semibold text-3xl md:text-4xl text-secondary mb-2">
                  Fresh Ingrendients
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat incidunt tempore atque voluptatem fugit, neque ut
                  sunt vero quas dolores suscipit eveniet? At?
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:translate-x-[10%]">
              <img src={img2} className="w-44 md:w-52"></img>
              <div className="w-80 lg:w-125 md:mt-0">
                <h1 className="font-dancing font-semibold text-3xl md:text-4xl text-secondary mb-2">
                  Handmade Mozarella
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat incidunt tempore atque voluptatem fugit, neque ut
                  sunt vero quas dolores suscipit eveniet? At?
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center text-center md:translate-x-[-70%] lg:translate-x-[-20%]">
              <img src={img3} className="w-44 md:w-52"></img>
              <div className="w-80 mt-5 lg:w-125 md:mt-0">
                <h1 className="font-dancing font-semibold text-3xl md:text-4xl text-secondary mb-2">
                  Secret Recipe Sauce
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat incidunt tempore atque voluptatem fugit, neque ut
                  sunt vero quas dolores suscipit eveniet? At?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
