"use client";

import React, { useState } from "react";
import Image from 'next/image'
import { AiOutlineMenuFold } from "react-icons/ai";
//import { MdRestaurantMenu } from "react-icons/md";
import { FiXOctagon } from "react-icons/fi";
import NavLink from './NavLink';
import  Button  from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
        setOpen(!open);
         console.log("menu toggled");
       };
  return (
    <div className="place-items-center font-[family-name:var(--font-montserrat)] grid grid-cols-2  md:grid-cols-3 lg:h-[48px] lg:w-[screen]">
      <div className="">
      <Image 
          src='/techathon.svg'
          alt='TECHATHON'  
          width={220}
          height={60}
          priority
            />
      </div>
    
    <div className="transition delay-200 duration-300 ease-in-out text-2xl text-[#663BC4] col-start-3 col-end-4 lg:hidden md:col-start-1 md:col-end-2 md:row-start-1 place-items-end grid-flow-row" onClick={toggleMenu}>
    {!open ? <AiOutlineMenuFold /> : <FiXOctagon />}
    </div>

     <div className={`lg:h-[48px]  font-light space-y-4 ${!open ? 'hidden' : 'block col-start-2 md:col-start-1'} lg:flex lg:items-center lg:justify-center lg:flex-row lg:space-x-[8px] lg:space-y-0 lg:w-[261px] lg:text-[18px]/[24px] lg:font-[400] lg:p-[4px]`}>
      <NavLink href="/" label="Home"/>
      <NavLink href="/aboutus" label="About Us"/>
      <NavLink href="/tracks" label="Tracks"/>
    </div>


    <div className={`text-[18px]/[24px] flex flex-col space-y-4 mt-10 ${!open ? 'hidden' : 'block col-start-2 '} lg:flex lg:flex-row lg:space-x-[16px] lg:w-[288px] md:block md:col-start-3 md:row-start-1 md:mt-0 lg:mt-0`}>
      <Button className="bg-[#481DA6] text-white w-[136px] h-[48px] lg:mt-4 rounded-sm" label="GET STARTED"/>
      <Button className="bg-gray-100 hidden text-[#663BC4] w-[136px] h-[48px]  md:hidden lg:block rounded-sm" label="SIGN IN"/>
    </div>
    </div>
  )
}

export default Navbar