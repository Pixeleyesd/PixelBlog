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
          title="Welcome to My Blog!"
          description="This is a super interesting blog with all kinds of cool blog posts and stuff for people to check out!"
        >
          <div className="flex gap-x-5">
            <Btn href="/blogs" text="Read blogs" primary />
            <Btn href="/about" text="Learn more" />
          </div>
        </Hero>
        <div>
          <h2 className="text-2xl font-bold text-center text-white">
            Recent Posts
          </h2>
          <div className="flex flex-wrap justify-center gap-3 py-10">
            {posts.length > 0 ? (
              posts.map((p) => <Post key={p.id} post={p} />)
            ) : (
              <div className="text-zinc-300 text-center">No posts found :(</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
