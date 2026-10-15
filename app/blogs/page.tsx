import type { Metadata } from "next";
import type { PostType } from "../post/actions";
import Post from "@/lib/PostModel";
import dbConnect from "@/lib/mongoose";
import Hero from "@/components/Hero";
import Posts from "./Posts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog Posts | My Blog",
  description:
    "You can view, filter, search, and browse all the published blog posts on this page.",
};

async function Page() {
  await dbConnect();
  const allPosts = (await Post.find().sort({ date: -1 }).lean()) as PostType[];

  return (
    <>
      <div className="px-30">
        <Hero
          title="Blog Posts"
          description="You can view, filter, search, and browse all the published blog posts on this page."
        />
        <Posts posts={allPosts} />
      </div>
      <Footer />
    </>
  );
}
export default Page;
