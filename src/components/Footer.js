import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="bg-marcol-blue p-10 lg:p-28">
          <div className="container max-w-7xl mx-auto">
            <div className="lg:w-72 mx-auto lg:mx-0 h-auto mb-10 lg:mb-20">
              <Link href="/">
                <img src="/images/marcol_logo.png" alt="Marcol Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-20 lg:gap-0">
              <div className="col-span-3 lg:col-span-1">
                <p className="text-xl lg:text-2xl mb-3 font-black uppercase tracking-wider text-white">
                  quick links
                </p>
                <div className="flex gap-1 flex-col text-lg lg:text-xl lg:font-light font-archivo capitalize text-white">
                  <Link href="/">home</Link>
                  <Link href="/about-us">about us</Link>
                  <Link href="/services">services</Link>
                  <ul className="list-disc list-inside">
                    technical
                    <li>
                      <Link href="/policy-documents">policy documents</Link>
                    </li>
                    <li>
                      <Link href="/health-and-safety">health and safety</Link>
                    </li>
                  </ul>
                  <Link href="/contact-us">contact us</Link>
                  <Link href="/privacy-policy">privacy policy</Link>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <p className="text-xl lg:text-2xl mb-3 font-black uppercase tracking-wider text-white">
                  portfolio
                </p>
                <div className="flex gap-1 flex-col text-lg lg:text-xl lg:font-light font-archivo capitalize text-white">
                  <Link href={`/portfolio#scrubbing-systems`}>
                    scrubbing systems
                  </Link>
                  <Link href={`/portfolio#enclosures`}>enclosures</Link>
                  <Link href={`/portfolio#tanks-and-bunds`}>tanks and bunds</Link>
                  <Link href={`/portfolio#machine-guards`}>machine guards</Link>
                  <Link href={`/portfolio#pipework`}>pipework</Link>
                  <Link href={`/portfolio#bespoke-fabrication`}>
                    bespoke fabrication
                  </Link>
                  <Link href={`/portfolio#installation`}>installation</Link>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <p className="text-xl lg:text-2xl mb-3 font-black uppercase tracking-wider text-white">
                  get in touch
                </p>
                <div className="flex gap-4 flex-col text-lg lg:text-xl lg:font-light font-archivo text-white">
                  <div className="flex items-center">
                    <img
                      src="/images/icons/location.png"
                      alt="location pin"
                      className="mx-5 w-px-5 h-5"
                    />
                    <a
                      href="https://www.google.com/maps/place/Marcol+Fabrications+(Plastics)+Ltd/@51.438221,-2.752899,11z/data=!4m6!3m5!1s0x4871f3ad0a39d393:0xe4595afc0a3bfb7d!8m2!3d51.4382207!4d-2.7528989!16s%2Fg%2F1vfwc999?hl=en-GB&entry=ttu"
                      target="_blank"
                    >
                      Unit 10 Southfield Road Trading Estate Nailsea, Bristol,
                      BS48 1JJ
                    </a>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/images/icons/phone.png"
                      alt="phone icon"
                      className="mx-5 w-5 h-5"
                    />
                    <p>01275 810022</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/images/icons/phone.png"
                      alt="phone icon"
                      className="mx-5 w-5 h-5"
                    />
                    <p>01275 810033</p>
                  </div>
                  <div className="flex underline items-center">
                    <img
                      src="/images/icons/mail.png"
                      alt="mail icon"
                      className="mx-5 w-6 h-4"
                    />
                    <a href="mailto: info@marcolplastics.co.uk">
                      info@marcolplastics.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white">
          <div className="container max-w-7xl mx-auto flex justify-between items-center p-5">
            <p className="w-fit">©{new Date().getFullYear()} Marcol Fabrications Ltd. All rights reserved.</p>
            <div className="w-20">
              <a target="_blank" href="https://www.linkedin.com/company/marcol-fabrications-plastics-limited/?originalSubdomain=uk">
                <img src="/images/linkedin.png" className="invert" alt="linkedin logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
