import React, { Component } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl sm:text-7xl text-white text-center">
        Minimize your tabs. <br></br>Find the trends!
      </h1>
      <div className="sm:w-full w-4/5 flex flex-col items-center">
        <p className=" mt-6 text-gray-500 text-[0.6rem] sm:text-lg sm:font-semibold text-center sm:max-w-none">
          Don't let your computer memories consume all of those browser tabs.{" "}
          <br />
          Findtrend lets you gather all of your favorite websites into one
          place.
        </p>
        <div className="mt-6 flex flex-row">
          <button className="px-6 py-2 mt-6 ml-[3rem] bg-primary text-black font-bold text-sm rounded-3xl w-fit">
            Get Started 🔥
          </button>
          <Image
            src="/img-hero.svg"
            width={80}
            height={42}
            className="self-center"
          />
        </div>
      </div>

      <Image
        src="/btn-hero-socmed.svg"
        width={1076}
        height={178}
        className="mt-[5rem] hidden sm:block  "
      />
      <Image
        src="/mobiletabs.svg"
        width={313}
        height={319}
        className="mt-[4rem] block sm:hidden"
      />
    </div>
  );
};

export default Hero;
