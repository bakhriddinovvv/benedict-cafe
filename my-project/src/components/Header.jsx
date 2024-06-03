import React from "react";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header(props) {
  return (
    <div>
      <div className="flex mt-4 justify-around gap-8 text-[1.2rem] shadow-lg pb-4">
        <p className="text-green-500 flex items-center justify-center text-[1.7rem] ml-6  font-bold">
          <span></span>Benedict
        </p>

        <div className="flex gap-4 ">
          <button
            onClick={props.toggleSearch}
            className="bg-gray-200 p-3 rounded-full"
          >
            <FaSearch className=" " />
          </button>
          <button
            onClick={props.toggleMenu}
            className="bg-green-400 p-3   rounded-full"
          >
            <GiHamburgerMenu className=" " />
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          props.setMapIsOpen(true);
        }}
        className="flex items-center mt-4 gap-4 font-bold mx-auto text-[1.2rem]"
      >
        Yetkazish manzilini tanlang <FaChevronDown />
      </button>
      <img src="img/Untitled.png " className="w-[90%] mx-auto mt-4" alt="" />

      <div className="flex overflow-x-scroll w-[90%] mx-auto gap-4 pb-4 mt-6 ">
        <a href="#limonads" className="  ">
          <img src="img/category.png" className="" alt="" />
          <p className="text-center text-[0.9rem] font-[500]">Limonadlar</p>
        </a>
        <a href="#limonads2" className="  ">
          <img src="img/category.png" className="" alt="" />
          <p className="text-center text-[0.9rem] font-[500]">Limonadlar</p>
        </a>
        <a href="#limonads3" className="  ">
          <img src="img/category.png" className="" alt="" />
          <p className="text-center text-[0.9rem] font-[500]">Limonadlar</p>
        </a>
      </div>
    </div>
  );
}
export default Header;