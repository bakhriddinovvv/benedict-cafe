import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
function Notification(props) {
  return (
    <div
      className={`fixed overflow-y-scroll  top-0 right-0 w-full h-full border-b border-black rounded-b-[15px] bg-white  transform transition-transform ${
        props.notification ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center w-[90%] mx-auto justify-evenly  py-4 border-b border-black font-bold">
        <button
          onClick={() => {
            props.setNotification(false);
          }}
        >
          <FaChevronLeft />
        </button>
        <p> Bildirishnomalar</p>
      </div>

      <img src="img/order.png" className="mx-auto mt-12" alt="" />
      <p className="w-[75%] mx-auto text-center mt-2 ">
        So’rovingiz bo’yicha xech qanday natija topilmadi
      </p>
    </div>
  );
}
export default Notification;
