import React, { Component, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const Pricing = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <div ref={ref} className="flex flex-col place-items-center mt-10 mb-10">
      <span className="px-[2rem] text-3xl sm:text-5xl font-semibold mb-[1rem] text-white">
        Get your best deal
      </span>
      <div></div>
      {/* TOggle starts */}
      <div class="flex items-center justify-center mt-1 space-x-4">
        <div class="flex justify-center">
          <div class="flex items-center space-x-3 mb-8">
            <div class="text-sm text-white font-medium min-w-[120px] text-right">
              Monthly
            </div>
            <div class="relative select-none w-[101px]">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-[100px] h-[52px] bg-white  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[9px] after:bg-primary after:border-gray-300 after:border after:rounded-full after:h-[40px] after:w-[40px] after:transition-all  peer-checked:bg-white"></div>
              </label>
            </div>
            <div class="text-sm text-gray-500 font-medium min-w-[120px]">
              Yearly{" "}
              <Image
                src="/toggletext.svg"
                width={88}
                height={67}
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Toggle Ends */}
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-8">
        {/* <!-- Tab 1 --> */}
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.5s;",
          }}
          class=" flex flex-col justify-between items-center relative  h-[500px] w-[330px] sm:w-[260px] col-span-full md:col-span-4 bg-white shadow-md rounded-lg"
        >
          <div>
            <div class="px-5 pt-5 pb-3 border-b border-gray-200">
              <header class="flex items-center ">
                <h3 class="text-xl text-gray-800 font-semibold">Personal</h3>
              </header>
              <div class="text-sm mb-2">Special first package for all</div>
              {/* <!-- Price --> */}{" "}
            </div>
            <div class="px-5 pt-4 pb-5">
              <div class="text-gray-800 font-bold mb-4">
                <span class="text-2xl">$</span>
                <span class="text-5xl" x-text="annual ? '8' : '19'">
                  8
                </span>
                <span class="text-gray-500 font-medium text-sm">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul className="text-black">
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Up to 5 pages each group</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Up to 10 group pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">5 Days group page saved</div>
                </li>
              </ul>
            </div>
          </div>

          <button class="text-sm py-2 w-3/4 mb-4 bg-primary rounded-3xl text-black">
            Start Free Trial 🔥
          </button>
        </div>

        {/* Tab 2 */}
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.7s;",
          }}
          class=" flex flex-col justify-between items-center relative  h-[500px] w-[330px] sm:w-[260px]sm:w-[260px] col-span-full md:col-span-4 bg-green2 shadow-md rounded-lg"
        >
          <div>
            <div class="px-5 pt-5 pb-3 border-b border-gray-200">
              <header class="flex items-center ">
                <h3 class="text-xl text-black font-semibold">Regular</h3>
              </header>
              <div class="text-sm mb-2 text-black">
                Recommended for personal use
              </div>
              {/* <!-- Price --> */}{" "}
            </div>
            <div class="px-5 pt-4 pb-5">
              <div class="text-black font-bold mb-4">
                <span class="text-2xl">$</span>
                <span class="text-5xl" x-text="annual ? '20' : '19'">
                  20
                </span>
                <span class="text-black font-medium text-sm">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul className="text-black">
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Up to 15 pages each group</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Downlaod up to 20 group pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Up to 10 group pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">15 Days group page saved</div>
                </li>
              </ul>
            </div>
          </div>

          <button class="text-sm py-2 w-3/4 mb-4 bg-black text-white rounded-3xl">
            Start Free Trial 🔥
          </button>
        </div>
        {/* Tab 3 */}
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform: none;opacity: 1;transition: all 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.9s;",
          }}
          class=" flex flex-col justify-between items-center relative  h-[500px] w-[330px] sm:w-[260px] col-span-full md:col-span-4 bg-white shadow-md rounded-lg"
        >
          <div>
            <div class="px-5 pt-5 pb-3 border-b border-gray-200">
              <header class="flex items-center ">
                <h3 class="text-xl text-black font-semibold">Premium</h3>
              </header>
              <div class="text-sm mb-2 text-black">
                For Startups & Companies
              </div>
              {/* <!-- Price --> */}{" "}
            </div>
            <div class="px-5 pt-4 pb-5">
              <div class="text-gray-800 font-bold mb-4">
                <span class="text-2xl">$</span>
                <span class="text-5xl text-black" x-text="annual ? '48' : '19'">
                  48
                </span>
                <span class="text-gray-500 font-medium text-sm">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul className="text-black">
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Unlimited group pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Unlimited downlaod pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Unlimited pages per group</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Customized sorting group pages</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">Customized group page name</div>
                </li>
                <li class="flex items-center py-1">
                  <svg
                    class="w-3 h-3 flex-shrink-0 fill-current text-black mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div class="text-sm">30 Days group pages saved</div>
                </li>
              </ul>
            </div>
          </div>

          <button class="text-sm py-2 w-3/4 mb-4 bg-primary rounded-3xl text-black">
            Start Free Trial 🔥
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
