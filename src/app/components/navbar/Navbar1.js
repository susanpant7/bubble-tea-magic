"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar1 = ({ toggleDarkMode, darkMode }) => {
  const [nav, setNav] = useState(false);

  const onDarkModeToggle = () => {
    setNav(false);
    toggleDarkMode();
  };
  const links = [
    {
      id: 1,
      link: "/",
      label: "Home",
    },
    {
      id: 2,
      link: "menu",
      label: "Menu",
    },
    // {
    //   id: 3,
    //   link: "services",
    //   label: "Services",
    // },
    {
      id: 4,
      link: "contact",
      label: "Contact",
    },
  ];

  return (
    <nav className=" relative w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/btm-logo.svg"
            alt="Example Image"
            className="h-20 w-20"
            width={100}
            height={100}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap bold3DText">
            Bubble Tea Magic
          </span>
        </div>

        <ul className="hidden md:flex items-center">
          <li className="mr-4">
            <div className="dark-mode-button rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
              {darkMode ? (
                <CiLight onClick={toggleDarkMode} className="text-gray-200" />
              ) : (
                <MdDarkMode
                  onClick={toggleDarkMode}
                  className="text-gray-200"
                />
              )}
            </div>
          </li>
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium bold3DText hover:scale-105 hover:text-blue duration-200 link-underline"
            >
              <Link href={link} className="text-xl">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, label }) => (
              <>
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {label}
                  </Link>
                </li>
              </>
            ))}
            <li>
              <div className="dark-mode-button rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                {darkMode ? (
                  <CiLight
                    onClick={onDarkModeToggle}
                    className="text-gray-200"
                  />
                ) : (
                  <MdDarkMode
                    onClick={onDarkModeToggle}
                    className="text-gray-200"
                  />
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;
