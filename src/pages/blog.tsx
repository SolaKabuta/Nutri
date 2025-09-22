import Hero from "@/components/sections/blog/Hero";
import BlogsCard from "@/components/ui/blog/BlogsCard";

interface Blog {
  propName: string;
}

const Blog: React.FC<Blog> = () => {
  return (
    <div>
      <Hero/>
      <BlogsCard/>
    </div>
  );
};

export default Blog;