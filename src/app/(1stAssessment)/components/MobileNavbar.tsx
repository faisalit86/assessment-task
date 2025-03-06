import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_MENU_ITEMS } from "@/lib/constants";
import { SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger className="w-full flex justify-between  mx-4">
        <SquareMenu size={30} />
        <Link href={"/blog"}>
          <Image
            src={"/assets/NavLogo.svg"}
            alt="nav-logo"
            width={100}
            height={100}
            className="mb-4"
          />
        </Link>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Link href={"/blog"}>
          <Image
            src={"/assets/NavLogo.svg"}
            alt="nav-logo"
            width={100}
            height={100}
            className="mb-4 relative top-[3px]"
          />
        </Link>
        <ul className="flex flex-col items-start gap-y-6 ">
          {NAV_MENU_ITEMS.map((menu) => {
            return (
              <li
                key={menu?.id}
                className="font-manrope font-semibold text-[16px] leading-[28px]"
              >
                {menu?.pageName}
              </li>
            );
          })}
        </ul>
        {/* <SheetHeader>
            <SheetTitle></SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
      </SheetContent>
    </Sheet>
  );
}
