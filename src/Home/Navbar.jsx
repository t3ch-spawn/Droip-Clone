import DroipNav from "@/assets/SvgIcons/DroipNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Navbar() {
  const navList = [
    { name: "Home", link: "#" },
    { name: "Product", link: "#" },
    { name: "Resources", link: "#" },
    { name: "Support", link: "#" },
    { name: "Pricing", link: "#" },
  ];

  const navTimeline = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasNavReversed, setHasNavReveresed] = useState(false);

  //   Animation for nav Drawer
  useGSAP(() => {
    navTimeline.current = gsap
      .timeline({
        paused: true,
        onReverseComplete: () => {
          setHasNavReveresed(true);
        },
      })
      .to(
        ".nav-drawer-content",
        {
          y: 0,
          duration: 0.5,
          ease: "power1.inOut",
        },
        0
      )
      .to(
        ".nav-drawer",
        {
          y: 0,
          duration: 0.5,
          visibility: "inherit",
          pointerEvents: "all",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        ".ham-line",
        {
          scaleX: 0,
          stagger: 0.1,
          duration: 0.33,
          onStart: () => {
            setHasNavReveresed(false);
          },
        },
        0
      )
      .to(".x-line", {
        width: "100%",
        stagger: 0.2,
        duration: 0.3,
      });
  });

  function ToggleNav() {
    if (isNavOpen) {
      navTimeline.current?.reverse();
      setIsNavOpen(false);
      gsap.to("nav", {
        background: "initial",
      });
    } else {
      navTimeline.current?.play();
      setIsNavOpen(true);
      gsap.to("nav", {
        background: "transparent",
      });
    }
  }

  return (
    <>
      <nav className="z-[40] sticky top-0 bg-[#f5f5f7db] -990:bg-[#ffffffb8] w-full">
        <div className="flex items-center justify-between max-w-[1320px] -990:max-w-[820px] -768:max-w-[640px] mx-auto py-[12px] pt-[18px] px-[20px] ">
          {/* Container for logo and links */}
          <div className="flex items-center gap-[64px]">
            <DroipNav />
            <ul className="flex gap-[14px] items-center justify-start -990:hidden">
              {/* Mapping out nav items */}
              {navList.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.name}
                    className={`text-[14px] p-[10px] font-medium leading-[100%] ${
                      idx !== 0 ? "text-[#605c7a]" : "text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </ul>
          </div>

          {/* Container for login and get started */}
          <div className="flex items-center gap-[18px] -990:hidden">
            <a
              href=""
              className="text-[#605c7a] text-[14px] font-medium p-[10px] mr-[11px]"
            >
              Login
            </a>
            <a href="#">
              <button className="bg-[#5641f3] rounded-[12px] text-[14px] py-[8px] px-[16px] h-[36px] text-white">
                Get Started
              </button>
            </a>
          </div>

          {/* Container for hamburger and X */}
          <div className="relative h-[14px] w-[21px]  justify-center items-center hidden -990:flex">
            {" "}
            {/* Hamburger */}
            <button
              onClick={ToggleNav}
              className="flex flex-col justify-between h-full w-full absolute"
            >
              <div className="burger-line ham-line scale-x-100 origin-left "></div>
              <div className="burger-line ham-line scale-x-100 origin-right "></div>
              <div className="burger-line ham-line scale-x-100 origin-left "></div>

              {/* X */}
            </button>
            <button
              onClick={ToggleNav}
              className="h-full translate-x-[4px] w-full absolute"
            >
              {" "}
              <div className="x-line !h-[2px] burger-line rotate-[45deg]  translate-y-[-330%] w-0  origin-left"></div>
              <div className="x-line !h-[2px] burger-line rotate-[-45deg] translate-y-[6px]  w-0 origin-left"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Container for mobile Drawer */}
      <div className="hidden -990:block nav-drawer translate-y-[-100%] fixed w-full h-full inset-0 z-[30] overflow-hidden pointer-events-none invisible">
        {/* Actual container for nav links and ctas */}
        <div className="nav-drawer-content translate-y-[100%] fixed w-full h-full inset-0">
          <ul className="flex flex-col w-full text-black justify-center items-start px-[20px] mt-[100px] gap-[20px]">
            {/* Mapping out nav items */}
            {navList.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item.name}
                  className={`text-[18px] py-[16px] font-medium leading-[100%] border-b border-[#5641f333] w-full ${
                    idx !== 0 ? "text-[#605c7a]" : "text-black"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <a
              href="#"
              className={`text-[18px] py-[16px] font-medium leading-[100%] border-b border-[#5641f333] w-full text-[#605c7a]`}
            >
              Login
            </a>

            <a href="#">
              <button className="bg-[#5641f3] rounded-[12px] text-[14px] py-[8px] px-[16px] h-[36px] text-white">
                Get Started
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
