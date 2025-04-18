import React from "react";
import heroPic from "@/assets/images/hero-home.webp";
import BtnArrow from "./Reusables/BtnArrow";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Video from "@/assets/SvgIcons/Video";

export default function Hero() {
  useGSAP(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  });

  return (
    <section className="pt-[68px] center-section">
      {/* Bubble starting the hero */}
      <div className="bg-[#ddd9fc] text-[18px] font-semibold px-[20px] py-[8px] w-fit rounded-full tracking-tight">
        No-Code WordPress Site Builder
      </div>

      {/* Container for boxes and heading */}
      <div className="flex justify-between items-cente mt-[48px] -768:mt-[24px] -768:flex-col">
        {/* Heading */}
        <h1 className="heading !font-semibold max-w-[750px] -990:max-w-[400px]">
          Break Limits. <br className="-990:hidden" /> Build{" "}
          <span className="text-[#5642f3]">Anything</span>.{" "}
          <br className="-990:hidden" /> No Code Needed.
        </h1>

        {/* Boxes on the right containing paragraph and cta */}
        <div className="max-w-[420px]">
          {/* Paragraph box */}
          <div className="max-w-[321px] -768:max-w-full text-[18px] leading-[140%] h-[200px] -990:h-fit rounded-[18px] text-[#605C7A] bg-[#ebe8fd] -768:bg-transparent flex justify-center items-start px-[24px] py-[32px] -990:py-[24px] -768:px-0">
            Droip is a no-code, drag-and-drop WordPress builder that simplifies
            website creation with powerful capabilities.
          </div>

          {/* Watch video button */}
          <button
            aria-label="Watch Intro"
            className="flex justify-center items-center gap-[6px] text-[#5641F3] font-semibold w-full rounded-[18px] h-[44px] bg-[#ebe8fd] mt-[5px]"
          >
            Watch Intro
            <Video />
          </button>

          <BtnArrow content={"Get Started with Droip"} />
        </div>
      </div>

      {/* Container for picture of hero */}
      <img
        src={heroPic}
        alt="hero picture"
        className="mt-[96px] -990:mt-[60px] w-full aspect-[1280/733]"
      />
    </section>
  );
}
