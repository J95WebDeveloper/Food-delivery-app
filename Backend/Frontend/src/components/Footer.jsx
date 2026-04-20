import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


function Footer() {
  return (
    <>
      <div
        className="relative bg-black text-white z-10 wrapper" id="footer">
        <div className="md:py-[3rem] p-6 px-6 sm:px-12 lg:px-32">
          <div className="grid grid-cols-1  md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-20">
            <div className="grid gap-5">
              <div className="flex items-center gap-1">
                  <h1 className="text-4xl font-semibold">
                   <span className="inline-block -rotate-12">F</span>
                    oo<span className="text-primary">dy</span>
                  </h1>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                incidunt accusamus laborum! Dolorum, aliquid vitae illo
                reiciendis doloremque, repudiandae quasi nemo voluptatum placeat
                quam, recusandae voluptates eveniet iure rerum explicabo.
              </p>
              <div className="flex gap-3">
                <div className="border-2 border-white hover:border-secondary hover:text-secondary text-white hover:mt-[-5px] transition-all ease-in duration-300 cursor-pointer w-8 h-8 rounded-full place-items-center place-content-center">
                  <RiFacebookFill />
                </div>
                <div className="border-2 border-white hover:border-secondary hover:text-secondary text-white hover:mt-[-5px] transition-all ease-in duration-300 cursor-pointer w-8 h-8 rounded-full place-items-center place-content-center">
                  <FaTwitter />
                </div>
                <div className="border-2 border-white hover:border-secondary hover:text-secondary text-white hover:mt-[-5px] transition-all ease-in duration-300 cursor-pointer w-8 h-8 rounded-full place-items-center place-content-center">
                  <IoLogoInstagram />
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <h1 className="text-xl widget-title font-semibold">Links</h1>
              </div>
              <div className="grid gap-2 mt-9">
                <p>Home</p>
                <p>About us</p>
                <p>Delivery</p>
                <p>Privacy policy</p>
              </div>
            </div>

            <div>
              <div className=" relative">
                <h1 className="text-xl widget-title font-semibold">
                  Get in Touch
                </h1>
              </div>
              <div className="mt-9">
                <p>+1-212-456-7890</p>
                <p>contact@foody.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-12 lg:px-32">
          <hr className="py-2" />
          <div className="text-center text-gray-400 text-[12px] sm:text-sm pb-3 md:pb-5 md:mt-1">
           Copyright 2024 @ Foody.com- All Right Reserved
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
