import type { PostType } from "./post/actions";
import PostModel from "@/lib/PostModel";
import dbConnect from "@/lib/mongoose";
import Hero from "@/components/Hero";
import Btn from "@/components/Btn";
import Footer from "@/components/Footer";
import Post from "@/components/Post";

export default async function Home() {
  await dbConnect();
  const posts = (
    (await PostModel.find().sort({ date: -1 }).lean()) as PostType[]
  ).slice(0, 10);

  return (
    <>
      <div className="px-30 flex flex-col gap-y-5">
        <Hero
          title="Page not found!"
          description="Sorry, the page you are looking for does not exist."
        >
          <div>
            <h2 className="text-3xl font-bold text-center text-[#1f2d3d]">
              <a href="https://www.youtube.com/@Pixeleyesd">Subscribe to Pixeleyesd</a>
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-center text-[#1f2d3d]">
              <a href="/">Home</a>
            </h2>
          </div>
        </Hero>
      </div>
      <Footer />
    </>
  );
}