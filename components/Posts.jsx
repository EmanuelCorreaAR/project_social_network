import React, { useEffect, useState } from "react";
import {
  HiDotsHorizontal,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineChartBar,
  HiHeart,
} from "react-icons/hi";
import Moment from "react-moment";
import { db, storage } from "@/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "@/atom/modalAtom";

const Posts = ({ post }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasliked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session) {
      if (hasliked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  }

  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", post.id));
      if (post.data().image) {
        deleteObject(ref(storage, `posts/${post.id}/image`));
      }
    }
  }

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
        <div className="flex items-center justify-between ">
          {/* post  user info */}
          <div className="flex items-center space-x-3 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px] ">
              @{post.data().username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
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
        <img className="rounded-xl mr-4" src={post?.data()?.image} alt="" />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <HiOutlineChat
            onClick={() => {
              if (!session) {
                signIn();
              } else {
                setPostId(post.id);
                setOpen(!open);
              }
            }}
            className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100"
          />
          {session?.user.uid === post?.data().id && (
            <HiOutlineTrash
              onClick={deletePost}
              className="h-9 w-9 hoverEffect p-1.5 hover:text-red-600 hover:bg-red-100"
            />
          )}

          <div className="flex items-center">
            {hasliked ? (
              <HiHeart
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-1.5 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HiOutlineHeart
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-1.5 hover:text-red-600 hover:bg-red-100"
              />
            )}
            {likes.length > 0 && (
              <span
                className={`${hasliked && "text-red-600"} text-sm select-none`}
              >
                {" "}
                {likes.length}
              </span>
            )}
          </div>

          <HiOutlineShare className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100" />
          <HiOutlineChartBar className="h-9 w-9 hoverEffect p-1.5 hover:text-[#a359a0] hover:bg-purple-100" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
