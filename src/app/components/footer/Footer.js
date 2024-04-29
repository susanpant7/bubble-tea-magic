import React from "react";
import { LuFacebook } from "react-icons/lu";
import { GrInstagram } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2024 Bubble Tea Magic. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="duration-300 ease-in-out transform hover:scale-110"
              >
                <LuFacebook />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="duration-300 ease-in-out transform hover:scale-110"
              >
                <GrInstagram />
                <span className="sr-only">Instagram page</span>
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="duration-300 ease-in-out transform hover:scale-110"
              >
                <SiTiktok />
                <span className="sr-only">Tiktok page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
