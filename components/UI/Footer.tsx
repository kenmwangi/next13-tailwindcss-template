import React from "react";
import Link from "next/link";
import { BiLogoTwitter, BiLogoFacebook, BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-200">
      <section className="md:flex md:items-center md:justify-between py-4 md:py-8 ">
        {/* Socials */}

        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <Link
            href="/"
            className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
            aria-label="Twitter"
          >
            <BiLogoTwitter />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
            aria-label="Facebook"
          >
            <BiLogoFacebook />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
            aria-label="Github"
          >
            <BiLogoGithub />
          </Link>
        </ul>
        {/* Copyright Note */}
        <p className="text-sm text-gray-600 mr-4">
          &copy; Simple Cruip. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
