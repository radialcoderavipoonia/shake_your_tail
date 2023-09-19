
import "./App.css";
import MyNav from "./components/MyNav";
import Features from "./components/Features";
import Testonimals from "./components/Testonimals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#fff]">
        <MyNav />
        <Features />
        <Testonimals />
      </div>
    </>
  );
}

export default App;
