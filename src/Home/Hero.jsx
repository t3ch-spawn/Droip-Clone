import React from "react";
import heroPic from "@/assets/images/hero-home.webp";

export default function Hero() {
  return (
    <section className="pt-[140px] center-section">
      {/* Bubble starting the hero */}
      <div className="bg-[#ddd9fc] text-[18px] font-semibold px-[20px] py-[8px] w-fit rounded-full tracking-tight">
        No-Code WordPress Site Builder
      </div>

      {/* Container for boxes and heading */}
      <div className="flex justify-between items-cente mt-[65px]">
        {/* Heading */}
        <h1 className="heading !font-semibold max-w-[750px]">
          Break Limits. <br /> Build{" "}
          <span className="text-[#5642f3]">Anything</span>. <br /> No Code
          Needed.
        </h1>

        {/* Boxes on the right containing paragraph and cta */}
        <div>
          {/* Paragraph box */}
          <div className="max-w-[321px] text-[18px] leading-[140%] h-[200px] rounded-[18px] text-[#605C7A] bg-[#ebe8fd] flex justify-center items-start px-[24px] py-[32px]">
            Droip is a no-code, drag-and-drop WordPress builder that simplifies
            website creation with powerful capabilities.
          </div>

          {/* Watch video button */}
          <button
            aria-label="Watch Intro"
            className="text-[#5641F3] font-semibold w-full rounded-[18px] h-[44px] bg-[#ebe8fd] mt-[5px]"
          >
            Watch Intro
          </button>

          <button className="mt-[8px] w-full h-[44px] rounded-[18px] bg-[#5642f3] text-white text-[18px]">
            Get Started with Droip
          </button>
        </div>
      </div>

      {/* Container for picture of hero */}
      <img src={heroPic} alt="hero picture" className="mt-[120px] aspect-auto" />
    </section>
  );
}
