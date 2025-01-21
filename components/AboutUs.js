import Image from "next/image";
import React from "react";
import { images } from "./demodata";

const AboutUs = () => {
  return (
    <div className="w-full  px-5 bg-[#343438]">
      <div className="container_1600 grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Left section(video file) */}
        <div className="flex items-center order-3 md:order-2 pb-10">
          <Image
            src={images.house_video}
            alt="house_video"
            className="w-full h-[500px]"
          ></Image>
        </div>

        {/* Right section(about us description) */}
        <div className="text-white py-20 order-2 md:order-3">
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
              About Our Company
            </h1>
          </div>
          <h1 className="text-[22px] font-medium leading-[34px] md:leading-[75px]  sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
            Providing the best architecture
            <br />& interior design services{" "}
          </h1>

          <p className="text-md py-8">
            Lorem ipsum dolor sit amet consectetur. Morbi luctus sagittis cursus
            pellentesque commodo urna. Ut consectetur mi gravida interdum nunc.
          </p>

          {/* Points */}
          <div className="flex gap-4 mb-[18px]">
            <Image
              src={images.about_us_icon}
              alt="about_us_icon"
              className="md:w-[20px] md:h-[20px]"
            ></Image>
            <h1 className="text-base font-normal">
              Business applications through the Project
            </h1>
          </div>
          <div className="flex gap-4 mb-[18px]">
            <Image
              src={images.about_us_icon}
              alt="about_us_icon"
              className="md:w-[20px] md:h-[20px]"
            ></Image>
            <h1 className="text-base font-normal">
              Procedures whereas processes Is finally Set-up
            </h1>
          </div>
          <div className="flex gap-4 mb-[18px]">
            <Image
              src={images.about_us_icon}
              alt="about_us_icon"
              className="md:w-[20px] md:h-[20px]"
            ></Image>
            <h1 className="text-base font-normal">
              Revolutionary catalysts for changes when needed
            </h1>
          </div>
          <div className="flex gap-4 mb-[18px]">
            <Image
              src={images.about_us_icon}
              alt="about_us_icon"
              className="md:w-[20px] md:h-[20px]"
            ></Image>
            <h1 className="text-base font-normal">
              Business applications through the Project
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
