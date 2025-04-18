import React from "react";
import form_builder from "@/assets/images/form_builder.webp";
import seamless_migration from "@/assets/images/seamless_migration.webp";
import css_preview from "@/assets/images/css_preview.webp";
import breakpoints from "@/assets/images/breakpoints.webp";
import figma_droip from "@/assets/images/figma_droip.webp";
import code_element from "@/assets/images/code_element.webp";
import pop_builder from "@/assets/images/pop_builder.webp";
import autosave from "@/assets/images/autosave.webp";
import global_style from "@/assets/images/global_style.webp";
import droip_ai from "@/assets/images/droip_ai.webp";
import LinesAndCircle from "./Reusables/LinesAndCircle";

export default function DesignBuild() {
  const gridContent = [
    {
      heading: "Seamless migration",
      para: "Migrate your existing design seamlessly into Droip with just a click of a button!",
      className: "col-span-4 -990:col-span-2 !grid grid-cols-2 gap-[16px] -768:grid-cols-1 ",
      headingClass: "text-[32px] leading-[118.75%] max-w-[146px]",
      paraClass: "max-w-[360px] text-black -768:text-[16px]",
    },
    {
      heading: "Form builder",
      para: "Build forms for any purpose and effortlessly manage form data natively.",
      image: form_builder,
      className: "col-span-2 -990:col-span-1",
      headingClass: "text-[32px] leading-[38px]",
      paraClass: "max-w-[360px]",
    },
    {
      heading: "CSS preview",
      para: "See real-time CSS changes and fine-tune styles as you need.",
      image: css_preview,
      className: "col-span-2 -990:col-span-1",
      headingClass: "text-[32px] leading-[38px]",
      paraClass: "max-w-[350px]",
    },
    {
      heading: "Unlimited breakpoints",
      para: "Achieve pixel-perfect responsiveness across all devices with unlimited breakpoints.",
      image: breakpoints,
      className: "col-span-1",
    },
    {
      heading: "Figma to droip",
      para: "Seamlessly import Figma designs into Droip and bring your vision to life in no time.",
      image: figma_droip,
      className: "col-span-1",
    },
    {
      heading: "Code element",
      para: "Add custom HTML, CSS, and JavaScript to an element for extended functionality.",
      image: code_element,
      className: "col-span-1",
    },
    {
      heading: "Pop-up builder",
      para: "Design engaging pop-ups that captivate visitors and boost conversions.",
      image: pop_builder,
      className: "col-span-1",
    },
    {
      heading: "Autosave",
      para: "Never lose progress—your work is automatically saved as you build.",
      image: autosave,
      className: "col-span-1",
    },
    {
      heading: "Global style manager",
      para: "Maintain consistent branding with centralized style controls.",
      image: global_style,
      className: "col-span-1",
    },
    {
      heading: "Droip AI",
      para: "Harness AI to accelerate your workflow and creative process.",
      image: droip_ai,
      className: "col-span-2",
      paraClass: "max-w-[236px]",
    },
  ];

  return (
    <section className="center-section">
      {/* Heading of section */}
      <h2 className="heading">
        Design and <br /> build everything
      </h2>

      {/* Container for linesCircle and paragraph */}
      <div className="mt-[24px] flex gap-[24px]">
        {/* Lines and Circle */}
        <LinesAndCircle />

        {/* Paragraph */}
        <p className="text-[24px]  -768:text-[18px] leading-[120%] max-w-[445px] font-[300]">
          more efficiently with the{" "}
          <strong className="font-semibold">most advanced</strong> granular
          controls
        </p>
      </div>

      {/* Grid container for cards */}
      <div className="mt-[96px] -990:mt-[60px] grid grid-cols-4 -990:grid-cols-2 -768:flex -768:flex-col gap-[1px] relative">

        {/* The first card of the grid */}
        <DesignCard {...gridContent[0]}>
          <img
            src={seamless_migration}
            className="max-h-[304px] w-full max-w-[620px]"
            alt="Seamless Migration"
          />
        </DesignCard>

        {gridContent.slice(1).map((card, idx) => {
          // Mapping out grid content to the custom card except the first content
          return <DesignCard key={idx} {...card} />;
        })}

        {/* Background blur */}
        <div className="absolute grid-blur w-[75%] rounded-[1000px] top-[-10px] bottom-[-63px] h-[100%] z-[1] opacity-[0.18]"></div>
      </div>
    </section>
  );
}

function DesignCard({
  image,
  heading,
  para,
  className,
  headingClass,
  paraClass,
  children,
}) {
  return (
    <div
      className={`flex justify-between  rounded-[18px] p-[32px] -575:p-[24px] bg-white relative z-[2] ${className}`}
    >
      <div className={`flex flex-col justify-end  gap-[24px]  `}>
        {/* Image showing if there's no children */}
        {!children ? <img src={image} className="max-h-[182px] object-contain" alt={heading} /> : ""}
        {/* Heading */}
        <h3
          className={`text-[24px] font-semibold tracking-tight -990:text-[24px] leading-[120%] ${headingClass}`}
        >
          {heading}
        </h3>
        {/* Paragraph */}
        <p className={`text-[16px]  text-[#605C7A] font-normal -768:text-[14px] -768:leading-[20px] ${paraClass}`}>
          {para}
        </p>
      </div>

      {/* This is for the first card that has the image beside the text */}
      {children ? children : ""}
    </div>
  );
}
