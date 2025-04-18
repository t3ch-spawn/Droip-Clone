import DroipIcon from "@/assets/SvgIcons/DroipIcon";
import Facebook from "@/assets/SvgIcons/Facebook";
import LinkedIn from "@/assets/SvgIcons/LinkedIn";
import ThemeumIcon from "@/assets/SvgIcons/ThemeumIcon";
import Twitter from "@/assets/SvgIcons/Twitter";
import Youtube from "@/assets/SvgIcons/Youtube";
import React from "react";
import BtnArrow from "./Reusables/BtnArrow";
import gsap from "gsap";

export default function Footer() {
  const allLinks = [
    {
      containerClass: "-768:order-[5] -768:flex-row -768:gap-[32px]",
      heading: "Social",
      linkListClass: "-768:flex-row -768:translate-y-[-3px] -768:gap-[12px]",
      links: [
        { name: <Facebook />, url: "#", icon: true },
        { name: <Twitter />, url: "#", icon: true },
        { name: <LinkedIn />, url: "#", icon: true },
        { name: <Youtube />, url: "#", icon: true },
      ],
    },
    {
      containerClass: "",
      heading: "Product",
      links: [
        { name: "Grid & Layouts", url: "#" },
        { name: "Typography", url: "#" },
        { name: "Media Manager", url: "#" },
        { name: "form builder", url: "#" },
        { name: "Pop-Up Builder", url: "#" },
        { name: "Interaction & Animations", url: "#" },
        { name: "Accessibility", url: "#" },
      ],
    },
    {
      containerClass: "",
      heading: "Company",
      links: [
        { name: "Affiliates", url: "#" },
        { name: "Terms & Privacy", url: "#" },
        { name: "Cookie", url: "#" },
      ],
    },
    {
      containerClass: "",
      heading: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Documentation", url: "#" },
        { name: "Release Notes", url: "#" },
      ],
    },
    {
      containerClass: "",
      heading: "Support",
      links: [
        { name: "Pricing", url: "#" },
        { name: "Contact us", url: "#" },
      ],
    },
  ];
  function moveBg(e) {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    gsap.to(".bg-cursor.footer", {
      left: x,
      top: y,
      delay: 0.1,
      opacity: 0.48,
    });
  }

  return (
    <footer className="center-section py-0">
      {/* Get started container*/}
      <div
        onMouseMove={moveBg}
        className="flex -768:flex-col -990:gap-[30px] justify-between items-start p-[64px] -990:p-[32px] bg-[#000000] rounded-[18px] text-white max-h-[270px] -768:max-h-fit relative overflow-hidden"
      >
        {/* Heading */}
        <h2 className="text-[64px] -990:text-[36px] font-medium leading-[109.4%] tracking-tight max-w-[370px] -990:max-w-[200px] relative z-[3]">
          Get Started For Free
        </h2>

        {/* Container for typography and cta */}
        <div className="flex flex-col items-start gap-[32px] max-w-[364px] -990:max-w-[301px] -990:text-[12px] -768:max-w-full relative z-[3]">
          <p>
            Experience the power of Droip no-code website builder, risk free.
            Create stunning, responsive sites with pure creative freedom.
          </p>
          <BtnArrow className="mt-0" content={"Try for Free"} />
        </div>

        <div className="absolute w-[732px] h-[496px] bg-[#5641f3] bg-cursor footer translate-x-[-50%] translate-y-[-50%] z-[2] opacity-[0.48] left-[100%]"></div>
      </div>

      {/* Container for links and social links */}
      <div className="grid grid-cols-5 -990:grid-cols-[0.5fr_1fr_1fr_1fr_1fr] -768:grid-cols-2 -768:gap-[32px] gap-[16px] mt-[145px] ">
        {/* The allLinks contains the content for all the links. Since the structure is repititive, I mapped it out with a general structure, the "containerClass property controls the styles for each individual container" */}
        {allLinks.map((list) => {
          return (
            <ul className={`flex flex-col ${list.containerClass}`}>
              {/* List heading */}
              <h3 className="font-semibold mb-[24px] text-black">
                {list.heading}
              </h3>

              {/* Links List */}
              <div className={`flex flex-col gap-[14px] ${list.linkListClass}`}>
                {list.links.map((link, idx) => {
                  return link.icon ? (
                    <a
                      key={idx}
                      href="#"
                      target="_blank"
                      className="size-[32px] rounded-full footer-icon duration-300 ease-in-out flex justify-center items-center"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      className="text-[#605C7A] hover:text-black duration-300 ease-in-out -990:text-[14px] -575:text-[12px] -575:gap-[12px] -990:leading-[142.86%]"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </ul>
          );
        })}
      </div>

      {/* Container for copyright and credits  */}
      <div className="mt-[80px] border-t-[2.4px] border-[#00000026] pt-[22px] pb-[24px] flex  justify-between items-center font-[300] text-[#00000099] flex-wrap gap-[40px] -575:gap-[24px]">
        <p className="-768:order-3">© 2025 Droip. All rights reserved</p>

        {/* Themeum */}
        <div className="flex items-center gap-[8px]">
          <p>A Product by</p>

          <ThemeumIcon />
        </div>

        {/* Made in droip */}
        <div className="bg-[#9353ff] flex gap-[8px] items-center p-[1px] pl-[8px] rounded-[5px]">
          <DroipIcon />

          <div className="bg-white rounded-[4px] p-[8px] py-[5px] font-medium text-[13px]">
            Made in Droip
          </div>
        </div>
      </div>
    </footer>
  );
}
