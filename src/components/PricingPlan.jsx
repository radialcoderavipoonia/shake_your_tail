import React, { useState } from "react";
import { Pricing } from "./common/Helper";
const PricingPlan = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <section className="py-12">
        <div className="container">
          <h2 className="text-5xl font-roboto font-medium text-[#12191F] text-center">
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
          <div className="flex flex-wrap justify-between pt-[68px]">
            {Pricing.map((plan) => {
              return (
                <div
                  key={plan.id}
                  className="lg:w-[23%] sm:w-[47%] w-full mb-4 mx-2 py-[33px] px-[18px] shadow_pricing rounded-[8px]"
                >
                  <div className="h-full">
                    <p className="text-xl text-[#12191F] font-roboto font-medium ">
                      {plan.heading}
                    </p>
                    <p className="pt-2 text-base text-[#12191F] font-helveticaLight text-opacity-70">
                      {plan.para}
                    </p>
                    <p className="pt-6 text-[#12191F] font-roboto font-bold text-[32px]">
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
                    <div className="flex items-end justify-center pt-[33px] mx-4">
                      <button className="text-xl font-roboto font-regular w-full text-[#12191F] rounded-[100px] py-3 px-[30px]  border border-[#898C8F]">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
