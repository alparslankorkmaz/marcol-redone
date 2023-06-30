"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gradient-to-b from-black via-black to-transparent fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-28">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-14 lg:block">
              {/* LOGO */}
              <Link href="/">
                <img
                  src="/images/marcol_logo.png"
                  alt="Marcol Logo"
                  className="w-48 h-auto"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
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
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${
                isOpen
                  ? "p-12 rounded-lg lg:p-0 block bg-marcol-blue"
                  : "hidden"
              }`}
            >
              <ul className="font-black h-screen lg:h-auto items-center justify-center lg:flex text-3xl lg:text-sm lg:gap-7">
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    home
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    about us
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    services
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    portfolio
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    technical
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
