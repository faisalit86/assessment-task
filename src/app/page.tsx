import Link from "next/link";
import React from "react";

export default function AllAssessmentsLink() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mx-4">
      <div className="bg-gray-500 py-6 px-4 rounded-xl ">
        <h2 className=" uppercase text-white-smoke font-manrope font-bold text-[20px] md:text-[40px] leading-[31.5px]">
          All Assessments Links
        </h2>
      </div>

      <div className="flex flex-col gap-y-5 mt-[40px]">
        <Link
          href={"/blog"}
          className="font-bold uppercase text-[20px] md:text-[40px] underline"
        >
          1. Blog Assessment
        </Link>
        <Link
          href={"/property-search"}
          className="font-bold uppercase text-[20px] md:text-[40px] underline"
        >
          2. Property Search Tool
        </Link>
        <Link
          href={"/chatbot"}
          className="font-bold uppercase text-[20px] md:text-[40px] underline"
        >
          2. Chatbot Assessment
        </Link>
      </div>
    </div>
  );
}
