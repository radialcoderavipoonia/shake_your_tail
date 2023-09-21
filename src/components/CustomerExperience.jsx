import React from "react";
import customerBigImg from "../assets/images/png/customer_big_img.png";
import customerSmallImg from "../assets/images/png/customer_small_img.png";

const CustomerExperience = () => {
  return (
    <>
      <section className="py-40 relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-roboto !font-medium text-[#12191F]">
                Let Your Customer Experience Shine
              </h2>
              <p className="text-base pt-3 font-helveticaLight text-[#12191F]">
                Automated client rating, provides instant feedback on client
                booking history, partner this with your own Loyalty<br></br>{" "}
                program.
              </p>
              <button className="mt-[30px] text-white font-roboto font-regular text-xl bg-[#FFC100] px-[30px] py-[14px] rounded-[100px] hover:bg-[#5B95E0] transition-all duration-300">
                Free Trial
              </button>
            </div>
            <div className="md:w-[48%]">
              <div className="relative">
                <img
                  src={customerBigImg}
                  alt="customer big image"
                  className="w-100"
                />
                <div className="absolute bottom-[-15px] right-[-50px]">
                  <img
                    src={customerSmallImg}
                    alt="customer small image"
                    className="w-[192px] h-[152px]"
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
