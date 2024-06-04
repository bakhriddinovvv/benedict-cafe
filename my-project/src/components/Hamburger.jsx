import React from "react";

import { MdOutlineClose } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";

import { FaChevronDown } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

function Hamburger(props) {
  return (
    <div
      className={`fixed overflow-y-scroll top-0 right-0 w-72 h-full bg-white text-white transform transition-transform ${
        props.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => {
          props.setIsOpen(false);
        }}
        className="absolute left-2 top-2 text-gray-500 bg-gray-200 p-1 border border-gray-400 rounded-full text-[1.5rem]"
      >
        <MdOutlineClose />
      </button>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWcfOulLbdpPhmAdy8HwhkAOXYnuGlZMHEg&s"
          className="mx-auto mt-10 h-20 w-24"
          alt=""
        />
        <div className="text-[1.1rem] font-[500] text-gray-400 pl-6 pt-12">
          <button
            onClick={() => {
              props.setOrder(true);
            }}
            className="flex mt-4 items-center gap-2 hover:bg-gray-200 p-1 rounded-[8px]"
          >
            <RiListUnordered /> Buyurmalarim
          </button>

          <button className="flex items-center gap-2 mt-12 text-black font-[450] hover:bg-gray-200 p-1 border border-gray-400 w-36 px-4 py-1 rounded-lg">
            <img
              className="h-4 w-4 "
              src="https://cdn-icons-png.flaticon.com/512/630/630641.png"
              alt=""
            />
            O'zbekcha
            <FaChevronDown />
          </button>

          <a href="https://www.instagram.com/benedict_cafe_tashkent/">
            <FaInstagram className="text-blue-500 mt-5 h-12 w-12 p-2 hover:bg-gray-200  rounded-full " />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hamburger;
