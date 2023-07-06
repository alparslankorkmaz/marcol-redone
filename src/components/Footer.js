import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="bg-marcol-blue p-10 lg:p-28">
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
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <p className="text-xl lg:text-2xl mb-3 font-black uppercase tracking-wider text-white">
                portfolio
              </p>
              <div className="flex gap-1 flex-col text-lg lg:text-xl lg:font-light font-archivo capitalize text-white">
                <Link href="/">scrubbing systems</Link>
                <Link href="/">enclosures</Link>
                <Link href="/">tanks and bunds</Link>
                <Link href="/">machine guards</Link>
                <Link href="/">pipework</Link>
                <Link href="/">bespoke fabrication</Link>
                <Link href="/">installation</Link>
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
                  <Link href="/">
                    Unit 10 Southfield Road Trading Estate Nailsea, Bristol,
                    BS48 1JJ
                  </Link>
                </div>
                <div className="flex underline items-center">
                  <img
                    src="/images/icons/phone.png"
                    alt="location pin"
                    className="mx-5 w-5 h-5"
                  />
                  <p>01275 810022</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/icons/phone.png"
                    alt="location pin"
                    className="mx-5 w-5 h-5"
                  />
                  <p>01275 810033</p>
                </div>
                <div className="flex underline items-center">
                  <img
                    src="/images/icons/mail.png"
                    alt="location pin"
                    className="mx-5 w-6 h-4"
                  />
                  <Link href="/">info@marcolplastics.co.uk</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white text-center p-5">
          ©2023 Marcol Fabrications Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
}
