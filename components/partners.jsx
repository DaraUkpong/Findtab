import React, { Component } from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className=" flex flex-col place-items-center mt-10">
      <span className=" text-5xl font-semibold mb-[4rem] text-center">
        Findtrend has helped +1000 startups
      </span>

      <div className="grid grid-rows-8 sm:grid-rows-4 grid-cols-2 sm:grid-cols-4 gap-4 mx-4">
        <div className="bg-gray3 rounded-md">
          <Image
            src="/Microsoft.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/Allianz.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/upwork.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/volvo.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/Grab.svg"
            width={190}
            height={90}
            className="p-[2.5rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/verizon.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/coinbase.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/expedia.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/airtable.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/magento.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/carrera.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/bonanza.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/wetransfer.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/suzuki.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/algolia.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
        <div className="bg-gray3 rounded-md">
          <Image
            src="/heineken.svg"
            width={190}
            height={90}
            className="p-[3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
