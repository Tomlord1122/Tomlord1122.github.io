import Image from "next/image";
export default function AboutMe() {
  return (
    <div className=" justify-between h-screen  md:flex">
      <div className="flex flex-col justify-center items-center ml-10">
        <div className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black">
          Hi, I&apos;m Tom
        </div>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle">
          I&apos;m a software engineer
        </div>
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle ">
          Study at NTU
        </div>
        <div className=" text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle ">
          CSIE @ National Taiwan University
        </div>
      </div>
      <Image
        className="  rounded-full border-gray-200  shadow-md shadow-black  border-2"
        src="/Profile.jpg"
        alt="Avatar"
        width={900}
        height={1200}></Image>

      {/* Write a introduction */}
    </div>
  );
}
