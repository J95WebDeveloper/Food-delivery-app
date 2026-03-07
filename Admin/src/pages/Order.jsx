import React, { useEffect, useState } from "react";
import axios from "axios";
import parcel from "../assets/parcel.png";

function Order() {
  const [data, setData] = useState([]);

  const fetchAllOrders = async () => {
    const res = await axios.get("http://localhost:3000/api/order/listorders");
    console.log(res.data.data);
    setData(res.data.data);
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post("http://localhost:3000/api/order/status", {
        orderId,
        status: e.target.value,
      });

      if (res.data.success) {
        fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="mt-20 pb-20 h-screen">
      <div className="px-6 sm:px-12 lg:px-64">
      <h1 className="text-xl md:text-3xl font-medium mb-7 md:mb-10">
        Order
        <span className="text-primary font-semibold"> Page</span>
      </h1>

      <div className="flex flex-col items-center gap-[20px] w-full">
        {data.map((order, index) => {
          return (
            <div key={index} className="mb-10 grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] bg-[#c3b3a3]/50 cart p-5 items-center gap-5">
              <img src={parcel} className="w-16" />
              <div>
              <p className="font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
               </p>
                <p className="mt-5 mb-2 font-semibold">{order.address.firstname + " " + order.address.lastname}</p>
                <p>{order.address.street + ", "}</p>
                <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      " " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                <p className="mt-3 font-medium">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p className="font-semibold text-red-700">${order.amount}.00</p>
              <div>
                <select onChange={(e) => statusHandler(e, order._id)} value={order.status} className="bg-[#dabfa3] max-w-[10vw_120px] p-[12px] outline-none">
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Order;
