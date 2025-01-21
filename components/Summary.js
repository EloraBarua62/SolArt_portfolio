import Image from "next/image";
import React from "react";
import { images } from "./demodata";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Summary = () => {
  const [counterOn , setCounterOn] = useState(false);
  return (
    <div className="w-full mt-[160px] mb-[50px] xl:mt-[172px] xl:mb-[120px]">
      <div className="container-1300 bg-[#b98e75] relative">
        <div className="w-full xl:h-[394px] object-cover grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full h-full p-10 flex justify-between items-start">
            <Image src={images.up_triangle} alt="up_triangle"></Image>
            <Image
              src={images.service1}
              alt="down_triangle"
              className="opacity-20"
            ></Image>
            <Image src={images.down_triangle} alt="up_triangle"></Image>
          </div>
          <div className="w-full h-full p-10 flex justify-between items-end">
            <Image
              src={images.service2}
              alt="down_triangle"
              className="opacity-20"
            ></Image>
            <Image src={images.up_triangle} alt="up_triangle"></Image>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            width="1373"
            height="211"
            viewBox="0 0 1373 211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full px-[47px] opacity-30 absolute top-10"
          >
            <path
              opacity="0.3"
              d="M20 91.9933C83.6998 122.491 243.138 180.886 371.293 170.487C531.487 157.488 681.379 37.498 794.7 61.4959C908.02 85.4939 937.895 227.482 1073.36 206.984C1208.83 186.485 1232.53 43.4977 1351 16"
              stroke="#FFF"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <circle cx="12" cy="86" r="12" fill="#FFF" />
            <circle cx="1361" cy="12" r="12" fill="#FFF" />
          </svg>
          <div className="w-full h-full grid grid-cols-2 xl:grid-cols-4">
            <div className="w-full h-full flex justify-center items-center ">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h2 className="text-[38px] font-bold leading-[60px] xl:text-6xl xl:font-extrabold text-stroke xl:leading-[95px] text-center text-[#D5D2DA]">
                  {counterOn && (
                    <CountUp start={0} end={300} delay={0} duration={2} />
                  )}
                </h2>
                <h2 className="xl:text-3xl xl:font-bold xl:leading-[45px] text-white">
                  Projects Succeed
                </h2>
              </ScrollTrigger>
            </div>
            <div className="w-full h-full flex justify-center items-center ">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h2 className="text-[38px] font-bold leading-[60px] xl:text-6xl xl:font-extrabold text-stroke xl:leading-[95px] text-center text-[#D5D2DA]">
                  {counterOn && (
                    <CountUp start={0} end={500} delay={0} duration={2} />
                  )}
                </h2>
                <h2 className="xl:text-3xl xl:font-bold xl:leading-[45px] text-white">
                  Satisfied Clients
                </h2>
              </ScrollTrigger>
            </div>
            <div className="w-full h-full flex justify-center items-center ">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h2 className="text-[38px] font-bold leading-[60px] xl:text-6xl xl:font-extrabold text-stroke xl:leading-[95px] text-center text-[#D5D2DA]">
                  {counterOn && (
                    <CountUp start={0} end={60} delay={0} duration={2} />
                  )}
                </h2>
                <h2 className="xl:text-3xl xl:font-bold xl:leading-[45px] text-white">
                  Professional Engineers
                </h2>
              </ScrollTrigger>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h2 className="text-[38px] font-bold leading-[60px] xl:text-6xl xl:font-extrabold text-stroke xl:leading-[95px] text-center text-[#D5D2DA]">
                  {counterOn && (
                    <CountUp start={0} end={10} delay={0} duration={2} />
                  )}
                </h2>
                <h2 className="xl:text-3xl xl:font-bold xl:leading-[45px] text-white">
                  Year Of Experience
                </h2>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
