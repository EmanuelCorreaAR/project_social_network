import React from "react";
import { HiOutlineEmojiHappy, HiOutlinePhotograph } from "react-icons/hi";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
      className="h-11 w-11 rounded-full cursor-pointer hover:brightness-90 "
        src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
        alt="user-img"
      />
      <div className="w-full divide-y divide-gray-200 ">
        <div className="">
          <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-300 tracking-widemin-h-[50px] text-gray-700" rows="3" placeholder="Something new?"></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <HiOutlinePhotograph className="text-3xl text-[#a359a0] hoverEffect p-2 " />
            <HiOutlineEmojiHappy className="text-3xl text-[#a359a0] hoverEffect p-2 " />
          </div>
          <button className="bg-[#a359a0] text-white rounded-full px-4 py-1.5 font-bold shadow-md shadow-gray-200 hover:brightness-95 disabled:opacity-50">Sweet</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
