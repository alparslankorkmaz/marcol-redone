"use client";
import EmblaCarousel from "@/components/EmblaCarousel";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <Partners />
      <div className="p-10 lg:p-24 container max-w-7xl mx-auto">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">what</span> we do
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Marcol manufactures innovative plastic products for diverse industries, tailored to operate in various environments. Our facilities use advanced welding and fusion technology for large-scale projects and offer short-run batch production.
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Our skilled staff are able to fabricate complex products of all shapes and scale from a massive range of available and suitable plastics materials. With ongoing training and personal development, we can remain confident in our team to stay abreast of all innovative and progressive methods of production.
        </p>
        <p className="font-archivo text-lg lg:text-xl">
          We have experience in various industries including chemical, utilities, nuclear, aerospace, pharmaceutical, steel, semiconductor, and construction. Our accumulated expertise enables us to provide solutions to complex problems.        </p>
      </div>
      <WhatWeDo />
    </main>
  );
}
