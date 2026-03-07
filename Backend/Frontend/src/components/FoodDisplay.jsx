import React from "react";
import { useAuth } from "../context/AuthProvider";
import DisplayFood from "./DisplayFood";
import { LayoutGroup } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FoodDisplay({ category, offer }) {
  const navigate = useNavigate()
  const { foodList } = useAuth();

  const filteredItems = foodList
    .filter(item => item.category === category)
    .slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 mb-8">
        <LayoutGroup>
          {filteredItems.map((item, index) => {
            if (category === item.category) {
              return (
                <div key={item._id}>
                  <DisplayFood item={item} offer={offer} />
                </div>
              );
            }
          })}
        </LayoutGroup>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/allfoods/${category}`)}
          className="px-6 py-2 text-sm bg-primary text-white cursor-pointer hover:shadow-lg transition-shadow duration-300">
          Show More
        </button>
      </div>
    </>
  );
}

export default FoodDisplay;
