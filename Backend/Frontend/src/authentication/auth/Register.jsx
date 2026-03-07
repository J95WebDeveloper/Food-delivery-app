import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Validation } from "../validation/registerValidation";
import { useRegister } from "../../hooks/useRegister";
import { motion } from "framer-motion";
import { slideUp, scaleIn } from "../../hooks/motions";
import register from "../../assets/register.jpg";

function Register({ switchToLogin, setOpenLogin }) {
  const [showPassword, SetShowPassword] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validation(values)) {
      useRegister(values, navigate, switchToLogin);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      {/* right side */}
      <div className="md:hidden">
        <img src={register} className="w-52" />
      </div>
      
      {/* left side */}
      <div className="pb-8 w-full px-6 md:px-0 md:pb-0 md:pl-8 md:w-96 lg:w-80">
        <motion.h1
          {...scaleIn(0.2)}
          className="hidden md:block text-center font-medium text-secondary text-3xl mb-8"
        >
          Create Account
        </motion.h1>
        <motion.div {...slideUp(0.4)}>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col mt-5 items-center justify-center gap-5"
          >
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="enter your name"
              className="border-2 border-gray-400 w-full px-4 py-2 text-sm rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="enter your email"
              className="border-2 border-gray-400 w-full px-4 py-2 text-sm  rounded-md focus:outline-none"
            />
            <div className="border-2 border-gray-400 px-4 w-full py-2 text-sm  rounded-md focus:outline-none flex justify-between items-center">
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
              className="bg-primary cursor-pointer w-full py-2 text-sm  text-white font-medium mb-3 rounded-md"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center">
            <span className="text-sm text-gray-500 mr-2">
              Already have an account?
            </span>{" "}
            <span
              onClick={switchToLogin}
              className="font-medium sm:text-[16px] text-secondary cursor-pointer"
            >
              SignIn
            </span>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className="hidden md:block">
        <img src={register} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Register;
