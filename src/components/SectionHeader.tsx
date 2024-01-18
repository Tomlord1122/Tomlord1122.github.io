import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function SectionHeader() {
  return (
    <section className=" w-full h-14 z-0  bg-gradient-to-r  from-[#1e1e1e] to-[#3c3c3c] flex justify-between">
      <Avatar className="ml-3 mt-2">
        <AvatarImage src="./Avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-row-reverse gap-2 mt-[6px]">
        <Link href="https://github.com/Tomlord1122">
          {" "}
          <Button className="w-22 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  border-slate-200 border-2">
            Gihub
          </Button>
        </Link>

        <Link href="https://twitter.com/LiuTOM213241">
          <Button className="w-22 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-slate-200 border-2">
            Twitter
          </Button>
        </Link>
      </div>
    </section>
  );
}
