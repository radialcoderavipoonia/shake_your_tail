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
function App() {
  return (
    <>
      <div className="bg-[#fff] overflow-hidden">
        <div className="relative bgHero bg-no-repeat lg:bg-transparent bg-[#FFC100]">
          <Hero />
          <div>
            <img
              src={yellowCircle}
              className="end-0 absolute top-[13%] md:h-[288px] h-[140px]"
            />
            <img
              src={whiteCircle}
              className="start-0 absolute md:bottom-[33%] bottom-10 h-[140px] sm:block hidden"
            />
          </div>
        </div>
        <HowIt />
        <Features />
        <Testonimals />
        {/* <PricingPlan /> */}
        <Faq />
        <MyFooter />
        <AboutUs />
        <MainFeatures />
        <PricingPlan />
        <CustomerExperience />
        <Features/>
        <Testonimals />
      </div>
    </>
  );
}

export default App;
