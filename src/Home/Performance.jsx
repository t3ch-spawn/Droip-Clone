import React from "react";
import cleanCode from "@/assets/images/clean_code.webp";
import lightweight from "@/assets/images/lightweight.webp";

export default function Performance() {
  return (
    <section className="bg-black mb-[60px]">
      {/* Actual container */}
      <div className="center-section">
        {/* Heading */}
        <h2 className="heading-2 text-white text-center mx-auto -575:text-[32px] -575:font-medium bg-anim white">
          Performance that <br /> sets you apart
        </h2>

        {/* Container for cards */}
        <div className="flex -990:flex-col gap-[16px] mt-[128px] -990:mt-[48px] -575:mt-[64px]">
          <PerformanceCard
            heading="Clean code output"
            para=" Droip generates minimal, well-structured code that is free from
          unnecessary bloat ensuring efficiency."
            image={cleanCode}
          />
          <PerformanceCard
            heading="Keep website lightweight"
            para="Optimized code means faster load times, improved performance, and a smoother user experience."
            image={lightweight}
          />
        </div>
      </div>
    </section>
  );
}

function PerformanceCard({ heading, para, image }) {
  return (
    <div className="rounded-[18px] bg-[#e1e1e11a] flex flex-col text-white max-h-[480px] overflow-hidden">
      <div className="p-[48px] -990:p-[32px] -768:p-[24px] -768:gap-[18px]  gap-[24px] flex flex-col">
        {/* heading */}
        <h3 className="text-[32px] -990:text-[28px] -768:text-[24px] tracking-tight leading-[118.8%] font-semibold">{heading}</h3>

        {/* Paragraph */}
        <p className="font-medium text-opacity-[0.72] text-white max-w-[434px] leading-[118%] text-[16px]">{para}</p>
      </div>

      {/* Image */}
      <img src={image} className="aspect-[484/211]" alt="" />
    </div>
  );
}
