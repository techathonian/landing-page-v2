import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={`lg:w-36 text-[#663BC4] ${
          pathname === href ? " text-[#481DA6] " : ""
        } hover:text-[#a189d6]`}
      >
        {icon && label ? (
          <>
            {icon}
            {label}
          </>
        ) : (
          label
        )}
      </Link>
    </div>
  );
};

export default NavLink;
