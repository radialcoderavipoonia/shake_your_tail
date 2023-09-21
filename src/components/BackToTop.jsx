import React, { useState } from "react";
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
      <div className=" container">
        <div className="z-10 h-[20px] w-[20px]">
          <button
            onClick={() => onTop()}
            className={
              first
                ? "hidden text-white me-3 hover:shadow-[0px_4px_25px_0px_#FFC100] hover:bg-[#FFC100] hover:border hover:border-white border border-transparent py-[14px] px-[30px] bg-[#5B95E0] rounded-full font-helveticaRegular font-bold text-xl end-[40px] bottom-[40px] fixed"
                : "block text-white me-3 hover:shadow-[0px_4px_25px_0px_#FFC100] hover:bg-[#FFC100] hover:border hover:border-white border border-transparent py-[14px] px-[30px] bg-[#5B95E0] rounded-full font-helveticaRegular font-bold text-xl end-[40px] bottom-[40px] fixed"
            }
          >
            Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackToTop;
