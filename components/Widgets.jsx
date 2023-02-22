import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import News from "./News";
import { useState } from "react";

const Widgets = ({ newsResults, randomUserResults }) => {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-10 ">
      <div className=" w-[90%] xl:w-[75%] sticky top-0 bg-white py-2 z-50">
        <div className="flex items-center p-3 rounded-full relative ">
          <HiOutlineSearch className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-400 text-gray-700 focus:shadow-lg focus-bg-white bg-gray-100 space-y-5"
            type="text"
            placeholder="Search on Social"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] mt-5">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-purple-300 pl-4 pb-3 hover:text-[#a359a0]"
        >
          Show more
        </button>
      </div>
      <div className=" sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%] mt-5">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUserResults.slice(0, randomUserNum).map((randomUser) => (
          <div
            key={randomUser.login.username}
            className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-gray-200 "
          >
            <img
              className="rounded-full"
              width="40"
              src={randomUser.picture.thumbnail}
              alt="random_users"
            />
            <div className="truncate ml-4 leading-5">
              <h4 className="font-bold hover:underline text-[13px] truncate">
                {" "}
                {randomUser.login.username}{" "}
              </h4>
              <h5 className="text-[12px] text-gray-400 truncate ">
                {randomUser.name.first + " " + randomUser.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button onClick={()=>setRandomUserNum(randomUserNum +5)} className="text-purple-300 pl-4 pb-3 hover:text-[#a359a0]">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;
