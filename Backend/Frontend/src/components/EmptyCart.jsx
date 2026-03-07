import React from "react";
import cart from "../assets/cart2.png";
import { motion } from "framer-motion";
import { slideDownStiff, scaleIn } from "../hooks/motions";



function EmptyCart() {
  return (
    <div className="bg-white text-black py-10 lg:py-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <motion.div {...slideDownStiff(0.4)}>
            <img src={cart} className="w-48 md:w-62 lg:w-80" />
          </motion.div>
          <div className="text-center">
            <motion.p {...scaleIn(1)}
              className="text-lg md:text-2xl font-semibold" >
              Your cart is empty
            </motion.p>
            <motion.p {...scaleIn(1.5)}
             className="text-sm mt-0 md:text-md lg:text-lg md:mt-2 text-gray-500">
              Add some delicious food items!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
