import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import Input from "./Input";
import Posts from "./Posts";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

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
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1}}
          >
            <Posts key={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Feed;

//Dummy data
// const posts = [
//   {
//     id: "1",
//     name: "Emanuel Correa",
//     username: "usuariosocial",
//     userImg: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//     img: "https://images.unsplash.com/photo-1676763134010-5aefbe59285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
//     text: "Nice to have",
//     timestamp: "2 hours ago",
//   },
//   {
//     id: "2",
//     name: "Emanuel Correa",
//     username: "usuariosocial",
//     userImg: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//     img: "https://images.unsplash.com/photo-1676839560078-a6c6faa8637d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
//     text: "Wooow",
//     timestamp: "3 hours ago",
//   },
// ];
