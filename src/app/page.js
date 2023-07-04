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
      <WhatWeDo />
      <OurServices />
      <OurTeam />
    </main>
  );
}
