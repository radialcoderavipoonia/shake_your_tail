import React from "react";
import Mobile_img from "../assets/images/webp/mobile_img.webp";
import Play_store from "../assets/images/webp/play_store.webp";
import app_store from "../assets/images/webp/app_store.webp";
const DownloadApp = () => {
  return (
    <>
      <section className="pt-[115px]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-2/5">
              <h2 className="text-5xl font-roboto !font-medium text-white">
                Download App
              </h2>
              <p className="text-base pt-3 font-helveticaLight text-[#FFF3CC]">
                Are you a mobile groomer or just want to access your
                appointments and client on the go?
              </p>
              <p className="text-base font-helveticaLight text-[#FFF3CC]">
                Try our app, available to Premier or Premier Plus
                <span className="md:block"></span> subscribers.
              </p>
              <div className="flex items-center mt-7 gap-4">
                <div>
                  <a target="blank" href="https://play.google.com/">
                    <img
                      className="max-w-[137px] min-h-[46px]"
                      src={Play_store}
                      alt="Play_store"
                    />
                  </a>
                </div>
                <div>
                  <a target="blank" href="https://play.google.com/">
                    <img
                      className="max-w-[137px] min-h-[40px]"
                      src={app_store}
                      alt="app_store"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <img src={Mobile_img} alt="Mobile_img" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
