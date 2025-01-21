import Image from "next/image";
import React from "react";
import GlobalHeader from "../components/GlobalHeader";
import Contact from "../components/Contact";
import { images } from "../components/demodata";


const Architecture = () => {

  return (
    <>
      <GlobalHeader></GlobalHeader>
      <div className="container_1300 flex-col justify-center">
        {/* header */}
        <div className="flex items-center md:px-14 mt-[50px]">
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
          <h1 className="text-[16px] md:text-[28px] font-normal md:font-semibold ml-[20px]">
            Service
          </h1>
        </div>
        <h1 className="mb-[50px] md:px-14  text-[22px] md:text-[48px] font-medium md:font-bold leading-[34px] md:leading-[75px] text-[#252531] mt-6">
          Architecture
        </h1>

        <div className="flex flex-col xl:flex-row justify-between items-start md:py-20 md:px-14">
          <div className="w-full xl:w-4/6">
            <h1 className="text-4xl font-semibold pb-6">What We Do</h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet consectetur. Facilisis sed nec id amet
              amet. Tempus platea dolor eleifend dolor enim quis tempus libero
              quam. Id fames tortor sagittis orci a aliquam in sapien. Lorem
              ipsum dolor sit amet consectetur. Facilisis sed nec id amet amet.
              Tempus platea dolor eleifend dolor enim quis tempus libero quam.
              Id fames tortor sagittis orci a aliquam in sapien. Lorem ipsum
              dolor sit amet consectetur. Facilisis sed nec id amet amet. Tempus
              platea dolor eleifend dolor enim quis tempus libero quam. Id fames
              tortor sagittis orci a aliquam in sapien.
            </p>

            {/* Projects */}
            <div className="relative mt-10 md:mt-20">
              <div className="w-full">
                <Image
                  src={images.dashline}
                  alt="dashline"
                  className="w-full absolute top-[100px] left-0"
                ></Image>
                <Image
                  src={images.dashline}
                  alt="dashline"
                  className="w-full absolute top-[450px] left-0"
                ></Image>
              </div>

              <div className="z-40 top-0 left-0 bg-transparent grid grid-cols-2 ">
                {/* archi_card 1 */}
                <div>
                  <Image
                    src={images.archi_card1}
                    alt="icon"
                    className="w-[40px] h-[40px] md:w-[69px] md:h-[95px]"
                  ></Image>
                  <div className="mx-auto w-28 h-28 md:w-36 md:h-36 bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                    <Image
                      src={images.work_step1}
                      alt="dashline"
                      className="w-[50px] h-[50px] md:w-[82px] md:h-[82px]"
                    ></Image>
                  </div>

                  <h1 className="text-center text-2xl font-semibold text-[#B98E75] mt-5 mb-4">
                    Start Working
                  </h1>

                  <p className="text-center text-base font-normal  px-2">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod
                    eget laoreet volutpat egestas posuere urna phasellus.
                  </p>
                </div>

                {/* archi_card 2 */}
                <div>
                  <Image
                    src={images.archi_card2}
                    alt="icon"
                    className="w-[40px] h-[40px] md:w-[69px] md:h-[95px]"
                  ></Image>
                  <div className="mx-auto w-28 h-28 md:w-36 md:h-36 bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                    <Image
                      src={images.work_step2}
                      alt="dashline"
                      className="w-[50px] h-[50px] md:w-[82px] md:h-[82px]"
                    ></Image>
                  </div>

                  <h1 className="text-center text-2xl font-semibold text-[#B98E75] mt-5 mb-4">
                    Start Working
                  </h1>

                  <p className="text-center text-base font-normal  px-2">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod
                    eget laoreet volutpat egestas posuere urna phasellus.
                  </p>
                </div>

                {/* archi_card 3 */}
                <div>
                  <Image
                    src={images.archi_card3}
                    alt="icon"
                    className="w-[40px] h-[40px] md:w-[69px] md:h-[95px]"
                  ></Image>
                  <div className="mx-auto w-28 h-28 md:w-36 md:h-36 bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                    <Image
                      src={images.work_step3}
                      alt="dashline"
                      className="w-[50px] h-[50px] md:w-[82px] md:h-[82px]"
                    ></Image>
                  </div>

                  <h1 className="text-center text-2xl font-semibold text-[#B98E75] mt-5 mb-4">
                    Start Working
                  </h1>

                  <p className="text-center text-base font-normal  px-2">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod
                    eget laoreet volutpat egestas posuere urna phasellus.
                  </p>
                </div>

                {/* archi_card 4 */}
                <div>
                  <Image
                    src={images.archi_card4}
                    alt="icon"
                    className="w-[40px] h-[40px] md:w-[69px] md:h-[95px]"
                  ></Image>
                  <div className="mx-auto w-28 h-28 md:w-36 md:h-36 bg-[#B98E75] flex justify-center items-center border-0 rounded-full">
                    <Image
                      src={images.work_step4}
                      alt="dashline"
                      className="w-[50px] h-[50px] md:w-[82px] md:h-[82px]"
                    ></Image>
                  </div>

                  <h1 className="text-center text-2xl font-semibold text-[#B98E75] mt-5 mb-4">
                    Start Working
                  </h1>

                  <p className="text-center text-base font-normal  px-2">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod
                    eget laoreet volutpat egestas posuere urna phasellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="w-full xl:w-1/3 h-full md:ml-5 md:mr-2 mt-20">
            <div className="w-full h-full bg-[#343438] px-5 py-5">
              <h1 className="text-4xl font-semibold text-[#B98E75] pb-10">
                Contact Form
              </h1>

              <form className="h-full">
                <label
                  htmlFor="name"
                  className="py-5 text-xl font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  className="w-full h-[75px] bg-[#b98e7583]"
                />
                <div className="flex justify-between gap-x-3 py-5">
                  <div>
                    <label
                      htmlFor="email"
                      className=" text-xl font-medium text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="w-full h-[75px]  px-5 bg-[#b98e7583]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className=" text-xl font-medium text-white"
                    >
                      Your Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      id=""
                      className="w-full h-[75px]  px-5 bg-[#b98e7583]"
                    />
                  </div>
                </div>
                <label
                  htmlFor="subject"
                  className="py-5 text-xl font-medium text-white"
                >
                  Subject
                </label>
                <select
                  name="subject"
                  id=""
                  className="w-full h-[75px] mb-5 bg-[#b98e7583] text-white"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <label
                  htmlFor="message"
                  className="py-5 text-xl font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="30"
                  className="w-full h-[177px] bg-[#b98e7583] mb-10"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="w-36 h-[70px] py-5 bg-[#B98E75] rounded-md text-xl font-normal text-white"
                />
              </form>
            </div>
            {/* Right section */}
            <div className="md:mt-20 ml-auto w-4/5">
              <div className="flex justify-center">
                <Image
                  src={images.circles}
                  alt="bar"
                  className="w-[52px] h-[2px] lg:w-[40px] lg:h-[40px]"
                ></Image>
              </div>

              <Image
                src={images.rightArrow}
                alt="right_arrow"
                className="float-right md:mt-20"
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex items-center px-14">
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
          <h1 className="text-[16px] md:text-[28px] font-normal md:font-semibold ml-[20px]">
            Structure
          </h1>
        </div>
        <h1 className="text-[22px] md:text-[48px] font-medium md:font-bold leading-[34px] md:leading-[75px] text-[#252531] mt-6 px-14">
          Follow the structure
        </h1>

        <div className="container_1300 md:pt-10 pb-10">
          <div className="grid grid-rows-2 gap-y-2 md:gap-y-20">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2  md:gap-x-10">
              <Image
                src={images.structure_archi1}
                alt="grid"
                className="mx-auto"
              ></Image>
              <Image
                src={images.structure_archi2}
                alt="grid"
                className="mx-auto"
              ></Image>
            </div>
            <div className="grid grid-cols-3 gap-x-2 md:gap-x-5">
              <Image
                src={images.structure_archi3}
                alt="grid"
                className="mx-auto"
              ></Image>
              <Image
                src={images.structure_archi4}
                alt="grid"
                className="mx-auto"
              ></Image>
              <Image
                src={images.structure_archi5}
                alt="grid"
                className="mx-auto"
              ></Image>
            </div>
          </div>
        </div>

        <Contact></Contact>
      </div>
    </>
  );
};

export default Architecture;
