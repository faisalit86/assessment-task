import { Eye, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FeaturedBlog() {
  return (
    <div className="flex items-center justify-center bg-white-smoke w-full h-full md:h-[633px] ">
      <div className=" w-[90%] md:w-full xl:w-[70%] bg-white h-full xl:h-[402px] my-[40px] md:my-[116px] py-[16px] md:py-[32px] px-[10px] md:px-[44px] ">
        <div className="flex flex-col md:flex-row gap-x-4">
          <Image
            src={"/assets/featuredBlogImg.svg"}
            alt="blog-img"
            width={100}
            height={100}
            className="h-[130px] md:h-[330px] w-[140px] md:w-[352px] bg-cover"
          />
          <div className="flex flex-col w-full justify-between">
            <div className="flex justify-between ">
              <p className="flex gap-x-4 font-manrope text-grey ">
                <span className="font-manrope text-sm xl:text-[16px] leading-[28px] font-normal xl:font-semibold">
                  Posted on March 6th 2025
                </span>{" "}
                <span className="flex  items-center gap-x-1 font-manrope text-sm xl:text-[16px] leading-[28px] font-normal xl:font-semibold">
                  <Eye />
                  563 Views
                </span>
              </p>
              <span className="uppercase hidden xl:block text-[#FF6433]  font-manrope text-[16px] leading-[28px] tracking-[4px] ">
                Featured
              </span>
            </div>
            <h2 className="font-manrope font-bold text-[20px] xl:text-[40px] leading-[35px] xl:leading-[56px] tracking-tight">
              Should I Buy a New Car or Lease a New Car in 2021?
            </h2>
            <p className="font-manrope text-[16px] leading-[28px] font-medium text-grey">
              {`We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.`}
            </p>
            <p className=" flex justify-between items-center gap-x-1 font-manrope font-semibold text-[16px] leading-[31.5px]">
              <span className="flex items-center gap-x-1">
                Read More <MoveRight />
              </span>
              <span className="uppercase block md:block xl:hidden text-[#FF6433]  font-manrope text-[12px] leading-[18px] tracking-[2px] ">
                Featured
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
