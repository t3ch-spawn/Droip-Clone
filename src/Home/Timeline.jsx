import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import ParallaxContainer from "./Reusables/ParallaxContainer";

export default function Timeline({ timelineContent, containerClass }) {
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

    allImages.forEach((image) => {
      image.classList.remove("active");
    });

    if (allImagesArr.indexOf(activeImage) < allImagesArr.indexOf(image)) {
      activeImage.classList.add("mask");
    } else {
      activeImage.classList.remove("mask");
    }

    heading.classList.add("active");
    bubble.classList.add("active");
    image.classList.add("active");
  }

  return (
    // Container for timeline and picture
    <div
      className={`flex justify-between relative gap-[16px] -990:flex-col ${containerClass}`}
    >
      {/* Container for timeline */}
      <Accordion
        defaultValue={timelineContent[0].heading}
        className="flex flex-col gap-[65px] relative min-w-[400px] -990:min-w-full"
      >
        {/* line that goes through the bubbles */}
        <div className="w-[2px] h-[90%] -990:h-[95%] absolute left-[17px] top-[10px] bg-[#ddd9fc] z-[1]"></div>

        {timelineContent.map((item, idx) => {
          return (
            <AccordionItem
              key={idx}
              value={item.heading}
              className=" max-w-[420px] -990:max-w-full timeline-item"
              onClick={triggerItem}
            >
              {/* Container for heading and bubble */}

              <AccordionTrigger className="flex gap-[20px] -575:gap-[12px] items-start justify-start">
                {/* Bubble */}
                <div className="bg-[#f5f5f7]  h-[37px] min-w-[37px] rounded-full flex justify-center items-center relative z-[3]">
                  <div
                    className={` bg-[#ddd9fc] timeline-bubble origin-center rounded-full  absolute center-x-y h-0 w-0 ${
                      idx === 0 ? "active" : ""
                    }`}
                  ></div>
                  <div className="size-[6px]  bg-[#5642f3] rounded-full absolute center-x-y"></div>
                </div>

                {/* Heading */}
                <h3
                  className={` font-semibold text-left timeline-heading tracking-tight text-[32px] origin-left translate-y-[-5px] -575:translate-y-0 scale-75 opacity-50 duration-300 ease-in-out -575:text-[24px] ${
                    idx === 0 ? "active" : ""
                  }`}
                >
                  {item.heading}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="max-w-[344px] -990:max-w-full ml-[57px] -575:ml-[48px] !p-0 !pb-[22px]">
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

                {/* Image showing only on mobile */}

                <ParallaxContainer
                  imgSrc={item.image}
                  className="w-full hidden -990:block rounded-[12px] mt-[18px]  overflow-hidden"
                  imgClass="aspect-[363/269]"
                />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="h-[538px] -990:hidden w-full max-w-[726px] rounded-[18px]  relative overflow-hidden origin-left">
        {timelineContent.map((item, idx) => {
          {
            /* Container for picture */
          }
          return (
            <div
              style={{
                zIndex: `${5 - idx}`,
              }}
              className={`overflow-hidden timeline-image ease-in-out absolute w-full h-full ${
                item.imgClass
              } ${idx === 0 ? "active" : ""}`}
            >
              <ParallaxContainer
                imgSrc={item.image}
                className="rounded-[18px] h-full w-auto absolute  inset-0 origin-left min-w-[726px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
