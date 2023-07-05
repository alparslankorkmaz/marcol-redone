"use client";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

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
      <div className="grid grid-cols-2 p-10 lg:p-20 gap-10 lg:gap-20">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">mat</span>
            erials
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              With years of experience in fabricating Homo/Copolymer Polyprop,
              PVC, PVDF, ABS, HDPE, and CPVC, we advise on suitable materials
              for your application. We specialize in manufacturing and
              installing chemical-resistant polymers for pipework, tanks, and
              ducting systems. Our welding techniques include hot gas welding,
              extrusion welding, heat socket weld, butt fusion, infrared welding
              (I/F), and bead and crevice-free welding for pipework. We source
              materials from reputable suppliers and plan lead times
              accordingly.
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">des</span>
            ign
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              We provide a comprehensive design service for schemes, drawings,
              and specifications. This covers materials, manufacturing,
              installation methods, and adherence to relevant standards.
              Throughout the design stage, we collaborate closely with you,
              offering continuous feedback and enhancements.{" "}
            </p>
            <br />
            <p>
              Our skilled engineers are available to visit your workplace or
              site, whether for a simple pipe installation or a complex
              manufacturing project.
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">man</span>
            ufacture
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              We accept customers' drawings or provide our own 3D manufacturing
              drawings. With 30+ years of experience, we deliver quality and
              workmanship. Our use of ITPs and QCPs enables project monitoring,
              and a FAT is conducted at the project's end.{" "}
            </p>
            <br />
            <p>
              For cost savings, small bespoke systems can be skid-mounted before
              delivery. We offer drawings, including P&IDs, for approval.
            </p>
            <br />
            <p>
              Skid systems pre-install and test equipment off-site, reducing
              on-site installation costs.
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">inst</span>
            allation
          </h2>
          <div className="font-archivo text-lg lg:text-xl">
            <p>
              Our qualified engineers work in our factory and on customer sites.
              An equipped installation team travels nationwide and
              internationally. All staff are fully qualified, trained, and
              adhere to RAMs. Site-specific requirements are included in project
              documentation.{" "}
            </p>
            <br />
            <p>
              Health and Safety is paramount. Employees receive training and
              recognized qualifications. Our fabricators/installers hold CSCS
              cards and CCNSG safety passports, with supervisors being first aid
              qualified.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 lg:p-20">
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
