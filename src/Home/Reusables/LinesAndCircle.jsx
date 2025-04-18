import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function LinesAndCircle() {
  const linesAndCircle = useRef(null);
  const purpleDivider = useRef(null);
  const verticalLine = useRef(null);
  const purpleCircle = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: { trigger: linesAndCircle.current },
      })
      .from(purpleDivider.current, {
        width: 0,
        duration: 0.8,
      })
      .from(verticalLine.current, {
        height: 0,
        duration: 0.6
      })
      .from(
        purpleCircle.current,
        {
          scale: 0,
        },
        "<"
      );
  });

  return (
    <div ref={linesAndCircle} className="w-full lines-and-circle">
      {/* Horizontal line */}
      <div ref={purpleDivider} className="purple-divider h-[1px] w-full"></div>

      {/* Vertical line */}
      <div
        ref={verticalLine}
        className="bg-[#5641f3] h-[77%] w-[1px] ml-auto vertical-line"
      ></div>

      {/* Circle */}
      <div
        ref={purpleCircle}
        className="w-[15px] h-[15.4px] bg-[#5641f3] rounded-[100px] ml-auto relative left-[7px] purple-circle"
      ></div>
    </div>
  );
}
