import React from "react";
import content from "@/assets/images/content_manager.webp";
import media from "@/assets/images/media_manager.webp";
import seo from "@/assets/images/seo.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    <section className="bg-[#000000] ">
      {/* Inner container */}
      <div className="center-section">
        <h2 className="heading mb-[96px] max-w-[600px] text-white">
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
    <div className="pl-[48px] py-[48px] rounded-[28px] flex items-start justify-between gap-[40px] bg-[#ebe8fd] h-[80vh] max-h-[740px] mb-[80px] scale-card sticky top-[10vh]">
      {/* Container for typography */}
      <div className="flex flex-col justify-between h-full pb-[64px] items-start max-w-[320px]">
        <h3 className="text-[32px] font-semibold leading-[38px]">{heading}</h3>

        {/* Container for paragraph and cta */}
        <div>
          <p className="text-[24px] leading-[28.8px]">{para}</p>

          <button
            className="font-semibold text-[#5641F3] mt-[24px]"
            aria-label="View Details"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-hidden h-full rounded-l-[18px] max-w-[874px]">
        <img src={pic} className="object-center" alt={alt} />
      </div>
    </div>
  );
}
