import { EVENTCOMPONENT } from '@/utils/data'
import React from 'react'
import Image from "next/image"

const EventsSection = () => {
  return (
    <div>
        <div className="3tree place-items-center mt-3">
            <div className="hHEAD flex flex-col mb-3 lg:w-[1200px] md:w-[712px] w-340px">
                <div className="header text-center text-[24px]/[32px] md:text-[40px]/[48px] font-[600]">{EVENTCOMPONENT.header}</div>
                <div className="content text-center text-[16px]/[24px] lg:text-[18px]/[24px] font-[400]">{EVENTCOMPONENT.title}</div>
            </div>
            <div className="MIDDLE flex flex-col lg:flex-row gap-6 mb-7">
                <div className="MID-1  shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                    <div className="svg-1 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px] ">
                        <Image
                                  width={348}
                                  height={182}
                                  src="/event-1.svg"
                                  alt="TECHATHON"
                                  priority
                                />
                    </div>
                    <div className="text-1 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                        <div className="subtitle-1 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{EVENTCOMPONENT.content[0].subtitle}</div>
                        <div className="description-1 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] ">{EVENTCOMPONENT.content[0].description}</div>
                    </div>
                </div>
                <div className="MID-2 shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                <div className="svg-2 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px]">
                    <Image
                              width={348}
                              height={182}
                              src="/event-2.svg"
                              alt="TECHATHON"
                              priority
                            />
                </div>
                <div className="text-2 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                <div className="subtitle-2 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{EVENTCOMPONENT.content[1].subtitle}</div>
                        <div className="description-2 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] ">{EVENTCOMPONENT.content[1].description}</div>
                </div>
                </div>
                <div className="MID-3 shadow-2xl flex flex-col items-center w-[340px] h-[326px] md:w-[380px] md:h-[364px] lg:h-[372px] rounded-[24px]">
                <div className="svg-3 w-[306px] h-[182px] mt-2  md:w-[348px] md:h-[182px] md-rounded-[8px]">
                    <Image
                              width={348}
                              height={182}
                              src="/event-3.svg"
                              alt="TECHATHON"
                              priority
                            />
                </div>
                <div className="text-3 mt-3 lg:mt-4 text-start w-[308px] h-[44px] md:w-[345px] md:h-[72px]">
                <div className="subtitle-3 my-2 font-[500]  md:text-[20px]/[28px] md:font-[600]">{EVENTCOMPONENT.content[2].subtitle}</div>
                        <div className="description-3 text-[14px]/[20px] md:text-[18px]/[24px] font-[400] ">{EVENTCOMPONENT.content[2].description}</div>
                </div>
                </div>
            </div>
            <div className="END flex flex-col lg:gap-8 items-center justify-center lg:flex-row">
            <div className="END-1 flex justify-center items-center w-[243.6px] h-[506.4px] md:w-[406px] md:h-[844px] ">
            <div className="svg">
                                          <Image
                                            width={408}
                                            height={844}
                                            src="/mbevent.svg"
                                            alt="TECHATHON"
                                            priority
                                          />
                                        </div>
            </div>
            <div className="END-2 flex flex-col items-center justify-center gap-6 text-white w-[340px] h-[548px] md:w-[563px] md:h-[330px] bg-[#1B0028] rounded-tr-[80px] rounded-bl-[80px]">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex gap-3 items-center">
                                        <div className="svg">
                                          <Image
                                            width={48}
                                            height={48}
                                            src="/ev1.svg"
                                            alt="TECHATHON"
                                            priority
                                          />
                                        </div>
                                        <div className="kik text-[20px]/[28px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                                         PRE-MENTORSHIP
                                        </div>
                                      </div>
                                        <div className="Duration pl-5 md:pl-0">Duration: 6WEEKS</div>
                                        <div className="Price pl-5 md:pl-0">FREE</div>
                    </div>
                    <div className=" ">
                        <div className="flex gap-3 items-center">
                                        <div className="svg">
                                          <Image
                                            width={48}
                                            height={48}
                                            src="/ev2.svg"
                                            alt="TECHATHON"
                                            priority
                                          />
                                        </div>
                                        <div className="kik text-[20px]/[28px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                                        MENTORSHIP
                                        </div>
                                      </div>
                                        <div className="Duration pl-5 md:pl-0">Duration: 6WEEKS</div>
                                        <div className="Price pl-5 md:pl-0">FEE: N10,000</div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <div className="">
                    <div className="flex gap-3 items-center">
                                    <div className="svg">
                                      <Image
                                        width={48}
                                        height={48}
                                        src="/ev3.svg"
                                        alt="TECHATHON"
                                        priority
                                      />
                                    </div>
                                    <div className="kik text-[20px]/[28px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                                      CERTIFICATE
                                    </div>
                                  </div>
                                        <div className="Price pl-5 md:pl-0">FEE: N3,500</div>
                    </div>
                    <div className="">
                        <div className="flex gap-3 items-center">
                                        <div className="svg">
                                          <Image
                                            width={48}
                                            height={48}
                                            src="/ev4.svg"
                                            alt="TECHATHON"
                                            priority
                                          />
                                        </div>
                                        <div className="kik text-[20px]/[28px] font-[500] text-white underline underline-offset-[11px] decoration-4">
                                          JOBBERMAN
                                        </div>
                                      </div>
                                        <div className="Price pl-5 md:pl-0">CERTIFICATE: FREE</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EventsSection