import React from "react";
import { Feature } from "./common/Helper";

const Features = () => {
  return (
    <>
      <section className="pb-36 pt-20">
        <div className="container">
          <h2 className="text-white text-5xl font-roboto font-medium text-center">
            Features
          </h2>
          <p className="pt-[10px] max-w-[555px] text-center mx-auto text-base text-white font-helveticaLight">
            ShakeYourTail provides your business with the following key features
            to run an successful dog grooming business.
          </p>
          <div className="py-11 flex flex-wrap justify-center ">
            {Feature.map((All) => {
              return (
                <div
                  className="xl:w-[23%] mx-2 lg:w-[31%] sm:w-[48%] mb-8 px-5 pt-5 pb-[34px] bg-[#fff] rounded-[14px]"
                  key={All.id}
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
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap">
            <button className="mt-[19px] text-white font-roboto font-regular text-xl bg-[#FFC100] px-[30px] py-[14px] rounded-[100px]">
              View All Features
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
