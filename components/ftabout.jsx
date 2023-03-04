import React, { Component, useRef } from "react";
import { useInView } from "framer-motion";

const Ftabout = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <span
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="px-[2rem] text-5xl sm:text-8xl font-semibold"
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
