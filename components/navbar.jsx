import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../styles/Home.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center relative w-[100%] pt-[2rem] px-[3rem]">
      <div className="w-full flex flex-row justify-between">
        <Image
          src="/logo.png"
          width={170}
          height={41}
          className="hidden sm:block"
        />
      </div>

      <div
        className=" hidden sm:flex flex-row place-items-center justify-between w-3/4"
        id="navbar-solid-bg"
      >
        <div className="flex flex-row justify-between text-gray2 font-semibold w-[488px]">
          <a href="" className="">
            About
          </a>
          <a href="">How It Works</a>
          <a href="">Pricing</a>
          <a href="">Solution</a>
          <a href="">Resources</a>
        </div>
        <div className="flex flex-row">
          <button className="py-2 px-4 text-gray2 font-semibold">Login</button>
          <button className="py-2 px-6 text-black font-semibold rounded-3xl bg-white">
            Register
          </button>
        </div>
      </div>

      {/* mobilenav */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full absolute flex flex-col items-center h-full"
        id="navbar-solid-bg"
      >
        <div className="w-full flex flex-row justify-between mx-3  bg-black">
          <Image
            src="/Logomobile.svg"
            width={40}
            height={40}
            className="block sm:hidden ml-[2rem]"
          />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            class="inline-flex items-center p-2 mr-[2rem] text-sm text-primary rounded-lg sm:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen == true && (
          <div
            id="mobile-nav"
            className="flex flex-col justify-between items-center text-gray2 font-semibold w-full bg-black h-screen"
          >
            <a href="" className="my-4">
              About
            </a>
            <a href="" className="my-4">
              How It Works
            </a>
            <a href="" className="my-4">
              Pricing
            </a>
            <a href="" className="my-4">
              Solution
            </a>
            <a href="" className="my-4">
              Resources
            </a>

            <button className="py-2 px-4 my-4 text-gray2 font-semibold">
              Login
            </button>
            <button className="py-2 px-6 my-4 text-black font-semibold rounded-3xl bg-white">
              Register
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
