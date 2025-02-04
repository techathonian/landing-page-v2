import { CORECOMPONENT } from "@/utils/data";
import React from "react";
import Image from "next/image";

const CoreSection = () => {
  return (
     <div className="mt-24 lg:mt-24 md:mt-16">
          <div className="one mb-4">
            <div className="head flex flex-col text-center text-[24px]/[32px] md:text-[32px]/[36px]  lg:text-[40px]/[48px] font-[600]">
              {CORECOMPONENT.title}
            </div>
            <div className="body text-center">{CORECOMPONENT.content}</div>
          </div>
      <div className="maiT flex flex-col flex-nowrap items-center justify-center bg-[#1B0028] h-[778px] w-[340px] md:h-[830px] md:w-[712px] lg:w-[1200px] lg:h-[586px] rounded-xl">
        <div className="bg-blue-300 h-4 w-24"></div>
        <div className="">
          <div className=" flex flex-col justify-center items-center lg:flex-row mainbg w-[308px] h-[601.5px] gap-[40px] md:w-[648px] md:h-[602px] md:gap-[48px]  lg:gap-[80px] lg:w-[1072px] lg:h-[402px] ">
            <div className="ctw place-items-center  w-[306px] h-[301.5px] md:w-[408px] md:h-[402px] lg:w-[408px] lg:h-[402px] relative">
              <div className="circuit w-[306px] h-[301.8px] md:w-[408px] md:h-[402px] lg:w-[408px] lg:h-[402px] ">
                            <Image
                              width={368}
                              height={384}
                              src="/circuit.svg"
                              alt="TECHATHON"
                              priority
                            />
                          </div>
                          <div className="image w-[301px] h-[270.75px] md:w-[402px] md:h-[361px] absolute top-11 ">
                            <Image
                              width={362}
                              height={361}
                              src="/cimage.svg"
                              alt="TECHATHON"
                              priority
                              className="z"
                            />
                          </div>
            </div>
            <div className="side place-items-center lg:place-items-start  w-[308px] h-[260px] md:w-[648px] md:h-[152px] lg:w-[584px] lg:h-[224px]">
              <div className="flex gap-3 items-center ">
                            <div className="svg">
                              <Image
                                width={48}
                                height={48}
                                src="/cjet.svg"
                                alt="TECHATHON"
                                priority
                              />
                            </div>
                            <div className="kik text-[20px]/[28px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                              {CORECOMPONENT.features[0].title}
                            </div>
                          </div>
                          <div className="">
                            <div className="heading   text-[28px]/[30px] md:text-[28px]/[32px] lg:text-[32px]/[36px] font-[500] leading-[50px] text-center lg:text-start text-white  ">
                              {CORECOMPONENT.features[0].subtitle}
                            </div>
                            <div className="content text-center lg:text-start text-[16px]/[24px] md:text-[18px]/[24px] lg:text-[18px]/[24px] text-white leading-[24px] font-[400]  ">
                              {CORECOMPONENT.features[0].body}
                            </div>
                          </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 h-4 w-24"><span className='underline'></span><span></span><span></span></div>
      </div>
    </div>
  );
};

export default CoreSection;
