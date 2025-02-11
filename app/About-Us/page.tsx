import React from 'react'
import CoreSection from '@/components/CoreSection'
import { ABOUTUSCOMPONENT, EVENTSCOMPONENT, GUIDEPRINCIPLECOMPONENT, KEYPERSONCOMPONENT } from '@/utils/data'

const AboutUs = () => {
  return (
    <div>
       <div className="flex flex-col lg:gap-8 gap-12  place-items-center mt-5">
        <div className="About flex items-center justify-center text-[28px]/[36px] font-[600] lg:bg-[#CFD0D4] lg:h-[120px] w-full lg:text-[40px]/[48px] text-[#481DA6] md:h-[60px] bg-[#E0E0E0] md:text-[32px]/[36px] uppercase lg:uppercase md:capitalize ">{ABOUTUSCOMPONENT.title}</div>
        <div className="intro  mt-4 text-center lg:w-[1205px] md:w-[712px] w-[343px]  items-center justify-center text-[16px]/[24px] font-[400] md:text-[18px]/[24px]   lg:text-[#000] text-[#481DA6]">{ABOUTUSCOMPONENT.content}</div>
        <div className="mis-vision lg:mt-4 flex flex-col gap-5 items-center lg:gap-24 lg:justify-between text-center lg:text-start  lg:flex-row w-[343px] h-[358px] lg:w-[1205px] lg:h-[132px] md:w-[712px] md:h-[270px]">
            <div className="lg:w-[585px]">
                <h1 className='md:text-[32px]/[36px]'>{ABOUTUSCOMPONENT.subtitle[0].title}</h1>
                <p className='md:text-[18px]/[24px] text-[16px]/[24px] lg:text-[#000] text-[#141414]'>{ABOUTUSCOMPONENT.subtitle[0].content}</p>
            </div>
            <div className="lg:w-[585px]">
                <h1 className='md:text-[32px]/[36px]'>{ABOUTUSCOMPONENT.subtitle[1].title}</h1>
                <p className='md:text-[18px]/[24px] lg:text-[#000] text-[16px]/[24px] text-[#141414]'>{ABOUTUSCOMPONENT.subtitle[1].content}</p>
            </div>
        </div>
        <div className="corecoponent lg:-mt-10 md:-mt-28 -mt-44">
            <CoreSection />
        </div>
        <div className="guiprinciple my-3 principle flex flex-col gap-3 w-[343px] h-[570px] md:w-[712px] md:h-[367px] lg:w-[1200px] lg:h-[333px]">
            <h1 className='text-[40px]/[48px] font-[600] text-center'>{GUIDEPRINCIPLECOMPONENT.title}</h1>
            <p className='flex flex-col gap-8'>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{GUIDEPRINCIPLECOMPONENT.principles[0].title}</span>: <span>{GUIDEPRINCIPLECOMPONENT.principles[0].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{GUIDEPRINCIPLECOMPONENT.principles[1].title}</span>: <span>{GUIDEPRINCIPLECOMPONENT.principles[1].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{GUIDEPRINCIPLECOMPONENT.principles[2].title}</span>: <span>{GUIDEPRINCIPLECOMPONENT.principles[2].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{GUIDEPRINCIPLECOMPONENT.principles[3].title}</span>: <span>{GUIDEPRINCIPLECOMPONENT.principles[3].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{GUIDEPRINCIPLECOMPONENT.principles[4].title}</span>: <span>{GUIDEPRINCIPLECOMPONENT.principles[4].content}</span></p>
                <span></span>
            </p>
        </div>
        <div className="keyperson mt-3 flex flex-col gap-3 w-[343px]  md:w-[712px] lg:w-[1200px] ">
            <h1 className='text-[40px]/[48px] font-[600] text-center'>{KEYPERSONCOMPONENT.title}</h1>
            <p>{KEYPERSONCOMPONENT.description}</p>
            <p className='flex flex-col gap-8'>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{KEYPERSONCOMPONENT.persons[0].title}</span>: <span>{KEYPERSONCOMPONENT.persons[0].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{KEYPERSONCOMPONENT.persons[1].title}</span>: <span>{KEYPERSONCOMPONENT.persons[1].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{KEYPERSONCOMPONENT.persons[2].title}</span>: <span>{KEYPERSONCOMPONENT.persons[2].content}</span></p>
                <p><span className='lg:twxt-[20px]/[28px] font-[600]'>{KEYPERSONCOMPONENT.persons[3].title}</span>: <span>{KEYPERSONCOMPONENT.persons[3].content}</span></p>
                <span></span>
            </p>
        </div>
        <div className="summary flex flex-col  w-[343px]  md:w-[712px] lg:w-[1200px]">{KEYPERSONCOMPONENT.summary}</div>
       
        <div className="events pt-[64px] pr-[16px] pb-[64px] pl-[16px] bg-[#1B0028] gap-[48px] text-white flex flex-col items-center justify-center lg:flex-row w-screen h-[512px] md:h-[380px] lg:w-[1200px]">
            <div className="w-[343px] text-[64px]/[72px] text-center md:w-[712px] lg:w-[455px] font-[600]">{EVENTSCOMPONENT.title}</div>
            <div className="flex flex-col gap-[30px] items-center justify-center lg:items-start w-[343px] lg:text-start md:w-[712px] lg:w-[585px]">
                <h1 className='text-[32px]/[36px] font-[600]'>{EVENTSCOMPONENT.subtitle}</h1>
                <p className='text-[18px]/[24px] font-[400]'>{EVENTSCOMPONENT.description}</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutUs