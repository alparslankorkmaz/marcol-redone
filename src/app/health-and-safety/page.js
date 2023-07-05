"use client";

import Partners from "@/components/Partners";

export default function HealthAndSafety() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/health_safety.jpg"
          alt="safety gear hanging on the wall"
          className="min-h-screen object-cover"
        />
        <h1 className="font-black lg:whitespace-nowrap lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
          health and safety
          <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
            our values
          </span>
        </h1>
      </div>
      {/* PARTNERS */}
      <Partners />
      <div className="font-archivo text-lg lg:text-xl p-10 lg:p-32">
        <p>
          Marcol Fabrications are committed to the implementation and practice
          of Health and Safety. In addition to our own Health and Safety Policy,
          which details levels of responsibility and the procedures that are in
          place for the factory, Marcol are particularly vigilant when operating
          on customers sites. Full attention is paid to customers’ own Health
          and Safety rules and regulations.
        </p>
        <br />
        <p>
          Where site induction is necessary, Marcol welcome this and ensure all
          employees attend and understand the induction training. Where site
          work is involved, prior to work commencing, a site survey is
          undertaken which includes conducting and preparing risk assessments.
          The result of the assessments leads to Method Statements being
          prepared and issued to both the customer and to those employees who
          will be involved in the contract on site. These Method Statements
          identify the work to be carried out, the possible hazards that may be
          encountered, the safe system of work to be adopted and the personal
          protective equipment that must be utilized. On a regular basis the
          site supervisor will carry out toolbox talks with all staff ensuring
          they are kept up to date with any changes to the work/environment, in
          which they are working.
        </p>
        <br />
        <p>
          All our fabricators/installers hold the “Construction Skills
          Certification Scheme Construction Related Occupation Card” and the
          “Client/Contractor National Safety Group Safety Passport”, many at
          supervisor level. They also hold a number of other qualifications to
          enable them to carry out the task of the work presented to them.
        </p>
      </div>
    </>
  );
}
