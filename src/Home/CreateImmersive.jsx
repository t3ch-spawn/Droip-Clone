import React from "react";
import Timeline from "./Timeline";
import advanced_interaction from "@/assets/images/advanced_interaction.webp";
import custom_timing from "@/assets/images/custom_timing.webp";
import advanced_triggers from "@/assets/images/advanced_triggers.webp";
import achieve_limitless from "@/assets/images/achieve_limitless.webp";

export default function CreateImmersive() {
  const timelineContent = [
    {
      heading: "Advanced interaction timeline",
      para: "Design smooth, multi-step animations with a timeline-based editor for complete control.",
      button: true,
      image: advanced_interaction,
      imgClass: "active",
    },
    {
      heading: "Custom timing editor",
      para: "Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more. ",
      button: true,
      image: custom_timing,
      imgClass: "w-0",
    },
    {
      heading: "Advanced triggers",
      para: "Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.",
      button: false,
      image: advanced_triggers,
      imgClass: "w-0",
    },
    {
      heading: "Achieve limitless precision",
      para: "Create flawless, interactive designs visually with unmatched accuracy and finesse.",
      button: false,
      image: achieve_limitless,
      imgClass: "w-0",
    },
  ];
  return (
    <section className="center-section">
      {/* Heading of section */}
      <h2 className="heading max-w-[1100px] mb-[135px] bg-anim black">
        Craft engaging and immersive interactions
      </h2>

      <Timeline
        timelineContent={timelineContent}
        containerClass={"flex-row-reverse"}
      />
    </section>
  );
}
