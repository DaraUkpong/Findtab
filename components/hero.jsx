import React, { Component, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-bold text-4xl sm:text-7xl text-white text-center"
      >
        Minimize your tabs. <br></br>Find the trends!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="sm:w-full w-4/5 flex flex-col items-center"
      >
        <p className=" mt-6 text-gray-500 text-[0.6rem] sm:text-lg sm:font-semibold text-center sm:max-w-none">
          Don't let your computer memories consume all of those browser tabs.{" "}
          <br />
          Findtrend lets you gather all of your favorite websites into one
          place.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-6 flex flex-row"
        >
          <button className="px-6 py-2 mt-6 ml-[3rem] bg-primary text-black font-bold text-sm rounded-3xl w-fit">
            Get Started 🔥
          </button>
          <Image
            src="/img-hero.svg"
            width={80}
            height={42}
            className="self-center"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src="/btn-hero-socmed.svg"
          width={1076}
          height={178}
          className="mt-[5rem] hidden sm:block  "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src="/mobiletabs.svg"
          width={313}
          height={319}
          className="mt-[4rem] block sm:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
