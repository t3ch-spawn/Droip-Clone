import ActiveCampaign from "@/assets/SvgIcons/ActiveCampaign";
import Boxes from "@/assets/SvgIcons/Boxes";
import Captcha from "@/assets/SvgIcons/Captcha";
import Chat from "@/assets/SvgIcons/Chat";
import Cow from "@/assets/SvgIcons/Cow";
import Drip from "@/assets/SvgIcons/Drip";
import Email from "@/assets/SvgIcons/Email";
import FacebookBlue from "@/assets/SvgIcons/FacebookBlue";
import Figma from "@/assets/SvgIcons/Figma";
import GetResponse from "@/assets/SvgIcons/GetResponse";
import Google from "@/assets/SvgIcons/Google";
import HelpScout from "@/assets/SvgIcons/HelpScout";
import Intercom from "@/assets/SvgIcons/Intercom";
import Kit from "@/assets/SvgIcons/Kit";
import Lite from "@/assets/SvgIcons/Lite";
import LiveChat from "@/assets/SvgIcons/LiveChat";
import Monkey from "@/assets/SvgIcons/Monkey";
import Olark from "@/assets/SvgIcons/Olark";
import Palella from "@/assets/SvgIcons/Palella";
import Parrot from "@/assets/SvgIcons/Parrot";
import ThriveDesk from "@/assets/SvgIcons/ThriveDesk";
import TwitterBig from "@/assets/SvgIcons/TwitterBig";
import Zendesk from "@/assets/SvgIcons/Zendesk";
import Zoho from "@/assets/SvgIcons/Zoho";
import React from "react";
import LinesAndCircle from "./Reusables/LinesAndCircle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AppIntegration() {
  const gridIcons = [
    <Intercom />,
    <HelpScout />,
    <Olark />,
    <Monkey />,
    <Kit />,
    <ActiveCampaign />,
    <Cow />,
    <Zendesk />,
    <Chat />,
    <Drip />,
    <Lite />,
    <GetResponse />,
    <Figma />,
    <ThriveDesk />,
    <Google />,
    <Palella />,
    <Email />,
    <Boxes />,
    <FacebookBlue />,
    <TwitterBig />,
    <Parrot />,
    <Zoho />,
    <LiveChat />,
    <Captcha />,
  ];

  function blurCards(e, state) {
    const allAppCards = document.querySelectorAll(".app-card");
    const { currentTarget } = e;

    if (state === "blur") {
      // If the state is blur, add the blur class to all cards except the card currently being hovered on
      allAppCards.forEach((card) => {
        card.classList.add("blur");
      });

      currentTarget.classList.remove("blur");
    } else {
      // If the state is unblur, remove blur class from all cards
      allAppCards.forEach((card) => {
        card.classList.remove("blur");
      });
    }
  }

  useGSAP(() => {
    // Animation for icon cards
    gsap.from(".app-card", {
      scale: 0,
      stagger: 0.04,
      scrollTrigger: {
        trigger: ".icons-grid",
      },
    });
  });

  return (
    <section className="center-section">
      <h2 className="heading bg-anim black">
        App <br /> Integration
      </h2>

      {/* Container for linesCircle and paragraph */}
      <div className="mt-[24px] flex gap-[24px]">
        {/* Lines and Circle */}
        <LinesAndCircle />

        {/* Paragraph */}
        <p className="text-[24px] -768:text-[18px] leading-[120%] max-w-[445px]">
          Connect your go-to apps effortlessly within the builder for a smooth
          and uninterrupted workflow.
        </p>
      </div>

      {/* Container for icon grid */}
      <div className="icons-grid mt-[96px] -990:mt-[60px]">
        {/* Mapping out each icon card with the icons array */}
        {gridIcons.map((icon, idx) => {
          return (
            <div
              key={idx}
              onMouseEnter={(e) => {
                blurCards(e, "blur");
              }}
              onMouseLeave={(e) => {
                blurCards(e, "unblur");
              }}
              className="bg-[#ebe8fe] hover:bg-[#c9c2fb] app-card  min-h-[110px] -990:min-h-[100px] -768:min-h-[80px] -575:min-h-[64px] rounded-[18px] flex justify-center items-center "
            >
              {icon}
            </div>
          );
        })}
      </div>
    </section>
  );
}
