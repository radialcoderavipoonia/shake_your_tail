import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import navLogo from "../assets/images/svg/navLogo.svg";
export const MyNav = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="container flex-grow-0 mx-auto pb-5 lg:pb-0 px-3 mx-w-[1140px] py-[14px] lg:bg-transparent bg-[#FA6C8F]">
        <div className="flex justify-between items-end lg:items-center">
          <img
            src={navLogo}
            alt="navLogo"
            className="z-30 relative cursor-pointer"
          />
          <ul
            className={`flex gap-3 lg:gap-5 items-center justify-center z-20 lg:justify-end flex-col lg:flex-row min-h-full lg:min-h-fit bg-[#FA6C8F] fixed lg:relative lg:bg-transparent start-[-100%] lg:start-0 top-0 w-full transition-all duration-300 ease-linear ${
              head ? "" : "!left-0"
            }`}
          >
            <li>
              <a
                href="#"
                className="text-white after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[3px] after:bg-white after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full font-medium text-base font-helveticaMedium"
                onClick={showUl}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white font-helveticaMedium font-medium text-base after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[3px] after:bg-white after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                href="#features"
                onClick={showUl}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-white font-helveticaMedium font-medium text-base after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[3px] after:bg-white after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                href="#pricing"
                onClick={showUl}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-white font-helveticaMedium font-medium text-base after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[3px] after:bg-white after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                href="#trial"
                onClick={showUl}
              >
                Free Trial
              </a>
            </li>
            <li>
              <button className="font-roboto leading-normal flex items-start justify-center text-xl py-[14px] px-[30px] bg-[#5B95E0] rounded-full text-white hover:bg-[#FFC100] transition-all duration-300">
                Sign In
              </button>
            </li>
          </ul>
          <div onClick={showUl} className="z-20 lg:hidden">
            <h3 className="text-white text-3xl">
              {head ? <BiMenu /> : <RxCross1 />}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyNav;
