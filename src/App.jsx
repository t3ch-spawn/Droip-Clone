import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Home/Hero";
import PixelPerfect from "./Home/PixelPerfect";
import CreateImmersive from "./Home/CreateImmersive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-[#f5f5f7] min-h-[100vh]">
      <Hero />
      <PixelPerfect/>
      <CreateImmersive/>
    </main>
  );
}

export default App;
