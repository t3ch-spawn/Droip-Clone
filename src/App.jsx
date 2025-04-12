import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Home/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-[#f5f5f7] min-h-[100vh]">
      <Hero />
    </main>
  );
}

export default App;
