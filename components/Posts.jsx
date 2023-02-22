import React from "react";
import {
  HiDotsHorizontal,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineChartBar,
} from "react-icons/hi";
import Moment from "react-moment";

const Posts = ({ post }) => {
  return (
    <div className="flex p-2 cursor-pointer border-b border-gray-200   ">
      {/* user image */}
      <img
        className="h-10 w-10 rounded-full mr-4 "
        src={post.data().userImg}
        alt="user-img"
      />
      {/* right side */}
      <div>
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post  user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px] ">@{post.data().username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>
          {/* dot icon */}
          <HiDotsHorizontal className="h-10 hoverEffect w-10 hover:bg-purple-100 hover:text-[#a359a0] p-2" />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">
          {post.data().text}
        </p>
        {/* post image */}
        <img className="rounded-2xl mr-4" src={post.data().image} alt="post-img" />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <HiOutlineChat className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100" />
          <HiOutlineTrash className="h-9 w-9 hoverEffect p-1.5 hover:text-red-600 hover:bg-red-100"/>
          <HiOutlineHeart className="h-9 w-9 hoverEffect p-1.5 hover:text-red-600 hover:bg-red-100"/>
          <HiOutlineShare className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100"/>
          <HiOutlineChartBar className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100"/>
        </div>
      </div>
    </div>
  );
};

export default Posts;
