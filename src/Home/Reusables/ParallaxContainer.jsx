"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
// import { useScroll, motion, useTransform } from "framer-motion";

export default function ParallaxContainer({
  imgSrc,
  className,
  percent = -15,
  imgClass,
}) {
  const contRef = useRef(null);
  const picRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setContainerHeight();
    });

    setContainerHeight();
  }, []);

  function setContainerHeight() {
    if (picRef.current && contRef.current) {
      const picHeight = picRef.current.getBoundingClientRect().height;
      //   contRef.current.style.height = `${picHeight * 0.85}px`;
      setHeight(picHeight * 0.88);
    }
  }

  //   const { scrollYProgress } = useScroll({
  //     target: picRef,
  //     offset: ["0 1", "1 0"],
  //   });

  //   let yPercent;

  //   yPercent = useTransform(
  //     scrollYProgress,
  //     [0, 1],
  //     [0, -(height / 0.85) * 0.15]
  //   );

  useGSAP(() => {
    gsap.fromTo(
      picRef.current,
      {
        y: "3%",
      },
      {
        y: "-18%",
        scrollTrigger: {
          trigger: picRef.current,
          scrub: true,
        },
      }
    );
  });

  return (
    <div
      //   style={{ height: `${height}px` }}
      ref={contRef}
      className={`overflow-hidden relative  ${className}`}
    >
      <img
        ref={picRef}
        src={imgSrc}
        alt="image"
        className={`w-full h-full will-anim parallax-image  object-cover  origin-[0_10%]  scale-[1.2] ${imgClass}`}
      />
    </div>
  );
}

// Code for gsap parallax
{
  /* <div
style={{ height: `${height}px` }}
ref={contRef}
className={`overflow-hidden ${className}`}
>
<Image
  ref={picRef}
  onLoad={setContainerHeight}
  src={imgSrc}
  alt="image"
  className={`w-full will-anim parallax-image ${imgClass}`}
/>
</div> */
}
