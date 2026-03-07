import React from "react";
import { useAuth } from "../context/AuthProvider";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { removeCartItem } from "../hooks/motions";
import { FaArrowLeftLong } from "react-icons/fa6";

function CartItems() {
  const { cartItems, foodList, addToCart, removeFromCart, getTotalCartAmount } =
    useAuth();

  return (
    <div className="px-6 sm:px-12 lg:px-32 mt-5 lg:mt-15 md:mb-10 p-8">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 justify-between">
        {/* left side */}
        <motion.div className="lg:flex-1">
          <h1 className="text-2xl md:text-3xl">
            Your <span className="text-primary font-semibold">Cart</span>
          </h1>
          <hr className="text-gray-300 my-2 mb-5 sm:mb-7" />
          <div className="">
            <AnimatePresence>
              {foodList.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <motion.div
                      key={index}
                      {...removeCartItem(index * 0)}
                      className="bg-center bg-cover">
                      <div className="md:px-4 py-3 sm:py-4 grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] gap-3 sm:gap-5 items-center">
                        <img
                          src={item.image}
                          className="w-22 h-12 md:h-14 md:w-20"
                        />
                        <div className="">
                          <p className="font-semibold text-[13px] sm:text-[19px]">
                            {item.name}
                          </p>
                          <p className="text-[13px] sm:text-sm text-primary font-semibold mt-1">
                            ${item.price}.00
                          </p>
                        </div>
                        <p className="flex items-center sm:gap-2">
                          <button
                            disabled={cartItems[item._id] == 1}
                            onClick={() => removeFromCart(item._id)}
                            className="sm:bg-red-800 text-red-400 px-2 text-sm sm:text-[15px] cursor-pointer font-bold"
                          >
                            -
                          </button>
                          <span className="text-sm md:text-[18px]">
                            {cartItems[item._id]}
                          </span>
                          <button
                            onClick={() => addToCart(item._id)}
                            className="text-green-400 sm:bg-green-800 px-2 text-sm sm:text-[15px] cursor-pointer "
                          >
                            +
                          </button>
                        </p>
                        <p className="text-[14px] sm:text-[15px] md:text-[17px] text-primary font-semibold">
                          ${item.price * cartItems[item._id]}.00
                        </p>
                        <div
                          onClick={() => removeFromCart(item._id)}
                          className="text-primary md:w-9 md:h-9 flex items-center justify-center cursor-pointer">
                          <FaTrash />
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* right side */}
        <div className="relative">
          <div className="bg-footer lg:w-[400px] w-full">
            <div className="md:px-5 py-5">
              <h1 className="text-2xl md:text-3xl font-medium">Summary</h1>
              <div className="mt-8 md:mt-12">
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Subtotals</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr className="text-gray-500 my-2 mb-7" />
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Delivery Fee</p>
                  <p>${2}</p>
                </div>
                <hr className="text-gray-500 my-2 mb-7" />
                <div className="flex text-[16px] items-center justify-between text-gray-400">
                  <p>Total</p>
                  <p>${getTotalCartAmount() + 2} </p>
                </div>
              </div>
              <Link to={"/order"}>
                <button className="mt-8 md:mt-12 cursor-pointer font-medium py-2 text-md sm:py-3 md:text-[17px] bg-primary text-white w-full">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <div className="flex items-center gap-2 text-secondary font-medium md:text-lg cursor-pointer">
          <FaArrowLeftLong /> Continue
        </div>
      </Link>
    </div>
  );
}

export default CartItems;
