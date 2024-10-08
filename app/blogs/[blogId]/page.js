import React from "react";
import { getBlog } from "../../lib/dataFetches";
import GradientText from "../../ui/OgBlueGradientText";
import BreadCrumb from "../../ui/Breadcrumb";
import { blogDetailsPageBreadcrumbs } from "../../lib/staticdata";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const blog = await getBlog(params.blogId);

  if (!blog) {
    notFound();
  }
  const { name, text, img, readTime, monthsAgo } = blog;

  return (
    <div className="bg-white py-12">
      <div className="w-4/5 mx-auto max-w-screen-md">
        <BreadCrumb breadcrumbs={blogDetailsPageBreadcrumbs} />
        <div className="mt-8 text-3xl">
          <GradientText text={name} />
        </div>
        <div className="mt-8">
          <p className="font-bold text-black capitalize">{readTime}</p>
          <p className="font-bold text-black capitalize">
            {monthsAgo === 0 ? "Just moment ago" : `${monthsAgo} months ago`}
          </p>
        </div>
        <img
          src={img}
          alt={"Blog image"}
          className="mt-8 w-3/4 h-64 object-cover rounded-lg"
        />
        <p className="mt-8 text-black font-light text-lg tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default page;
