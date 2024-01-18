import SectionHeader from "@/components/SectionHeader";
import SectionFooter from "@/components/SectionFooter";
import Skill from "@/components/Skill";
import AboutMe from "@/components/AboutMe";
import SideProject from "@/components/SideProject";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center overflow-hidden">
        <SectionHeader />
        <main
          className=" w-full h-full  overflow-y-scroll  bg-gradient-to-br from-gray-200 via-slate-300 to-stone-200
        ">
          <AboutMe></AboutMe>
          {/* divider */}

          <Skill></Skill>

          <SideProject></SideProject>
        </main>

        <SectionFooter />
      </div>
    </>
  );
}
