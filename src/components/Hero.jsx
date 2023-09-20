import React from "react";
import MyNav from "../components/MyNav";
import mobile from "../assets/images/png/heroMobile.png";
export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <MyNav />
      <div className="container mx-auto mt-8 pb-10 flex-1">
        <div className="flex flex-wrap items-center lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:pb-20">
            <p className=" md:text-[80px] sm:text-[60px] text-[40px] lg:text-start text-center font-roboto font-bold text-white leading-[101%]">
              Smart, Simple Software
            </p>
            <p className="font-helveticaMedium lg:text-start lg:pt-0 pt-3 text-center font-medium text-xl text-white max-w-[510px] lg:max-w-[490px]">
              Dog Grooming Software, helping to reduce 'no shows' with
              appointment confirmations, reminders & more.
            </p>
            <div className="flex items-center mt-[33px] lg:text-start text-center">
              <button className="font-roboto flex items-start justify-center text-xl py-[14px] px-[30px] bg-[#5B95E0] rounded-full text-white me-3">
                Free Trial
              </button>
              <button className="font-roboto flex items-start justify-center text-xl py-[14px] px-[30px] bg-[#FFC100] rounded-full text-white shadow-[0px_4px_25px_0px_#FFC100] border border-white">
                Explore More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img src={mobile} alt="mobile" className="lg:w-full w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
