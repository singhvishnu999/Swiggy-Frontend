import React, { useState } from "react";
import { SiSwiggy } from "react-icons/si";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({toggle, setToggle}) => {
  return (
    <>
    <div className="static -z-10">
      <div className="flex p-5 justify-around shadow-md w-screen h-[13vh] ">
        <div className="flex space-x-5 gap-4">
          <div className="text-5xl text-orange-500 hover:text-6xl transition-all">
            <SiSwiggy />
          </div>
          <div className="flex font-bold align-middle underline mt-2 hover:text-orange-500 cursor-pointer"
          onClick={() => setToggle(toggle=false)} >other
          <div className="text-4xl mb-8 text-orange-600">
          <RiArrowDropDownLine />
            </div>
          </div>
        </div>

        <div className="flex space-x-9 mt-2 gap-2 font-semibold">

          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
              <IoBagCheckOutline />
            </div>
            Swiggy Corporate
          </div>
          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
              <CiSearch />
            </div>
            Search
          </div>
          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
              <BiSolidOffer />
            </div>
            Offers
            <div className="relative bottom-2 right-1 text-orange-500 text-xs"> New </div>
          </div>
          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
            <IoHelpBuoyOutline />
            </div>
            Help
          </div>
          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
            <FaRegUser />
            </div>
            Sign In
          </div>
          <div className="flex gap-2 hover:text-orange-500">
            <div className="text-2xl">
            <CiShoppingCart />
            </div>
            Cart
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
