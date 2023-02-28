import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const[post, setPost] = useState({})

  useEffect(() => {
    onSnapshot(doc(db, "post", postId), (snapshot) => {
      setPost(snapshot.docs);
    });
  }, [postId, db]);
 
  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg h-[300px] w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-300 rounded-xl shadow-lg"
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-1 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-10 h-10 flex items-center justify-center"
              >
                <IoMdClose className="h-[22px] text-gray-700 " />
              </div>
            </div>
            <h1>{post?.data().username}</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentModal;
