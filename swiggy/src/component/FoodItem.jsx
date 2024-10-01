import React from "react";
import { itemFood } from "../assets/data/data";
import { IoStar } from "react-icons/io5"


const FoodItem = ({toggle}) => {
  return (
    <>
      <div className="font-bold text-3xl justify-between">
        Top restaurant chains in Chhindwara
      </div>
      <div className="flex flex-wrap gap-5 justify-between">
        {itemFood.map((item, idx) => (
          <div key={idx} className=" m-[2vw] relative">
            <img
              src={item.image}
              alt="Food Unavailable"
              className={`h-[200px] w-[270px] rounded-md ${'brightness-50'}`}
            />
            <div className="text-white font-extrabold text-2xl absolute top-40 z-10"> {item.offer} </div>
            <div className="text-xl font-semibold"> {item.title} </div>
            <div className="flex gap-2 font-semibold">
                <div className="text-white bg-green-600 rounded-full h-4 mt-1"><IoStar /></div>
                {item.rating}
                <div className="font-bold"> {item.minTime}-{item.maxTime} mins </div>
                </div>
            <div className="text-xl "> {item.name} </div>
            <div className="text-xl "> {item.place} </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodItem;
