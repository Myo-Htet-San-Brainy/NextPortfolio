import React from "react";
import { getMonthDiff } from "../lib/utils/monthDiff";
import { trimText } from "../lib/utils/trimText";
import Link from "next/link";

const BlogCard = ({ name, text, img, readTime, createdAt }) => {
  const monthsAgo = getMonthDiff(createdAt);
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-orange-400">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body text-white">
        <div className=" flex justify-between text-sm">
          <h1>{readTime}</h1>
          <h1>
            {monthsAgo === 0 ? "Just moment ago" : `${monthsAgo} months ago`}
          </h1>
        </div>
        <h2 className="mt-2 h-16 card-title font-bold">
          {trimText(name) ? trimText(name) + " . . ." : name}
        </h2>
        <p className="font-light text-lg tracking-wide">
          {trimText(text) ? trimText(text, 200) + " . . ." : text}
        </p>
        <Link
          href={"/"}
          className="btn mt-2 text-orange-500 bg-white text-base hover:text-white hover:bg-orange-300 transition-all duration-300 border-none"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
