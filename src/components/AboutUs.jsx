import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className=" bg-[#FFC100] py-10">
        <div className="container">
          <div className="text-center">
            <h2 className="font-medium font-helveticaMedium text-white text-5xl">
              About Us
            </h2>
            <p className="text-white font-light font-helveticaLight text-base pt-3">
              Software developed by groomers for groomers
            </p>
            <p className="text-white font-light font-helveticaLight text-base">
              Our team has a wealth of experience, over 30 years combined
              working in dog grooming salons and over 45{" "}
              <span className="md:block"></span> years combined in working in
              software development.
            </p>
                  </div>
                  
        </div>
      </section>
    </>
  );
};

export default AboutUs;
