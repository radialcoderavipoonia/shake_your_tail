import React from "react";
import linerLine from "../assets/images/svg/linerLine.svg";
import linerLine2 from "../assets/images/svg/straitLinerLine.svg";
import lock from "../assets/images/svg/yellowLock.svg";
import key from "../assets/images/svg/key2.svg";
import custom from "../assets/images/svg/custom3.svg";
import tick from "../assets/images/svg/tick4.svg";
export const HowIt = () => {
  return (
    <div>
      <div className="container">
        <p className=" text-[#12191F] text-[48px] font-roboto font-medium">
          How It Work
        </p>
        <p className="max-w-[585px] text-base font-light font-helveticaLight text-[#12191F]">
          ShakeYourTail is an online scheduling and CRM service & is super easy
          to use, you can trial our premier service free for 30 days.
        </p>
        <div className="mt-[53px] flex flex-wrap">
          <img
            src={linerLine}
            alt="linerLine"
            className="md:w-full relative z-10 w-2/12 md:block hidden"
          />
          <img
            src={linerLine2}
            alt="linerLine"
            className="md:w-full relative z-10 w-1/12 md:hidden block h-[870px]"
          />
          <div className="flex flex-wrap justify-between md:w-full w-10/12">
            {/* 01 */}
            <div className=" flex md:justify-center md:w-[25%] w-full">
              <div
                className=" mt-[37px] relative md:after:rotate-0 after:rotate-90 afterContent after:absolute after:h-[40px]
               after:w-[2px] md:after:top-[-19%] after:top-[-7%] md:after:start-[8%] after:start-[-4%] after:hidden sm:after:block"
              >
                <div className="bg-[#FFC100] h-[18px] w-[18px] rounded-full md:mb-[28px] mb-3 relative z-10"></div>
                <img src={lock} alt="lock" width={24} height={24} />
                <div className=" relative md:pt-3">
                  <p className=" text-[#12191F] font-roboto text-xl font-bold">
                    Login
                  </p>
                  <p className="text-[#12191F] md:max-w-[204px] max-w-[300px] font-light font-helveticaLight opacity-70 md:pt-2">
                    Create a account
                  </p>
                  <p className="text-[#FFC100] text-[76px] font-bold font-helveticaBold opacity-[0.12] absolute start-[67%] bottom-[-40%]">
                    01
                  </p>
                </div>
              </div>
            </div>
            {/* 02 */}
            <div className=" flex md:justify-center md:w-[25%] w-full">
              <div
                className=" mt-[37px] relative md:after:rotate-0 after:rotate-90 afterContent after:absolute after:h-[40px]
               after:w-[2px] md:after:top-[-19%] after:top-[-7%] md:after:start-[8%] after:start-[-4%] after:hidden sm:after:block"
              >
                <div className="bg-[#45C6CE] h-[18px] w-[18px] rounded-full md:mb-[28px] mb-3 relative z-10"></div>
                <img src={key} alt="lock" width={24} height={24} />
                <div className=" relative md:pt-3">
                  <p className=" text-[#12191F] font-roboto text-xl font-bold">
                    Login
                  </p>
                  <p className="text-[#12191F] md:max-w-[204px] max-w-[300px] font-light font-helveticaLight opacity-70 md:pt-2">
                    Create a account
                  </p>
                  <p className="text-[#45C6CE] text-[76px] font-bold font-helveticaBold opacity-[0.12] absolute start-[67%] bottom-[-40%]">
                    02
                  </p>
                </div>
              </div>
            </div>
            {/* 03 */}
            <div className=" flex md:justify-center md:w-[25%] w-full">
              <div
                className=" mt-[37px] relative md:after:rotate-0 after:rotate-90 afterContent after:absolute after:h-[40px]
               after:w-[2px] md:after:top-[-19%] after:top-[-7%] md:after:start-[4%] after:start-[-4%] after:hidden sm:after:block"
              >
                <div className="bg-[#5B95E0] h-[18px] w-[18px] rounded-full md:mb-[28px] mb-3 relative z-10"></div>
                <img src={custom} alt="lock" width={24} height={24} />
                <div className=" relative md:pt-3">
                  <p className=" text-[#12191F] font-roboto text-xl font-bold">
                    Customise
                  </p>
                  <p className="text-[#12191F] md:max-w-[204px] max-w-[300px] font-light font-helveticaLight opacity-70 md:pt-2">
                    Customise your emails, SMS & settings.
                  </p>
                  <p className="text-[#5B95E0] text-[76px] font-bold font-helveticaBold opacity-[0.12] absolute xl:start-[67%] start-[57%] bottom-[-3%]">
                    03
                  </p>
                </div>
              </div>
            </div>
            {/* 04 */}
            <div className=" flex md:justify-center md:w-[25%] w-full">
              <div
                className=" mt-[37px] relative md:after:rotate-0 after:rotate-90 afterContent after:absolute after:h-[40px]
               after:w-[2px] md:after:top-[-19%] after:top-[-6%] md:after:start-[4%] after:start-[-4%] after:hidden sm:after:block"
              >
                <div className="bg-[#F2205C] h-[18px] w-[18px] rounded-full md:mb-[28px] mb-3 relative z-10"></div>
                <img src={tick} alt="lock" width={24} height={24} />
                <div className=" relative md:pt-3">
                  <p className=" text-[#12191F] font-roboto text-xl font-bold">
                    Done
                  </p>
                  <p className="text-[#12191F] md:max-w-[204px] max-w-[300px] font-light font-helveticaLight opacity-70 md:pt-2">
                    You're Ready to Rock! Add clients & start booking
                    appointments.
                  </p>
                  <p className="text-[#F2205C] text-[76px] font-bold font-helveticaBold opacity-[0.12] absolute xl:start-[67%] start-[57%] bottom-[15%]">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
