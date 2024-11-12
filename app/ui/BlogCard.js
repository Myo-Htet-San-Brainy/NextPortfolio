import React from "react";
import { getMonthDiff } from "../lib/utils/monthDiff";
import { trimText } from "../lib/utils/trimText";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ _id, title, img, readTime, createdAt }) => {
  const monthsAgo = getMonthDiff(createdAt);

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-orange-400">
      <figure>
        <Image src={img} alt={title} width={500} height={500} />
      </figure>
      <div className="card-body text-white">
        <div className=" flex justify-between text-sm">
          <h1>{readTime}</h1>
          <h1>
            {monthsAgo === 0 ? "Just moment ago" : `${monthsAgo} months ago`}
          </h1>
        </div>
        {/* here go see trimText func first to understand below code */}
        <h2 className="mt-2 h-16 card-title font-bold">
          {trimText(title) ? trimText(title) + " . . ." : title}
        </h2>

        <Link
          href={`/blogs/${_id}`}
          className="btn mt-2 text-orange-500 bg-white text-base hover:text-white hover:bg-orange-300 transition-all duration-300 border-none"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
