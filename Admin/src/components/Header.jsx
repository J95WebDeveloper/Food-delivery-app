import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import parcel from "../assets/parcel.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import bg from '../assets/bg1.png'


function Header() {

  const[menu, setMenu] = useState('Add')
  const links = [
    {name: 'Add', link:'/', icon: <IoIosAddCircle /> },
    {name: 'List', link:'/list', icon: <BsCart4 /> },
    {name: 'Order', link:'/order', icon: <img src={parcel} className="w-5"/>},
  ]

  return (
    <div className="px-6 sm:px-12 lg:px-64 h-20 shadow-sm">
      <div className="flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="flex items-center gap-1">
            <h1 className="text-3xl md:text-4xl font-semibold">
              <span className="inline-block -rotate-12">F</span>
              oo<span className="text-primary">dy</span>
            </h1>
          </div>
        </Link>
        <div>
          <ul className="flex font-medium items-center gap-14 text-[17px]">
            {links.map((link, index) => (
              <li 
              key={link.name}
              onClick={() => setMenu(link.name)}
              className="flex items-center gap-2 cursor-pointer">
                <a href={link.link} className="flex items-center gap-2 cursor-pointer">
                  {link.icon}{link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cursor-pointer font-medium">
          <RxAvatar size={28}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
