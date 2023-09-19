import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import Features from "./components/Features";
import PricingPlan from "./components/PricingPlan";

function App() {
  return (
    <>
      <div className="bg-[#fff]">
        <MyNav />
        <Features />
        <PricingPlan/>
      </div>
    </>
  );
}

export default App;
