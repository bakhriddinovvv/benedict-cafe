import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { AiFillFileUnknown } from "react-icons/ai";
function Order(props) {
  return (
    <div
      className={`fixed overflow-y-scroll  top-0 right-0 w-full h-full border-b border-black rounded-b-[15px] bg-white  transform transition-transform ${
        props.order ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center w-[90%] mx-auto gap-[30%] py-4 border-b border-black font-bold">
        <button
          onClick={() => {
            props.setOrder(false);
          }}
        >
          <FaChevronLeft />
        </button>
        Buyurtmalarim
      </div>
      <div className="flex gap-4 border border-black w-[50%] font-bold bg-gray-200 py-1 px-2 mx-auto mt-8 rounded-[10px]">
        <button className="border focus:bg-white border-black py-1 w-[5rem] rounded-[10px]">
          Faol
        </button>
        <button className="border focus:bg-white border-black py-1 w-[5rem]  rounded-[10px]">
          Barchasi
        </button>
      </div>
      <AiFillFileUnknown className="h-20 w-full my-4" />
      <p className="w-[75%] mx-auto text-center mt-2 ">
        So’rovingiz bo’yicha xech qanday natija topilmadi
      </p>
    </div>
  );
}
export default Order;
