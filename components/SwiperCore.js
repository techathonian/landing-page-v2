"use client";
import { CORECOMPONENT } from "./../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css";
import 'swiper/swiper-bundle.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
//modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";  

import React, { useRef, useEffect } from "react";


const SwiperCore = () => {

   // Create a ref to hold the swiper instance
   const swiperRef = useRef(null);

   useEffect(() => {
    if (swiperRef.current) {
      // swiperRef.current.swiper should be initialized here
      console.log('Swiper initialized', swiperRef.current.swiper);
    }
  }, []);

  return (
    <div className="swiper-container relative  flex justify-center items-center bg-[#1B0028] overflow-x-hidden">
      <Swiper
         spaceBetween={4}
         slidesPreview={1}
         navigation={false}
         pagination={{clickable: true}}
         scrollbar={{draggable: true}}
         className='w-full flex items-center justify-center lace-items-center'
         loop = {true}
         modules = {[ Navigation, Autoplay]}
         autoplay={{delay: 2000, disableOnInteraction: false}}
         effect="creative"
         onSwiper={(swiper) => (swiperRef.current = swiper)}  
           style={{
        
        "--swiper-pagination-bottom" : "20px",
        "-swiper-pagination-color": "yellow",  
   " --swiper-pagination-bullet-size": "14px",
"--swiper-pagination-bullet-inactive-color": "rgba(0, 0, 0, 0.5)",
"--swiper-pagination-bullet-inactive-opacity": "0.6",
" --swiper-pagination-bullet-active-color": "green", 
"--swiper-pagination-bullet-active-opacity": "1",
" --swiper-pagination-clickable": "true",
}}
      
     >
       
        <SwiperSlide className="place-items-center">
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
        </SwiperSlide>

        <SwiperSlide className="place-items-center">
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
        </SwiperSlide>


        <SwiperSlide className="place-items-center">
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
        </SwiperSlide>
       
        <SwiperSlide className="place-items-center">
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
        </SwiperSlide>

     
      </Swiper>

    </div>
  );
};

export default SwiperCore;


