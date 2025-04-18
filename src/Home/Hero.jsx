import React from "react";
import heroPic from "@/assets/images/hero-home.webp";
import BtnArrow from "./Reusables/BtnArrow";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { CustomEase, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Video from "@/assets/SvgIcons/Video";
import SplitType from "split-type";

export default function Hero() {
  gsap.registerPlugin(CustomEase);

  useGSAP(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", (e) => {
      if (e.direction === 1) {
        gsap.to("nav", {
          translateY: "-100%",
        });
      } else{
        gsap.to("nav", {
          translateY: "0%",
        });
      }
    });

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    // Animation for headings
    const split = new SplitType(".split, .bg-anim, .heading-anim", {
      types: "words,chars",
    });

    const allHeadings = document.querySelectorAll(".heading-anim");
    const bgHeadings = document.querySelectorAll(".bg-anim");

    // // Animations for all big paragraphs
    const myEase =
      "M0,0 C0.077,0.345 0.076,0.486 0.113,0.641 0.127,0.707 0.165,0.817 0.203,0.855 0.222,0.874 0.263,0.909 0.286,0.922 0.336,0.951 0.39,0.967 0.463,0.976 0.522,0.983 0.593,1 0.684,1 0.77,1.002 0.873,1 1,1 ";

    allHeadings.forEach((heading) => {
      const chars = heading.querySelectorAll(".char");
      gsap.set(chars, { y: 100, opacity: 0 });
    });

    const observerOptions = {
      root: null, // Observes within the viewport
      threshold: 0.6, // Trigger when 80% of the heading is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chars = entry.target.querySelectorAll(".char");
          const words = entry.target.querySelectorAll(".word");
          gsap
            .timeline()
            .to(chars, {
              y: 0,
              opacity: 1,
              duration: 1.3,
              ease: CustomEase.create("custom", myEase),
            })
            .to(
              words,
              {
                overflow: "visible",
              },
              "<0.5"
            );

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    allHeadings.forEach((heading) => {
      observer.observe(heading);
    });

    // This is for animation that have a masked color reveal effect, it animates the background stop value
    bgHeadings.forEach((heading) => {
      const words = heading.querySelectorAll(".word");
      gsap.to(words, {
        duration: 1,
        ease: "power2.inOut",
        "--stop": "100%",
        stagger: 0.1,
        scrollTrigger: {
          trigger: heading,
        },
      });
    });

    // Animating the opacity of the hero image in on load
    gsap.from(".hero-image", {
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });
  });

  return (
    <section className="pt-[68px] center-section">
      {/* Bubble starting the hero */}
      <div className="bg-[#ddd9fc] text-[18px] font-semibold px-[20px] py-[8px] w-fit rounded-full tracking-tight">
        No-Code WordPress Site Builder
      </div>

      {/* Container for boxes and heading */}
      <div className="flex justify-between items-cente mt-[48px] -768:mt-[24px] -768:flex-col">
        {/* Heading */}
        <h1 className="heading !font-semibold max-w-[750px] -990:max-w-[400px]">
          Break Limits. <br className="-990:hidden" /> Build{" "}
          <span className="text-[#5642f3]">Anything</span>.{" "}
          <br className="-990:hidden" /> No Code Needed.
        </h1>

        {/* Boxes on the right containing paragraph and cta */}
        <div className="max-w-[420px]">
          {/* Paragraph box */}
          <div className="max-w-[321px] -768:max-w-full text-[18px] leading-[140%] h-[200px] -990:h-fit rounded-[18px] text-[#605C7A] bg-[#ebe8fd] -768:bg-transparent flex justify-center items-start px-[24px] py-[32px] -990:py-[24px] -768:px-0">
            Droip is a no-code, drag-and-drop WordPress builder that simplifies
            website creation with powerful capabilities.
          </div>

          {/* Watch video button */}
          <button
            aria-label="Watch Intro"
            className="flex justify-center items-center gap-[6px] text-[#5641F3] font-semibold w-full rounded-[18px] h-[44px] bg-[#ebe8fd] mt-[5px]"
          >
            Watch Intro
            <Video />
          </button>

          <BtnArrow content={"Get Started with Droip"} />
        </div>
      </div>

      {/* Container for picture of hero */}
      <img
        src={heroPic}
        alt="hero picture"
        className="mt-[96px] -990:mt-[60px] w-full aspect-[1280/733] hero-image border-[#ddd9fd] rounded-[14px] border-[8px]"
      />
    </section>
  );
}
