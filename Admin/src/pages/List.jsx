import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash3Fill } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function List() {

  const [list, setList] = useState([]);

  const removeFood = async (foodId) => {
    try {
      const res = await axios.post("http://localhost:3000/api/removefood", {
        id: foodId,
      });
      await fetchUrl();
      if (res.data.success) {
        handleSuccess(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUrl = async () => {
    try {
      await axios.get("http://localhost:3000/api/food/getFood").then((res) => {
        console.log(res.data);
        setList(res.data.foods);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div className="mt-20 pb-20">
      <div className="px-6 sm:px-12 lg:px-64">
      <h1 className="text-xl md:text-3xl font-medium mb-7 md:mb-10">
        All Foods
        <span className="text-primary font-semibold"> List</span>
      </h1>
      <div>
        <div className="cart text-center grid grid-cols-5 md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] border-[1px] border-[#cacaca] text-[13px] md:text-[16px] bg-gray-300/40">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        
        <div className=" h-[74vh] overflow-y-auto wrapper mt-1">
        {list.map((item, index) => {
          return (
            <div key={index} className="cart mt-1 justify-items-center grid grid-cols-5 md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] border-[1px] border-[#cacaca] bg-[#c3b3a3]/50 text-[13px] md:text-[16px]">
              <img src={item.image} className="w-[40px] md:w-[50px]" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p className="font-semibold">${item.price}.00</p>
              <div className="flex items-center gap-3">
                <Link to={`/update/${item._id}`}>
                 <p className="cursor-pointer w-8 h-8 flex items-center justify-center">
                  <RiEditLine size={20} className="text-green-800 shadow-lg" />
                 </p>
                </Link>
                <p
                onClick={() => removeFood(item._id)}
                className="cursor-pointer w-8 h-8 flex items-center justify-center">
                <BsTrash3Fill size={17} className="text-red-800 shadow-lg" />
              </p>
              </div>  
            </div>
          );
        })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default List;
