import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../assets/modal.webp";
import { useAuth } from "../context/AuthProvider";
import { FaGift } from "react-icons/fa";

function Modal({ item, offer, setOpen, handleAdd }) {
  const { addToCart, removeFromCart, cartItems } = useAuth();
  return (
    <motion.div
      layoutId={`card-${item._id}`}
      className="fixed inset-0 z-50 bg-white overflow-auto"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}>
      <div>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center gap-4 font-medium text-white bg-secondary rounded-r-full px-5 py-1.5 md:px-8 md:py-2 cursor-pointer">
          Go Home
        </button>
      </div>

      <div className="px-6 sm:px-12 mt-5 lg:px-64 lg:mt-8 relative">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <img
              src={item.image}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
            />
          </div>
          <div className="w-80 md:w-130">
            <p className="md:mb-1 text-light font-medium">{item.category}</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">{item.name}</h2>
            <p className="mt-4 text-sm text-gray-400">{item.description}</p>
            <p className="py-4 font-medium text-lg">${item.price}.00 </p>
            <p className="flex gap-2 w-20 items-center justify-center mb-6 md:mb-8 mt-2">
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-700 px-2 text-white cursor-pointer font-bold">
                -
              </button>
              <span className="md:text-[18px]">{cartItems[item._id] || 0}</span>
              <button
                onClick={() => addToCart(item._id)}
                className="bg-green-700 text-white text-center px-2 text-sm md:text-[15px] cursor-pointer">
                +
              </button>
            </p>
            <button
              onClick={(e) => handleAdd(e, item._id)}
              className="bg-primary text-white px-4 py-2 text-sm font-medium cursor-pointer">
              Add to Cart
            </button>

           { offer && <p className="mt-5 sm:mt-7 flex items-center gap-2 font-medium">
              <span className="bg-secondary text-white px-3 py-1 font-medium flex items-center gap-2 text-sm">
                <FaGift /> Offer</span> 
                15% Off
            </p>
           }
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-medium mb-3">Ingredients </h1>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-4 py-1.5 text-sm font-medium bg-light text-white"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 mb-8">
          <h1 className="text-xl font-medium mb-3">Nutrition </h1>
          <div className="flex flex-wrap gap-2">
            <span className="flex flex-col text-sm items-center bg-light text-white font-medium px-3 py-1 md:px-4 md:py-1.5">
              <span>Calories</span>
              {item.nutrition.calories}
            </span>
            <span className="flex flex-col text-sm items-center bg-light text-white font-medium px-3 py-1 md:px-4 md:py-1.5">
              <span>Carbs</span>
              {item.nutrition.carbs}
            </span>
            <span className="flex flex-col text-sm items-center bg-light text-white font-medium px-3 py-1 md:px-4 md:py-1.5">
              <span>Protein</span>
              {item.nutrition.protein}
            </span>
            <span className="flex flex-col text-sm items-center bg-light text-white font-medium px-3 py-1 md:px-4 md:py-1.5">
              <span>Fat</span>
              {item.nutrition.fat}
            </span>
          </div>
        </div>
      </div>
       <div className="hidden md:block absolute right-0 md:bottom-[-18%]">
        <img src={img1} className="md:w-90 lg:w-105" />
      </div>
    </motion.div>
  );
}

export default Modal;
