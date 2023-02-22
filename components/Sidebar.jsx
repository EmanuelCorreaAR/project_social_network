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
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
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
        {session && (
          <>
            <SidebarMenu text="Notifications" Icon={HiOutlineBell} />
            <SidebarMenu text="Message" Icon={HiOutlineInbox} />
            <SidebarMenu text="Bookmark" Icon={HiOutlineBookmark} />
            <SidebarMenu text="List" Icon={HiOutlineClipboard} />
            <SidebarMenu text="Profile" Icon={HiOutlineUser} />
            <SidebarMenu text="More" Icon={HiOutlineDotsCircleHorizontal} />
          </>
        )}
      </div>

      {/*button*/}

      {session ? (
        <>
          <button className="bg-[#a359a0] text-white rounded-full w-56 h-12 font-bold shadow-lg shadow-gray-200 hover:brightness-95 text-lg hidden xl:inline">
            Sweet
          </button>
          {/*mini-profile*/}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              onClick={signOut}
              className="h-10 w-10 rounded-full xl:mr-2"
              src={session.user.image}
              alt="user-img"
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-400">@{session.user.username}</p>
            </div>
            <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-[#a359a0] text-white rounded-full w-36 h-12 font-bold shadow-lg shadow-gray-200 hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Sidebar;
