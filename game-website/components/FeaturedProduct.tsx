import React from "react";
import FeaturedProductSlider from "./Helper/FeaturedProductSlider";

const FeaturedProduct = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gray-900">
      <div className="w-[95%] mx-auto flex items-center justify-between ">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Featured Products
        </h1>
        <button className="text-[13px] md:text-[15px] text-yellow-300 ">
          VIEW ALL PRODUCT
        </button>
      </div>

      <div className="w-[95%] mt-[2rem] mx-auto ">
        <FeaturedProductSlider/>
      </div>

    </div>
  );
};

export default FeaturedProduct;
