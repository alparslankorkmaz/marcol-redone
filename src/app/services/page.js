"use client";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

export default function Services() {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src="/images/services.jpg"
            alt="closeup pipe"
            className="min-h-screen object-cover"
          />
          <h1 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
            services
            <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
              {" "}
              get to know what we do{" "}
            </span>{" "}
          </h1>
        </div>
        {/* PARTNERS */}
        <Partners />
        {/* WHAT WE DO */}
        <WhatWeDo />
      </div>
    </>
  );
}
