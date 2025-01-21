import Image from "next/image";
import React from "react";
import "./Achievement.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./demodata";

const Achievement = () => {
  const SampleArrow = () => {
    return <div style={{ display: "none" }} />;
  };

  const slider = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  return (
    <div className="py-10">
        {/* Achievement header section */}
        <div className="container_1300 relative flex-col xl:flex-row">
          <Image
            src={images.arrow}
            alt="arrow"
            className="mx-auto w-4/5 xl:w-1/2"
          ></Image>
          <div className="absolute top-36 md:top-40 xl:top-36  float-left">
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
              <h1 className="text-base font-normal sm:text-[20px] sm:font-semibold md:text-[28px] sm:leading-[44.07px] text-[#252531]">
                What We Done
              </h1>
            </div>
            <h1 className="text-[22px] font-medium leading-[34px] md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2 text-[#252531]">
              Lets Have a Look What
              <br />
              We Have Done An Amazing Work!
            </h1>
          </div>
        </div>

        {/* Achievement slide */}

        <div className="achievement-slider w-full h-full mx-auto mt-32 relative">
          <div className="absolute top-0 md:top-100 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-[#ffffff0e] z-10 text-white">
            <div className="absolute float-left mx-2 sm:mx-[26px] md:mx-14 top-5 ss:top-20 md:top-40">
              <div className="flex items-center pb-3">
                <div>
                  <Image
                    src={images.bar}
                    alt="bar"
                    className="w-[20px] h-[4px] sm:w-[40px] sm:h-[5px]"
                  ></Image>
                  <Image
                    src={images.bar}
                    alt="bar"
                    className="w-[20px] h-[4px] sm:w-[40px] sm:h-[5px] ml-[22px]"
                  ></Image>
                </div>
                <h1 className="text-[16px] lg:text-[28px] font-normal lg:font-semibold ml-[20px]">
                  Discover
                </h1>
              </div>
              <h1 className="text-[22px] leading-3 sm:leading-[34px] lg:leading-[94px] font-medium lg:text-6xl lg:font-bold text-white">
                ONE STONE HOUSE
              </h1>
              <div className="flex pt-3">
                <Image
                  src={images.map}
                  alt="map"
                  className="w-[12px] h-[14px] lg:w-[25px] lg:h-[30px]"
                ></Image>
                <h1 className="pl-2 text-sm font-normal lg:text-2xl lg:font-semibold">
                  Dhaka, Bangladesh
                </h1>
              </div>
            </div>
          </div>
          <Slider {...slider} className="h-full">
            <div>
              <Image
                src={images.achiv_slider1}
                alt="slider"
                className="w-full"
              />
            </div>
            <div>
              <Image
                src={images.achiv_slider2}
                alt="slider"
                className="w-full"
              />
            </div>
            <div>
              <Image
                src={images.achiv_slider3}
                alt="slider"
                className="w-full"
              />
            </div>
          </Slider>
        </div>      
    </div>
  );
};

export default Achievement;
