import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
function Phone(props) {
  return (
    <div
      className={`fixed overflow-y-scroll  top-0 right-0 w-full h-[60%] border-b border-black rounded-b-[15px] bg-white  transform transition-transform ${
        props.phone ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-[90%] mx-auto">
        <button
          onClick={() => {
            props.setPhone(false);
          }}
          className="flex items-center gap-3 text-[1.1rem] mt-4 "
        >
          <FaChevronLeft />
          Orqaga
        </button>
        <p className="text-[1.2rem] font-bold mt-4">
          Telefon raqamingizni kiriting
        </p>
        <input
          className="border border-black w-full h-8 rounded-[8px] mt-2"
          type="text"
        />

        <p>
          Davom etish tugmasini bosish orqali siz bizning foydalanish
          qoidalarimiz ni qabul qilasiz.
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              props.setPhone(false);
            }}
            className="bg-purple-500 text-white w-[100%] py-2 rounded-[10px]"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}
export default Phone;
