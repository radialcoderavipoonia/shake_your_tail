import React from "react";
import clients_icon from "../assets/images/svg/clients_img_icon.svg";
import notification_icon from "../assets/images/svg/notification_img_icon.svg";
import schedule_icon from "../assets/images/svg/schedule_img_icon.svg";
import schedule_bottom from "../assets/images/svg/schedule_img_bottom.svg";

const MainFeatures = () => {
  return (
    <>
      <section className="pt-12 pb-12 lg:pb-0 xl:mt-20" id="new_features">
        <div className="container">
          <div className="flex flex-wrap justify-between lg:flex-row flex-col-reverse items-center">
            <div className="lg:w-[50%] w-full lg:mt-0 mt-12">
              <div className="flex items-center sm:flex-row flex-col justify-center gap-8">
                <div className="sm:w-1/2 w-full ">
                  <div
                    className="w-[90%] sm:w-full mx-auto sm:mx-0 hover:shadow-2xl hover:scale-95 transition-all duration-300"
                    data-aos="fade-down"
                    data-aos-delay="500"
                  >
                    <div className="bg-[#fff] rounded-[14px] shadow_box px-4 py-5">
                      <img src={clients_icon} alt="client icon" />
                      <p className="font-roboto text-xl font-medium text-[#12191F]">
                        Clients & Pets
                      </p>
                      <p className="pt-2 font-helveticaLight text-sm md:text-base text-[#12191F]">
                        Managing your Clients and their Pets is effortless;
                        Record their details, add emergency contacts, Medical
                        Notes, Grooming notes, view their appointment history,
                        set alerts and much more…
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-[90%] sm:w-full mt-8 mx-auto sm:mx-0 hover:shadow-2xl hover:scale-95 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="bg-[#fff] rounded-[14px] shadow_box px-4 py-5">
                      <img src={notification_icon} alt="notification icon" />
                      <p className="font-roboto text-xl font-medium text-[#12191F]">
                        Notifications & Reminders
                      </p>
                      <p className="pt-2 font-helveticaLight text-sm md:text-base text-[#12191F]">
                        We’ll take the strain by automatically sending your
                        Clients, their appointment reminders, confirmations,
                        ‘Miss You’s and No Shows, by text or email.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="sm:w-1/2 w-full relative "
                  data-aos="fade-up-left"
                  data-aos-delay="500"
                >
                  <div className="w-[90%]  sm:w-full mx-auto sm:mx-0 hover:shadow-2xl hover:scale-95 transition-all duration-300">
                    <div className="bg-[#fff] rounded-[14px] shadow_box pt-5 pl-4 pr-10 pb-11">
                      <img src={schedule_icon} alt="schedule icon" />
                      <p className="font-roboto text-xl font-medium text-[#12191F]">
                        Schedule
                      </p>
                      <p className="pt-2 font-helveticaLight text-sm md:text-base text-[#12191F]">
                        Powerful and easy to use, book appointments to your team
                        members and view your colour coded schedule, ‘at a
                        glance’.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 end-0">
                    <img src={schedule_bottom} alt="schedule bottom img icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[42%] w-full text-center lg:text-start">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#12191F] font-roboto"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                Main Features
              </h2>
              <p
                className="text-sm md:text-base font-helveticaLight text-[#12191F] pt-4 text-opacity-70"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                ShakeYourTail is an trusted dog grooming software based in the
                cloud; Client, appointment, scheduling and document management
                service.
              </p>
              <p
                className="text-sm md:text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                Great for Salons & Groomers on the move; Run it on your PC,
                laptop, Ipad, Tablet or Mobile with a standard internet
                connection.
              </p>
              <p
                className="text-sm md:text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70"
                data-aos="fade-down"
                data-aos-delay="800"
              >
                Store everything in one place and leave the tech stuff to us.
              </p>
              <p
                className="text-sm md:text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70"
                data-aos="fade-down"
                data-aos-delay="800"
              >
                We provide a complete service solution, giving you peace of
                mind, we support, secure, update and keep your data, all safely
                backed up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainFeatures;
