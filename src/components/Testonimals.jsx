import React from "react";
import Dog_Img from "../assets/images/webp/testimonils_dog_img.webp";
import Dog_elips from "../assets/images/webp/dog_img_elips.webp";
import Star_img from "../assets/images/webp/star_img.webp";
import { Left_Arrow, Right_Arrow } from "./common/Icons";
import Slider from "react-slick";
const Testonimals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="text-center font-roboto font-medium text-black text-5xl">
            Testimonial
          </h2>
          <div className="flex flex-wrap items-center sm:mt-8 md:mt-10 lg:mt-20 pt-5">
            <div className=" md:w-1/2">
              <div className=" lg:translate-x-[-20px] xl:translate-x-[-50px] md:pe-3">
                <img className="w-full" src={Dog_Img} alt="Dog_Img" />
              </div>
            </div>
            <div className="md:w-1/2">
              <Slider {...settings}>
                <div className="lg:ps-5">
                  <img
                    className="max-w-[73px]"
                    src={Dog_elips}
                    alt="Dog_elips"
                  />
                  <p className="text-xl font-helveticaLight font-light text-[#454253] pt-5">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-[10px]">
                    <img
                      className="max-w-[152px]"
                      src={Star_img}
                      alt="Star_img"
                    />
                  </div>
                  <p className="text-[#4361FF] text-3xl font-bold font-helveticaBold pt-4">
                    Mathew Spry
                  </p>
                  <p className="font-medium font-helveticaMedium text-lg text-[#454253]">
                    Director @ BArkingham, UK
                  </p>
                </div>
                <div className="lg:ps-5">
                  <img
                    className="max-w-[73px]"
                    src={Dog_elips}
                    alt="Dog_elips"
                  />
                  <p className="text-xl font-helveticaLight font-light text-[#454253] pt-5">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-[10px]">
                    <img
                      className="max-w-[152px]"
                      src={Star_img}
                      alt="Star_img"
                    />
                  </div>
                  <p className="text-[#4361FF] text-3xl font-bold font-helveticaBold pt-4">
                    Mathew Spry
                  </p>
                  <p className="font-medium font-helveticaMedium text-lg text-[#454253]">
                    Director @ BArkingham, UK
                  </p>
                </div>
              </Slider>
              <div className="flex items-start gap-2 mt-8 md:ps-5">
                <div
                  className="cursor-pointer"
                  // onClick={() => SlideArrow.current.slickPrev()}
                >
                  <Left_Arrow />
                </div>
                <div
                  className="cursor-pointer"
                  // onClick={() => SlideArrow.current.slickNext()}
                >
                  <Right_Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testonimals;
