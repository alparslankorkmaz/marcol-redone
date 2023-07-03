"use client";
import Link from "next/link";
import EmblaCarousel from "@/components/EmblaCarousel";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <Partners />
      <WhatWeDo />
    </main>
  );
}
