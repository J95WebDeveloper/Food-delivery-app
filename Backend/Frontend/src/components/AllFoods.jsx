import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import DisplayFood from "../components/DisplayFood";
import { HOC } from "../components/HOC";
import { categoryBg } from "../assets/assets";

function AllFoods() {
  const { category } = useParams();
  const { foodList } = useAuth();
  const bgImage = categoryBg[category];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFoods = foodList.filter((item) => item.category === category);

  return (
    <>
      <div
        className="relative h-70 md:h-80 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative px-6 sm:px-12 lg:px-32 flex items-center justify-center md:justify-start h-full">
          <h1 className="text-white font-medium text-5xl md:text-6xl md:text-start text-center">
            {category}
          </h1>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-32 mt-[-10px] mb-10 lg:mt-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredFoods.map((item) => (
            <div key={item._id}>
              <DisplayFood item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HOC(AllFoods);
