import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/HL-Logo.png";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <nav className="bg-second h-75 font-second fixed w-full z-50">
      <div className="grid grid-cols-3 items-center h-full">
        <div className="flex justify-start ml-8">
          <button onClick={() => setShow(!show)}>
            <Bars3Icon className="w-10 h-10 text-light font-bold hover:bg-second-1 hover:rounded-20" />
          </button>
          <MenuItems show={show} />
        </div>
        <div className="flex justify-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Halo Luxury Logo"
              className="h-35 md:cursor-pointer"
            />
          </Link>
        </div>
        <div className="inline-flex justify-end gap-5 mr-10 items-center">
          <ul className="flex gap-5 items-center">
            <li className="w-10 h-10 flex items-center justify-center hover:bg-second-1 hover:rounded-20">
              <Link to={""} className="">
                <BellIcon className="w-7 h-7 text-light font-bold" />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center hover:bg-second-1 hover:rounded-20">
              <Link>
                <ShoppingBagIcon className="w-7 h-7 text-light font-bold" />
              </Link>
            </li>
          </ul>
          <div className="md:flex hidden md:shrink-0 gap-5">
            <button className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base md:none hover:bg-second-1">
              Login
            </button>
            <button className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base hover:bg-second-1">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
