import React from "react";
import Preloaderimg from "../assets/images/png/heroMobile.png";
export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("hidden");
    document.body.classList.remove("!overflow-hidden");
  }, 2500);

  return (
    <div
      id="none"
      className=" min-h-screen w-100 top-0 start-0 h-full w-full fixed bg-black z-50"
    >
      <div className="flex justify-center items-center min-h-screen">
        <span className="w-[50%] flex flex-col justify-center items-center ">
          <img
            src={Preloaderimg}
            alt="Preloaderimg"
            className="w-[50%] xl:block hidden"
          />
          <img
            src={Preloaderimg}
            alt="Preloaderimg"
            className="w-full xl:hidden"
          />
          <div className="block">
            <p className=" md:text-[80px] sm:text-[60px] text-[40px] lg:text-start text-center font-roboto font-bold text-white leading-[101%] overflow-hidden text-center whitespace-nowrap w-0 typed">
              Smart, Simple<span className="block text-center"> Software</span>
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};
