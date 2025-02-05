import React from "react";
import { UNDERSTANDTECHATHONCOMPONENT } from "./../utils/data";
import Image from "next/image"
const OustandingSection = () => {
  return (
    <div className="place-items-center">
      <div className="hHEAD flex flex-col mb-3 text-[#141414]">
        <div className="header text-center text-[24px]/[32px] md:text-[40px]/[48px] font-[600]">
          {UNDERSTANDTECHATHONCOMPONENT.title}
        </div>
        <div className="content text-center text-[16px]/[24px] lg:text-[18px]/[24px] font-[400]">
          {UNDERSTANDTECHATHONCOMPONENT.body}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                                        width={48}
                                        height={48}
                                        src="/out1.svg"
                                        alt="TECHATHON"
                                        priority
                                      /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[0].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[0].description}</div>
        </div>
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                              width={48}
                              height={48}
                              src="/out2.svg"
                              alt="TECHATHON"
                              priority
                            /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[1].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[1].description}</div>
        </div>
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                              width={48}
                              height={48}
                              src="/out3.svg"
                              alt="TECHATHON"
                              priority
                            /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[2].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[2].description}</div>
        </div>
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                              width={48}
                              height={48}
                              src="/out4.svg"
                              alt="TECHATHON"
                              priority
                            /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[3].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[3].description}</div>
        </div>
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                              width={48}
                              height={48}
                              src="/out5.svg"
                              alt="TECHATHON"
                              priority
                            /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[4].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[4].description}</div>
        </div>
        <div className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center shadow-2xl rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg"><Image
                              width={48}
                              height={48}
                              src="/out6.svg"
                              alt="TECHATHON"
                              priority
                            /></div>
          <div className="header text-[24px]/[28px] font-[500">{UNDERSTANDTECHATHONCOMPONENT.stickers[5].title}</div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">{UNDERSTANDTECHATHONCOMPONENT.stickers[5].description}</div>
        </div>
      </div>
    </div>
  );
};

export default OustandingSection;
