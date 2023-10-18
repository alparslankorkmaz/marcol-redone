import Partners from "@/components/Partners";

export const metadata = {
  title: "Health and Safety",
  description: "Marcol Plastics prioritizes health and safety in its operations. Learn more about the company's commitment to maintaining a safe working environment and its implementation of health and safety protocols.",
};


export default function HealthAndSafety() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/health-and-safety.webp"
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
      <div className="font-archivo text-lg lg:text-xl p-10 lg:p-32 container max-w-7xl mx-auto">
        <p>
          Marcol Fabrications are committed to the implementation and practice
          of Health and Safety. In addition to our own Health and Safety Policy. Marcol are particularly vigilant when operating
          on customers sites. Full attention is paid to customers’ own Health
          and Safety rules and regulations.
        </p>
        <br />
        <p>
          Following site inductions, we are fully committed to updating method statements and risk assessments associated with the work if needs be in an ever present mindset of ‘safety 1st and always’. On a regular basis the
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
