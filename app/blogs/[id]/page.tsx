import type { PostType } from "@/app/post/actions";
import { redirect } from "next/navigation";
import Post from "@/lib/PostModel";
import dbConnect from "@/lib/mongoose";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

async function fetchPost(id: string) {
  await dbConnect();
  const post = (await Post.findOne({ id: id })) as PostType;
  if (!post) redirect("/");
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: `${post.title} | My Blog`,
    description:
      post.content[0].slice(0, 100) +
      (post.content[0].length > 100 ? "..." : ""),
  };
}

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetchPost(id);

  return (
    <>
      <div className="flex pl-30 gap-x-20">
        <Sidebar id={id} />
        <div className="h-[calc(100vh-70px)] overflow-y-auto pr-30 w-full">
          <Hero
            title={post.title}
            description={post.date.toLocaleDateString()}
          />
          <div className="flex flex-col gap-y-10 my-10 bg-[lightblue] p-10">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-[#1f2d3d] w-220 font-sans">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer margin />
    </>
  );
}

export default Page;