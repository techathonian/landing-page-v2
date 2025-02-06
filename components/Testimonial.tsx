import { TESTIMONIALCOMPONENT } from "@/utils/data";
import React from "react";

const Testimonial = () => {
  return ( 
    <div className="mt-3  flex flex-col items-center justify-center bg-[#1B0028] h-[920px] w-screen lg:w-[1200px]  md:h-[632px]  lg:h-[632px]">
      <div className="flex flex-col items-center gap-5">
        <div className="  text-white text-center h-[208px] w-[340px] md:h-[136px] md:w-[712px] lg:w-[1109px] lg:h-[112px]">
          <div className="text-[28px]/[36px] md:text-[40px]/[48px] font-[600]">{TESTIMONIALCOMPONENT.title}</div>
          <div className="text-[16px]/[24px] font-400 md:text-[18px]/[24px] lg:text-[16px]/24px]  ">{TESTIMONIALCOMPONENT.subtitle}</div>
        </div>
        <div className="  flex flex-col place-items-center md:flex-row  h-[536px] w-[340px] md:h-[280px] md:w-[528px] lg:w-[584px] lg:h-[280px] rounded-[24px] md:rounded-[16px] bg-[#EFEDED]">
          <div className="  w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] bg-[#686565] my-2 md:mx-4 md:-my-0"></div>
            <div className=" w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] flex flex-col gap-4 text-start">
            <div className="name">
            <h1 className="text-[20px]/[28px] font-[500] md:text-[16px]/[24px]">{TESTIMONIALCOMPONENT.student[0].name}</h1>
            <p className="text-[14px]/[16px] font-[400]">{TESTIMONIALCOMPONENT.student[0].course}</p>
          </div>
          <div className="title">
            <h1 className="text-[20px]/[28px] font-[500] ">{TESTIMONIALCOMPONENT.student[0].title}</h1>
            <p className="text-[14px]/[20px] font-[400] lg:w-[352px] md:h-[144px] md:w-[278px] md:text-[18px]/[24px] ">{TESTIMONIALCOMPONENT.student[0].comment}</p>
           </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
