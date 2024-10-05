import React from "react";

const Breadcrumb = ({
  breadcrumbs = [
    { href: "/", displayText: "home" },
    { href: "/", displayText: "home" },
  ],
}) => {
  return (
    <div className="breadcrumbs text-lg">
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <a
              href={breadcrumb.href}
              className="text-orange-400 hover:text-blue-400 transition-all duration-200"
            >
              {breadcrumb.displayText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
