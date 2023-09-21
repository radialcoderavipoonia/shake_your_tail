import React, { useState } from "react";
import backToTop from "../assets/images/svg/backToTop.svg";
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
      <div className="relative z-10 mt-[-20px]">
        <div className="z-10 h-[20px] w-[20px]">

          <img
            src={backToTop}
            height={40}
            onClick={() => onTop()}
            className={
              first
                ? "hidden"
                : "block sm:end-[40px] !h-[60px] rotate-[-180deg] cursor-pointer end-1 sm:bottom-[40px] bottom-1 fixed hover:scale-90 transition-all ease-linear"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BackToTop;
