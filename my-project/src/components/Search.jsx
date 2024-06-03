import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
function Search(props) {
  return (
    <div
      className={`fixed  top-0 right-0 w-full h-full bg-gray-200  transform transition-transform ${
        props.searchIsOpen ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <div className="flex gap-4 w-[90%] mx-auto mt-4 ">
        <button
          onClick={() => {
            props.setSearchIsOpen(false);
          }}
          className=" rounded-[8px] border border-gray-400 p-3 text-gray-600 bg-gray-100 text-[1.2rem] "
        >
          <FaChevronLeft />
        </button>
        <div className="flex w-full items-center justify-center">
          <input
            className="w-full h-12 rounded-lg pl-10 text-black border text-[1.2rem] border-gray-400"
            type="text"
            placeholder="Mahsultlarni qidirish"
          />
          <FaSearch className="absolute left-24 text-gray-500 " />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <p className="text-black font-bold text-[1.2rem] mt-16">
          Kategoriyalar
        </p>
        <div className="flex py-2 mt-8 items-center pl-2 bg-white rounded-[10px] border border-gray-400 overflow-hidden">
          <img
            className="h-10  w-10 rounded-[8px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className=" font-bold ">Limonadlar</p>
            <p className="text-[0.8rem] font-bold text-gray-500">
              9 Mahsulotlar
            </p>
          </div>
          <button className="ml-auto mr-4">
            <FaAngleRight />
          </button>
        </div>
        {/*  */}
        <div className="flex py-2 mt-4 items-center pl-2 bg-white rounded-[10px] border border-gray-400 overflow-hidden">
          <img
            className="h-10  w-10 rounded-[8px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className=" font-bold ">Limonadlar</p>
            <p className="text-[0.8rem] font-bold text-gray-500">
              9 Mahsulotlar
            </p>
          </div>
          <button className="ml-auto mr-4">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
