import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { AnimatePresence, motion } from "framer-motion";

function Responsive({ open, setOpen, setOpenLogin }) {
  const { token, logout } = useAuth();
  const [activeTag, setActiveTag] = useState("home");

  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -20 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-30 left-0 w-full z-20 px-9">
          <div className="text-[15px] bg-white text-black">
            <div className="flex flex-col text-center w-full">
              <a href="/" onClick={() => handleTag("home")}>
                <div
                  className={`${
                    activeTag === "home" ? "bg-secondary text-white" : ""
                  } p-4 active:bg-secondary cursor-pointer`}>
                  Home
                </div>
              </a>
              <hr className="text-gray-200"/>
              <a
                href="#banner"
                onClick={() => {
                  handleTag("about");
                  setOpen(false);
                }}>
                <div
                  className={`${
                    activeTag === "about" ? "bg-secondary text-white" : ""
                  } p-4 active:bg-secondary cursor-pointer`}>
                  About
                </div>
              </a>
              <hr className="text-gray-200"/>
              <a
                href="#menu"
                onClick={() => {
                  handleTag("menu");
                  setOpen(false);
                }}>
                <div
                  className={`${
                    activeTag === "menu" ? "bg-secondary text-white" : ""
                  } p-4 active:bg-secondary cursor-pointer`}>
                  Menu
                </div>
              </a>
              <hr className="text-gray-200"/>
              <a
                href="#contact"
                onClick={() => {
                  handleTag("contact");
                  setOpen(false);
                }}>
                <div
                  className={`${
                    activeTag === "contact" ? "bg-secondary text-white" : ""
                  } p-4 active:bg-secondary cursor-pointer`}>
                  Contact
                </div>
              </a>
              <hr className="text-gray-200"/>
              {!token ? (
                <span
                  onClick={() => {
                    setOpenLogin(true);
                    setOpen(false);
                  }}>
                  <div
                    className={`${
                      activeTag === "login" ? "bg-secondary text-white" : ""
                    }  active:bg-secondary cursor-pointer p-4`}>
                    Login
                  </div>
                </span>
              ) : (
                <div className="items-center w-full">
                  <NavLink
                    to={"/myorder"}
                    onClick={() => {
                      handleTag("order");
                      setOpen(false);
                    }}>
                    <div
                      className={`${
                        activeTag === "order" ? "bg-secondary text-white" : ""
                      } active:bg-secondary cursor-pointer p-4`}>
                      MyOrder
                    </div>
                  </NavLink>
                  <hr className="text-gray-200" />
                  <div
                    onClick={() => {
                      handleTag("logout");
                      logout();
                      setOpen(false);
                    }}
                    className="active:bg-secondary cursor-pointer p-4">
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Responsive;
