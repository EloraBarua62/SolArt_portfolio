import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./demodata";

const VideoFeedback = () => {
  const slider = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-full">
      {/* Project header */}
      <div className="relative pb-10 overflow-hidden container_1300">
        <Image
          className="absolute top-[-45px] left-[-100px] xs:top-[-65px] xs:left-[-140px] ss:top-[-80px] ss:left-[-180px] sm:left-[-240px] sm:top-[-100px] md:left-[-100px]"
          src={images.leftarrow}
          alt="left arrow"
        ></Image>
        <Image
          className="absolute top-12 md:top-28 right-[-280px] ss:right-[-320px] md:right-[-360px] lg:right-[-150px] xl:right-0"
          src={images.rightarrow}
          alt="left arrow"
        ></Image>
          <div className="flex justify-start items-center gap-[20px] mt-[90px] sm:mt-[100px] md:mt-[142px]">
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
            <h2 className="text-base font-normal sm:text-[20px] sm:font-semibold md:text-[28px] sm:leading-[44.07px] text-[#252531]">
              Video & Feedback
            </h2>
          </div>

          <h2 className="text-[22px] font-medium leading-[35px] md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
            Let's See The Video &
            <br />
            What Client Say About Our Project
          </h2>
        
      </div>

      {/* Video and Feedback slider */}
      <div className="h-full relative mt-[45px]">
        <div className="w-full h-[480px] absolute z-30 bg-[#00000048]">
          <div className="relative top-10 left-10 md:top-40 md:left-40 scale-75 hover:scale-90 ease-out duration-500 bg-transparent w-28 h-28 md:w-40 md:h-40 rounded-full border-[2px] border-white flex justify-center items-center">
            <div className="bg-transparent w-24 h-24 md:w-32 md:h-32 rounded-full border-[2px] border-white flex justify-center items-center">
              <a
                className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-full hover:transition-none flex justify-center items-center"
                href={"https://solutya.com/"}
              >
                <Image src={images.play} alt="play"></Image>
              </a>
            </div>
          </div>
          <h1 className="relative inline-block top-10 left-5 md:top-40 md:left-36 text-base xl:text-2xl font-normal xl:font-medium text-white">
            VIEW PROMO VIDEO
          </h1>
        </div>
        <div className="video-slider w-[243px] md:w-[360px] xl:w-[440px] h-[300px] md:h-[370px] xl:h-[445px] bg-white absolute z-40 -bottom-16 md:-bottom-20 right-7 md:right-12 shadow-2xl shadow-[#00000059]">
          <h1 className="my-2 text-center text-base xl:text-2xl font-medium py-1 lg:py-5">
            WHAT CLIENT'S SAY?
          </h1>
          <div className="w-full h-[2px] bg-[#B98E75]"></div>

          <Slider {...slider} className="">
            <div className=" flex-col items-center">
              <h1 className="text-xs xl:text-lg font-normal text-center pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                doloribus corporis
              </h1>
              <Image
                src={images.client}
                alt="client"
                className="mx-auto rounded-full w-[65px] h-[65px] xl:w-[72px] xl:h-[72px] mt-5 sm:mt-10 sm:mb-2"
              />
              <h1 className="text-base xl:text-2xl font-medium text-center">
                Johan Smith
              </h1>
              <h1 className="text-sm xl:text-xl font-medium text-center">
                Manager Of Alco. LTD
              </h1>
            </div>
            <div className=" flex-col items-center">
              <h1 className="text-xs xl:text-lg font-normal text-center pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                doloribus corporis
              </h1>
              <Image
                src={images.client}
                alt="client"
                className="mx-auto rounded-full w-[65px] h-[65px] xl:w-[72px] xl:h-[72px] mt-5 sm:mt-10 sm:mb-2"
              />
              <h1 className="text-base xl:text-2xl font-medium text-center">
                Johan Smith
              </h1>
              <h1 className="text-sm xl:text-xl font-medium text-center">
                Manager Of Alco. LTD
              </h1>
            </div>
            {/* <div className="flex-col items-center">
              <h1 className="text-xs xl:text-lg font-normal text-center pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                doloribus corporis
              </h1>
              <Image
                src={images.client}
                alt="client"
                className="mx-auto rounded-full w-[65px] h-[65px] xl:w-[72px] xl:h-[72px]  mt-10 mb-2"
              />
              <h1 className="text-base xl:text-2xl font-medium text-center">
                Johan Smith
              </h1>
              <h1 className="text-sm xl:text-xl font-medium text-center">
                Manager Of Alco. LTD
              </h1>
            </div> */}
            {/* <div className='flex-col items-center'>
                            <h1 className='text-lg font-normal text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt doloribus corporis</h1>
                            <Image src={images.client} alt='client' className='rounded-full mx-auto' />
                            <h1 className='text-2xl font-medium text-center'>Johan Smith</h1>
                            <h1 className='text-xl font-medium text-center'>Manager Of Alco. LTD</h1>
                        </div> */}
          </Slider>
        </div>
        <Image
          src={images.sliderImg}
          alt="slider"
          className="w-full min-h-[480px] object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default VideoFeedback;
