import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
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
      <div className="py-3 md:py-8 bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between lg:justify-end">
            <p className="font-gilroyRegular text-base font-normal lg:hidden block text-white">
              WordPress Solution
            </p>
            <ul
              className={`flex gap-3 lg:gap-5 items-center justify-center z-10 lg:justify-end flex-col lg:flex-row min-h-full lg:min-h-fit bg-black fixed lg:relative lg:bg-transparent start-[-100%] lg:start-0 top-0 w-full transition-all duration-300 ease-linear ${
                head ? "" : "!left-0"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="font-gilroyRegular text-base font-normal text-white"
                >
                  WordPress Solution
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-gilroyRegular text-base font-normal text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-gilroyRegular text-base font-normal text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-gilroyRegular text-base font-normal text-white"
                >
                  About
                </a>
              </li>
              <li className="lg:ps-[148px]">
                <a
                  href="#"
                  className="font-gilroyRegular text-base font-normal text-white"
                >
                  1 888 266-6917 ( <span className="italic">eu</span>
                  <span className="inter italic">?</span> )
                </a>
              </li>
              <li className="lg:ms-4 bg-[#6022EA] shadow-[0px 4px 20px 0px rgba(96, 34, 234, 0.20)] px-6 py-2 rounded-full">
                <a
                  href="#"
                  className="font-normal font-semibold text-white text-lg font-gilroyRegular"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <span className="font-gilroyRegular text-base font-normal text-white">
                    Eng
                  </span>
                </a>
              </li>
            </ul>
            <div onClick={showUl} className="z-20 lg:hidden">
              <h3 className="text-white text-3xl">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
