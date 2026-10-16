import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | My Blog",
  description:
    "Tell people more about you and your blog site here: what you post, how you built it, what you learned, etc.",
};

function Page() {
  return (
    <>
      <div className="px-30 flex flex-col gap-y-10">
        <Hero
          title="About My Blog"
          description="Tell people more about you and your blog site here: what you post, how you built it, what you learned, etc."
        />
        <div className="flex items-center gap-x-10 w-[60%] mx-auto bg-[lightblue] p-8">
          <Image src="/user.svg" alt="Avatar" width={200} height={200} />
          <div>
            <h2 className="text-2xl font-bold text-center text-[#1f2d3d]">
              Learn more about the author
            </h2>
            <div className="text-[#1f2d3d] text-center py-10">
              I am a high school student who is passionate about coding and web development, as well as some game development on the side. I built this blog site to maybe share my thoughts, ideas, and projects with the world.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-10 w-[60%] mx-auto bg-[lightblue] p-8">
          <div>
            <h2 className="text-2xl font-bold text-center text-[#1f2d3d]">
              What is this blog site for?
            </h2>
            <div className="text-[#1f2d3d] text-center py-10">
              If I ever use this, it will be for posting updates about projects, sharing ideas, etc.
            </div>
          </div>
          <Image src="/user.svg" alt="Avatar" width={200} height={200} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Page;