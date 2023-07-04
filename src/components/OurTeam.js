export default function OurTeam() {
  return (
    <>
      <div className="p-10 lg:p-24">
        <h4 className="font-black text-4xl uppercase whitespace-nowrap">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">our</span> team
        </h4>
        <p className="my-10 font-archivo lg:text-xl">
          Our loyal and long-serving team bring a wealth of built-up knowledge
          and experience enabling us to offer an exceptionally high standard of
          work. We constantly invest in training, enabling us to provide you
          with a well-specified, high-quality product, delivered and installed
          on time and within budget.
        </p>
        <div className="grid grid-cols-3 gap-10 my-10 lg:my-20">
          <div className="col-span-3 lg:col-span-1 relative">
            <img src="/images/our_team/1.jpg" alt="Colin Vye" />
            <div className="absolute text-center border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              <p> colin vye </p>
              <p className="font-archivo font-light lg:text-lg"> founder </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 relative">
            <img src="/images/our_team/2.jpg" alt="Mark Godfrey" />
            <div className="absolute text-center border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              <p> mark godfrey </p>
              <p className="font-archivo font-light lg:text-lg"> founder </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 relative">
            <img src="/images/our_team/3.jpg" alt="Richard Baker" />
            <div className="absolute text-center border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white bottom-4 left-1/2 -translate-x-1/2 uppercase">
              <p> richard baker </p>
              <p className="font-archivo font-light lg:text-lg">
                {" "}
                project manager{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
