"use client";
import React, { useState } from "react";
import clsx from "clsx";
import GradientText from "./OgBlueGradientText";
import { navLinks } from "../lib/staticdata";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar for medium and large screens */}
      <nav className="hidden md:flex w-full py-4 px-6 justify-between items-center border-b border-gray-300">
        <div className="text-3xl italic">
          <GradientText text={"Brainy"} />
        </div>
        <ul className="flex space-x-6">
          {navLinks.map((navLink) => {
            const { id, pathname, name } = navLink;
            return (
              <li key={id}>
                <Link
                  href={pathname}
                  className="text-lg text-orange-400 hover:text-blue-400 transition-all duration-200"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Navbar for small screens */}
      <nav className="md:hidden flex items-center justify-between p-4 ring-1 ring-gray-400">
        <div className="text-xl">
          <GradientText text={"Brainy"} />
        </div>
        <button
          onClick={toggleNavbar}
          className="text-orange-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Sliding menu for small screens */}
      <div
        className={clsx(
          "md:hidden fixed top-0 left-0 h-full w-64 text-white bg-orange-400  transform transition-transform duration-300 ease-in-out z-50",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
      >
        <div className="p-4  text-xl font-bold">Menu</div>
        <ul className="space-y-4 p-4">
          {navLinks.map((navLink) => {
            const { id, pathname, name } = navLink;
            return (
              <li key={id}>
                <Link href={pathname} className=" hover:text-blue-400">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay when navbar is open */}
      {isOpen && (
        <div
          onClick={toggleNavbar}
          className="md:hidden fixed inset-0 bg-black opacity-50"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
