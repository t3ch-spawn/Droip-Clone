import CostEffective from "@/assets/SvgIcons/CostEffective";
import MoreControl from "@/assets/SvgIcons/MoreControl";
import SimpleWorkflow from "@/assets/SvgIcons/SimpleWorkflow";
import StreamLined from "@/assets/SvgIcons/StreamLined";
import React from "react";

export default function Dependencies() {
  const gridContent = [
    {
      heading: "More control, less reliance",
      icon: <MoreControl />,
      para: "Get complete control over your website’s performance and aesthetics without extra plugins.",
      className: "order-1 justify-end",
    },
    {
      heading: "Cost-effective",
      icon: <CostEffective />,
      para: "Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses.",
      className: "order-3",
    },
    {
      heading: "Simplified workflow",
      icon: <SimpleWorkflow />,
      para: "With everything built in, your design process is streamlined, efficient, and hassle-free.",
      className: "order-4",
    },
    {
      heading: "Streamlined & secure",
      icon: <StreamLined />,
      para: "Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight.",
      className: "order-5",
    },
  ];

  return (
    <section className="center-section">
      {/*heading  */}
      <h2 className="heading-2 max-w-[350px] ">
        Low <br /> third-party dependencies
      </h2>

      {/* Container for grid of cards */}
      <div className="grid gap-[1px] grid-cols-3 mt-[72px] relative">
        {gridContent.map((content, idx) => {
          return <DependencyCard {...content} key={idx} />;
        })}
        <div className="grid-blur-2 w-[455px] h-[455px] absolute z-[1] opacity-[0.5] center-x top-[25%] "></div>
        {/* Container for video */}
        <DependencyCard className="order-2 col-span-2 max-w-[initial] p-0 pl-[48px]">
          <video
            name="video"
            type="video\/mp4"
            loop="true"
            muted="true"
            playbackrate="1"
            starttime="0"
            endtime="0"
            lazy="true"
            playsinline=""
            autoPlay="true"
            // controls
            style={{ objectFit: "fill" }}
            poster=""
          >
            <source
              type="video/mp4"
              src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
            />
          </video>
        </DependencyCard>
      </div>
    </section>
  );
}

function DependencyCard({ heading, icon, para, className, children }) {
  return (
    <div
      className={`flex flex-col max-w-[439px] rounded-[18px] p-[48px] bg-white relative z-[2] ${className}`}
    >
      {/* This children prop is for the video element primarily */}
      {children ? (
        children
      ) : (
        <>
          {" "}
          {/* Icon */}
          {icon}
          {/* Heading */}
          <h3 className="text-[24px] font-semibold leading-[28.8px] mt-[43px]">
            {heading}
          </h3>
          {/* Paragraph */}
          <p className="text-[18px] leading-[25.2px] text-[#605C7A] font-medium mt-[18px]">
            {para}
          </p>
        </>
      )}
    </div>
  );
}
