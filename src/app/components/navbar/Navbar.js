"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarLinks } from "./Links";
import { SiGoogle } from "react-icons/si";

import { Login, Logout } from "./Auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleImageClick = (event) => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSignIn = async () => {
    Login();
  };

  const handleSignOut = async () => {
    await Logout();
  };

  useEffect(() => {
    const scrollTrigger = 25;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= scrollTrigger);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 ${
        isScrolled ? "scrolled" : ""
      } `}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4">
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

        <ul className="hidden large-screen md:flex items-center space-x-4">
          {NavbarLinks.map(({ id, link, label }) => (
            <li key={id} className="px-4">
              <Link
                href={link}
                className="text-lg text-white hover:text-gray-300 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}

          {status == "authenticated" && (
            <li className="">
              <img
                className="user-image rounded-full border-2 border-white hover:border-blue-500 cursor-pointer w-10 h-10"
                src={session.user.image}
                alt="User Image"
                onClick={handleImageClick}
              />
              {isPopupOpen && (
                <div className="absolute right-0 top-full mt-2">
                  <div className="bg-red-500 text-white border border-red-700 rounded shadow-md w-28">
                    <button className="py-2 px-4" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </li>
          )}

          {status == "unauthenticated" && (
            <li className="relative">
              <div className="bg-blue-500 text-white border border-red-700 rounded shadow-md w-24 flex justify-center items-center">
                <button className="flex items-center" onClick={handleSignIn}>
                  <span>Sign In</span>
                  <SiGoogle className="ml-1" />
                </button>
              </div>
            </li>
          )}
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
      <ul
        className={`absolute top-0 right-0 h-full w-full small-screen-nav shadow-lg transition duration-300 ease-in-out transform ${
          nav ? "-translate-x-0 " : "translate-x-full"
        }`}
      >
        {NavbarLinks.map(({ id, link, label }) => (
          <li key={id} className="px-4 py-3 text-lg text-white">
            <Link onClick={() => setNav(!nav)} href={link}>
              {label}
            </Link>
          </li>
        ))}

        {status === "authenticated" && (
          <li className="relative flex items-center justify-center">
            <div className="absolute -top-full mt-2 flex flex-col items-center">
              <img
                className="user-image rounded-full border-2 border-white hover:border-blue-500 cursor-pointer w-10 h-10"
                src={session.user.image}
                alt="User Image"
                onClick={handleImageClick}
              />
              {isPopupOpen && (
                <div className="bg-red-500 text-white border border-red-700 rounded shadow-md w-28 mt-2">
                  <button className="py-2 px-4" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </li>
        )}

        {status == "unauthenticated" && (
          <li className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out w-40 flex justify-center items-center"
              onClick={handleSignIn}
            >
              Sign In With{" "}
              <span>
                <SiGoogle className="ml-1" />
              </span>
            </button>{" "}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
