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
  const first = React.useRef();
  return (
    <>
      <section
        className="py-14 lg:py-10 lg:mt-28 xl:mt-[206px]"
        id="testimonials"
      >
        <div className="container">
          <h2
            className="text-center font-roboto font-medium text-black text-4xl md:text-5xl"
            data-aos="fade-down-right"
            data-aos-delay="500"
          >
            Testimonial
          </h2>
          <div className="md:flex flex-wrap items-center sm:mt-8 md:mt-10 xl:mt-20 xl:pt-5">
            <div className="w-10/12 md:w-1/2 mx-auto md:mx-0">
              <div className=" lg:translate-x-[-20px] xl:translate-x-[-50px] md:pe-3 mt-5 md:mt-0">
                <img
                  className="w-full"
                  data-aos="fade-down-right"
                  data-aos-delay="600"
                  src={Dog_Img}
                  alt="Dog_Img"
                />
              </div>
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-down-left"
              data-aos-delay="700"
            >
              <Slider {...settings} ref={first}>
                <div className="lg:ps-5 mt-10 md:mt-0">
                  <img
                    className="max-w-[73px] mx-auto md:mx-0"
                    src={Dog_elips}
                    alt="Dog_elips"
                  />
                  <p className="text-lg md:text-xl font-helveticaLight font-light text-[#454253] pt-5 text-center md:text-start">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-[10px]">
                    <img
                      className="max-w-[152px] mx-auto md:mx-0"
                      src={Star_img}
                      alt="Star_img"
                    />
                  </div>
                  <p className="text-[#4361FF] text-2xl md:text-3xl font-bold font-helveticaBold pt-4 text-center md:text-start">
                    Mathew Spry
                  </p>
                  <p className="font-medium font-helveticaMedium text-base md:text-lg text-[#454253] text-center md:text-start">
                    Director @ BArkingham, UK
                  </p>
                </div>
                <div className="lg:ps-5 mt-10 md:mt-0">
                  <img
                    className="max-w-[73px] mx-auto md:mx-0"
                    src={Dog_elips}
                    alt="Dog_elips"
                  />
                  <p className="text-lg md:text-xl font-helveticaLight font-light text-[#454253] pt-5 text-center md:text-start">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-[10px]">
                    <img
                      className="max-w-[152px] mx-auto md:mx-0"
                      src={Star_img}
                      alt="Star_img"
                    />
                  </div>
                  <p className="text-[#4361FF] text-2xl md:text-3xl font-bold font-helveticaBold pt-4 text-center md:text-start">
                    Mathew Spry
                  </p>
                  <p className="font-medium font-helveticaMedium text-base md:text-lg text-[#454253] text-center md:text-start">
                    Director @ BArkingham, UK
                  </p>
                </div>
              </Slider>
              <div className="flex items-start justify-center md:justify-start gap-2 mt-5 md:mt-8 md:ps-5">
                <div
                  className="cursor-pointer"
                  onClick={() => first.current.slickPrev()}
                >
                  <Left_Arrow />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => first.current.slickNext()}
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
