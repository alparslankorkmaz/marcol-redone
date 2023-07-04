export default function OurServices() {
  return (
    <>
      <div className="p-5 lg:p-10 our-services bg-services bg-cover bg-no-repeat bg-center relative my-20">
        <div className="services-text bg-white p-5 lg:p-14 bg-opacity-80 ">
          <h3 className="font-black text-4xl uppercase whitespace-nowrap">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">our</span>{" "}
            services
          </h3>
          <p className="my-6 lg:my-10 font-archivo text-lg">
            Our services include Fresh designs, which will lead to material
            selection, followed by 3D drawings to the required specifications,
            then onto manufacturing in a purpose-laid-out workshop, then if
            required delivered to the site for installation completing with a
            final SAT (Site acceptance test) along with all certifications.
          </p>
          <div className="grid grid-cols-2 gap-24">
            <div className="col-span-2 lg:col-span-1">
              <div className="grid gap-5">
                <img
                  src="/images/our_services/materials.png"
                  alt="material icon"
                />
                <h6 className="font-black text-xl uppercase">materials</h6>
                <p className="font-archivo text-lg">
                  We ensure the correct material selection for your project. Our
                  in-depth material compatibility checks and documentation cover
                  CPVC, PVDF, PVC, Polypropylene, Polyethylene, and more.
                  Contact us for advice and alternative material options.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="grid gap-5">
                <img src="/images/our_services/design.png" alt="design icon" />
                <h6 className="font-black text-xl uppercase">design</h6>
                <p className="font-archivo text-lg">
                  With our expertise and technical knowledge, we bring your
                  conceptual or proven design to life. We work closely with you
                  to propose strategies, plan, manufacture, and deliver/install
                  projects according to your requirements.{" "}
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="grid gap-5">
                <img
                  src="/images/our_services/manufacture.png"
                  alt="manufacture icon"
                />
                <h6 className="font-black text-xl uppercase">manufacture</h6>
                <p className="font-archivo text-lg">
                  At the core of our business, we combine design experience with
                  a skilled workforce. Our manufacturing process shapes and
                  forges products to meet your specifications, ensuring they are
                  engineered to perfection.{" "}
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="grid gap-5">
                <img
                  src="/images/our_services/installation.png"
                  alt="installation icon"
                />
                <h6 className="font-black text-xl uppercase">installation</h6>
                <p className="font-archivo text-lg">
                  Our installation team, with Site Working Safety Passports,
                  handles repairs, chemical pipe-work installation, and complete
                  "Turnkey Projects." We cover tanks, extraction systems, dosing
                  rigs, enclosures, and interconnection pipework.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
