import Link from "next/link";

export default function WhatWeDo() {
  return (
    <>
      <div className="portfolio grid grid-cols-4 gap-10 p-10 lg:p-20">
        <div className="scrubbing-systems flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#scrubbing-systems`} className="relative">
            <img
              src="/images/what_we_do/scrubbing_systems.jpg"
              alt="scrubbing systems"
            />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              scrubbing systems
            </div>
          </Link>
        </div>
        <div className="enclosures flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#enclosures`} className="relative">
            <img src="/images/what_we_do/enclosures.jpg" alt="enclosures" />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              enclosures
            </div>
          </Link>
        </div>
        <div className="tanks-bunds flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#tanks-and-bunds`} className="relative">
            <img
              src="/images/what_we_do/tanks_bunds.jpg"
              alt="tanks and bunds"
            />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              tanks & bunds
            </div>
          </Link>
        </div>
        <div className="extraction-systems flex justify-center col-span-4 lg:col-span-1">
          <Link
            href={`/portfolio#ducting-and-extraction-systems`}
            className="relative"
          >
            <img
              src="/images/what_we_do/ducting_extraction.jpg"
              alt="extraction systems"
            />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              ducting & <span className="block">extraction systems</span>
            </div>
          </Link>
        </div>
        <div className="machine-guards flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#machine-guards`} className="relative">
            <img
              src="/images/what_we_do/machine_guards.jpg"
              alt="machine guards"
            />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              machine guards
            </div>
          </Link>
        </div>
        <div className="pipework flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#pipework`} className="relative">
            <img src="/images/what_we_do/pipework.jpg" alt="pipework" />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              pipework
            </div>
          </Link>
        </div>
        <div className="bespoke-fabrication flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#bespoke-fabrication`} className="relative">
            <img
              src="/images/what_we_do/bespoke_fabrication.jpg"
              alt="bespoke fabrication"
            />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              bespoke fabrication
            </div>
          </Link>
        </div>
        <div className="installation flex justify-center col-span-4 lg:col-span-1">
          <Link href={`/portfolio#installation`} className="relative">
            <img src="/images/what_we_do/installation.jpg" alt="installation" />
            <div className="absolute border-b-4 p-3 font-black text-xl lg:text-base tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              installation
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
