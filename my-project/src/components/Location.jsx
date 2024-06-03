import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { TbCurrentLocationOff } from "react-icons/tb";
function Location(props) {
  return (
    <div
      className={`fixed overflow-y-scroll  top-0 right-0 w-full h-full border-b border-black rounded-b-[15px] bg-white  transform transition-transform ${
        props.location ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center w-[90%] mx-auto justify-around  py-4 border-b border-black font-bold">
        <button
          onClick={() => {
            props.setLocation(false);
          }}
        >
          <FaChevronLeft />
        </button>
        <p> Manzillarim</p>
        <button
          onClick={() => {
            props.setLocation(false);
            props.setMapIsOpen(true);
          }}
          className="text-[1.2rem] px-3 pb-1 text-purple-500 border border-purple-500 rounded-full"
        >
          +
        </button>
      </div>
      <TbCurrentLocationOff className="h-20 w-full my-6" />
      <p className="w-[75%] mx-auto text-center mt-2 ">
        So’rovingiz bo’yicha xech qanday natija topilmadi
      </p>
    </div>
  );
}
export default Location;
