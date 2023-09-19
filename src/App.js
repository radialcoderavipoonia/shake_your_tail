import "./App.css";
import Features from "./components/Features";
import Testonimals from "./components/Testonimals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import PricingPlan from "./components/PricingPlan";
import { Hero } from "./components/Hero";
import yellowCircle from "./assets/images/svg/heroYellowCircle.svg";
import whiteCircle from "./assets/images/svg/heroWhiteCircle.svg";
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
        <Features />
        <Testonimals />
        <PricingPlan />
      </div>
    </>
  );
}

export default App;
