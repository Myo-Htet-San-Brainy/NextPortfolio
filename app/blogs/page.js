import React from "react";
import { getBlogs } from "../lib/dataFetches";
import SectionTitle from "../ui/SectionTitle";

const page = async () => {
  const blogs = await getBlogs();
  // if (blogs.length === 0) {
  //   return <main>No blogs</main>;
  // }
  return (
    <main>
      <SectionTitle text={"Blogs"} color={"text-orange-400"} />
    </main>
  );
};

export default page;
