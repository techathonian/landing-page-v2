"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { HEROCONTENT } from "../utils/data";
import Image from "next/image";
import Button from "./Button";
import { AiOutlineCaretRight } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";


const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 50,
            }
      }
      transition={{
        duration: 3,
      }}
      className="main text-[#481DA6] place-items-center "
    >
      <div className="star w-[40px] h-[40px]">
        <Image
          width={40}
          height={40}
          src="/star.svg"
          alt="TECHATHON"
          priority
        />
      </div>
      <div className="cont grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center  gap-[48px]">
          <div className=" w-[512px] h-[408px] lg:h-[416px]  place-items-center ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.4 }}
              className="header text-[39px] lg:text-[48px] leading-10 mb-4 text-center  lg:text-start   font-[500] "
            >
              {HEROCONTENT.title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.8 }}
              className="body  text-[18px] text-center lg:text-start leading-[24px] "
            >
              {HEROCONTENT.body}
            </motion.div>
            <div className="buttblue flex items-center justify-center">
              <div className="button">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 4.1 }}
                  className="md:w-full w-screen flex  items-center justify-center lg:block  "
                >
                  <Button
                    label="Get Started"
                    className="text-center w-[290px] md:w-[136px] bg-[#481DA6] text-white font-[200] h-[40px] my-8 rounded-sm"
                  />
                </motion.div>
              </div>
            </div>
            <div className="">
              <div className="bullets text-end lg:text-center h-[116px] w-[300px] lg:w-[512px] md:w-full grid lg:grid-cols-2 md:grid-cols-2 gap-2">
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: -30 }}
                  transition={{ duration: 4.7 }}
                  className="pl-20 lg:pl-1 md:pl-1 ml-2 flex lg:flex-none items-center"
                >
                  <AiOutlineCaretRight className="hidden lg:block" />{" "}
                  <VscDebugStart className="block lg:hidden" />{" "}
                  <span> {HEROCONTENT.bullet1}</span>{" "}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 30 }}
                  transition={{ duration: 4.7 }}
                  className="pl-14 lg:pl-1 md:pl-1 ml-2 flex lg:flex-none items-center"
                >
                  <AiOutlineCaretRight className="hidden lg:block" />{" "}
                  <VscDebugStart className="block lg:hidden" />{" "}
                  <span> {HEROCONTENT.bullet2}</span>{" "}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: -30 }}
                  transition={{ duration: 4.7 }}
                  className="pl-10 lg:pl-1 md:pl-1 md:pr-2 ml-2 flex lg:flex-none items-center "
                >
                  <AiOutlineCaretRight className="hidden lg:block" />{" "}
                  <VscDebugStart className="block lg:hidden" />
                  <span className="text-nowrap">
                    {" "}
                    {HEROCONTENT.bullet3}{" "}
                  </span>{" "}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 30 }}
                  transition={{ duration: 4.7 }}
                  className="pl-6 lg:pl-1 md:pl-1 ml-2 flex lg:flex-none items-center "
                >
                  <AiOutlineCaretRight className="hidden lg:block" />{" "}
                  <VscDebugStart className="block lg:hidden" />
                  <span className="text-nowrap">
                    {HEROCONTENT.bullet4}
                  </span>{" "}
                </motion.p>
              </div>
              <div className="blue -mt-36 lg:mt-11 lg:ml-80 w-[76.5px] [h-62.5px] md:-mt-48 md:ml-16">
                <Image
                  width={70.5}
                  height={50.5}
                  src="/blue.svg"
                  alt="TECHATHON"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="yellow hidden md:block mt-48 md:-mt-[608px] lg:mt-48">
            <Image
              width={76.5}
              height={62.5}
              src="/yellow.svg"
              alt="TECHATHON"
              priority
              className="-mt-20 md:"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className=" md:w-[521px] md:h-[531px] lg:w-[512px]  order-first lg:order-last lg:-mt-24  place-items-center overflow-hidden"
        >
          <Image
            width={512}
            height={531}
            src="/hero.svg"
            alt="TECHATHON"
            priority
            className="-mt-20 md:"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
