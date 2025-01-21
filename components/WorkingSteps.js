import React from "react";
import Image from "next/image";
import { images } from "./demodata";

const WorkingSteps = () => {
  return (
    <div className="w-full h-[1080px] xs:h-[1000px] ss:h-[900px] sm:h-[980px] md:h-[1060px] lg:h-[1000px] bg-[#343438] py-10 md:py-20 ">
      <div className="flex justify-between">
        <div className="relative w-1/2 md:w-1/2">
          <Image src={images.up_arrow} alt=""></Image>
          <Image
            src={images.round}
            alt=""
            className="absolute top-20 left-16 md:top-48 md:left-32 w-3 h-3 md:w-8 md:h-8"
          ></Image>
        </div>
        <div className="w-1/2 md:w-2/5 pl-2 sm:pl-4 pr-1 text-white">
          <div className="flex justify-start items-center gap-[20px]">
            <div>
              <Image
                src={images.bar}
                alt="bar"
                className="w-[38px] h-[4px] sm:w-[88px] sm:h-[5px]"
              ></Image>
              <Image
                src={images.bar}
                alt="bar"
                className="w-[38px] h-[4px] sm:w-[88px] sm:h-[5px] ml-[22px]"
              ></Image>
            </div>
            <h1 className="text-base font-normal sm:text-[20px] sm:font-semibold md:text-[28px] sm:leading-[44.07px] ">
              How We Works
            </h1>
          </div>
          <h1 className="text-[22px] font-medium leading-[34px] md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
            Our Easy Working Steps To Do Start A Project
          </h1>
        </div>
      </div>

      {/* Projects */}
      <div className="container_1300  relative mt-10 ">
        <div className="w-full  px-5">
          <Image
            src={images.dashline}
            alt="dashline"
            className="w-full pt-10"
          ></Image>
          <Image
            src={images.dashline}
            alt="dashline"
            className="w-full px-3 block md:hidden absolute top-[360px] xs:top-[270px]  left-0"
          ></Image>
        </div>

        <div className="w-full h-full top-0 left-0 absolute z-40">
          <div className="w-full container mx-auto bg-transparent grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10 md:gap-10 p-2">
            {/* working_card 1 */}
            <div className="container mx-auto">
              <Image
                src={images.working_card1}
                alt="icon"
                className="w-[20px] h-[20px] ss:w-[40px] ss:h-[40px] md:w-[69px] md:h-[95px]"
              ></Image>
              <div className="mx-auto w-[72px] h-[72px] md:w-36 md:h-36 bg-white hover:bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                <Image
                  src={images.work_step1}
                  alt="dashline"
                  className="w-[41px] h-[41px] md:w-[82px] md:h-[82px]"
                ></Image>
              </div>

              <h1 className="text-center text-2xl font-semibold text-[#B98E75] mt-5 mb-4">
                Start Working
              </h1>

              <p className="text-center text-base font-normal text-white  px-2">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
                laoreet volutpat egestas posuere urna phasellus.
              </p>
            </div>

            {/* working_card 2 */}
            <div className="container mx-auto">
              <Image
                src={images.working_card2}
                alt="icon"
                className="w-[20px] h-[20px] ss:w-[40px] ss:h-[40px] md:w-[69px] md:h-[95px]"
              ></Image>
              <div className="mx-auto  w-[72px] h-[72px] md:w-36 md:h-36 bg-white hover:bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                <Image
                  src={images.work_step2}
                  alt="dashline"
                  className="w-[41px] h-[41px] md:w-[82px] md:h-[82px]"
                ></Image>
              </div>

              <h1 className="text-center text-2xl font-semibold text-[#B98E75]  mt-5 mb-4">
                Planning Design
              </h1>

              <p className="text-center text-base font-normal text-white  px-2">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
                laoreet volutpat egestas posuere urna phasellus.
              </p>
            </div>

            {/* working_card 3 */}
            <div className="container mx-auto">
              <Image
                src={images.working_card3}
                alt="icon"
                className="w-[20px] h-[20px] ss:w-[40px] ss:h-[40px] md:w-[69px] md:h-[95px]"
              ></Image>
              <div className="mx-auto  w-[72px] h-[72px] md:w-36 md:h-36 bg-white hover:bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                <Image
                  src={images.work_step3}
                  alt="dashline"
                  className="w-[41px] h-[41px] md:w-[82px] md:h-[82px]"
                ></Image>
              </div>

              <h1 className="text-center text-2xl font-semibold text-[#B98E75]  mt-5 mb-4">
                Project Sketch
              </h1>

              <p className="text-center text-base font-normal text-white px-2">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
                laoreet volutpat egestas posuere urna phasellus.
              </p>
            </div>

            {/* working_card 4 */}
            <div className="container mx-auto">
              <Image
                src={images.working_card4}
                alt="icon"
                className="w-[20px] h-[20px] ss:w-[40px] ss:h-[40px] md:w-[69px] md:h-[95px]"
              ></Image>
              <div className="mx-auto  w-[72px] h-[72px] md:w-36 md:h-36 bg-white hover:bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                <Image
                  src={images.work_step4}
                  alt="dashline"
                  className="w-[41px] h-[41px] md:w-[82px] md:h-[82px]"
                ></Image>
              </div>

              <h1 className="text-center text-2xl font-semibold text-[#B98E75]  mt-5 mb-4">
                Start Working
              </h1>

              <p className="text-center text-base font-normal text-white px-2">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
                laoreet volutpat egestas posuere urna phasellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
