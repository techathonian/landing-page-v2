import { PROGRAMMESCOMPONENT } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Needed = () => {
  return (
    <div>
      <div className="small-one  w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] lg:rounded-[24px] lg:bg-[#FCD1FF]">
        <div className="flex flex-col border-4  items-center justify-evenly border-red-500 md:flex-row w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] ">
          <div className="flex flex-col gap-0 border-4 items-start -mt-9 border-gggg">
            <div className="flex gap-3 items-center pt-3">
              <div className="svg">
                <Image
                  width={42}
                  height={42}
                  src="/cjet.svg"
                  alt="TECHATHON"
                  priority
                />
              </div>
              <div className="kik text-[20px]/[24px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                {PROGRAMMESCOMPONENT.body[3].type}
              </div>
            </div>
            <div className="header-text text-start text-[32px]/[36px] font-[500]">
              {PROGRAMMESCOMPONENT.body[3].title}
            </div>
          </div>

          <div className="w-[308px] h-[108px] bg-white md:w-[310px] border-[1px] border-[#141414] rounded-[8px] ">
          <p  dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.body[3].description }}/>
        </div>
        </div>
        {/* <div className="w-[308px] h-[108px] bg-white md:w-[310px] md:h-[">
          <p></p>
          <p></p>
        </div> */}
      </div>
    </div>
  );
};

export default Needed;
