import { BentoGrid } from "./BentoGrid";

export default function Skill() {
  return (
    <main>
      <div className="w-1/2 h-screen grid grid-cols-3 grid-rows-3 gap-2 p-2">
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
          width={225}
          height={200}></BentoGrid>

        <BentoGrid
          className="row-span-1 col-span-1 mt-20 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/next.svg"
          width={300}
          height={100}></BentoGrid>
        <BentoGrid
          className="row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/rust.svg"
          width={320}
          height={100}></BentoGrid>
        <BentoGrid
          className=" ml-24 row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/typescript.svg"
          width={250}
          height={100}></BentoGrid>
        <BentoGrid
          className=" ml-44 row-span-1 col-span-1 hover:scale-110 transition-all  hover:bg-blue-400"
          img="/python-5.svg"
          width={250}
          height={100}></BentoGrid>
      </div>
    </main>
  );
}
