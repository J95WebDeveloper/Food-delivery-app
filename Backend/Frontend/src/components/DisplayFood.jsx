import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import star from "../assets/star.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift } from "react-icons/fa";
import AuthModal from "../authentication/auth/AuthModal";

function DisplayFood({ item, offer }) {
  const { token, addToCart } = useAuth();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const BASE_URL = "https://foodapp-u2ve.onrender.com"

  const handleAdd = (e, itemId) => {
    e.stopPropagation();
    if (!token) {
      setOpenLogin(true);
      return;
    } else {
      addToCart(itemId);
    }
  };

  return (
    <>
      {/* Card */}
      <motion.div
        layoutId={`card-${item._id}`}
        className="group relative p-2 border bg-white border-gray-200 cursor-pointer shadow-lg lg:shadow-none lg:hover:shadow-xl"
      >
        <div onClick={() => setOpen(true)} className="overflow-hidden">
          <img
            src={`${BASE_URL}${item.image}`}
            className="cursor-pointer w-full h-46 object-cover active:scale-120 hover:scale-120 transition-all ease-in-out duration-300"
          />
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-5">
          <p className="text-[20px] font-semibold text-center truncate w-46">
            {item.name}
          </p>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1">
              <img src={star} className="w-5" />
              <p>4.2</p>
            </div>
            <p className="text-primary font-semibold">${item.price}.00</p>
          </div>
          <div className="mt-4">
            {offer && (
              <div className="flex gap-3 items-center mb-2">
                <span className="flex items-center font-medium gap-2 text-sm bg-secondary text-white py-1 px-3">
                  <FaGift />
                  Offer
                </span>
                <span className="font-medium">{offer}</span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-4 right-4 cursor-pointer md:hidden lg:group-hover:block">
          <button
            onClick={(e) => handleAdd(e, item._id)}
            className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer active:scale-95"
          >
            <MdShoppingBasket size={18} />
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <Modal
              item={item}
              offer={offer}
              setOpen={setOpen}
              handleAdd={handleAdd}
            />
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {openLogin && <AuthModal setOpenLogin={setOpenLogin} />}
      </AnimatePresence>
    </>
  );
}

export default DisplayFood;
