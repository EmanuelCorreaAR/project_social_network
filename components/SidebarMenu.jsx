import React from "react";
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

const SidebarMenu = ({ text, Icon , active}) => {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-4">
      <Icon size={25} />
      <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  );
};

export default SidebarMenu;
