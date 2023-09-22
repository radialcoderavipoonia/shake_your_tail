import React, { useState } from "react";
import { Pricing } from "./common/Helper";
const PricingPlan = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <section className="py-14"id="pricing">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-roboto font-medium text-[#12191F] text-center">
            Pricing Plan
          </h2>
          <p className="pt-[10px] text-center text-base font-helveticaLight text-[#12191F]">
            Our Subscriptions, simple, flexible and designed for your business
            needs.
          </p>
          <div className="flex flex-wrap items-center justify-center pt-5">
            <p className="text-2xl font-roboto font-bold text-[#5B95E0]">
              £ GBP
            </p>
            <div
              onClick={toggle}
              className={`w-[68px] h-[38px] bg-gradient-to-r from-[#5B95E0] mx-5 to-[#5B95E0] relative cursor-pointer ${
                isChecked ? "bg-[#fff]" : "bg-[#5B95E0]"
              } rounded-full transition-all duration-300`}
            >
              <div
                className={`w-[30px] h-[30px] bg-[#fff] absolute top-[4px] left-[4px] rounded-full transition-transform duration-300 transform ${
                  isChecked ? "translate-x-[29px]" : "translate-x-[0]"
                }`}
              ></div>
            </div>
            <p className="text-2xl text-[#000] font-roboto font-normal ">
              $ USD
            </p>
          </div>
          <div className="overflow-x-scroll xl:overflow-x-auto">
            <div className="flex flex-wrap justify-between pt-10 sm:pt-14 md:pt-[48px] w-[1140px] ">
              {Pricing.map((plan) => {
                return (
                  <div
                    key={plan.id}
                    className="w-[23%] mb-4 mx-2 py-[33px] px-[18px] shadow_pricing rounded-[8px] group overflow-hidden relative hover:transition-all hover:duration-500"
                  >
                    <div className="h-full">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="text-xl text-[#12191F] font-roboto font-medium ">
                            {plan.heading}
                          </p>
                          <p className="pt-2 text-base text-[#12191F] font-helveticaLight text-opacity-70">
                            {plan.para}
                          </p>
                          <p className="pt-6 text-[#12191F] font-roboto font-bold text-[32px] group-hover:text-[#5B95E0]">
                            {plan.per}
                            <span className="font-normal text-base">
                              {plan.month}
                            </span>
                          </p>
                          <div className="pt-6">
                            <div className="flex items-center">
                              <img src={plan.single} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.user}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.singleresource} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.resources}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.onefifty} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.clients}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.unlimited} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.appointments}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.custom} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.breeds}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.conformation} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.remainders}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.email} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.marketing}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.online} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.booking}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.electronic} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.contacts}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.mobile} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.app}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.rep} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.reporting}
                              </p>
                            </div>
                            <div className="flex items-center pt-3">
                              <img src={plan.supp} alt="" />
                              <p className="ps-2 text-[13px] font-helveticaLight text-[#000] text-opacity-70">
                                {plan.support}
                              </p>
                            </div>
                          </div>
                          <p className="pt-4 font-helveticaBold text-[13px] text-[#000]">
                            {plan.sms}
                          </p>
                        </div>
                        <div className="flex items-end justify-center pt-[33px] mx-4">
                          <button className="text-xl font-roboto font-regular w-full group-hover:text-[#fff] group-hover:bg-[#5B95E0] group-hover:border-transparent transition-all duration-500 text-[#12191F] rounded-[100px] py-3 px-[30px] bg-transparent border border-[#898C8F]">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`bg-[#FFC100] group-hover:bg-[#5B95E0] group-hover:transition-all group-hover:duration-500 absolute top-[30px] hidden right-[-40px] rotate-45 ${plan.include}`}>
                      <p className="text-[10.44px] w-[166px] text-center font-helveticaMedium text-white py-1">
                        SMS Included
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
