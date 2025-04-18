import React from "react";
import content from "@/assets/images/content_manager.webp";
import media from "@/assets/images/media_manager.webp";
import seo from "@/assets/images/seo.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import RightArrow from "@/assets/SvgIcons/RightArrow";

export default function Scale() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // This Gsap code controls the scaling animation and color change animation of the cards, using scrollTrigger
    const scaleCards = gsap.utils.toArray(".scale-card");

    scaleCards.forEach((card, idx) => {
      gsap.from(card, {
        scale: 1.1,
        backgroundColor: "#cdc6fa",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top 30%",
          scrub: 1,
        },
      });
    });
  });

  const cardContent = [
    {
      heading: "Content Manager",
      para: "Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.",
      pic: content,
      alt: "Content Manager",
    },
    {
      heading: "Media Manager",
      para: "Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.",
      pic: media,
      alt: "Media Manager",
    },
    {
      heading: "SEO",
      para: "Dynamically update SEO content across pages to optimize your website's search performance.",
      pic: seo,
      alt: "seo",
    },
  ];

  return (
    <section className="bg-[#000000] scale-section">
      {/* Inner container */}
      <div className="center-section ">
        <h2 className="heading mb-[96px] max-w-[600px] text-transparent bg-anim white">
          Scale your business with
        </h2>

        {cardContent.map((card, idx) => {
          return <ScaleCard key={idx} {...card} />;
        })}
      </div>
    </section>
  );
}

function ScaleCard({ heading, para, pic, alt }) {
  return (
    <div className="pl-[48px] py-[48px] -768:p-[32px] rounded-[28px] flex -768:flex-col items-start justify-between gap-[40px] bg-[#ebe8fd] h-[80vh] max-h-[740px] -990:rounded-[14px] -990:max-h-[500px] -768:max-h-[800px] -990:h-[70vh] -990:top-[15vh] -575:px-[18px] mb-[80px] scale-card sticky top-[10vh]">
      {/* Container for typography */}
      <div className="flex flex-col justify-between -768:justify-start -768:gap-[32px] h-full pb-[64px] items-start max-w-[320px]">
        <h3 className="text-[32px] -990:text-[24px] font-semibold leading-[117.8%] ">
          {heading}
        </h3>

        {/* Container for paragraph and cta */}
        <div>
          <p className="text-[24px] -990:text-[16px] -768:text-[14px] -990:leading-[20px] -768:text-[#605c7a] leading-[28.8px]">
            {para}
          </p>

          <button
            className="font-semibold text-[#5641F3] mt-[24px] btn-underline flex gap-[8px]"
            aria-label="View Details"
          >
            <p className="relative"> View Details</p>
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-hidden h-full rounded-l-[18px] -768:rounded-[9px] w-full max-w-[874px]">
        <img
          src={pic}
          className=" h-full w-full object-cover object-left aspect-[19/14]"
          alt={alt}
        />
      </div>
    </div>
  );
}
