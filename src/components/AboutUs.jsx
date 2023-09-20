import React from "react";
import { About_us } from "./common/Helper";

const AboutUs = () => {
  return (
    <>
      <section className=" bg-[#FFC100] py-10 yellow_bg_img">
        <div className="container">
          <div className="text-center">
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
          <div className="flex flex-wrap justify-between mt-9">
            {About_us.map((aboutK) => {
              return (
                <div
                  className="w-[24%] px-5 pt-5 pb-[34px] bg-[#fff] rounded-[14px]"
                  key={aboutK.id}
                >
                  <img
                    className="max-w-[48px]"
                    src={aboutK.img}
                    alt="img_icons"
                  />
                  <h2 className="font-medium font-roboto text-xl text-black">
                    {aboutK.heading}
                  </h2>
                  <p className="font-medium font-helveticaMedium text-[#C8D700;] pt-[6px] pb-1">
                    {aboutK.para}
                  </p>
                  <p className="font-light font-helveticaLight text-[#595E62] text-base">
                    {aboutK.p}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-14 pb-[97px]">
            <button className="bg-[#5B95E0] font-normal font-roboto text-xl text-white rounded-full px-10 py-[14px]">View All</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
