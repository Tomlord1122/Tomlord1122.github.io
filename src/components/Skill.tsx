import { BentoGrid } from "./BentoGrid";

export default function Skill() {
  return (
    <main className="flex flex-col-reverse md:flex md:flex-row">
      <div className="w-full md:w-1/2 h-screen grid grid-cols-3 grid-rows-3 gap-2 p-2">
        <BentoGrid
          className="row-span-1 col-span-1   hover:scale-110 transition-all  hover:bg-blue-400"
          img="/c.svg"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className="row-span-1 col-span-2 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/linux-tux.svg"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className="row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/react-2.svg"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className="row-span-2 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/postgresql.svg"
          width={200}
          height={200}></BentoGrid>

        <BentoGrid
          className="row-span-1 col-span-1  hover:scale-110 transition-all  hover:bg-blue-400"
          img="/next-js.svg"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className="row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/Go.png"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className="  row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/typescript.svg"
          width={200}
          height={100}></BentoGrid>
        <BentoGrid
          className=" row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/python-5.svg"
          width={200}
          height={100}></BentoGrid>
      </div>

      {/* Experience */}
      <div className="md:w-1/2 w-3/4 mt-5 ml-5 flex flex-col justify-center  items-start  ">
        {" "}
        <section>
          <h1 className=" text-4xl font-extrabold">Experience</h1>
          {/* divider */}
          <div className="w-full h-1 bg-gray-400 my-5"></div>
          <p></p>
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
            Hewlett-Packard Company Software Engineering Intern (Jul 2024 - Now)
          </h1>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
          <p>
            In operating system department.
          </p>
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
            MediaTek System Research Assistant (Jan 2024 - Now)
          </h1>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
          <p>
            Research compiler Auto-vectorization and Analysis on ARM and RISC-V
            Architecture.
          </p>
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
            Sinotech Engineering Consultant Intern (Jul 2020 - Aug 2020)
          </h1>
          <p>
            Performing mechanical analysis in structural engineering using
            internal Dev Tools.
          </p>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
        </section>
      </div>
    </main>
  );
}
