"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import GradientText from "./OgBlueGradientText";
import { navLinks } from "../lib/staticData.js";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const path = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  //theme related code
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      {/* Navbar for medium and large screens */}
      <nav className="hidden md:flex w-full py-4 px-6 justify-between items-center border-b border-blue-400">
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
                  className={clsx(
                    "text-lg text-blue-400 hover:text-orange-400 transition-all duration-200",
                    {
                      underline: path === pathname,
                      "": path !== pathname,
                    }
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleTheme}
          className="btn bg-blue-400 text-white hover:bg-orange-400 transition-all duration-200"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </nav>

      {/* Navbar for small screens */}
      <nav className="md:hidden flex items-center justify-between p-4 border-b border-blue-400">
        <div className="text-xl">
          <GradientText text={"Brainy"} />
        </div>
        <div className="flex gap-3">
          <button
            onClick={toggleTheme}
            className="btn bg-blue-400 text-white hover:bg-orange-400 transition-all duration-200"
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>

          <button
            onClick={toggleNavbar}
            className="text-blue-400 focus:outline-none"
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
        </div>
      </nav>

      {/* Sliding menu for small screens */}
      <div
        className={clsx(
          "md:hidden fixed top-0 left-0 h-full w-64 text-white bg-blue-400  transform transition-transform duration-300 ease-in-out z-50",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
      >
        <div className="p-4  text-xl font-bold">Menu</div>
        <ul className="space-y-4 p-4">
          {navLinks.map((navLink) => {
            const { id, pathname, name } = navLink;
            return (
              <li key={id}>
                <Link
                  href={pathname}
                  className=" hover:text-orange-400 transition-all duration-200"
                >
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
