import React from "react";
import hero from "../assets/hero.png";


function Hero() {
  return (
    <div className="bg-black text-white">
      <div className="px-6 sm:px-12 lg:px-32 pt-20 md:pt-10">
        <div className="flex flex-col items-center md:justify-between md:flex-row gap-20 md:gap-0">
          <div className="flex flex-col md:w-[500px] lg:w-[600px] items-center text-center md:items-start md:text-start">
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-semibold">
              We Deliver <span className="hidden sm:inline">The</span>
            </span>
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-semibold">
               <span className="sm:hidden">The </span>Taste Of <span className="text-primary">Life</span>
            </span>
            <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aliquid cum suscipit nesciunt officiis perferendis, fugiat itaque
              quidem iure ea alias nobis vitae enim amet aliquam natus eius, vel
              nam.
            </p>
            <div className="shadow-btn w-[170px]">
              <button className="btn cursor-pointer w-[170px] hover:scale-105 text-white py-2.5 md:py-3 mt-6 sm:mt-10 text-[16px] sm:text-[1rem] font-medium">
                Order Now
              </button>
            </div>
          </div>

          <div className="">
            <img src={hero} className="md:w-[600px] box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
