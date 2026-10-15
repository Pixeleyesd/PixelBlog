import type { PostType } from "@/app/post/actions";
import Post from "@/lib/PostModel";
import dbConnect from "@/lib/mongoose";
import Link from "next/link";

async function Sidebar({ id }: { id: string }) {
  await dbConnect();
  const posts: PostType[] = await Post.find();

  return (
    <nav className="border-r-2 border-zinc-700 flex flex-col gap-y-3 py-5 pr-3 w-80 h-[calc(100vh-70px)] overflow-y-auto">
      <h2 className="text-white font-bold text-lg text-center">
        My Blog Posts
      </h2>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blogs/${post.id}`}
          className={`px-4 py-2 rounded hover:bg-zinc-900 text-zinc-300 ${id === post.id && "font-bold bg-zinc-900"}`}
        >
          {post.title}
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
