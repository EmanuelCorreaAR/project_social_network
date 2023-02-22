import React from "react";

const News = ({ article }) => {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200 ">
        <div className="space-y-0.5">
          <h6 className="text-[13px] font-bold ">{article.title}</h6>
          <p className="text-[11px]  font-medium text-gray-400">{article.source.name}</p>
        </div>
        <img className="w-[70px] rounded-lg " src={article.urlToImage} alt="" />
      </div>
    </a>
  );
};

export default News;
