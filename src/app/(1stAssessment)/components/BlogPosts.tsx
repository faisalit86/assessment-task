"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchBlogs } from "@/lib/api-calls";
import { useQuery } from "@tanstack/react-query";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Loading from "./LoadingIndicator";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { incrementView } from "@/store/viewsSlice";

export default function BlogPosts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const dispatch = useDispatch();
  const viewCounts = useSelector((state: RootState) => state.views);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleBlogs = data?.slice(0, visibleCount);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error fetching blogs</p>;

  return (
    <div className="my-[100px]">
      <div className="flex flex-wrap gap-6 items-center justify-center  w-[96%]">
        {visibleBlogs.map(
          (blog: { id: number; Article: string; Title: string }) => {
            const isExpanded = expandedCard === blog.id;
            const shortText =
              blog.Article.length > 120
                ? blog.Article.slice(0, 120) + "..."
                : blog.Article;

            return (
              <Link
                href={`/blog/${blog.id}`}
                className="cursor-pointer"
                key={blog.id}
                onClick={() => dispatch(incrementView(blog.id.toString()))} // 🔥 Increment view count on click
              >
                <Card className="w-[405px] border-none shadow-none  p-4 flex flex-col">
                  {/* Blog Image */}
                  <Image
                    src={"/assets/blogPost1.svg"}
                    alt="blog-post"
                    width={100}
                    height={340}
                    className="w-full h-[200px] object-cover rounded-md"
                  />

                  {/* Blog Metadata */}
                  <div className="mt-4 flex justify-between items-center font-manrope font-semibold text-grey text-[16px] leading-[28px]">
                    <span>Posted on March 6th, 2025</span>
                    <span className="flex items-center gap-1">
                      <Eye size={18} />
                      {viewCounts[blog.id] || 0} Views
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h2 className="mt-2 font-bold font-manrope text-[32px] leading-[48px] h-[56px] overflow-hidden">
                    {blog.Title}
                  </h2>

                  {/* Blog Description */}
                  <p className="text-[16px] leading-[28px] font-medium text-[#232536] mt-2">
                    {isExpanded ? blog.Article : shortText}
                    {blog.Article.length > 120 && (
                      <button
                        className="text-blue-600 font-semibold mt-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedCard(isExpanded ? null : blog.id);
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                </Card>
              </Link>
            );
          }
        )}
      </div>

      <div className="flex items-center justify-center">
        <Button
          onClick={() => setVisibleCount(visibleCount + 9)}
          disabled={visibleCount >= data.length}
          className="w-[170px] h-[64px] mt-[125px] font-manrope font-semibold text-[18px] leading-[31.5px] rounded-[12px]"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
