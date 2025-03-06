import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-full md:h-[624px]">
      <div className="relative w-full h-[345px] md:h-full md:w-1/2 ">
        <Image
          src={"/assets/heroImg.svg"}
          alt="blog-image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-rangoon-green opacity-[80%] flex items-center justify-center">
          <h1 className="text-white font-manrope text-[64px] font-extrabold leading-[84px] tracking-tight">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center pl-9 bg-rangoon-green text-white p-8">
        <h2 className="text-[32px] md:text-[40px] leading-[35px] md:leading-[56px] font-bold -tracking-[3%] mb-4 ">
          <span className="block">Diagnose Car Problems If You </span>
          <span className="block">{`Don’t Know Much About Cars`}</span>
        </h2>
        <p className="font-manrope font-medium text-[18px] leading-[31.5px] max-w-[80%] ">
          We provide a full range of front-end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes a full range of
          front-end mechanical services.
        </p>
      </div>
    </section>
  );
}
