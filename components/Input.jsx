import React, { useRef, useState } from "react";
import { HiOutlineEmojiHappy, HiOutlinePhotograph } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { IoMdClose } from "react-icons/io";

const Input = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: input,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    //"data_url" ver issue
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={signOut}
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-90 "
            src={session.user.image}
            alt="user-img"
          />
          <div className="w-full divide-y divide-gray-200 ">
            <div className="">
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-300 tracking-widemin-h-[50px] text-gray-700"
                rows="2"
                placeholder="Something new?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            {selectedFile && (
              <div className="relative">
                <IoMdClose
                  onClick={() => setSelectedFile(null)}
                  className=" text-white absolute cursor-pointer m-3 shadow-md border-white rounded-full "
                />
                <img
                  src={selectedFile}
                  className={`${loading && "animate-pulse"}`}                  
                />
              </div>
            )}
            <div className="flex items-center justify-between pt-2.5">
              {!loading && (
                <>
                  <div className="flex">
                    <div onClick={() => filePickerRef.current.click()}>
                      <HiOutlinePhotograph className="text-2xl text-[#a359a0] hoverEffect p-2 " />
                      <input
                        type="file"
                        hidden
                        ref={filePickerRef}
                        onChange={addImageToPost}
                      />
                    </div>
                    <HiOutlineEmojiHappy className="text-2xl text-[#a359a0] hoverEffect p-2 " />
                  </div>
                  <button
                    onClick={sendPost}
                    disabled={!input.trim()}
                    className="bg-[#a359a0] text-white rounded-full px-4 py-1.5 font-bold shadow-md shadow-gray-200 hover:brightness-95 disabled:opacity-50"
                  >
                    Sweet
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
