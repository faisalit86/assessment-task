import { NAV_MENU_ITEMS } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto my-[31px]">
      <div className="hidden md:flex md:mx-6 justify-between items-center">
        <Link href={"/blog"}>
          <Image
            src={"/assets/NavLogo.svg"}
            alt="nav-logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex items-center gap-x-[40px] ">
          {NAV_MENU_ITEMS.map((menu) => {
            return (
              <Link key={menu?.id} href={menu.path}>
                <li className="font-manrope font-semibold text-[16px] leading-[28px]">
                  {menu?.pageName}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}
