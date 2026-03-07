import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import parcel from "../assets/parcel.png";
import banner from "../assets/order.png";
import { HOC } from "../components/HOC";
import { motion } from "framer-motion";
import { slideDownStiff, scaleIn } from "../hooks/motions";

function MyOrders() {
  
  const { token } = useAuth();
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [token]);

  return (
      <div className="px-6 sm:px-12 lg:px-32 mt-10 lg:py-10 mb-10">
      {!data.length > 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <motion.div {...slideDownStiff(0.4)}>
          <img src={parcel} className="box w-32 md:w-52 mb-5" />
          </motion.div>
          <motion.p {...scaleIn(1)}
          className="font-medium md:text-xl"> No Order Placed</motion.p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 md:gap-20">
          <div className="flex-1">
            <h1 className="text-3xl">
              Your <span className="text-primary font-medium">Order</span>
            </h1>
            <hr className="text-gray-300 my-2 mb-8" />
            {data.map((order, index) => {
              return (
                <div key={index}
                  className="py-7 grid grid-cols-1 mb-5 md:grid-cols-[0.8fr_2fr_1fr_1fr_2fr_2fr] shadow-cart items-center p-4 md:px-5 gap-5 bg-white cart">
                  <img src={parcel} className="w-16 lg:w-22" />
                  <p className="font-medium">
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " - " + item.quantity + " ";
                      } else {
                        return item.name + " - " + item.quantity + ", ";
                      }
                    })}
                  </p>
                  <p className="flex flex-col gap-1">
                    <span>Items: {order.items.length}</span>
                    <span className="text-primary font-medium block md:hidden">
                      ${order.amount}.00
                    </span>
                  </p>
                  <p className="text-primary font-medium hidden md:block">
                    ${order.amount}.00
                  </p>
                    <p className="font-semibold text-[#454545]">
                      {order.status}
                    </p>
                    <button
                      onClick={fetchOrder}
                      className="btn py-2 text-white cursor-pointer " >
                      Track Order
                    </button>
                </div>
              );
            })}
          </div>
          <div>
            <img src={banner} className="box" />
          </div>
        </div>
      )}
    </div>
  );
}

export default HOC(MyOrders);

