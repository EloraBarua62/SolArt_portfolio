import Image from "next/image";
import React, { useState, useRef } from "react";
import GlobalHeader from "../components/GlobalHeader";
import { Map } from "react-map-gl";
import emailjs from "@emailjs/browser";
import { images } from "../components/demodata";


const ContactUs = () => {
  // const [viewport, setViewport] = useState({
  //     longitude: 45.4211,
  //     latitude: -75.6903,
  //     zoom: 10,
  //     width: "100vw",
  //     height: "100vh"
  // })

  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(true);
    document.body.style.background = "#00000092";

    // const name = event.target.name.value;
    // const email = event.target.email.value;
    // const number = event.target.number.value;
    // const subject = event.target.subject.value;
    // const message = event.target.message.value;
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const setModal = () => {
    document.body.style.backgroundColor = "transparent";
    setOpenModal(false);
  };

  const form = useRef();

  return (
    <div className="py-28">
      <GlobalHeader></GlobalHeader>
      <div className="w-full h-full relative">
        {/* <Header /> */}
        {openModal && (
          <div className="w-full h-full bg-[#00000063] absolute top-0 left-0 z-20"></div>
        )}

        <div className="container_1300 relative overflow-hidden ">
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
              Get In Touch
            </h1>
          </div>
          <h1 className="text-[22px] font-medium leading-[34px]  md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
            Have Any Questions?
          </h1>
          <Image
            src={images.contact_us_arrow}
            alt="bar"
            className="hidden sm:block absolute right-[-230px] ss:right-[-300px] xs:top-[-30px] md:right-[-150px] xl:right-[-100px] top-[10px] "
          ></Image>
        </div>

        {/* contact section */}
        <div className="container_1300 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="h-full">
            <h1 className="text-2xl md:text-4xl font-semibold text-[#B98E75] pb-4 md:pb-10">
              Contact Form
            </h1>

            <form ref={form} onSubmit={handleSubmit} className=" h-full">
              <label
                htmlFor="name"
                className="py-5 text-sm md:text-xl font-normal md:font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="outline-none px-2 w-full h-[35px] md:h-[75px] bg-[#b98e7583] "
              />
              <div className="flex justify-between gap-x-3 py-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm md:text-xl font-normal md:font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="outline-none z-20 w-full h-[35px] md:h-[75px] py-5 px-2 bg-[#b98e7583]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className=" text-sm md:text-xl font-normal md:font-medium"
                  >
                    Your Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id=""
                    className="outline-none z-20 w-full h-[35px] md:h-[75px] py-5 px-2 bg-[#b98e7583]"
                  />
                </div>
              </div>
              <label
                htmlFor="subject"
                className="py-5 text-sm md:text-xl font-normal md:font-medium"
              >
                Subject
              </label>
              <select
                name="subject"
                id=""
                className="w-full h-[35px] md:h-[75px] outline-none px-2 mb-5 text-sm md:text-lg bg-[#b98e7583]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label
                htmlFor="message"
                className="py-5 text-sm md:text-xl font-normal md:font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols="10"
                rows="10"
                className="w-full h-[100px] md:h-[175px] bg-[#b98e7583] mb-5 md:mb-10 outline-none px-2 "
              ></textarea>
              <input
                data-modal-toggle="popup-modal"
                type="submit"
                value="Submit"
                className="cursor-pointer w-20 md:w-36 h-[35px] md:h-[75px] py-1 bg-[#B98E75] rounded-md text-lg md:text-xl font-normal text-white"
              />
            </form>

            {/* modal */}

            {openModal && (
              <div className="bg-[#B98E75] z-40 w-1/3 h-1/2 fixed top-[200px] left-[600px] modal-design-contactUsPage">
                <Image
                  src={images.x}
                  alt="message"
                  className="float-right cursor-pointer"
                  onClick={() => setModal()}
                ></Image>
                <div className="w-full py-20">
                  <Image
                    src={images.message}
                    alt="message"
                    className="mx-auto"
                  ></Image>
                  <h1 className="text-white text-center">Thank You!</h1>
                  <p className="text-white  text-center">
                    Your message has been send to us. We will notify you soon.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <Image
              src={images.contact_us_video}
              alt="video"
              className="pb-10"
            ></Image>
            <Image
              src={images.contact_us_arrow}
              alt="contact_us_arrow"
              className="float-right"
            ></Image>
          </div>
        </div>
      </div>

      {/* Info and Map */}
      <div className="container_1300 grid grid-cols-1 md:grid-cols-2 gap-10 my-40">
        <div className="container_1300">
          <h1 className="text-3xl font-semibold md:text-6xl md:font-bold pb-4 md:pb-10">
            Contact Us
          </h1>
          <Image src={images.contact} alt="contact" className="w-full"></Image>
        </div>

        <div className="container_1300">
          <h1 className="text-3xl font-semibold md:text-6xl md:font-bold pb-4 md:pb-10">
            Map
          </h1>
          <Map
            // {...viewport}

            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoiYW5vbmRvIiwiYSI6ImNreXZrZWpuMjAxNWszMXBxcXJvNzNhMHEifQ.1lUh7mHwLCwbPo_9sMKSWg"
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 3.5,
            }}
            style={{ height: 300 }}
          >
            
          </Map>
          <div className="w-full py-5 bg-[#B98E75]">
            <h1 className="text-center text-xl font-normal md:text-3xl md:font-semibold text-white pb-2">
              Find Us
            </h1>
            <div className="flex justify-center gap-5 items-center">
              <div className="border-[1px] w-9 h-8 md:w-[44px] md:h-[44px] border-white p-1 md:p-2">
                <Image
                  src={images.facebook}
                  alt="icon"
                  className="w-[24px] h-[24px]"
                ></Image>
              </div>
              <div className="border-[1px] w-9 h-8 md:w-[44px] md:h-[44px] border-white p-1 md:p-2">
                <Image
                  src={images.twitter}
                  alt="icon"
                  className="w-[24px] h-[24px]"
                ></Image>
              </div>
              <div className="border-[1px] w-9 h-8 md:w-[44px] md:h-[44px] border-white p-1 md:p-2">
                <Image
                  src={images.linkedin}
                  alt="icon"
                  className="w-[24px] h-[24px]"
                ></Image>
              </div>
              <div className="border-[1px] w-9 h-8 md:w-[44px] md:h-[44px] border-white p-1 md:p-2">
                <Image
                  src={images.instagram}
                  alt="icon"
                  className="w-[24px] h-[24px]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
