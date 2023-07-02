import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Container from "../Container";
import { BiLogoTwitter, BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import Logo from "./Logo";

const resources = [
  { id: uuidv4(), title: "Documentation", href: "/" },
  { id: uuidv4(), title: "Tutorials & Guides", href: "/" },
  { id: uuidv4(), title: "Blog", href: "/" },
  { id: uuidv4(), title: "Support Center", href: "/" },
  { id: uuidv4(), title: "Partners", href: "/" },
];
const products = [
  { id: uuidv4(), title: "Web Studio", href: "/" },
  { id: uuidv4(), title: "Dynamic Box", href: "/" },
  { id: uuidv4(), title: "Programming Forms", href: "/" },
  { id: uuidv4(), title: "Command-line", href: "/" },
  { id: uuidv4(), title: "Integrations", href: "/" },
];
const company = [
  { id: uuidv4(), title: "Home", href: "/" },
  { id: uuidv4(), title: "About Us", href: "/" },
  { id: uuidv4(), title: "Company Values", href: "/" },
  { id: uuidv4(), title: "Pricing", href: "/" },
  { id: uuidv4(), title: "Privacy Policy", href: "/" },
];
export default function Footer() {
  return (
    <footer>
      <Container>
        {/* Top Area */}
        <section className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>{" "}
              .{" "}
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Products */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            {products.map((product) => {
              const { id, href, title } = product;
              return (
                <ul className="text-sm" key={id}>
                  <li className="mb-2">
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      {title}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Resources */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            {resources.map((product) => {
              const { id, href, title } = product;
              return (
                <ul className="text-sm" key={id}>
                  <li className="mb-2">
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      {title}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Company */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            {company.map((product) => {
              const { id, href, title } = product;
              return (
                <ul className="text-sm" key={id}>
                  <li className="mb-2">
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      {title}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>

          {/* Email Subscribe */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-gray-800 font-medium mb-2">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news & articles to your inbox every month
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label htmlFor="newsletter" className="block text-sm sr-only">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Bottom Area */}
        <section className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Socials */}

          <ul className="flex gap-4 mb-4 md:order-1 md:ml-4 md:mb-0">
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
      </Container>
    </footer>
  );
}
