"use client";
import { fetchBlogs } from "@/lib/api-calls";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingIndicator";

export default function BlogDetails() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
  const { blogId } = useParams();

  const id = parseInt(blogId as string);

  const views = useSelector((state: RootState) => state.views[id || ""] || 0);

  const blogDetail = data?.filter((blog: any) => blog.id == id)[0];

  if (isLoading) return <Loading />;
  if (isError) return <p>Error fetching blogs</p>;

  console.log("blogDetail", blogDetail);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-4 w-[85%] md:w-[60%]">
          <p className="flex items-center gap-x-4 font-manrope text-grey ">
            <span className="font-manrope text-sm md:text-[16px] leading-[18px] md:leading-[28px] font-normal md:font-semibold">
              Posted on March 6th 2025
            </span>{" "}
            <span className="flex items-center gap-x-1 font-manrope text-sm md:text-[16px] leading-[18px] md:leading-[28px] font-normal md:font-semibold">
              <Eye />
              {views} Views
            </span>
          </p>
          <h2 className="font-manrope font-bold text-[25px] md:text-[48px] leading-[45px] md:leading-[67.2px]">
            {blogDetail?.Title}
          </h2>
          <p className="font-manrope font-medium text-[#232536] text-[16px] leading-[28px] ">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical
          </p>
        </div>
      </div>

      <Image
        src={"/assets/blogDetailPic.svg"}
        alt="blog-detail-pic"
        width={100}
        height={100}
        className="w-full bg-cover my-[64px]"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-4 w-[85%] md:w-[60%]">
          <h2 className="font-manrope font-bold text-[20px] md:text-[40px] leading-[31.5px] md:leading-[56px]">
            {blogDetail?.Title}
          </h2>
          <p className="font-manrope font-medium md:font-semibold text-justify text-[#232536] text-[16px] leading-[28px] ">
            {blogDetail?.Article}
          </p>

          <Image
            src={"/assets/blogDetailSecondPic.svg"}
            alt="blog-detail-pic"
            width={100}
            height={100}
            className="w-full bg-cover my-8"
          />
          <h2 className="font-manrope font-bold text-[20px] md:text-[40px] leading-[31.5px] md:leading-[56px] mt-10">
            {blogDetail?.Title}
          </h2>
          <p className="font-manrope font-medium md:font-semibold text-justify text-[#232536] text-[16px] leading-[28px] ">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis. `}
          </p>

          <p className="border-l-4 pl-4 border-[#1E1B1B] font-manrope font-medium text-[18px] leading-[31.5px] text-[#232536] my-8">
            {blogDetail?.Subtitle}
          </p>

          <p className="font-manrope font-medium md:font-semibold text-justify text-[#232536] text-[16px] leading-[28px] mb-[137px] ">
            {`Ut
            non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.`}
          </p>
        </div>
      </div>
    </div>
  );
}
