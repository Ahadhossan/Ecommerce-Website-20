import React from "react";

const Hero = () => {
  return (
    <div className="relative  w-[100vw] h-[80vh] md:h-[90vh] bg">
      <div className="w-[95%] mx-auto h-[100%] flex flex-col items-start justify-center">
        <div className="text-white font-bold text-[25px] md:text-[30px] lg:text-[40px]">
          BEST PLACE TO BUY GAME
        </div>
        <p className="text-white text-[14px] md:text-[18px] w-[80%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] mb-[1rem] opacity-75 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          commodi, perferendis libero doloremque est in repellendus? Soluta,
          doloribus ipsum inventore quisquam id vero voluptates harum nulla
          tenetur asperiores unde optio expedita quo laudantium officia aliquam
          neque exercitationem provident placeat tempora!
        </p>
        <div>
          <button className="before:ease bg-white text-[17px] relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 ">
            <span className="relative ">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
