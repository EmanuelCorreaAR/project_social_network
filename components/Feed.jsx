import React from "react";
import {HiOutlineSparkles} from "react-icons/hi2"

const Feed = () => {
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer text-gray-600">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto h-9 w-9">
            <HiOutlineSparkles className=" h-9 "/>
        </div>
      </div>
    </div>
  );
};

export default Feed;
