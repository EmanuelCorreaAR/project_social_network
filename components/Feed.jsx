import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import Input from "./Input";
import Posts from "./Posts";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Emanuel Correa",
      username: "usuariosocial",
      userImg: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      img: "https://images.unsplash.com/photo-1676839560241-bca2c9116ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "Nice to have",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Emanuel Correa",
      username: "usuariosocial",
      userImg: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      img: "https://images.unsplash.com/photo-1676912116272-ef4450a2dc67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Wooow",
      timestamp: "3 hours ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer text-gray-600">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto h-9 w-9">
          <HiOutlineSparkles className=" h-9 " />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
