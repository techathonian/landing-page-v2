"use client"


import { UNDERSTANDTECHATHONCOMPONENT } from "./../utils/data";
import Image from "next/image";
import { easeOut, motion, useInView } from "framer-motion";
import React, { useRef } from "react"

const gridContainerVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 1.3, 
    },
  },
};


  const gridSquareVariants = {
     hidden: { opacity: 0 }, show: { opacity: 1 } 
  }

const OustandingSection = () => {

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
           duration: 4
        }} className="place-items-center">
      <div className="hHEAD flex flex-col mb-6 text-[#141414] lg:w-[1200px] md:w-[712px] w-340px">
        <div className="header text-center text-[24px]/[32px] md:text-[40px]/[48px] font-[600]">
          {UNDERSTANDTECHATHONCOMPONENT.title}
        </div>
        <div className="content px-3 text-center text-[16px]/[24px] lg:text-[18px]/[24px] font-[400]">
          {UNDERSTANDTECHATHONCOMPONENT.body}
        </div>
      </div>
      <motion.div 
           variants={gridContainerVariants}
           initial="hidden"
           whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out1.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[0].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[0].description}
          </div>
        </motion.div>
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out2.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[1].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[1].description}
          </div>
        </motion.div>
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out3.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[2].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[2].description}
          </div>
        </motion.div>
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out4.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[3].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[3].description}
          </div>
        </motion.div>
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out5.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[4].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[4].description}
          </div>
        </motion.div>
        <motion.div 
        variants={gridContainerVariants}
        style={{boxShadow: "-2px 2px 10px 0px hsla(0, 0%, 0%, 0.25)"}} className="w-[340px] h-[308px] md:w-[380px] md:h-[332px] text-center rounded-2xl text-wrap flex flex-col justify-center items-center gap-4">
          <div className="svg">
            <Image
              width={48}
              height={48}
              src="/out6.svg"
              alt="TECHATHON"
              priority
            />
          </div>
          <div className="header text-[24px]/[28px] font-[500">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[5].title}
          </div>
          <div className="body text-[16px]/[24px] font-[400] md:text-[18px]/[24px] md:font-[400]">
            {UNDERSTANDTECHATHONCOMPONENT.stickers[5].description}
          </div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default OustandingSection;
