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
        <div className="one flex flex-col gap-[16px] border-4 ">
          <div className="head text-center font-[600] text-[24px]/[32px] md:text-[32px]/[36px]  lg:text-[40px]/[48px]">
            {TRACKCOMPONENT.title}
          </div>
          <div className="body text-center text-[16px]/[24px] lg:text-[18px]/[24px]">
            {TRACKCOMPONENT.content}
          </div>
        </div>
        <div className="two flex flex-col gap-5 lg:flex-row ">
          <div className="sub-1 border-4 w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#E6EBFF] md:h-[612px] md:w-[584px] md:bg-[#E6EBFF] bg-[#ECF3FB]">
            <div className="header ml-5  flex flex-col gap-4">
              <div className="flex gap-3 items-center border-4">
                <div className="svg">
                  <Image
                    width={48}
                    height={48}
                    src="/cjet.svg"
                    alt="TECHATHON"
                    priority
                  />
                </div>
                <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                  {TRACKCOMPONENT.tracks[0].title}
                </div>
              </div>
              <div className="header-text">In-demand Coding tracks</div>
            </div>
            <div className="flexx bg-green-300 border-4 h-[415px]"></div>
            <div className="button">
                <TrackBtn href='#' label='Learn more' icon={<BsArrowRight />}/>
            </div>
          </div>
          <div className="sub-2 border-4 w-[340px] h-[514px] lg:w-[584px] lg:h-[612px] lg:bg-[#FCD1FF] md:h-[612px] md:w-[584px] bg-[#F0E1DC]">
            <div className="header ml-5 flex flex-col gap-4">
              <div className="flex gap-3 items-center border-4">
                <div className="svg">
                  <Image
                    width={48}
                    height={48}
                    src="/djet.svg"
                    alt="TECHATHON"
                    priority
                  />
                </div>
                <div className="kik text-[20px]/[28px] font-[500] text-[#350100] underline underline-offset-[11px] decoration-4">
                  {TRACKCOMPONENT.tracks[0].title}
                </div>
              </div>
              <div className="header-text">In-demand Coding tracks</div>
            </div>
            <div className="flexx bg-green-300 border-4 h-[415px]">
              <div className="big"></div>
              <div className="smalls">
                <div className="small1"></div>
                .small2
              </div>
            </div>
            <div className="button">
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
