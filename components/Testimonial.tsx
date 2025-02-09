import { TESTIMONIALCOMPONENT } from "@/utils/data";
import React from "react";
import SwiperComponent from "./SwiperComponent";

const Testimonial = () => {
  return (
    <div className="mt-3  flex flex-col items-center justify-center bg-[#1B0028] h-[920px] w-screen lg:w-[1200px]  md:h-[632px]  lg:h-[632px]">
      <div className="flex flex-col items-center gap-5">
        <div className="  text-white text-center h-[208px] w-[340px] md:h-[136px] md:w-[712px] lg:w-[1109px] lg:h-[112px]">
          <div className="text-[28px]/[36px] md:text-[40px]/[48px] font-[600]">
            {TESTIMONIALCOMPONENT.title}
          </div>
          <div className="text-[16px]/[24px] font-400 md:text-[18px]/[24px] lg:text-[16px]/24px]  ">
            {TESTIMONIALCOMPONENT.subtitle}
          </div>
        </div>
        <div className="">
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
