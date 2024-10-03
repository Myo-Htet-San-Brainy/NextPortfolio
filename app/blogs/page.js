import React from "react";
import { getBlogs } from "../lib/dataFetches";
import SectionTitle from "../ui/SectionTitle";
import BlogCard from "../ui/BlogCard";

const page = async () => {
  const blogs = await getBlogs();
  // if (blogs.length === 0) {
  //   return <main>No blogs</main>;
  // }
  return (
    <main>
      <SectionTitle text={"Blogs"} color={"text-orange-400"} />
      <div className="w-[80%] max-w-screen-xl mx-auto pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog) => {
          return <BlogCard key={blog._id} {...blog} />;
        })}
      </div>
    </main>
  );
};

export default page;
