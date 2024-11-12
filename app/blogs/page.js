import React from "react";
import BlogCard from "../ui/BlogCard";
import { getNamesOfMdFiles, getMarkdownContent } from "../lib/utils/markdown";

export const revalidate = 3600;

const page = async () => {
  //retrieving blogs data
  const blogFilenames = getNamesOfMdFiles();
  const blogs = blogFilenames.map((blogFilename) => {
    const { frontmatter } = getMarkdownContent(blogFilename);
    const { title, img, readTime, createdAt } = frontmatter;
    return {
      _id: blogFilename.replace(".md", ""),
      title,
      img,
      readTime,
      createdAt,
    };
  });

  if (blogs.length === 0) {
    return (
      <main className="py-40">
        <h1 className="text-xl text-center text-orange-400 ">
          No Blogs For Now
        </h1>
      </main>
    );
  }
  return (
    <main>
      <div className="w-[80%] max-w-screen-xl mx-auto py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog) => {
          return <BlogCard key={blog._id} {...blog} />;
        })}
      </div>
    </main>
  );
};

export default page;
