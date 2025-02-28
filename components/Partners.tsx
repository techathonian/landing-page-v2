import { FOOTERCOMPONENT } from "@/utils/data";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex flex-col place-items-center items-center justify-center text-center gap-3">
      <div className="w-[328px] h-[32px] lg:w-[584px] lg:h-[36px] block md:hidden lg:block text-[28px]/[32px] lg:text-[32px]/[36px]">
        {FOOTERCOMPONENT.title}
      </div>
      <div className="w-[241.5px] h-[117.5px] lg:w-[584px] lg:h-[36px] md:mb-28 place-items-center">
        <Image
          width={322}
          height={157}
          src="/jobberman.svg"
          alt="TECHATHON"
          priority
        />
      </div>
      <div className="text-center w-[340px] h-[256px] md:w-[600px] md:h-[184px] flex flex-col gap-6">
        <h1 className="text-center text-[24px]/[32px] md:text-[32px]/[36px]">
          {FOOTERCOMPONENT.subtitle}
        </h1>
        <p className="text-center text-[16px]/[24px] lg:text-[18px]/[24px]">
          {FOOTERCOMPONENT.description}
        </p>
      </div>
      <div className="button">
        <Button
          className="w-[136px] h-[48px] text-[18px]/[24px] bg-[#663BC4] text-white rounded-[4px]"
          label="GET STARTED"
        />
      </div>
    </div>
  );
};

export default Partners;
