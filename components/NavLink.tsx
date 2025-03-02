"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/utils/types"

const NavLink: React.FC<NavLinkProps> = ({href, label,icon }) => {
    const pathname = usePathname()
  return (
    <div>
        <Link href={href} className={` lg:w-36 text-[#663BC4] ${pathname === href ? " text-[#481DA6] " : ""} hover:text-[#a189d6]`}> 
         {icon}{label}
        </Link>
    </div>
  )
}

export default NavLink