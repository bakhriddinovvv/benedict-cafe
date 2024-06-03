import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";

import { TbCircleLetterI } from "react-icons/tb";

import { FaChevronDown } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
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
        <img src="img/benedict.png" className="mx-auto mt-8" alt="" />
        <div className="text-[1.1rem] font-[500] text-gray-400 pl-6 pt-12">
          <button
            onClick={() => {
              props.setInfo(true);
            }}
            className=" flex items-center gap-2 hover:bg-gray-200 p-1 rounded-[8px]  "
          >
            <BsPeopleFill /> Shaxsiy ma'lumotlarim
          </button>
          <button
            onClick={() => {
              props.setOrder(true);
            }}
            className="flex mt-4 items-center gap-2 hover:bg-gray-200 p-1 rounded-[8px]"
          >
            <RiListUnordered /> Buyurmalarim
          </button>
          <button
            onClick={() => {
              props.setLocation(true);
            }}
            className="flex items-center mt-4 gap-2 hover:bg-gray-200 p-1 rounded-[8px]"
          >
            <GrMapLocation /> Manzillarim
          </button>
          <button
            onClick={() => {
              props.setNotification(true);
            }}
            className="flex items-center gap-2 mt-4 hover:bg-gray-200 p-1 rounded-[8px]"
          >
            <IoIosNotifications /> Bildirishnomalar
          </button>

          <button
            onClick={() => {
              props.setAboutIsOpen(true);
            }}
            className="flex items-center gap-2 mt-4 hover:bg-gray-200 p-1 rounded-[8px]"
          >
            <TbCircleLetterI />
            Biz haqimizda
          </button>

          <p className="flex items-center gap-2 mt-4 text-black font-[450] hover:bg-gray-200 p-1 border border-gray-400 w-36 px-4 py-1 rounded-lg">
            <img
              className="h-4 w-4 "
              src="https://cdn-icons-png.flaticon.com/512/630/630641.png"
              alt=""
            />
            O'zbekcha
            <FaChevronDown />
          </p>
          <div className="flex items-center gap-2 mt-8 bg-gray-100 pl-2 w-[80%] rounded-[10px]">
            <FcManager className="h-10 w-10 " />
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Aloqa uchun</p>
              <p className="text-gray-700 font-bold text-[0.9rem]">
                +998338888807
              </p>
            </div>
          </div>

          <a href="https://www.instagram.com/benedict_cafe_tashkent/">
            <FaInstagram className="text-blue-500 mt-5 h-12 w-12 p-2 hover:bg-gray-200  rounded-full " />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hamburger;
