import React from "react";

const News = ({ article }) => {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-3 py-2 space-x-0.5 hover:bg-gray-200 transition duration-200 ">
        <div className="space-y-0.5">
          <h6 className="text-[12px] font-bold ">{article.title}</h6>
          <p className="text-[10px]  font-medium text-gray-400">{article.source.name}</p>
        </div>
        <img className=" w-[75px] rounded-lg " src={article.urlToImage} alt="" />
      </div>
    </a>
  );
};

export default News;
