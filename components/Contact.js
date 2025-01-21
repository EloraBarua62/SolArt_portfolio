import Image from "next/image";
import React from "react";
import { images } from "./demodata";

const Contact = () => {
  return (
    <div className="border-t-2 border-[#B98E75] flex justify-between">
      <div className="w-full py-10  flex justify-center border-r-2 border-[#B98E75] mt-[10px]">
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
          <h2 className="text-[22px] font-medium text-[#B98E75] pt-[25px]">
            Phone{" "}
          </h2>
          <h2 className="text-[22px] font-medium text-[#343438]">
            +1 203-123-0606
          </h2>
        </div>
      </div>
      <div className="w-full py-10 flex justify-center  border-r-0 xl:border-r-2 border-[#B98E75] mt-[10px]">
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
          <h2 className="text-[22px] font-medium text-[#B98E75] pt-[25px]">
            Email
          </h2>
          <h2 className="text-[22px] font-medium text-[#343438]">
            architecture@bauen.com
          </h2>
        </div>
      </div>
      <div className="w-full py-10 hidden xl:block">
        <div className="px-24">
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
          <h2 className="text-[22px] font-medium text-[#B98E75] pt-[25px]">
            Our Address
          </h2>
          <h2 className="text-[22px] font-medium text-[#343438]">
            24 King St, Charleston, SC 29401 USA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
