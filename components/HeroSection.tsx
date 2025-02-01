import React from "react";
import { HEROCONTENT } from "../utils/data";
import Image from "next/image";
import Button from "./Button";
import { AiOutlineCaretRight } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
import { motion, easeOut } from "framer-motion";




// const gridContainerVariants ={
//   hidden: 
// }
const HeroSection = () => {
  console.log(HEROCONTENT.title);

  return (
    <div className="main text-[#481DA6]">
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
        <div className="flex justify-center items-center gap-8">
          <div className=" w-[512px] h-[408px] lg:h-[416px]">
            <div className="header text-[40px] lg:text-[48px] leading-10 mb-4 text-center lg:text-start  font-[500] ">{HEROCONTENT.title}</div>
            <div className="body  text-[18px] text-center lg:text-start leading-[24px] ">{HEROCONTENT.body}</div>
            <div className="buttblue">
              <div className="button">
                <div className="md:w-full lg:block md:flex md:items-center md:justify-center">
                  <Button
                    label="Get Started"
                    className="w-full md:w-[136px] bg-[#481DA6] text-white font-[200] h-[40px] my-8 rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="">
            <div  className="bullets text-end lg:text-center h-[116px] w-[300px] lg:w-[512px] md:w-full grid lg:grid-cols-2 md:grid-cols-2 gap-2">
              <p className="pl-20 lg:pl-1 ml-2 flex lg:flex-none items-center">
                <AiOutlineCaretRight className="hidden lg:block" />{" "}
                <VscDebugStart className="block lg:hidden" />{" "}
                <span>Seasoned mentors</span>{" "}
              </p>
              <p className="pl-14 lg:pl-1 ml-2 flex lg:flex-none items-center">
                <AiOutlineCaretRight className="hidden lg:block" />{" "}
                <VscDebugStart className="block lg:hidden" />{" "}
                <span>New tech developments</span>{" "}
              </p>

              <p className="pl-10 lg:pl-1 ml-2 flex lg:flex-none items-center ">
                <AiOutlineCaretRight className="hidden lg:block" />{" "}
                <VscDebugStart className="block lg:hidden" />
                <span className="text-nowrap">
                  {" "}
                  Carry out realtime projects{" "}
                </span>{" "}
              </p>
              <p className="pl-6 lg:pl-1 ml-2 flex lg:flex-none items-center ">
                <AiOutlineCaretRight className="hidden lg:block" />{" "}
                <VscDebugStart className="block lg:hidden" />
                <span className="text-nowrap">
                  Work in functional team
                </span>{" "}
              </p>
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
          <div className="yellow mt-48 md:-mt-[608px] lg:mt-48">
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
              

        <div className=" lg:w-[512px] lg:h-[531px] order-first lg:order-last lg:-mt-24 place-content-center">
          <Image
            width={512}
            height={531}
            src="/hero.svg"
            alt="TECHATHON"
            priority
            className="-mt-20 md:"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
