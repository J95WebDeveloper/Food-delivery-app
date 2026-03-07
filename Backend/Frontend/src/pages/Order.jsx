import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { handleSuccess } from "../components/Toaster";
import { Link, useNavigate } from "react-router-dom";
import { HOC } from "../components/HOC";
import cookie from "../assets/cookies.png";
import { Validation } from "../authentication/validation/formValidation";
import { motion } from "framer-motion";
import { scaleIn } from "../hooks/motions";

function Order() {
  const { token, cartItems, foodList, getTotalCartAmount } = useAuth();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation(values)) {
      let orderItem = [];
      foodList.map((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItem.push(itemInfo);
        }
      });

      let orderData = {
        address: values,
        items: orderItem,
        amount: getTotalCartAmount() + 2,
      };
      try {
        const res = await axios.post(
          "http://localhost:3000/api/order/placeorder",
          orderData,
          { headers: { token } },
        );
        handleSuccess(res.data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <div className="relative mb-25 lg:mb-40">
      <div className="px-6 sm:px-12 lg:px-32 my-15 md:mt-15 max-w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col md:flex-row justify-between gap-15 lg:gap-20"
        >
          <div className="lg:flex-1">
            <h1 className="text-2xl md:text-3xl">
              Order <span className="text-primary font-semibold">Placed</span>
            </h1>
            <hr className="text-gray-300 my-2 mb-5 sm:mb-7" />
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-5">
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  placeholder="First name"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  placeholder="Last name"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
              </div>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="email"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
              <input
                type="text"
                name="street"
                onChange={handleChange}
                placeholder="Street"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />

              <div className="flex gap-3">
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  placeholder="City"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  placeholder="State"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  name="zipcode"
                  onChange={handleChange}
                  placeholder="Zipcode"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  placeholder="country"
                  className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
                />
              </div>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-medium">
                Summary
              </h1>
              <div className="mt-10 lg:mt-15">
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Subtotals</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr className="text-gray-500 my-2 mb-7" />
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Delivery Fee</p>
                  <p>{2}</p>
                </div>
                <hr className="text-gray-500 my-2 mb-7" />
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Total</p>
                  <p>${getTotalCartAmount() + 2} </p>
                </div>

                <div className="mt-8">
                  <p className="text-[16px] text-gray-400">Promt Code</p>
                  <div className="mt-2 flex items-center border-[1px] border-gray-500 py-0.5 px-1">
                    <input
                      type="text"
                      className="px-3 py-2 w-full outline-none"
                    />
                    <button className="bg-gray-800 py-2 px-5 text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-10 lg:mt-5 py-3 bg-primary text-md font-medium md:text-[17px] text-white w-full cursor-pointer">
                Proceed To Payment
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="absolute bottom-[-100px] md:bottom-[-90px] right-0 lg:right-10 lg:top-100">
        <motion.img
          {...scaleIn(0.2)}
          src={cookie}
          className="w-[250px] lg:w-[350px]"
        />
      </div>
    </div>
  );
}

export default HOC(Order);
