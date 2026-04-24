import React from "react";
import hero from "../assets/hero.png";
import leaf from "../assets/home-leaf-1.png";
import leaf2 from "../assets/home-leaf-2.png";
import brocc from "../assets/brocc.png";
import mushroom from "../assets/home-mushroom.png";
import olive from "../assets/home-olive.png";


function Hero() {
  return (
    <div className="bg-black text-white">
      <div className="px-6 sm:px-12 lg:px-32 pt-20">
        <div className="flex flex-col items-center md:justify-between md:flex-row gap-20 md:gap-0">
          <div className="flex flex-col md:w-[500px] lg:w-[600px]">
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-semibold">
              We Deliver The
            </span>
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-semibold">
              Taste Of <span className="text-primary">Life</span>
            </span>
            <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aliquid cum suscipit nesciunt officiis perferendis, fugiat itaque
              quidem iure ea alias nobis vitae enim amet aliquam natus eius, vel
              nam.
            </p>
            <div className="shadow-btn w-[170px]">
              <button className="btn cursor-pointer w-[170px] hover:scale-105 text-white py-2.5 md:py-3 mt-6 sm:mt-10 text-[14px] sm:text-[1rem] font-medium">
                Order Now
              </button>
            </div>
          </div>

          <div className="relative">
            <img src={hero} className="md:w-[600px] box" />

            <img
              src={leaf}
              className="absolute top-60 right-10 w-12 sm:top-100 sm:right-10 sm:w-16 lg:w-18 lg:top-120 "
            />
            <img src={leaf2}
              className="absolute top-[-50px] sm:top-[-80%] sm:right-0 w-12 md:top-[-20px] md:right-130 lg:top-10 md:w-12 lg:right-200"
            />
            <img
              src={olive}
              className="absolute top-20 left-20 w-8 md:w-10 md:top-60 md:left-20"
            />
            <img
              src={mushroom}
              className="absolute top-15 right-0 w-12 sm:w-16 sm:right-[-10px] lg:w-20 "
            />
            <img
              src={brocc}
              className="absolute top-55 left-[-25px] w-32 sm:top-85 sm:left-[-50px] sm:w-40 md:top-80 lg:top-100 lg:w-48 lg:left-[-50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
