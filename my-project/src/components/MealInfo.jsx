import React from "react";
import { GiBasket } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
function MealInfo(props) {
  return (
    <div
      className={`fixed overflow-y-scroll bottom-0 right-0 rounded-[20px] w-full h-[75%] bg-white text-white transform transition-transform ${
        props.mealInfo ? "translate-y-0" : "translate-y-full "
      }`}
    >
      <button
        onClick={() => {
          props.setMealInfo(false);
        }}
        className="absolute text-black text-[1.5rem] top-4 left-4"
      >
        <MdOutlineClose />
      </button>
      <img
        className="h-[50%] w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s "
        alt=""
      />

      <div className="bg-gray-100 w-full h-[30%] text-black pl-4 pt-4 ">
        <p className="font-[500]">Klassik 0,25</p>
        <p className="text-blue-500 font-bold mb-2">32 000 so'm</p>
        <p className="text-gray-600">Klassik 0,25</p>
      </div>
      <div className="text-black flex gap-4 mt-4 ">
        <div className="flex rounded-[10px]  border ml-2 border-gray-400 px-4 py-1 justify-between w-full items-center">
          <button className="bg-gray-200 w-10 h-10 font-bold  rounded-full">
            -
          </button>
          <p>1</p>
          <button className="bg-blue-500 font-bold text-white w-10 h-10  rounded-full">
            +
          </button>
        </div>
        <div className="flex rounded-[10px] mr-2 border border-gray-400 px-4 py-1 bg-blue-500 justify-between w-[45%] items-center">
          <button>
            <GiBasket className="text-white " />
          </button>
          <p className=" whitespace-nowrap text-white"> Savatga qo'shish</p>
        </div>
      </div>
    </div>
  );
}
export default MealInfo;
