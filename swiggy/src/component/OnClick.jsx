import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiGps } from "react-icons/ci";

const OnClick = ({toggle, setToggle}) => {

  return (
    <div className={`h-[100vh] w-[35vw] bg-white border shadow-md p-9 ${toggle ? 'hidden' : 'visible'}`}>
      <span className="text-3xl ml-9 hover:cursor-pointer" onClick={() => setToggle(toggle=true)}>
        <IoClose />
      </span>
      <input
        type="text"
        placeholder="Search for area, street name"
        className="m-9 border-2 mr-0 hover:shadow-md w-[20vw] h-[50px] p-4 font-bold"
      />
      <div className="m-9 hover:shadow-md w-[20vw] h-[100px] border-2 p-5 hover:cursor-pointer">
        <div className="flex space-x-3 font-semibold">
          <p className="text-2xl">
            <CiGps />
          </p>
          <p>Get current location</p>
        </div>
        <div className="font-light ml-9 text-sm"> Using GPS</div>
      </div>
    </div>
  );
};

export default OnClick;
