import React, { Component, useRef } from "react";
import { useInView } from "framer-motion";

const Ftabout = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <span
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-700px)",
        opacity: isInView ? 1 : 0,
        transition:
          "transform: none;opacity: 1;transition: all 0.9s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.5s;",
      }}
      className="px-[2rem] text-5xl sm:text-8xl font-semibold text-black"
    >
      Findtrend helps you to increase your productivity and reduce your
      computer's memory load,{" "}
      <span className="text-gray2">
        an application that can fulfill your daily browsing needs.
      </span>
    </span>
  );
};

export default Ftabout;
