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
              Talk about who you are, your interests and skills, and just
              anything you want your readers to know about you.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-10 w-[60%] mx-auto bg-[lightblue] p-8">
          <div>
            <h2 className="text-2xl font-bold text-center text-[#1f2d3d]">
              What is this blog site for?
            </h2>
            <div className="text-[#1f2d3d] text-center py-10">
              Tell your readers why you started the blog, what kind of stuff you
              put on it, and how often you publish new posts.
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