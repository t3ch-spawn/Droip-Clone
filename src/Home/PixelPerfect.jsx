import React from "react";
import Timeline from "./Timeline";
import advanced_typography from "@/assets/images/advanced_typography.webp";
import css_grids from "@/assets/images/css_grids.webp";
import adaptive_design from "@/assets/images/adaptive_design.webp";
import designed_efficiency from "@/assets/images/designed_efficiency.webp";

export default function PixelPerfect() {
  const timelineContent = [
    {
      heading: "Advanced typography",
      para: "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.",
      button: true,
      image: advanced_typography,
      imgClass: "active",
    },
    {
      heading: "CSS grids and layouts",
      para: "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
      button: true,
      image: css_grids,
      imgClass: "w-0",
    },
    {
      heading: "Adaptive design",
      para: "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
      button: false,
      image: adaptive_design,
      imgClass: "w-0",
    },
    {
      heading: "Designed for efficiency",
      para: "Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.",
      button: false,
      image: designed_efficiency,
      imgClass: "w-0",
    },
  ];
  return (
    <section className="center-section">
      {/* Heading of section */}
      <h2 className="heading max-w-[1100px] mb-[125px] bg-anim black">
        Design pixel-perfect sites beyond ordinary
      </h2>

      <Timeline timelineContent={timelineContent}/>
    </section>
  );
}
