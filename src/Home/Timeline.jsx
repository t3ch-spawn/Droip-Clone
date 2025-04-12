import React from "react";
import pixelPic from "@/assets/images/pixelPerfect.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timelineContent = [
  {
    heading: "Advanced typography",
    para: "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.",
    button: true,
  },
  {
    heading: "CSS grids and layouts",
    para: "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
    button: true,
  },
  {
    heading: "Adaptive design",
    para: "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
    button: false,
  },
  {
    heading: "Designed for efficiency",
    para: "Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.",
    button: false,
  },
];

export default function Timeline() {
  return (
    // Container for timeline and picture
    <div className="flex justify-between">
      {/* Container for timeline */}
      <Accordion
        defaultValue={"Advanced typography"}
        className="flex flex-col gap-[65px] relative"
      >
        {/* line that goes through the bubbles */}
        <div className="w-[2px] h-[90%] absolute left-[11px] top-[20px] bg-[#ddd9fc] z-[1]"></div>

        {timelineContent.map((item) => {
          return (
            <AccordionItem value={item.heading} className=" max-w-[400px]">
              {/* Container for heading and bubble */}

              <AccordionTrigger className="flex gap-[40px] items-start justify-start">
                {/* Bubble */}
                <div className="min-w-[24px] h-[24px] bg-[#ddd9fc] rounded-full mt-[10px] flex justify-center items-center z-[3] relative">
                  <div className="size-[6px]  bg-[#5642f3] rounded-full"></div>
                </div>

                {/* Heading */}
                <h3 className="text-[32px] font-semibold">{item.heading}</h3>
              </AccordionTrigger>
              <AccordionContent className="max-w-[344px] ml-[70px] !p-0 !pb-[22px]">
                {/* Typography */}
                <p className=" mt-[18px] leading-[22.4px] text-[16px] text-[#373542]">
                  {item.para}
                </p>

                {item.button && (
                  <button
                    aria-label="View Details"
                    className="text-[#5641F3] font-semibold mt-[18px]"
                  >
                    View Details
                  </button>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Container for picture */}
      <img
        src={pixelPic}
        alt="pixel perfect"
        className="max-w-[726px] rounded-[18px]"
      />
    </div>
  );
}
