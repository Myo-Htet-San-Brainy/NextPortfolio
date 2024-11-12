import React from "react";

import GradientText from "../../ui/OgBlueGradientText";
import BreadCrumb from "../../ui/Breadcrumb";
import { blogDetailsPageBreadcrumbs } from "../../lib/data.jsx";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMarkdownContent } from "../../lib/utils/markdown";
import { getMonthDiff } from "../../lib/utils/monthDiff";
import Markdown from "react-markdown";

const page = async ({ params }) => {
  const blogId = params.blogId;
  const { frontmatter, content } = getMarkdownContent(blogId);

  const { title, img, readTime, createdAt } = frontmatter;
  const monthsAgo = getMonthDiff(createdAt);
  return (
    <div className=" py-12">
      <div className="w-4/5 mx-auto max-w-screen-md">
        <BreadCrumb breadcrumbs={blogDetailsPageBreadcrumbs} />
        <div className="mt-8 text-3xl">
          <GradientText text={title} />
        </div>
        <div className="mt-8 font-bold  capitalize text-base-content">
          <p>{readTime}</p>
          <p>
            {monthsAgo === 0 ? "Just moment ago" : `${monthsAgo} months ago`}
          </p>
        </div>
        <Image
          src={img}
          alt={title}
          className="mt-8 rounded-lg"
          height={300}
          width={300}
        />
        <p className="mt-8 text-base-content font-light text-lg tracking-wide">
          <Markdown>{content}</Markdown>
        </p>
      </div>
    </div>
  );
};

export default page;
