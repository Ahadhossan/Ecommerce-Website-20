import React from "react";
import NewsCard from "./Helper/NewsCard";


const News = () => {
  return (
    <div className="bg-gray-800 pt-[5rem] pb-[3rem]">
      <h1 className="w-[95%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white">
        Latest News
      </h1>
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[90%] mx-auto">
          <NewsCard image="/images/g2.jpg" title="New Update News" />
          <NewsCard image="/images/g4.jpg" title="Check Whats New" />
          <NewsCard image="/images/g7.jpg" title="New Tournament" />
        </div>
      </div>
    </div>
  );
};

export default News;
