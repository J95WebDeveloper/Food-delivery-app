import React from "react";
import banner from "../assets/banner.png";
import { BsGeoAlt } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import pizza from "../assets/pizza.png";
import { motion } from "framer-motion";
import { scaleIn } from "../hooks/motions";

function Banner() {
  return (
    <div className="bg-veg relative" id="banner">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0 lg:gap-20 lg:px-28 px-6 py-15 md:py-20">
        {/* left Side */}
        <div className="relative md:w-[800px] mt-10 hidden md:block">
          <div className="left-[-50px] top-20 md:top-10 lg:left-[-80px] lg:top-20 absolute bg-white flex items-center gap-2 p-4 lg:p-5 rounded-xl z-10">
            <CiClock2 className="text-primary text-2xl font-bold" />
            <p className="lg:text-lg text-black">Delivery in 30 minutes</p>
          </div>

          <img
            src={banner}
            className="bg-primary rounded-full w-[400px] md:w-[320px] md:ml-10 lg:w-[400px] lg:ml-10"
          />

          <div className="right-[-30px] top-90 lg:top-80 md:top-65 md:right-8 lg:right-5 absolute bg-white flex items-center gap-2 p-4 lg:p-5 rounded-xl">
            <p className="text-white bg-[#e04006] w-5 text-center">?</p>
            <p className="lg:text-lg text-black">Confused! How to use</p>
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl text-white lg:text-[2rem] font-medium">
            A Very Simple Process to Make Order Your Favourite Foods
          </h1>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 rounded-full w-10 h-10 lg:w-11 lg:h-11 place-content-center place-items-center text-primary text-xl">
                <BsGeoAlt />
              </div>
              <p className="lg:text-[1.12rem] text-gray-400">
                Set Your Location
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/20 rounded-full w-11 h-10 lg:w-11 lg:h-11 place-content-center place-items-center text-primary text-xl">
                <IoIosCheckmarkCircleOutline />
              </div>
              <p className="lg:text-[1.12rem] text-gray-400">
                Choose the food you want to order
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/20 rounded-full w-12 h-10 lg:w-11 lg:h-11 place-content-center place-items-center text-primary text-xl">
                <BsCashCoin />
              </div>
              <p className="lg:text-[1.12rem] text-gray-400">
                Confirm order with payment method
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/20 rounded-full w-12 h-10 lg:w-11 lg:h-11  place-content-center place-items-center text-primary text-xl">
                <BsHourglassSplit />
              </div>
              <p className="lg:text-[1.129rem] text-gray-400">
                within 30 minutes you will get your food
              </p>
            </div>
            <div>
              <button className="btn shadow-btn w-[190px] p-2 py-3 rounded-md text-white text-md mt-8">
                Order Food Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.img
        {...scaleIn(0.4)}
        src={pizza}
        className="absolute w-48 md:w-52 bottom-[-55px] lg:w-96 lg:bottom-[-80px] right-0 box"
      />
    </div>
  );
}

export default Banner;
