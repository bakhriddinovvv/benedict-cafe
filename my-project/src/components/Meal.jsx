import React, { useState } from "react";

function Meal(props) {
  return (
    <>
      <div id="limonads">
        <p className="text-green-500 font-bold text-[1.5rem] ml-6">Limonads</p>
        <div class="flex overflow-x-scroll w-[90%] mx-auto gap-4 pb-4 mt-2    ">
          <div class="flex space-x-4 text-center ">
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <button className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </button>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div id="limonads2">
        <p className="text-green-500 font-bold text-[1.5rem] ml-6">Limonads</p>
        <div class="flex overflow-x-scroll w-[90%] mx-auto gap-4 pb-4 mt-2   ">
          <div class="flex space-x-4 text-center ">
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////// */}
      <div id="limonads3">
        <p className="text-green-500 font-bold text-[1.5rem] ml-6">Limonads</p>
        <div class="flex overflow-x-scroll w-[90%] mx-auto gap-4 pb-4 mt-2 mb-28    ">
          <div class="flex space-x-4 text-center ">
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
            {/*  */}
            <div class="w-[200px] h-[320px] bg-gray-100 rounded-[10px] overflow-hidden ">
              <img
                onClick={() => {
                  props.setMealInfo(true);
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPy61x8aFcP3F3aBptWtszZrNsC7oIiOdA&s"
                className="h-[55%] w-[100%]"
                alt=""
              />
              <p className="mt-2 font-bold text-[1.2rem]">Klassik 0,25</p>
              <p className="text-[1.2rem] ">⭐⭐⭐⭐⭐</p>

              <div className="shadow-xl border border-black bg-white w-[60%] mx-auto rounded-lg py-2 mt-4 ">
                777,000 UZS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Meal;
