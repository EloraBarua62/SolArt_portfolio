import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "react-map-gl";
import GlobalHeader from "../components/GlobalHeader";
import { images } from "../components/demodata";

const projects = () => {
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
    <>
      <GlobalHeader></GlobalHeader>
      <div className="container_1300">
        <div className="flex items-center px-6 mt-[50px]">
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
            Project
          </h1>
        </div>
        <h1 className="px-6 pb-[50px] text-[22px] md:text-[48px] font-medium md:font-bold leading-[34px] md:leading-[75px] text-[#252531] mt-6">
          Bungalow Dark House
        </h1>

        {/* slider */}
        <div className="project-slider w-full h-full">
          <Slider {...slider}>
            <div>
              <div className=" pb-1 md:pb-5">
                <Image src={images.pro1} className="w-full" alt="slide" />
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-5">
                <Image src={images.pro2} className="w-full" alt="slide" />
                <Image src={images.pro3} className="w-full" alt="slide" />
                <Image src={images.pro4} className="w-full" alt="slide" />
              </div>
            </div>
            <div>
              <div className=" pb-1 md:pb-5">
                <Image src={images.pro1} className="w-full" alt="slide" />
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-5">
                <Image src={images.pro2} className="w-full" alt="slide" />
                <Image src={images.pro3} className="w-full" alt="slide" />
                <Image src={images.pro4} className="w-full" alt="slide" />
              </div>
            </div>
            <div>
              <div className="pb-1 md:pb-5">
                <Image src={images.pro1} className="w-full" alt="slide" />
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-5">
                <Image src={images.pro2} className="w-full" alt="slide" />
                <Image src={images.pro3} className="w-full" alt="slide" />
                <Image src={images.pro4} className="w-full" alt="slide" />
              </div>
            </div>
          </Slider>
        </div>

        {/* About us and map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[120px]">
          <div className="container_1300">
            <h1 className="text-[28px] font-semibold pb-2">About Project</h1>
            <p className="text-[16px] ">
              Lorem ipsum dolor sit amet consectetur. Odio viverra facilisis
              facilisi phasellus nibh phasellus cursus dolor. A nulla turpis
              congue cras congue luctus lobortis facilisi. Eget sodales diam
              fames ut netus libero aenean pellentesque. Lorem ipsum dolor sit
              amet consectetur. Odio viverra facilisis facilisi phasellus nibh
              phasellus cursus dolor. A nulla turpis congue cras congue luctus
              lobortis facilisi. Eget sodales diam fames ut netus libero aenean
              pellentesque.
            </p>
            <div className="grid grid-cols-1 ss:grid-cols-2 mt-[26px]">
              <div>
                {/* Points */}
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Business applications through the Project
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Procedures whereas processes Is finally Set-up
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Revolutionary catalysts for changes when needed
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Business applications through the Project
                  </h1>
                </div>
              </div>
              <div>
                {/* Points */}
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Business applications through the Project
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Procedures whereas processes Is finally Set-up
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Revolutionary catalysts for changes when needed
                  </h1>
                </div>
                <div className="flex gap-4 mb-[18px]">
                  <Image
                    src={images.icon}
                    alt="icon"
                    className="md:w-[20px] md:h-[20px]"
                  ></Image>
                  <h1 className="text-base font-normal">
                    Business applications through the Project
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container_1300">
            <h1 className="text-2xl font-semibold pb-2">Map</h1>
            <Map
              // {...viewport}

              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken="pk.eyJ1IjoiYW5vbmRvIiwiYSI6ImNreXZrZWpuMjAxNWszMXBxcXJvNzNhMHEifQ.1lUh7mHwLCwbPo_9sMKSWg"
              // onViewportChange={viewport => setViewport(viewport)}
              initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5,
              }}
              style={{ height: 300 }}
            >
              {/* <Marker longitude='-100' latitude='40' >
                            <Image src={images.pin} alt='pin'/>
                        </Marker> */}
            </Map>
          </div>
        </div>

        {/* Projects sketch and design */}

        <h1 className="pt-4 md:pt-20 text-[28px] font-semibold">
          Project Sketch & Design System
        </h1>
        <p className="text-[16px] w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur. Ipsum volutpat cursus eget
          morbi amet dui non mauris. Arcu viverra ultrices ultrices eleifend
          sociis euismod diam.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10 pb-20">
          <Image src={images.sketch1} alt="sketch"></Image>
          <Image src={images.sketch2} alt="sketch"></Image>
          <Image src={images.sketch3} alt="sketch"></Image>
          <Image src={images.sketch4} alt="sketch"></Image>
          <Image src={images.sketch5} alt="sketch"></Image>
          <Image src={images.sketch6} alt="sketch"></Image>
        </div>
      </div>
    </>
  );
};
export default projects;
