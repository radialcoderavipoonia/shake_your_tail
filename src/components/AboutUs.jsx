import React from "react";
import { About_us } from "./common/Helper";

const AboutUs = () => {
  return (
    <>
      <section className="pt-10 sm:pt-16 lg:pt-10 relative z-10 bg-[#FFC100] lg:bg-transparent">
        <div className="container">
          <div className="text-center mt-10 md:mt-0">
            <h2 className="font-medium font-helveticaMedium text-white text-5xl">
              About Us
            </h2>
            <p className="text-white font-light font-helveticaLight text-base pt-3">
              Software developed by groomers for groomers
            </p>
            <p className="text-white font-light font-helveticaLight text-base">
              Our team has a wealth of experience, over 30 years combined
              working in dog grooming salons and over 45{" "}
              <span className="md:block"></span> years combined in working in
              software development.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-9 gap-3">
            {About_us.map((aboutK) => {
              return (
                <div
                  className="w-[90%] mx-auto lg:mt-0 sm:mx-0 sm:w-[48%] md:w-[32%] lg:w-[24%] px-5 pt-5 pb-[34px] bg-[#fff] rounded-[14px] relative"
                  key={aboutK.id}
                >
                  <div className="{absolute bottom-0 right-0 ${aboutK.bottom_img}}"></div>
                  <img
                    className="max-w-[48px]"
                    src={aboutK.img}
                    alt="img_icons"
                  />
                  <h2 className="font-medium font-roboto text-xl text-black">
                    {aboutK.heading}
                  </h2>

                  <p
                    className={`font-medium font-helveticaMedium text-[#C8D700;] pt-[6px] pb-1 ${aboutK.clr}`}
                  >
                    {aboutK.para}
                  </p>
                  <p className="font-light font-helveticaLight text-[#595E62] text-base">
                    {aboutK.p}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10 md:mt-14 pb-16 lg:pb-[97px]">
            <button className="bg-[#5B95E0] font-normal font-roboto text-xl text-white rounded-full px-10 py-[14px] hover:text-[#5B95E0] hover:bg-white transition-all duration-300">
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
