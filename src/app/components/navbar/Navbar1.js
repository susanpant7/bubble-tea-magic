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

  const DarModeButton = () => {
    return (
      <div className="dark-mode-button rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
        {darkMode ? (
          <CiLight onClick={toggleDarkMode} className="text-gray-200" />
        ) : (
          <MdDarkMode onClick={toggleDarkMode} className="text-gray-200" />
        )}
      </div>
    );
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
    <nav className="relative w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <Image
            src="/btm-logo.svg"
            alt="Example Image"
            className="h-16 w-16"
            width={100}
            height={100}
          />
          <span className="text-2xl font-semibold whitespace-nowrap text-white">
            Bubble Tea Magic
          </span>
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          {links.map(({ id, link, label }) => (
            <li key={id} className="px-4">
              <Link
                href={link}
                className="text-lg text-white hover:text-gray-300 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <darModeButton />
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setNav(!nav)}
            className="text-gray-300 focus:outline-none"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* on small screen size */}
      {nav && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-center">
          {links.map(({ id, link, label }) => (
            <li key={id} className="px-4 py-3 text-lg text-white">
              <Link onClick={() => setNav(!nav)} href={link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar1;
