import AngleBracket from "@/assets/SvgIcons/AngleBracket";
import React from "react";

export default function BtnArrow({className, content}) {
  return (
    <button className={`btn-arrow flex justify-center items-center mt-[8px] w-full h-[44px] rounded-[18px] bg-[#5642f3] text-white text-[18px] -990:text-[16px] hover:h-[52px] hover:w-[98%] duration-300 ease-in-out origin-center -768:py-[8px] -768:px-[24px] ${className}`}>
        {content}
      <div className="flex items-center">
        <div className="bg-white h-[2px] w-[0px] duration-300 ease-in-out translate-x-[11px] rounded-full arrow-tail"></div>
        <AngleBracket />
      </div>
    </button>
  );
}
