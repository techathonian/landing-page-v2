import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  EVENTCOMPONENT,
  COURSEINTROCOMPONENT,
  CODINGTRACKS,
  NOCODINGTRACKS,
  PROGRAMMESCOMPONENT,
  TRACKCOMPONENT,
} from "@/utils/data";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { TrackBtn } from "@/components/TracksSection";
import Footer from "@/components/Footer";
import { Content } from "next/font/google";

const Tracks = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-16 gap-16 ">
      <div className="intro  flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="intro-state  flex flex-col lg:flex-row text-[#481DA6]">
          <div className=" flex flex-col items-center justify-center gap-[24px] lg:items-start lg:gap-4 intro-main-text lg:w-[512px] lg:h-[256px]">
            <div className="">
              <h1 className="lg:text-[48px]/[56px] text-center gap-8 lg:text-start text-[40px]/[48px] w-[340px] h-[144px] lg:w-[512px] lg:h-[112px] font-[600]">
                {COURSEINTROCOMPONENT.title}
              </h1>
              <p className="lg:text-[16px]/[20px] text-[16px]/[24px] text-center lg:text-start">
                {COURSEINTROCOMPONENT.content}
              </p>
            </div>
            <div className="intro-btn">
              <Button
                label="Access to Jobberman soft skill training"
                className="lg:w-[356px] lg:h-[46px] bg-[#481DA6] lg:text-[16px]/[20px] text-white rounded-md lg:rounded-none w-[285px] h-[40px]"
              />
            </div>

            <div className="inline-flex items-end justify-end text-end">
              <Image
                width={76.5}
                height={62.5}
                priority
                src="/blue.svg"
                alt="TECHATHON"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row w-[292px] h-[200px] lg:w-[661.5px] lg:h-[400px]">
          <div className="w-[76.5px] h-[62.5px]">
            <Image
              width={56.5}
              height={62.5}
              priority
              src="/yellow.svg"
              alt="TECHATHON"
            />
          </div>
          <div className="video w-[292px] h-[200px] lg:w-[585px] lg:h-[400px]">
            <Image
              width={585}
              height={400}
              priority
              src="/video.svg"
              alt="TECHATHON"
            />
          </div>
        </div>

       
      </div>

      <div className="coding-tracks flex flex-col">
        <div className="coding-header flex  gap-7 mb-8 flex-col w-[340px] h-[232px] md:w-[712px] md:h-[146px] lg:w-[1200px] lg:h-[152px] text-center font-[600]">
          <h1 className="coding-title-intro text-[24px]/[32px] md:text-[32px]/[36px] lg:text-[40px]/[48px]">
            {CODINGTRACKS.title}
          </h1>
          <p className="coding-text-intro  text-[16px]/[24px] md:text-[18px]/[24px] font-[400]">
            {CODINGTRACKS.content}
          </p>
        </div>
        <div className="tracks grid lg:grid-cols-2 gap-[16px] md:gap-[24px] place-items-center text-center lg:text-start lg:place-items-start">
          {CODINGTRACKS.courses.map((course: any, index: number) => {
            return (
              <div
                key={course.id}
                className="md:w-[512px] md:h-[248px] w-[340px] flex flex-col items-center justify-center gap-[16px]"
              >
                <div className="track-1 font-[500] text-[20px]/[28px] lg:text-[32px]/[36px] md:text-[28px]/[32px] ">
                  {course.title}
                </div>
                <div className="track-2 font-[400] text-[16px]/[24px] md:text-[18px]/[24px] text-[#141414]">
                  {course.content}
                </div>
                <div className="track-3 ">
                  {" "}
                  <Link href={course.link}>
                  <Button
                    className="bg-[#663BC4] text-[18px]/[24px] text-white w-[136px] h-[40px] md:h-[48px] rounded-[4px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] "
                    label="Learn more"
                  />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="nocoding-tracks flex flex-col ">
        <div className="nocoding-header flex  gap-7 flex-col w-[340px] h-[232px] md:w-[712px] md:h-[146px] lg:w-[1200px] lg:h-[152px] text-center font-[600]">
          <h1 className="nocoding-title-intro text-[24px]/[32px] md:text-[32px]/[36px] lg:text-[40px]/[48px]">
            {NOCODINGTRACKS.title}
          </h1>
          <p className="nocoding-text-intro  text-[16px]/[24px] md:text-[18px]/[24px] font-[400]">
            {NOCODINGTRACKS.content}
          </p>
        </div>
        <div className="tracks grid lg:grid-cols-2 gap-[16px] md:gap-[24px] place-items-center text-center lg:text-start lg:place-items-start">
          {NOCODINGTRACKS.courses.map((course: any, index: number) => {
            return (
              <div
                key={course.id}
                className="md:w-[512px] md:h-[248px] w-[340px] flex flex-col items-center justify-center gap-[16px]"
              >
                <div className="track-1 font-[500] text-[20px]/[28px] lg:text-[32px]/[36px] md:text-[28px]/[32px] text-center">
                  {course.title}
                </div>
                <div className="track-2 font-[400] text-[16px]/[24px] md:text-[18px]/[24px] text-[#141414]">
                  {course.content}
                </div>
                <div className="track-3 ">
                  {" "}
                  <Link href={course.link}>
                  <Button
                    className="bg-[#663BC4] text-[18px]/[24px] text-white w-[136px] h-[40px] md:h-[48px] rounded-[4px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] "
                    label="Learn more"
                  />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="place-items-center">
      <div className="programmes flex flex-col ">
        <div className="programmes-header flex flex-col gap-7 w-[340px] h-[232px] md:w-[712px] md:h-[146px] lg:w-[1200px] lg:h-[152px] text-center font-[600]">
          <h1 className="programmes-title-intro text-[24px]/[32px] md:text-[32px]/[36px] lg:text-[40px]/[48px]">
            {PROGRAMMESCOMPONENT.title}
          </h1>
          <p className="programmes-text-intro  text-[16px]/[24px] md:text-[18px]/[24px] font-[400]">
            {PROGRAMMESCOMPONENT.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row overflow-hidden gap-4">
          <div className="ONE flex flex-col gap-4 mt-4">
            <div className="rounded-[24px] sub-1  w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#E6EBFF] md:h-[612px] md:w-[584px] md:bg-[#E6EBFF] bg-[#ECF3FB]">
              <div className="header ml-5  flex flex-col gap-4">
                <div className="flex gap-3 items-center pt-3">
                  <div className="svg">
                    <Image
                      width={42}
                      height={42}
                      src="/track1.svg"
                      alt="TECHATHON"
                      priority
                    />
                  </div>
                  <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                    {PROGRAMMESCOMPONENT.body[0].type}
                  </div>
                </div>
                <div className="header-text w-[537px] h-[36px] text-start text-[32px]/[36px] font-[500]">
                  {PROGRAMMESCOMPONENT.body[0].title}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3  h-[415px]">
                <div className="big bg-white  justify-evenly w-[134px] h-[310px] rounded-[8px] lg:h-[324px] lg:w-[256px] md:h-[324px] md:w-[256px]">
                  <div className="devr flex flex-col items-center justify-center lg:h-[78.17px] lg:w-[231px]">
                    <div className="devr-svg">
                      <Image
                        width={42}
                        height={42}
                        src="/devr.svg"
                        alt="TECHATHON"
                        priority
                      />
                    </div>
                    <div className="devr-text text-[18px]/[30px] font-[400] text-center">
                      {PROGRAMMESCOMPONENT.body[0].main}
                    </div>
                  </div>
                </div>
                <div className="smalls flex flex-col gap-3">
                  <div className="small1 bg-white flex flex-col items-center justify-center gap-3 text-[18px]/[30px] font-[400]  w-[160px] h-[186px] rounded-[8px] lg:h-[186px] lg:w-[240px] md:h-[186px] md:w-[240px]">
                    <div className="text-center">
                      {PROGRAMMESCOMPONENT.body[0].first}
                    </div>
                  </div>
                  <div className="small2 bg-white flex flex-col items-center justify-center gap-3text-[18px]/[30px]  w-[160px] h-[116px] rounded-[8px] lg:h-[116px] lg:w-[240px] md:h-[116px] md:w-[240px]">
                    <div className="text-center">
                      {PROGRAMMESCOMPONENT.body[0].second}
                    </div>
                  </div>
                </div>
              </div>
              <div className="button text-right mr-6 md:mr-10  -mt-10 md:mt-3">
                <TrackBtn href="#" label="Learn more" icon={<BsArrowRight />} />
              </div>
            </div>
            <div className="small-one  w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] rounded-[24px] bg-[#FFEFFF] md:bg-[#FFEFFF] lg:bg-[#FCD1FF]">
               <div className="flex flex-col items-center justify-evenly ggg md:flex-row w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] ">
                        <div className="flex flex-col gap-0 items-start -mt-9 gggg">
                          <div className="flex gap-3 items-center pt-3">
                            <div className="svg">
                              <Image
                                width={42}
                                height={42}
                                src="/track1.svg"
                                alt="TECHATHON"
                                priority
                              />
                            </div>
                            <div className="kik text-[20px]/[24px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                              {PROGRAMMESCOMPONENT.body[2].type}
                            </div>
                          </div>
                          <div className="header-text text-start text-[32px]/[36px] font-[500]">
                            {PROGRAMMESCOMPONENT.body[2].title}
                          </div>
                        </div>
              
                        <div className="w-[308px] h-[108px] bg-white md:w-[310px] border-[1px] border-[#141414] rounded-[8px] text-justify flex items-center p-4">
                        <p  dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.body[2].description }}/>
                      </div>
                      </div>
            </div>
          </div>
          <div className="TWO  flex flex-col gap-4 mt-4">
            <div className="sub-2 rounded-[24px]  w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#FCD1FF] md:h-[612px] md:w-[584px] bg-[#F0E1DC]">
              <div className="header ml-5 flex flex-col gap-4">
                <div className="flex gap-3 items-center ">
                  <div className="devg-svg pt-3">
                    <Image
                      width={48}
                      height={48}
                      src="/djet.svg"
                      alt="TECHATHON"
                      priority
                    />
                  </div>
                  <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                    {PROGRAMMESCOMPONENT.body[1].type}
                  </div>
                </div>
                <div className="header-text w-[537px] h-[36px] text-start text-[32px]/[36px] font-[500]">
                  {PROGRAMMESCOMPONENT.body[1].title}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3  h-[415px]">
                <div className="big bg-white justify-evenly  w-[140px] h-[313px] rounded-[8px] lg:h-[313px] lg:w-[256px] md:h-[313px] md:w-[256px]">
                  <div className="devr flex flex-col items-center justify-center lg:h-[78.17px] lg:w-[231px]">
                    <div className="devr-svg mt-10">
                      <Image
                        width={42}
                        height={42}
                        src="/devg.svg"
                        alt="TECHATHON"
                        priority
                      />
                    </div>
                    <div className="devr-text text-[18px]/[30px] font-[400] text-center">
                      {PROGRAMMESCOMPONENT.body[1].main}
                    </div>
                  </div>
                </div>
                <div className="smalls flex flex-col gap-3">
                  <div className="small1 bg-white flex flex-col items-center justify-center gap-3 text-[18px]/[30px] font-[400]  w-[160px] h-[186px] rounded-[8px] lg:h-[186px] lg:w-[240px] md:h-[186px] md:w-[240px]">
                    <div className="text-center">
                      {PROGRAMMESCOMPONENT.body[1].first}
                    </div>
                  </div>
                  <div className="small2 bg-white flex flex-col items-center justify-center gap-3text-[18px]/[30px]  w-[160px] h-[116px] rounded-[8px] lg:h-[116px] lg:w-[240px] md:h-[116px] md:w-[240px]">
                    <div className="text-center">
                      {PROGRAMMESCOMPONENT.body[1].second}
                    </div>
                  </div>
                </div>
              </div>
              <div className="button text-right mr-6 md:mr-10 -mt-10 md:mt-3">
                <TrackBtn href="#" label="Learn more" icon={<BsArrowRight />} />
              </div>
            </div>
           <div className="small-one  w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] rounded-[24px] bg-[#EDF9E7] lg:bg-[#E6EBFF]">
                   <div className="flex flex-col  items-center justify-evenly ggg md:flex-row w-[340px] h-[256px] md:w-[585px] md:h-[209px] lg:w-[585px] lg:h-[209px] ">
                     <div className="flex flex-col gap-0 items-start -mt-9 ggg">
                       <div className="flex gap-3 items-center pt-3">
                         <div className="svg">
                           <Image
                             width={42}
                             height={42}
                             src="/track2.svg"
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
           
                     <div className="w-[308px] h-[108px] bg-white md:w-[310px] border-[1px] border-[#141414] rounded-[8px] text-justify flex items-center p-4 ">
                     <p  dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.body[3].description }} className=""/>
                   </div>
                   </div>
                  
                 </div>
          </div>
        </div>
      </div>
      <div className="bonus text-[14px]/[20px] font-[600] mt-4 text-center lg:text-start">BONUS: Get a Jobberman soft skill certificate on completion of the programme</div>
      </div>
      <div className="FBC">
        <div className="MIDDLE flex flex-col lg:flex-row gap-6 mb-7">
                        <div 
                          
                          className="MID-1 shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                            <div className="svg-1 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px] ">
                                <Image
                                          width={348}
                                          height={182}
                                          src="/evpg1.svg"
                                          alt="TECHATHON"
                                          priority
                                        />
                            </div>
                            <div className="text-1 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                                <div className="subtitle-1 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{PROGRAMMESCOMPONENT.cards[0].title}</div>
                                <div  dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.cards[0].description}} className="description-1 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] "/>
                            </div>
                        </div>
                        <div className="MID-2 shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                        <div className="svg-2 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px]">
                            <Image
                                      width={348}
                                      height={182}
                                      src="/evpg2.svg"
                                      alt="TECHATHON"
                                      priority
                                    />
                        </div>
                        <div className="text-2 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                        <div className="subtitle-2 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{PROGRAMMESCOMPONENT.cards[1].title}</div>
                                <div dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.cards[1].description}} className="description-2 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] "/>
                        </div>
                        </div>
                        <div className="MID-3 shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                        <div className="svg-3 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px]">
                            <Image
                                      width={348}
                                      height={182}
                                      src="/evpg3.svg"
                                      alt="TECHATHON"
                                      priority
                                    />
                        </div>
                        <div className="text-3 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                        <div className="subtitle-3 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{PROGRAMMESCOMPONENT.cards[2].title}</div>
                                <div dangerouslySetInnerHTML={{ __html: PROGRAMMESCOMPONENT.cards[2].description}} className="description-3 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] "/>
                        </div>
                        </div>
                    </div>
      </div>

      <div className="w-[340px] md:w-[600px] flex flex-col items-center justify-center gap-8">
      <div className="w-[324px] md:w-[584px] text-center  flex flex-col items-center justify-center gap-4">
        <h1 className="text-[24px]/[32px] md:text-[32px]/[36px] font-[600]">{PROGRAMMESCOMPONENT.takestep.title}</h1>
        <p className="text-[16px]/[24px] font-[400] md:text-[#141414]">{PROGRAMMESCOMPONENT.takestep.content}</p>
      </div>
      <div className="button">
        <Button className="text-center text-white bg-[#481DA6] w-[136px] h-[48px] rounded-[4px] md:rounded-none md:w-[182px] md:h-[44px] pt-[8px] pr-[16px] pb-[8px] pl-[16px]" label="Get started"/>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tracks;


