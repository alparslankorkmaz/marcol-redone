"use client";
import Link from "next/link";
import EmblaCarousel from "@/components/EmblaCarousel";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <Partners />
      <div className="p-10 lg:p-24">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">what</span> we do
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Marcol manufactures innovative plastic products for diverse
          industries, tailored to operate in various environments. Based in
          Bristol, our facilities utilise advanced welding and fusion technology
          for large-scale projects and offer short-run batch production.
        </p>
        <p className="font-archivo text-lg lg:text-xl">
          Our skilled staff fabricate complex shapes, promoting ongoing
          training. We provide design, manufacturing, and installation services,
          including "Turnkey Projects." Our engineers collect on-site data and
          offer pre/post-tender meetings and HAZOP discussions. Contact us for
          cost-effective, quality products delivered or installed.
        </p>
      </div>
      <WhatWeDo />
      <OurServices />
      <OurTeam />
    </main>
  );
}
