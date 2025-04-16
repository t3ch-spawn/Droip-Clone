import React from "react";
import cleanCode from "@/assets/images/clean_code.webp";
import lightweight from "@/assets/images/lightweight.webp";

export default function Performance() {
  return (
    <section className="bg-black">
      {/* Actual container */}
      <div className="center-section">
        {/* Heading */}
        <h2 className="heading-2 max-w-[500px] text-white text-center mx-auto">
          Performance that sets you apart
        </h2>

        {/* Container for cards */}
        <div className="flex gap-[16px] mt-[130px]">
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
      <div className="p-[48px] gap-[24px] flex flex-col">
        {/* heading */}
        <h3 className="text-[32px] leading-[38px] font-semibold">{heading}</h3>

        {/* Paragraph */}
        <p className="font-medium text-opacity-[0.72] text-white">{para}</p>
      </div>

      {/* Image */}
      <img src={image} className="" alt="" />
    </div>
  );
}
