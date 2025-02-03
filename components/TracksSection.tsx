import React from "react";
import { TRACKCOMPONENT } from "./../utils/data";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Button from './Button';
import Link  from 'next/link';

interface trackButtonProps{
    href: string;
    label: string;
    icon?: React.ReactNode
}

export const TrackBtn : React.FC<trackButtonProps> = ({href, label, icon}) => {
  return (
    <div className="">
      <button ><Link href={href} className="inline-flex items-center gap-4"> {label}  {icon} </Link> </button>
    </div>
  )
}

const TracksSection = () => {
  return (
    <div>
      <div className="">
        <div className="one flex flex-col gap-[16px]  mb-4">
          <div className="head text-center font-[600] text-[24px]/[32px] md:text-[32px]/[36px]  lg:text-[40px]/[48px]">
            {TRACKCOMPONENT.title}
          </div>
          <div className="body text-center text-[16px]/[24px] lg:text-[18px]/[24px]">
            {TRACKCOMPONENT.content}
          </div>
        </div>
        <div className="two flex flex-col gap-5 lg:flex-row items-center justify-center">
          <div className="rounded-[24px] sub-1  w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#E6EBFF] md:h-[612px] md:w-[584px] md:bg-[#E6EBFF] bg-[#ECF3FB]">
            <div className="header ml-5  flex flex-col gap-4">
              <div className="flex gap-3 items-center ">
                <div className="svg">
                  <Image
                    width={42}
                    height={42}
                    src="/cjet.svg"
                    alt="TECHATHON"
                    priority
                  />
                </div>
                <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                  {TRACKCOMPONENT.tracks[0].title}
                </div>
              </div>
              <div className="header-text">{TRACKCOMPONENT.tracks[0].subtitle}</div>
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
                <div className="devr-text text-[18px]/[24px] font-[400] text-center">{TRACKCOMPONENT.tracks[0].path1}</div>
              </div>

            </div>
              <div className="smalls flex flex-col gap-3">
                <div className="small1 bg-white flex flex-col items-center justify-center gap-3 text-[18px]/[24px] font-[400]  w-[160px] h-[186px] rounded-[8px] lg:h-[186px] lg:w-[240px] md:h-[186px] md:w-[240px]">
                  <div className="">{TRACKCOMPONENT.tracks[0].coursea}</div>
                  <div className="">{TRACKCOMPONENT.tracks[0].courseb}</div>
                  <div className="">{TRACKCOMPONENT.tracks[0].coursec}</div>
                </div>
                <div className="small2 bg-white flex flex-col items-center justify-center gap-3 text-[18px]/[24px]  w-[160px] h-[116px] rounded-[8px] lg:h-[116px] lg:w-[240px] md:h-[116px] md:w-[240px]">
                <div className="">{TRACKCOMPONENT.tracks[0].coursed}</div>
                  <div className="">{TRACKCOMPONENT.tracks[0].coursef}</div>
                  
                </div>
              </div>
            </div>
            <div className="button text-right mr-6 md:mr-10  -mt-5 md:mt-3">
                <TrackBtn href='#' label='Learn more' icon={<BsArrowRight />}/>
            </div>
          </div>
          <div className="sub-2 rounded-[24px]  w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#FCD1FF] md:h-[612px] md:w-[584px] bg-[#F0E1DC]">
            <div className="header ml-5 flex flex-col gap-4">
              <div className="flex gap-3 items-center ">
                <div className="devg-svg">
                  <Image
                    width={48}
                    height={48}
                    src="/djet.svg"
                    alt="TECHATHON"
                    priority
                  />
                </div>
                <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                  {TRACKCOMPONENT.tracks[1].title}
                </div>
              </div>
              <div className="header-text">{TRACKCOMPONENT.tracks[1].subtitle}</div>
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
                <div className="devr-text flex flex-col text-center text-[18px]/[24px] font-[400]">
                <div className="">{TRACKCOMPONENT.tracks[1].path1}</div>
                  <div className="">{TRACKCOMPONENT.tracks[1].path2}</div>
                  <div className="">{TRACKCOMPONENT.tracks[1].path3}</div>
                </div>
              </div>
            </div>
              <div className="smalls  flex flex-col gap-3">
                <div className="small1 bg-white flex flex-col items-center justify-center text-center gap-3 text-[18px]/[24px] font-[400]   w-[160px] h-[196px] rounded-[8px] lg:h-[196px] lg:w-[240px] md:h-[196px] md:w-[240px]">
                <div className="">{TRACKCOMPONENT.tracks[1].coursea}</div>
                  <div className="">{TRACKCOMPONENT.tracks[1].courseb}</div>
                  <div className="">{TRACKCOMPONENT.tracks[1].coursec}</div>
                </div>
                <div className="small2 bg-white flex flex-col items-center justify-center text-center gap-3 text-[18px]/[24px]  w-[160px] h-[109px] rounded-[8px] lg:h-[109px] lg:w-[240px] md:h-[109px] md:w-[240px]">
                <div className="">{TRACKCOMPONENT.tracks[1].coursed}</div>
                <div className="">{TRACKCOMPONENT.tracks[1].coursef}</div>
                </div>
              </div>
            </div>
            <div className="button text-right mr-6 md:mr-10 -mt-5 md:mt-3">
                <TrackBtn href='#' label='Learn more' icon={<BsArrowRight />}/>
            </div>
          </div>
        </div>
        <div className="three"></div>
      </div>
    </div>
  );
};

export default TracksSection;
