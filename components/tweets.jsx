import React, { Component, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const Tweets = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <div className="flex flex-col place-items-center mt-[6rem]">
      <span
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(700px)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.5s;",
        }}
        className="px-[2rem] text-5xl font-semibold mb-[4rem] text-black"
      >
        Connect to all platforms with Findtrend
      </span>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(700px)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.7s;",
        }}
        className="flex flex-row flex-wrap justify-between gap-4 mx-2"
      >
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/facebook.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-primary place-items-center rounded-md">
          <Image src="/twitter.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/dribbble.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/pintrest.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/medium.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/reddit.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/vk.svg" width={80} height={80} className="p-4" />
        </div>
        <div className="flex flex-col bg-white place-items-center rounded-md">
          <Image src="/linkedin.svg" width={80} height={80} className="p-4" />
        </div>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.9s;",
        }}
        className="flex flex-col justify-around h-auto"
      >
        <img
          src="/tweet1.svg"
          className="w-[800px] h-[274px] my-[3rem] hidden sm:block"
        />
        <img
          src="/tweet2.svg"
          className="w-[800px] h-[804px] my-[1rem] hidden sm:block"
        />
        <img
          src="/tweet3.svg"
          className="w-[800px] h-[274px] my-[3rem] hidden sm:block"
        />
        {/* Mobile tweets */}
        <img
          src="/tweet1mobile.svg"
          className="w-[316px] h-[116px] my-[3rem] block sm:hidden"
        />
        <img
          src="/tweet2mobile.svg"
          className="w-[339px] h-[334px] my-[1rem] block sm:hidden"
        />
        <img
          src="/tweet3mobile.svg"
          className="w-[339px] h-[116px] my-[3rem] block sm:hidden"
        />
      </div>
      <button class="text-sm py-2 w-2/5 mb-4 bg-black text-white rounded-3xl">
        Load Trends ⌛
      </button>
    </div>
  );
};

export default Tweets;
