import React, { useState } from "react";
import { menuList } from "../assets/assets";
import FoodDisplay from "../components/FoodDisplay";
import { Link } from "react-router-dom";

function Menu() {
  const [category, setCategory] = useState("Salad");

  return (
    <div className="py-10 md:py-15">
      <div className="px-6 sm:px-12 lg:px-32" id="menu">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[2.7rem] sm:text-[3rem] font-semibold leading-wide">
            Our Menu
          </h1>
          <p className="mb-13 mt-2 md:w-100 relative text-[11px] sm:text-[13px]  md:text-sm text-center text-gray-400 inline-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.quaerat facilis repellendus dolorum.
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 
                     w-15 h-1 bg-primary rounded-full"></span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 md:mt-5 overflow-x-scroll wrapper">
          {menuList.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "Salad" : item.menu_name,
                )
              }
              className="flex flex-col items-center flex-shrink-0 cursor-pointer">
              <img
                src={item.menu_image}
                className="w-25 h-25 md:w-34 md:h-34 rounded-full object-cover"
              />
              <p className="font-medium mt-1">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 lg:px-28 mt-15 md:mt-15">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
}

export default Menu;
