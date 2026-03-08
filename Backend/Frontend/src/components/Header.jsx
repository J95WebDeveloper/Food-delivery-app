import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import Responsive from "./Responsive";
import { FaShippingFast } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import AuthModal from "../authentication/auth/AuthModal";


function Header() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#banner" },
    { name: "Menu", link: "#menu" },
    { name: "Contact", link: "#footer" },
  ];

  const [menu, setMenu] = useState("Home");
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { token, totalQuantity, logout, user } = useAuth();
  
  return (
    <header className={`h-20 bg-black text-white sticky top-0 z-30`}>
      <div className="header flex items-center h-full justify-between px-6 sm:px-12 lg:px-32">
        <Link to={"/"}>
          <div className="flex items-center gap-1">
            <h1 className="text-3xl md:text-4xl font-semibold">
              <span className="inline-block -rotate-12">F</span>
               oo<span className="text-primary">dy</span>
            </h1>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            {Links.map((link, index) => (
              <li
                key={link.name}
                onClick={() => setMenu(link.name)}
                className={`${
                  menu === link.name ? "widget-title" : ""
                } relative`}>
                <a
                  href={link.link}
                  className={`duration-500 text-[15px] font-medium`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* buttons */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {token && <h1 className="font-medium">Hi, {user?.name}</h1>}
          <Link to={"/cart"}>
            <div className="relative cursor-pointer">
              <BsCart4 size={25} className="cursor-pointer" />
              <div className="absolute top-[-13px] right-[-5px] bg-primary w-5 h-5 rounded-full flex items-center justify-center text-xs text-white">
                {totalQuantity}
              </div>
            </div>
          </Link>
          <div className="relative z-20 cursor-pointer">
            {token ? (
              <div className="flex items-center gap-6 lg:gap-8">
                <Link to={"/myorder"}>
                  <FaShippingFast size={28} className="cursor-pointer" />
                </Link>
                <div onClick={logout}>
                  <button className="border hover:border-primary hover:text-primary px-3 py-1 cursor-pointer">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span onClick={() => setOpenLogin(true)}>
                  <RxAvatar size={30} className="cursor-pointer" />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex">
          <div className="flex items-center justify-center gap-5">
            {token && <h1>Hi, {user?.name}</h1>}
            <Link to={"/cart"}>
              <div className="relative">
                <BsCart4 size={20} className="cursor-pointer" />
                <p className="absolute top-[-15px] right-[-2px] bg-[#E04006] w-5 h-5 rounded-full flex items-center justify-center text-[10px] md:text-sm text-white">
                  {totalQuantity}
                </p>
              </div>
            </Link>
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="hover:bg-black p-0.5 border-[1px] hover:text-white cursor-pointer">
              {open ? <IoClose size={17}/> : <IoMenu size={17} />}
            </div>
          </div>
        </div>
      </div>

      <Responsive open={open} setOpen={setOpen} setOpenLogin={setOpenLogin} />

      {/* Login Modal */}
      <AnimatePresence>
        {openLogin && <AuthModal setOpenLogin={setOpenLogin} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
