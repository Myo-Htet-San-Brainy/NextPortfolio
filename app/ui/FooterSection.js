import React from "react";
import { socialLinks } from "../lib/staticData";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="p-14 text-center border-t border-gray-300">
      <div className="w-fit mx-auto flex space-x-7">
        {socialLinks.map((socialIcon) => {
          const { id, link, Component } = socialIcon;
          return (
            <Link
              key={id}
              href={link}
              target="_blank"
              className="text-2xl text-orange-400 hover:text-blue-400 transition-all duration-200"
            >
              <Component />
            </Link>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm font-bold">
        <div>
          <a
            href="mailto:myohtetsandrinksmilk@gmail.com"
            className="text-orange-400 hover:text-blue-400 transition-all duration-200"
          >
            myohtetsan231@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:+66994765425"
            className=" text-orange-400 hover:text-blue-400 transition-all duration-200"
          >
            +66994765425
          </a>
        </div>
      </div>

      <p className="mt-4 font-bol text-sm font-bold text-orange-400">
        &copy; {new Date().getFullYear()} Brainy
      </p>
    </footer>
  );
};

export default FooterSection;
