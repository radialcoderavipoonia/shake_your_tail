import "./App.css";
import Features from "./components/Features";
import MainFeatures from "./components/MainFeatures";
import Testonimals from "./components/Testonimals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hero } from "./components/Hero";
import yellowCircle from "./assets/images/svg/heroYellowCircle.svg";
import whiteCircle from "./assets/images/svg/heroWhiteCircle.svg";
import Faq from "./components/Faq";
import MyFooter from "./components/MyFooter";
import { HowIt } from "./components/HowIt";
import AboutUs from "./components/AboutUs";
import PricingPlan from "./components/PricingPlan";
import CustomerExperience from "./components/CustomerExperience";
import DownloadApp from "./components/DownloadApp";
import bg_feature from "./assets/images/png/features_bg.png";
import Yellow_bg from "./assets/images/png/yellow_bg_img.png";
import BackToTop from "./components/BackToTop";
import { Preloader } from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <>
      <div className="bg-[#fff] overflow-hidden">
        <Preloader />
        <div className="relative bgHero bg-no-repeat lg:bg-transparent bg-[#FFC100]">
          <Hero />
          <div>
            <img
              src={yellowCircle}
              className="end-0 absolute top-[13%] md:h-[288px] h-[140px]"
            />
            <img
              src={whiteCircle}
              className="start-0 absolute xl:bottom-[33%] lg:bottom-40 bottom-10 h-[140px] sm:block hidden"
            />
          </div>
        </div>
        <MainFeatures />
        <div className="relative">
          <div className="absolute ">
            <img
              src={bg_feature}
              alt="bg feature"
              className="xl:h-[1605px] !h-[1440px] w-[2462px] lg:block hidden"
            />
          </div>
          <CustomerExperience />
          <Features />
        </div>
        <HowIt />
        <PricingPlan />
        <div className="relative mt-5 lg:mt-20">
          <div className="absolute lg:block hidden">
            <img
              className="w-[2452px] lg:h-[1235px] xl:h-[1360px] "
              src={Yellow_bg}
              alt="Yellow_bg"
            />
          </div>
          <DownloadApp />
          <AboutUs />
        </div>
        <Testonimals />
        <Faq />
        <MyFooter />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
