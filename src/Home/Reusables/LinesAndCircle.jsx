import React from "react";

export default function LinesAndCircle() {
  return (
    <div className="w-full">
      {/* Horizontal line */}
      <div className="purple-divider h-[1px] w-full"></div>

      {/* Vertical line */}
      <div className="bg-[#5641f3] h-[77%] w-[1px] ml-auto"></div>

      {/* Circle */}
      <div className="w-[15px] h-[15.4px] bg-[#5641f3] rounded-[100px] ml-auto relative left-[7px]"></div>
    </div>
  );
}
