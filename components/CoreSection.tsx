"use client"

import {motion, useInView} from "framer-motion"
import React, { useRef } from "react"


import { CORECOMPONENT } from "@/utils/data";
import Image from "next/image";
import SwiperCore from "./SwiperCore";
const CoreSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {
      once: true
  })
  return (
    <motion.div 
    ref={ref}
    initial={{
       opacity: 0,
       y:50
    }}
    animate={
       isInView ? {
           opacity: 1, y: 0
       } : {
           opacity: 0, y:50
       }
    }
    transition={{
       duration: 6
    }}
      className="mt-24 lg:mt-24 md:mt-16 place-items-center">
      <div className="one mb-6 lg:w-[1200px] md:w-[712px] w-340px">
        <div className="head flex flex-col text-center text-[24px]/[32px] md:text-[32px]/[36px]  lg:text-[40px]/[48px] font-[600]">
          {CORECOMPONENT.title}
        </div>
        <div className="body text-center px-3">{CORECOMPONENT.content}</div>
      </div>
      <div className="maiT flex flex-col flex-nowrap items-center justify-center bg-[#1B0028] h-[778px] w-[340px] md:h-[830px] md:w-[712px] lg:w-[1200px] lg:h-[586px] rounded-xl">
       
        <div className="overflow-x-hidden">
          <div className=" flex flex-col justify-center items-center lg:flex-row mainbg w-[308px] h-[601.5px] gap-[40px] md:w-[648px] md:h-[602px] md:gap-[48px]  lg:gap-[80px] lg:w-[1072px] lg:h-[402px] ">
          <SwiperCore />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default CoreSection;
