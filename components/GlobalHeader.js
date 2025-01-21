import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "./demodata";
// import style from './Header.module.css'

const GlobalHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-[2000] px-[10px] w-full flex items-center h-[60px] xl:h-28 bg-[#252531]">
      <div className="w-full h-full  flex justify-between items-center">
        {/* Page navigate section for smnall screen */}
        {open && (
          <div className=" block md:hidden w-full absolute top-[60px] left-0 pr-12 py-4 bg-gradient-to-r from-[#0404c2c7] to-[#0b0b30] text-white ">
            {/* Home navigation */}

            <div className="w-20 py-3 ml-auto">
              <Link href="/">
                <div className=" flex justify-between items-center gap-x-2  hover:text-[#B98E75]  ">
                  Home
                  {/* home options */}
                  <Image
                    src={images.header_arrow}
                    className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                    alt="down"
                  ></Image>
                </div>
              </Link>
            </div>

            {/* Service navigation */}
            <div className="w-20 py-3 ml-auto">
              <div className=" flex justify-between items-center gap-x-2  hover:text-[#B98E75]  ">
                <h1>Service</h1>

                {/* service options */}
                <Image
                  src={images.header_arrow}
                  className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                  alt="down"
                ></Image>
              </div>
            </div>

            {/* Project navigation */}
            <div className="w-20 py-3 ml-auto">
              <Link href="/projects">
                <div className="flex justify-between items-center gap-x-2  hover:text-[#B98E75]  ">
                  Project
                  {/* project options */}
                  <Image
                    src={images.header_arrow}
                    className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                    alt="down"
                  ></Image>
                </div>
              </Link>
            </div>

            {/* Pages navigation */}
            <div className="w-20 py-3 ml-auto">
              <div className="flex justify-between items-center gap-x-2  hover:text-[#B98E75] ">
                <h1>Pages</h1>

                {/* pages options */}
                <Image
                  src={images.header_arrow}
                  className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                  alt="down"
                ></Image>
              </div>
            </div>

            {/* News navigations */}
            <div className="w-20 py-3 ml-auto">
              <div className="flex justify-between items-center gap-x-2  hover:text-[#B98E75]  py-3 ">
                <h1>News</h1>

                {/* news options */}
                <Image
                  src={images.header_arrow}
                  className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                  alt="down"
                ></Image>
              </div>
            </div>

            {/* Contact navigatation */}
            <div className="w-20 py-3 ml-auto">
              <Link href="/contact-us">Contact</Link>
            </div>
          </div>
        )}

        {/* Logo section */}
        <div className="xl:w-[310px] h-full bg-[#252531] ml-3 xl:ml-[70px] flex justify-center items-center gap-x-1.5">
          <Image
            src={images.headerAppLogo}
            className="w-[33px] h-[33px] xl:w-[69px] xl:h-[69px] text-[#B98E75]"
            alt="logo"
          ></Image>
          <h1 className="text-white text-[22px] xl:text-5xl font-medium xl:font-bold">
            SolArt
          </h1>
        </div>

        {/* Page navigate section for large screen */}
        <div className="hidden md:flex gap-5 text-white">
          {/* Home navigation */}
          <Link href="/">
            <div className="flex items-center gap-x-2  hover:text-[#B98E75]  ">
              Home
              {/* home options */}
              <Image
                src={images.header_arrow}
                className="w-[12px] h-[12px] color-[#FFFFFF]"
                alt="down"
              ></Image>
            </div>
          </Link>

          {/* Service navigation */}
          <div className="flex items-center gap-x-2  hover:text-[#B98E75] ">
            <h1>Service</h1>

            {/* service options */}
            <Image
              src={images.header_arrow}
              className={"w-[12px] h-[12px] color-[#FFFFFF]"}
              alt="down"
            ></Image>
          </div>

          {/* Project navigation */}

          <Link href="/projects">
            <div className="flex items-center gap-x-2  hover:text-[#B98E75] ">
              Project
              {/* project options */}
              <Image
                src={images.header_arrow}
                className={"w-[12px] h-[12px] color-[#FFFFFF]"}
                alt="down"
              ></Image>
            </div>
          </Link>

          {/* Pages navigation */}
          <div className="flex items-center gap-x-2  hover:text-[#B98E75] ">
            <h1>Pages</h1>

            {/* pages options */}
            <Image
              src={images.header_arrow}
              className={"w-[12px] h-[12px] color-[#FFFFFF]"}
              alt="down"
            ></Image>
          </div>

          {/* News navigations */}
          <div className="flex items-center gap-x-2  hover:text-[#B98E75] ">
            <h1>News</h1>

            {/* news options */}
            <Image
              src={images.header_arrow}
              className={"w-[12px] h-[12px] color-[#FFFFFF]"}
              alt="down"
            ></Image>
          </div>

          {/* Contact navigatation */}
          <div className="hover:text-[#B98E75]">
            <Link href="/contact-us">Contact</Link>
          </div>
        </div>

        {/* Contact section */}
        <div className="hidden md:flex items-center gap-x-[12px] mr-[12px] md:mr-[70px]">
          <div className="w-[33px] h-[33px] xl:w-[48px] xl:h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center font-[Saira SemiCondensed]">
            <Image src={images.phone} alt="phone"></Image>
          </div>

          <div className="pr-3">
            <h1 className="text-[16px] xl:text-[22px] font-medium text-white ">
              Call Anytime
            </h1>
            <h1 className="text-[14px] xl:text-[16px] font-normal text-white">
              +0987654321
            </h1>
          </div>
        </div>

        {/* Phone loge */}
        {!open && (
          <div className="flex md:hidden items-center gap-x-[12px] mr-[12px] md:mr-[70px] ml-auto">
            <div className="w-[33px] h-[33px] xl:w-[48px] xl:h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center font-[Saira SemiCondensed]">
              <Image src={images.phone} alt="phone"></Image>
            </div>

            <div className="pr-3">
              <h1 className="text-[16px] xl:text-[22px] font-medium text-white ">
                Call Anytime
              </h1>
              <h1 className="text-[14px] xl:text-[16px] font-normal text-white">
                +0987654321
              </h1>
            </div>
          </div>
        )}

        {/* Hambarger */}
        <button onClick={() => setOpen(!open)}>
          <Image
            src={images.hambarger}
            alt="hambarger"
            className="block md:hidden"
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default GlobalHeader;
