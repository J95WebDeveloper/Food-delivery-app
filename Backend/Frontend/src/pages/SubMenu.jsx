import React, { useState } from "react";
import { foodList } from "../assets/assets";
import FoodDisplay from "../components/FoodDisplay";
import { motion } from "framer-motion";


function SubMenu() {
  const [category, setCategory] = useState("All Chicken Dish");

  const offer = "15% off";

  return (
    <div className="py-10 md:py-15">
      <div className="px-6 sm:px-12 lg:px-32 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[2.6rem] sm:text-[3rem] font-semibold text-center">
            Today's Special <span className="text-primary">Offers</span>
          </h1>
          <p className="mb-15 mt-4 text-[11px] lg:mb-13 relative sm:text-sm text-center text-gray-400">
            <span className="relative inline-block">
              Savor the extraordinary with our culinary masterpieces crafted to perfection.
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 
                     w-15 h-1 bg-primary rounded-full"></span>
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {foodList.map((item, index) => {
            const isActive = category === item.menu_name;
            return (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name
                      ? "All Chicken Dish"
                      : item.menu_name,
                  )
                }
                className="relative flex items-center gap-3 font-medium pr-5 p-3 rounded-full md:w-[260px] cursor-pointer"
              >
                {/* Sliding Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white shadow-cart rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`w-12 h-12 border flex items-center justify-center rounded-full 
                    ${isActive ? "border-primary" : "border"}`}
                  >
                    <img src={item.menu_image} className="w-8 h-8" />
                  </div>
                  <p
                    className={`text-[20px] md:text-[17px] transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {item.menu_name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-8 lg:px-28 mt-10">
        <FoodDisplay category={category} offer={offer} />
      </div>
    </div>
  );
}

export default SubMenu;
