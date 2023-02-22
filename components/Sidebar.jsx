import Image from "next/image";
import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import {
  HiOutlineHome,
  HiOutlineHashtag,
  HiOutlineBell,
  HiOutlineInbox,
  HiOutlineBookmark,
  HiOutlineClipboard,
  HiOutlineUser,
  HiOutlineDotsCircleHorizontal,
  HiDotsHorizontal,
} from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-20">
      {/*logo*/}
      <div className="hoverEffect p-0 hover:bg-purple-100 xl:px-1">
        <Image
          src="https://res.cloudinary.com/drscelx6f/image/upload/v1676919772/Social%20network%20images/Logo_Social_uu1fzq.png"
          width="70"
          height="70"
        ></Image>
      </div>
      {/*menu*/}
      <div className=" mt-4 mb-3 xl:items-start">
        <SidebarMenu text="Home" Icon={HiOutlineHome} active />
        <SidebarMenu text="Explore" Icon={HiOutlineHashtag} />
        <SidebarMenu text="Notifications" Icon={HiOutlineBell} />
        <SidebarMenu text="Message" Icon={HiOutlineInbox} />
        <SidebarMenu text="Bookmark" Icon={HiOutlineBookmark} />
        <SidebarMenu text="List" Icon={HiOutlineClipboard} />
        <SidebarMenu text="Profile" Icon={HiOutlineUser} />
        <SidebarMenu text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      {/*button*/}

      <button className="bg-[#a359a0] text-white rounded-full w-56 h-12 font-bold shadow-lg shadow-gray-200 hover:brightness-95 text-lg hidden xl:inline">
        Sweet
      </button>
      {/*mini-profile*/}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="h-10 w-10 rounded-full xl:mr-2" src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="user-img" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Emanuel Correa</h4>
          <p className="text-gray-400" >Mi User @ssdfsdf</p>
        </div>
        <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
    </div>
  );
};

export default Sidebar;
