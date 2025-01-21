import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { images } from "./demodata";

const Banner = () => {
  const SampleArrow = () => {
    return <div style={{ display: "none" }} />;
  };

  const slider = {
    dots: false,
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
    <div
      className="w-full h-[500px] ss:h-[450px] md:h-[752px] relative overflow-hidden banner-slider"
    >
      {/* Banner content */}
      <div className="w-full h-full pl-[29px] xl:pl-[70px] absolute top-0 left-0 z-30 bg-gradient-to-r from-[#000000a4] to-[#ffffff00] pt-[62px] xl:pt-[78px]">
        <div className="container w-4/5 lg:w-1/2">
          <div className="flex items-center pt-16">
            <Image
              src={images.bar}
              alt="banner"
              className="w-[35px] h-[5px] xl:w-[110px] xl:h-4"
            />
            <h1 className="pl-2 text-[22px] xl:text-5xl font-bold text-white">
              #1
            </h1>
          </div>
          <div className="w-full py-5">
            <h1 className="text-[22px] leading-[35px] md:text-5xl md:leading-[55px] xl:leading-[70px] xl:text-6xl font-bold text-white">
              WORLD CLASS DESIGN FOR YOUR INTERIOR
              <br />
              SET-UP{" "}
            </h1>
            <p className="py-5 text-white text-[12px] md:text-base leading-[19px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Id elementum libero vitae
              libero imperdiet in leo quis turpis. Enim aliquet lorem id
              etiam.Lorem ipsum dolor sit amet consectetur. Id elementum libero
              vitae libero imperdiet in leo quis turpis. Enim aliquet lorem id
              etiam.
            </p>
            <button className="px-1 py-1 w-[165px] h-12 xl:w-[179px] xl:h-[61px] rounded-md bg-[#B98E75] hover:bg-[#252531] transition delay-300 ease-in text-white">
              OUR PORTFOLIO
            </button>
          </div>
        </div>
      </div>
      <Slider {...slider} className="border">
        <div className="">
          <Image
            src={images.slide1}
            alt="banner"
            className="w-full min-h-[751px] object-cover"
          />
        </div>
        <div>
          <Image
            src={images.slide2}
            alt="banner"
            className="w-full min-h-[751px]  object-cover"
          />
        </div>
        <div>
          <Image
            src={images.slide3}
            alt="banner"
            className="w-full min-h-[751px]  object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
