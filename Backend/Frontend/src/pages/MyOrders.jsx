import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import parcel from "../assets/parcel.png";
import { HOC } from "../components/HOC";
import { motion } from "framer-motion";
import { slideDownStiff, scaleIn } from "../hooks/motions";

function MyOrders() {
  const { token } = useAuth();
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await axios.post(
        "/api/order/userorders",
        {},
        { headers: { token } },
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
    <div className="px-6 sm:px-12 lg:px-32 py-15 md:py-25">
      {!data.length > 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <motion.div {...slideDownStiff(0.4)}>
            <img src={parcel} className="box w-32 md:w-52 mb-5" />
          </motion.div>
          <motion.p {...scaleIn(1)} className="font-medium md:text-xl">
            {" "}
            No Order Placed
          </motion.p>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl">
            Your <span className="text-secondary font-medium">Order</span>
          </h1>
          <hr className="text-gray-300 my-2 mb-8" />
          <div className="flex-1">
            {data.map((order, index) => (
              <div className="">
                <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_2fr_2fr_1fr] items-center gap-5">
                  <img src={parcel} className="w-16" />
                  <p>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " - " + item.quantity + " ";
                      } else {
                        return item.name + " - " + item.quantity + " , ";
                      }
                    })}
                  </p>
                  <p>{order.items.length}</p>
                  <p className="font-medium">${order.amount}.00</p>
                  <p className="">{order.status}</p>
                  <p className="">
                    {order.payment === "COD" ? "Cash on Delivery" : "UPI Pay"}
                  </p>
                  <button
                    onClick={fetchOrder}
                    className="bg-primary text-white font-medium py-2 w-40"
                  >
                    Track Order
                  </button>
                </div>

                <div className="md:hidden flex flex-col gap-5 text-[15px]">
                  <div className="flex items-center justify-between gap-5">
                    <img src={parcel} className="w-16" />
                    <p>
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " - " + item.quantity + " ";
                        } else {
                          return item.name + " - " + item.quantity + " , ";
                        }
                      })}
                    </p>
                  </div>
                  <p className="flex items-center justify-between">Items : <span>{order.items.length}</span></p>
                  <p className="flex items-center justify-between font-medium">Total Price :<span>${order.amount}.00</span></p>
                  <p className="flex items-center justify-between">Status : <span>{order.status}</span></p>
                  <p className="flex items-center justify-between">Payment :
                    <span>{order.payment === "COD" ? "Cash on Delivery" : "UPI Pay"}</span>
                  </p>
                  <button
                    onClick={fetchOrder}
                    className="bg-primary text-white font-medium py-2 w-40 cursor-pointer"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HOC(MyOrders);
