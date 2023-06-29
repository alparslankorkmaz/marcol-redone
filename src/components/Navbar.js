"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="absolute w-full py-14 bg-gradient-to-b from-black via-black to-transparent mx-auto px-3 lg:px-20 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/marcol_logo.png"
              alt="Marcol Logo"
              className="w-48 h-auto"
            />
          </Link>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
            >
              <svg
                className={`fill-current h-6 w-6 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-6 w-6 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:text-sm lg:gap-7 tracking-wider font-extrabold text-white">
          <Link href="/home" className="uppercase">
            home
          </Link>
          <Link href="/about-us" className="uppercase">
            about us
          </Link>
          <Link href="/services" className="uppercase">
            services
          </Link>
          <Link href="/portfolio" className="uppercase">
            portfolio
          </Link>
          <Link href="/technical" className="uppercase">
            technical
          </Link>
          <Link href="/contact" className="uppercase">
            contact
          </Link>
        </div>
      </nav>
    </>
  );
}
