import React, { Component, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
const Opentabs = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-300px)",
        opacity: isInView ? 1 : 0,
        transition:
          "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.5s;",
      }}
      className="flex flex-col justify-center items-center h-[50vh] sm:h-screen"
    >
      <h2 className="mt-6 font-bold text-3xl sm:text-6xl text-black text-center">
        Opening new tabs is sh*t
      </h2>
      <div className="flex flex-col sm:flex-row items-center my-[3rem]">
        <Image
          src="./opentabimgtop.svg"
          width={100}
          height={70}
          className="self-end relative top-4 block sm:hidden"
        />
        <Image
          src="./opentabimgleft.svg"
          width={100}
          height={70}
          className="self-center hidden sm:block"
        />
        <div className="bg-white rounded-md flex place-content-center mx-3 p-5 sm:p-[4rem] ">
          <Image src="/group15.svg" width={341} height={82} />
        </div>
        <Image
          src="./opentabimgright.svg"
          width={100}
          height={70}
          className="self-center hidden sm:block"
        />
        <Image
          src="./opentabimgbottom.svg"
          width={100}
          height={70}
          className="self-start relative bottom-4 block sm:hidden"
        />
      </div>
      <span className="text-black font-normal text-center">
        A solution for your browser tabs that does'nt make your device get
        slower over time. Go <br></br>easier and faster to discover a trend with
        just one tab.{" "}
      </span>
    </div>
  );
};

export default Opentabs;
