import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import HeroPage from "./components/HeroPage";
import H_Component2 from "./components/H_Component2";
import H_Component3 from "./components/H_Component3";
import H_Component4 from "./components/H_Component4";
import H_Component5 from "./components/H_Component5";
import H_Component6 from "./components/H_Component6";
import H_Components7 from "./components/H_Components7";
import H_Component8 from "./components/H_Component8";
import H_Component9 from "./components/H_Component9";
import H_Component10 from "./components/H_Component10";
import H_Component11 from "./components/H_Component11";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Hero />
      <HeroPage />
      <H_Component2 />
      <H_Component3 />
      <H_Component4 />
      <H_Component5 />
      <H_Component6 />
      <H_Components7 />
      <H_Component8 />
      <H_Component9 />
      <H_Component10 />
      <H_Component11 />
    </div>
  );
}

export default App;
