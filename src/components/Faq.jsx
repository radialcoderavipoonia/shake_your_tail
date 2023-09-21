import { Accordion } from "flowbite-react";
import React from "react";
import { Bulp, Massage } from "./common/Icons";
const Faq = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="font-medium text-5xl font-roboto text-[#12191F] text-center lg:text-start">
            FAQ’s
          </h2>
          <div className="flex flex-wrap mt-11 flex-col-reverse lg:flex-row">
            <div className=" lg:w-7/12">
              <div className="me-10 mt-5 sm:mt-8 md:mt-10 lg:mt-0">
                <Accordion className="border-none">
                  <Accordion.Panel>
                    <Accordion.Title className="text-[#454253] text-xl font-helveticaMedium font-medium pb-0 ps-0 text-start">
                      Do you have a mobile app?
                    </Accordion.Title>
                    <Accordion.Content className="py-0 pt-3 ps-0">
                      <p className="font-light font-helveticaLight text-base text-[#454253]">
                        Yes, our mobile app is available to premier and premier
                        plus subscribers, allowing you to manage your business
                        on the go.
                      </p>
                    </Accordion.Content>
                    <div className="border-b mt-4"></div>
                  </Accordion.Panel>
                  <Accordion.Panel className="border-b">
                    <Accordion.Title className="text-[#454253] text-xl font-helveticaMedium font-medium pb-0 ps-0 text-start">
                      Do you support start-up business?
                    </Accordion.Title>
                    <Accordion.Content className="py-0 pt-3 ps-0">
                      <p className="font-light font-helveticaLight text-base text-[#454253]">
                        Yes, our mobile app is available to premier and premier
                        plus subscribers, allowing you to manage your business
                        on the go.
                      </p>
                    </Accordion.Content>
                    <div className="border-b mt-4"></div>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="text-[#454253] text-xl font-helveticaMedium font-medium pb-0 ps-0 text-start">
                      I’ve used up all my monthly SMS credits, can I buy more?
                    </Accordion.Title>
                    <Accordion.Content className="py-0 pt-3 ps-0">
                      <p className="font-light font-helveticaLight text-base text-[#454253] py-0">
                        Yes, our mobile app is available to premier and premier
                        plus subscribers, allowing you to manage your business
                        on the go.
                      </p>
                    </Accordion.Content>
                    <div className="border-b mt-4"></div>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="text-[#454253] text-xl font-helveticaMedium font-medium pb-0 ps-0 text-start">
                      What do I need to access the system?
                    </Accordion.Title>
                    <Accordion.Content className="py-0 pt-3 ps-0">
                      <p className="font-light font-helveticaLight text-base text-[#454253] py-0">
                        Yes, our mobile app is available to premier and premier
                        plus subscribers, allowing you to manage your business
                        on the go.
                      </p>
                    </Accordion.Content>
                    <div className="border-b mt-4"></div>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="text-[#454253] text-xl font-helveticaMedium font-medium pb-0 ps-0 text-start">
                      Can you import my data?
                    </Accordion.Title>
                    <Accordion.Content className="py-0 pt-3 ps-0">
                      <p className="font-light font-helveticaLight text-base text-[#454253] py-0 ">
                        Yes, our mobile app is available to premier and premier
                        plus subscribers, allowing you to manage your business
                        on the go.
                      </p>
                    </Accordion.Content>
                    <div className="border-b mt-4"></div>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>
            <div className="lg:w-5/12">
              <div className="flex justify-center">
                <div className="bg-[#FFF9E6] rounded-xl inline-block border border-[1px] border-[#FFDD73]">
                  <div className="py-11 px-11 text-center">
                    <h2 className="font-medium font-roboto text-[32px] text-[#12191F]">
                      Need help?
                    </h2>
                    <p className="text-[#45414E] font-light font-helveticaLight text-base mt-2">
                      Ask our support team
                    </p>
                    <button className="flex items-center bg-[#5B95E0] ps-[59px] pe-[59px] py-4 rounded-full mt-4">
                      <span>
                        <Bulp />
                      </span>
                      <span className="text-white font-roboto font-normal text-xl ps-[10px]">
                        New Idea?
                      </span>
                    </button>
                    <button className="flex items-center bg-[#5B95E0] ps-[57px] pe-[57px] py-4 rounded-full mt-4">
                      <span>
                        <Massage />
                      </span>
                      <span className="text-white font-roboto font-normal text-xl ps-[10px]">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;