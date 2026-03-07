import React from "react";
import { useAuth } from "../context/AuthProvider";
import star from "../assets/1.png";


function GetAllItems() {

  const { foodList, addToCart } = useAuth();
  console.log(foodList);

  return (
    <div className="px-8 lg:px-28 mt-15 lg:mt-30">
      <div className="flex">
        <h1 className="text-[1.8rem] font-semibold mb-10 relative">
          Add More Items <span className="widgets"></span>
        </h1>
      </div>
      <div className="flex overflow-x-scroll wrapper gap-10 h-[300px]">
        {foodList.slice(0, 30).map((item, index) => {
          return (
            <div
              key={index}
              className=" relative hover:border-[1px] border-gray-300 item flex-shrink-0 cursor-pointer z-10">
              <img src={item.image} className="w-full h-46 object-cover" />
              <div className="flex flex-col items-center p-4">
                <p className="text-[20px] font-semibold text-center">
                  {item.name}
                </p>
                <div className="flex gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    <img src={star} className="w-5" />
                    <p>4.2</p>
                  </div>
                  <p className="text-rose-600 font-semibold">
                    ${item.price}.00
                  </p>
                </div>
              </div>

              <div className="absolute top-3 right-3 cursor-pointer">
                <button
                  onClick={() => addToCart(item._id)}
                  className="bg-primary text-white w-7 h-7 rounded-full text-center cursor-pointer active:scale-95"
                > +</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default GetAllItems;
