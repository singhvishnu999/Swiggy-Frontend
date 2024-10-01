import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Item from './component/Item'
import OnClick from "./component/OnClick";
import FoodItem from "./component/FoodItem";

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className="flex">
        <OnClick toggle={toggle} setToggle={setToggle}/>
        <div className={`${!toggle && "backdrop-brightness-50 fixed -z-10"}`}>
          <Navbar toggle={toggle} setToggle={setToggle}/>
          <Item toggle={toggle}/>
          <FoodItem toggle={toggle}/>
        </div>
      </div>
    </>
  );
}

export default App;
