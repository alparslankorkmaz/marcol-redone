import Link from "next/link";

export default function WhatWeDo() {
  return (
    <>
      <div className="bg-white p-10 lg:p-24">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">what</span> we do
        </h2>
        <p className="my-10">
          Marcol manufactures innovative plastic products for diverse
          industries, tailored to operate in various environments. Based in
          Bristol, our facilities utilise advanced welding and fusion technology
          for large-scale projects and offer short-run batch production.
        </p>
        <p>
          Our skilled staff fabricate complex shapes, promoting ongoing
          training. We provide design, manufacturing, and installation services,
          including "Turnkey Projects." Our engineers collect on-site data and
          offer pre/post-tender meetings and HAZOP discussions. Contact us for
          cost-effective, quality products delivered or installed.
        </p>
      </div>
      <div className="portfolio grid grid-cols-4 gap-10 p-10 lg:p-20">
        <div className="scrubbing-systems col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img
              src="/images/what_we_do/scrubbing_systems.jpg"
              alt="scrubbing systems"
            />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              scrubbing systems
            </div>
          </Link>
        </div>
        <div className="enclosures col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img src="/images/what_we_do/enclosures.jpg" alt="enclosures" />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              enclosures
            </div>
          </Link>
        </div>
        <div className="tanks-bunds col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img
              src="/images/what_we_do/tanks_bunds.jpg"
              alt="tanks and bunds"
            />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              tanks & bunds
            </div>
          </Link>
        </div>
        <div className="extraction-systems col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img
              src="/images/what_we_do/ducting_extraction.jpg"
              alt="extraction systems"
            />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              ducting & <span className="block">extraction systems</span>
            </div>
          </Link>
        </div>
        <div className="machine-guards col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img
              src="/images/what_we_do/machine_guards.jpg"
              alt="machine guards"
            />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              machine guards
            </div>
          </Link>
        </div>
        <div className="pipework col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img src="/images/what_we_do/pipework.jpg" alt="pipework" />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              pipework
            </div>
          </Link>
        </div>
        <div className="bespoke-fabrication col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img
              src="/images/what_we_do/bespoke_fabrication.jpg"
              alt="bespoke fabrication"
            />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              bespoke fabrication
            </div>
          </Link>
        </div>
        <div className="installation col-span-4 lg:col-span-1">
          <Link href="/" className="relative">
            <img src="/images/what_we_do/installation.jpg" alt="installation" />
            <div className="absolute border-b-4 p-3 z-10 font-black text-3xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              installation
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
