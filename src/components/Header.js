"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@headlessui/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gradient-to-b from-black via-slate-950 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-28">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-10 lg:block">
              {/* LOGO */}
              <Link href="/">
                <img
                  src="/images/marcol-logo.png"
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
                    className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"
                      }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                  <svg
                    className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"
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
              className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${isOpen
                ? "p-12 rounded-lg lg:p-0 block bg-marcol-blue lg:bg-transparent"
                : "hidden"
                }`}
            >
              <ul className="font-black h-screen lg:h-auto items-center justify-center lg:flex text-3xl lg:text-sm lg:gap-7">
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    home
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="/about-us" onClick={() => setIsOpen(false)}>
                    about us
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    services
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 relative tracking-wider text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Menu>
                    <Menu.Button>PORTFOLIO ˅</Menu.Button>
                    <Menu.Items className="flex w-full z-10 font-black font-light overflow-y-auto h-60 lg:overflow-y-hidden lg:h-fit flex-col gap-3 p-5 bg-marcol-blue text-start text-white absolute border border-blue-200 lg:border-none lg:w-64">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#scrubbing-systems`}
                            onClick={() => setIsOpen(false)}
                          >
                            Scrubbing Systems
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#enclosures`}
                            onClick={() => setIsOpen(false)}
                          >
                            Enclosures
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#tanks-and-bunds`}
                            onClick={() => setIsOpen(false)}
                          >
                            Tanks & Bunds
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#ducting-and-extraction-systems`}
                            onClick={() => setIsOpen(false)}
                          >
                            Ducting & Extraction Systems
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#machine-guards`}
                            onClick={() => setIsOpen(false)}
                          >
                            Machine Guards
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#pipework`}
                            onClick={() => setIsOpen(false)}
                          >
                            Pipework
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#bespoke-fabrication`}
                            onClick={() => setIsOpen(false)}
                          >
                            Bespoke Fabrication
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href={`/portfolio#installation`}
                            onClick={() => setIsOpen(false)}
                          >
                            Installation
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>{" "}
                </li>
                <li className="mt-6 lg:mt-0 relative tracking-wider text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Menu>
                    <Menu.Button>TECHNICAL ˅</Menu.Button>
                    <Menu.Items className="flex w-full font-black font-light overflow-y-auto h-32 lg:overflow-y-hidden lg:h-fit flex-col gap-3 p-5 bg-marcol-blue text-start text-white absolute border border-blue-200 lg:border-none lg:w-64">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href="/policy-documents"
                            onClick={() => setIsOpen(false)}
                          >
                            Policy Documents
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "border-b border-white"}`}
                            href="/health-and-safety"
                            onClick={() => setIsOpen(false)}
                          >
                            Health and Safety
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>{" "}
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="/news" onClick={() => setIsOpen(false)}>
                    news
                  </Link>
                </li>
                <li className="mt-6 lg:mt-0 tracking-wider uppercase text-white text-center  lg:hover:text-marcol-blue lg:hover:bg-transparent">
                  <Link href="/contact-us" onClick={() => setIsOpen(false)}>
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
