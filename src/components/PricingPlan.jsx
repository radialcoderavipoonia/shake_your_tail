import React, { useState } from "react";

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
          
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
