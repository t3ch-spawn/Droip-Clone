import React, { useEffect } from "react";
import advanced_typography from "@/assets/images/advanced_typography.webp";
import css_grids from "@/assets/images/css_grids.webp";
import adaptive_design from "@/assets/images/adaptive_design.webp";
import designed_efficiency from "@/assets/images/designed_efficiency.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";

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

export default function Timeline() {
  function triggerItem(e) {
    const { currentTarget } = e;
    const heading = currentTarget.querySelector(".timeline-heading");
    const bubble = currentTarget.querySelector(".timeline-bubble");
    const timelineParent = currentTarget.parentElement;
    const grandParent = timelineParent.parentElement;
    const allHeadings = timelineParent.querySelectorAll(".timeline-heading");
    const allBubbles = timelineParent.querySelectorAll(".timeline-bubble");
    const allImages = grandParent.querySelectorAll(".timeline-image");
    const allHeadingsArr = gsap.utils.toArray(allHeadings);
    const allImagesArr = gsap.utils.toArray(allImages);
    const idxOfHeading = allHeadingsArr.indexOf(heading);
    const image = allImages[idxOfHeading];

    allBubbles.forEach((bubble) => {
      bubble.classList.remove("active");
    });

    allHeadings.forEach((heading) => {
      heading.classList.remove("active");
    });

    const activeImage = allImagesArr.find((image) => {
      return image.classList.contains("active");
    });


    if (allImagesArr.indexOf(activeImage) < allImagesArr.indexOf(image)) {
      activeImage.classList.add("mask");
      allImages.forEach((image) => {
        image.classList.remove("active");
      });
  
    } else {
    //   activeImage.classList.remove("mask");
    
    }

    heading.classList.add("active");
    bubble.classList.add("active");
    image.classList.add("active");
  }

  return (
    // Container for timeline and picture
    <div className="flex justify-between relative">
      {/* Container for timeline */}
      <Accordion
        defaultValue={"Advanced typography"}
        className="flex flex-col gap-[65px] relative"
      >
        {/* line that goes through the bubbles */}
        <div className="w-[2px] h-[90%] absolute left-[17px] top-[10px] bg-[#ddd9fc] z-[1]"></div>

        {timelineContent.map((item, idx) => {
          return (
            <AccordionItem
              key={idx}
              value={item.heading}
              className=" max-w-[420px] timeline-item"
              onClick={triggerItem}
            >
              {/* Container for heading and bubble */}

              <AccordionTrigger className="flex gap-[20px] items-start justify-start">
                {/* Bubble */}
                <div className="bg-[#f5f5f7]  h-[37px] min-w-[37px] rounded-full flex justify-center items-center relative z-[3]">
                  <div className=" bg-[#ddd9fc] timeline-bubble origin-center rounded-full  absolute center-x-y h-0 w-0"></div>
                  <div className="size-[6px]  bg-[#5642f3] rounded-full absolute center-x-y"></div>
                </div>

                {/* Heading */}
                <h3 className=" font-semibold text-left timeline-heading tracking-tight text-[32px] origin-left translate-y-[-5px] scale-75 opacity-50 duration-300 ease-in-out ">
                  {item.heading}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="max-w-[344px] ml-[57px] !p-0 !pb-[22px]">
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

      <div className="h-[538px] w-full max-w-[726px] relative overflow-hidden origin-left">
        {timelineContent.map((item, idx) => {
          {
            /* Container for picture */
          }
          return (
            <div
              style={{
                zIndex: `${5 - idx}`,
              }}
              className={`overflow-hidden timeline-image ease-in-out absolute w-full h-full ${item.imgClass}`}
            >
              <img
                src={item.image}
                alt="pixel perfect"
                className={`rounded-[18px] h-full w-auto absolute  inset-0 origin-left min-w-[726px]`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
