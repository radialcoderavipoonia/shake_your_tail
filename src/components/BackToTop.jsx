import React, { useState } from "react";
// import backToTop from "../assets/images/svg/backToTop.svg";
import backToTop from "../assets/images/webp/backToTop.webp";
const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section>
      <div className=" container relative z-10">
        <div className="z-10 h-[20px] w-[20px]">
          {/* <button
            onClick={() => onTop()}
            className={
              first
                ? "hidden text-white me-3 hover:shadow-[0px_4px_25px_0px_#FFC100] hover:bg-[#FFC100] hover:border hover:border-white border border-transparent py-[14px] px-[30px] bg-[#5B95E0] rounded-full font-helveticaRegular font-bold text-xl sm:end-[40px] end-1 sm:bottom-[40px] bottom-1 fixed"
                : "block text-white me-3 hover:shadow-[0px_4px_25px_0px_#FFC100] hover:bg-[#FFC100] hover:border hover:border-white border border-transparent py-[14px] px-[30px] bg-[#5B95E0] rounded-full font-helveticaRegular font-bold text-xl sm:end-[40px] end-1 sm:bottom-[40px] bottom-1 fixed"
            }
          >
            Top
          </button> */}
          <img
            src={backToTop}
            height={40}
            onClick={() => onTop()}
            className={
              first
                ? "hidden"
                : "block sm:end-[40px] !h-[60px] rotate-[-90deg] cursor-pointer end-1 sm:bottom-[40px] bottom-1 fixed hover:scale-90 transition-all ease-linear"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BackToTop;
