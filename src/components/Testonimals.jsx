import React from "react";
import Dog_Img from "../assets/images/webp/testimonils_dog_img.webp";
const Testonimals = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-16 max-w-[1140px]">
          <h2 className="text-center font-roboto font-medium text-black text-5xl">
            Testimonial
          </h2>
          <div className="flex flex-wrap">
            <div className=" w-1/2">
              <div>
                <img src={Dog_Img} alt="Dog_Img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testonimals;
