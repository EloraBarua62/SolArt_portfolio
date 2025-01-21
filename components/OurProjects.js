import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "./demodata";

// import styles from "./OurProjects.module.css"
const OurProjects = () => {
  return (
    <div className="w-full">
      {/* Project header */}
      <div className="relative pb-10 overflow-hidden">
        <Image
          className="absolute top-[-45px] left-[-100px] xs:top-[-65px] xs:left-[-140px] ss:top-[-80px] ss:left-[-180px] sm:left-[-240px] sm:top-[-100px] md:left-[-100px]"
          src={images.ourProject_leftArrow}
          alt="left arrow"
        ></Image>
        <Image
          className="absolute top-12 md:top-28 right-[-280px] ss:right-[-320px] md:right-[-360px] lg:right-[-150px] xl:right-0"
          src={images.ourProject_rightArrow}
          alt="left arrow"
        ></Image>
        <Image
          className="absolute top-7 left-36 xs:left-52 ss:left-60 md:top-64 md:left-[580px] w-8 md:w-12"
          src={images.circles}
          alt="left arrow"
        ></Image>
        <Image
          className="absolute top-36 right-10 sm:top-10 lg:right-64 xl:right-96 w-8 md:w-12"
          src={images.circles}
          alt="right arrow"
        ></Image>
        <div className="container_1300">
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
              Our Project
            </h2>
          </div>

          <h2 className="text-[22px] font-medium leading-[34px] md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
            Our Outstanding Latest
            <br />
            Projects & Work
          </h2>
        </div>
      </div>

      {/* All projects */}
      <div className="container_1600 w-full pb-20">
        <div className="w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-x-10 xl:gap-x-20 gap-y-20 mx-auto">
          {/* Project1 */}
          <div className="relative">
            <div className="project-parent w-[320px] md:w-[589px] h-full absolute top-0 left-0 z-30 bg-gradient-to-t from-[#03036bb4] hover:from-[#000044] to-[#ffffff00]">
              <h1 className="project-parent-text text-base md:text-2xl font-medium absolute bottom-2 md:bottom-3 left-16 md:left-40 text-white pb-4">
                Bungalow Dark House
              </h1>
              <div className="project-child w-full border-t-2 border-white absolute bottom-1 left-0">
                <h1 className="project-child-text text-base  font-medium text-white text-center pt-2">
                  More Details
                  <Link href="/architecture">
                    <Image
                      src={images.right}
                      alt="shift"
                      className=" ml-3 inline-block w-8 h-8"
                    ></Image>
                  </Link>
                </h1>
              </div>
            </div>
            <Image
              src={images.project1}
              alt="projects"
              className="max-w-xs md:max-w-2xl h-full"
            ></Image>

            <div className="absolute z-40 lg:top-[100px] top-[40px] left-[180px] xs:left-[230px] md:left-[400px] bg-[#252531] drop-shadow-2xl w-[152px] md:w-[250px] h-[135px] px-3 pt-5">
              <h1 className="text-[#B98E75] text-[22px] md:text-[28px] md:font-semibold">
                Architecture
              </h1>
              <h1 className="text-white text-[14px] md:text-[22px] md:font-medium">
                Bungalow Dark House
              </h1>
            </div>
          </div>

          {/* Project2 */}
          <div className="flex justify-end relative">
            <div className="project-parent w-[320px] md:w-[589px] h-full absolute top-0 right-0 z-30 bg-gradient-to-t from-[#03036bb4] hover:from-[#000044] to-[#ffffff00]">
              <h1 className="project-parent-text text-base md:text-2xl font-medium absolute bottom-2 md:bottom-3 left-16 md:left-40 text-white pb-4">
                Woodenist House Lumberjack
              </h1>
              <div className="project-child w-full border-t-2 border-white absolute bottom-1 left-0">
                <h1 className="project-child-text text-base  font-medium text-white text-center pt-2">
                  More Details
                  <a href="https://solutya.com/">
                    <Image
                      src={images.right}
                      alt="shift"
                      className=" ml-3 inline-block w-8 h-8"
                    ></Image>
                  </a>
                </h1>
              </div>
            </div>
            <Image
              src={images.project2}
              alt="projects"
              className="max-w-xs md:max-w-2xl h-full"
            ></Image>

            <div className="absolute z-40 top-[120px] md:top-[300px] right-[180px] xs:right-[230px] md:right-[400px] bg-[#252531] drop-shadow-2xl w-[152px] md:w-[250px] h-[130px] pl-3 pt-4">
              <h1 className="text-[#B98E75] text-[22px] md:text-[28px] md:font-semibold">
                Interior Design
              </h1>
              <h1 className="text-white text-[14px] md:text-[22px] md:font-medium">
                Woodenist House Lumberjack
              </h1>
            </div>
          </div>

          {/* Project3 */}
          <div className="relative">
            <div className="project-parent w-[320px] md:w-[589px] h-full absolute top-0 left-0 z-30 bg-gradient-to-t from-[#000050] hover:from-[#000020] to-[#ffffff00]">
              <h1 className="project-parent-text text-base md:text-2xl font-medium absolute bottom-2 md:bottom-3 left-16 md:left-40 text-white pb-4">
                Bungalow Dark House
              </h1>
              <div className="project-child w-full border-t-2 border-white absolute bottom-1 left-0">
                <h1 className="project-child-text text-base font-medium text-white text-center pt-2">
                  More Details
                  <Link href="/architecture">
                    <Image
                      src={images.right}
                      alt="shift"
                      className=" ml-3 inline-block w-8 h-8"
                    ></Image>
                  </Link>
                </h1>
              </div>
            </div>
            <Image
              src={images.project3}
              alt="projects"
              className="max-w-xs md:max-w-2xl h-full"
            ></Image>

            <div className="absolute z-40 lg:top-[100px] top-[40px] left-[180px] xs:left-[230px] md:left-[400px] bg-[#252531] drop-shadow-2xl w-[152px] md:w-[250px] h-[135px] px-3 pt-5">
              <h1 className="text-[#B98E75] text-[22px] md:text-[28px] md:font-semibold">
                Home Decor
              </h1>
              <h1 className="text-white text-[14px] md:text-[22px] md:font-medium">
                Bungalow Dark House
              </h1>
            </div>
          </div>

          {/* Project4 */}
          <div className="flex justify-end relative">
            <div className="project-parent w-[320px] md:w-[589px] h-full absolute top-0 right-0 z-30 bg-gradient-to-t from-[#03036bb4] hover:from-[#000044] to-[#ffffff00]">
              <h1 className="project-parent-text text-base md:text-2xl font-medium absolute bottom-2 md:bottom-3 left-16 md:left-40 text-white pb-4">
                Woodenist House Lumberjack
              </h1>
              <div className="project-child w-full border-t-2 border-white absolute bottom-1 left-0">
                <h1 className="project-child-text text-base font-medium text-white text-center pt-2">
                  More Details
                  <a href="https://solutya.com/">
                    <Image
                      src={images.right}
                      alt="shift"
                      className=" ml-3 inline-block w-8 h-8"
                    ></Image>
                  </a>
                </h1>
              </div>
            </div>
            <Image
              src={images.project4}
              alt="projects"
              className="max-w-xs md:max-w-2xl h-full"
            ></Image>

            <div className="absolute z-40 top-[120px] md:top-[300px] right-[180px] xs:right-[230px] md:right-[400px] bg-[#252531] drop-shadow-2xl w-[152px] md:w-[250px] h-[135px] px-3 pt-4">
              <h1 className="text-[#B98E75] text-[22px] md:text-[28px] md:font-semibold">
                Urban Design
              </h1>
              <h1 className="text-white text-[14px] md:text-[22px] md:font-medium">
                Woodenist House Lumberjack
              </h1>
            </div>
          </div>

          {/* <div>
                    <Image src={images.project3} alt='projects' className='md:w-[589px] md:h-[635px]'></Image>
                </div>
                <div className='flex justify-end'>
                    <Image src={images.project4} alt='projects' className='md:w-[589px] md:h-[635px]'></Image> */}
        </div>
        <div className="flex justify-center my-10">
          <button className="w-36 h-18 bg-[#B98E75] hover:bg-[#252531] transition delay-300 rounded-lg px-6 py-4 text-xl font-normal text-white ">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
