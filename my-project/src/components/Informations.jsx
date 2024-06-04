import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
function Informations(props) {
  const [myInfo, setMyInfo] = useState(false);
  const [inp1Value, setInp1Value] = useState("");
  const [inp2Value, setInp2Value] = useState("");

  return (
    <div
      className={`fixed overflow-y-scroll  top-0 right-0 w-full h-[60%] border-b border-black rounded-b-[15px] bg-white  transform transition-transform ${
        props.info ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {myInfo == false ? (
        <div className="w-[90%] mx-auto">
          <button
            onClick={() => {
              props.setInfo(false);
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
            value={inp1Value}
            onChange={(e) => {
              setInp1Value(e.target.value);
              console.log(inp1Value);
            }}
            className="border border-black w-full h-8 rounded-[8px] mt-2"
            type="text"
          />
          <p className="text-[1.2rem] font-bold mt-2">
            Ism Familyangizni kiriting{" "}
          </p>
          <input
            value={inp2Value}
            onChange={(e) => {
              setInp2Value(e.target.value);
            }}
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
                setMyInfo(true);
              }}
              className="bg-purple-500 text-white w-[100%] py-2 rounded-[10px]"
            >
              Davom etish
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* ////// */}
      {myInfo ? (
        <div className="">
          <div className="flex items-center ml-4 py-4 gap-[20%] border-b border-black ">
            <button
              onClick={() => {
                props.setInfo(false);
              }}
            >
              <FaChevronLeft />
            </button>
            Shaxsiy ma'lumotlarim
          </div>
          <div>
            <p className="w-[90%] mx-auto border border-gray-400 text-gray-600 mt-4 rounded-[10px] pl-4 bg-gray-200 py-2">
              {inp1Value}
            </p>
            <p className="w-[90%] mx-auto border border-gray-400 text-gray-600 mt-4 rounded-[10px] pl-4 bg-gray-200 py-2">
              {inp2Value}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Informations;
