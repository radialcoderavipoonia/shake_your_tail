import React from "react";
import clients_icon from "../assets/images/svg/clients_img_icon.svg";
import notification_icon from "../assets/images/svg/notification_img_icon.svg";
import schedule_icon from "../assets/images/svg/schedule_img_icon.svg";
import schedule_bottom from "../assets/images/svg/schedule_img_bottom.svg"

const Features = () => {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-between lg:flex-row flex-col-reverse items-center">
            <div className="lg:w-[50%] w-full lg:mt-0 mt-12">
              <div className="flex items-center sm:flex-row flex-col justify-center gap-8">
                <div className="sm:w-1/2 w-full ">
                  <div className="w-full">
                    <div className="bg-[#fff] rounded-[14px] shadow_box px-4 py-5">
                      <img src={clients_icon} alt="client icon" />
                      <p className="pt-5 font-roboto text-xl font-medium text-[#12191F]">
                        Clients & Pets
                      </p>
                      <p className="pt-2 font-helveticaLight text-base text-[#12191F]">
                        Managing your Clients and their Pets is effortless;
                        Record their details, add emergency contacts, Medical
                        Notes, Grooming notes, view their appointment history,
                        set alerts and much more…
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="bg-[#fff] rounded-[14px] shadow_box px-4 py-5">
                      <img src={notification_icon} alt="notification icon" />
                      <p className="pt-5 font-roboto text-xl font-medium text-[#12191F]">
                        Notifications & Reminders
                      </p>
                      <p className="pt-2 font-helveticaLight text-base text-[#12191F]">
                        We’ll take the strain by automatically sending your
                        Clients, their appointment reminders, confirmations,
                        ‘Miss You’s and No Shows, by text or email.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2 w-full relative ">
                  <div className="w-full">
                    <div className="bg-[#fff] rounded-[14px] shadow_box pt-5 pl-4 pr-10 pb-11">
                      <img src={schedule_icon} alt="schedule icon" />
                      <p className="pt-5 font-roboto text-xl font-medium text-[#12191F]">
                        Schedule
                      </p>
                      <p className="pt-2 font-helveticaLight text-base text-[#12191F]">
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
            <div className="lg:w-[42%] w-full">
              <h2 className=" text-5xl font-medium text-[#12191F] font-roboto">
                Main Features
              </h2>
              <p className="text-base font-helveticaLight text-[#12191F] pt-4 text-opacity-70">
                ShakeYourTail is an trusted dog grooming software based in the
                cloud; Client, appointment, scheduling and document management
                service.
              </p>
              <p className="text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70">
                Great for Salons & Groomers on the move; Run it on your PC,
                laptop, Ipad, Tablet or Mobile with a standard internet
                connection.
              </p>
              <p className="text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70">
                Store everything in one place and leave the tech stuff to us.
              </p>
              <p className="text-base font-helveticaLight text-[#12191F] pt-2 text-opacity-70">
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

export default Features;