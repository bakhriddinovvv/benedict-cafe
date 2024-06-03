import React from "react";
import { FaInstagram } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
function About(props) {
  return (
    <div
      className={`fixed overflow-y-scroll top-0 right-0 w-full h-full bg-white  transform transition-transform ${
        props.aboutIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="border-b border-gray-400 flex items-center pl-8 gap-24 py-4 ">
        <FaChevronLeft
          onClick={() => {
            props.setAboutIsOpen(false);
          }}
        />
        <p className="font-bold">Biz haqimizda</p>
      </div>

      <img
        className="mx-auto mt-8 h-16 w-24"
        src="https://robosell.ams3.digitaloceanspaces.com/robosell/shop/logo/1711863070026.png"
        alt=""
      />
      <p className="text-center font-bold mt-8 text-[1.1rem]">Benedict Nukus</p>
      <p className="ml-6 font-bold mt-12">Ish vaqti</p>
      <div className="flex justify-between text-gray-500 mx-6">
        <div>
          <p className="font-[500] text-black">Dushanba</p>
          <p>Seshanba</p>
          <p>Chorshanba</p>
          <p>Payshanba</p>
          <p>Juma</p>
          <p>Shanba</p>
          <p>Yakshanba</p>
        </div>
        <div>
          <p className="font-[500] text-black">8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
          <p>8:00 - 23:00</p>
        </div>
      </div>
      <p className="ml-6 mt-8 font-bold">Filiallar</p>
      <div className="flex items-center ml-6 mt-4">
        <button className="bg-gray-300 p-3 rounded-full">
          <GrMapLocation />
        </button>
        <div className="">
          <p>Benedict Nukus</p>
          <p className="text-gray-500">
            Uzbekistan, Tashkent, Nukus Street, 31/2
          </p>
        </div>
      </div>
      <p className="mt-12 ml-6 font-bold">Aloqa</p>
      <div className="flex items-center ml-6 mt-2 ">
        <button className="text-gray-500 p-3 rounded-full bg-gray-200">
          <MdPhoneInTalk />
        </button>
        <p>+998338888807 </p>
      </div>
      <p className="mt-8 font-bold ml-6">Ijtimoiy tarmoqla</p>
      <FaInstagram className="h-8 w-8 ml-6 mt-4 text-blue-500" />
    </div>
  );
}
export default About;
