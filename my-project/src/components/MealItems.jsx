import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
function MealItem(props) {
  return (
    <div
      className={`fixed overflow-y-scroll top-0 right-0 w-full h-full bg-white text-white transform transition-transform ${
        props.mealItem ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-[90%]  mx-auto">
        <div className="text-black flex items-center gap-[32%] my-4  text-[1.2rem] border-b border-black pb-4  ">
          <button
            onClick={() => {
              props.setMealItem(false);
            }}
          >
            <FaAngleLeft />
          </button>
          <p className="font-bold">Hammasi</p>
        </div>
        <div className="flex gap-4 overflow-x-scroll pb-6">
          <button className="w-auto focus:bg-purple-500 focus:text-white whitespace-nowrap  px-3 py-1 rounded-[15px] bg-gray-200 text-gray-500 font-[500]">
            Hammasi
          </button>
          <button className="w-auto focus:bg-purple-500 focus:text-white whitespace-nowrap px-3 py-1 rounded-[15px] bg-gray-200 text-gray-500 font-[500]">
            Sog'lom ovqatlanish
          </button>
          <button className="w-auto focus:bg-purple-500 focus:text-white whitespace-nowrap px-3 py-1 rounded-[15px] bg-gray-200 text-gray-500 font-[500]">
            Limonadlar
          </button>
          <button className="w-auto focus:bg-purple-500 focus:text-white whitespace-nowrap px-3 py-1 rounded-[15px] bg-gray-200 text-gray-500 font-[500]">
            Asosiy taomlar
          </button>
          <button className="w-auto focus:bg-purple-500 focus:text-white whitespace-nowrap px-3 py-1 rounded-[15px] bg-gray-200 text-gray-500 font-[500]">
            Aperatiflar
          </button>
        </div>
        <p className="text-black text-[1.3rem] ml-2 mb-4 font-bold">Hammasi</p>
        <div className="text-gray-900 flex flex-wrap gap-4 ">
          <div className="bg-gray-200 w-[45%] rounded-[10px] ">
            <img
              className="w-[8rem] rounded-[10px] h-[9rem] mx-auto py-1"
              src="https://robosell.ams3.digitaloceanspaces.com/robosell/product/4285-782385.webp"
              alt=""
            />
            <p className="text-[0.8rem] ml-1">Yashil shakshuka</p>
            <div className="text-center mt-4">
              <button className="bg-white mb-4   px-2 py-1 rounded-[8px] shadow-lg font-[500] w-[90%] whitespace-nowrap">
                118 000 so'm
              </button>
            </div>
          </div>
          <div className="bg-gray-200 w-[45%] rounded-[10px] ">
            <img
              className="w-[8rem] rounded-[10px] h-[9rem] mx-auto py-1"
              src="https://robosell.ams3.digitaloceanspaces.com/robosell/product/4285-782385.webp"
              alt=""
            />
            <p className="text-[0.8rem] ml-1">Yashil shakshuka</p>
            <div className="text-center mt-4">
              <button className="bg-white mb-4   px-2 py-1 rounded-[8px] shadow-lg font-[500] w-[90%] whitespace-nowrap">
                118 000 so'm
              </button>
            </div>
          </div>
          <div className="bg-gray-200 w-[45%] rounded-[10px] ">
            <img
              className="w-[8rem] rounded-[10px] h-[9rem] mx-auto py-1"
              src="https://robosell.ams3.digitaloceanspaces.com/robosell/product/4285-782385.webp"
              alt=""
            />
            <p className="text-[0.8rem] ml-1">Yashil shakshuka</p>
            <div className="text-center mt-4">
              <button className="bg-white mb-4   px-2 py-1 rounded-[8px] shadow-lg font-[500] w-[90%] whitespace-nowrap">
                118 000 so'm
              </button>
            </div>
          </div>
          <div className="bg-gray-200 w-[45%] rounded-[10px] ">
            <img
              className="w-[8rem] rounded-[10px] h-[9rem] mx-auto py-1"
              src="https://robosell.ams3.digitaloceanspaces.com/robosell/product/4285-782385.webp"
              alt=""
            />
            <p className="text-[0.8rem] ml-1">Yashil shakshuka</p>
            <div className="text-center mt-4">
              <button className="bg-white mb-4   px-2 py-1 rounded-[8px] shadow-lg font-[500] w-[90%] whitespace-nowrap">
                118 000 so'm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MealItem;
