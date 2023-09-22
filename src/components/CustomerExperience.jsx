import React from "react";
import customerBigImg from "../assets/images/png/customer_big_img.png";
import customerSmallImg from "../assets/images/png/customer_small_img.png";
const CustomerExperience = () => {
  return (
    <>
      <section
        className="xl:pt-32 xl:pb-32 pb-0 md:py-20 lg:py-40 relative z-10"
        id="trial"
      >
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="md:w-[40%]">
              <div className="text-center md:text-start">
                <h2 className="text-2xl lg:text-5xl font-roboto !font-medium text-[#12191F]">
                  Let Your Customer Experience Shine
                </h2>
                <p className="text-sm md:text-base pt-3 font-helveticaLight text-[#12191F]">
                  Automated client rating, provides instant feedback on client
                  booking history, partner this with your own Loyalty{" "}
                  <span className="md:block"></span>
                  program.
                </p>
                <button className="mt-5 lg:mt-[30px] text-white font-roboto font-regular text-lg md:text-xl bg-[#FFC100] px-[30px] py-3 lg:py-[14px] rounded-[100px] hover:bg-[#5B95E0] transition-all duration-300">
                  Free Trial
                </button>
              </div>
            </div>
            <div className="w-[90%] md:w-[48%] mx-auto mt-4 md:mt-0">
              <div className="relative">
                <img
                  src={customerBigImg}
                  alt="customer big image"
                  className="w-100"
                />
                <div className="absolute bottom-[-15px] right-[-25px] lg:right-[-50px]">
                  <img
                    src={customerSmallImg}
                    alt="customer small image"
                    className="w-[120px] sm:w-[160px] lg:w-[192px] lg:h-[152px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerExperience;
