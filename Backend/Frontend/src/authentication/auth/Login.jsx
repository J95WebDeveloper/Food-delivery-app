import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../context/AuthProvider";
import { Validation } from "../validation/loginValidation";
import { motion } from "framer-motion";
import { slideUp, scaleIn } from "../../hooks/motions";
import login from "../../assets/login.png";

function Login({ switchToRegister, setOpenLogin }) {
  const { setToken, setUser } = useAuth();
  const [showPassword, SetShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validation(values)) {
      useLogin(values, setOpenLogin, setToken, setUser);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      {/* left side */}
      <div>
        <img src={login} className="w-full h-full" />
      </div>

      {/* right side */}
      <div className="pb-8 w-full px-6 md:px-0 md:pb-0 md:pr-8 md:w-96 lg:w-80">
        <motion.h1
          {...scaleIn(0.2)}
          className="hidden md:block text-center font-medium text-secondary text-4xl mb-8"
        >
          Welcome
        </motion.h1>
        <motion.div {...slideUp(0.4)}>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col mt-5 items-center justify-center gap-5"
          >
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="enter your email"
              className="border-2 border-gray-400 w-full px-4 py-2 text-sm rounded-md focus:outline-none"
            />
            <div className="border-2 border-gray-400 px-4 w-full py-2 text-sm rounded-md focus:outline-none flex justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="enter your password"
                className="focus:outline-none"
              />
              <span
                onClick={() => SetShowPassword((prev) => !prev)}
                className="cursor-pointer"
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>
            <button
              type="submit"
              className="bg-primary w-full py-2 cursor-pointer text-sm text-white font-medium mb-3 rounded-md"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <span className="text-sm text-gray-500 mr-2">
              Don't have an account?
            </span>{" "}
            <span
              onClick={switchToRegister}
              className="cursor-pointer font-medium sm:text-[16px] text-secondary"
            >
              SignUp
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
