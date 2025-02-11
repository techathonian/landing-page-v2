"use client";
import { TESTIMONIALCOMPONENT } from "./../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
//modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import React, { useRef, useEffect } from "react";

const SwiperComponent = () => {
  // Create a ref to hold the swiper instance
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // swiperRef.current.swiper should be initialized here
      console.log("Swiper initialized", swiperRef.current.swiper);
    }
  }, []);

  return (
    <div className="swiper-container relative w-full  md:w-screen lg:w-[1200px] flex justify-center items-center">
      <Swiper
        spaceBetween={12}
        slidesPreview={1}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full flex items-center justify-center md:w-[60%] place-items-center"
        loop={true}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign the Swiper instance to the ref
        style={{
          "--swiper-pagination-color" : "#1B0028",
        }}
      >
        <SwiperSlide className="place-items-center">
          <div
            layout="responsive"
            className="flex flex-col place-items-center md:flex-row h-[536px] w-[340px] md:h-[280px] md:w-[528px] lg:w-[584px] lg:h-[280px] rounded-[24px] md:rounded-[16px] bg-[#EFEDED]"
          >
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] bg-[#686565] my-2 md:mx-4 md:-my-0"></div>
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] flex flex-col gap-4 text-start">
              <div className="name">
                <h1 className="text-[20px]/[28px] font-[500] md:text-[16px]/[24px]">
                  {TESTIMONIALCOMPONENT.student[0].name}
                </h1>
                <p className="text-[14px]/[16px] font-[400]">
                  {TESTIMONIALCOMPONENT.student[0].course}
                </p>
              </div>
              <div className="title">
                <h1 className="text-[20px]/[28px] font-[500] ">
                  {TESTIMONIALCOMPONENT.student[0].title}
                </h1>
                <p className="text-[14px]/[20px] font-[400] lg:w-[352px] md:h-[144px] md:w-[278px] md:text-[18px]/[24px] ">
                  {TESTIMONIALCOMPONENT.student[0].comment}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="place-items-center">
          <div
            layout="responsive"
            className="flex flex-col place-items-center md:flex-row h-[536px] w-[340px] md:h-[280px] md:w-[528px] lg:w-[584px] lg:h-[280px] rounded-[24px] md:rounded-[16px] bg-[#EFEDED]"
          >
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] bg-[#686565] my-2 md:mx-4 md:-my-0"></div>
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] flex flex-col gap-4 text-start">
              <div className="name">
                <h1 className="text-[20px]/[28px] font-[500] md:text-[16px]/[24px]">
                  {TESTIMONIALCOMPONENT.student[0].name}
                </h1>
                <p className="text-[14px]/[16px] font-[400]">
                  {TESTIMONIALCOMPONENT.student[0].course}
                </p>
              </div>
              <div className="title">
                <h1 className="text-[20px]/[28px] font-[500] ">
                  {TESTIMONIALCOMPONENT.student[0].title}
                </h1>
                <p className="text-[14px]/[20px] font-[400] lg:w-[352px] md:h-[144px] md:w-[278px] md:text-[18px]/[24px] ">
                  {TESTIMONIALCOMPONENT.student[0].comment}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="place-items-center">
          <div
            layout="responsive"
            className="flex flex-col place-items-center md:flex-row h-[536px] w-[340px] md:h-[280px] md:w-[528px] lg:w-[584px] lg:h-[280px] rounded-[24px] md:rounded-[16px] bg-[#EFEDED]"
          >
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] bg-[#686565] my-2 md:mx-4 md:-my-0"></div>
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] flex flex-col gap-4 text-start">
              <div className="name">
                <h1 className="text-[20px]/[28px] font-[500] md:text-[16px]/[24px]">
                  {TESTIMONIALCOMPONENT.student[0].name}
                </h1>
                <p className="text-[14px]/[16px] font-[400]">
                  {TESTIMONIALCOMPONENT.student[0].course}
                </p>
              </div>
              <div className="title">
                <h1 className="text-[20px]/[28px] font-[500] ">
                  {TESTIMONIALCOMPONENT.student[0].title}
                </h1>
                <p className="text-[14px]/[20px] font-[400] lg:w-[352px] md:h-[144px] md:w-[278px] md:text-[18px]/[24px] ">
                  {TESTIMONIALCOMPONENT.student[0].comment}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="place-items-center">
          <div
            layout="responsive"
            className="flex flex-col place-items-center md:flex-row h-[536px] w-[340px] md:h-[280px] md:w-[528px] lg:w-[584px] lg:h-[280px] rounded-[24px] md:rounded-[16px] bg-[#EFEDED]"
          >
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] bg-[#686565] my-2 md:mx-4 md:-my-0"></div>
            <div className="w-[324px] h-[261.73px] md:w-[192.67px] md:h-[248px] rounded-[16px] lg:w-[192px] lg:h-[248px] flex flex-col gap-4 text-start">
              <div className="name">
                <h1 className="text-[20px]/[28px] font-[500] md:text-[16px]/[24px]">
                  {TESTIMONIALCOMPONENT.student[0].name}
                </h1>
                <p className="text-[14px]/[16px] font-[400]">
                  {TESTIMONIALCOMPONENT.student[0].course}
                </p>
              </div>
              <div className="title">
                <h1 className="text-[20px]/[28px] font-[500] ">
                  {TESTIMONIALCOMPONENT.student[0].title}
                </h1>
                <p className="text-[14px]/[20px] font-[400] lg:w-[352px] md:h-[144px] md:w-[278px] md:text-[18px]/[24px] ">
                  {TESTIMONIALCOMPONENT.student[0].comment}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-navigation hidden  absolute md:top-0 md:left-16 md:right-16 md:bottom-0 md:flex items-center justify-between">
        {/* Left Button with custom class */}
        <button
          className="custom-prev"
          onClick={() => swiperRef.current?.slidePrev()} // Check if swiper instance is available
        >
          <Image
            width={40}
            height={40}
            src="/left.svg"
            alt="TECHATHON"
            priority
          />
        </button>

        {/* Right Button with custom class */}
        <button
          className="custom-next"
          onClick={() => swiperRef.current?.slideNext()} // Check if swiper instance is available
        >
          <Image
            width={40}
            height={40}
            src="/right.svg"
            alt="TECHATHON"
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
