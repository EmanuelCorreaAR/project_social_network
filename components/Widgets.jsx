import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Widgets = () => {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 ">
        <div className="flex items-center p-3 rounded-full relative ">
          <HiOutlineSearch className="h-5 z-50 text-gray-500" />
          <input className="absolute inset-0 rounded-full pl-11 border-gray-400 text-gray-700 focus:shadow-lg focus-bg-white bg-gray-100 space-y-5" type="text" placeholder="Search on Social" />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
