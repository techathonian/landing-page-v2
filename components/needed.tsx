import { CORECOMPONENT } from "@/utils/data";
import React from "react";
import Image from "next/image";

const CoreSection = () => {
  return (
    <div className="mt-36 lg:mt-24 md:mt-16">
      <div className="one ">
        <div className="head text-center text-xl font-[600]">
          {CORECOMPONENT.title}
        </div>
        <div className="body text-center">{CORECOMPONENT.content}</div>
      </div>

      <div className="two bg-[#1B0028] h-[778px] w-[340px] md:h-[830px] md:w-[712px] lg:w-[1200px] lg:h-[586px] place-content-center mt-4 rounded-[12px]">
        <div className="movecontrol h-16 w-16 bg-blue-300"></div>
        <div className="ctw flex items-center justify flex-col lg:flex-row w-[308px] h-[601.5px] gap-[40px] md:w-[648px] md:h-[602px] md:gap-[48px]  lg:gap-[80px] lg:w-[1072px] lg:h-[402px] ">
          <div className="circuit-img  w-[306px] h-[301.5px] md:w-[408px] md:h-[402px] lg:w-[408px] lg:h-[402px] relative ">
            <div className="circuit w-[306px] h-[301.8px] md:w-[408px] md:h-[402px] lg:w-[408px] lg:h-[402px] ">
              <Image
                width={368}
                height={384}
                src="/circuit.svg"
                alt="TECHATHON"
                priority
              />
            </div>
            <div className="image w-[301px] h-[270.75px] md:w-[402px] md:h-[361px] absolute top-8 ">
              <Image
                width={402}
                height={361}
                src="/cimage.svg"
                alt="TECHATHON"
                priority
                className="z"
              />
            </div>
          </div>

          <div className="side flex flex-col g-[24px] w-[308px] h-[260px] md:w-[648px] md:h-[152px] lg:w-[584px] lg:h-[224px]  ">
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
              <div className="kik text-[20px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                {CORECOMPONENT.features[0].title}
              </div>
            </div>
            <div className="">
              <div className="heading text-[48px] font-[500] leading-[50px] text-center text-white ">
                {CORECOMPONENT.features[0].subtitle}
              </div>
              <div className="content text-white leading-[24px] font-[400] text-[18px] ">
                {CORECOMPONENT.features[0].body}
              </div>
            </div>
          </div>
        </div>
        <div className="movecontrol h-16 w-16 bg-blue-300 t-36 md:t-24 lg:t-4
        "></div>
      </div>
    </div>
  );
};

export default CoreSection;
