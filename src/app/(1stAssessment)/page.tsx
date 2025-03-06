import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedBlog from "./components/FeaturedBlog";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/lib/api-calls";
import BlogPosts from "./components/BlogPosts";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedBlog />
      <BlogPosts />
    </div>
  );
}
