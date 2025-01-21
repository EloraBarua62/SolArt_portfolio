import Image from "next/image";
import React from "react";
import { images } from "./demodata";

const Footer = () => {
  return (
    <footer className="w-full bg-[#343438] text-white">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-8 container_1300">
        {/* Newsletter */}
        <div className="w-[272px] xl:w-[358px]">
          <h1 className="text-5xl font-bold">Newsletter</h1>
          <p className="py-7">
            Lorem ipsum dolor sit amet consectetur. Diam nisl nisl eget vitae
            iacliis. Ut elementum quam vel sagittis faucibus. Lorem ipsum dolor
            sit amet consectetur.
          </p>
          <div className="flex justify-start w-full h-[46px] xl:h-[65px]">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-[#D5D2DA] outline-none"
            />
            <button className="bg-[#B98E75] px-5 xl:px-10 py-auto text-base font-normal">
              Enter
            </button>
          </div>
        </div>

        {/* Service and Project */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 order-3 xl:order-2 pt-5">
          {/* Our service */}
          <ul>
            <h1 className="text-[22px] font-bold pb-3">OUR SERVICES</h1>
            <li className="flex gap-3 justify-start items-center py-2 cursor-pointer">
              <Image src={images.right_arrow} alt="right_arrow"></Image>
              <h1 className="text-xl font-small">Architecture</h1>
            </li>
            <li className="flex gap-3 justify-start items-center py-2 cursor-pointer">
              <Image src={images.right_arrow} alt="right_arrow"></Image>
              <h1 className="text-xl font-small">Interior Design</h1>
            </li>
            <li className="flex gap-3 justify-start items-center py-2 cursor-pointer">
              <Image src={images.right_arrow} alt="right_arrow"></Image>
              <h1 className="text-xl font-small">Home Decor</h1>
            </li>
            <li className="flex gap-3 justify-start items-center py-2 cursor-pointer">
              <Image src={images.right_arrow} alt="right_arrow"></Image>
              <h1 className="text-xl font-small">Urban Design</h1>
            </li>
            <li className="flex gap-3 justify-start items-center py-2 cursor-pointer">
              <Image src={images.right_arrow} alt="right_arrow"></Image>
              <h1 className="text-xl font-small">Design System</h1>
            </li>
          </ul>

          {/* Our Projects */}
          <ul>
            <h1 className="text-[22px] font-bold pb-3">OUR PROJECT</h1>
            <li>
              <h1 className="text-[16px]">Architecture</h1>
              <div className="flex gap-2">
                <Image
                  src={images.archi1}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.archi2}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.archi3}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
              </div>
            </li>
            <li>
              <h1 className="text-[16px]">Interior</h1>
              <div className="flex gap-2">
                <Image
                  src={images.inter1}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.inter2}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.inter1}
                  alt="archi"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
              </div>
            </li>
            <li>
              <h1 className="text-[16px]">Decoration</h1>
              <div className="flex gap-2">
                <Image
                  src={images.decor1}
                  alt="decor"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.decor2}
                  alt="decor"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
                <Image
                  src={images.decor3}
                  alt="decor"
                  className="w-14 h-14 cursor-pointer"
                ></Image>
              </div>
            </li>
          </ul>
        </div>

        {/* Name and Details */}
        <div className="order-2 xl:order-3">
          {/* Icon and Name */}
          <div className="flex justify-start gap-2 cursor-pointer">
            <Image src={images.appIcon} alt="Solu Icon"></Image>
            <h1 className="text-5xl font-bold">SolArt</h1>
          </div>
          <p className="hidden xl:block text-[16px] font-normal pt-7 pb-5">
            Lorem ipsum dolor sit amet consectetur. Diam nisl nisl eget vitae
            iaculis. Ut elementum quam vel sagittis faucibus. Lorem ipsum dolor
            sit amet consectetur. Diam nisl nisl eget vitae iaculis. Ut
            elementum quam vel sagittis faucibus.
          </p>
          <h1 className="block xl:hidden text-[#B98E75] text-base">
            Our Address
          </h1>
          <h1 className="block xl:hidden text-base">
            24 King St, Charleston, SC 29401 USA
          </h1>
          <div className="flex justify-start gap-2 py-3">
            <Image
              className="bg-[#B98E75] cursor-pointer w-14 h-14 p-3"
              src={images.facebook}
              alt="icon"
            ></Image>
            <Image
              className="bg-[#B98E75] cursor-pointer w-14 h-14 p-3"
              src={images.instagram}
              alt="icon"
            ></Image>
            <Image
              className="bg-[#B98E75] w-14 h-14 p-3"
              src={images.linkedin}
              alt="icon"
            ></Image>
            <Image
              className="bg-[#B98E75] cursor-pointer w-14 h-14 p-3"
              src={images.twitter}
              alt="icon"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center pt-5">
        <div className="w-1/2 h-[2px] bg-white"></div>
        <div
          onClick={function () {
            window.scrollTo(0, 0);
          }}
          className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#B98E75] flex justify-center items-center"
        >
          <Image
            className="cursor-pointer"
            src={images.down}
            alt="down"
          ></Image>
        </div>
        <div className="w-1/2 h-[2px] bg-white"></div>
      </div>
      <h2 className="text-sm font-normal md:text-base text-white text-center py-[35px]">
        Copyright by Solutya Private Limited © 2022. All rights reserved
      </h2>
    </footer>
  );
};

export default Footer;
