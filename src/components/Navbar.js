import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="absolute w-full py-14 bg-gradient-to-b from-black via-black to-transparent mx-auto px-3 lg:px-36 flex justify-between items-center">
        <div>
          <Link href="/">
            <img
              src="/images/marcol_logo.png"
              alt="Marcol Logo"
              className="w-48 h-auto"
            />
          </Link>
        </div>
        <div className="flex gap-8 tracking-wider font-extrabold text-white">
          <Link href="/home" className="uppercase">
            home
          </Link>
          <Link href="/about-us" className="uppercase">
            about us
          </Link>
          <Link href="/services" className="uppercase">
            services
          </Link>
          <Link href="/portfolio" className="uppercase">
            portfolio
          </Link>
          <Link href="/technical" className="uppercase">
            technical
          </Link>
          <Link href="/contact" className="uppercase">
            contact
          </Link>
        </div>
      </header>
    </>
  );
}
