import React from "react";
import Footer_logo from "../assets/images/webp/footer_logo.webp";
import {
  Facebook,
  Instagram,
  Linkdin,
  Telegram,
  Twitter,
} from "./common/Icons";
const MyFooter = () => {
  return (
    <>
      <section>
        <div className="footer_bg_img min-h-[150px] md:min-h-[264px]"></div>
      </section>
      <section className="bg-[#5B95E0] mt-[-3px]">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="md:w-7/12 lg:w-5/12">
              <div>
                <a href="#">
                  <img
                    className="max-w-[297px]"
                    src={Footer_logo}
                    alt="Footer_logo"
                  />
                </a>
                <h2 className="text-[#DEEAF9] font-base font-helveticaLight font-light sm:max-w-[397px] mt-7">
                  Rutrum mauris vitae at vitae augue placerat arcu in. Vel in
                  elementum tempor enim accumsan enim a magna at. Dolor lorem
                  nisi dignissim nulla.
                </h2>
                <div className="flex mt-6 gap-3">
                  <div className="hover:translate-y-[-12px] transition-all duration-500">
                    <a target="blank" href="https://www.facebook.com/">
                      <Facebook />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-12px] transition-all duration-500">
                    <a target="blank" href="https://twitter.com/">
                      <Twitter />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-12px] transition-all duration-500">
                    <a target="blank" href="https://www.instagram.com/">
                      <Instagram />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-12px] transition-all duration-500">
                    <a target="blank" href="https://in.linkedin.com/">
                      <Linkdin />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-12px] transition-all duration-500">
                    <a target="blank" href="https://telegram.org/">
                      <Telegram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-4/12 lg:w-3/12 w-full">
              <div className="flex md:justify-between mt-10 md:mt-0">
                <ul>
                  <li className="text-base font-helveticaMedium font-medium text-white">
                    Important Links
                  </li>
                  <li className="pt-4">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      Features
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      How It Work
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      New Features
                    </a>
                  </li>
                </ul>
                <ul className="ps-20 md:ps-0">
                  <li className="text-base font-helveticaMedium font-medium text-white">
                    Other Links
                  </li>
                  <li className="pt-4">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="text-[#DEEAF9] font-light font-helveticaLight text-base"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 md:pt-14 lg:pt-[90px]">
          <hr className="border border-[1px] border-slate-300" />
          <p className="text-center py-5 font-helveticaLight font-light text-base text-white">
            Made with Powered by Petstar -
            <span>
              <a target="blank" href="https://www.petstar.co.uk/#">
                DOG GROOMING BUSINESSES & PET SERVICES
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default MyFooter;
