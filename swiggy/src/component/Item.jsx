import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { catagaryData } from "../assets/data/categorydata";
const Item = ({ toggle }) => {
  const [idx, setidx] = useState(0);
  let arr = [];

  for (let i = idx; i < idx + 7; i++) {
    if (idx < 0) setidx(0);
    else if (idx + 8 > catagaryData.length) setidx(catagaryData.length - 8);
    else arr.push(catagaryData[i]);
  }

  return (
    <>
      <div className="flex justify-around">
        <div className="font-bold text-2xl mt-2 font-sans">
          Whats on Your Mind?
        </div>
        <div className="flex mt-5 ml-3 space-x-5 text-2xl">
          <FaLongArrowAltLeft onClick={() => setidx(idx - 1)} />
          <FaLongArrowAltRight onClick={() => setidx(idx + 1)} />
        </div>
      </div>
      <div className="flex overflow-hidden">
        {arr.map((item, idx) => (
          <div className={`shrink-0 w-[200px]`} key={idx}>
            <img
              src={item.image}
              alt="Foot Unavailable"
              className={`${!toggle && "brightness-50"}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Item;
