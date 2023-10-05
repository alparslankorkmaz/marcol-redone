import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

export const metadata = {
  title: "Services",
  description: "Marcol manufactures innovative plastic products for diverse industries, tailored to operate in various environments. Based in Bristol, our facilities utilise advanced welding and fusion technology for large-scale projects and offer short-run batch production.",
};


export default function Services() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/services.jpg"
          alt="blueprint on paper"
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
      <div className="grid container max-w-7xl mx-auto grid-cols-2 p-10 lg:p-20 gap-10 lg:gap-20">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/images/our_services/materials.png"
            alt="material icon"
          />
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">mat</span>
            erials
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              We ensure the correct material selection for your project. Our in-depth material compatibility checks and documentation cover CPVC, PVDF, PVC, Polypropylene, Polyethylene, and more. Contact us for advice and alternative material options.            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img src="/images/our_services/design.png" alt="design icon" />
          <h2 className="font-black text-4xl uppercase my-10">
            <span className="border-b-4 border-marcol-blue py-2">des</span>
            ign
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              With our expertise and technical knowledge, we bring your conceptual or proven design to life. We work closely with you to propose strategies, plan, manufacture, and deliver/install projects according to your requirements.            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/images/our_services/manufacture.png"
            alt="manufacture icon"
          />
          <h2 className="font-black text-4xl uppercase my-10">
            <span className="border-b-4 border-marcol-blue py-2">man</span>
            ufacture
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              At the core of our business, we combine design experience with a skilled workforce. Our manufacturing process shapes and forges products to meet your specifications, ensuring they are engineered to perfection.            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/images/our_services/installation.png"
            alt="installation icon"
          />
          <h2 className="font-black text-4xl uppercase my-10">
            <span className="border-b-4 border-marcol-blue py-2">inst</span>
            allation
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              Our installation team, with Site Working Safety Passports, handles repairs, chemical pipe-work installation, and complete "Turnkey Projects." We cover tanks, extraction systems, dosing rigs, enclosures, and interconnection pipework.            </p>
          </div>
        </div>
      </div>
      <div className="p-10 lg:p-20 container max-w-7xl mx-auto">
        <h2 className="font-black text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">mod</span>
          ifications, service and repairs
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Changes and maintenance are crucial for project success. Routine
            maintenance ensures safety and uninterrupted operation. It helps
            identify hazards, preventing costly repairs. With our industry
            experience, we offer on-site inspections, reports, and
            recommendations for preventive actions and improvements.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
