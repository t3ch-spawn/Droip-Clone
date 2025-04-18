import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Home/Hero";
import PixelPerfect from "./Home/PixelPerfect";
import CreateImmersive from "./Home/CreateImmersive";
import Scale from "./Home/Scale";
import Dependencies from "./Home/Dependencies";
import Performance from "./Home/Performance";
import DesignBuild from "./Home/DesignBuild";
import Footer from "./Home/Footer";
import AppIntegration from "./Home/AppIntegration";
import Navbar from "./Home/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-[#f5f5f7] min-h-[100vh]">
      <Navbar />
      <Hero />
      <PixelPerfect />
      <CreateImmersive />
      <Scale />
      <Dependencies />
      <Performance />
      <AppIntegration />
      <DesignBuild />
      <Footer />
    </main>
  );
}

export default App;
