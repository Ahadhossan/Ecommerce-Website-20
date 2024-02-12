import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-gray-900 pt-[5rem] pb-[3rem]">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]">
        <div>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white">
            Get our emails for info on new items, sales and more.
          </h1>
          <p className="text-[17px] text-white mt-[0.8rem] mb-[1.5rem] opacity-70">
            We'll email you a voucher worth 10$ off your first order over 50$
          </p>
          <div className="w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]"
            />
            <button className="w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-500 hover:bg-blue-700 transition-all duration-200">
              Subscribe
            </button>
            <p className="text-[14px] mt-[0.2rem] text-white capitalize opacity-35 font-thin">
              By Subscribing You Agree To Our Terms & Conditions And Privacy &
              Cookies Policy
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] md:text-[25px] lg:text-[30px] leading-[2.4rem] text-white">
            Need help? <br /> (+000 1234 56 789)
          </h1>
          <p className="mt-[0.5rem] text-white opacity-70">
            We are available 8:00am - 7:00pm
          </p>
          <div className="mt-[2rem] flex items-center space-x-2">
            <Image
              width={130}
              height={130}
              className="object-contain"
              alt="playstore"
              src="/images/gp.png"
            />
            <Image
              width={130}
              height={130}
              className="object-contain"
              alt="appstore"
              src="/images/as.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
