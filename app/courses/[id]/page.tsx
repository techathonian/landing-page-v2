import React from "react";
import { COURSEDETAILSCOMPONENT } from "@/utils/data";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { TrackBtn } from "@/components/TracksSection";
import { BsArrowRight } from "react-icons/bs";
import {
  EVENTCOMPONENT,
  COURSEINTROCOMPONENT,
  CODINGTRACKS,
  NOCODINGTRACKS,
  PROGRAMMESCOMPONENT,
  TRACKCOMPONENT,
  CORECOMPONENT
} from "@/utils/data";
import Footer from "@/components/Footer";

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const decodedId = decodeURIComponent(id);

  console.log(`Decoded id: ${decodedId}`);

  const course = COURSEDETAILSCOMPONENT.CourseDetail.find(
    (course: any) => course.id === decodedId
  );

  console.log(`Course details: `, course);

  return (
    <div>
      {course ? (
        <div className="place-items-center">
          <div className="testi">
            <div className="cod/nocod flex items-center justify-center text-[28px]/[36px] font-[600] lg:bg-[#CFD0D4] lg:h-[120px] w-full my-[64px] lg:w-[1210px] lg:text-[40px]/[48px] text-[#481DA6] md:h-[60px] bg-[#E0E0E0] md:text-[32px]/[36px] uppercase lg:uppercase md:capitalize ">
              {course.heading}
            </div>
          </div>
          <div className="">
            <div className="div-1 flex flex-col-reverse place-items-center gap-6 lg:flex-row">
              <div className="txt w-[343px] md:w-[712px] text-[#481DA6] lg:w-[585px]  flex flex-col gap-[24px]">
                <h1 className="lg:font-[500] text-[24px]/[32px] lg:text-[32px]/[36px] md:text-[28px]/[32px] ">
                  {course.summary.title}
                </h1>
                <p className="text-[16px]/[24px]  md:text-[18px]/[24px]">
                  {course.summary.description}
                </p>
                <div className="grid grid-cols md:grid-cols-2">
                  {course.summary.highlight.map((bullet) => (
                    <ul className=" list-none">
                      <li className="flex my-2 md:text-[20px]/[28px]">
                        <p className="flex flex-row gap-3">
                          <span
                            dangerouslySetInnerHTML={{ __html: bullet.svg }}
                          />
                          {bullet.theme}{" "}
                        </p>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="">
                  <Button
                    className="bg-[#663BC4] text-white font-[400] text-center md:text-[18px]/[30px] w-[343px] h-[30px] lg:w-[278px] lg:h-[44px] lg:px-[16px] rounded-[4px]"
                    label="Enroll for this course"
                  />
                </div>
              </div>
              <div className="img lg:w-[585px] lg:h-[348px] hidden lg:block ">
                <Image
                  width={585}
                  height={348}
                  src="/coursimg.svg"
                  alt="TECHATHON"
                  priority
                />
              </div>
              <div className="img hidden lg:hidden md:block md:mb-16 lg:mb-0 md:w-[712px] md:h-[348px]">
                <Image
                  width={712}
                  height={348}
                  src="/coursimg.svg"
                  alt="TECHATHON"
                  priority
                />
              </div>
              <div className="img w-[343px] h-[348px] block md:hidden">
                <Image
                  width={343}
                  height={348}
                  src="/courssimg.svg"
                  alt="TECHATHON"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="div-2  w-[343px] md:w-[712px] lg:w-[1200px] flex flex-col  my-8 gap-4">
                <h1 className="text-[28px]/[32px] text-[#141414] font-[500] md:text-[#545454] lg:text-[#141414]">
                  {course.about.title}
                </h1>
                <p className="text-[16px]/[24px] md:text-[18px]/[24px] text-[#141414] lg:text-[#141414] font-[400]">
                  {course.about.body}
                </p>
              </div>
            </div>
            <div className="">
              <div className="div-3">
                <h1 className="text-[28px]/[32px] font-[500] text-[#141414]">
                  {course.courseContent.title}
                </h1>
                <div className="grid grid-cols md:grid-cols-2 gap-5">
                  {course.courseContent.details.map((content) => (
                    <div key={id} className="">
                      <h1 className="text-[18px]/[24px] font-[500] text-[#141414] flex flex-row gap-[16px]">
                        <span
                          dangerouslySetInnerHTML={{ __html: content.svg }}
                        />
                        {content.title}
                      </h1>
                      <div className="">
                        <ul className="">
                          {content.body.map((li) => (
                            <li className="list-disc ml-8 my-2">{li}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] md:w-[600px] flex flex-col items-center justify-center gap-8">
            
                  <div className="one mb-6 lg:w-[1200px] md:w-[712px] w-340px">
                    <div className="head flex flex-col text-center text-[20px]/[28px] md:text-[28px]/[32px] text-[#545454] md:text-[#141414]  lg:text-[40px]/[48px] font-[500]">
                      {COURSEDETAILSCOMPONENT.certification.title}
                    </div>
                    <div className="body text-center px-3 text-[16px]/[24px] md:text-[18px]/[24px] text-[#141414]  lg:text-[28px]/[32px] font-[400]">{COURSEDETAILSCOMPONENT.certification.description}</div>
                  </div>
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
                  <TrackBtn
                    href="#"
                    label="Learn more"
                    icon={<BsArrowRight />}
                  />
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: PROGRAMMESCOMPONENT.body[2].description,
                      }}
                    />
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
                  <TrackBtn
                    href="#"
                    label="Learn more"
                    icon={<BsArrowRight />}
                  />
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: PROGRAMMESCOMPONENT.body[3].description,
                      }}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <div>Course not found</div>
      )}
    </div>
  );
}
