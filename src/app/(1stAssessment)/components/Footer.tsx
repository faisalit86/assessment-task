import { NAV_MENU_ITEMS } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const icons = [
    "/assets/facebook.svg",
    "/assets/twitter.svg",
    "/assets/instagram.svg",
    "/assets/linkedin.svg",
  ];
  const contactInfo = [
    {
      id: 1,
      label: "Help Line Number",
      value: "1800 265 24 52",
    },
    {
      id: 2,
      label: "Address",
      value: "NH 234 Public Square, San Francisco 65368",
    },
    {
      id: 3,
      label: "We are open",
      value: "Monday to Friday 9:00 AM to 10:00 AM",
    },
  ];

  return (
    <footer className="bg-rangoon-green text-white">
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-y-0  justify-between w-[80%] m-auto py-[100px]  ">
        <div>
          <h2 className="font-manrope font-bold text-[32px] md:text-[48px] leading-[67.2px] tracking-[1px] relative bottom-[9px]">
            <span className="block">Get in touch with us</span>{" "}
            <span className="block">for your service</span>
          </h2>
          <ul className="flex gap-x-[23.67px] items-center mt-[64px]">
            {icons.map((icon, idx) => {
              return (
                <li key={idx}>
                  <Image src={icon} alt="social-icon" width={24} height={24} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-6">
          {contactInfo.map((contact) => {
            return (
              <div key={contact.id} className="flex flex-col">
                <span className="block font-manrope font-medium text-[18px] leading-[31.5px] text-grey ">
                  {contact.label}
                </span>
                <span className="block font-manrope font-semibold text-[20px] leading-[36px]">
                  {contact.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#1E1B1B] flex flex-col md:flex-row justify-around items-center py-[64px]">
        <Link href={"/blog"}>
          <Image
            src={"/assets/footerLogo.svg"}
            alt="footer-logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex  flex-col md:flex-row items-center gap-x-[40px] ">
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
        <h2 className="font-manrope font-semibold text-[16px] leading-[28px] text-grey">
          @ Copyright Finsweet 2025
        </h2>
      </div>
    </footer>
  );
}
