import DroipIcon from "@/assets/SvgIcons/DroipIcon";
import Facebook from "@/assets/SvgIcons/Facebook";
import LinkedIn from "@/assets/SvgIcons/LinkedIn";
import ThemeumIcon from "@/assets/SvgIcons/ThemeumIcon";
import Twitter from "@/assets/SvgIcons/Twitter";
import Youtube from "@/assets/SvgIcons/Youtube";
import React from "react";
import BtnArrow from "./Reusables/BtnArrow";

export default function Footer() {
  const allLinks = [
    {
      containerClass: "",
      heading: "Social",
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

  return (
    <footer className="center-section py-0">
      {/* Get started container*/}
      <div className="flex justify-between items-center p-[64px] bg-[#000000] rounded-[18px] text-white max-h-[270px]">
        {/* Heading */}
        <h2 className="heading-2 max-w-[370px]">Get Started For Free</h2>

        {/* Container for typography and cta */}
        <div className="flex flex-col items-start gap-[32px] max-w-[364px]">
          <p>
            Experience the power of Droip no-code website builder, risk free.
            Create stunning, responsive sites with pure creative freedom.
          </p>
          <BtnArrow className="mt-0" content={"Try for Free"} />
        </div>
      </div>

      {/* Container for links and social links */}
      <div className="grid grid-cols-5 mt-[145px] ">
        {/* The allLinks contains the content for all the links. Since the structure is repititive, I mapped it out with a general structure, the "containerClass property controls the styles for each individual container" */}
        {allLinks.map((list) => {
          return (
            <ul className="flex flex-col">
              {/* List heading */}
              <h3 className="font-semibold mb-[24px] text-black">
                {list.heading}
              </h3>

              {/* Links */}
              {list.links.map((link) => {
                return link.icon ? (
                  <a
                    href="#"
                    target="_blank"
                    className="mb-[12px] size-[32px] rounded-full footer-icon duration-300 ease-in-out flex justify-center items-center"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    className="text-[#605C7A] mb-[14px] hover:text-black duration-300 ease-in-out"
                  >
                    {link.name}
                  </a>
                );
              })}
            </ul>
          );
        })}
      </div>

      {/* Container for copyright and credits  */}
      <div className="mt-[80px] border-t-[2.4px] border-[#00000026] pt-[22px] pb-[24px] flex  justify-between items-center font-[300] text-[#00000099]">
        <p className="">© 2025 Droip. All rights reserved</p>

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
