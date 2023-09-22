import React from "react";
import { Feature } from "./common/Helper";
import bottom_img from "../assets/images/svg/feature_card_bottom.svg"
const Features = () => {
  return (
    <>
      <section
        className="pb-14 lg:pb-36 xl:pt-24 lg:pt-0 pt-12 relative z-10 bg-[#5B95E0] lg:bg-transparent"
        id="features"
      >
        <div className="container">
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl font-roboto font-medium text-center"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Features
          </h2>
          <p
            className="pt-[10px] max-w-[555px] text-center mx-auto text-base text-white font-helveticaLight"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ShakeYourTail provides your business with the following key features
            to run an successful dog grooming business.
          </p>
          <div className="pt-10 lg:py-11 flex flex-wrap justify-center ">
            {Feature.map((All) => {
              return (
                <div
                  className="lg:w-[23%] mx-2 sm:w-[46%]  mb-8 px-5 pt-5 pb-[34px] bg-[#fff] rounded-[14px] hover:translate-y-[-10px] transition-all duration-300 overflow-hidden relative"
                  key={All.id}
                  data-aos={All.aos}
                  data-aos-delay={All.delay}
                >
                  <div className="h-100">
                    <img src={All.img} alt="img icon" />
                    <p className="pt-2 text-xl font-roboto font-medium text-[#12191F]">
                      {All.heading}
                    </p>
                    <p className="pt-2 text-base text-[#12191F] text-opacity-70">
                      {All.para}
                    </p>
                  </div>
                  <div className={`${All.hidden} hidden absolute bottom-[-20px] right-[-10px]`}>
                    <img src={bottom_img} alt="bottom image" />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex justify-center items-center flex-wrap"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button className="text-white font-roboto font-regular text-xl md:text-xl bg-[#FFC100] px-[30px] py-[14px] rounded-[100px] hover:bg-white transition-all duration-300 hover:text-[#FFC100]">
              View All Features
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
