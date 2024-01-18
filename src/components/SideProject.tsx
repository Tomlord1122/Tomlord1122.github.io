import Link from "next/link";

export default function SideProject() {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <Link
        className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  "
        href="https://github.com/Tomlord1122/Traveler">
        Traveler
      </Link>
      <Link
        className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  "
        href="https://github.com/Tomlord1122/Tomlord1122.github.io">
        Portfolio
      </Link>
    </div>
  );
}
