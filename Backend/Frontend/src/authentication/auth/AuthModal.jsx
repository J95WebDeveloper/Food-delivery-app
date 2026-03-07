import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { motion, AnimatePresence } from "framer-motion";

function AuthModal({ setOpenLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-700/50 z-50 flex items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpenLogin(false)}
    >
      <motion.div
        className="md:h-[450px] px-6 sm:px-12 md:w-[700px] lg:w-[800px] w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* FIXED BACKGROUND */}
        <div className="bg-black h-full">
          {/* ONLY THIS SWAPS */}
          <AnimatePresence mode="wait">
            {isLogin ? (
              <Login
                key="login"
                setOpenLogin={setOpenLogin}
                switchToRegister={() => setIsLogin(false)}
              />
            ) : (
              <Register key="register" switchToLogin={() => setIsLogin(true)} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AuthModal;
