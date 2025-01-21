import Image from "next/image";
import React from "react";

const FrontHeader = () => {
  return (
    <div className="w-full flex justify-between items-center h-28 bg-[#343438]">
      {/* Logo section */}
      <div className="w-[310px] h-full bg-[#343438] ml-[70px] flex justify-center items-center gap-x-1.5">
        <Image
          src={images.headerAppLogo}
          width={69}
          height={69}
          alt="logo"
          style={{ color: "#B98E75" }}
        ></Image>
        <h1
          className="text-white"
          style={{
            fontSize: "42px",
            fontFamily: "Saira SemiCondensed",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          SolArt
        </h1>
      </div>

      {/* Page navigate section */}
      <div className="flex gap-5 text-white">
        {/* Home navigation */}
        <div className="flex items-center gap-x-2">
          <h1>Home</h1>

          {/* home options */}
          <Image
            src={images.arrow}
            className={"w-[12px] h-[12px] color-[#FFFFFF]"}
            alt="down"
          ></Image>
        </div>

        {/* Service navigation */}
        <div className="flex items-center gap-x-2">
          <h1>Service</h1>

          {/* service options */}
          <Image
            src={images.arrow}
            className={"w-[12px] h-[12px] color-[#FFFFFF]"}
            alt="down"
          ></Image>
        </div>

        {/* Project navigation */}
        <div className="flex items-center gap-x-2">
          <h1>Project</h1>

          {/* project options */}
          <Image
            src={images.arrow}
            className={"w-[12px] h-[12px] color-[#FFFFFF]"}
            alt="down"
          ></Image>
        </div>

        {/* Pages navigation */}
        <div className="flex items-center gap-x-2">
          <h1>Pages</h1>

          {/* pages options */}
          <Image
            src={images.arrow}
            className={"w-[12px] h-[12px] color-[#FFFFFF]"}
            alt="down"
          ></Image>
        </div>

        {/* News navigations */}
        <div className="flex items-center gap-x-2">
          <h1>News</h1>

          {/* news options */}
          <Image
            src={images.arrow}
            className={"w-[12px] h-[12px] color-[#FFFFFF]"}
            alt="down"
          ></Image>
        </div>

        {/* Contact navigatation */}
        <div>
          <h1>Contact</h1>
        </div>
      </div>

      {/* Contact section */}
      <div className="flex items-center gap-x-[12px] mr-[70px]">
        {/* Phone loge */}
        <div
          className={
            "w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center font-[Saira SemiCondensed]"
          }
        >
          <Image src={images.phone} alt="phone"></Image>
        </div>

        {/* Phone number */}
        <div>
          <h1 className="text-[22px] font-medium text-white leading-[34.63px]">
            Call Anytime
          </h1>
          <h1 className="text-[16px] font-normal text-white leading-6">
            +0987654321
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrontHeader;
