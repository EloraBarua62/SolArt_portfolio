import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./demodata";

const ExpertsTeam = () => {
  const SampleArrow = () => {
    return <div style={{ display: "none" }} />;
  };

  const slider = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  return (
    <div className="w-full ">
      <div className="container_1300 relative expertTeam-slider">
        {/* Upper arrow */}
        <div className="absolute w-full top-[-40px] sm:top-[-80px] xl:left-[-100px] left-[-150px]">
          <Image src={images.arrow} alt="arrow" className=""></Image>
        </div>
        {/* Expert team header */}
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
          <h1 className="text-base font-normal sm:font-semibold sm:text-[28px] sm:leading-[44.07px] text-[#252531]">
            Meet Our Team
          </h1>
        </div>
        <h1 className="text-[22px] font-medium leading-[34px] sm:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold md:leading-[80px] pt-2 pb-[19px] md:pb-[45px] text-[#252531]">
          Lets See Our Expert
          <br />
          Engineer & Designer
        </h1>

        {/* All experts */}

        <Slider {...slider} className="">
          <div className="">
            <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-x-[12px] gap-y-[18px] md:gap-x-[18px]">
              {/* slide1 */}
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                      </a>
                      <a href="">
                        <Image
                          src={images.icon3}
                          alt="expert"
                          className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                        ></Image>
                      </a>
                   
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert1}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033] transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert2}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert3}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert4}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
            </div>
          </div>

          {/* slide 2 */}
          <div>
            <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-x-[12px] gap-y-[18px] md:gap-x-[18px]">
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert1}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033] transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert2}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert3}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert4}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
            </div>
          </div>

          {/* slide3 */}
          <div>
            <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-x-[12px] gap-y-[18px] md:gap-x-[18px]">
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert1}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033] transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert2}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Johan Smith
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Architecture</h1>
                  </div>
                </div>

                <Image
                  src={images.expert3}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
              <div className="relative">
                <div className="w-full h-full absolute z-30 top-0 left-0 opacity-0 hover:opacity-100 bg-[#00000033]  transition delay-200">
                  <div className="flex gap-1 sm:gap-3 pt-1 pl-1 sm:pt-3 sm:pl-3">
                    <a href="">
                      <Image
                        src={images.icon1}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon2}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                    <a href="">
                      <Image
                        src={images.icon3}
                        alt="expert"
                        className="w-6 h-6 sm:w-10 sm:h-10 p-1 bg-white"
                      ></Image>
                    </a>
                  </div>
                  <div className="w-full bg-[#9a341233] absolute bottom-0 left-0 font-normal text-center text-white py-3">
                    <h1 className="text-sm font-normal sm:text-3xl">
                      Smith Carlo Joe
                    </h1>
                    <h1 className="text-xs sm:text-2xl">Interior Designer</h1>
                  </div>
                </div>

                <Image
                  src={images.expert4}
                  alt="expert"
                  className="w-full"
                ></Image>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Expert team header */}
      {/* <div className=" relative w-full pb-20">
        <div className="absolute float-left pl-5 sm:px-20 top-[120px] sm:top-[220px] sm:top-60">
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
            <h1 className="text-base font-normal sm:text-[20px] sm:font-semibold sm:text-[28px] sm:leading-[44.07px] text-[#252531]">
              Meet Our Team
            </h1>
          </div>
          <h1 className="text-[22px] font-medium leading-[34px] sm:leading-[75px] sm:text-4xl sm:font-semibold  sm:text-5xl sm:font-bold pt-2 text-[#252531]">
            Lets See Our Expert
            <br />
            Engineer & Designer
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default ExpertsTeam;
