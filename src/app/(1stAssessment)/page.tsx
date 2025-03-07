import BlogPosts from "./components/BlogPosts";
import FeaturedBlog from "./components/FeaturedBlog";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedBlog />
      <BlogPosts />
    </div>
  );
}
